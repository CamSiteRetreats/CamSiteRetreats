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
    // Only allow GET
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const result = await query('SELECT * FROM leads ORDER BY created_at DESC');

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(result.rows)
        };
    } catch (error) {
        console.error('Error fetching leads:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
