import { getDb } from './_db';
import { sendEmail } from './_mail';

export async function onRequest(context) {
    const { request, env } = context;
    const sql = getDb(env);
    const url = new URL(request.url);

    // Set CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        if (request.method === 'GET') {
            const leads = await sql('SELECT * FROM leads ORDER BY created_at DESC');
            return Response.json(leads, { headers: corsHeaders });
        }

        if (request.method === 'POST') {
            const body = await request.json();
            const { id, name, phone, tour, date, message, status, sale_id, sale_name, sale_avatar } = body;

            if (id) {
                // Update
                const result = await sql`
                    UPDATE leads 
                    SET name=${name ?? null}, phone=${phone ?? null}, tour=${tour ?? null}, 
                        date=${date ?? null}, message=${message ?? null}, status=${status ?? null}, 
                        sale_id=${sale_id ?? null}, sale_name=${sale_name ?? null}, sale_avatar=${sale_avatar ?? null}
                    WHERE id=${id}
                    RETURNING *
                `;
                return Response.json(result[0], { headers: corsHeaders });
            } else {
                // Insert
                const result = await sql`
                    INSERT INTO leads (name, phone, tour, date, message, status, sale_id, sale_name, sale_avatar)
                    VALUES (${name ?? null}, ${phone ?? null}, ${tour ?? null}, ${date ?? null}, 
                            ${message ?? null}, ${status ?? 'Mới'}, ${sale_id ?? null}, 
                            ${sale_name ?? null}, ${sale_avatar ?? null})
                    RETURNING *
                `;
                const newLead = result[0];

                // --- Tạo booking tương ứng ---
                let newBookingId = null;
                if (newLead) {
                    try {
                        const bookingResult = await sql`
                            INSERT INTO bookings (name, phone, tour, date, status, total_price, deposit, sale_id, sale_name, special)
                            VALUES (${newLead.name}, ${newLead.phone}, ${newLead.tour ?? null}, ${newLead.date ?? null},
                                    'Chờ tư vấn', 0, 0, null, null, ${newLead.message ?? null})
                            RETURNING id
                        `;
                        newBookingId = bookingResult[0]?.id;
                    } catch (bookingErr) {
                        console.error('Lỗi tạo booking từ lead:', bookingErr);
                    }
                }

                // --- Send Email Notification ---
                let mailStatus = null;
                if (newLead) {
                    mailStatus = await sendEmail({
                        env,
                        subject: `🍀 Khách hàng mới: ${newLead.name}`,
                        html: `
                            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                                <h2 style="color: #E85D04;">Có khách hàng mới đăng kỹ tư vấn!</h2>
                                <p><b>Họ và tên:</b> ${newLead.name}</p>
                                <p><b>Số điện thoại:</b> ${newLead.phone}</p>
                                <p><b>Link Zalo:</b> <a href="https://zalo.me/${newLead.phone}">https://zalo.me/${newLead.phone}</a></p>
                                <p><b>Tour quan tâm:</b> ${newLead.tour}</p>
                                <p><b>Ngày dự kiến:</b> ${newLead.date}</p>
                                <p><b>Lời nhắn:</b> ${newLead.message || '(Không có)'}</p>
                                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                                <p style="font-size: 12px; color: #999;">Email được gửi tự động từ hệ thống CAM SITE RETREATS.</p>
                            </div>
                        `
                    });
                }

                return Response.json({ ...newLead, _mailStatus: mailStatus, _bookingId: newBookingId }, {
                    status: 201,
                    headers: corsHeaders
                });
            }
        }

        if (request.method === 'DELETE') {
            const id = url.searchParams.get('id');
            if (!id) return Response.json({ error: 'ID is required' }, { status: 400, headers: corsHeaders });
            await sql`DELETE FROM leads WHERE id = ${id}`;
            return Response.json({ success: true }, { headers: corsHeaders });
        }

        return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    } catch (error) {
        console.error('Error in leads API:', error);
        return Response.json({ error: error.message }, { status: 500, headers: corsHeaders });
    }
}
