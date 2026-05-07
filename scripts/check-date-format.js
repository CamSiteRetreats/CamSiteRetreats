const db = require('../utils/db');
require('dotenv').config();

async function main() {
    // Kiểm tra format date của các đơn từ Website
    const { rows } = await db.query(`
        SELECT id, name, tour, date, schedule_id, sale_name
        FROM bookings
        WHERE (sale_name = 'Website' OR sale_name IS NULL)
          AND tour IS NOT NULL
          AND date IS NOT NULL
        ORDER BY id DESC
        LIMIT 20
    `);
    
    console.log('=== Đơn từ Website - kiểm tra format date ===');
    rows.forEach(b => {
        console.log(`  #${b.id} ${b.name} | Tour: ${b.tour} | Date: "${b.date}" | schedule_id: ${b.schedule_id}`);
    });

    // Kiểm tra format date trong schedules
    const { rows: schedules } = await db.query(`
        SELECT id, tour_name, start_date FROM schedules ORDER BY start_date DESC LIMIT 10
    `);
    console.log('\n=== Format date trong schedules ===');
    schedules.forEach(s => console.log(`  ID:${s.id} ${s.tour_name} | start_date: "${s.start_date}"`));

    process.exit(0);
}
main().catch(e => { console.error(e); process.exit(1); });
