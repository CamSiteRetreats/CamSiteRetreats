import { getDb } from './_db';
import { sendEmail } from './_mail';

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
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    try {
        let response;
        if (method === 'GET') {
            const rows = await sql`SELECT * FROM bookings ORDER BY created_at DESC`;
            response = Response.json(rows);
        } else if (method === 'POST') {
            try {
                const body = await request.json();
                console.log("BOOKING POST BODY:", body);

                // Form booking flow thường không truyền `id` thật của booking mà truyền `id_card`.
                // Nếu `id` có trong body (là number/string of number) và là trường hợp Admin Update:
                const { id } = body;

                if (id && body.action === 'update') {
                    // Update
                    const {
                        name, phone, tour, date, status, total_price, deposit, discount,
                        sale_id, sale_name, customer_id, dob, gender, address,
                        id_card, diet, trekking_pole, allergy, special, medal_name, commitments, deposit_required
                    } = body;

                    const rows = await sql`
                        UPDATE bookings SET
                            name = COALESCE(${name}, name),
                            phone = COALESCE(${phone}, phone),
                            tour = COALESCE(${tour}, tour),
                            date = COALESCE(${date}, date),
                            status = COALESCE(${status}, status),
                            total_price = COALESCE(${total_price}, total_price),
                            deposit = COALESCE(${deposit}, deposit),
                            discount = COALESCE(${discount}, discount),
                            sale_id = COALESCE(${sale_id}, sale_id),
                            sale_name = COALESCE(${sale_name}, sale_name),
                            customer_id = COALESCE(${customer_id}, customer_id),
                            dob = COALESCE(${dob}, dob),
                            gender = COALESCE(${gender}, gender),
                            address = COALESCE(${address}, address),
                            id_card = COALESCE(${id_card}, id_card),
                            diet = COALESCE(${diet}, diet),
                            trekking_pole = COALESCE(${trekking_pole}, trekking_pole),
                            allergy = COALESCE(${allergy}, allergy),
                            special = COALESCE(${special}, special),
                            medal_name = COALESCE(${medal_name}, medal_name),
                            commitments = COALESCE(${commitments}, commitments),
                            deposit_required = COALESCE(${deposit_required}, deposit_required)
                        WHERE id = ${id}
                        RETURNING *
                    `;
                    if (rows.length === 0) return Response.json({ error: 'Booking Not found for update' }, { status: 404 });
                    response = Response.json(rows[0]);
                } else {
                    // Insert
                    const {
                        name, phone, tour, date, status, total_price, deposit, discount,
                        sale_id, sale_name, customer_id, dob, gender, address,
                        id_card, diet, trekking_pole, allergy, special, medal_name, commitments, deposit_required
                    } = body;

                    const rows = await sql`
                        INSERT INTO bookings (
                            name, phone, tour, date, status, total_price, deposit, discount,
                            sale_id, sale_name, customer_id, dob, gender, address, 
                            id_card, diet, trekking_pole, allergy, special, medal_name, commitments, deposit_required
                        )
                        VALUES (
                            ${name ?? null}, ${phone ?? null}, ${tour ?? null}, ${date ?? null}, ${status ?? 'Chờ xác nhận cọc'},
                            ${total_price ?? null}, ${deposit ?? null}, ${discount ?? 0}, ${sale_id ?? null}, ${sale_name ?? null},
                            ${customer_id ?? null}, ${dob ?? null}, ${gender ?? null}, ${address ?? null}, ${id_card ?? null},
                            ${diet ?? null}, ${trekking_pole ?? null}, ${allergy ?? null}, ${special ?? null},
                            ${medal_name ?? null}, ${commitments ?? null}, ${deposit_required ?? 1000000}
                        )
                        RETURNING *
                    `;
                    const newBooking = rows[0];

                    // Send Email
                    let mailStatus = null;
                    if (newBooking) {
                        try {
                            mailStatus = await sendEmail({
                                subject: `🔥 ĐƠN ĐẶT TOUR MỚI: ${newBooking.name}`,
                                html: `<p>Có đơn đặt tour mới từ Website cho tour <b>${newBooking.tour}</b> vào ngày ${newBooking.date}.</p>`
                            }, env);
                        } catch (e) {
                            console.warn("Mail send error:", e);
                        }
                    }
                    response = Response.json({ ...newBooking, _mailStatus: mailStatus }, { status: 201 });
                }
            } catch (postErr) {
                console.error("POST Booking Error:", postErr);
                return Response.json({ error: postErr.message }, { status: 500 });
            }
        } else if (method === 'DELETE') {
            const id = url.searchParams.get('id');
            if (!id) return Response.json({ error: 'ID is required' }, { status: 400 });
            await sql.query('DELETE FROM bookings WHERE id = $1', [id]);
            response = Response.json({ success: true });
        } else {
            return new Response('Method Not Allowed', { status: 405 });
        }

        const finalResponse = new Response(response.body, response);
        finalResponse.headers.set('Access-Control-Allow-Origin', '*');
        return finalResponse;

    } catch (error) {
        console.error('Error in bookings API:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
