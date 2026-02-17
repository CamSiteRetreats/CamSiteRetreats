const db = require('./db');

exports.handler = async (event, context) => {
    // Enable CORS for all responses
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTION'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: 'Method Not Allowed' };
    }

    try {
        console.log('--- Save Media Function Started ---');
        console.log('DB URL Present:', !!process.env.DATABASE_URL);

        const body = JSON.parse(event.body);
        const { url, filename, slug: providedSlug } = body;

        console.log('Data to insert:', { url, filename, providedSlug });

        if (!url) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'URL is required' }) };
        }

        const generateSlug = () => Math.random().toString(36).substring(2, 10);
        const finalSlug = providedSlug || generateSlug();

        const queryText = 'INSERT INTO media (url, filename, slug) VALUES ($1, $2, $3) RETURNING *';
        const queryParams = [url, filename || 'unnamed', finalSlug];

        const { rows } = await db.query(queryText, queryParams);

        console.log('Insert successful:', rows[0].id);

        return {
            statusCode: 201,
            headers,
            body: JSON.stringify(rows[0])
        };
    } catch (error) {
        console.error('CRITICAL BACKEND ERROR:', {
            message: error.message,
            stack: error.stack,
            code: error.code,
            detail: error.detail
        });

        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: 'Failed to save media',
                details: error.message,
                db_code: error.code,
                hint: error.detail
            })
        };
    }
};
