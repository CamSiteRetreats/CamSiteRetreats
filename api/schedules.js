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
            const { rows } = await db.query('SELECT * FROM schedules ORDER BY start_date ASC');
            return res.status(200).json(rows);
        }

        if (method === 'POST') {
            const { id, tour_id, start_date, end_date, capacity, price, status } = req.body;

            if (id) {
                // Update
                const query = `
                    UPDATE schedules 
                    SET tour_id=$1, start_date=$2, end_date=$3, capacity=$4, price=$5, status=$6
                    WHERE id=$7
                    RETURNING *;
                `;
                const values = [tour_id, start_date, end_date, capacity, price, status, id];
                const { rows } = await db.query(query, values);
                return res.status(200).json(rows[0]);
            } else {
                // Insert
                const query = `
                    INSERT INTO schedules (tour_id, start_date, end_date, capacity, price, status)
                    VALUES ($1, $2, $3, $4, $5, $6)
                    RETURNING *;
                `;
                const values = [tour_id, start_date, end_date, capacity, price, status || 'available'];
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
