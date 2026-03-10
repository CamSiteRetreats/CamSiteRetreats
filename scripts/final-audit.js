require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);
const fs = require('fs');
let logContent = '';
const log = (msg) => { console.log(msg); logContent += msg + '\n'; };

async function run() {
    try {
        const dates = ['2026-03-01', '2026-03-05', '2026-04-05']; // Adding 3/5 just in case 5/4 was swapped
        for (const date of dates) {
            log(`\n--- ALL bookings for date: ${date} ---`);
            const dParts = date.split('-'); // [2026, 03, 01]
            const ymd = date;
            const dmy = `${dParts[2]}/${dParts[1]}/${dParts[0]}`;
            const dmyshort = `${parseInt(dParts[2])}/${parseInt(dParts[1])}/${dParts[0]}`;
            const dm = `${dParts[2]}/${dParts[1]}`;
            const dmshort = `${parseInt(dParts[2])}/${parseInt(dParts[1])}`;

            const bookings = await sql`
                SELECT id, name, tour, date, status 
                FROM bookings 
                WHERE (
                    date LIKE ${ymd + '%'} OR 
                    date LIKE ${dmy + '%'} OR 
                    date LIKE ${dmyshort + '%'} OR
                    date LIKE ${dm + '%'} OR
                    date LIKE ${dmshort + '%'}
                )
                AND status != 'Đã hủy'
            `;
            log(`Found ${bookings.length} bookings for date variations of ${date}`);
            bookings.forEach(b => log(` - ${b.id}: [${b.tour}] ${b.name} | Date: ${b.date} | Status: ${b.status}`));
        }

        console.log('\n--- TARGET SCHEDULES ---');
        const scheds = await sql`SELECT * FROM schedules WHERE tour_name ILIKE '%Thác Liêng Ài%'`;
        log('\n--- TARGET SCHEDULES ---');
        // Manual table log for file
        log('ID | Tour | Start Date | Slots');
        scheds.forEach(s => log(`${s.id} | ${s.tour_name} | ${s.start_date} | ${s.slots}`));

        fs.writeFileSync('audit_results.txt', logContent, 'utf8');
        console.log('\nAudit written to audit_results.txt');
    } catch (e) { console.error(e); }
}
run();
