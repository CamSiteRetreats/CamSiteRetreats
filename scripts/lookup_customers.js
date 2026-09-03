require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function run() {
    // List all tables
    const tables = await sql`SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name`;
    console.log('=== TABLES ===');
    tables.forEach(t => console.log(t.table_name));

    // Check customers table
    const phones = ['0366490703','0399474846','0968129812','0382456752','0352323409','0352238182'];
    
    // Try "customers" table
    try {
        for (const phone of phones) {
            const rows = await sql`SELECT * FROM customers WHERE phone = ${phone} LIMIT 1`;
            if (rows.length > 0) console.log('FOUND in customers:', JSON.stringify(rows[0]));
            else console.log('NOT_FOUND in customers:', phone);
        }
    } catch(e) {
        console.log('customers table error:', e.message);
    }
    
    // Try bookings table for phone
    try {
        for (const phone of phones) {
            const rows = await sql`SELECT DISTINCT name, phone, tour, dob, id_card, address, gender FROM bookings WHERE phone = ${phone} LIMIT 1`;
            if (rows.length > 0) console.log('FOUND in bookings:', JSON.stringify(rows[0]));
            else console.log('NOT_FOUND in bookings:', phone);
        }
    } catch(e) {
        console.log('bookings table error:', e.message);
    }
}
run().catch(console.error);
