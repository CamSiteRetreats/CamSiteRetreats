const db = require('../utils/db');

async function main() {
    console.log('Tạo bảng activity_logs và trash...');

    await db.query(`
        CREATE TABLE IF NOT EXISTS activity_logs (
            id          SERIAL PRIMARY KEY,
            user_id     INTEGER,
            user_name   TEXT NOT NULL,
            action      TEXT NOT NULL,
            target_type TEXT NOT NULL,
            target_id   TEXT,
            target_name TEXT,
            detail      JSONB,
            created_at  TIMESTAMPTZ DEFAULT NOW()
        );
    `);
    console.log('✅ Đã tạo bảng activity_logs');

    await db.query(`
        CREATE TABLE IF NOT EXISTS trash (
            id              SERIAL PRIMARY KEY,
            type            TEXT NOT NULL,
            data            JSONB NOT NULL,
            deleted_by      INTEGER,
            deleted_by_name TEXT,
            deleted_at      TIMESTAMPTZ DEFAULT NOW()
        );
    `);
    console.log('✅ Đã tạo bảng trash');

    // Index để query nhanh hơn
    await db.query(`CREATE INDEX IF NOT EXISTS idx_activity_logs_created_at ON activity_logs(created_at DESC);`);
    await db.query(`CREATE INDEX IF NOT EXISTS idx_activity_logs_user_id ON activity_logs(user_id);`);
    await db.query(`CREATE INDEX IF NOT EXISTS idx_trash_deleted_at ON trash(deleted_at DESC);`);

    console.log('✅ Đã tạo index');
    console.log('Hoàn thành!');
    process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
