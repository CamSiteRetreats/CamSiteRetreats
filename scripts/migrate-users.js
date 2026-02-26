const db = require('../api/_db.js');

async function migrateUsers() {
    try {
        console.log('Bắt đầu đồng bộ user từ bảng users sang admins...');

        // Lấy tất cả user nội bộ (sale/admin) từ bảng cũ
        const oldUsersRes = await db.query("SELECT * FROM users WHERE role IN ('admin', 'sale')");
        const oldUsers = oldUsersRes.rows;

        if (oldUsers.length === 0) {
            console.log('Không có user nội bộ nào trong bảng cũ cần đồng bộ.');
            return;
        }

        console.log(`Tìm thấy ${oldUsers.length} tài khoản trong bảng cũ.`);

        let count = 0;
        for (const user of oldUsers) {
            // Kiểm tra xem username đã có trong bảng admins chưa
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
                console.log(`- Đã thêm: ${user.username}`);
            } else {
                console.log(`- Bỏ qua: ${user.username} (Đã tồn tại)`);
            }
        }

        console.log(`✅ Đồng bộ hoàn tất! (Thêm mới ${count} tài khoản)`);
    } catch (e) {
        console.error('❌ Lỗi đồng bộ:', e);
    } finally {
        process.exit();
    }
}

migrateUsers();
