const db = require('./db');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'Tour ID is required' });
    }

    try {
        // Optional: cascaded delete if schedules reference tours by FK, 
        // but currently schedules use 'tour_name' string. 
        // We should warn user manually or handle it. 
        // For now, just delete the tour.
        await db.query('DELETE FROM tours WHERE id = $1', [id]);
        return res.status(200).json({ message: 'Tour deleted successfully' });
    } catch (error) {
        console.error('Error deleting tour:', error);
        return res.status(500).json({ error: 'Failed to delete tour' });
    }
};
