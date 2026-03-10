import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const method = request.method;
    const sql = getDb(env);

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        let response;

        if (method === 'GET') {
            const limit = parseInt(url.searchParams.get('limit') || '100');
            const offset = parseInt(url.searchParams.get('offset') || '0');
            const action = url.searchParams.get('action');
            const target_type = url.searchParams.get('target_type');
            const user_id = url.searchParams.get('user_id');
            const date_from = url.searchParams.get('date_from');
            const date_to = url.searchParams.get('date_to');

            let conditions = [];
            let values = [];
            let idx = 1;

            if (action) { conditions.push(`action = $${idx++}`); values.push(action); }
            if (target_type) { conditions.push(`target_type = $${idx++}`); values.push(target_type); }
            if (user_id) { conditions.push(`user_id = $${idx++}`); values.push(user_id); }
            if (date_from) { conditions.push(`created_at >= $${idx++}`); values.push(date_from); }
            if (date_to) { conditions.push(`created_at <= $${idx++}`); values.push(date_to + 'T23:59:59'); }

            const where = conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : '';

            const logs = await sql.query(
                `SELECT * FROM activity_logs ${where} ORDER BY created_at DESC LIMIT $${idx++} OFFSET $${idx++}`,
                [...values, limit, offset]
            );

            const countResult = await sql.query(
                `SELECT COUNT(*) as total FROM activity_logs ${where}`,
                values
            );

            response = Response.json({
                logs: logs,
                total: parseInt(countResult[0]?.total || 0)
            });

        } else if (method === 'DELETE') {
            await sql.query('DELETE FROM activity_logs');
            response = Response.json({ success: true });

        } else {
            return new Response('Method Not Allowed', { status: 405 });
        }

        const final = new Response(response.body, response);
        Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
        return final;

    } catch (error) {
        console.error('Error in activity-logs API:', error);
        return Response.json({ error: error.message }, {
            status: 500,
            headers: corsHeaders
        });
    }
}
