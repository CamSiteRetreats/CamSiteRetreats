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
            const body = await request.json();
            const { id } = body;

            if (id) {
                // Update
                const possibleFields = [
                    'name', 'phone', 'tour', 'date', 'status', 'total_price', 'deposit', 'discount',
                    'sale_id', 'sale_name', 'customer_id', 'dob', 'gender', 'address',
                    'id_card', 'diet', 'trekking_pole', 'allergy', 'special', 'medal_name', 'commitments', 'deposit_required'
                ];

                const fields = [];
                const values = [];
                let idx = 1;

                for (const field of possibleFields) {
                    if (body.hasOwnProperty(field)) {
                        fields.push(`${field}=$${idx}`);
                        values.push(body[field]);
                        idx++;
                    }
                }

                if (fields.length === 0) return Response.json({ error: 'No fields' }, { status: 400 });

                values.push(id);
                const query = `UPDATE bookings SET ${fields.join(', ')} WHERE id=$${idx} RETURNING *`;
                const rows = await sql.query(query, values);
                if (rows.length === 0) return Response.json({ error: 'Not found' }, { status: 404 });
                response = Response.json(rows[0]);
            } else {
                // Insert
                const {
                    name, phone, tour, date, status, total_price, deposit, discount,
                    sale_id, sale_name, customer_id, dob, gender, address,
                    id_card, diet, trekking_pole, allergy, special, medal_name, commitments, deposit_required
                } = body;

                const query = `
                    INSERT INTO bookings (
                        name, phone, tour, date, status, total_price, deposit, discount,
                        sale_id, sale_name, customer_id, dob, gender, address, 
                        id_card, diet, trekking_pole, allergy, special, medal_name, commitments, deposit_required
                    )
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
                    RETURNING *
                `;
                const values = [
                    name ?? null, phone ?? null, tour ?? null, date ?? null, status ?? 'Chờ xác nhận cọc',
                    total_price ?? null, deposit ?? null, discount ?? 0, sale_id ?? null, sale_name ?? null,
                    customer_id ?? null, dob ?? null, gender ?? null, address ?? null, id_card ?? null,
                    diet ?? null, trekking_pole ?? null, allergy ?? null, special ?? null,
                    medal_name ?? null, commitments ?? null, deposit_required ?? 1000000
                ];

                const rows = await sql.query(query, values);
                const newBooking = rows[0];

                // Send Email
                let mailStatus = null;
                if (newBooking) {
                    mailStatus = await sendEmail({
                        subject: `🔥 ĐƠN ĐẶT TOUR MỚI: ${newBooking.name}`,
                        html: `<p>Có đơn đặt tour mới từ Website cho tour <b>${newBooking.tour}</b> vào ngày ${newBooking.date}.</p>`
                    }, env);
                }
                response = Response.json({ ...newBooking, _mailStatus: mailStatus }, { status: 201 });
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
