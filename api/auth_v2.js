const db = require('./_db');
const crypto = require('crypto'); // Dummy token generator for now

module.exports = async (req, res) => {
    // Enable CORS for V2 Admin (Localhost 5173/5174)
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
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Missing username or password' });
        }

        // Check inside new 'admins' table
        const { rows } = await db.query(
            'SELECT * FROM admins WHERE LOWER(username) = LOWER($1) AND password = $2 AND status = $3',
            [username, password, 'active']
        );

        if (rows.length > 0) {
            const user = rows[0];

            // Remove sensitive info
            delete user.password;

            // Generate Fake Token (Should use JSONWebToken library in prod)
            const token = crypto.randomBytes(32).toString('hex');

            const frontendUser = {
                id: user.id,
                username: user.username,
                fullName: user.full_name,
                role: user.role,
                phone: user.phone,
                email: user.email,
                avatar: user.avatar,
                bank_info: user.bank_info,
                status: user.status
            };

            return res.status(200).json({
                success: true,
                token: token,
                user: frontendUser
            });
        } else {
            return res.status(401).json({ success: false, message: 'Sai tên đăng nhập hoặc mật khẩu!' });
        }
    } catch (error) {
        console.error('Login V2 error:', error);
        return res.status(500).json({ error: error.message });
    }
};
