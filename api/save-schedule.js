const db = require('./db');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const body = req.body || {};
        const { id, tour_name, start_date, end_date, slots, status } = body;

        if (!tour_name || !start_date || !end_date) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        let queryText, queryParams;

        if (id) {
            // Update
            queryText = 'UPDATE schedules SET tour_name = $1, start_date = $2, end_date = $3, slots = $4, status = $5 WHERE id = $6 RETURNING *';
            queryParams = [tour_name, start_date, end_date, slots, status, id];
        } else {
            // Insert
            queryText = 'INSERT INTO schedules (tour_name, start_date, end_date, slots, status) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            queryParams = [tour_name, start_date, end_date, slots, status];
        }

        const { rows } = await db.query(queryText, queryParams);
        return res.status(200).json(rows[0]);

    } catch (error) {
        console.error('Error saving schedule:', error);
        return res.status(500).json({ error: 'Failed to save schedule', details: error.message });
    }
};
