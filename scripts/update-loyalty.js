require('dotenv').config();
const db = require('../api/_db');

async function updateLoyalty() {
    try {
        console.log('--- 🎖️ Cập nhật hạng thành viên CRM ---');

        const { rows: customers } = await db.query("SELECT id, phone, full_name FROM crm_customers");
        const { rows: bookings } = await db.query("SELECT phone, status FROM bookings");

        let updatedCount = 0;
        for (const c of customers) {
            // Đếm số tour đã Hoàn thành
            const completedTours = bookings.filter(b =>
                b.phone === c.phone && (b.status === 'Hoàn thành' || b.status === 'Đã đi' || b.status === 'Đã hoàn thành')
            ).length;

            const tier = completedTours >= 3 ? 'VIP' : 'Member';

            await db.query(`
                UPDATE crm_customers 
                SET tour_count = $1, loyalty_tier = $2, updated_at = NOW() 
                WHERE id = $3
            `, [completedTours, tier, c.id]);

            if (completedTours > 0) {
                console.log(`✅ ${c.full_name}: ${completedTours} tour -> ${tier}`);
                updatedCount++;
            }
        }

        console.log(`\n🎉 Đã cập nhật hạng thành viên cho ${updatedCount} khách hàng.`);

    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}
updateLoyalty();
