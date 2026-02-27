require('dotenv').config();
const db = require('../api/_db');

async function crossAudit() {
    try {
        console.log('--- 🔍 Kiểm tra khớp nối dữ liệu Booking & CRM ---');

        // Lấy các đơn hàng có mã khách hàng nhưng thiếu thông tin chi tiết
        const { rows: bookings } = await db.query(`
            SELECT b.id, b.name, b.phone, b.customer_id, b.id_card, b.address, b.dob, b.gender,
                   c.cccd as crm_cccd, c.address as crm_address, c.dob as crm_dob, c.gender as crm_gender
            FROM bookings b
            JOIN crm_customers c ON b.customer_id = c.csr_code
            WHERE (b.id_card IS NULL OR b.id_card = '') 
               OR (b.address IS NULL OR b.address = '')
               OR (b.dob IS NULL)
        `);

        console.log(`Tìm thấy ${bookings.length} đơn hàng có thể khôi phục dữ liệu từ CRM.`);

        bookings.forEach(b => {
            console.log(`ID: ${b.id} | Khách: ${b.name} | Mã: ${b.customer_id}`);
            if (!b.id_card && b.crm_cccd) console.log(`   -> Sẽ khôi phục CCCD: ${b.crm_cccd}`);
            if (!b.address && b.crm_address) console.log(`   -> Sẽ khôi phục Địa chỉ: ${b.crm_address}`);
            if (!b.dob && b.crm_dob) console.log(`   -> Sẽ khôi phục Ngày sinh: ${b.crm_dob}`);
        });

    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}

crossAudit();
