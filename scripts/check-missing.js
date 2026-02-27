require('dotenv').config();
const db = require('../api/_db');

async function check() {
    try {
        const { rows } = await db.query(`
            SELECT id, name, phone, id_card, address, dob, gender, customer_id, status 
            FROM bookings 
            WHERE id_card IS NULL OR id_card = '' 
               OR address IS NULL OR address = ''
               OR dob IS NULL 
               OR customer_id IS NULL OR customer_id = ''
        `);
        console.log(`Tìm thấy ${rows.length} đơn hàng bị thiếu trường dữ liệu:`);
        rows.forEach(r => {
            const missing = [];
            if (!r.id_card) missing.push('CCCD');
            if (!r.address) missing.push('Địa chỉ');
            if (!r.dob) missing.push('Ngày sinh');
            if (!r.customer_id) missing.push('Mã CSR');
            console.log(`- ID: ${r.id} | Khách: ${r.name} | SĐT: ${r.phone} | Thiếu: ${missing.join(', ')}`);
        });
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
check();
