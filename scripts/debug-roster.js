const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/bookings.json');
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const liengAiBookings = data.bookings.filter(b => b.tour && b.tour.includes('Liêng'));
console.log('Bookings for Liêng Ài:');
console.log(JSON.stringify(liengAiBookings, null, 2));
