const db = require('./db');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const sql = `
            SELECT s.*, 
            (
                SELECT COUNT(*)::int 
                FROM bookings b 
                WHERE (b.tour = s.tour_name OR b.tour LIKE s.tour_name || '%')
                AND b.status NOT IN ('Đã hủy', 'Cancelled')
                AND (
                    b.date = TO_CHAR(s.start_date, 'DD/MM/YYYY') OR 
                    b.date = TO_CHAR(s.start_date, 'FMDD/FMMM/YYYY') OR
                    b.date = TO_CHAR(s.start_date, 'DD/MM') OR
                    b.date = TO_CHAR(s.start_date, 'FMDD/FMMM') OR
                    b.date LIKE TO_CHAR(s.start_date, 'DD/MM') || '%' OR
                    b.date LIKE TO_CHAR(s.start_date, 'FMDD/FMMM') || '%'
                )
            ) as booked_count
            FROM schedules s 
            ORDER BY s.start_date ASC
        `;
        const { rows } = await db.query(sql);
        return res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching schedules:', error);
        return res.status(500).json({ error: 'Failed to fetch schedules' });
    }
};
