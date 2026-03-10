require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function run() {
    try {
        console.log('--- SAMPLE: Schedules ---');
        const scheds = await sql`SELECT DISTINCT tour_name FROM schedules LIMIT 50`;
        console.log(scheds.map(s => s.tour_name));

        console.log('\n--- SAMPLE: Bookings ---');
        const books = await sql`SELECT DISTINCT tour FROM bookings LIMIT 50`;
        console.log(books.map(b => b.tour));
    } catch (e) { console.error(e); }
}
run();
