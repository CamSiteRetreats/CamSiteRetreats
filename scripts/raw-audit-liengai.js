require('dotenv').config();
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

const fs = require('fs');

async function findMissing() {
    try {
        console.log('--- RAW BOOKING AUDIT (UNFILTERED) ---');
        const rows = await sql`
            SELECT id, name, tour, date, status 
            FROM bookings 
            WHERE tour ILIKE '%Liêng Ài%'
            ORDER BY date ASC
        `;

        const output = rows.map(r => `[${r.id}] ${r.date} | ${r.status} | ${r.name} | Tour: ${r.tour}`).join('\n');
        fs.writeFileSync('raw_audit_results_utf8.txt', `Total rows found: ${rows.length}\n${output}`, 'utf8');
        console.log(`Saved ${rows.length} rows to raw_audit_results_utf8.txt`);

    } catch (e) { console.error(e); }
}
findMissing();
