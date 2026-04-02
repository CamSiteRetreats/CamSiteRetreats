const db = require('../utils/db');

module.exports = async (req, res) => {
    // Enable CORS for V2 Admin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { action } = req.query;

        // 0. LIỆT KÊ TOÀN BỘ KHÁCH HÀNG THÂN THIẾT (GET)
        if (req.method === 'GET') {
            const { rows } = await db.query('SELECT * FROM crm_customers ORDER BY created_at DESC');
            return res.status(200).json({ success: true, data: rows });
        }

        // 1. CHỨC NĂNG TÌM KIẾM ĐỂ AUTO-FILL (SEARCH CUSTOMER)
        if (req.method === 'POST' && action === 'search') {
            const { keyword } = req.body; // Keyword có thể là SĐT hoặc Mã #CSR...

            if (!keyword) {
                return res.status(400).json({ success: false, message: 'Vui lòng nhập từ khóa tìm kiếm' });
            }

            // A. Thử tìm trong CRM trước (exact phone/CSR code, hoặc tìm theo tên)
            const { rows: crmRows } = await db.query(
                `SELECT * FROM crm_customers 
                 WHERE phone = $1 OR UPPER(csr_code) = UPPER($1) OR full_name ILIKE $2
                 ORDER BY CASE WHEN phone = $1 THEN 0 WHEN UPPER(csr_code) = UPPER($1) THEN 1 ELSE 2 END
                 LIMIT 1`,
                [keyword, `%${keyword}%`]
            );

            let customer = crmRows.length > 0 ? crmRows[0] : null;
            let phoneForBooking = customer ? customer.phone : keyword;

            // B. Luôn tìm booking gần nhất để lấy thông tin chi tiết (Address, ID Card, etc.)
            let bookingRows;
            if (customer) {
                // Nếu đã tìm thấy CRM customer, lấy booking theo phone
                ({ rows: bookingRows } = await db.query(
                    `SELECT id_card, address, diet, allergy, trekking_pole, special, dob, gender, medal_name, name
                     FROM bookings WHERE phone = $1 
                     ORDER BY created_at DESC LIMIT 1`,
                    [phoneForBooking]
                ));
            } else {
                // Nếu chưa tìm thấy CRM, thử tìm booking theo phone HOẶC tên
                ({ rows: bookingRows } = await db.query(
                    `SELECT id_card, address, diet, allergy, trekking_pole, special, dob, gender, medal_name, name, phone
                     FROM bookings WHERE phone = $1 OR name ILIKE $2
                     ORDER BY created_at DESC LIMIT 1`,
                    [keyword, `%${keyword}%`]
                ));
                // Nếu tìm được booking theo tên, dùng phone của booking đó
                if (bookingRows.length > 0 && bookingRows[0].phone) {
                    phoneForBooking = bookingRows[0].phone;
                }
            }
            const latestBooking = bookingRows[0] || {};

            if (!customer && bookingRows.length === 0) {
                return res.status(404).json({ success: false, message: 'Không tìm thấy dữ liệu khách hàng cũ.' });
            }

            // Helper để chuẩn hóa ngày sinh (về YYYY-MM-DD)
            const normalizeDob = (val) => {
                if (!val) return '';
                if (val instanceof Date) return val.toISOString().split('T')[0];
                if (typeof val === 'string') {
                    // Nếu là định dạng DD/MM/YYYY
                    const parts = val.split('/');
                    if (parts.length === 3) {
                        const [d, m, y] = parts;
                        if (y.length === 4) return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
                    }
                    // Nếu đã là YYYY-MM-DD
                    if (/^\d{4}-\d{2}-\d{2}/.test(val)) return val.split('T')[0];
                }
                return val;
            };

            // Helper để chuẩn hóa giới tính
            const normalizeGender = (g) => {
                if (!g) return 'Khác';
                if (g.toLowerCase() === 'nam') return 'Nam';
                if (g.toLowerCase() === 'nữ' || g.toLowerCase() === 'nu') return 'Nữ';
                return 'Khác';
            };

            return res.status(200).json({
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
                    // Fields từ booking (không có trong CRM)
                    address: latestBooking.address || '',
                    trekking_pole: latestBooking.trekking_pole || '',
                    medal_name: (latestBooking.medal_name || (customer ? latestBooking.name : '') || '').trim(),
                    loyalty_tier: customer ? customer.loyalty_tier : 'New',
                    tour_count: customer ? customer.tour_count : 1
                }
            });
        }

        // 2. CHỨC NĂNG LƯU / THÊM MỚI KHÁCH HÀNG (UPSERT)
        if (req.method === 'POST' && action === 'create') {
            const { full_name, phone, cccd, dob, gender, medical_notes, dietary } = req.body;

            if (!full_name || !phone) {
                return res.status(400).json({ success: false, message: 'Họ tên và Số điện thoại là bắt buộc' });
            }

            // Ghi đè hoặc thêm mới (Upsert) dựa trên số điện thoại
            const check = await db.query('SELECT id, csr_code FROM crm_customers WHERE phone = $1', [phone]);
            let csrCode = '';

            const safeDob = dob ? dob : null;

            if (check.rows.length > 0) {
                // Khách đã tồn tại -> Cập nhật thông tin mới nhất
                const custId = check.rows[0].id;
                csrCode = check.rows[0].csr_code;
                await db.query(`
                    UPDATE crm_customers 
                    SET full_name=$1, cccd=$2, dob=$3, gender=$4, medical_notes=$5, dietary=$6, updated_at=CURRENT_TIMESTAMP
                    WHERE id=$7
                `, [full_name, cccd || null, safeDob, gender, medical_notes, dietary, custId]);
            } else {
                // Khách mới -> Tạo Mã sinh tự động #CSR + 6 số
                const randNum = Math.floor(100000 + Math.random() * 900000);
                csrCode = '#CSR' + randNum;

                await db.query(`
                    INSERT INTO crm_customers (csr_code, full_name, phone, cccd, dob, gender, medical_notes, dietary, loyalty_tier)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'New')
                `, [csrCode, full_name, phone, cccd || null, safeDob, gender, medical_notes, dietary]);
            }

            return res.status(200).json({ success: true, message: 'Đã lưu thông tin Khách hàng thành công!', csr_code: csrCode });
        }

        // 3. CHỨC NĂNG XÓA KHÁCH HÀNG (DELETE) - CHỈ ADMIN GỌI ĐƯỢC
        if (req.method === 'DELETE') {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({ success: false, message: 'Thiếu ID khách hàng cần xóa.' });
            }

            // Lấy SĐT để cân nhắc xóa booking theo (tùy chọn)
            const custCheck = await db.query('SELECT phone FROM crm_customers WHERE id = $1', [id]);

            if (custCheck.rows.length === 0) {
                return res.status(404).json({ success: false, message: 'Không tìm thấy khách hàng này trong CRM.' });
            }

            const phone = custCheck.rows[0].phone;

            // Xóa khách hàng khỏi CRM
            await db.query('DELETE FROM crm_customers WHERE id = $1', [id]);

            // [OPTIONAL] Xóa luôn tất cả booking của khách này? (Theo kịch bản User chọn)
            // Trong trường hợp này, ta có thể xóa (tuỳ chọn qua query delete_bookings=true).
            const { delete_bookings } = req.query;
            if (delete_bookings === 'true') {
                await db.query('DELETE FROM bookings WHERE phone = $1', [phone]);
            }

            return res.status(200).json({ success: true, message: 'Đã xóa dữ liệu khách hàng thành công.' });
        }

        // 4. CẬP NHẬT GHI CHÚ NỘI BỘ (PATCH)
        if (req.method === 'PATCH' && action === 'update_notes') {
            const { id } = req.query;
            const { notes } = req.body;
            if (!id) return res.status(400).json({ success: false, message: 'Thiếu ID khách hàng.' });

            await db.query(
                'UPDATE crm_customers SET notes=$1, updated_at=CURRENT_TIMESTAMP WHERE id=$2',
                [notes || '', id]
            );
            return res.status(200).json({ success: true, message: 'Đã lưu ghi chú.' });
        }

        // Tạm thời chỉ dev tính năng Search và Create. CRUD sẽ bổ sung sau.
        return res.status(404).json({ error: 'Endpoint action Not Found' });

    } catch (error) {
        console.error('CRM Customers API Error:', error);
        return res.status(500).json({ error: error.message });
    }
}
