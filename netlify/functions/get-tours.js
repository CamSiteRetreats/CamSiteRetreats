const db = require('./db');

exports.handler = async (event, context) => {
    try {
        const { rows } = await db.query('SELECT * FROM tours');

        return {
            statusCode: 200,
            body: JSON.stringify(rows),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
                'Surrogate-Control': 'no-store'
            }
        };
    } catch (error) {
        console.error('Error fetching tours:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch tours', details: error.message })
        };
    }
};
