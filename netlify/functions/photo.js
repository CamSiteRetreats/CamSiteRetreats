const db = require('./db');

exports.handler = async (event, context) => {
    const slugWithExt = event.queryStringParameters.id;
    if (!slugWithExt) {
        return { statusCode: 400, body: 'Missing ID' };
    }

    // Remove extension if present (e.g. .jpg)
    const slug = slugWithExt.split('.')[0];

    try {
        const { rows } = await db.query('SELECT url FROM media WHERE slug = $1', [slug]);

        if (rows.length === 0) {
            return { statusCode: 404, body: 'Image Not Found' };
        }

        const imageUrl = rows[0].url;

        // Option 1: Redirect (Fastest, saves bandwidth)
        return {
            statusCode: 302,
            headers: {
                'Location': imageUrl,
                'Cache-Control': 'public, max-age=86400'
            }
        };

        /* 
        // Option 2: Proxy (Keeps your domain in address bar, but consumes function bandwidth)
        const fetch = require('node-fetch'); // Need to install if used
        const res = await fetch(imageUrl);
        const buffer = await res.buffer();
        return {
          statusCode: 200,
          headers: { 'Content-Type': res.headers.get('content-type') },
          body: buffer.toString('base64'),
          isBase64Encoded: true
        };
        */
    } catch (error) {
        console.error('Photo redirect error:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
