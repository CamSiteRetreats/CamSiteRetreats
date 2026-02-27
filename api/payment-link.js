const db = require('./_db');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'Booking ID is required' });

    try {
        const { rows } = await db.query('SELECT * FROM bookings WHERE id = $1', [id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Booking not found' });

        const booking = rows[0];
        const totalPrice = parseInt(booking.total_price) || 0;
        const deposit = parseInt(booking.deposit) || 0;
        const remaining = totalPrice - deposit;

        // Determine payment type needed
        const needsDeposit = deposit === 0 || booking.status === 'Chờ cọc' || booking.status === 'Chờ xác nhận cọc';
        const paymentType = needsDeposit ? 'deposit' : 'remaining';
        const amountDue = needsDeposit ? 1000000 : remaining; // Deposit = 1tr, remaining = total - deposit

        // Build transfer content: Tour - Ngày - Tên - cọc/full
        const cleanTour = (booking.tour || 'Tour').split('-')[0].trim();
        const cleanDate = (booking.date || '').replace(/\//g, '');
        const cleanName = (booking.name || 'Khach').replace(/\s+/g, '');
        const payLabel = needsDeposit ? 'coc' : 'full';
        const transferContent = `${cleanTour} ${cleanDate} ${cleanName} ${payLabel}`;

        // Check if already paid
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
    } catch (error) {
        console.error('Error in payment-link API:', error);
        return res.status(500).json({ error: error.message });
    }
};
