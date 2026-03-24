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
                sort_order, custom_domain, is_visible,
                form_config, pickup_points, services
            } = body;

            if (!name || !duration || !level || !image) {
                return Response.json(
                    { success: false, message: 'Vui lòng nhập đầy đủ thông tin bắt buộc (tên, thời lượng, độ khó, ảnh chính).' },
                    { status: 400, headers: corsHeaders }
                );
            }

            const desc = shortDesc || short_desc || null;
            const visible = is_visible !== false ? true : false;
            const fConfig = form_config ? JSON.stringify(form_config) : JSON.stringify({
                step2: { show_pickup: true, show_medal_name: true, show_vegetarian: true, show_trekking_pole: true, show_special_request: true },
                step3: { show_coupon: true }
            });
            const pPoints = pickup_points ? JSON.stringify(pickup_points) : '[]';
            const srvs = services ? JSON.stringify(services) : '[]';

            const rows = await sql`
                INSERT INTO tours 
                    (name, duration, level, price, image, image2, image3, image4,
                     short_desc, region, type, altitude, sort_order, custom_domain, is_visible,
                     form_config, pickup_points, services) 
                VALUES 
                    (${name}, ${duration}, ${level}, ${price || null}, ${image},
                     ${image2 || null}, ${image3 || null}, ${image4 || null},
                     ${desc}, ${region || 'Miền Nam'}, ${type || 'TREKKING'},
                     ${altitude || null}, ${sort_order || 0}, ${custom_domain || null}, ${visible},
                     ${fConfig}::jsonb, ${pPoints}::jsonb, ${srvs}::jsonb)
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
                commission_rate, form_config, pickup_points, services
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
            } else if (form_config !== undefined || pickup_points !== undefined || services !== undefined) {
                // Chỉ cập nhật form_config (từ trang TourSettings)
                const fConfig = form_config ? JSON.stringify(form_config) : undefined;
                const pPoints = pickup_points ? JSON.stringify(pickup_points) : undefined;
                const srvs = services ? JSON.stringify(services) : undefined;

                let setClauses = [];
                let vals = [];
                let i = 1;
                if (fConfig !== undefined) { setClauses.push(`form_config=$${i++}::jsonb`); vals.push(fConfig); }
                if (pPoints !== undefined) { setClauses.push(`pickup_points=$${i++}::jsonb`); vals.push(pPoints); }
                if (srvs !== undefined) { setClauses.push(`services=$${i++}::jsonb`); vals.push(srvs); }
                vals.push(id);

                const q = `UPDATE tours SET ${setClauses.join(', ')} WHERE id=$${i} RETURNING *`;
                const rows = await sql.query(q, vals);
                if (rows.length === 0) return Response.json({ success: false, message: 'Không tìm thấy Tour.' }, { status: 404, headers: corsHeaders });
                response = Response.json({ success: true, message: 'Cập nhật cấu hình thành công', data: rows[0] }, { headers: corsHeaders });
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
