---
description: Tự động build admin panel và đẩy code lên GitHub không cần hỏi lại
---

// turbo-all

1. Kiểm tra trạng thái
   git status

2. Build admin panel (cập nhật assets mới nhất)
   node build.js

3. Thêm tất cả thay đổi
   git add .

4. Commit với tin nhắn tự động
   git commit -m "Auto-commit by agent: Cập nhật mới nhất"

5. Đẩy lên nhánh main
   git push origin main
