const db = require('./_db');

async function run() {
    try {
        console.log("Checking for 'discount' column...");
        await db.query(`ALTER TABLE bookings ADD COLUMN discount INTEGER DEFAULT 0`);
        console.log("✅ Added column 'discount' to 'bookings' table successfully.");
    } catch (e) {
        if (e.message.includes('already exists')) {
            console.log("✅ Column 'discount' already exists!");
        } else {
            console.error("❌ Error adding column:", e.message);
        }
    }
    process.exit(0);
}

run();
