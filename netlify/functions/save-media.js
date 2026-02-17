const db = require('./db');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { url, filename, slug: providedSlug } = JSON.parse(event.body);

        if (!url) {
            return { statusCode: 400, body: JSON.stringify({ error: 'URL is required' }) };
        }

        // Generate a random 8-character slug
        const generateSlug = () => Math.random().toString(36).substring(2, 10);
        const finalSlug = providedSlug || generateSlug();

        const { rows } = await db.query(
            'INSERT INTO media (url, filename, slug) VALUES ($1, $2, $3) RETURNING *',
            [url, filename || 'unnamed', finalSlug]
        );

        return {
            statusCode: 201,
            body: JSON.stringify(rows[0]),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    } catch (error) {
        console.error('DATABASE ERROR:', {
            message: error.message,
            code: error.code,
            detail: error.detail,
            table: error.table
        });
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to save media',
                details: error.message,
                db_code: error.code
            })
        };
    }
};
