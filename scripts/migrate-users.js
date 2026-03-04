const db = require('../utils/db.js');

async function migrateUsers() {
    try {
        console.log('Báº¯t Ä‘áº§u Ä‘á»“ng bá»™ user tá»« báº£ng users sang admins...');

        // Láº¥y táº¥t cáº£ user ná»™i bá»™ (sale/admin) tá»« báº£ng cÅ©
        const oldUsersRes = await db.query("SELECT * FROM users WHERE role IN ('admin', 'sale')");
        const oldUsers = oldUsersRes.rows;

        if (oldUsers.length === 0) {
            console.log('KhÃ´ng cÃ³ user ná»™i bá»™ nÃ o trong báº£ng cÅ© cáº§n Ä‘á»“ng bá»™.');
            return;
        }

        console.log(`TÃ¬m tháº¥y ${oldUsers.length} tÃ i khoáº£n trong báº£ng cÅ©.`);

        let count = 0;
        for (const user of oldUsers) {
            // Kiá»ƒm tra xem username Ä‘Ã£ cÃ³ trong báº£ng admins chÆ°a
            const check = await db.query("SELECT id FROM admins WHERE username = $1", [user.username]);
            if (check.rows.length === 0) {
                // Insert
                await db.query(`
                    INSERT INTO admins (username, password, full_name, role, phone, email, avatar, status, created_at)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                `, [
                    user.username,
                    user.password || '123456', // Fallback pass if somehow null
                    user.full_name || user.username,
                    user.role,
                    user.phone || '',
                    user.email || '',
                    user.avatar || '',
                    user.status || 'active',
                    user.created_at || new Date()
                ]);
                count++;
                console.log(`- ÄÃ£ thÃªm: ${user.username}`);
            } else {
                console.log(`- Bá» qua: ${user.username} (ÄÃ£ tá»“n táº¡i)`);
            }
        }

        console.log(`âœ… Äá»“ng bá»™ hoÃ n táº¥t! (ThÃªm má»›i ${count} tÃ i khoáº£n)`);
    } catch (e) {
        console.error('âŒ Lá»—i Ä‘á»“ng bá»™:', e);
    } finally {
        process.exit();
    }
}

migrateUsers();
