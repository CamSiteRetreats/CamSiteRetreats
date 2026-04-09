require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
pool.query("SELECT id, name, services_booked FROM bookings WHERE services_booked IS NOT NULL AND services_booked != '[]' AND services_booked != 'null' LIMIT 5")
  .then(r => {
    console.log('=== SAMPLE services_booked DATA ===');
    r.rows.forEach(row => {
      console.log(`\nID=${row.id} | Name=${row.name}`);
      console.log('Raw:', row.services_booked);
      try {
        const parsed = JSON.parse(row.services_booked);
        console.log('Parsed (first item keys):', parsed.length > 0 ? Object.keys(parsed[0]) : 'empty array');
        console.log('First item:', JSON.stringify(parsed[0], null, 2));
      } catch(e) { console.log('Parse error:', e.message); }
    });
    pool.end();
  })
  .catch(e => { console.error('ERROR:', e.message); pool.end(); });
