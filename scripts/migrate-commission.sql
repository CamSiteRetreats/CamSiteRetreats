-- ============================================================
-- Migration: Hệ thống thanh toán hoa hồng Sale
-- Chạy trên Neon Dashboard > SQL Editor
-- ============================================================

-- 1. Thêm cột hoa hồng vào bảng bookings
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS commission_paid BOOLEAN DEFAULT FALSE;
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS commission_paid_at TIMESTAMPTZ;
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS commission_payment_id INTEGER;

-- 2. Tạo bảng lưu lịch sử batch thanh toán hoa hồng
CREATE TABLE IF NOT EXISTS commission_payments (
    id              SERIAL PRIMARY KEY,
    sale_id         VARCHAR(50),
    sale_name       VARCHAR(255),
    total_orders    INTEGER NOT NULL DEFAULT 0,
    total_amount    NUMERIC(12,0) NOT NULL DEFAULT 0,
    booking_ids     JSONB,
    paid_by         VARCHAR(255),
    note            TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Verify
SELECT column_name, data_type FROM information_schema.columns
WHERE table_name = 'bookings'
  AND column_name IN ('commission_paid', 'commission_paid_at', 'commission_payment_id');

SELECT table_name FROM information_schema.tables
WHERE table_name = 'commission_payments';
