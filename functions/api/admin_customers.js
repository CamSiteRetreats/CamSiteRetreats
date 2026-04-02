import { getDb } from './_db';

export async function onRequest(context) {
    const { request, env } = context;
    const sql = getDb(env);
    const url = new URL(request.url);
    const action = url.searchParams.get('action');

    // Set CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        // 0. LIỆT KÊ TOÀN BỘ KHÁCH HÀNG THÂN THIẾT (GET)
        if (request.method === 'GET') {
            const rows = await sql`SELECT * FROM crm_customers ORDER BY created_at DESC`;
            return Response.json({ success: true, data: rows }, { headers: corsHeaders });
        }

        // 1. CHỨC NĂNG TÌM KIẾM ĐỂ AUTO-FILL (SEARCH CUSTOMER)
        if (request.method === 'POST' && action === 'search') {
            const body = await request.json();
            const { keyword } = body;

            if (!keyword) {
                return Response.json({ success: false, message: 'Vui lòng nhập từ khóa tìm kiếm' }, { status: 400, headers: corsHeaders });
            }

            // A. Thử tìm trong CRM trước
            const crmRows = await sql`
                SELECT * FROM crm_customers 
                WHERE phone = ${keyword} OR UPPER(csr_code) = UPPER(${keyword}) OR full_name ILIKE ${'%' + keyword + '%'}
                ORDER BY CASE WHEN phone = ${keyword} THEN 0 WHEN UPPER(csr_code) = UPPER(${keyword}) THEN 1 ELSE 2 END
                LIMIT 1
            `;

            let customer = crmRows.length > 0 ? crmRows[0] : null;
            let phoneForBooking = customer ? customer.phone : keyword;

            // B. Luôn tìm booking gần nhất
            let latestBooking = {};
            if (customer) {
                const bookingRows = await sql`
                    SELECT id_card, address, diet, allergy, trekking_pole, special, dob, gender, medal_name, name
                    FROM bookings WHERE phone = ${phoneForBooking} 
                    ORDER BY created_at DESC LIMIT 1
                `;
                latestBooking = bookingRows[0] || {};
            } else {
                const bookingRows = await sql`
                    SELECT id_card, address, diet, allergy, trekking_pole, special, dob, gender, medal_name, name, phone
                    FROM bookings WHERE phone = ${keyword} OR name ILIKE ${'%' + keyword + '%'}
                    ORDER BY created_at DESC LIMIT 1
                `;
                if (bookingRows.length > 0) {
                    latestBooking = bookingRows[0];
                    if (latestBooking.phone) phoneForBooking = latestBooking.phone;
                }
            }

            if (!customer && Object.keys(latestBooking).length === 0) {
                return Response.json({ success: false, message: 'Không tìm thấy dữ liệu khách hàng cũ.' }, { status: 404, headers: corsHeaders });
            }

            // Helpers (same as original Node.js code)
            const normalizeDob = (val) => {
                if (!val) return '';
                if (val instanceof Date) return val.toISOString().split('T')[0];
                if (typeof val === 'string') {
                    const parts = val.split('/');
                    if (parts.length === 3) {
                        const [d, m, y] = parts;
                        if (y.length === 4) return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
                    }
                    if (/^\d{4}-\d{2}-\d{2}/.test(val)) return val.split('T')[0];
                }
                return val;
            };

            const normalizeGender = (g) => {
                if (!g) return 'Khác';
                if (g.toLowerCase() === 'nam') return 'Nam';
                if (g.toLowerCase() === 'nữ' || g.toLowerCase() === 'nu') return 'Nữ';
                return 'Khác';
            };

            return Response.json({
                success: true,
                data: {
                    csr_code: customer ? customer.csr_code : null,
                    full_name: customer ? customer.full_name : (latestBooking.name || ''),
                    phone: phoneForBooking,
                    cccd: (customer ? customer.cccd : null) || latestBooking.id_card || '',
                    dob: normalizeDob(customer ? customer.dob : null) || normalizeDob(latestBooking.dob) || '',
                    gender: normalizeGender(customer ? customer.gender : latestBooking.gender),
                    medical_notes: (customer ? customer.medical_notes : null) || latestBooking.allergy || '',
                    dietary: (customer ? customer.dietary : null) || latestBooking.diet || '',
                    address: latestBooking.address || '',
                    trekking_pole: latestBooking.trekking_pole || '',
                    medal_name: (latestBooking.medal_name || (customer ? latestBooking.name : '') || '').trim(),
                    loyalty_tier: customer ? customer.loyalty_tier : 'New',
                    tour_count: customer ? customer.tour_count : 1
                }
            }, { headers: corsHeaders });
        }

        // 2. CHỨC NĂNG LƯU / THÊM MỚI KHÁCH HÀNG (UPSERT)
        if (request.method === 'POST' && action === 'create') {
            const body = await request.json();
            const { full_name, phone, cccd, dob, gender, medical_notes, dietary } = body;

            if (!full_name || !phone) {
                return Response.json({ success: false, message: 'Họ tên và Số điện thoại là bắt buộc' }, { status: 400, headers: corsHeaders });
            }

            const check = await sql`SELECT id, csr_code FROM crm_customers WHERE phone = ${phone}`;
            let csrCode = '';
            const safeDob = dob ? dob : null;

            if (check.length > 0) {
                const custId = check[0].id;
                csrCode = check[0].csr_code;
                await sql`
                    UPDATE crm_customers 
                    SET full_name=${full_name}, cccd=${cccd || null}, dob=${safeDob}, 
                        gender=${gender}, medical_notes=${medical_notes}, dietary=${dietary}, 
                        updated_at=CURRENT_TIMESTAMP
                    WHERE id=${custId}
                `;
            } else {
                const randNum = Math.floor(100000 + Math.random() * 900000);
                csrCode = '#CSR' + randNum;
                await sql`
                    INSERT INTO crm_customers (csr_code, full_name, phone, cccd, dob, gender, medical_notes, dietary, loyalty_tier)
                    VALUES (${csrCode}, ${full_name}, ${phone}, ${cccd || null}, ${safeDob}, ${gender}, ${medical_notes}, ${dietary}, 'New')
                `;
            }

            return Response.json({ success: true, message: 'Đã lưu thông tin Khách hàng thành công!', csr_code: csrCode }, { headers: corsHeaders });
        }

        // 3. XÓA KHÁCH HÀNG (DELETE)
        if (request.method === 'DELETE') {
            const id = url.searchParams.get('id');
            const deleteBookings = url.searchParams.get('delete_bookings') === 'true';
            if (!id) return Response.json({ success: false, message: 'Thiếu ID khách hàng.' }, { status: 400, headers: corsHeaders });

            const custCheck = await sql`SELECT phone FROM crm_customers WHERE id = ${id}`;
            if (custCheck.length === 0) return Response.json({ success: false, message: 'Không tìm thấy khách hàng.' }, { status: 404, headers: corsHeaders });

            const phone = custCheck[0].phone;
            await sql`DELETE FROM crm_customers WHERE id = ${id}`;
            if (deleteBookings) await sql`DELETE FROM bookings WHERE phone = ${phone}`;

            return Response.json({ success: true, message: 'Đã xóa dữ liệu khách hàng thành công.' }, { headers: corsHeaders });
        }

        // 4. CẬP NHẬT GHI CHÚ NỘI BỘ (PATCH)
        if (request.method === 'PATCH' && action === 'update_notes') {
            const id = url.searchParams.get('id');
            const body = await request.json();
            const { notes } = body;
            if (!id) return Response.json({ success: false, message: 'Thiếu ID khách hàng.' }, { status: 400, headers: corsHeaders });

            try {
                await sql`UPDATE crm_customers SET notes=${notes || ''}, updated_at=CURRENT_TIMESTAMP WHERE id=${id}`;
                return Response.json({ success: true, message: 'Đã lưu ghi chú.' }, { headers: corsHeaders });
            } catch (noteErr) {
                // Cột notes chưa tồn tại trong DB → trả về lỗi thân thiện
                return Response.json({ success: false, message: 'Cột notes chưa được tạo trong DB. Chạy: ALTER TABLE crm_customers ADD COLUMN IF NOT EXISTS notes TEXT;' }, { status: 400, headers: corsHeaders });
            }
        }

        return new Response('Endpoint action Not Found', { status: 404, headers: corsHeaders });

    } catch (error) {
        console.error('CRM Customers API Error:', error);
        return Response.json({ error: error.message }, { status: 500, headers: corsHeaders });
    }
}
