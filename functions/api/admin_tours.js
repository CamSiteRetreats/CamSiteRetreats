import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const method = request.method;
    const sql = getDb(env);

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        const id = url.searchParams.get('id');
        let response;

        if (method === 'GET') {
            const rows = await sql`SELECT * FROM tours ORDER BY sort_order ASC, id ASC`;
            response = Response.json({ success: true, data: rows });

        } else if (method === 'POST') {
            const body = await request.json();
            const {
                name, duration, level, price, image,
                image2, image3, image4,
                shortDesc, short_desc,
                region, type, altitude,
                sort_order, custom_domain, is_visible
            } = body;

            if (!name || !duration || !level || !image) {
                return Response.json(
                    { success: false, message: 'Vui lòng nhập đầy đủ thông tin bắt buộc (tên, thời lượng, độ khó, ảnh chính).' },
                    { status: 400, headers: corsHeaders }
                );
            }

            const desc = shortDesc || short_desc || null;
            const visible = is_visible !== false ? true : false;

            const rows = await sql`
                INSERT INTO tours 
                    (name, duration, level, price, image, image2, image3, image4,
                     short_desc, region, type, altitude, sort_order, custom_domain, is_visible) 
                VALUES 
                    (${name}, ${duration}, ${level}, ${price || null}, ${image},
                     ${image2 || null}, ${image3 || null}, ${image4 || null},
                     ${desc}, ${region || 'Miền Nam'}, ${type || 'TREKKING'},
                     ${altitude || null}, ${sort_order || 0}, ${custom_domain || null}, ${visible})
                RETURNING *
            `;
            response = Response.json({ success: true, message: 'Thêm Tour thành công', data: rows[0] }, { status: 201, headers: corsHeaders });

        } else if (method === 'PUT') {
            if (!id) return Response.json({ success: false, message: 'Thiếu ID Tour cần cập nhật.' }, { status: 400, headers: corsHeaders });

            const body = await request.json();
            const {
                name, duration, level, price, image,
                image2, image3, image4,
                shortDesc, short_desc,
                region, type, altitude,
                sort_order, custom_domain, is_visible,
                commission_rate
            } = body;

            // Nếu chỉ update commission_rate (từ trang Reports)
            if (commission_rate !== undefined && Object.keys(body).length === 1) {
                const rows = await sql`
                    UPDATE tours SET commission_rate=${commission_rate} WHERE id=${id} RETURNING *
                `;
                if (rows.length === 0) {
                    return Response.json({ success: false, message: 'Không tìm thấy Tour.' }, { status: 404, headers: corsHeaders });
                }
                response = Response.json({ success: true, message: 'Cập nhật hoa hồng thành công', data: rows[0] }, { headers: corsHeaders });
            } else {
                const desc = shortDesc || short_desc || null;
                const visible = is_visible !== false ? true : false;

                const rows = await sql`
                    UPDATE tours SET
                        name=${name}, duration=${duration}, level=${level}, price=${price || null},
                        image=${image}, image2=${image2 || null}, image3=${image3 || null}, image4=${image4 || null},
                        short_desc=${desc}, region=${region || 'Miền Nam'}, type=${type || 'TREKKING'},
                        altitude=${altitude || null}, sort_order=${sort_order || 0},
                        custom_domain=${custom_domain || null}, is_visible=${visible}
                    WHERE id=${id} RETURNING *
                `;

                if (rows.length === 0) {
                    return Response.json({ success: false, message: 'Không tìm thấy Tour để cập nhật.' }, { status: 404, headers: corsHeaders });
                }
                response = Response.json({ success: true, message: 'Cập nhật Tour thành công', data: rows[0] }, { headers: corsHeaders });
            }

        } else if (method === 'DELETE') {
            if (!id) return Response.json({ success: false, message: 'Thiếu ID Tour cần xóa.' }, { status: 400, headers: corsHeaders });

            const result = await sql`DELETE FROM tours WHERE id = ${id} RETURNING id`;
            if (result.length === 0) {
                return Response.json({ success: false, message: 'Không tìm thấy Tour để xóa.' }, { status: 404, headers: corsHeaders });
            }
            response = Response.json({ success: true, message: 'Xóa Tour thành công' }, { headers: corsHeaders });

        } else {
            return new Response(JSON.stringify({ success: false, message: 'Method Not Allowed' }), {
                status: 405,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        const final = new Response(response.body, response);
        Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
        return final;

    } catch (error) {
        console.error('API Admin Tours Error:', error);
        return Response.json({ success: false, error: error.message }, {
            status: 500,
            headers: corsHeaders
        });
    }
}
