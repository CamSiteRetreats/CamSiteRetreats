const handler = require('./api/bookings');
const req = { method: 'GET', query: {} };
const res = {
    setHeader: () => { },
    status: (code) => {
        console.log('Status:', code);
        return {
            json: (data) => console.log('JSON:', JSON.stringify(data, null, 2)),
            end: () => console.log('End')
        };
    }
};

handler(req, res).catch(console.error);
