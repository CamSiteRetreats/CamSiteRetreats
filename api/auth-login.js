const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

client.connect();

async function query(text, params) {
    try {
        return await client.query(text, params);
    } catch (err) {
        console.error('Database Query Error', err);
        throw err;
    }
}

exports.handler = async (event) => {
    // CORS Preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { username, password } = JSON.parse(event.body);

        if (!username || !password) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing username or password' }) };
        }

        const result = await query('SELECT * FROM users WHERE username = $1 AND password = $2 AND status = $3', [username, password, 'active']);

        if (result.rows.length > 0) {
            const user = result.rows[0];
            delete user.password; // Remove password from response

            // Map snake_case properties to camelCase if needed by frontend, 
            // or just ensure frontend uses what comes API.
            // Current frontend expects: fullName, role, avatar...
            // DB has: full_name, role, avatar... 
            // I should map them to match frontend expectations to minimize frontend changes.

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

            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ success: true, user: frontendUser })
            };
        } else {
            return {
                statusCode: 401,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ success: false, message: 'Sai tên đăng nhập hoặc mật khẩu!' })
            };
        }
    } catch (error) {
        console.error('Login error:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
