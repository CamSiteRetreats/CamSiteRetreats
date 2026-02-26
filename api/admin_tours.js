const db = require('./_db');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { id } = req.query; // Used for PUT, DELETE or GET one

        // GET /api/admin_tours -> Fetch all tours
        if (req.method === 'GET') {
            const { rows } = await db.query('SELECT * FROM tours_v2 ORDER BY id DESC');
            return res.status(200).json({ success: true, data: rows });
        }

        // POST /api/admin_tours -> Add new tour
        if (req.method === 'POST') {
            const { name, duration, level, price, status, image_url } = req.body;

            if (!name || !duration || !level || !price || !image_url) {
                return res.status(400).json({ success: false, message: 'Vui lòng nhập đầy đủ thông tin bắt buộc.' });
            }

            const { rows } = await db.query(
                `INSERT INTO tours_v2 (name, duration, level, price, status, image_url) 
                 VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [name, duration, level, price, status || 'active', image_url]
            );

            return res.status(201).json({ success: true, message: 'Thêm Tour thành công', data: rows[0] });
        }

        // PUT /api/admin_tours?id=123 -> Update a tour
        if (req.method === 'PUT') {
            if (!id) return res.status(400).json({ success: false, message: 'Thiếu ID Tour cần cập nhật.' });

            const { name, duration, level, price, status, image_url } = req.body;

            const { rows } = await db.query(
                `UPDATE tours_v2 
                 SET name = $1, duration = $2, level = $3, price = $4, status = $5, image_url = $6
                 WHERE id = $7 RETURNING *`,
                [name, duration, level, price, status, image_url, id]
            );

            if (rows.length === 0) {
                return res.status(404).json({ success: false, message: 'Không tìm thấy Tour để cập nhật.' });
            }

            return res.status(200).json({ success: true, message: 'Cập nhật Tour thành công', data: rows[0] });
        }

        // DELETE /api/admin_tours?id=123 -> Delete a tour
        if (req.method === 'DELETE') {
            if (!id) return res.status(400).json({ success: false, message: 'Thiếu ID Tour cần xóa.' });

            const { rowCount } = await db.query('DELETE FROM tours_v2 WHERE id = $1', [id]);

            if (rowCount === 0) {
                return res.status(404).json({ success: false, message: 'Không tìm thấy Tour để xóa.' });
            }

            return res.status(200).json({ success: true, message: 'Xóa Tour thành công' });
        }

        return res.status(404).json({ error: 'Endpoint Not Found' });

    } catch (error) {
        console.error('API Admin Tours Error:', error);
        return res.status(500).json({ error: error.message });
    }
}
