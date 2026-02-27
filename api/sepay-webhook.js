const db = require('./_db');

/**
 * SePay Webhook Endpoint
 * Receives POST from SePay when a new bank transaction occurs.
 * 
 * SePay payload example:
 * {
 *   "id": 93163,
 *   "gateway": "BIDV",
 *   "transactionDate": "2024-07-06 10:30:00",
 *   "accountNumber": "1490294222",
 *   "code": null,
 *   "content": "TaNang 0703 NguyenA coc",
 *   "transferType": "in",
 *   "transferAmount": 1000000,
 *   "accumulated": 5000000,
 *   "subAccount": null,
 *   "referenceCode": "FT24188...",
 *   "description": "..."
 * }
 */
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    // 1. Validate API Key
    const authHeader = req.headers['authorization'] || '';
    const expectedKey = process.env.SEPAY_API_KEY;

    if (expectedKey) {
        const providedKey = authHeader.replace('Apikey ', '').replace('Bearer ', '').trim();
        if (providedKey !== expectedKey) {
            console.warn('⚠️ SePay Webhook: Invalid API Key');
            return res.status(401).json({ error: 'Unauthorized' });
        }
    }

    try {
        const payload = req.body;
        console.log('📥 SePay Webhook received:', JSON.stringify(payload));

        // 2. Extract transaction info
        const {
            id: sepayTransactionId,
            gateway,
            transactionDate,
            accountNumber,
            content: transferContent,
            transferType,
            transferAmount,
            description
        } = payload;

        // Only process "money in" transactions
        if (transferType && transferType !== 'in') {
            console.log('⏭️ Skipping non-incoming transaction');
            return res.status(200).json({ success: true, message: 'Skipped: not incoming' });
        }

        const amount = parseInt(transferAmount) || 0;
        if (amount <= 0) {
            return res.status(200).json({ success: true, message: 'Skipped: zero amount' });
        }

        // 3. Check for duplicate transaction
        const { rows: existingTx } = await db.query(
            'SELECT id FROM payment_transactions WHERE sepay_transaction_id = $1',
            [String(sepayTransactionId)]
        );
        if (existingTx.length > 0) {
            console.log('⏭️ Duplicate transaction, skipping');
            return res.status(200).json({ success: true, message: 'Duplicate' });
        }

        // 4. Match booking by transfer content
        // Transfer content format: "TourName Date CustomerName coc/full"
        // We search bookings to find the best match
        const searchText = (transferContent || description || '').toLowerCase().replace(/[^a-z0-9\s]/gi, '');

        let matchedBooking = null;
        let paymentType = 'deposit';

        // Get all active bookings
        const { rows: bookings } = await db.query(
            `SELECT * FROM bookings WHERE status IN ('Chờ cọc', 'Chờ xác nhận cọc', 'Đã cọc') ORDER BY created_at DESC`
        );

        // Try to match by name + tour keywords
        for (const booking of bookings) {
            const bookingName = (booking.name || '').toLowerCase().replace(/\s+/g, '');
            const bookingTour = (booking.tour || '').split('-')[0].trim().toLowerCase().replace(/\s+/g, '');

            // Check if transfer content contains customer name parts
            const nameParts = bookingName.split('');
            const nameMatch = bookingName.length >= 3 && searchText.replace(/\s/g, '').includes(bookingName);
            const tourMatch = bookingTour.length >= 2 && searchText.replace(/\s/g, '').includes(bookingTour);

            if (nameMatch || (tourMatch && bookingName.length >= 2)) {
                matchedBooking = booking;
                // Determine if this is deposit or full payment
                if (searchText.includes('full')) {
                    paymentType = 'full';
                } else {
                    paymentType = 'deposit';
                }
                break;
            }
        }

        // 5. Save transaction regardless of match
        const txResult = await db.query(
            `INSERT INTO payment_transactions 
                (booking_id, sepay_transaction_id, amount, transfer_content, gateway, transaction_date, account_number, payment_type, raw_data)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
             RETURNING *`,
            [
                matchedBooking ? matchedBooking.id : null,
                String(sepayTransactionId),
                amount,
                transferContent || description || '',
                gateway || 'BIDV',
                transactionDate ? new Date(transactionDate) : new Date(),
                accountNumber || '',
                paymentType,
                JSON.stringify(payload)
            ]
        );

        console.log('💾 Transaction saved:', txResult.rows[0]?.id);

        // 6. Update booking status if matched
        if (matchedBooking) {
            const currentStatus = matchedBooking.status;
            const totalPrice = parseInt(matchedBooking.total_price) || 0;
            const currentDeposit = parseInt(matchedBooking.deposit) || 0;

            let newStatus = currentStatus;
            let newDeposit = currentDeposit;

            if (paymentType === 'deposit' && (currentStatus === 'Chờ cọc' || currentStatus === 'Chờ xác nhận cọc')) {
                newStatus = 'Đã cọc';
                newDeposit = amount;
            } else if (paymentType === 'full' && currentStatus === 'Đã cọc') {
                newStatus = 'Hoàn tất';
                newDeposit = currentDeposit + amount;
            } else if (amount >= totalPrice && totalPrice > 0) {
                // Full payment in one go
                newStatus = 'Hoàn tất';
                newDeposit = amount;
            }

            await db.query(
                'UPDATE bookings SET status = $1, deposit = $2 WHERE id = $3',
                [newStatus, newDeposit, matchedBooking.id]
            );

            console.log(`✅ Booking #${matchedBooking.id} updated: ${currentStatus} → ${newStatus} (${amount.toLocaleString()}đ)`);
        } else {
            console.warn('⚠️ No matching booking found for:', transferContent);
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('❌ SePay Webhook Error:', error);
        return res.status(200).json({ success: true }); // Always return 200 to SePay
    }
};
