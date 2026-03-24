import { getDb } from './_db.js';

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const method = request.method;
    const sql = getDb(env);

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json',
    };

    if (method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

    // ================== GET ==================
    if (method === 'GET') {
        const scheduleId = url.searchParams.get('schedule_id');
        const isAdmin    = url.searchParams.get('admin') === '1';

        if (!scheduleId) {
            return new Response(JSON.stringify({ error: 'Thiếu schedule_id' }), { status: 400, headers: corsHeaders });
        }

        // Admin: lấy tất cả đánh giá + thống kê
        if (isAdmin) {
            const token = request.headers.get('Authorization')?.replace('Bearer ', '');
            if (!token) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders });

            const reviews = await sql`
                SELECT * FROM tour_reviews
                WHERE schedule_id = ${scheduleId}
                ORDER BY submitted_at DESC
            `;

            const stats = await sql`
                SELECT
                    COUNT(*)::int                              AS total,
                    ROUND(AVG(rating_vehicle)::numeric, 1)    AS avg_vehicle,
                    ROUND(AVG(rating_guide)::numeric, 1)      AS avg_guide,
                    ROUND(AVG(rating_meals)::numeric, 1)      AS avg_meals,
                    ROUND(AVG(rating_overall)::numeric, 1)    AS avg_overall
                FROM tour_reviews
                WHERE schedule_id = ${scheduleId}
            `;

            return new Response(JSON.stringify({ reviews, stats: stats[0] }), { headers: corsHeaders });
        }

        // Public: lấy thông tin chuyến để hiển thị trên form
        const schedule = await sql`
            SELECT s.id, s.tour_name, s.start_date, s.end_date,
                   (SELECT COUNT(*)::int FROM tour_reviews WHERE schedule_id = s.id) AS review_count
            FROM schedules s
            WHERE s.id = ${scheduleId}
            LIMIT 1
        `;

        if (!schedule.length) {
            return new Response(JSON.stringify({ error: 'Không tìm thấy chuyến đi' }), { status: 404, headers: corsHeaders });
        }

        return new Response(JSON.stringify(schedule[0]), { headers: corsHeaders });
    }

    // ================== POST ==================
    if (method === 'POST') {
        let body;
        try { body = await request.json(); } catch {
            return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: corsHeaders });
        }

        const {
            schedule_id,
            reviewer_name,
            is_anonymous = false,
            rating_vehicle, rating_guide, rating_meals, rating_overall,
            comment_vehicle, comment_guide, comment_meals, comment_general,
            suggestion
        } = body;

        if (!schedule_id) {
            return new Response(JSON.stringify({ error: 'Thiếu schedule_id' }), { status: 400, headers: corsHeaders });
        }

        // Validate ratings (1-5)
        const ratings = [rating_vehicle, rating_guide, rating_meals, rating_overall].filter(Boolean);
        if (ratings.some(r => r < 1 || r > 5)) {
            return new Response(JSON.stringify({ error: 'Điểm đánh giá không hợp lệ (1-5)' }), { status: 400, headers: corsHeaders });
        }

        const safeName = is_anonymous ? null : (reviewer_name?.trim() || null);

        await sql`
            INSERT INTO tour_reviews
              (schedule_id, reviewer_name, is_anonymous,
               rating_vehicle, rating_guide, rating_meals, rating_overall,
               comment_vehicle, comment_guide, comment_meals, comment_general, suggestion)
            VALUES
              (${schedule_id}, ${safeName}, ${is_anonymous},
               ${rating_vehicle || null}, ${rating_guide || null},
               ${rating_meals  || null}, ${rating_overall || null},
               ${comment_vehicle || null}, ${comment_guide || null},
               ${comment_meals  || null}, ${comment_general || null},
               ${suggestion || null})
        `;

        return new Response(JSON.stringify({ success: true, message: 'Cảm ơn bạn đã đánh giá!' }), { headers: corsHeaders });
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders });
}
