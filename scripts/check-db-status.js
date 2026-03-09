require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

async function checkStatus() {
    const sql = neon(process.env.DATABASE_URL);

    console.log("--- Latest 20 Transactions ---");
    const txs = await sql`SELECT * FROM payment_transactions ORDER BY created_at DESC LIMIT 20`;
    txs.forEach(tx => console.log(`[${tx.created_at}] Booking #${tx.booking_id}, Amount: ${tx.amount}, Content: ${tx.transfer_content}`));

    console.log("\n--- Latest 20 Bookings ---");
    const bookings = await sql`SELECT id, name, status, deposit, total_price FROM bookings ORDER BY created_at DESC LIMIT 20`;
    bookings.forEach(b => console.log(`[#${b.id}] ${b.name} - Status: "${b.status}", Paid: ${b.deposit}/${b.total_price}`));
}

checkStatus().catch(console.error);
