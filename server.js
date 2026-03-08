const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (Frontend)
app.use(express.static(path.join(__dirname, './')));

// Dynamic Vercel API Wrapper
app.all('/api/:route', async (req, res) => {
    const { route } = req.params;
    const apiPath = path.join(__dirname, 'api', `${route}.js`);

    if (fs.existsSync(apiPath)) {
        try {
            // Require the Vercel function (commonjs)
            const handler = require(apiPath);
            // Vercel functions are (req, res) => { ... }
            await handler(req, res);
        } catch (error) {
            console.error(`Error in API route /api/${route}:`, error);
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
    } else {
        res.status(404).json({ error: `API route /api/${route} not found` });
    }
});

// Specific Vercel Rewrites (from vercel.json)
app.get('/pay/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'pay.html'));
});

app.post('/api/sepay-webhook', async (req, res) => {
    req.query.action = 'webhook';
    const handler = require('./api/payment.js');
    await handler(req, res);
});

// Catch-all for SPA or Admin
app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
