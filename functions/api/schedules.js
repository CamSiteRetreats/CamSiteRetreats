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
            const schedules = await sql`
                SELECT 
                    s.*, 
                    (SELECT COUNT(*) FROM bookings b 
                     WHERE b.status NOT IN ('Đã hủy', 'Cancelled')
                     AND (
                         (b.schedule_id = s.id)
                         OR 
                         (b.schedule_id IS NULL AND 
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
            response = Response.json(schedules);

        } else if (method === 'POST') {
            const body = await request.json();
            const { id, tour_name, start_date, end_date, slots, status, group_label } = body;

            if (!tour_name || !start_date || !end_date) {
                return Response.json({ error: 'Missing required configuration fields' }, { status: 400, headers: corsHeaders });
            }

            if (id) {
                // Update existing
                await sql.query(
                    `UPDATE schedules SET tour_name=$1, start_date=$2, end_date=$3, slots=$4, status=$5, group_label=$6 WHERE id=$7`,
                    [tour_name, start_date, end_date, slots || 0, status || 'Đang mở', group_label || null, id]
                );
                response = Response.json({ success: true, message: 'Updated schedule' });
            } else {
                // Insert new
                await sql.query(
                    `INSERT INTO schedules (tour_name, start_date, end_date, slots, status, group_label) VALUES ($1, $2, $3, $4, $5, $6)`,
                    [tour_name, start_date, end_date, slots || 0, status || 'Đang mở', group_label || null]
                );
                response = Response.json({ success: true, message: 'Created schedule' });
            }

        } else if (method === 'DELETE') {
            const id = url.searchParams.get('id');
            if (!id) {
                return Response.json({ error: 'Missing ID' }, { status: 400, headers: corsHeaders });
            }

            await sql.query(`DELETE FROM schedules WHERE id = $1`, [id]);
            response = Response.json({ success: true, message: 'Deleted schedule' });

        } else {
            return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
        }

        const final = new Response(response.body, response);
        Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
        return final;

    } catch (error) {
        console.error('API Schedules Error:', error);
        return Response.json({ error: error.message }, { status: 500, headers: corsHeaders });
    }
}
