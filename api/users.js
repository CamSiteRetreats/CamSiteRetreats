const db = require('./_db');

module.exports = async (req, res) => {
    const { method } = req;

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (method === 'GET') {
            const { rows } = await db.query('SELECT id, username, full_name, role, phone, email, avatar, bank_info, status, created_at FROM admins ORDER BY id ASC');
            // Format for frontend
            const users = rows.map(u => ({ ...u, fullName: u.full_name }));
            return res.status(200).json(users);
        }

        if (method === 'POST') {
            const { id, username, password, fullName, role, phone, email, avatar, bank_info, status } = req.body;

            if (!username) return res.status(400).json({ error: 'Missing username' });
            if (!fullName) return res.status(400).json({ error: 'Missing full name' });
            if (!role) return res.status(400).json({ error: 'Missing role' });

            if (id) {
                // Update
                let sql, values;
                if (password && password.trim() !== '') {
                    sql = `UPDATE admins SET username=$1, password=$2, full_name=$3, role=$4, phone=$5, email=$6, avatar=$7, bank_info=$8, status=$9 WHERE id=$10 RETURNING *`;
                    values = [username, password, fullName, role, phone, email, avatar, bank_info, status, id];
                } else {
                    sql = `UPDATE admins SET username=$1, full_name=$2, role=$3, phone=$4, email=$5, avatar=$6, bank_info=$7, status=$8 WHERE id=$9 RETURNING *`;
                    values = [username, fullName, role, phone, email, avatar, bank_info, status, id];
                }
                const { rows } = await db.query(sql, values);
                const user = rows[0];
                delete user.password;
                return res.status(200).json({ ...user, fullName: user.full_name });
            } else {
                // Insert
                if (!password) return res.status(400).json({ error: 'Missing password for new user' });

                // Check if username exists
                const checkUser = await db.query('SELECT id FROM admins WHERE username = $1', [username]);
                if (checkUser.rows.length > 0) return res.status(400).json({ error: 'Tên đăng nhập đã tồn tại' });

                const sql = `INSERT INTO admins (username, password, full_name, role, phone, email, avatar, bank_info, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
                const values = [username, password, fullName, role, phone, email, avatar, bank_info, status || 'active'];
                const { rows } = await db.query(sql, values);
                const user = rows[0];
                delete user.password;
                return res.status(201).json({ ...user, fullName: user.full_name });
            }
        }

        if (method === 'DELETE') {
            const { id } = req.query;
            if (!id) return res.status(400).json({ error: 'ID is required' });

            // Prevent deleting the main admin
            const checkAdmin = await db.query("SELECT username FROM admins WHERE id = $1", [id]);
            if (checkAdmin.rows.length > 0 && checkAdmin.rows[0].username === 'admin') {
                return res.status(400).json({ error: 'Không thể xóa tài khoản Super Admin' });
            }

            await db.query('DELETE FROM admins WHERE id = $1', [id]);
            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
        console.error('Error in users API:', error);
        return res.status(500).json({ error: error.message });
    }
};
