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
            const { id, name, phone, tour, date, message, status, sale_id, sale_name } = req.body;

            if (id) {
                // Update
                const query = `
                    UPDATE leads 
                    SET name=$1, phone=$2, tour=$3, date=$4, message=$5, status=$6, sale_id=$7, sale_name=$8
                    WHERE id=$9
                    RETURNING *;
                `;
                const values = [name, phone, tour, date, message, status, sale_id, sale_name, id];
                const { rows } = await db.query(query, values);
                return res.status(200).json(rows[0]);
            } else {
                // Insert
                const query = `
                    INSERT INTO leads (name, phone, tour, date, message, status, sale_id, sale_name)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                    RETURNING *;
                `;
                const values = [name, phone, tour, date, message, status || 'Mới', sale_id, sale_name];
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
