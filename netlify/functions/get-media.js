const db = require('./db');

exports.handler = async (event, context) => {
    try {
        const { rows } = await db.query('SELECT * FROM media ORDER BY created_at DESC');

        return {
            statusCode: 200,
            body: JSON.stringify(rows),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    } catch (error) {
        console.error('Error fetching media:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch media' })
        };
    }
};
