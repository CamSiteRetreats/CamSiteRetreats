const db = require('../utils/db');

async function migrate() {
    console.log('🏁 Bắt đầu di chuyển cấu trúc DB cho trang chi tiết tour động...');
    try {
        // Thêm các cột JSONB vào bảng tours
        await db.query(`
            ALTER TABLE tours 
            ADD COLUMN IF NOT EXISTS itinerary JSONB DEFAULT '[]'::jsonb,
            ADD COLUMN IF NOT EXISTS inclusions JSONB DEFAULT '[]'::jsonb,
            ADD COLUMN IF NOT EXISTS exclusions JSONB DEFAULT '[]'::jsonb,
            ADD COLUMN IF NOT EXISTS preparing JSONB DEFAULT '[]'::jsonb,
            ADD COLUMN IF NOT EXISTS faqs JSONB DEFAULT '[]'::jsonb;
        `);
        console.log('✅ Đã thêm các cột: itinerary, inclusions, exclusions, preparing, faqs vào bảng tours.');
        
        console.log('🎉 Di chuyển cấu trúc DB thành công!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Lỗi khi di chuyển cấu trúc DB:', err);
        process.exit(1);
    }
}

migrate();
