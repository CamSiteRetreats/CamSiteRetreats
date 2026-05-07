const db = require('../utils/db');
require('dotenv').config();

async function fixExistingBookings() {
    try {
        console.log('--- Đang sửa giá cho các đơn hàng cũ ---');
        
        // Tìm các đơn Thác Liêng Ài
        const { rows: bookings } = await db.query("SELECT * FROM bookings WHERE tour = 'Thác Liêng Ài'");
        console.log(`Tìm thấy ${bookings.length} đơn hàng Thác Liêng Ài.`);

        for (const b of bookings) {
            // Tính toán lại svTotal từ services_booked
            let svTotal = 0;
            try {
                let services = b.services_booked;
                if (typeof services === 'string') services = JSON.parse(services);
                if (Array.isArray(services)) {
                    services.forEach(s => {
                        svTotal += (parseInt(s.price) || 0);
                    });
                }
            } catch (e) {}

            const discount = parseInt(b.discount) || 0;
            const newTotalPrice = 3050000 + svTotal - discount;

            if (parseInt(b.total_price) !== newTotalPrice) {
                console.log(`Cập nhật đơn #${b.id} (${b.name}): ${b.total_price} -> ${newTotalPrice}`);
                await db.query('UPDATE bookings SET total_price = $1 WHERE id = $2', [newTotalPrice, b.id]);
            }
        }

        console.log('✅ Hoàn tất cập nhật giá đơn hàng.');
    } catch (error) {
        console.error('❌ Lỗi:', error);
    } finally {
        process.exit();
    }
}

fixExistingBookings();
