/**
 * Setup payment_transactions table for SePay webhook integration
 * Run: node scripts/setup-payment-transactions.js
 */
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function setup() {
    const client = await pool.connect();
    try {
        console.log('🔧 Creating payment_transactions table...');

        await client.query(`
            CREATE TABLE IF NOT EXISTS payment_transactions (
                id SERIAL PRIMARY KEY,
                booking_id INTEGER REFERENCES bookings(id) ON DELETE SET NULL,
                sepay_transaction_id VARCHAR(100),
                amount INTEGER NOT NULL,
                transfer_content TEXT,
                gateway VARCHAR(50),
                transaction_date TIMESTAMP,
                account_number VARCHAR(50),
                payment_type VARCHAR(20) DEFAULT 'deposit',
                raw_data JSONB,
                created_at TIMESTAMP DEFAULT NOW()
            );
        `);

        console.log('✅ payment_transactions table created successfully!');

        // Add index for faster lookup
        await client.query(`
            CREATE INDEX IF NOT EXISTS idx_payment_transactions_booking_id 
            ON payment_transactions(booking_id);
        `);
        await client.query(`
            CREATE INDEX IF NOT EXISTS idx_payment_transactions_sepay_id 
            ON payment_transactions(sepay_transaction_id);
        `);

        console.log('✅ Indexes created.');
        console.log('🎉 Done!');
    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        client.release();
        await pool.end();
    }
}

setup();
