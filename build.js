/**
 * Build script cho CAM SITE RETREATS
 * Cloudflare Pages sẽ chạy: node build.js
 * 
 * Quy trình:
 * 1. Dọn sạch admin/assets/ cũ
 * 2. Build Vite trong thư mục admin/
 * 3. Copy output từ admin/dist/ → admin/ (index.html + assets/)
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

console.log('🏗️  CAM SITE RETREATS - Build Pipeline\n');

// Bước 1: Dọn assets cũ
console.log('🧹 Bước 1: Dọn sạch assets cũ...');
if (fs.existsSync(ASSETS_DEST)) {
    fs.rmSync(ASSETS_DEST, { recursive: true, force: true });
}
fs.mkdirSync(ASSETS_DEST, { recursive: true });
console.log('   ✅ Done\n');

// Bước 2: Install + Build Vite
console.log('📦 Bước 2: Install dependencies admin panel...');
execSync('npm ci --prefer-offline', {
    cwd: ADMIN_DIR,
    stdio: 'inherit'
});
console.log('');

console.log('⚡ Bước 3: Build Vite...');
execSync('npm run build', {
    cwd: ADMIN_DIR,
    stdio: 'inherit'
});
console.log('');

// Bước 3: Copy output vào đúng vị trí
console.log('📁 Bước 4: Copy assets sang admin/assets/...');
fs.cpSync(ASSETS_SRC, ASSETS_DEST, { recursive: true, force: true });
console.log(`   ✅ Copied assets: ${fs.readdirSync(ASSETS_DEST).length} files\n`);

console.log('📄 Bước 5: Cập nhật admin/index.html với file build mới...');
fs.copyFileSync(INDEX_SRC, INDEX_DEST);
console.log('   ✅ Done\n');

console.log('🚀 Build hoàn tất! Cloudflare Pages sẵn sàng deploy.\n');
