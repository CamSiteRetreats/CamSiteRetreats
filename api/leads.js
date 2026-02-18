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
            const { rows } = await db.query('SELECT * FROM leads ORDER BY created_at DESC');
            return res.status(200).json(rows);
        }

        if (method === 'POST') {
            const { id, tour_id, tour_name, schedule_id, schedule_date, customer_name, customer_phone, customer_email, num_people, status, note } = req.body;

            if (id) {
                // Update
                const query = `
                    UPDATE leads 
                    SET tour_id=$1, tour_name=$2, schedule_id=$3, schedule_date=$4, customer_name=$5, 
                        customer_phone=$6, customer_email=$7, num_people=$8, status=$9, note=$10
                    WHERE id=$11
                    RETURNING *;
                `;
                const values = [tour_id, tour_name, schedule_id, schedule_date, customer_name, customer_phone, customer_email, num_people, status, note, id];
                const { rows } = await db.query(query, values);
                return res.status(200).json(rows[0]);
            } else {
                // Insert
                const query = `
                    INSERT INTO leads (tour_id, tour_name, schedule_id, schedule_date, customer_name, customer_phone, customer_email, num_people, status, note)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                    RETURNING *;
                `;
                const values = [tour_id, tour_name, schedule_id, schedule_date, customer_name, customer_phone, customer_email, num_people, status || 'new', note];
                const { rows } = await db.query(query, values);
                return res.status(201).json(rows[0]);
            }
        }

        if (method === 'DELETE') {
            const { id } = req.query;
            if (!id) return res.status(400).json({ error: 'ID is required' });
            await db.query('DELETE FROM leads WHERE id = $1', [id]);
            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
        console.error('Error in leads API:', error);
        return res.status(500).json({ error: error.message });
    }
};
