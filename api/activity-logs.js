const db = require('../utils/db');

module.exports = async (req, res) => {
    const { method } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-User-Id, X-User-Name');
    if (method === 'OPTIONS') return res.status(200).end();

    try {
        if (method === 'GET') {
            const { limit = 100, offset = 0, action, target_type, user_id, date_from, date_to } = req.query;
            let conditions = [];
            let values = [];
            let idx = 1;

            if (action) { conditions.push(`action = $${idx++}`); values.push(action); }
            if (target_type) { conditions.push(`target_type = $${idx++}`); values.push(target_type); }
            if (user_id) { conditions.push(`user_id = $${idx++}`); values.push(user_id); }
            if (date_from) { conditions.push(`created_at >= $${idx++}`); values.push(date_from); }
            if (date_to) { conditions.push(`created_at <= $${idx++}`); values.push(date_to + 'T23:59:59'); }

            const where = conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : '';

            const { rows } = await db.query(
                `SELECT * FROM activity_logs ${where} ORDER BY created_at DESC LIMIT $${idx++} OFFSET $${idx++}`,
                [...values, parseInt(limit), parseInt(offset)]
            );

            const { rows: countRows } = await db.query(
                `SELECT COUNT(*) as total FROM activity_logs ${where}`,
                values
            );

            return res.status(200).json({ logs: rows, total: parseInt(countRows[0].total) });
        }

        if (method === 'DELETE') {
            // Xóa tất cả log (chỉ super admin dùng)
            await db.query('DELETE FROM activity_logs');
            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
        console.error('Error in activity-logs API:', error);
        return res.status(500).json({ error: error.message });
    }
};
