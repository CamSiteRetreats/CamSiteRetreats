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

    const addCors = (res) => {
        const final = new Response(res.body, res);
        Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
        return final;
    };

    try {
        const idParam = url.searchParams.get('id');

        if (method === 'GET') {
            if (idParam) {
                const schedule = await sql`
                    SELECT * FROM schedules WHERE id = ${idParam}
                `;
                return addCors(Response.json(schedule[0] || { error: 'Not found' }));
            } else {
                const schedules = await sql`
                    SELECT 
                        s.*, 
                        (SELECT COUNT(*) FROM bookings b 
                         WHERE b.status NOT IN ('Đã hủy', 'Cancelled')
                         AND (
                             (b.schedule_id = s.id)
                             OR 
                             (b.schedule_id IS NULL AND s.group_label IS NULL AND
                              (b.tour ILIKE s.tour_name OR s.tour_name ILIKE b.tour) AND 
                              (
                                  (b.date = TO_CHAR(s.start_date, 'YYYY-MM-DD')) OR
                                  (b.date LIKE '%' || TO_CHAR(s.start_date, 'DD/MM') || '%') OR
                                  (b.date LIKE '%' || TO_CHAR(s.start_date, 'FMDD/FMMM') || '%') OR
                                  (b.date LIKE TO_CHAR(s.start_date, 'FMDD/FMMM') || ' - %') OR
                                  (b.date LIKE '% - ' || TO_CHAR(s.start_date, 'FMDD/FMMM')) OR
                                  (b.date LIKE TO_CHAR(s.start_date, 'DD/MM/YYYY') || '%')
                              )
                             )
                          )
                        ) as booked_count
                    FROM schedules s
                    ORDER BY s.start_date ASC
                `;
                return addCors(Response.json(schedules));
            }

        } else if (method === 'POST') {
            const body = await request.json();
            const { id, tour_name, start_date, end_date, slots, status, group_label, zalo_link, photo_links, photo_pin } = body;

            if (!tour_name || !start_date || !end_date) {
                return addCors(Response.json({ error: 'Missing required fields' }, { status: 400 }));
            }

            const slotsVal = parseInt(slots) || 0;
            const statusVal = status || 'Đang mở';
            const groupVal = group_label || null;
            const zaloVal = zalo_link || null;
            const pinVal = photo_pin || null;
            // Must cast to JSONB explicitly for Neon serverless
            const photoLinksJson = JSON.stringify(photo_links || []);

            if (id) {
                await sql`
                    UPDATE schedules
                    SET tour_name   = ${tour_name},
                        start_date  = ${start_date},
                        end_date    = ${end_date},
                        slots       = ${slotsVal},
                        status      = ${statusVal},
                        group_label = ${groupVal},
                        zalo_link   = ${zaloVal},
                        photo_links = ${photoLinksJson}::jsonb,
                        photo_pin   = ${pinVal}
                    WHERE id = ${id}
                `;
                return addCors(Response.json({ success: true, message: 'Updated schedule' }));
            } else {
                await sql`
                    INSERT INTO schedules
                        (tour_name, start_date, end_date, slots, status, group_label, zalo_link, photo_links, photo_pin)
                    VALUES
                        (${tour_name}, ${start_date}, ${end_date}, ${slotsVal}, ${statusVal}, ${groupVal}, ${zaloVal}, ${photoLinksJson}::jsonb, ${pinVal})
                `;
                return addCors(Response.json({ success: true, message: 'Created schedule' }));
            }

        } else if (method === 'DELETE') {
            if (!idParam) {
                return addCors(Response.json({ error: 'Missing ID' }, { status: 400 }));
            }
            await sql`DELETE FROM schedules WHERE id = ${idParam}`;
            return addCors(Response.json({ success: true, message: 'Deleted schedule' }));

        } else {
            return addCors(new Response('Method Not Allowed', { status: 405 }));
        }

    } catch (error) {
        console.error('API Schedules Error:', error);
        return Response.json({ error: error.message }, { status: 500, headers: corsHeaders });
    }
}
