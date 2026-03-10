import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const sql = getDb(env);

    try {
        if (request.method === 'GET') {
            // Fetch schedules with booked count calculation
            // Based on the logic in list-schedules.js or similar
            const schedules = await sql`
                SELECT 
                    s.*, 
                    (SELECT COUNT(*) FROM bookings b 
                     WHERE (b.tour ILIKE s.tour_name OR s.tour_name ILIKE b.tour)
                     AND b.status NOT IN ('Đã hủy', 'Cancelled')
                     AND (
                         -- ISO format
                         (b.date = TO_CHAR(s.start_date, 'YYYY-MM-DD')) OR
                         -- Format DD/MM or D/M
                         (b.date LIKE '%' || TO_CHAR(s.start_date, 'DD/MM') || '%') OR
                         (b.date LIKE '%' || TO_CHAR(s.start_date, 'FMDD/FMMM') || '%') OR
                         -- Date ranges like "5/4 - 5/4"
                         (b.date LIKE TO_CHAR(s.start_date, 'FMDD/FMMM') || ' - %') OR
                         (b.date LIKE '% - ' || TO_CHAR(s.start_date, 'FMDD/FMMM')) OR
                         -- Handle inverted formats or short years if any
                         (b.date LIKE TO_CHAR(s.start_date, 'DD/MM/YYYY') || '%')
                     )
                    ) as booked_count
                FROM schedules s
                ORDER BY s.start_date ASC
            `;

            return Response.json(schedules, {
                headers: { 'Access-Control-Allow-Origin': '*' }
            });
        }
        return new Response('Method not allowed', { status: 405 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
