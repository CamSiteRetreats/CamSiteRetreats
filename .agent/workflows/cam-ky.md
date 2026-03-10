---
description: Danh sách những điều PHẢI LÀM và CẤM KỴ khi phát triển dự án CAM SITE RETREATS
---

# 📋 QUY TẮC DỰ ÁN CAM SITE RETREATS

## ✅ NHỮNG ĐIỀU PHẢI LÀM

### 🏗️ Kiến trúc & Nền tảng
- **PHẢI** dùng **Cloudflare Pages** làm nền tảng deploy chính (KHÔNG dùng Vercel)
- **PHẢI** đặt toàn bộ API functions trong thư mục `functions/api/` (chuẩn Cloudflare Pages Functions)
- **PHẢI** dùng cú pháp `export async function onRequest(context)` cho mọi API function
- **PHẢI** lấy biến môi trường từ `context.env` (ví dụ: `env.DATABASE_URL`)
- **PHẢI** dùng `@neondatabase/serverless` để kết nối database (không dùng `pg` trong Cloudflare)
- **PHẢI** giữ file `wrangler.toml` với `pages_build_output_dir = "."`
- **PHẢI** giữ file `functions/_routes.json` để định tuyến API

### 🔐 Bảo mật
- **PHẢI** đặt toàn bộ secrets trong **Cloudflare Dashboard → Environment Variables** (không hardcode)
- **PHẢI** đặt file `.env` trong `.gitignore` (KHÔNG đẩy `.env` lên GitHub)
- **PHẢI** kiểm tra CORS headers trong mọi API response

### 📁 Cấu trúc file
- **PHẢI** đặt static files (HTML, CSS, JS, ảnh) ở thư mục gốc hoặc subdirectory
- **PHẢI** dùng `import` (ESM) trong `functions/api/` — KHÔNG dùng `require()`
- **PHẢI** test API endpoint sau mỗi lần deploy

### 📧 Email & Thanh toán
- **PHẢI** dùng **Resend** cho gửi email (biến `RESEND_API_KEY`)
- **PHẢI** dùng **SePay** cho thanh toán chuyển khoản (biến `SEPAY_API_KEY`)

---

## 🚫 ĐIỀU CẤM KỴ (TUYỆT ĐỐI KHÔNG LÀM)

### ❌ Nền tảng
- **CẤM** deploy lên Vercel — dự án đã chuyển sang Cloudflare Pages
- **CẤM** xóa project trên Cloudflare mà không backup domain/DNS settings trước
- **CẤM** dùng Vercel Serverless Functions (`module.exports`, `req/res` kiểu Express) trong `functions/api/`

### ❌ ES Modules & MIME Type
- **CẤM** để Cloudflare serve file `.js` với MIME type `text/html` — nếu gặp lỗi  
  `"Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/html'"`  
  thì nguyên nhân là:
  1. File JS đang bị route sai vào một trang HTML (thường do `_routes.json` hoặc rewrite config sai)
  2. Path import trong HTML bị sai (file không tồn tại → Cloudflare trả 404 HTML)
  3. Admin `index.html` dùng `<script type="module" src="...">` nhưng file JS không được deploy đúng chỗ
  → **FIX**: Kiểm tra đường dẫn file JS trong HTML, đảm bảo file tồn tại đúng vị trí, kiểm tra `_routes.json`

- **CẤM** dùng `require()` hoặc `module.exports` bên trong `functions/api/` (Cloudflare chỉ hỗ trợ ESM)
- **CẤM** import `dotenv` trong Cloudflare Functions (không chạy được — dùng `context.env` thay thế)

### ❌ Database
- **CẤM** dùng thư viện `pg` (node-postgres) trong Cloudflare Workers/Functions — dùng `@neondatabase/serverless`
- **CẤM** để lộ `DATABASE_URL` trong code hoặc commit lên GitHub

### ❌ Git & Code
- **CẤM** đẩy file `.env` lên GitHub
- **CẤM** commit các file debug tạm như `debug_*.json`, `*.txt` logs lên production
- **CẤM** xóa thư mục `functions/api/` — đây là toàn bộ backend của ứng dụng
- **CẤM** sửa `functions/_routes.json` bừa bãi mà không hiểu routing

### ❌ Admin Panel
- **CẤM** để admin panel công khai không có xác thực (phải có JWT/login)
- **CẤM** xóa hoặc đổi tên endpoint API mà không cập nhật frontend
