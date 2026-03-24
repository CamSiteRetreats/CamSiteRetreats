/**
 * Migration: Booking Engine V2
 * - Thêm cột form_config, pickup_points vào bảng tours
 * - Tạo bảng coupons
 */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require('../utils/db');

async function migrate() {
    console.log('🚀 Bắt đầu migration Booking Engine V2...\n');

    // 1. Thêm cột form_config vào tours
    try {
        await db.query(`ALTER TABLE tours ADD COLUMN IF NOT EXISTS form_config JSONB DEFAULT '{}'::jsonb`);
        console.log('✅ Đã thêm cột form_config vào bảng tours');
    } catch (e) {
        console.error('❌ form_config:', e.message);
    }

    // 2. Thêm cột pickup_points vào tours
    try {
        await db.query(`ALTER TABLE tours ADD COLUMN IF NOT EXISTS pickup_points JSONB DEFAULT '[]'::jsonb`);
        console.log('✅ Đã thêm cột pickup_points vào bảng tours');
    } catch (e) {
        console.error('❌ pickup_points:', e.message);
    }

    // 3. Thêm cột services vào tours (danh sách dịch vụ bổ sung kèm giá)
    try {
        await db.query(`ALTER TABLE tours ADD COLUMN IF NOT EXISTS services JSONB DEFAULT '[]'::jsonb`);
        console.log('✅ Đã thêm cột services vào bảng tours');
    } catch (e) {
        console.error('❌ services:', e.message);
    }

    // 4. Thêm cột services_booked vào bookings (dịch vụ khách đã đặt)
    try {
        await db.query(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS services_booked JSONB DEFAULT '[]'::jsonb`);
        console.log('✅ Đã thêm cột services_booked vào bảng bookings');
    } catch (e) {
        console.error('❌ services_booked:', e.message);
    }

    // 5. Thêm cột coupon_code vào bookings
    try {
        await db.query(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS coupon_code TEXT DEFAULT NULL`);
        console.log('✅ Đã thêm cột coupon_code vào bảng bookings');
    } catch (e) {
        console.error('❌ coupon_code:', e.message);
    }

    // 6. Thêm cột pickup_point vào bookings
    try {
        await db.query(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS pickup_point TEXT DEFAULT NULL`);
        console.log('✅ Đã thêm cột pickup_point vào bảng bookings');
    } catch (e) {
        console.error('❌ pickup_point:', e.message);
    }

    // 7. Tạo bảng coupons
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS coupons (
                id SERIAL PRIMARY KEY,
                code TEXT UNIQUE NOT NULL,
                discount_type TEXT NOT NULL DEFAULT 'percentage',
                value INTEGER NOT NULL,
                min_price INTEGER DEFAULT 0,
                max_uses INTEGER DEFAULT NULL,
                used_count INTEGER DEFAULT 0,
                active BOOLEAN DEFAULT true,
                expires_at TIMESTAMP DEFAULT NULL,
                description TEXT DEFAULT NULL,
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);
        console.log('✅ Đã tạo bảng coupons');
    } catch (e) {
        console.error('❌ coupons:', e.message);
    }

    // 8. Seed form_config mặc định cho tất cả tours nếu trống
    try {
        const defaultConfig = JSON.stringify({
            step2: {
                show_pickup: true,
                show_medal_name: true,
                show_vegetarian: true,
                show_trekking_pole: true,
                show_special_request: true
            },
            step3: {
                show_coupon: true
            }
        });
        await db.query(`
            UPDATE tours SET form_config = $1::jsonb
            WHERE form_config IS NULL OR form_config = '{}'::jsonb
        `, [defaultConfig]);
        console.log('✅ Đã seed form_config mặc định cho tất cả tours');
    } catch (e) {
        console.error('❌ seed form_config:', e.message);
    }

    console.log('\n🎉 Migration hoàn tất!');
    process.exit(0);
}

migrate();
