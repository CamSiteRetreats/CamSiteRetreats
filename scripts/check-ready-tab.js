const db = require('../utils/db');
require('dotenv').config();

async function main() {
    // Lấy tất cả status đang có trong DB
    const { rows: statuses } = await db.query(
        "SELECT status, COUNT(*) as cnt FROM bookings WHERE status IS NOT NULL GROUP BY status ORDER BY cnt DESC LIMIT 20"
    );
    console.log('=== Các trạng thái trong DB ===');
    statuses.forEach(r => console.log(`  "${r.status}" : ${r.cnt} đơn`));

    // Kiểm tra đơn nào đang nằm ở tab "Chờ Lên Xe"
    // Điều kiện: isFullyPaid (total_price > 0 && total_price == deposit) hoặc status = 'Hoàn thành' hoặc 'Đã cọc (Chờ đi)'
    const { rows: readyBookings } = await db.query(`
        SELECT id, name, status, total_price, deposit, tour, date
        FROM bookings
        WHERE (
            (total_price > 0 AND total_price = deposit)
            OR status = 'Hoàn thành'
            OR status = 'Đã cọc (Chờ đi)'
        )
        ORDER BY id DESC
        LIMIT 30
    `);
    console.log(`\n=== Đơn đang lọt vào tab Chờ Lên Xe: ${readyBookings.length} đơn ===`);
    readyBookings.forEach(b => {
        const isFullyPaid = parseInt(b.total_price) > 0 && parseInt(b.total_price) === parseInt(b.deposit);
        console.log(`  #${b.id} ${b.name} | Status: "${b.status}" | FullPaid: ${isFullyPaid} | Total: ${b.total_price} | Deposit: ${b.deposit} | Tour: ${b.tour} | Date: ${b.date}`);
    });

    process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
