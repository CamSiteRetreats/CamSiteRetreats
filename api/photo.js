const db = require('./db');

module.exports = async (req, res) => {
    const { id } = req.query;

    // Check if ID is present (The slug)
    if (!id) {
        return res.status(400).send('Missing ID');
    }

    // Remove extension if present (e.g. .jpg)
    const slug = id.split('.')[0];

    try {
        const { rows } = await db.query('SELECT url FROM media WHERE slug = $1', [slug]);

        if (rows.length === 0) {
            return res.status(404).send('Image Not Found');
        }

        const imageUrl = rows[0].url;

        // Redirect to the actual image URL
        res.setHeader('Location', imageUrl);
        res.setHeader('Cache-Control', 'public, max-age=86400');
        return res.status(302).end();

    } catch (error) {
        console.error('Photo redirect error:', error);
        return res.status(500).send('Internal Server Error');
    }
};
