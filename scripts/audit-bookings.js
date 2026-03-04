require('dotenv').config();
const db = require('../utils/db');

async function auditBookings() {
    try {
        console.log('--- ðŸ›¡ï¸ Báº¯t Ä‘áº§u kiá»ƒm tra dá»¯ liá»‡u Ä‘Æ¡n hÃ ng ---');

        // Láº¥y toÃ n bá»™ Ä‘Æ¡n hÃ ng Ä‘á»ƒ phÃ¢n tÃ­ch
        const { rows } = await db.query(`
            SELECT id, name, phone, tour, date, status, id_card, address, dob, gender, customer_id, created_at
            FROM bookings 
            ORDER BY created_at DESC 
            LIMIT 100
        `);

        console.log(`Kiá»ƒm tra ${rows.length} Ä‘Æ¡n hÃ ng gáº§n nháº¥t...\n`);

        let missingInfoCount = 0;
        rows.forEach(b => {
            const missingFields = [];
            if (!b.name) missingFields.push('Há» TÃªn');
            if (!b.phone) missingFields.push('SÄT');
            if (!b.tour) missingFields.push('Tour');
            if (!b.date) missingFields.push('NgÃ y');
            if (!b.id_card && !b.cccd) missingFields.push('CCCD');
            if (!b.address) missingFields.push('Äá»‹a chá»‰');
            if (!b.dob) missingFields.push('NgÃ y sinh');
            if (!b.gender) missingFields.push('Giá»›i tÃ­nh');

            if (missingFields.length > 0) {
                missingInfoCount++;
                console.log(`âŒ ID: ${b.id} | KhÃ¡ch: ${b.name || 'N/A'} | SÄT: ${b.phone || 'N/A'}`);
                console.log(`   Thiáº¿u: ${missingFields.join(', ')}`);
                console.log(`   Status: ${b.status} | Created: ${b.created_at}`);
                console.log('-----------------------------------');
            }
        });

        console.log(`\nTá»•ng káº¿t: CÃ³ ${missingInfoCount} Ä‘Æ¡n hÃ ng bá»‹ thiáº¿u thÃ´ng tin.`);

    } catch (err) {
        console.error('âŒ Lá»—i:', err);
    } finally {
        process.exit(0);
    }
}

auditBookings();
