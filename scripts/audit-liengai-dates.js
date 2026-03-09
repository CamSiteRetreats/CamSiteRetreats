require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function audit() {
    try {
        console.log('--- AUDIT: Thác Liêng Ài Booking Counts ---');

        const dates = ['2026-03-01', '2026-04-05'];

        for (const date of dates) {
            const bookings = await sql`
                SELECT id, name, status, date 
                FROM bookings 
                WHERE (tour ILIKE '%Liêng Ài%' OR tour ILIKE '%Lieng Ai%')
                AND status NOT IN ('Đã hủy', 'Cancelled')
            `;

            // Filter in JS to be safe with date formats
            const matchingBookings = bookings.filter(b => b.date && b.date.includes(date));

            console.log(`\nDate: ${date}`);
            console.log(`Real Booking Count: ${matchingBookings.length}`);
            matchingBookings.forEach(b => console.log(` - ID: ${b.id} | Name: ${b.name} | Status: ${b.status} | Date in DB: ${b.date}`));
        }

        console.log('\n--- SCHEDULES TABLE STATUS ---');
        const schedules = await sql`
            SELECT id, tour_name, start_date, slots 
            FROM schedules 
            WHERE tour_name ILIKE '%Liêng Ài%' 
            ORDER BY start_date ASC
        `;
        console.log(JSON.stringify(schedules, null, 2));

    } catch (e) {
        console.error('Error:', e);
    }
}
audit();
