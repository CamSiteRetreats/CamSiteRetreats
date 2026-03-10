import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const sql = getDb(env);
    const method = request.method;

    try {
        if (method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            });
        }

        if (method === 'GET') {
            const schedules = await sql`
                SELECT s.*, 
                (SELECT COUNT(*) FROM bookings b 
                 WHERE (b.tour = s.tour_name OR s.tour_name LIKE '%' || b.tour || '%') 
                 AND b.status NOT IN ('Đã hủy', 'Cancelled')
                 AND (
                    b.date = TO_CHAR(s.start_date, 'DD/MM/YYYY') 
                    OR b.date = TO_CHAR(s.start_date, 'YYYY-MM-DD')
                    OR b.date = TO_CHAR(s.start_date, 'FMDD/FMMM/YYYY')
                    OR b.date LIKE TO_CHAR(s.start_date, 'DD/MM') || '%'
                    OR b.date LIKE TO_CHAR(s.start_date, 'FMDD/FMMM') || '%'
                 )
                ) as booked_count
                FROM schedules s 
                ORDER BY s.start_date ASC
            `;

            return Response.json(schedules, {
                headers: { 'Access-Control-Allow-Origin': '*' }
            });
        }

        if (method === 'POST') {
            const body = await request.json();
            const { id, tour_name, start_date, end_date, slots, status } = body;

            if (id) {
                // Update
                const result = await sql`
                    UPDATE schedules 
                    SET tour_name=${tour_name}, start_date=${start_date}, end_date=${end_date}, slots=${slots}, status=${status}
                    WHERE id=${id}
                    RETURNING *;
                `;
                return Response.json(result[0] || {}, {
                    headers: { 'Access-Control-Allow-Origin': '*' }
                });
            } else {
                // Insert
                const result = await sql`
                    INSERT INTO schedules (tour_name, start_date, end_date, slots, status)
                    VALUES (${tour_name}, ${start_date}, ${end_date}, ${slots}, ${status || 'Đang mở'})
                    RETURNING *;
                `;
                return Response.json(result[0] || {}, {
                    status: 201,
                    headers: { 'Access-Control-Allow-Origin': '*' }
                });
            }
        }

        if (method === 'DELETE') {
            const url = new URL(request.url);
            const id = url.searchParams.get('id');
            if (!id) return Response.json({ error: 'ID is required' }, { status: 400 });

            await sql`DELETE FROM schedules WHERE id = ${id}`;
            return Response.json({ success: true }, {
                headers: { 'Access-Control-Allow-Origin': '*' }
            });
        }

        return new Response('Method Not Allowed', { status: 405 });
    } catch (error) {
        console.error('Error in schedules API:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
