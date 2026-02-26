const db = require('./_db');

async function migrate() {
    console.log('Bắt đầu khởi tạo Cấu trúc Cơ sở dữ liệu Admin V2...');

    try {
        // 1. TẠO BẢNG ADMINS & SALES
        await db.query(`
            CREATE TABLE IF NOT EXISTS admins (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                full_name VARCHAR(100) NOT NULL,
                role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'sale')),
                phone VARCHAR(20),
                email VARCHAR(100),
                avatar TEXT,
                bank_info TEXT,
                status VARCHAR(20) DEFAULT 'active',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Bảng admins: OK');

        // 2. TẠO BẢNG SỔ CÁI KHÁCH HÀNG CRM
        await db.query(`
            CREATE TABLE IF NOT EXISTS crm_customers (
                id SERIAL PRIMARY KEY,
                csr_code VARCHAR(15) UNIQUE NOT NULL,    -- Mã định danh tự sinh #CSR...
                full_name VARCHAR(100) NOT NULL,
                phone VARCHAR(20) UNIQUE NOT NULL,
                cccd VARCHAR(20),
                dob DATE,
                gender VARCHAR(10),
                medical_notes TEXT,                      -- Ghi chú dị ứng/thể lực cố định
                dietary VARCHAR(50),
                loyalty_tier VARCHAR(50) DEFAULT 'New',  -- New, Member, VIP
                tour_count INTEGER DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Bảng crm_customers: OK');

        // 3. TẠO BẢNG TOURS
        await db.query(`
            CREATE TABLE IF NOT EXISTS tours_v2 (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                duration VARCHAR(50) NOT NULL,
                level INTEGER NOT NULL,
                price INTEGER NOT NULL,
                status VARCHAR(20) DEFAULT 'active',
                image_url TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Bảng tours_v2: OK');

        // 4. MOCK DATA TÀI KHOẢN MẪU NẾU TRỐNG
        const adminCheck = await db.query("SELECT * FROM admins WHERE username = 'admin'");
        if (adminCheck.rows.length === 0) {
            await db.query(`
                INSERT INTO admins (username, password, full_name, role, phone, bank_info)
                VALUES 
                ('admin', '123456', 'Super Admin', 'admin', '0987.654.321', 'VCB - 1234567 - ADMIN'),
                ('sale', '123456', 'Sale Demo', 'sale', '0911.222.333', 'MB - 987654 - SALE')
            `);
            console.log('✅ Tạo tài khoản mẫu (admin/123456 & sale/123456): OK');
        }

        console.log('🚀 Khởi tạo Database Admin V2 hoàn tất hoàn hảo!');
    } catch (error) {
        console.error('❌ Lỗi khởi tạo Database:', error);
    }
}

migrate();
