require('dotenv').config();
const db = require('../api/_db');

async function assignCsrCodes() {
    try {
        console.log('--- Bắt đầu quy trình cấp Mã Khách Hàng (CSR) cho các đơn hàng cũ ---');

        // 1. Lấy tất cả các đơn hàng chưa có customer_id
        const { rows: bookings } = await db.query(
            "SELECT id, name, phone, id_card, dob, gender, allergy, diet FROM bookings WHERE customer_id IS NULL OR customer_id = ''"
        );

        console.log(`Tìm thấy ${bookings.length} đơn hàng chưa có mã.`);

        let updatedCount = 0;
        let createdCrmCount = 0;

        for (const booking of bookings) {
            const { name, phone, id_card, dob, gender, allergy, diet, id } = booking;

            if (!phone) {
                console.warn(`⚠️ Đơn hàng ID ${id} không có số điện thoại, bỏ qua.`);
                continue;
            }

            // 2. Kiểm tra xem khách hàng đã tồn tại trong CRM chưa
            const checkCrm = await db.query('SELECT csr_code FROM crm_customers WHERE phone = $1', [phone]);
            let csrCode = '';

            if (checkCrm.rows.length > 0) {
                // Đã có trong CRM
                csrCode = checkCrm.rows[0].csr_code;
                console.log(`✅ Khách hàng ${name} (${phone}) đã có mã: ${csrCode}`);
            } else {
                // Chưa có -> Tạo mới
                const randNum = Math.floor(100000 + Math.random() * 900000);
                csrCode = '#CSR' + randNum;

                await db.query(`
                    INSERT INTO crm_customers (csr_code, full_name, phone, cccd, dob, gender, medical_notes, dietary, loyalty_tier)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'New')
                `, [csrCode, name, phone, id_card || null, dob || null, gender || 'Khác', allergy || '', diet || '']);

                createdCrmCount++;
                console.log(`✨ Tạo mới khách hàng ${name} (${phone}) với mã: ${csrCode}`);
            }

            // 3. Cập nhật mã vào đơn hàng
            await db.query('UPDATE bookings SET customer_id = $1 WHERE id = $2', [csrCode, id]);
            updatedCount++;
        }

        console.log('--- Hoàn tất ---');
        console.log(`Tổng số đơn hàng đã cập nhật: ${updatedCount}`);
        console.log(`Tổng số khách hàng mới tạo trong CRM: ${createdCrmCount}`);

    } catch (err) {
        console.error('❌ Lỗi thực thi:', err);
    } finally {
        process.exit(0);
    }
}

assignCsrCodes();
