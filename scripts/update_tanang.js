const db = require('../utils/db');

async function updateTour() {
    try {
        console.log('Querying TÃ  NÄƒng tour...');
        // Find TÃ  NÄƒng tour
        const { rows } = await db.query("SELECT id FROM tours WHERE name ILIKE '%TÃ  NÄƒng%'");
        if (rows.length === 0) {
            console.log('TÃ  NÄƒng tour not found in database.');
            process.exit(0);
        }

        const tourId = rows[0].id;
        console.log(`Found tour with ID: ${tourId}. Updating...`);

        // Update altitude
        await db.query("UPDATE tours SET altitude = '1.168M' WHERE id = $1", [tourId]);
        console.log('Altitude updated.');

        // Update slots in schedules
        const result = await db.query("UPDATE schedules SET slots = 13 WHERE tour_name ILIKE '%TÃ  NÄƒng%'");
        console.log(`Updated ${result.rowCount} schedules with 13 slots.`);

        process.exit(0);
    } catch (e) {
        console.error('Update failed:', e);
        process.exit(1);
    }
}

updateTour();
