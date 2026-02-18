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
        const { rows } = await db.query('SELECT * FROM tours ORDER BY sort_order ASC, id ASC');
        return res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching tours:', error);
        return res.status(500).json({ error: 'Failed to fetch tours', details: error.message });
    }
};
