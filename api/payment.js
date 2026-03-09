const db = require('./_db');

// Helper: remove Vietnamese diacritics → lowercase ASCII
function normalizeVN(str) {
    if (!str) return '';
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/gi, 'd')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '') // Remove everything except alphanumeric
        .trim();
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
    const depositRequired = parseInt(booking.deposit_required) || 1000000;

    const needsDeposit = deposit === 0 || booking.status === 'Chờ cọc' || booking.status === 'Chờ xác nhận cọc';
    const paymentType = needsDeposit ? 'deposit' : 'remaining';
    const amountDue = needsDeposit ? depositRequired : remaining;

    // Build transfer content: CSR[ID] [Tour] [Date] [Name] [Type]
    const cleanTour = normalizeVN((booking.tour || 'Tour').split('-')[0].trim());
    const cleanDate = (booking.date || '').replace(/\//g, '');
    const cleanName = normalizeVN(booking.name || 'khach');
    const payLabel = needsDeposit ? 'coc' : 'full';
    const transferContent = `CSR${booking.id} ${cleanTour} ${cleanDate} ${cleanName} ${payLabel}`;

    const isPaid = booking.status === 'Đã cọc' || booking.status === 'Hoàn tất' || booking.status === 'Hoàn thành';
    const isFullyPaid = booking.status === 'Hoàn tất' || booking.status === 'Hoàn thành' || (totalPrice > 0 && deposit >= totalPrice);

    return res.status(200).json({
        id: booking.id,
        name: booking.name,
        phone: booking.phone,
        tour: booking.tour,
        date: booking.date,
        status: booking.status,
        totalPrice,
        discount: parseInt(booking.discount) || 0,
        deposit,
        remaining,
        amountDue,
        depositRequired,
        paymentType,
        transferContent,
        isPaid,
        isFullyPaid,
        saleId: booking.sale_id,
        saleName: booking.sale_name
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
    const headers = req.headers;
    console.log('📥 SePay Webhook received:', JSON.stringify(payload));

    // Log to debug table (NEON/PG)
    try {
        await db.query('INSERT INTO debug_webhook_logs (payload, headers) VALUES ($1, $2)', [JSON.stringify(payload), JSON.stringify(headers)]);
    } catch (e) {
        console.error('Debug log fail:', e);
    }

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

    // Normalize: remove Vietnamese diacritics → lowercase → remove ALL spaces for tight matching
    function normalizeVN(str, removeSpaces = false) {
        let res = (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
        if (removeSpaces) res = res.replace(/\s+/g, '');
        return res;
    }

    const rawSearch = (transferContent || description || '').toLowerCase();
    const cleanSearchNoSpace = normalizeVN(rawSearch, true);

    let matchedBooking = null;
    let paymentType = 'deposit';

    const { rows: bookings } = await db.query(
        `SELECT * FROM bookings WHERE status IN ('Chờ cọc', 'Chờ xác nhận cọc', 'Đã cọc') ORDER BY created_at DESC`
    );

    // Strategy 1: Match by ID (CSR154, ID154, etc)
    for (const booking of bookings) {
        const idStr = String(booking.id);
        const searchTerms = [
            'csr' + idStr,
            'id' + idStr,
            'thanh toan ' + idStr,
            'tt' + idStr
        ];

        // Also check if idStr is found as a standalone number or attached to CSR/ID
        if (searchTerms.some(term => cleanSearchNoSpace.includes(normalizeVN(term, true)))) {
            matchedBooking = booking;
            break;
        }
    }

    // Strategy 2: Match by Customer Name + Tour Name (fallback)
    if (!matchedBooking) {
        for (const booking of bookings) {
            const bName = normalizeVN(booking.name, true);
            const bTour = normalizeVN((booking.tour || '').split('-')[0], true);

            if (bName.length >= 3 && cleanSearchNoSpace.includes(bName) &&
                bTour.length >= 2 && cleanSearchNoSpace.includes(bTour)) {
                matchedBooking = booking;
                break;
            }
        }
    }

    // Determine payment type from transfer content
    if (matchedBooking) {
        paymentType = rawSearch.includes('full') ? 'full' : 'deposit';
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
        const depositReq = parseInt(matchedBooking.deposit_required) || 1000000;

        let newDeposit = currentDeposit + amount;
        let newStatus = currentStatus;

        if (totalPrice > 0 && newDeposit >= totalPrice) {
            newStatus = 'Hoàn tất';
        } else if (newDeposit >= depositReq) {
            newStatus = 'Đã cọc';
        }

        // Only update DB if something changed
        if (newStatus !== currentStatus || newDeposit !== currentDeposit) {
            let customerId = matchedBooking.customer_id;
            if (newStatus === 'Đã cọc' && (!customerId || customerId.trim() === '')) {
                const phone = matchedBooking.phone;
                const check = await db.query('SELECT csr_code FROM crm_customers WHERE phone = $1', [phone]);
                if (check.rows.length > 0) {
                    customerId = check.rows[0].csr_code;
                } else {
                    const randNum = Math.floor(100000 + Math.random() * 900000);
                    customerId = '#CSR' + randNum;
                    await db.query(`
                        INSERT INTO crm_customers (csr_code, full_name, phone, cccd, dob, gender, medical_notes, dietary, loyalty_tier)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'New')
                    `, [customerId, matchedBooking.name, phone, matchedBooking.id_card || null, matchedBooking.dob || null, matchedBooking.gender || null, matchedBooking.allergy || null, matchedBooking.diet || null]);
                }
            }

            await db.query(
                'UPDATE bookings SET status = $1, deposit = $2, customer_id = $3 WHERE id = $4',
                [newStatus, newDeposit, customerId, matchedBooking.id]
            );
        }
    }

    return res.status(200).json({ success: true, matched: matchedBooking ? matchedBooking.id : null });
}

// ============================================================
// ACTION: status — Poll payment status (for real-time UI)
// ============================================================
async function handlePaymentStatus(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'GET only' });
    res.setHeader('Cache-Control', 'no-cache, max-age=0');

    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'Booking ID is required' });

    const { rows: bookingRows } = await db.query('SELECT status, deposit, total_price, deposit_required FROM bookings WHERE id = $1', [id]);
    if (bookingRows.length === 0) return res.status(404).json({ error: 'Booking not found' });

    const booking = bookingRows[0];
    const totalPrice = parseInt(booking.total_price) || 0;
    const currentDeposit = parseInt(booking.deposit) || 0;
    const depositReq = parseInt(booking.deposit_required) || 1000000;

    const isPaid = booking.status && (
        booking.status.includes('Đã cọc') ||
        booking.status === 'Hoàn tất' ||
        booking.status === 'Hoàn thành' ||
        booking.status === 'Đã thanh toán' ||
        (totalPrice > 0 && currentDeposit >= depositReq)
    );

    const isFullyPaid = booking.status === 'Hoàn tất' ||
        booking.status === 'Hoàn thành' ||
        (totalPrice > 0 && currentDeposit >= totalPrice);

    return res.status(200).json({
        isPaid: !!isPaid,
        isFullyPaid: !!isFullyPaid,
        status: booking.status,
        deposit: currentDeposit,
        totalPrice: totalPrice
    });
}
