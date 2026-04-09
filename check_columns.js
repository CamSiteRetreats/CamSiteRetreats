require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
pool.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'bookings' ORDER BY ordinal_position")
  .then(r => {
    console.log('=== BOOKINGS TABLE COLUMNS ===');
    r.rows.forEach(row => console.log(' -', row.column_name));
    pool.end();
  })
  .catch(e => { console.error('ERROR:', e.message); pool.end(); });
