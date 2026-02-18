const db = require('./api/_db');
const tables = ['tours', 'bookings', 'leads', 'schedules', 'users'];
async function run() {
    try {
        const { rows } = await db.query(`
            SELECT table_name, column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name IN ('tours', 'bookings', 'leads', 'schedules', 'users', 'media')
            ORDER BY table_name, column_name
        `);
        console.log(JSON.stringify(rows, null, 2));
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
