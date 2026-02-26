const db = require('./_db');

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

            const { rows } = await db.query(
                `SELECT * FROM crm_customers 
                 WHERE phone = $1 OR UPPER(csr_code) = UPPER($1)`,
                [keyword]
            );

            if (rows.length > 0) {
                const customer = rows[0];

                // Query booking gần nhất để lấy thêm address, trekking_pole, id_card...
                const bookingResult = await db.query(
                    `SELECT id_card, address, diet, allergy, trekking_pole, special, dob, gender, medal_name
                     FROM bookings WHERE phone = $1 
                     ORDER BY created_at DESC LIMIT 1`,
                    [customer.phone]
                );
                const latestBooking = bookingResult.rows[0] || {};

                return res.status(200).json({
                    success: true,
                    data: {
                        csr_code: customer.csr_code,
                        full_name: customer.full_name,
                        phone: customer.phone,
                        cccd: customer.cccd || latestBooking.id_card || '',
                        dob: customer.dob ? customer.dob.toISOString().split('T')[0] : (latestBooking.dob || ''),
                        gender: customer.gender || latestBooking.gender || '',
                        medical_notes: customer.medical_notes || latestBooking.allergy || '',
                        dietary: customer.dietary || latestBooking.diet || '',
                        // Fields từ booking (không có trong CRM)
                        address: latestBooking.address || '',
                        trekking_pole: latestBooking.trekking_pole || '',
                        medal_name: latestBooking.medal_name || '',
                        loyalty_tier: customer.loyalty_tier,
                        tour_count: customer.tour_count
                    }
                });
            } else {
                return res.status(404).json({ success: false, message: 'Không tìm thấy dữ liệu khách hàng cũ.' });
            }
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

        // Tạm thời chỉ dev tính năng Search và Create. CRUD sẽ bổ sung sau.
        return res.status(404).json({ error: 'Endpoint action Not Found' });

    } catch (error) {
        console.error('CRM Customers API Error:', error);
        return res.status(500).json({ error: error.message });
    }
}
