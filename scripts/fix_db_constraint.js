require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function fix() {
  try {
    const res = await pool.query(`ALTER TABLE admins DROP CONSTRAINT IF EXISTS admins_role_check;`);
    console.log('Successfully dropped the constraint.', res);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    pool.end();
  }
}

fix();
