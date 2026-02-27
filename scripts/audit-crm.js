require('dotenv').config();
const db = require('../api/_db');

async function auditCRM() {
    try {
        console.log('--- 🔍 Kiểm tra hồ sơ CRM ---');

        // 1. Tìm các khách hàng trong CRM bị thiếu CCCD, Ngày sinh, hoặc Giới tính
        const { rows: customers } = await db.query(`
            SELECT id, csr_code, full_name, phone, cccd, dob, gender
            FROM crm_customers
            WHERE cccd IS NULL OR cccd = ''
               OR dob IS NULL
               OR gender IS NULL OR gender = 'Khác'
        `);

        console.log(`Tìm thấy ${customers.length} hồ sơ CRM bị thiếu thông tin.`);

        // 2. Với mỗi khách hàng hồ sơ rỗng, thử tìm xem trong bảng Bookings có "đắp" vào được không
        for (const c of customers) {
            const { rows: bData } = await db.query(`
                SELECT id_card, dob, gender, address FROM bookings 
                WHERE phone = $1 
                AND (id_card IS NOT NULL AND id_card != '')
                ORDER BY created_at DESC LIMIT 1
            `, [c.phone]);

            if (bData.length > 0) {
                const b = bData[0];
                const updates = {};
                if (!c.cccd && b.id_card) updates.cccd = b.id_card;
                if (!c.dob && b.dob) updates.dob = b.dob;
                if ((!c.gender || c.gender === 'Khác') && b.gender && b.gender !== 'Khác') updates.gender = b.gender;

                if (Object.keys(updates).length > 0) {
                    const fields = Object.keys(updates);
                    const values = Object.values(updates);
                    const setClause = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');
                    values.push(c.id);
                    await db.query(`UPDATE crm_customers SET ${setClause}, updated_at = NOW() WHERE id = $${values.length}`, values);
                    console.log(`✅ Đã khôi phục CRM ID:${c.id} (${c.full_name}) từ Booking -> ${fields.join(', ')}`);
                }
            } else {
                console.log(`⚠️ CRM ID:${c.id} (${c.full_name}) không tìm thấy dữ liệu bổ sung trong Bookings.`);
            }
        }
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
auditCRM();
