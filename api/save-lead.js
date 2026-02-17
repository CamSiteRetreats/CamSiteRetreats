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
        const { id, name, phone, tour, date, status, message, sale_id, sale_name, sale_avatar } = data;

        // Validation
        if (!name || !phone) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
        }

        if (id) {
            // Update existing lead
            const sql = `
                UPDATE leads 
                SET name=$1, phone=$2, tour=$3, date=$4, status=$5, message=$6, sale_id=$7, sale_name=$8, sale_avatar=$9
                WHERE id=$10
                RETURNING *;
            `;
            const values = [name, phone, tour, date, status, message, sale_id, sale_name, sale_avatar, id];
            const result = await query(sql, values);

            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(result.rows[0])
            };
        } else {
            // Create new lead
            const sql = `
                INSERT INTO leads (name, phone, tour, date, status, message, sale_id, sale_name, sale_avatar) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING *;
            `;
            const values = [name, phone, tour, date, status, message, sale_id, sale_name, sale_avatar];
            const result = await query(sql, values);

            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(result.rows[0])
            };
        }
    } catch (error) {
        console.error('Error saving lead:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
