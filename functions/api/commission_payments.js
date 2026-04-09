import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const method = request.method;
    const sql = getDb(env);

    // CORS
    if (method === 'OPTIONS') {
        return new Response(null, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    const corsHeaders = { 'Access-Control-Allow-Origin': '*' };

    try {
        if (method === 'GET') {
            const saleId = url.searchParams.get('sale_id');

            if (saleId) {
                // Lịch sử thanh toán của 1 sale cụ thể
                const rows = await sql`
                    SELECT * FROM commission_payments
                    WHERE sale_id = ${saleId}
                    ORDER BY created_at DESC
                `;
                return Response.json(rows, { headers: corsHeaders });
            } else {
                // Tất cả lịch sử (Admin)
                const rows = await sql`
                    SELECT * FROM commission_payments
                    ORDER BY created_at DESC
                `;
                return Response.json(rows, { headers: corsHeaders });
            }

        } else if (method === 'POST') {
            const body = await request.json();
            const { sale_id, sale_name, booking_ids, paid_by, note } = body;

            if (!booking_ids || !Array.isArray(booking_ids) || booking_ids.length === 0) {
                return Response.json({ error: 'Không có đơn nào được chọn' }, { status: 400, headers: corsHeaders });
            }

            // Lấy các booking để tính tổng hoa hồng
            const bookings = await sql`
                SELECT b.id, b.total_price, b.discount, b.services_booked, b.tour,
                       COALESCE(t.commission_rate, 5) AS commission_rate
                FROM bookings b
                LEFT JOIN tours t ON LOWER(TRIM(b.tour)) = LOWER(TRIM(t.name))
                WHERE b.id = ANY(${booking_ids}::int[])
            `;

            // Tính tổng hoa hồng
            let totalAmount = 0;
            bookings.forEach(b => {
                // Tính tổng dịch vụ phát sinh
                let servicesTotal = 0;
                if (b.services_booked) {
                    try {
                        const svs = Array.isArray(b.services_booked)
                            ? b.services_booked
                            : JSON.parse(b.services_booked);
                        if (Array.isArray(svs)) {
                            servicesTotal = svs.reduce((sum, s) => sum + (parseInt(s.price) || 0), 0);
                        }
                    } catch (e) {
                        // Regex fallback for legacy JS literal format
                        const priceMatches = String(b.services_booked).match(/price:\s*(\d+)/g) || [];
                        servicesTotal = priceMatches.reduce((sum, m) => sum + Number(m.replace(/price:\s*/, '')), 0);
                    }
                }
                const basePrice = (parseInt(b.total_price) || 0) - (parseInt(b.discount) || 0) - servicesTotal;
                const commission = Math.max(0, basePrice) * ((parseFloat(b.commission_rate) || 5) / 100);
                totalAmount += commission;
            });

            totalAmount = Math.round(totalAmount);

            // Tạo bản ghi thanh toán
            const [payment] = await sql`
                INSERT INTO commission_payments (sale_id, sale_name, total_orders, total_amount, booking_ids, paid_by, note)
                VALUES (
                    ${sale_id ?? null},
                    ${sale_name ?? null},
                    ${booking_ids.length},
                    ${totalAmount},
                    ${JSON.stringify(booking_ids)}::jsonb,
                    ${paid_by ?? 'Admin'},
                    ${note ?? null}
                )
                RETURNING *
            `;

            // Cập nhật các booking: đánh dấu đã thanh toán HH
            await sql`
                UPDATE bookings
                SET commission_paid = TRUE,
                    commission_paid_at = NOW(),
                    commission_payment_id = ${payment.id}
                WHERE id = ANY(${booking_ids}::int[])
            `;

            const finalResponse = new Response(JSON.stringify({ success: true, payment }), {
                status: 201,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
            return finalResponse;

        } else {
            return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
        }

    } catch (error) {
        console.error('Error in commission_payments API:', error);
        return Response.json({ error: error.message }, { status: 500, headers: corsHeaders });
    }
}
