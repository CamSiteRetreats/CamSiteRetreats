import { getDb } from '../../_db';

export async function onRequest(context) {
    const { request, env, params } = context;
    const name = params.name;

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'GET') {
        return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
    }

    try {
        if (!name) {
            return new Response('Bad Request: Missing filename', { status: 400, headers: corsHeaders });
        }

        const sql = getDb(env);
        const rows = await sql`
            SELECT mime_type, data FROM uploaded_images WHERE filename = ${name}
        `;

        if (!rows || rows.length === 0) {
            return new Response('Image Not Found', { status: 404, headers: corsHeaders });
        }

        const { mime_type, data } = rows[0];

        // Chuyển đổi Base64 thành binary để phản hồi
        const binaryString = atob(data);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        return new Response(bytes, {
            status: 200,
            headers: {
                ...corsHeaders,
                'Content-Type': mime_type,
                'Cache-Control': 'public, max-age=31536000, immutable'
            }
        });

    } catch (err) {
        console.error('[view-image] Error:', err);
        return new Response('Internal Server Error: ' + err.message, { status: 500, headers: corsHeaders });
    }
}
