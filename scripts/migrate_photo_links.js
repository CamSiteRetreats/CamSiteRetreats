/**
 * Migration: Add photo_links (JSONB) and photo_pin to schedules table
 * Run: node scripts/migrate_photo_links.js
 */
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function migrate() {
    const client = await pool.connect();
    try {
        console.log('🔄 Đang kiểm tra cột hiện có...');
        const checkRes = await client.query(`
            SELECT column_name FROM information_schema.columns 
            WHERE table_name = 'schedules' AND column_name IN ('photo_links', 'photo_pin')
        `);
        const existingCols = checkRes.rows.map(r => r.column_name);

        if (!existingCols.includes('photo_links')) {
            console.log('➕ Thêm cột photo_links (JSONB)...');
            await client.query(`ALTER TABLE schedules ADD COLUMN photo_links JSONB DEFAULT '[]'::JSONB`);
            console.log('✅ Cột photo_links đã được thêm!');
        } else {
            console.log('⚠️  Cột photo_links đã tồn tại, bỏ qua.');
        }

        if (!existingCols.includes('photo_pin')) {
            console.log('➕ Thêm cột photo_pin (VARCHAR 4)...');
            await client.query(`ALTER TABLE schedules ADD COLUMN photo_pin VARCHAR(4) DEFAULT NULL`);
            console.log('✅ Cột photo_pin đã được thêm!');
        } else {
            console.log('⚠️  Cột photo_pin đã tồn tại, bỏ qua.');
        }

        console.log('\n🎉 Migration thành công!');
    } catch (err) {
        console.error('❌ Lỗi migration:', err.message);
        process.exit(1);
    } finally {
        client.release();
        await pool.end();
    }
}

migrate();
