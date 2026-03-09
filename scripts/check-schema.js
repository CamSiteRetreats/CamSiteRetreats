require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function check() {
    try {
        const bookings = await sql`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'bookings'`;
        console.log('--- BOOKINGS COLUMNS ---');
        bookings.forEach(c => console.log(`${c.column_name}: ${c.data_type}`));

        const schedules = await sql`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'schedules'`;
        console.log('\n--- SCHEDULES COLUMNS ---');
        schedules.forEach(c => console.log(`${c.column_name}: ${c.data_type}`));

    } catch (e) {
        console.error(e);
    }
}
check();
