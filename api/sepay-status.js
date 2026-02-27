const db = require('./_db');

/**
 * Payment Status Polling Endpoint
 * Called by payment page every 5 seconds to check if SePay has confirmed payment.
 * 
 * GET /api/sepay-status?id=72
 * → { isPaid: true/false, paidAmount, paidAt, status }
 */
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Short cache to reduce DB load during polling
    res.setHeader('Cache-Control', 'no-cache, max-age=0');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'Booking ID is required' });

    try {
        // Check booking status
        const { rows: bookingRows } = await db.query('SELECT status, deposit, total_price FROM bookings WHERE id = $1', [id]);
        if (bookingRows.length === 0) return res.status(404).json({ error: 'Booking not found' });

        const booking = bookingRows[0];
        const status = booking.status;

        // Check if there are confirmed transactions for this booking
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
    } catch (error) {
        console.error('Error in sepay-status API:', error);
        return res.status(500).json({ error: error.message });
    }
};
