const db = require('./_db');

module.exports = async (req, res) => {
    const { method } = req;

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Missing username or password' });
        }

        const { rows } = await db.query(
            'SELECT * FROM users WHERE LOWER(username) = LOWER($1) AND password = $2 AND status = $3',
            [username, password, 'active']
        );

        if (rows.length > 0) {
            const user = rows[0];
            delete user.password;

            const frontendUser = {
                id: user.id,
                username: user.username,
                fullName: user.full_name,
                role: user.role,
                phone: user.phone,
                email: user.email,
                avatar: user.avatar,
                status: user.status
            };

            return res.status(200).json({ success: true, user: frontendUser });
        } else {
            return res.status(401).json({ success: false, message: 'Sai tên đăng nhập hoặc mật khẩu!' });
        }
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: error.message });
    }
};
