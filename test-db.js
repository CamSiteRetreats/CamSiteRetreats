const db = require('./utils/db');

async function test() {
    try {
        console.log('Querying DB...');
        const { rows } = await db.query("SELECT id, name, tour, date, status FROM bookings WHERE tour ILIKE '%ThÃ¡c LiÃªng Ã€i%'");
        console.log(rows);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

test();
