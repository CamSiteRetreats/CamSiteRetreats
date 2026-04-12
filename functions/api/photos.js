import { getDb } from './_db';

/**
 * Public API: /api/photos?id=SCHEDULE_ID
 * Returns: tour_name, start_date, photo_links (only if PIN is not set, or after PIN validated on client)
 * The actual PIN validation is server-side via POST.
 */
export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const method = request.method;
    const sql = getDb(env);

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    const addCors = (res) => {
        const final = new Response(res.body, res);
        Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
        return final;
    };

    try {
        const id = url.searchParams.get('id');
        if (!id) {
            return addCors(Response.json({ error: 'Thiếu ID lịch trình.' }, { status: 400 }));
        }

        if (method === 'GET') {
            // Return public info only (no links yet, no PIN)
            const rows = await sql`
                SELECT id, tour_name, start_date, end_date, group_label,
                       CASE WHEN photo_pin IS NOT NULL THEN true ELSE false END as has_pin
                FROM schedules WHERE id = ${id}
            `;
            if (!rows || rows.length === 0) {
                return addCors(Response.json({ error: 'Không tìm thấy chuyến đi.' }, { status: 404 }));
            }
            return addCors(Response.json(rows[0]));

        } else if (method === 'POST') {
            // Validate PIN and return photo links
            const body = await request.json();
            const { pin } = body;

            const rows = await sql`
                SELECT id, tour_name, start_date, end_date, group_label, photo_links, photo_pin
                FROM schedules WHERE id = ${id}
            `;
            if (!rows || rows.length === 0) {
                return addCors(Response.json({ error: 'Không tìm thấy chuyến đi.' }, { status: 404 }));
            }

            const schedule = rows[0];

            // If no PIN is set, return links freely
            if (!schedule.photo_pin) {
                return addCors(Response.json({
                    success: true,
                    tour_name: schedule.tour_name,
                    start_date: schedule.start_date,
                    end_date: schedule.end_date,
                    group_label: schedule.group_label,
                    photo_links: schedule.photo_links || []
                }));
            }

            // Validate PIN
            if (!pin || pin.trim() !== schedule.photo_pin.trim()) {
                return addCors(Response.json({ error: 'Mã PIN không đúng. Vui lòng thử lại.' }, { status: 401 }));
            }

            return addCors(Response.json({
                success: true,
                tour_name: schedule.tour_name,
                start_date: schedule.start_date,
                end_date: schedule.end_date,
                group_label: schedule.group_label,
                photo_links: schedule.photo_links || []
            }));
        }

        return addCors(new Response('Method Not Allowed', { status: 405 }));

    } catch (error) {
        console.error('API Photos Error:', error);
        return addCors(Response.json({ error: error.message }, { status: 500 }));
    }
}
