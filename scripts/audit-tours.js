require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function check() {
    try {
        const tours = await sql`SELECT id, name, price FROM tours`;
        const schedules = await sql`SELECT id, tour_name, start_date, slots, status FROM schedules ORDER BY tour_name, start_date`;

        console.log(JSON.stringify({ tours, schedules }, null, 2));

    } catch (e) {
        console.error('Error:', e);
    }
}
check();
