const db = require('./api/_db.js');

db.query('ALTER TABLE bookings ADD COLUMN IF NOT EXISTS discount INTEGER DEFAULT 0;')
    .then(() => console.log('Success DB migration'))
    .catch(e => console.error(e))
    .finally(() => process.exit(0));
