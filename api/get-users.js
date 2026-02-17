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
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const result = await query('SELECT * FROM users ORDER BY created_at ASC');

        // Map to frontend structure
        const users = result.rows.map(user => ({
            id: user.id,
            username: user.username,
            // password: user.password, // Should we return password? Generally no, but for admin edit maybe? 
            // The frontend "Edit" modal shows placeholder "Leave empty to keep". 
            // So we don't need to send password back.
            fullName: user.full_name,
            role: user.role,
            phone: user.phone,
            email: user.email,
            avatar: user.avatar,
            status: user.status
        }));

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(users)
        };
    } catch (error) {
        console.error('Error fetching users:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
