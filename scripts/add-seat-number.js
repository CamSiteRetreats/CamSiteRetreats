/**
 * Migration: Thêm cột seat_number và đảm bảo pickup_point tồn tại
 * Chạy 1 lần: node scripts/add-seat-number.js
 */
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

async function migrate() {
    const client = await pool.connect();
    try {
        console.log('🚀 Bắt đầu migration...');

        await client.query(`
            ALTER TABLE bookings
            ADD COLUMN IF NOT EXISTS seat_number TEXT,
            ADD COLUMN IF NOT EXISTS pickup_point TEXT;
        `);
        console.log('✅ Đã thêm cột seat_number và pickup_point (nếu chưa có)');

        // Kiểm tra kết quả
        const { rows } = await client.query(`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'bookings' 
            AND column_name IN ('seat_number', 'pickup_point')
            ORDER BY column_name;
        `);
        console.log('📋 Các cột hiện tại:', rows);
        console.log('🎉 Migration hoàn tất!');
    } catch (err) {
        console.error('❌ Lỗi migration:', err.message);
    } finally {
        client.release();
        await pool.end();
    }
}

migrate();
