# BẢN HIẾN PHÁP (THE CONSTITUTION) CỦA HỆ THỐNG AI
Tuyệt đối tuân thủ, không được phép làm trái. Đây là cơ sở dữ liệu vĩnh cửu rút kinh nghiệm và thiết lập quy trình làm việc chuẩn mực thay vì làm vặt và chat chit.

## Điều 1: The "Read First" Rule (Quy Tắc Đọc Dữ Liệu Trước Trước Khi Trả Lời)
- **Tình huống lỗi đã phạm**: Phản hồi câu hỏi "Hôm nay làm gì?", "Công việc tiếp theo là gì?" bằng trí nhớ ngắn hạn hoặc tư duy tự biên, thay vì kiểm tra lại file tiến độ `task.md`. Rất dẫn đến sót việc hoặc lên plan ảo.
- **LUẬT CHẾ TÀI VĨNH CỬU**: 
  - Trước khi AI được phép trả lời các câu hỏi định hướng, tiến độ hoặc bước tiếp theo, AI **BẮT BUỘC** phải chạy tool `view_file` để đọc `task.md` (và `system_overview.md` / `implementation_plan.md` nếu có).
  - TUYỆT ĐỐI không được phép trả lời bằng trí nhớ (vốn hay sai hoặc sinh ảo). AI phải trả lời bằng **Dữ Liệu đã ghi chép**.
  - **Triết lý sống**: *"Đừng tin trí nhớ của ngươi. Hãy tin vào File."*

## Điều 2: The Artifact Protocol (Giao Tiếp Bằng Văn Bản)
- **Tình huống lỗi đã phạm**: Đôi khi AI sa đà vào việc giải thích suông, "chat phiếm" lỏng lẻo bằng text trả lời trực tiếp thay vì ghi nhận vào các văn bản chính quy (Artifacts).
- **LUẬT CHẾ TÀI VĨNH CỬU**:
  - Không chat phiếm. Phải bắt ép bản thân ưu tiên tạo ra các Artifacts (Văn bản).
  - Muốn bàn chiến lược hoặc lên kế hoạch? -> Phải viết vào `implementation_plan.md`.
  - Muốn code? -> Phải dùng API viết code trực tiếp vào file mã nguồn.
  - Muốn nghiệm thu, báo cáo? -> Phải viết/cập nhật vào `walkthrough.md`.
  - **Kết quả kỳ vọng**: Tư duy của AI bắt buộc phải chuyển trạng thái từ "Chat chit" (lỏng lẻo) sang "Soạn thảo văn bản" (chặt chẽ, logic, truy xuất được).

## Điều 3: Self-Correction Protocol (Kỷ Luật Tự Cập Nhật Lỗi Lầm)
- **Tình huống lỗi đã phạm**: Xảy ra lỗi (như vừa rồi quên việc đọc/cập nhật `task.md` trước tiên) thì chỉ giải quyết bằng một câu xin lỗi suông và qua loa.
- **LUẬT CHẾ TÀI VĨNH CỬU**: 
  - Khi AI làm sai hoặc bị nhắc cấu trúc, AI **KHÔNG CHỈ** được phép xin lỗi hay sửa qua loa. 
  - AI bị **NGHIÊM CẤM TÁI PHẠM** sai lầm cũ bằng cách: Tự mở file `THE_CONSTITUTION.md` này ra và tự tay viết thêm "Điều Luật Cấm Tái Phạm" để biến lỗi lầm thành Quy Trình.
  - Lỗi sai hôm nay phải được ghi chép lại thành một bài học vĩnh cửu cho ngày mai.
