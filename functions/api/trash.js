import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const method = request.method;
    const sql = getDb(env);

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        let response;

        if (method === 'GET') {
            const type = url.searchParams.get('type');
            let query = 'SELECT * FROM trash';
            const values = [];
            if (type) { query += ' WHERE type = $1'; values.push(type); }
            query += ' ORDER BY deleted_at DESC';

            const rows = await sql.query(query, values);
            response = Response.json(rows);

        } else if (method === 'POST') {
            // Restore item từ trash về bảng gốc
            const id = url.searchParams.get('id');
            if (!id) return Response.json({ error: 'ID is required' }, { status: 400, headers: corsHeaders });

            const items = await sql.query('SELECT * FROM trash WHERE id = $1', [id]);
            if (items.length === 0) return Response.json({ error: 'Item not found in trash' }, { status: 404, headers: corsHeaders });

            const item = items[0];
            const data = item.data;

            if (item.type === 'booking') {
                const cols = Object.keys(data).filter(k => k !== 'id');
                const vals = cols.map(k => data[k]);
                const placeholders = cols.map((_, i) => `$${i + 1}`);
                await sql.query(
                    `INSERT INTO bookings (id, ${cols.join(', ')}) VALUES ($${cols.length + 1}, ${placeholders}) ON CONFLICT (id) DO NOTHING`,
                    [...vals, data.id]
                );
            } else if (item.type === 'customer') {
                const cols = Object.keys(data).filter(k => k !== 'id');
                const vals = cols.map(k => data[k]);
                const placeholders = cols.map((_, i) => `$${i + 1}`);
                await sql.query(
                    `INSERT INTO customers (id, ${cols.join(', ')}) VALUES ($${cols.length + 1}, ${placeholders}) ON CONFLICT (id) DO NOTHING`,
                    [...vals, data.id]
                );
            }

            await sql.query('DELETE FROM trash WHERE id = $1', [id]);
            response = Response.json({ success: true, restored: item.type, data });

        } else if (method === 'DELETE') {
            const id = url.searchParams.get('id');
            if (!id) return Response.json({ error: 'ID is required' }, { status: 400, headers: corsHeaders });
            await sql.query('DELETE FROM trash WHERE id = $1', [id]);
            response = Response.json({ success: true });

        } else {
            return new Response('Method Not Allowed', { status: 405 });
        }

        const final = new Response(response.body, response);
        Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
        return final;

    } catch (error) {
        console.error('Error in trash API:', error);
        return Response.json({ error: error.message }, {
            status: 500,
            headers: corsHeaders
        });
    }
}
