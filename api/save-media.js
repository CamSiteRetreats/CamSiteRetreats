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
        console.log('--- Save Media Function Started (Vercel) ---');
        console.log('DB URL Present:', !!process.env.DATABASE_URL);

        // Vercel parses JSON body automatically if Content-Type is application/json
        const body = req.body || {};
        const { url, filename, slug: providedSlug } = body;

        console.log('Data to insert:', { url, filename, providedSlug });

        if (!url) {
            return res.status(400).json({ error: 'URL is required' });
        }

        const generateSlug = () => Math.random().toString(36).substring(2, 10);
        const finalSlug = providedSlug || generateSlug();

        const queryText = 'INSERT INTO media (url, filename, slug) VALUES ($1, $2, $3) RETURNING *';
        const queryParams = [url, filename || 'unnamed', finalSlug];

        const { rows } = await db.query(queryText, queryParams);

        console.log('Insert successful:', rows[0].id);

        return res.status(201).json(rows[0]);

    } catch (error) {
        console.error('CRITICAL BACKEND ERROR:', {
            message: error.message,
            stack: error.stack,
            code: error.code,
            detail: error.detail
        });

        return res.status(500).json({
            error: 'Failed to save media',
            details: error.message,
            db_code: error.code,
            hint: error.detail
        });
    }
};
