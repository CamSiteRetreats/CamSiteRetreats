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

    const json = (data, status = 200) => {
        const r = Response.json(data, { status });
        Object.entries(corsHeaders).forEach(([k, v]) => r.headers.set(k, v));
        return r;
    };

    try {
        const action = url.searchParams.get('action');

        // ── GET ──────────────────────────────────────
        if (method === 'GET') {
            const scheduleId = url.searchParams.get('schedule_id');

            if (scheduleId) {
                // Get guides assigned to a specific schedule
                const rows = await sql`
                    SELECT g.*, sg.id AS link_id
                    FROM guides g
                    JOIN schedule_guides sg ON sg.guide_id = g.id
                    WHERE sg.schedule_id = ${scheduleId}
                    ORDER BY g.full_name ASC
                `;
                return json(rows);
            } else {
                // Get all guides
                const rows = await sql`
                    SELECT * FROM guides ORDER BY full_name ASC
                `;
                return json(rows);
            }
        }

        // ── POST ──────────────────────────────────────
        if (method === 'POST') {
            const body = await request.json();

            // Action: assign/remove guide from schedule
            if (action === 'assign') {
                const { schedule_id, guide_id } = body;
                if (!schedule_id || !guide_id) return json({ error: 'Missing schedule_id or guide_id' }, 400);

                await sql`
                    INSERT INTO schedule_guides (schedule_id, guide_id)
                    VALUES (${schedule_id}, ${guide_id})
                    ON CONFLICT (schedule_id, guide_id) DO NOTHING
                `;
                return json({ success: true });
            }

            if (action === 'unassign') {
                const { schedule_id, guide_id } = body;
                if (!schedule_id || !guide_id) return json({ error: 'Missing schedule_id or guide_id' }, 400);

                await sql`
                    DELETE FROM schedule_guides
                    WHERE schedule_id = ${schedule_id} AND guide_id = ${guide_id}
                `;
                return json({ success: true });
            }

            // Default: Create or Update a guide
            const { id, full_name, phone, cccd, dob, address, role, status, notes } = body;

            if (!full_name) return json({ error: 'full_name is required' }, 400);

            const ROLES = ['Hướng Dẫn Viên', 'Leader', 'Photo', 'Guider', 'Hậu Cần', 'Học Việc'];
            const guideRole = ROLES.includes(role) ? role : 'Hướng Dẫn Viên';

            if (id) {
                // Update
                const rows = await sql`
                    UPDATE guides
                    SET full_name=${full_name}, phone=${phone || null}, cccd=${cccd || null},
                        dob=${dob || null}, address=${address || null}, role=${guideRole},
                        status=${status || 'active'}, notes=${notes || null}
                    WHERE id=${id}
                    RETURNING *
                `;
                return json(rows[0]);
            } else {
                // Insert
                const rows = await sql`
                    INSERT INTO guides (full_name, phone, cccd, dob, address, role, status, notes)
                    VALUES (${full_name}, ${phone || null}, ${cccd || null}, ${dob || null},
                            ${address || null}, ${guideRole}, ${status || 'active'}, ${notes || null})
                    RETURNING *
                `;
                return json(rows[0], 201);
            }
        }

        // ── DELETE ──────────────────────────────────────
        if (method === 'DELETE') {
            const id = url.searchParams.get('id');
            if (!id) return json({ error: 'ID is required' }, 400);

            await sql`DELETE FROM guides WHERE id = ${id}`;
            return json({ success: true });
        }

        return new Response('Method Not Allowed', { status: 405 });

    } catch (error) {
        console.error('guides API error:', error);
        return json({ error: error.message }, 500);
    }
}
