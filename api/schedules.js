const db = require('./_db');

module.exports = async (req, res) => {
    const { method } = req;

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (method === 'GET') {
            const query = `
                SELECT s.*, 
                (SELECT COUNT(*) FROM bookings b 
                 WHERE (b.tour = s.tour_name OR s.tour_name LIKE '%' || b.tour || '%') 
                 AND b.status NOT IN ('Đã hủy', 'Cancelled')
                 AND (
                    b.date = TO_CHAR(s.start_date, 'DD/MM/YYYY') 
                    OR b.date = TO_CHAR(s.start_date, 'FMDD/FMMM/YYYY')
                    OR b.date LIKE TO_CHAR(s.start_date, 'DD/MM') || '%'
                    OR b.date LIKE TO_CHAR(s.start_date, 'FMDD/FMMM') || '%'
                 )
                ) as booked_count
                FROM schedules s 
                ORDER BY s.start_date ASC
            `;
            const { rows } = await db.query(query);
            return res.status(200).json(rows);
        }

        if (method === 'POST') {
            const { id, tour_name, start_date, end_date, slots, status } = req.body;

            if (id) {
                // Update
                const query = `
                    UPDATE schedules 
                    SET tour_name=$1, start_date=$2, end_date=$3, slots=$4, status=$5
                    WHERE id=$6
                    RETURNING *;
                `;
                const values = [tour_name, start_date, end_date, slots, status, id];
                const { rows } = await db.query(query, values);
                return res.status(200).json(rows[0]);
            } else {
                // Insert
                const query = `
                    INSERT INTO schedules (tour_name, start_date, end_date, slots, status)
                    VALUES ($1, $2, $3, $4, $5)
                    RETURNING *;
                `;
                const values = [tour_name, start_date, end_date, slots, status || 'Đang mở'];
                const { rows } = await db.query(query, values);
                return res.status(201).json(rows[0]);
            }
        }

        if (method === 'DELETE') {
            const { id } = req.query;
            if (!id) return res.status(400).json({ error: 'ID is required' });
            await db.query('DELETE FROM schedules WHERE id = $1', [id]);
            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
        console.error('Error in schedules API:', error);
        return res.status(500).json({ error: error.message });
    }
};
