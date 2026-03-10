const db = require('../utils/db');

module.exports = async (req, res) => {
    const { method } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-User-Id, X-User-Name');
    if (method === 'OPTIONS') return res.status(200).end();

    try {
        if (method === 'GET') {
            const { type } = req.query;
            let query = 'SELECT * FROM trash';
            const values = [];
            if (type) { query += ' WHERE type = $1'; values.push(type); }
            query += ' ORDER BY deleted_at DESC';

            const { rows } = await db.query(query, values);
            return res.status(200).json(rows);
        }

        if (method === 'POST') {
            // Restore item từ trash về bảng gốc
            const { id } = req.query;
            if (!id) return res.status(400).json({ error: 'ID is required' });

            const { rows } = await db.query('SELECT * FROM trash WHERE id = $1', [id]);
            if (rows.length === 0) return res.status(404).json({ error: 'Item not found in trash' });

            const item = rows[0];
            const data = item.data;

            if (item.type === 'booking') {
                // Restore booking
                const cols = Object.keys(data).filter(k => k !== 'id');
                const vals = cols.map(k => data[k]);
                const placeholders = cols.map((_, i) => `$${i + 1}`);
                await db.query(
                    `INSERT INTO bookings (id, ${cols.join(', ')}) VALUES ($${cols.length + 1}, ${placeholders}) ON CONFLICT (id) DO NOTHING`,
                    [...vals, data.id]
                );
            } else if (item.type === 'customer') {
                const cols = Object.keys(data).filter(k => k !== 'id');
                const vals = cols.map(k => data[k]);
                const placeholders = cols.map((_, i) => `$${i + 1}`);
                await db.query(
                    `INSERT INTO customers (id, ${cols.join(', ')}) VALUES ($${cols.length + 1}, ${placeholders}) ON CONFLICT (id) DO NOTHING`,
                    [...vals, data.id]
                );
            }

            await db.query('DELETE FROM trash WHERE id = $1', [id]);
            return res.status(200).json({ success: true, restored: item.type, data });
        }

        if (method === 'DELETE') {
            const { id } = req.query;
            if (!id) return res.status(400).json({ error: 'ID is required' });
            await db.query('DELETE FROM trash WHERE id = $1', [id]);
            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
        console.error('Error in trash API:', error);
        return res.status(500).json({ error: error.message });
    }
};
