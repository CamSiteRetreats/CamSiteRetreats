const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = 8889;

// Middleware CORS cho phép Localhost gọi
app.use(cors());
// Parse JSON body
app.use(express.json());
// Khai báo Static Folder để Nodejs Host trang web tĩnh ra ngoài qua Port 8888
app.use(express.static(__dirname));

// Load dynamic serverless functions from /api folder
const apiPath = path.join(__dirname, 'api');
fs.readdirSync(apiPath).forEach(file => {
    if (file.endsWith('.js') && file !== '_db.js' && file !== 'setup_v2_db.js') {
        const route = file.replace('.js', '');
        app.all(`/api/${route}`, async (req, res) => {
            try {
                const handler = require(path.join(apiPath, file));
                await handler(req, res);
            } catch (error) {
                console.error(`❌ Error in /api/${route}:`, error);
                res.status(500).json({
                    error: 'Internal Server Error',
                    message: error.message,
                    stack: error.stack
                });
            }
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 DEV BACKEND SERVER đang chạy tại: http://localhost:${PORT}`);
    console.log(`Các API khả dụng bao gồm /api/auth_v2,...`);
});
