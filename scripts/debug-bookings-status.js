const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const db = require('../api/_db');

(async () => {
    const { rows } = await db.query('SELECT id, name, status, total_price, deposit FROM bookings ORDER BY created_at DESC LIMIT 20');
    console.log('=== BOOKINGS DATA ===');
    rows.forEach(r => {
        console.log('ID:' + r.id + ' | ' + String(r.name || '').padEnd(22) + ' | status: ' + String(r.status || 'NULL').padEnd(25) + ' | total: ' + String(r.total_price || 'NULL').padEnd(10) + ' | deposit: ' + (r.deposit || 'NULL'));
    });

    const { rows: stats } = await db.query("SELECT status, COUNT(*) as cnt FROM bookings GROUP BY status ORDER BY cnt DESC");
    console.log('\n=== STATUS COUNTS ===');
    stats.forEach(s => console.log('  "' + (s.status || 'NULL') + '" => ' + s.cnt));

    process.exit(0);
})();
