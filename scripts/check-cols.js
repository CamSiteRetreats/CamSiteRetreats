const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require('../api/_db');
(async () => {
    const r = await db.query("SELECT column_name FROM information_schema.columns WHERE table_name='bookings' ORDER BY ordinal_position");
    r.rows.forEach(c => console.log(c.column_name));
    process.exit(0);
})();
