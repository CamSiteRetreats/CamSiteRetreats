const { query } = require('./db');

exports.handler = async (event) => {
    // Only allow GET
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const result = await query('SELECT * FROM bookings ORDER BY created_at DESC');

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(result.rows)
        };
    } catch (error) {
        console.error('Error fetching bookings:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
