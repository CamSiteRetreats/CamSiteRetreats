require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function check() {
    try {
        const schedules = await sql`SELECT * FROM schedules WHERE tour_name ILIKE '%Thác Liêng Ài%' ORDER BY start_date`;
        console.log('--- Tour Schedules (DB) ---');

        for (const s of schedules) {
            const startDateStr = s.start_date.toISOString().split('T')[0];
            const dm = `${s.start_date.getDate().toString().padStart(2, '0')}/${(s.start_date.getMonth() + 1).toString().padStart(2, '0')}`;

            const bookings = await sql`
                SELECT id, name, date, status 
                FROM bookings 
                WHERE (tour ILIKE '%Thác Liêng Ài%' OR tour ILIKE '%Liêng Ài%')
                AND status != 'Đã hủy'
                AND (date = ${startDateStr} OR date LIKE ${'%' + dm + '%'})
            `;

            console.log(`\nDate: ${startDateStr} (ID: ${s.id}) | Max Slots: ${s.slots}`);
            console.log(`Found ${bookings.length} matching bookings:`);
            if (bookings.length > 0) {
                console.table(bookings);
            } else {
                console.log('  No bookings found for this date.');
            }
        }

        const allBookings = await sql`SELECT tour, date, status FROM bookings WHERE tour ILIKE '%Liêng Ài%' AND status != 'Đã hủy'`;
        console.log('\n--- All Non-Cancelled Bookings for Liêng Ài ---');
        console.table(allBookings);

    } catch (e) {
        console.error('Error:', e);
    }
}
check();
