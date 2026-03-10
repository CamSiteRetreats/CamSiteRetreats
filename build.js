/**
 * Build script cho CAM SITE RETREATS
 * Cloudflare Pages sẽ chạy: node build.js
 * 
 * Quy trình:
 * 1. Restore admin/index.html về dạng Vite dev entry (src/main.js)
 * 2. Dọn sạch admin/assets/ cũ
 * 3. Build Vite trong thư mục admin/
 * 4. Copy output từ admin/dist/ → admin/ (index.html + assets/)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const ADMIN_DIR = path.join(ROOT, 'admin');
const DIST_DIR = path.join(ADMIN_DIR, 'dist');
const ASSETS_SRC = path.join(DIST_DIR, 'assets');
const ASSETS_DEST = path.join(ADMIN_DIR, 'assets');
const INDEX_SRC = path.join(DIST_DIR, 'index.html');
const INDEX_DEST = path.join(ADMIN_DIR, 'index.html');

// Template Vite dev index.html — Vite cần file này để build đúng
const DEV_INDEX_HTML = `<!doctype html>
<html lang="vi">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/admin/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <title>CAM SITE RETREATS | Admin Panel V2</title>
    <script type="module" src="/src/main.js"></script>
</head>

<body>
    <div id="app"></div>
</body>

</html>
`;

console.log('🏗️  CAM SITE RETREATS - Build Pipeline\n');

// Bước 1: Restore index.html về dạng Vite dev (QUAN TRỌNG: phải làm trước khi build)
console.log('🔄 Bước 1: Restore admin/index.html về Vite dev entry...');
fs.writeFileSync(INDEX_DEST, DEV_INDEX_HTML, 'utf8');
console.log('   ✅ Done\n');

// Bước 2: Dọn assets cũ
console.log('🧹 Bước 2: Dọn sạch assets cũ...');
if (fs.existsSync(ASSETS_DEST)) {
    fs.rmSync(ASSETS_DEST, { recursive: true, force: true });
}
fs.mkdirSync(ASSETS_DEST, { recursive: true });
console.log('   ✅ Done\n');

// Bước 3: Install + Build Vite
console.log('📦 Bước 3: Install dependencies admin panel...');
execSync('npm ci --prefer-offline', {
    cwd: ADMIN_DIR,
    stdio: 'inherit'
});
console.log('');

console.log('⚡ Bước 4: Build Vite...');
execSync('npm run build', {
    cwd: ADMIN_DIR,
    stdio: 'inherit'
});
console.log('');

// Bước 4: Copy output vào đúng vị trí
console.log('📁 Bước 5: Copy assets sang admin/assets/...');
fs.cpSync(ASSETS_SRC, ASSETS_DEST, { recursive: true, force: true });
console.log(`   ✅ Copied assets: ${fs.readdirSync(ASSETS_DEST).length} files\n`);

console.log('📄 Bước 6: Cập nhật admin/index.html với file build mới...');
fs.copyFileSync(INDEX_SRC, INDEX_DEST);
console.log('   ✅ Done\n');

console.log('🔗 Bước 7: Cài đặt file _redirects và 404.html cho SPA Admin...');
const REDIRECTS_CONTENT = '/admin/* /admin/index.html 200\n';
fs.writeFileSync(path.join(ADMIN_DIR, '_redirects'), REDIRECTS_CONTENT, 'utf8');
fs.writeFileSync(path.join(ROOT, '_redirects'), REDIRECTS_CONTENT, 'utf8');

// Thêm fallback thư mục con của Cloudflare Pages (admin/404.html = admin/index.html)
fs.copyFileSync(INDEX_DEST, path.join(ADMIN_DIR, '404.html'));
console.log('   ✅ Đã copy 404.html và tạo _redirects chuẩn \n');

console.log('🚀 Build hoàn tất! Cloudflare Pages sẵn sàng deploy.\n');
