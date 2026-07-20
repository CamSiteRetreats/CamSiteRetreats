# QUY TẮC DỰ ÁN CAM SITE RETREATS

## 📦 1. TỰ ĐỘNG CẬP NHẬT DANH MỤC SẢN PHẨM (AUTOMATIC CATALOG UPDATE)
- **QUY TẮC BẮT BUỘC:** Mỗi khi có hoạt động thêm tour mới, sửa đổi thông tin lịch trình, đổi giá tour hoặc cập nhật trạng thái hiển thị của tour (ẩn/hiện), AI **BẮT BUỘC** phải chạy lệnh:
  `node scripts/generate_catalog.js`
- **Mục đích:** Đảm bảo file [Danh_Muc_San_Pham_Chi_Tiet.md](file:///e:/UIUX/ui-ux-pro-max-skill-main/CAM%20SITE%20RETREATS/HeThongVanHanh/Danh_Muc_San_Pham_Chi_Tiet.md) trong thư mục vận hành và file cẩm nang liên quan luôn được đồng bộ hóa chính xác 100% so với dữ liệu thực tế trên website và cơ sở dữ liệu.
