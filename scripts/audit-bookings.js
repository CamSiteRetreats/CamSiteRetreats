require('dotenv').config();
const db = require('../api/_db');

async function auditBookings() {
    try {
        console.log('--- 🛡️ Bắt đầu kiểm tra dữ liệu đơn hàng ---');

        // Lấy toàn bộ đơn hàng để phân tích
        const { rows } = await db.query(`
            SELECT id, name, phone, tour, date, status, id_card, address, dob, gender, customer_id, created_at
            FROM bookings 
            ORDER BY created_at DESC 
            LIMIT 100
        `);

        console.log(`Kiểm tra ${rows.length} đơn hàng gần nhất...\n`);

        let missingInfoCount = 0;
        rows.forEach(b => {
            const missingFields = [];
            if (!b.name) missingFields.push('Họ Tên');
            if (!b.phone) missingFields.push('SĐT');
            if (!b.tour) missingFields.push('Tour');
            if (!b.date) missingFields.push('Ngày');
            if (!b.id_card && !b.cccd) missingFields.push('CCCD');
            if (!b.address) missingFields.push('Địa chỉ');
            if (!b.dob) missingFields.push('Ngày sinh');
            if (!b.gender) missingFields.push('Giới tính');

            if (missingFields.length > 0) {
                missingInfoCount++;
                console.log(`❌ ID: ${b.id} | Khách: ${b.name || 'N/A'} | SĐT: ${b.phone || 'N/A'}`);
                console.log(`   Thiếu: ${missingFields.join(', ')}`);
                console.log(`   Status: ${b.status} | Created: ${b.created_at}`);
                console.log('-----------------------------------');
            }
        });

        console.log(`\nTổng kết: Có ${missingInfoCount} đơn hàng bị thiếu thông tin.`);

    } catch (err) {
        console.error('❌ Lỗi:', err);
    } finally {
        process.exit(0);
    }
}

auditBookings();
