require('dotenv').config();
const db = require('../api/_db');

async function fullAudit() {
    try {
        console.log('--- 🛡️ Toàn bộ kiểm tra dữ liệu hệ thống ---');

        const { rows } = await db.query(`
            SELECT id, name, phone, tour, date, status, id_card, address, dob, gender, customer_id
            FROM bookings
        `);

        console.log(`Kiểm tra tổng cộng ${rows.length} đơn hàng...`);

        const stats = {
            total: rows.length,
            no_name: 0,
            no_phone: 0,
            no_id_card: 0,
            no_address: 0,
            no_dob: 0,
            no_gender: 0,
            no_tour: 0,
            no_diet: 0,
            no_trekking_pole: 0,
            no_customer_id: 0
        };

        const missingDetails = [];

        rows.forEach(b => {
            let incomplete = false;
            const missing = [];
            if (!b.name) { stats.no_name++; incomplete = true; missing.push('name'); }
            if (!b.phone) { stats.no_phone++; incomplete = true; missing.push('phone'); }
            if (!b.id_card) { stats.no_id_card++; incomplete = true; missing.push('id_card'); }
            if (!b.address) { stats.no_address++; incomplete = true; missing.push('address'); }
            if (!b.dob) { stats.no_dob++; incomplete = true; missing.push('dob'); }
            if (!b.gender || b.gender === 'Khác') { stats.no_gender++; incomplete = true; missing.push('gender'); }
            if (!b.tour) { stats.no_tour++; incomplete = true; missing.push('tour'); }
            if (!b.diet || b.diet === 'Bình Thường') { stats.no_diet++; } // This is often default, so maybe not "missing"
            if (!b.trekking_pole || b.trekking_pole === 'Không') { stats.no_trekking_pole++; }
            if (!b.customer_id) { stats.no_customer_id++; incomplete = true; missing.push('customer_id'); }

            if (incomplete) {
                missingDetails.push({
                    id: b.id,
                    name: b.name || 'N/A',
                    phone: b.phone || 'N/A',
                    missing: missing,
                    status: b.status
                });
            }
        });

        console.log('\nThống kê trường dữ liệu trống hoặc mặc định:');
        console.log(JSON.stringify(stats, null, 2));

        if (missingDetails.length > 0) {
            console.log(`\nTìm thấy ${missingDetails.length} đơn hàng có thông tin chưa đầy đủ.`);
            console.log('5 đơn hàng mới nhất bị thiếu:');
            console.log(JSON.stringify(missingDetails.slice(0, 5), null, 2));
        }

    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}

fullAudit();
