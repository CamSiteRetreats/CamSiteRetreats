require('dotenv').config();
const db = require('../api/_db');

async function listCols() {
    try {
        const { rows: bCols } = await db.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'bookings'");
        console.log('Bookings Columns:', bCols.map(c => c.column_name).join(', '));

        const { rows: cCols } = await db.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'crm_customers'");
        console.log('CRM Columns:', cCols.map(c => c.column_name).join(', '));
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
listCols();
