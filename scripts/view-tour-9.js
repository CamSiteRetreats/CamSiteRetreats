const db = require('../api/_db');

async function viewTour() {
    try {
        const { rows } = await db.query('SELECT * FROM tours WHERE id = 9');
        console.log('--- TOUR 9 DETAILS ---');
        console.log(JSON.stringify(rows[0], null, 2));
        console.log('----------------------');
    } catch (error) {
        console.error('Error fetching tour:', error);
    } finally {
        process.exit(0);
    }
}

viewTour();
