/**
 * Migration: Thêm cột vehicle_type vào bảng schedules
 * Chạy: node scripts/add-vehicle-type.mjs
 */
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

async function migrate() {
    const client = await pool.connect();
    try {
        console.log('🚀 Bắt đầu migration vehicle_type...');
        await client.query(`
            ALTER TABLE schedules
            ADD COLUMN IF NOT EXISTS vehicle_type TEXT DEFAULT 'solati_16';
        `);
        console.log('✅ Đã thêm cột vehicle_type (default: solati_16)');
        const { rows } = await client.query(`
            SELECT column_name, data_type, column_default
            FROM information_schema.columns
            WHERE table_name = 'schedules' AND column_name = 'vehicle_type';
        `);
        console.log('📋 Kết quả:', rows);
        console.log('🎉 Migration hoàn tất!');
    } catch (err) {
        console.error('❌ Lỗi:', err.message);
    } finally {
        client.release();
        await pool.end();
    }
}
migrate();
