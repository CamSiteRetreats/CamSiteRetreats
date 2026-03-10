require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function audit() {
    try {
        console.log('--- DETAILED TOUR NAME AUDIT ---');
        // Check all names that look like Lieng Ai
        const allLiengAiBookings = await sql`SELECT DISTINCT tour FROM bookings WHERE tour ILIKE '%Li%Ai%'`;
        console.log('Unique Lieng Ai names in bookings:', allLiengAiBookings.map(b => b.tour));

        const allLiengAiSchedules = await sql`SELECT DISTINCT tour_name FROM schedules WHERE tour_name ILIKE '%Li%Ai%'`;
        console.log('Unique Lieng Ai names in schedules:', allLiengAiSchedules.map(s => s.tour_name));

        const dates = ['2026-03-01', '2026-04-05'];
        for (const date of dates) {
            console.log(`\n--- Auditing Date: ${date} ---`);
            const bookings = await sql`
                SELECT id, name, status, date, tour
                FROM bookings 
                WHERE (tour ILIKE '%Li%Ai%')
                AND (date = ${date} OR date LIKE ${date + '%'} OR date LIKE ${date.split('-').reverse().join('/') + '%'})
                AND status NOT IN ('Đã hủy', 'Cancelled')
            `;
            console.log(`Found ${bookings.length} valid bookings for ${date}`);
            bookings.forEach(b => console.log(` - ID: ${b.id} | ${b.name} | Tour: ${b.tour} | Date: ${b.date} | Status: ${b.status}`));

            const sched = await sql`SELECT * FROM schedules WHERE tour_name ILIKE '%Li%Ai%' AND start_date::text LIKE ${date + '%'}`;
            console.log(`Schedule in DB for ${date}:`, sched.length > 0 ? sched[0] : 'NOT FOUND');
        }

        console.log('\n--- ALL LIENG AI SCHEDULES ---');
        const allScheds = await sql`SELECT * FROM schedules WHERE tour_name ILIKE '%Li%Ai%' ORDER BY start_date ASC`;
        console.table(allScheds);

    } catch (e) {
        console.error('Audit Error:', e);
    }
}
audit();
