const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = 8889;

// Root project dir (one level up from dev_tools)
const rootDir = path.resolve(__dirname, '..');

// ── Tạo thư mục uploads/services nếu chưa tồn tại ────────────────────────────
const uploadsDir = path.join(rootDir, 'uploads', 'services');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log('📁 Đã tạo thư mục: uploads/services/');
}

// Middleware CORS cho phép Localhost gọi
app.use(cors());

// Parse JSON body — tăng limit lên 15MB để chứa ảnh Base64 (ảnh 10MB raw ≈ 13.3MB Base64)
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Serve thư mục uploads/ như static files → /uploads/services/xxx.jpg
app.use('/uploads', express.static(path.join(rootDir, 'uploads')));

// Khai báo Static Folder để Nodejs Host trang web tĩnh ra ngoài qua Port 8889
app.use(express.static(rootDir));

// Load dynamic serverless functions from /api folder
const apiPath = path.join(rootDir, 'api');
fs.readdirSync(apiPath).forEach(file => {
    if (file.endsWith('.js')) {
        const route = file.replace('.js', '');
        app.all(`/api/${route}`, async (req, res) => {
            try {
                // Xóa cache để luôn load phiên bản mới nhất của handler
                delete require.cache[require.resolve(path.join(apiPath, file))];
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
    console.log(`📁 Static uploads: http://localhost:${PORT}/uploads/services/`);
    console.log(`Các API khả dụng bao gồm /api/auth, /api/upload,...`);
});
