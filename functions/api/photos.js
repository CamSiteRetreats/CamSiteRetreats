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
            // Return public info only
            const rows = await sql`
                SELECT id, tour_name, start_date, end_date, group_label
                FROM schedules WHERE id = ${id}
            `;
            if (!rows || rows.length === 0) {
                return addCors(Response.json({ error: 'Không tìm thấy chuyến đi.' }, { status: 404 }));
            }
            // Always return has_pin: true so the client shows the PIN screen
            return addCors(Response.json({ ...rows[0], has_pin: true }));

        } else if (method === 'POST') {
            // Validate PIN and return photo links
            const body = await request.json();
            const { pin } = body;

            if (!pin || pin.length !== 4) {
                return addCors(Response.json({ error: 'Mã PIN phải là 4 số cuối số điện thoại của bạn.' }, { status: 400 }));
            }

            const rows = await sql`
                SELECT id, tour_name, start_date, end_date, group_label, photo_links
                FROM schedules WHERE id = ${id}
            `;
            if (!rows || rows.length === 0) {
                return addCors(Response.json({ error: 'Không tìm thấy chuyến đi.' }, { status: 404 }));
            }

            const schedule = rows[0];

            if (!schedule.photo_links || schedule.photo_links.length === 0) {
                return addCors(Response.json({ error: 'Chưa có ảnh nào cho chuyến đi này.' }, { status: 404 }));
            }

            // Validate PIN dynamically against bookings
            const activeBookings = await sql`
                SELECT phone FROM bookings 
                WHERE status NOT IN ('Đã hủy', 'Cancelled')
                AND (
                    (schedule_id = ${id})
                    OR 
                    (schedule_id IS NULL AND ${schedule.group_label} IS NULL AND
                     (tour ILIKE ${schedule.tour_name} OR ${schedule.tour_name} ILIKE tour) AND 
                     (
                         (date = TO_CHAR(${schedule.start_date}::timestamp, 'YYYY-MM-DD')) OR
                         (date LIKE '%' || TO_CHAR(${schedule.start_date}::timestamp, 'DD/MM') || '%') OR
                         (date LIKE '%' || TO_CHAR(${schedule.start_date}::timestamp, 'FMDD/FMMM') || '%') OR
                         (date LIKE TO_CHAR(${schedule.start_date}::timestamp, 'FMDD/FMMM') || ' - %') OR
                         (date LIKE '% - ' || TO_CHAR(${schedule.start_date}::timestamp, 'FMDD/FMMM')) OR
                         (date LIKE TO_CHAR(${schedule.start_date}::timestamp, 'DD/MM/YYYY') || '%')
                     )
                    )
                )
            `;

            const isValidPin = activeBookings.some(b => {
                let cleanPhone = (b.phone || '').replace(/\D/g, '');
                return cleanPhone.endsWith(pin.trim());
            });

            if (!isValidPin) {
                // Return a friendly error message since multiple users will try this
                return addCors(Response.json({ error: 'Không tìm thấy số điện thoại với 4 số cuối này trong danh sách đoàn. Vui lòng thử lại.' }, { status: 401 }));
            }

            return addCors(Response.json({
                success: true,
                tour_name: schedule.tour_name,
                start_date: schedule.start_date,
                end_date: schedule.end_date,
                group_label: schedule.group_label,
                photo_links: schedule.photo_links
            }));
        }

        return addCors(new Response('Method Not Allowed', { status: 405 }));

    } catch (error) {
        console.error('API Photos Error:', error);
        return addCors(Response.json({ error: error.message }, { status: 500 }));
    }
}
