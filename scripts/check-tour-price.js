const db = require('../utils/db');
require('dotenv').config();

async function main() {
    const { rows } = await db.query("SELECT id, name, price FROM tours ORDER BY id");
    console.log('Tours hiện tại trong DB:');
    rows.forEach(r => console.log(`  ID ${r.id}: ${r.name} -> ${Number(r.price).toLocaleString('vi-VN')}đ`));

    // Sửa giá Thác Liêng Ài về 3050000 nếu cần
    const liengai = rows.find(r => r.name && r.name.toLowerCase().includes('liêng'));
    if (liengai && Number(liengai.price) !== 3050000) {
        console.log(`\nĐang cập nhật giá ${liengai.name} từ ${Number(liengai.price).toLocaleString()}đ -> 3.050.000đ...`);
        const { rows: updated } = await db.query(
            'UPDATE tours SET price = $1 WHERE id = $2 RETURNING id, name, price',
            [3050000, liengai.id]
        );
        console.log('Đã cập nhật:', updated[0]);
    } else if (liengai) {
        console.log(`\n✅ Giá ${liengai.name} đã đúng: ${Number(liengai.price).toLocaleString()}đ`);
    } else {
        console.log('\n⚠️ Không tìm thấy tour Thác Liêng Ài trong DB!');
    }
    process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
