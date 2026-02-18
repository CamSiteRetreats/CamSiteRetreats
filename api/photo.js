const db = require('./_db');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Vercel rewrites often pass the match as a query param or part of the path
    // We expect /photo/[slug].jpg or /api/photo?slug=...
    const slugRaw = req.query.slug || req.query.id;
    if (!slugRaw) return res.status(400).json({ error: 'Slug is required' });

    const slug = slugRaw.replace('.jpg', '');

    try {
        const { rows } = await db.query('SELECT url FROM media WHERE slug = $1', [slug]);

        if (rows.length > 0) {
            // Redirect to actual image URL
            res.setHeader('Location', rows[0].url);
            return res.status(302).end();
        } else {
            return res.status(404).json({ error: 'Photo not found' });
        }
    } catch (error) {
        console.error('Photo redirect error:', error);
        return res.status(500).json({ error: error.message });
    }
};
