const db = require('../api/_db');

async function listTours() {
    try {
        const { rows } = await db.query('SELECT id, name FROM tours ORDER BY id');
        console.log('--- TOURS LIST ---');
        rows.forEach(tour => {
            console.log(`ID: ${tour.id} | Name: ${tour.name}`);
        });
        console.log('------------------');
    } catch (error) {
        console.error('Error fetching tours:', error);
    } finally {
        process.exit(0);
    }
}

listTours();
