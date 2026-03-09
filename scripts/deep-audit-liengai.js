require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function deepAudit() {
    try {
        console.log('--- DEEP AUDIT: ALL BOOKINGS FOR LIENG AI ---');

        // Fetch ALL bookings to be sure
        const all = await sql`SELECT id, tour, date, status, name FROM bookings WHERE status NOT IN ('Đã hủy', 'Cancelled')`;

        const liengAiBookings = all.filter(b => {
            const tour = (b.tour || '').toLowerCase();
            return tour.includes('liêng') || tour.includes('à i') || tour.includes('lieng') || tour.includes('ai');
        });

        console.log(`Found ${liengAiBookings.length} potential Lieng Ai bookings.`);

        const dates = {};
        liengAiBookings.forEach(b => {
            dates[b.date] = (dates[b.date] || 0) + 1;
            console.log(` - ID: ${b.id} | Tour: ${b.tour} | Date: ${b.date} | Name: ${b.name}`);
        });

        console.log('\nSummary by Date String in DB:');
        console.table(dates);

        console.log('\n--- SCHEDULES ---');
        const sch = await sql`SELECT id, tour_name, start_date, slots FROM schedules WHERE tour_name ILIKE '%Liêng Ài%'`;
        console.table(sch);

    } catch (e) {
        console.error(e);
    }
}
deepAudit();
