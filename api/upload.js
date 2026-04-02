/**
 * API: /api/upload
 * Nhận ảnh dạng Base64 → Nén bằng sharp (tối đa 1000px, quality 80%) → Lưu vào uploads/services/
 * Trả về URL tĩnh để hiển thị
 */
const path  = require('path');
const fs    = require('fs');
const sharp = require('sharp');

// Thư mục lưu ảnh: tạo tự động nếu chưa có
const UPLOADS_DIR = path.resolve(__dirname, '..', 'uploads', 'services');
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST')   return res.status(405).json({ error: 'Method Not Allowed' });

    try {
        const { image, filename } = req.body;

        // ── Validate ────────────────────────────────────────────────────────
        if (!image) return res.status(400).json({ error: 'Thiếu dữ liệu ảnh (image).' });

        // Strip "data:image/xxx;base64," prefix nếu có
        const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
        const inputBuffer = Buffer.from(base64Data, 'base64');

        // ── Validate kích thước gốc: từ chối > 10MB ─────────────────────────
        const sizeMB = inputBuffer.byteLength / (1024 * 1024);
        if (sizeMB > 10) {
            return res.status(413).json({ error: 'Ảnh quá lớn. Tối đa 10MB.' });
        }

        // ── Tạo tên file an toàn ─────────────────────────────────────────────
        const safeName = (filename || 'service')
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-]/g, '')
            .slice(0, 50);
        const uniqueSuffix = Date.now();
        const outputFilename = `${safeName}-${uniqueSuffix}.jpg`;
        const outputPath = path.join(UPLOADS_DIR, outputFilename);

        // ── Nén ảnh bằng Sharp ───────────────────────────────────────────────
        // • Resize max 1000px (giữ tỷ lệ, không phóng to nếu ảnh nhỏ hơn)
        // • Chuyển sang JPEG quality 82%
        // • Xóa metadata EXIF (nhẹ hơn, bảo mật hơn)
        await sharp(inputBuffer)
            .resize(1000, 1000, {
                fit: 'inside',       // giữ nguyên tỷ lệ, không crop
                withoutEnlargement: true,   // không phóng to ảnh nhỏ
            })
            .jpeg({ quality: 82, mozjpeg: true })
            .withMetadata({ exif: {} })     // xóa EXIF
            .toFile(outputPath);

        // ── Tính dung lượng trước/sau ─────────────────────────────────────────
        const outputStat = fs.statSync(outputPath);
        const inputKB  = Math.round(inputBuffer.byteLength / 1024);
        const outputKB = Math.round(outputStat.size / 1024);
        const savePct  = Math.round((1 - outputStat.size / inputBuffer.byteLength) * 100);

        const url = `/uploads/services/${outputFilename}`;

        console.log(`[upload] ✅ ${outputFilename} | ${inputKB}KB → ${outputKB}KB (giảm ${savePct}%)`);

        return res.status(200).json({
            success: true,
            url,
            filename: outputFilename,
            stats: { inputKB, outputKB, savePct },
        });

    } catch (err) {
        console.error('[upload] ❌', err);
        return res.status(500).json({ error: 'Lỗi xử lý ảnh: ' + err.message });
    }
};
