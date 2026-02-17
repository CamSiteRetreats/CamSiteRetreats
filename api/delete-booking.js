const { query } = require('./db');

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'DELETE, OPTIONS'
            },
            body: ''
        };
    }

    if (event.httpMethod !== 'DELETE') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { id } = JSON.parse(event.body);

        if (!id) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing ID' }) };
        }

        await query('DELETE FROM bookings WHERE id = $1', [id]);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Deleted successfully' })
        };
    } catch (error) {
        console.error('Error deleting booking:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
