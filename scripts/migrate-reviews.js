require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

async function run() {
    try {
        await sql`
          CREATE TABLE IF NOT EXISTS tour_reviews (
            id              SERIAL PRIMARY KEY,
            schedule_id     INTEGER NOT NULL,
            reviewer_name   TEXT,
            is_anonymous    BOOLEAN DEFAULT FALSE,
            rating_vehicle  SMALLINT CHECK (rating_vehicle  BETWEEN 1 AND 5),
            rating_guide    SMALLINT CHECK (rating_guide    BETWEEN 1 AND 5),
            rating_meals    SMALLINT CHECK (rating_meals    BETWEEN 1 AND 5),
            rating_overall  SMALLINT CHECK (rating_overall  BETWEEN 1 AND 5),
            comment_vehicle TEXT,
            comment_guide   TEXT,
            comment_meals   TEXT,
            comment_general TEXT,
            suggestion      TEXT,
            submitted_at    TIMESTAMPTZ DEFAULT NOW()
          )
        `;
        console.log('✅ Bảng tour_reviews đã được tạo thành công!');
    } catch (e) {
        console.error('❌ Lỗi tạo bảng:', e);
    }
}

run();
