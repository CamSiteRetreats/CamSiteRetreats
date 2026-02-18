const db = require('./_db');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'ID is required' });

    try {
        return res.status(200).json({ success: true, id });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
