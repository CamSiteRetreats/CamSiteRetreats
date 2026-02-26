const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'ADMIN_V2', 'src');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let orig = content;

            // Dùng split().join() thay cho RegExp \b để bắt chính xác các ngoặc vuông, dấu /
            content = content.split('bg-[#141414]').join('bg-gray-50');
            content = content.split('bg-white/5').join('bg-gray-100');
            content = content.split('bg-white/10').join('bg-gray-200');
            content = content.split('bg-white/20').join('bg-gray-200');
            content = content.split('bg-black/20').join('bg-gray-100');
            content = content.split('bg-black/30').join('bg-gray-200');
            content = content.split('bg-black/40').join('bg-gray-50 border-b border-csr-border');
            content = content.split('bg-black/80').join('bg-gray-900/60'); // Dành cho Modal Backdrop
            content = content.split('border-gray-600').join('border-gray-300'); // Viền xám tối

            if (content !== orig) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('✅ Đã sửa class nền tối cứng đầu ở: ' + file);
            }
        }
    }
}
processDir(srcDir);
