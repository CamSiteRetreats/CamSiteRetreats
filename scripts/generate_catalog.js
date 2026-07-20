require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Mapping of tour names in DB to their HTML files in tour/
const tourFileMap = {
    'Tà Năng - Phan Dũng': 'tanangphandung.html',
    'Bidoup - Tà Giang': 'bidouptagiang.html',
    'Yang Đoan': 'yangdoan.html',
    'Thác Mưa Bay': 'thacmuabay.html',
    'Langbiang - Tour Săn Mây': 'langbiang.html',
    'Bạch Mộc Lương Tử': 'kyquansang.html'
};

function cleanHtml(html) {
    return html
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ')
        .trim();
}

function parseItinerary(htmlContent) {
    const cleaned = cleanHtml(htmlContent);
    const itinerary = [];
    
    // Find all itinerary-step blocks
    // Note: We search for the divs with itinerary-step class
    const stepRegex = /<div class="[^"]*itinerary-step[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
    let match;
    
    while ((match = stepRegex.exec(cleaned)) !== null) {
        const block = match[1];
        
        // Find day title inside h4
        const h4Match = /<h4[^>]*>([\s\S]*?)<\/h4>/i.exec(block);
        if (!h4Match) continue;
        
        const dayTitle = h4Match[1].replace(/<[^>]+>/g, '').trim();
        const steps = [];
        
        // Find all time items: flex gap-3 text-base
        const itemRegex = /<span class="font-bold[^>]*>([\s\S]*?)<\/span>\s*<span class="font-light[^>]*>([\s\S]*?)<\/span>/gi;
        let itemMatch;
        while ((itemMatch = itemRegex.exec(block)) !== null) {
            const time = itemMatch[1].replace(/<[^>]+>/g, '').trim();
            const desc = itemMatch[2].replace(/<[^>]+>/g, '').trim();
            if (time || desc) {
                steps.push({ time, desc });
            }
        }
        
        if (dayTitle) {
            itinerary.push({ dayTitle, steps });
        }
    }
    
    return itinerary;
}

async function run() {
    try {
        console.log("Fetching active tours from DB...");
        const dbRes = await pool.query("SELECT id, name, price, level, duration FROM tours WHERE is_visible = true ORDER BY sort_order ASC, id ASC");
        const dbTours = dbRes.rows;
        
        let markdownContent = `# DANH MỤC SẢN PHẨM & LỊCH TRÌNH CHI TIẾT (PRODUCT PORTFOLIO & ITINERARY)
**CAM SITE RETREATS**

Tài liệu này hệ thống hóa chi tiết lịch trình thực tế được trích xuất trực tiếp từ các trang tour, kèm theo thông tin giá cả, thời lượng và cấp độ từ cơ sở dữ liệu.

---

`;

        let tourIndex = 1;
        for (const tour of dbTours) {
            const fileName = tourFileMap[tour.name];
            if (!fileName) {
                console.warn(`No HTML file mapped for tour: "${tour.name}"`);
                continue;
            }
            
            const filePath = path.join(__dirname, '../tour', fileName);
            if (!fs.existsSync(filePath)) {
                console.warn(`File not found: ${filePath}`);
                continue;
            }
            
            console.log(`Parsing itinerary for: "${tour.name}" from ${fileName}`);
            const htmlContent = fs.readFileSync(filePath, 'utf8');
            const itinerary = parseItinerary(htmlContent);
            
            // Format price
            const formattedPrice = typeof tour.price === 'number' ? tour.price.toLocaleString('vi-VN') + 'đ' : 'Liên hệ';
            
            markdownContent += `## ${tourIndex}. TOUR ${tour.name.toUpperCase()}
*   **Thời lượng:** ${tour.duration || 'Chưa rõ'}
*   **Giá bán lẻ:** ${formattedPrice}
*   **Cấp độ (Level):** ${tour.level || 'Trung Bình'}
*   **Tiền cọc yêu cầu:** 1,000,000đ / khách

### 📅 Lịch trình chi tiết:
`;

            if (itinerary.length === 0) {
                markdownContent += `*(Lịch trình đang được cập nhật)*\n\n`;
            } else {
                itinerary.forEach(day => {
                    markdownContent += `*   **${day.dayTitle}**\n`;
                    day.steps.forEach(step => {
                        markdownContent += `    *   **${step.time}** ${step.desc}\n`;
                    });
                });
                markdownContent += `\n`;
            }
            
            markdownContent += `---\n\n`;
            tourIndex++;
        }

        markdownContent += `## 💳 CHÍNH SÁCH THANH TOÁN & ĐIỀU KHOẢN HỦY TOUR

### 1. Chính sách thanh toán:
*   Khách hàng đặt cọc tối thiểu **1,000,000đ / khách** ngay sau khi gửi form đăng ký để giữ chỗ.
*   Số tiền còn lại (thanh toán đủ 100% giá trị tour) được thanh toán bằng chuyển khoản hoặc tiền mặt cho Tour Leader tại điểm tập trung vào ngày khởi hành.

### 2. Chính sách hoàn hủy (Cancellation Policy):
*   **Hủy trước khởi hành > 7 ngày:** Hoàn trả 100% tiền cọc hoặc hỗ trợ khách chuyển đổi lịch trình sang tuần sau miễn phí.
*   **Hủy từ 3 - 7 ngày trước khởi hành:** Phạt 50% tiền cọc (dùng để trả phí giữ xe giường nằm và chuẩn bị đồ ăn hậu cần).
*   **Hủy < 3 ngày trước khởi hành:** Phạt 100% tiền cọc.
*   **Trường hợp thiên tai, bão lũ (Bất khả kháng):** CAM SITE RETREATS sẽ chủ động hủy tour để đảm bảo an toàn tính mạng cho khách hàng và hoàn lại 100% số tiền khách đã thanh toán.
`;

        const targetPath = path.join(__dirname, '../HeThongVanHanh/Danh_Muc_San_Pham_Chi_Tiet.md');
        fs.writeFileSync(targetPath, markdownContent, 'utf8');
        console.log(`✅ Detailed product catalog generated at: ${targetPath}`);

        const artifactPath = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\f361c19b-498d-410d-b32e-bc7ac7aed3d6\\product_catalog_and_safety.md';
        try {
            fs.writeFileSync(artifactPath, markdownContent, 'utf8');
            console.log(`✅ Artifact updated at: ${artifactPath}`);
        } catch(err) {
            console.warn("Could not write to artifact path:", err.message);
        }

    } catch (e) {
        console.error("Error generating product catalog:", e);
    } finally {
        pool.end();
    }
}

run();
