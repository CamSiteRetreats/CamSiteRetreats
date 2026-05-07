const db = require('../utils/db');
require('dotenv').config();

async function main() {
    // Lấy tất cả giá trị điểm đón đang có trong DB
    const { rows } = await db.query(`
        SELECT pickup_point, COUNT(*) as cnt
        FROM bookings
        WHERE pickup_point IS NOT NULL AND pickup_point != ''
        GROUP BY pickup_point
        ORDER BY cnt DESC
    `);
    
    console.log(`=== Tất cả điểm đón đã được lưu trong DB (${rows.length} giá trị khác nhau) ===`);
    rows.forEach(r => console.log(`  "${r.pickup_point}" : ${r.cnt} khách`));

    // Kiểm tra bao nhiêu đơn không có điểm đón
    const { rows: empty } = await db.query(`
        SELECT COUNT(*) as cnt FROM bookings WHERE pickup_point IS NULL OR pickup_point = ''
    `);
    console.log(`\n  Đơn chưa có điểm đón: ${empty[0].cnt} đơn`);

    process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
