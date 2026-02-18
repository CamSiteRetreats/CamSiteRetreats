const db = require('./_db');

module.exports = async (req, res) => {
    const { method } = req;

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (method === 'GET') {
            const { rows } = await db.query('SELECT * FROM media ORDER BY uploaded_at DESC');
            return res.status(200).json(rows);
        }

        if (method === 'POST') {
            const { url, filename, size, type } = req.body;
            if (!url) return res.status(400).json({ error: 'URL is required' });

            const query = `
                INSERT INTO media (url, filename, size, type)
                VALUES ($1, $2, $3, $4)
                RETURNING *;
            `;
            const values = [url, filename, size, type];
            const { rows } = await db.query(query, values);
            return res.status(201).json(rows[0]);
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
        console.error('Error in media API:', error);
        return res.status(500).json({ error: error.message });
    }
};
