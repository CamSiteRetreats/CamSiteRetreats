const { neon } = require('@neondatabase/serverless');
require('dotenv').config();
const fs = require('fs');
const sql = neon(process.env.DATABASE_URL);

async function main() {
  try {
    const schedules = await sql`SELECT * FROM schedules WHERE tour_name ILIKE '%Năng%' AND start_date::text LIKE '2026-04-2%'`;
    fs.writeFileSync('schedules_tanang.json', JSON.stringify(schedules, null, 2));
    console.log('Saved schedules_tanang.json');
  } catch (err) {
    console.error(err);
  }
}
main();
