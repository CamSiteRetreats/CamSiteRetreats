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
        const data = JSON.parse(event.body);
        const { id, username, password, fullName, role, phone, email, avatar, status } = data;

        // Validation
        if (!username) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing username' }) };
        }

        if (id) {
            // Update existing user
            // If password is provided, update it. If not, keep old.
            // Since we don't select password in get-users, if frontend sends empty password, we should NOT update it.

            let sql, values;

            if (password) {
                sql = `
                    UPDATE users 
                    SET username=$1, password=$2, full_name=$3, role=$4, phone=$5, email=$6, avatar=$7, status=$8
                    WHERE id=$9
                    RETURNING *;
                `;
                values = [username, password, fullName, role, phone, email, avatar, status, id];
            } else {
                sql = `
                    UPDATE users 
                    SET username=$1, full_name=$2, role=$3, phone=$4, email=$5, avatar=$6, status=$7
                    WHERE id=$8
                    RETURNING *;
                `;
                values = [username, fullName, role, phone, email, avatar, status, id];
            }

            const result = await query(sql, values);
            const user = result.rows[0];
            delete user.password;

            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...user, fullName: user.full_name }) // Return formatted
            };
        } else {
            // Create new user
            if (!password) {
                return { statusCode: 400, body: JSON.stringify({ error: 'Missing password for new user' }) };
            }

            const sql = `
                INSERT INTO users (username, password, full_name, role, phone, email, avatar, status) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                RETURNING *;
            `;
            const values = [username, password, fullName, role, phone, email, avatar, status || 'active'];
            const result = await query(sql, values);
            const user = result.rows[0];
            delete user.password;

            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...user, fullName: user.full_name })
            };
        }
    } catch (error) {
        console.error('Error saving user:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
