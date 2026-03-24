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

    if (method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

    const wrap = (res) => {
        const r = new Response(res.body, res);
        Object.entries(corsHeaders).forEach(([k, v]) => r.headers.set(k, v));
        return r;
    };

    try {
        const action = url.searchParams.get('action');

        // ─── PUBLIC: Xác thực mã giảm giá ───────────────────────────────────
        if (method === 'GET' && action === 'validate') {
            const code = (url.searchParams.get('code') || '').trim().toUpperCase();
            const price = parseInt(url.searchParams.get('price') || '0');

            if (!code) return wrap(Response.json({ success: false, message: 'Vui lòng nhập mã.' }, { status: 400 }));

            const rows = await sql`
                SELECT * FROM coupons
                WHERE UPPER(code) = ${code}
                  AND active = true
                  AND (expires_at IS NULL OR expires_at > NOW())
                  AND (max_uses IS NULL OR used_count < max_uses)
            `;

            if (rows.length === 0) return wrap(Response.json({ success: false, message: 'Mã giảm giá không hợp lệ hoặc đã hết hạn.' }));

            const coupon = rows[0];

            if (price > 0 && price < coupon.min_price) {
                return wrap(Response.json({
                    success: false,
                    message: `Đơn hàng tối thiểu ${coupon.min_price.toLocaleString('vi-VN')}đ để dùng mã này.`
                }));
            }

            // Tính giá trị giảm
            let discountAmount = 0;
            if (coupon.discount_type === 'percentage') {
                discountAmount = Math.round((price * coupon.value) / 100);
            } else {
                discountAmount = coupon.value;
            }
            // Không giảm quá giá trị đơn hàng
            if (discountAmount > price) discountAmount = price;

            return wrap(Response.json({
                success: true,
                coupon: {
                    code: coupon.code,
                    discount_type: coupon.discount_type,
                    value: coupon.value,
                    description: coupon.description,
                },
                discount_amount: discountAmount,
                message: coupon.discount_type === 'percentage'
                    ? `Áp dụng thành công! Giảm ${coupon.value}% (${discountAmount.toLocaleString('vi-VN')}đ)`
                    : `Áp dụng thành công! Giảm ${discountAmount.toLocaleString('vi-VN')}đ`
            }));
        }

        // ─── ADMIN: Lấy danh sách coupons ────────────────────────────────────
        if (method === 'GET') {
            const rows = await sql`SELECT * FROM coupons ORDER BY created_at DESC`;
            return wrap(Response.json({ success: true, data: rows }));
        }

        // ─── ADMIN: Tạo coupon mới ────────────────────────────────────────────
        if (method === 'POST') {
            const body = await request.json();
            const { code, discount_type, value, min_price, max_uses, expires_at, description } = body;

            if (!code || !discount_type || value === undefined) {
                return wrap(Response.json({ success: false, message: 'Thiếu thông tin bắt buộc.' }, { status: 400 }));
            }

            const rows = await sql`
                INSERT INTO coupons (code, discount_type, value, min_price, max_uses, expires_at, description)
                VALUES (${code.toUpperCase()}, ${discount_type}, ${value}, ${min_price || 0},
                        ${max_uses || null}, ${expires_at || null}, ${description || null})
                RETURNING *
            `;
            return wrap(Response.json({ success: true, data: rows[0] }, { status: 201 }));
        }

        // ─── ADMIN: Cập nhật coupon ───────────────────────────────────────────
        if (method === 'PUT') {
            const id = url.searchParams.get('id');
            if (!id) return wrap(Response.json({ success: false, message: 'Thiếu ID.' }, { status: 400 }));

            const body = await request.json();
            const { code, discount_type, value, min_price, max_uses, expires_at, description, active } = body;

            const rows = await sql`
                UPDATE coupons SET
                    code = ${code?.toUpperCase()},
                    discount_type = ${discount_type},
                    value = ${value},
                    min_price = ${min_price || 0},
                    max_uses = ${max_uses || null},
                    expires_at = ${expires_at || null},
                    description = ${description || null},
                    active = ${active !== false}
                WHERE id = ${id}
                RETURNING *
            `;
            if (rows.length === 0) return wrap(Response.json({ success: false, message: 'Không tìm thấy.' }, { status: 404 }));
            return wrap(Response.json({ success: true, data: rows[0] }));
        }

        // ─── ADMIN: Xóa coupon ────────────────────────────────────────────────
        if (method === 'DELETE') {
            const id = url.searchParams.get('id');
            if (!id) return wrap(Response.json({ success: false, message: 'Thiếu ID.' }, { status: 400 }));
            await sql`DELETE FROM coupons WHERE id = ${id}`;
            return wrap(Response.json({ success: true }));
        }

        return wrap(new Response('Method Not Allowed', { status: 405 }));

    } catch (error) {
        console.error('Coupon API Error:', error);
        return wrap(Response.json({ success: false, error: error.message }, { status: 500 }));
    }
}
