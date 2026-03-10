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
            const rows = await sql`SELECT * FROM tours_v2 ORDER BY id DESC`;
            response = Response.json({ success: true, data: rows });

        } else if (method === 'POST') {
            const body = await request.json();
            const { name, duration, level, price, status, image_url } = body;

            if (!name || !duration || !level || !price || !image_url) {
                return Response.json({ success: false, message: 'Vui lòng nhập đầy đủ thông tin bắt buộc.' }, { status: 400, headers: corsHeaders });
            }

            const rows = await sql.query(
                `INSERT INTO tours_v2 (name, duration, level, price, status, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [name, duration, level, price, status || 'active', image_url]
            );
            response = Response.json({ success: true, message: 'Thêm Tour thành công', data: rows[0] }, { status: 201 });

        } else if (method === 'PUT') {
            if (!id) return Response.json({ success: false, message: 'Thiếu ID Tour cần cập nhật.' }, { status: 400, headers: corsHeaders });

            const body = await request.json();
            const { name, duration, level, price, status, image_url } = body;

            const rows = await sql.query(
                `UPDATE tours_v2 SET name=$1, duration=$2, level=$3, price=$4, status=$5, image_url=$6 WHERE id=$7 RETURNING *`,
                [name, duration, level, price, status, image_url, id]
            );

            if (rows.length === 0) {
                return Response.json({ success: false, message: 'Không tìm thấy Tour để cập nhật.' }, { status: 404, headers: corsHeaders });
            }
            response = Response.json({ success: true, message: 'Cập nhật Tour thành công', data: rows[0] });

        } else if (method === 'DELETE') {
            if (!id) return Response.json({ success: false, message: 'Thiếu ID Tour cần xóa.' }, { status: 400, headers: corsHeaders });

            const result = await sql.query('DELETE FROM tours_v2 WHERE id = $1 RETURNING id', [id]);
            if (result.length === 0) {
                return Response.json({ success: false, message: 'Không tìm thấy Tour để xóa.' }, { status: 404, headers: corsHeaders });
            }
            response = Response.json({ success: true, message: 'Xóa Tour thành công' });

        } else {
            return new Response('Method Not Allowed', { status: 405 });
        }

        const final = new Response(response.body, response);
        Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
        return final;

    } catch (error) {
        console.error('API Admin Tours Error:', error);
        return Response.json({ error: error.message }, {
            status: 500,
            headers: corsHeaders
        });
    }
}
