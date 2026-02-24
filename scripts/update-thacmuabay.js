const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../TOUR/thacmuabay.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Overview
content = content.replace(
    `Được mệnh danh là cung đường trekking đẹp nhất miền Nam, Tà Năng - Phan Dũng dài khoảng 30km nối
                        liền Lâm Đồng và Bình Thuận.
                        Hành trình đưa bạn băng qua những đồi cỏ xanh mướt, những rừng thông reo vi vu và đón bình minh
                        rực rỡ trên đỉnh đồi lộng gió.`,
    `Thác Mưa Bay (hay thác Tà Pứa) nằm tại xã Đức Phú, huyện Tánh Linh, Bình Thuận, là một địa danh du lịch hoang sơ nổi tiếng với dòng nước đổ từ độ cao 100m, tạo nên những màn bụi nước li ti như mưa phùn bao phủ không gian.`
);
content = content.replace(
    `Đây không chỉ là một chuyến đi, mà là hành trình chữa lành, tìm về với thiên nhiên nguyên bản để
                        tái tạo năng lượng sau những ngày làm việc căng thẳng.`,
    `Nơi đây là điểm đến hấp dẫn cho những người yêu thiên nhiên và trekking khi khám phá vùng giáp ranh Lâm Đồng - Bình Thuận.`
);

// 2. Specs
content = content.replace(/>Địa điểm<\/h4>\s*<p[^>]+>Lâm Đồng - Bình Thuận<\/p>/g, '>Địa điểm</h4>\n                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">Bình Thuận</p>');
content = content.replace(/>Thời gian<\/h4>\s*<p[^>]+>2 Ngày 1 Đêm<\/p>/g, '>Thời gian</h4>\n                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">1 Ngày 1 Đêm</p>');
content = content.replace(/>Độ dài<\/h4>\s*<p[^>]+>30 km<\/p>/g, '>Độ dài</h4>\n                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">14 KM</p>');
content = content.replace(/>Độ cao<\/h4>\s*<p[^>]+>~900m<\/p>/g, '>Độ cao</h4>\n                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">100M</p>');
content = content.replace(/>Phương tiện<\/h4>\s*<p[^>]+>Xe giường nằm<\/p>/g, '>Phương tiện</h4>\n                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">Xe 16 Chỗ</p>');
content = content.replace(/>Số lượng<\/h4>\s*<p[^>]+>Tối đa 15 khách<\/p>/g, '>Số lượng</h4>\n                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">Tối đa 13 khách</p>');
content = content.replace(/>Tỷ lệ HDV<\/h4>\s*<p[^>]+>1 HDV \/ 4 Khách<\/p>/g, '>Số lượng HDV</h4>\n                            <p class="text-sm font-bold text-gray-800 whitespace-nowrap">2 Người</p>');

// 3. Itinerary
const itineraryStart = content.indexOf('<div class="space-y-6">');
const itineraryEnd = content.indexOf('<!-- Additional Notes', itineraryStart);
if (itineraryStart !== -1 && itineraryEnd !== -1) {
    const newItinerary = `<div class="space-y-6">
                        <!-- Day 1: Accordion (Starts Open) -->
                        <div class="relative pl-8 itinerary-step active">
                            <div class="absolute left-[-5px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md transition-colors duration-300"
                                id="dot-day-1"></div>
                            <button onclick="toggleDay(1)" class="w-full text-left group">
                                <div class="flex justify-between items-center mb-4">
                                    <h4
                                        class="text-lg font-bold text-primary uppercase group-hover:text-primary transition-colors">
                                        Ngày 1: Chinh phục Thác Mưa Bay</h4>
                                    <i data-lucide="chevron-down"
                                        class="w-5 h-5 text-gray-400 group-hover:text-primary transition-transform duration-300"
                                        id="icon-day-1" style="transform: rotate(180deg);"></i>
                                </div>
                            </button>
                            <div id="content-day-1" class="space-y-4 overflow-hidden pb-6">
                                <div class="flex gap-3 text-base">
                                    <span class="font-bold text-gray-800 shrink-0">03h00:</span>
                                    <span class="font-light italic text-gray-600">Xe khởi hành tại sân vận động Hoa Lư (có chỗ gửi xe 24/24)</span>
                                </div>
                                <div class="flex gap-3 text-base">
                                    <span class="font-bold text-gray-800 shrink-0">06h30:</span>
                                    <span class="font-light italic text-gray-600">Ăn sáng, vệ sinh cá nhân</span>
                                </div>
                                <div class="flex gap-3 text-base">
                                    <span class="font-bold text-gray-800 shrink-0">08h00:</span>
                                    <span class="font-light italic text-gray-600">Bắt đầu trekking 7km bằng đường rừng đến Thác Mưa Bay</span>
                                </div>
                                <div class="flex gap-3 text-base">
                                    <span class="font-bold text-gray-800 shrink-0">11h00:</span>
                                    <span class="font-light italic text-gray-600">Ăn trưa tại giữa dòng suối mát lạnh, tắm suối và tự do sinh hoạt</span>
                                </div>
                                <div class="flex gap-3 text-base">
                                    <span class="font-bold text-gray-800 shrink-0">13h00:</span>
                                    <span class="font-light italic text-gray-600">Tiến hành ra khỏi rừng 7km bằng đường suối</span>
                                </div>
                                <div class="flex gap-3 text-base">
                                    <span class="font-bold text-gray-800 shrink-0">16h30:</span>
                                    <span class="font-light italic text-gray-600">Vui chơi, tắm thay tại thác trượt Tà Pứa</span>
                                </div>
                                <div class="flex gap-3 text-base">
                                    <span class="font-bold text-gray-800 shrink-0">17h30:</span>
                                    <span class="font-light italic text-gray-600">Lên xe di chuyển về địa điểm ăn tối</span>
                                </div>
                                <div class="flex gap-3 text-base">
                                    <span class="font-bold text-gray-800 shrink-0">19h00:</span>
                                    <span class="font-light italic text-gray-600">Khởi hành về lại HCM (Dự kiến 22h về đến)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    `;
    content = content.substring(0, itineraryStart) + newItinerary + content.substring(itineraryEnd);
}


// 4. Chi phí bao gồm
const inclusionsStart = content.indexOf('<div class="grid grid-cols-2 lg:grid-cols-3');
const inclusionsEnd = content.indexOf('<!-- Exclusions (Full Width) -->');
if (inclusionsStart !== -1 && inclusionsEnd !== -1) {
    const newInclusions = `<div class="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 md:gap-x-12 md:gap-y-12">
                            <!-- Item 1 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/XeTrungChuyen.png" alt="Xe đưa đón" loading="lazy" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Xe đưa đón</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">Di chuyển bằng xe 16 chỗ, đưa đón 2 chiều từ TP HCM.</p>
                                </div>
                            </div>
                            <!-- Item 2 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/HuongDanVien-SuaLai.png" alt="Hướng dẫn viên" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Hướng dẫn viên</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">Hướng dẫn viên chuyên nghiệp, dễ thương và nhiệt tình.</p>
                                </div>
                            </div>
                            <!-- Item 3 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/DoAn-SuaLai.png" alt="Bữa ăn" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Bữa ăn</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">3 bữa ăn: Ăn sáng, ăn trưa và ăn tối đầy đủ.</p>
                                </div>
                            </div>
                            <!-- Item 4 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/NuocUong.png" alt="Nước uống" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Nước uống</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">Tiêu chuẩn 1 người 1.5L nước / ngày.</p>
                                </div>
                            </div>
                            <!-- Item 5 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/Leu-SuaLai.png" alt="Tắm thay" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Tắm thay</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">Có lều vệ sinh thay đồ sau khi tắm thay ở suối.</p>
                                </div>
                            </div>
                            <!-- Item 6 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/GayTrekking.png" alt="Gậy trekking" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Gậy trekking</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">Được hỗ trợ mượn gậy để sử dụng, an toàn hơn cho chuyến đi.</p>
                                </div>
                            </div>
                            <!-- Item 7 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/HuyChuong.png" alt="Huy chương" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Huy chương</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">Huy chương được thiết kế đặc biệt, in theo tên, lưu giữ kỷ niệm.</p>
                                </div>
                            </div>
                            <!-- Item 8 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/AoMua.png" alt="Áo mưa" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Áo mưa</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">Áo mưa chống nước tốt.</p>
                                </div>
                            </div>
                            <!-- Item 9 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/BaoHiem.png" alt="Bảo hiểm" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Bảo hiểm</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">Bảo hiểm du lịch trị giá 50.000.000 đồng.</p>
                                </div>
                            </div>
                            <!-- Item 10 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/Balo.png" alt="Porter" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Porter</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">Hướng dẫn viên hỗ trợ khuân, vác, chuẩn bị thức ăn trưa trong hành trình.</p>
                                </div>
                            </div>
                            <!-- Item 11 -->
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
                                <div class="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-primary/20 flex items-center justify-center shrink-0 bg-primary/5">
                                    <img src="../tour/ChupAnhCamera.png" alt="Chụp ảnh" class="w-8 h-8 md:w-20 md:h-20 object-contain">
                                </div>
                                <div>
                                    <h4 class="text-xs md:text-base font-black text-primary uppercase mb-1 whitespace-normal md:whitespace-nowrap">Chụp ảnh</h4>
                                    <p class="text-[10px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">Các HDV đều có thể hỗ trợ quay / chụp bằng điện thoại.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    `;
    content = content.substring(0, inclusionsStart) + newInclusions + content.substring(inclusionsEnd);
}

// 5. Chi phí KHÔNG bao gồm
const exclusionsStart = content.indexOf('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">');
const exclusionsEnd = content.indexOf('<!-- SECTION 6: PREPARATION -->');
if (exclusionsStart !== -1 && exclusionsEnd !== -1) {
    const newExclusions = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                            <!-- Item 1 -->
                            <div class="flex gap-4">
                                <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                                    <i data-lucide="x-circle" class="w-6 h-6 text-red-500"></i>
                                </div>
                                <div>
                                    <h5 class="text-sm font-black text-red-500 uppercase mb-1 tracking-wider">Các chi phí cá nhân</h5>
                                    <p class="text-[12px] text-gray-400 font-medium italic leading-relaxed">Ăn uống ngoài đoàn, vé máy bay (khách ngoài HCM).</p>
                                </div>
                            </div>
                            <!-- Item 2 -->
                            <div class="flex gap-4">
                                <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                                    <i data-lucide="x-circle" class="w-6 h-6 text-red-500"></i>
                                </div>
                                <div>
                                    <h5 class="text-sm font-black text-red-500 uppercase mb-1 tracking-wider">Phụ thu lễ / tết</h5>
                                    <p class="text-[12px] text-gray-400 font-medium italic leading-relaxed">Tùy vào thời điểm sẽ có các mức phụ thu khác nhau.</p>
                                </div>
                            </div>
                            <!-- Item 3 -->
                            <div class="flex gap-4">
                                <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                                    <i data-lucide="x-circle" class="w-6 h-6 text-red-500"></i>
                                </div>
                                <div>
                                    <h5 class="text-sm font-black text-red-500 uppercase mb-1 tracking-wider">Tip cho HDV</h5>
                                    <p class="text-[12px] text-gray-400 font-medium italic leading-relaxed">Tùy hỷ nếu bạn thấy hài lòng với sự nhiệt tình của đội ngũ.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                `;
    content = content.substring(0, exclusionsStart) + newExclusions + content.substring(exclusionsEnd);
}

// Fix images path issue across all img tags in inclusions (ensure they use ../tour/)
// Let's do a quick global replace for the img src not having correct path inside the inclusions
content = content.replace(/src="([A-Za-z0-9_-]+\.png)"/g, 'src="../tour/$1"');
// Specifically: src="NMG_giay.png" to src="../tour/NMG_giay.png"
content = content.replace(/src="\.\.\/tour\/\.\.\/tour\//g, 'src="../tour/');

fs.writeFileSync(filePath, content, 'utf8');
console.log('thacmuabay.html updated successfully!');
