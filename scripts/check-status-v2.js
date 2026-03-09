require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

async function checkStatus() {
    const sql = neon(process.env.DATABASE_URL);

    console.log("--- RECENT TRANSACTIONS ---");
    const txs = await sql`SELECT created_at, booking_id, amount, transfer_content FROM payment_transactions ORDER BY created_at DESC LIMIT 10`;
    txs.forEach(tx => console.log(`${tx.created_at.toISOString()} | Booking #${tx.booking_id} | ${tx.amount} | ${tx.transfer_content}`));

    console.log("\n--- RECENT BOOKINGS ---");
    const bookings = await sql`SELECT id, name, status, deposit, total_price FROM bookings ORDER BY id DESC LIMIT 10`;
    bookings.forEach(b => console.log(`#${b.id} | ${b.name} | Status: "${b.status}" | Paid: ${b.deposit}/${b.total_price}`));
}

checkStatus().catch(console.error);
