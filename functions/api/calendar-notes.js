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

    if (method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

    const json = (data, status = 200) => {
        const r = Response.json(data, { status });
        Object.entries(corsHeaders).forEach(([k, v]) => r.headers.set(k, v));
        return r;
    };

    try {
        if (method === 'GET') {
            const month = url.searchParams.get('month'); // YYYY-MM
            if (!month) return json({ error: 'month param required' }, 400);

            const notes = await sql`
                SELECT * FROM calendar_notes
                WHERE TO_CHAR(date, 'YYYY-MM') = ${month}
                ORDER BY date ASC, created_at ASC
            `;
            return json(notes);
        }

        if (method === 'POST') {
            const body = await request.json();
            const { id, date, title, note, color, created_by } = body;

            if (!title) return json({ error: 'title is required' }, 400);

            if (id) {
                // Update
                const rows = await sql`
                    UPDATE calendar_notes
                    SET title = ${title},
                        note  = ${note || null},
                        color = ${color || 'blue'},
                        updated_at = NOW()
                    WHERE id = ${id}
                    RETURNING *
                `;
                return json(rows[0]);
            } else {
                // Create
                if (!date) return json({ error: 'date is required' }, 400);
                const rows = await sql`
                    INSERT INTO calendar_notes (date, title, note, color, created_by)
                    VALUES (${date}, ${title}, ${note || null}, ${color || 'blue'}, ${created_by || null})
                    RETURNING *
                `;
                return json(rows[0], 201);
            }
        }

        if (method === 'DELETE') {
            const id = url.searchParams.get('id');
            if (!id) return json({ error: 'id required' }, 400);
            await sql`DELETE FROM calendar_notes WHERE id = ${id}`;
            return json({ success: true });
        }

        return new Response('Method Not Allowed', { status: 405 });

    } catch (err) {
        console.error('calendar-notes API error:', err);
        return json({ error: err.message }, 500);
    }
}
