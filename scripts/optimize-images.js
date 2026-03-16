/**
 * CAM SITE RETREATS - Image Optimizer v2
 * Convert PNG ảnh tour → JPEG + resize xuống 1920px
 * Nén JPEG lớn xuống quality thấp hơn
 *
 * Cách dùng:
 *   node scripts/optimize-images.js
 *   node scripts/optimize-images.js --dry-run
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// --- CẤU HÌNH ---
const ROOT = path.join(__dirname, '..');
const TARGET_KB = 900;          // mục tiêu < 900KB
const DRY_RUN = process.argv.includes('--dry-run');
const MAX_WIDTH = 1920;         // resize nếu rộng hơn
const JPEG_QUALITY = 82;        // chất lượng JPEG mặc định
const SKIP_DIRS = ['node_modules', '.git', '.wrangler', 'admin', 'api', 'functions', 'scripts', 'booking', 'dev_tools', 'utils'];

// Thư mục cần quét
const SCAN_DIRS = [ROOT, path.join(ROOT, 'tour')];

function formatBytes(b) {
  if (b < 1024) return b + ' B';
  if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
  return (b / 1048576).toFixed(2) + ' MB';
}

function scanDir(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      if (SKIP_DIRS.includes(item.name)) continue;
      scanDir(path.join(dir, item.name), results);
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        results.push(path.join(dir, item.name));
      }
    }
  }
  return results;
}

async function optimizeFile(filePath) {
  const stat = fs.statSync(filePath);
  const originalSize = stat.size;
  const ext = path.extname(filePath).toLowerCase();
  const isPNG = ext === '.png';

  if (originalSize / 1024 <= TARGET_KB) {
    return { file: filePath, skipped: true, originalSize };
  }

  if (DRY_RUN) {
    const strategy = isPNG ? 'PNG → JPEG (convert)' : 'JPEG re-encode';
    console.log(`[DRY-RUN] ${path.relative(ROOT, filePath)} (${formatBytes(originalSize)}) → ${strategy}`);
    return { file: filePath, dry: true, originalSize };
  }

  // Nếu là PNG → convert sang JPEG để giảm mạnh
  // (ảnh tour không cần transparency)
  const outPath = isPNG
    ? filePath.replace(/\.png$/i, '.jpg')
    : filePath + '.tmp.jpg';

  try {
    const meta = await sharp(filePath).metadata();
    const targetW = Math.min(meta.width || MAX_WIDTH, MAX_WIDTH);

    let pipeline = sharp(filePath).resize(targetW, null, { withoutEnlargement: true });

    // Thử quality 80 trước
    await pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true }).toFile(outPath);

    let newSize = fs.statSync(outPath).size;

    // Nếu vẫn > target, giảm quality thêm
    if (newSize / 1024 > TARGET_KB) {
      await sharp(filePath)
        .resize(targetW, null, { withoutEnlargement: true })
        .jpeg({ quality: 70, progressive: true })
        .toFile(outPath);
      newSize = fs.statSync(outPath).size;
    }

    if (isPNG) {
      // Xóa file PNG gốc, giữ JPEG mới
      fs.unlinkSync(filePath);
    } else {
      // Ghi đè file JPG gốc
      fs.copyFileSync(outPath, filePath);
      fs.unlinkSync(outPath);
    }

    const finalPath = isPNG ? outPath : filePath;
    return { file: finalPath, originalFile: filePath, originalSize, newSize, isPNG };

  } catch (err) {
    if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
    return { file: filePath, error: err.message, originalSize };
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('CAM SITE RETREATS - Image Optimizer v2');
  console.log(`Mục tiêu: < ${TARGET_KB} KB | Max width: ${MAX_WIDTH}px`);
  if (DRY_RUN) console.log('⚠️  DRY-RUN: Chỉ hiển thị, không thay đổi file');
  console.log('='.repeat(60));

  let allFiles = [];
  for (const dir of SCAN_DIRS) {
    for (const f of scanDir(dir)) {
      if (!allFiles.includes(f)) allFiles.push(f);
    }
  }

  console.log(`\nTìm thấy ${allFiles.length} file ảnh...\n`);

  const results = [];
  for (const f of allFiles) {
    const r = await optimizeFile(f);
    if (!r.skipped && !r.dry) {
      const rel = path.relative(ROOT, r.originalFile || r.file);
      const action = r.isPNG ? '(PNG→JPG)' : '(re-encode)';
      const saved = r.originalSize - r.newSize;
      const ratio = ((saved / r.originalSize) * 100).toFixed(0);
      console.log(`✅ ${rel} ${action}`);
      console.log(`   ${formatBytes(r.originalSize)} → ${formatBytes(r.newSize)} (−${ratio}%, tiết kiệm ${formatBytes(saved)})`);
    }
    results.push(r);
  }

  const done = results.filter(r => !r.skipped && !r.dry && !r.error);
  const errors = results.filter(r => r.error);
  const skipped = results.filter(r => r.skipped);
  const totalSaved = done.reduce((s, r) => s + (r.originalSize - r.newSize), 0);

  console.log('\n' + '='.repeat(60));
  console.log(`Đã nén: ${done.length} | Bỏ qua: ${skipped.length} | Lỗi: ${errors.length}`);
  console.log(`Tổng tiết kiệm: ${formatBytes(totalSaved)}`);
  if (errors.length > 0) {
    console.log('\nLỗi:');
    errors.forEach(r => console.log(`  ❌ ${path.relative(ROOT, r.file)}: ${r.error}`));
  }

  // Kiểm tra còn file lớn nào không
  const stillLarge = results.filter(r => (r.newSize || r.originalSize) > 1024 * 1024);
  if (stillLarge.length > 0) {
    console.log(`\n⚠️  ${stillLarge.length} file vẫn > 1MB:`);
    stillLarge.forEach(r => {
      const sz = r.newSize || r.originalSize;
      console.log(`   ${path.relative(ROOT, r.originalFile || r.file)}: ${formatBytes(sz)}`);
    });
  } else {
    console.log('\n✅ Tất cả ảnh đã dưới 1MB!');
  }
  console.log('='.repeat(60));
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
