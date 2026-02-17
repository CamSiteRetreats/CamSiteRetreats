const db = require('./db');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { id } = req.query; // Or body, but DELETE usually uses query/params
        // Vercel serverless: req.query for query params, req.body for body if parsed.
        // Let's support both.
        const targetId = id || (req.body && req.body.id);

        if (!targetId) {
            return res.status(400).json({ error: 'Missing ID' });
        }

        await db.query('DELETE FROM schedules WHERE id = $1', [targetId]);
        return res.status(200).json({ success: true });

    } catch (error) {
        console.error('Error deleting schedule:', error);
        return res.status(500).json({ error: 'Failed to delete schedule' });
    }
};
