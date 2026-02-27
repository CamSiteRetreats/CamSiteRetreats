const db = require('./_db');

// Helper: remove Vietnamese diacritics → lowercase ASCII
function normalizeVN(str) {
    return (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '').trim();
}

/**
 * Unified Payment API
 * Routes by query param "action":
 *   GET  /api/payment?action=link&id=XX     → Booking info for payment page
 *   POST /api/payment?action=webhook        → SePay webhook callback
 *   GET  /api/payment?action=status&id=XX   → Poll payment status
 */
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();

    const action = req.query.action || '';

    try {
        switch (action) {
            case 'link':
                return handlePaymentLink(req, res);
            case 'webhook':
                return handleSepayWebhook(req, res);
            case 'status':
                return handlePaymentStatus(req, res);
            default:
                return res.status(400).json({ error: 'Missing or invalid action. Use: link, webhook, status' });
        }
    } catch (error) {
        console.error('Payment API Error:', error);
        return res.status(500).json({ error: error.message });
    }
};

// ============================================================
// ACTION: link — Return booking info for payment page
// ============================================================
async function handlePaymentLink(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'GET only' });

    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'Booking ID is required' });

    const { rows } = await db.query('SELECT * FROM bookings WHERE id = $1', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Booking not found' });

    const booking = rows[0];
    const totalPrice = parseInt(booking.total_price) || 0;
    const deposit = parseInt(booking.deposit) || 0;
    const remaining = totalPrice - deposit;

    const needsDeposit = deposit === 0 || booking.status === 'Chờ cọc' || booking.status === 'Chờ xác nhận cọc';
    const paymentType = needsDeposit ? 'deposit' : 'remaining';
    const amountDue = needsDeposit ? 1000000 : remaining;

    // Build transfer content: tour date name coc/full (lowercase, no diacritics)
    const cleanTour = normalizeVN((booking.tour || 'Tour').split('-')[0].trim());
    const cleanDate = (booking.date || '').replace(/\//g, '');
    const cleanName = normalizeVN(booking.name || 'khach');
    const payLabel = needsDeposit ? 'coc' : 'full';
    const transferContent = `${cleanTour} ${cleanDate} ${cleanName} ${payLabel}`;

    const isPaid = booking.status === 'Đã cọc' || booking.status === 'Hoàn tất' || booking.status === 'Hoàn thành';

    return res.status(200).json({
        id: booking.id,
        name: booking.name,
        phone: booking.phone,
        tour: booking.tour,
        date: booking.date,
        status: booking.status,
        totalPrice,
        deposit,
        remaining,
        amountDue,
        paymentType,
        transferContent,
        isPaid
    });
}

// ============================================================
// ACTION: webhook — Receive SePay transaction callback
// ============================================================
async function handleSepayWebhook(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

    // Validate API Key
    const authHeader = req.headers['authorization'] || '';
    const expectedKey = process.env.SEPAY_API_KEY;
    const providedKey = authHeader.replace('Apikey ', '').replace('Bearer ', '').trim();
    console.log('🔑 Webhook called. Auth match:', providedKey === expectedKey);
    if (expectedKey && providedKey !== expectedKey) {
        console.warn('⚠️ API Key mismatch! Provided:', providedKey.substring(0, 8) + '...');
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const payload = req.body;
    console.log('📥 SePay Webhook received:', JSON.stringify(payload));

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

    // Only process "money in"
    if (transferType && transferType !== 'in') {
        return res.status(200).json({ success: true, message: 'Skipped: not incoming' });
    }

    const amount = parseInt(transferAmount) || 0;
    if (amount <= 0) {
        return res.status(200).json({ success: true, message: 'Skipped: zero amount' });
    }

    // Check duplicate
    const { rows: existingTx } = await db.query(
        'SELECT id FROM payment_transactions WHERE sepay_transaction_id = $1',
        [String(sepayTransactionId)]
    );
    if (existingTx.length > 0) {
        return res.status(200).json({ success: true, message: 'Duplicate' });
    }

    // Match booking by transfer content
    // Normalize: remove Vietnamese diacritics → lowercase → remove extra spaces
    function normalizeVN(str) {
        return (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
    }

    const searchText = normalizeVN(transferContent || description || '');
    const searchNoSpace = searchText.replace(/\s/g, '');
    console.log('🔍 Normalized search:', searchText, '→', searchNoSpace);

    let matchedBooking = null;
    let paymentType = 'deposit';

    const { rows: bookings } = await db.query(
        `SELECT * FROM bookings WHERE status IN ('Chờ cọc', 'Chờ xác nhận cọc', 'Đã cọc') ORDER BY created_at DESC`
    );

    // Strategy 1: Try matching by booking ID in transfer content (e.g., "CSR72" or just "72")
    for (const booking of bookings) {
        const idStr = String(booking.id);
        if (searchText.includes('csr' + idStr) || searchText.includes('id' + idStr)) {
            matchedBooking = booking;
            break;
        }
    }

    // Strategy 2: Match by customer name + tour name
    if (!matchedBooking) {
        for (const booking of bookings) {
            const bookingName = normalizeVN(booking.name).replace(/\s/g, '');
            const bookingTour = normalizeVN((booking.tour || '').split('-')[0].trim()).replace(/\s/g, '');

            const nameMatch = bookingName.length >= 3 && searchNoSpace.includes(bookingName);
            const tourMatch = bookingTour.length >= 2 && searchNoSpace.includes(bookingTour);

            console.log(`  Check #${booking.id}: name="${bookingName}" tour="${bookingTour}" nameMatch=${nameMatch} tourMatch=${tourMatch}`);

            if (nameMatch && tourMatch) {
                matchedBooking = booking;
                break;
            } else if (nameMatch || tourMatch) {
                matchedBooking = booking;
                break;
            }
        }
    }

    // Determine payment type from transfer content
    if (matchedBooking) {
        paymentType = searchText.includes('full') ? 'full' : 'deposit';
    }

    // Save transaction
    await db.query(
        `INSERT INTO payment_transactions 
            (booking_id, sepay_transaction_id, amount, transfer_content, gateway, transaction_date, account_number, payment_type, raw_data)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
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

    // Update booking status if matched
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
            newStatus = 'Hoàn tất';
            newDeposit = amount;
        }

        await db.query(
            'UPDATE bookings SET status = $1, deposit = $2 WHERE id = $3',
            [newStatus, newDeposit, matchedBooking.id]
        );

        console.log(`✅ Booking #${matchedBooking.id}: ${currentStatus} → ${newStatus} (${amount.toLocaleString()}đ)`);
    } else {
        console.warn('⚠️ No matching booking for:', transferContent);
    }

    return res.status(200).json({ success: true });
}

// ============================================================
// ACTION: status — Poll payment status (for real-time UI)
// ============================================================
async function handlePaymentStatus(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'GET only' });
    res.setHeader('Cache-Control', 'no-cache, max-age=0');

    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'Booking ID is required' });

    const { rows: bookingRows } = await db.query('SELECT status, deposit, total_price FROM bookings WHERE id = $1', [id]);
    if (bookingRows.length === 0) return res.status(404).json({ error: 'Booking not found' });

    const booking = bookingRows[0];
    const status = booking.status;

    const { rows: txRows } = await db.query(
        'SELECT amount, created_at, payment_type FROM payment_transactions WHERE booking_id = $1 ORDER BY created_at DESC LIMIT 1',
        [id]
    );

    const isPaid = status === 'Đã cọc' || status === 'Hoàn tất' || status === 'Hoàn thành';
    const latestTx = txRows[0] || null;

    return res.status(200).json({
        isPaid,
        status,
        paidAmount: latestTx ? latestTx.amount : 0,
        paidAt: latestTx ? latestTx.created_at : null,
        paymentType: latestTx ? latestTx.payment_type : null,
        deposit: parseInt(booking.deposit) || 0,
        totalPrice: parseInt(booking.total_price) || 0
    });
}
