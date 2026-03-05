require('dotenv').config();
const db = require('../utils/db');

async function debugBookings() {
    try {
        const query = `
            SELECT id, name, phone, tour, date, status, created_at
            FROM bookings 
            WHERE tour LIKE '%Thác Liêng Ài%'
        `;
        const { rows } = await db.query(query);
        console.log("Total Thác Liêng Ài bookings:", rows.length);
        console.log(JSON.stringify(rows, null, 2));
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
debugBookings();
