require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

async function checkToday() {
    const sql = neon(process.env.DATABASE_URL);
    const today = new Date().toISOString().split('T')[0];

    const fs = require('fs');
    const logFile = 'debug_payment_results.txt';
    fs.writeFileSync(logFile, `--- Transactions Today (${today}) ---\n`);

    const txs = await sql`SELECT * FROM payment_transactions WHERE created_at >= ${today} ORDER BY created_at DESC`;
    if (txs.length === 0) fs.appendFileSync(logFile, "No transactions found for today.\n");
    txs.forEach(tx => fs.appendFileSync(logFile, `[${tx.created_at}] Booking #${tx.booking_id} | Amount: ${tx.amount} | Content: ${tx.transfer_content}\n`));

    fs.appendFileSync(logFile, `\n--- Bookings Updated Today ---\n`);
    // Assuming updated_at or similar exists, but let's just check latest 20
    const bookings = await sql`SELECT id, name, status, deposit, total_price FROM bookings ORDER BY id DESC LIMIT 20`;
    bookings.forEach(b => fs.appendFileSync(logFile, `#${b.id} | ${b.name} | Status: "${b.status}" | Paid: ${b.deposit}/${b.total_price}\n`));
    console.log("Logs written to debug_payment_results.txt");
}

checkToday().catch(console.error);
