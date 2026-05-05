import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => {
    return `
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        <!-- Sidebar is hidden when printing -->
        <div class="print:hidden">
            ${Sidebar()}
        </div>
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          <div class="print:hidden">
              ${Header()}
          </div>
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 print:p-0 print:bg-white print:overflow-visible">
               <div class="max-w-[1400px] mx-auto space-y-6 print:space-y-4">
                  
                  <!-- Top Bar (Hidden on Print) -->
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
                      <div>
                          <div class="flex items-center gap-2 mb-4">
                              <a href="/admin/schedules" data-link class="text-sm font-medium text-gray-400 hover:text-csr-orange transition-colors flex items-center gap-1">
                                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                  Quay lại Lịch Trình
                              </a>
                          </div>
                          
                          <div class="flex items-center gap-4 mb-2">
                              <img src="/logo-camsite-01.png" alt="CAM SITE RETREATS" class="h-14 md:h-16 object-contain">
                              <div class="h-10 border-l border-gray-300"></div>
                              <span class="text-sm font-bold text-gray-400 uppercase tracking-widest">DANH SÁCH ĐOÀN</span>
                          </div>

                          <h1 class="text-3xl font-black tracking-tight text-gray-800 mb-1" id="roster-title">Đang tải tên tour...</h1>
                          <p class="text-gray-500 text-sm" id="roster-subtitle">Đang tải ngày khởi hành...</p>
                      </div>
                      
                      <div class="flex items-center gap-3">
                          <button id="btnExportExcel" class="btn-secondary flex items-center gap-2 bg-white text-green-600 border border-green-200 hover:bg-green-50 shadow-sm">
                              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                              Xuất Excel
                          </button>
                          <button id="btnExportPDF" class="btn-primary flex items-center gap-2 bg-csr-orange hover:opacity-90 shadow-sm text-white">
                              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                              In PDF / Xuất PDF
                          </button>
                      </div>
                  </div>

                  <!-- Print Header (Only visible on Print) -->
                  <div class="hidden print:flex text-left border-b-4 border-csr-orange pb-4 mb-6 items-center justify-between">
                      <div class="flex items-center gap-6">
                            <img src="/logo-camsite-01.png" alt="CAM SITE RETREATS" class="h-20 object-contain">
                            <div>
                                <h1 class="text-3xl font-black uppercase tracking-widest text-[#1A202C] mb-1">VẬN HÀNH TOUR</h1>
                                <div class="text-[16px] text-gray-800 font-bold flex items-center gap-4">
                                    <span class="text-csr-orange text-xl" id="print-tour-name">Tuyến: ...</span>
                                    <span class="text-gray-300">|</span>
                                    <span id="print-tour-date">Ngày: ...</span>
                                </div>
                            </div>
                      </div>
                      <div class="text-right">
                          <span class="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-1">Tổng Số Khách</span>
                          <span class="text-4xl font-black text-csr-orange" id="print-total">0</span>
                      </div>
                  </div>

                  <!-- Filters & Column Selection (Hidden on Print) -->
                  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-5 print:hidden">
                      <div class="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between border-b border-gray-100 pb-5">
                          <div class="flex flex-wrap items-center gap-4">
                              <h3 class="font-bold text-gray-800 flex items-center gap-2">
                                  <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                                  Bộ lọc & Tìm kiếm
                              </h3>
                              <!-- Tìm kiếm text -->
                              <div class="relative min-w-[200px]">
                                  <input type="text" id="filterSearch" placeholder="Tìm tên, SĐT..." class="input-field pl-9 py-2 text-sm w-full">
                                  <svg class="w-4 h-4 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              </div>

                              <select id="filterStatus" class="input-field py-2 text-sm max-w-[180px]">
                                  <option value="">-- Tất cả Trạng thái --</option>
                                  <option value="Đã cọc">Đã cọc / Hoàn tất</option>
                                  <option value="Chờ cọc">Chờ cọc</option>
                                  <option value="Đã hủy">Đã hủy</option>
                              </select>
                              <select id="filterGender" class="input-field py-2 text-sm max-w-[150px]">
                                  <option value="">-- Giới tính --</option>
                                  <option value="Nam">Nam</option>
                                  <option value="Nữ">Nữ</option>
                              </select>

                              <!-- Sắp xếp -->
                              <select id="filterSort" class="input-field py-2 text-sm max-w-[180px] font-bold text-csr-orange border-csr-orange/20">
                                  <option value="newest">🆕 Mới nhất lên đầu</option>
                                  <option value="oldest">⏳ Cũ nhất lên đầu</option>
                              </select>
                          </div>
                          
                          <div class="text-sm text-gray-500 font-medium">
                              Hiển thị <span id="text-visible-count" class="text-gray-900 font-bold">0</span> danh mục
                          </div>
                      </div>

                      <div>
                          <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <svg class="w-4 h-4 text-csr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              Hiển Thị Thêm Cột <span class="ml-2 text-xs font-normal text-gray-400 normal-case tracking-normal">(Tick để bổ sung thông tin bên dưới)</span>
                          </h3>
                          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2" id="column-toggles">
                              <!-- Checkboxes generated by JS -->
                          </div>
                          <p class="text-xs text-gray-400 mt-3 italic">* 6 trường mặc định luôn hiển thị. Tick để thêm cột mở rộng.</p>
                      </div>
                  </div>

                  <!-- Assigned Guides Section -->
                  <div id="rosterGuidesSection" class="bg-indigo-50/50 rounded-2xl border border-indigo-100 p-5 hidden print:block print:border-none print:p-0 print:mb-6">
                      <h3 class="font-bold text-indigo-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider print:text-black print:mb-2">
                          <svg class="w-4 h-4 text-indigo-500 print:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          Nhân Sự Phụ Trách
                      </h3>
                      <div id="rosterGuidesList" class="flex flex-wrap gap-2">
                          <!-- Guides will be loaded here -->
                      </div>
                  </div>

                  <!-- Main Content: Table + Seat Map -->
                  <div class="flex flex-col xl:flex-row gap-4 items-start">

                      <!-- LEFT: Data Table -->
                      <div class="flex-1 min-w-0 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none print:rounded-none">
                          <div class="overflow-x-auto print:overflow-visible">
                              <table class="w-full text-left border-collapse" id="rosterTable">
                                  <thead class="bg-gray-50 text-xs uppercase text-gray-500 font-semibold border-b border-gray-200 print:bg-white print:text-black print:border-b-2 print:border-gray-800">
                                      <tr id="table-header-row">
                                          <!-- Headers driven by JS config -->
                                      </tr>
                                  </thead>
                                  <tbody id="rosterList" class="divide-y divide-gray-100 text-sm print:text-[12px] print:divide-gray-300">
                                      <tr><td colspan="14" class="p-8 text-center text-gray-400">Đang tải dữ liệu...</td></tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>

                      <!-- RIGHT: Seat Map (hidden on print) -->
                      <div class="xl:sticky xl:top-4 w-full xl:w-72 flex-shrink-0 print:hidden">
                          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
                              <!-- Header -->
                              <div class="flex items-center justify-between mb-1">
                                  <h3 class="font-black text-gray-800 text-sm flex items-center gap-2">
                                      <span class="text-xl">🚌</span> Sơ Đồ Xe
                                  </h3>
                                  <span id="seat-map-count" class="text-xs bg-orange-50 text-csr-orange border border-orange-100 px-2 py-0.5 rounded-full font-bold">0/15</span>
                              </div>
                              <div id="vehicle-label" class="text-[10px] text-gray-500 font-bold mb-3 text-center">🚐 Solati 16 chỗ</div>
                              <!-- Bus Direction -->
                              <div class="text-[10px] text-gray-400 text-center mb-2 uppercase tracking-widest">← Đầu Xe</div>
                              <!-- Seat Grid -->
                              <div id="seatMapGrid" class="space-y-1">
                                  <!-- Generated by JS -->
                              </div>
                              <div class="text-[10px] text-gray-400 text-center mt-2 uppercase tracking-widest">Đuôi Xe →</div>
                              <!-- Legend -->
                              <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-4 text-[11px] text-gray-500">
                                  <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-gray-200 inline-block"></span> Trống</span>
                                  <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-csr-orange inline-block"></span> Đã xếp</span>
                                  <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-gray-700 inline-block"></span> Lái xe</span>
                              </div>
                          </div>
                      </div>

                  </div>

               </div>
          </main>
        </div>
      </div>

      <!-- Seat Assignment Modal -->
      <div id="seatModal" class="fixed inset-0 bg-black/60 z-[100] hidden items-center justify-center p-4" style="display:none">
          <div id="seatModalContent" class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
              <div class="bg-csr-orange px-5 py-4 flex items-center justify-between">
                  <h3 class="font-black text-white text-base" id="seatModalTitle">Ghế #1</h3>
                  <button id="seatModalClose" class="text-white/80 hover:text-white">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
              </div>
              <div class="p-4 max-h-80 overflow-y-auto" id="seatModalBody">
                  <!-- List of passengers -->
              </div>
          </div>
      </div>

      <style>
          .col-hidden { display: none !important; }
          .nowrap { white-space: nowrap; }
          .seat-btn { transition: all 0.15s ease; cursor: pointer; }
          .seat-btn:hover:not(.seat-driver) { transform: scale(1.05); box-shadow: 0 0 0 2px #E85D04; }
          .seat-empty { background: #f3f4f6; border: 2px dashed #d1d5db; color: #9ca3af; }
          .seat-assigned { background: #E85D04; border: 2px solid #c44c03; color: white; }
          .seat-driver { background: #1f2937; border: 2px solid #111827; color: #6b7280; cursor: default !important; }
          .seat-highlighted { box-shadow: 0 0 0 3px #E85D04, 0 0 0 5px rgba(232,93,4,0.3) !important; }
          .row-highlighted td { background-color: #fff7ed !important; }
          @media print {
              @page { size: landscape; margin: 0; }
              body { font-family: 'Times New Roman', serif; background: white; margin: 1.5cm; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ccc; padding: 6px 8px !important; color: black !important; }
              th { background-color: #f3f4f6 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
      </style>

      <!-- Edit Booking Modal (Full Detail Edit) -->
      <div id="editModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-gray-50 border border-gray-200 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300 transform relative" id="editModalContent">
              
              <!-- Sticky Header -->
              <div class="sticky top-0 bg-gray-50/95 backdrop-blur z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center rounded-t-2xl">
                  <div>
                      <h2 class="text-xl font-bold text-gray-900">✏️ Chỉnh Sửa Phiếu Đăng Ký</h2>
                      <p class="text-xs text-gray-400 mt-0.5">Cập nhật thông tin chi tiết của khách hàng trong đoàn</p>
                  </div>
                  <button onclick="window.closeEditModal()" class="text-gray-400 hover:text-gray-700 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors border border-gray-200">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              
              <div class="p-6">
                  <form id="editForm" class="space-y-4">
                      <input type="hidden" id="edit-id">

                      <!-- SECTION 1: Thông tin Tour & Trạng thái -->
                      <div class="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-4">
                          <div class="flex items-center gap-2.5 mb-4">
                              <div class="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-sm">🗺️</div>
                              <h3 class="font-bold text-gray-800 text-sm uppercase tracking-wider">Thông tin Tour & Trạng thái</h3>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div class="md:col-span-1">
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tuyến Tour</label>
                                  <select id="edit-tour" class="input-field bg-white font-medium">
                                      <option value="">-- Chọn Tour --</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày Khởi Hành</label>
                                  <select id="edit-date" class="input-field bg-white font-mono">
                                      <option value="">-- Chọn Lịch --</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Trạng Thái Đơn</label>
                                  <select id="edit-status" class="input-field bg-white text-sm font-bold">
                                      <option value="Chờ tư vấn">⏳ Chờ lịch</option>
                                      <option value="Chờ cọc">🔔 Chờ cọc</option>
                                      <option value="Chờ xác nhận cọc">💳 Chờ xác nhận cọc</option>
                                      <option value="Đã cọc">✅ Đã cọc</option>
                                      <option value="Đã cọc (Chờ đi)">🎒 Đã cọc (Chờ đi)</option>
                                      <option value="Hoàn thành">🏆 Hoàn thành</option>
                                      <option value="Bảo lưu">⏸️ Bảo lưu</option>
                                      <option value="Đã hủy">❌ Đã hủy</option>
                                  </select>
                              </div>
                              <div id="edit-sale-container" class="hidden">
                                  <label class="block text-xs font-bold text-blue-600 uppercase mb-1.5">👤 Người Phụ Trách</label>
                                  <select id="edit-sale" class="input-field bg-blue-50 text-sm font-bold text-blue-700 border-blue-200">
                                      <option value="">-- Website --</option>
                                  </select>
                              </div>
                              <div class="md:col-span-2">
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tên In Huy Chương</label>
                                  <input type="text" id="edit-medal-name" class="input-field bg-white font-bold text-csr-orange" placeholder="Để trống = dùng Họ Tên">
                              </div>
                          </div>
                      </div>

                      <!-- SECTION 2: Thông tin Cá nhân -->
                      <div class="bg-white border border-gray-200 rounded-2xl p-4">
                          <div class="flex items-center gap-2.5 mb-4">
                              <div class="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm">👤</div>
                              <h3 class="font-bold text-gray-800 text-sm uppercase tracking-wider">Thông tin Cá nhân</h3>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Họ và Tên *</label>
                                  <input type="text" id="edit-name" class="input-field bg-gray-50 font-bold" required>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Số Điện Thoại *</label>
                                  <input type="tel" id="edit-phone" class="input-field bg-gray-50 font-medium" required>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày Sinh</label>
                                  <input type="date" id="edit-dob" class="input-field bg-gray-50 text-sm">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Giới Tính</label>
                                  <select id="edit-gender" class="input-field bg-gray-50 text-sm">
                                      <option value="Khác">Khác</option>
                                      <option value="Nam">Nam</option>
                                      <option value="Nữ">Nữ</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">CCCD / Passport</label>
                                  <input type="text" id="edit-id-card" class="input-field bg-gray-50 font-mono text-sm" placeholder="Số định danh">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Địa Chỉ</label>
                                  <input type="text" id="edit-address" class="input-field bg-gray-50 text-sm" placeholder="Tỉnh/Thành, Quận/Huyện">
                              </div>
                              <div class="md:col-span-2 flex items-center gap-2 pt-1">
                                  <input type="checkbox" id="edit-commitments" class="w-4 h-4 text-csr-orange border-gray-300 rounded focus:ring-csr-orange">
                                  <label for="edit-commitments" class="text-xs font-bold text-gray-600 uppercase">Khách đã đồng ý Cam kết sức khỏe & Nội quy</label>
                              </div>
                          </div>
                      </div>

                      <!-- SECTION 3: Hậu cần -->
                      <div class="bg-white border border-gray-200 rounded-2xl p-4">
                          <div class="flex items-center gap-2.5 mb-4">
                              <div class="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 text-sm">🎒</div>
                              <h3 class="font-bold text-gray-800 text-sm uppercase tracking-wider">Thông tin Hậu cần</h3>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div class="md:col-span-1">
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Điểm Đón</label>
                                  <select id="edit-pickup-point" class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-csr-orange focus:ring-1 focus:ring-csr-orange outline-none transition-colors">
                                      <option value="">— Chưa chọn —</option>
                                  </select>
                                  <input type="text" id="edit-pickup-custom" class="w-full mt-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg text-sm focus:border-csr-orange focus:ring-1 focus:ring-csr-orange outline-none transition-colors hidden" placeholder="Nhập điểm đón tuỳ chỉnh...">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Mượn Gậy</label>
                                  <select id="edit-trekking-pole" class="input-field bg-gray-50 text-sm">
                                      <option value="Không">Không mượn</option>
                                      <option value="Có">✅ Có mượn gậy</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Chế Độ Ăn</label>
                                  <input type="text" id="edit-diet" class="input-field bg-gray-50 text-sm" placeholder="VD: Ăn chay, không hành...">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-red-400 uppercase mb-1.5">Dị Ứng / Y Tế</label>
                                  <input type="text" id="edit-allergy" class="input-field bg-red-50/30 border-red-100 text-sm" placeholder="VD: Không có">
                              </div>
                              <div class="md:col-span-2">
                                  <label class="block text-xs font-bold text-blue-500 uppercase mb-1.5">💬 Ghi Chú Sale / Yêu Cầu Riêng</label>
                                  <input type="text" id="edit-special" class="input-field bg-blue-50/30 text-sm text-blue-700 font-medium" placeholder="Lưu ý đón khách, yêu cầu đặc biệt...">
                              </div>
                          </div>
                      </div>

                      <!-- SECTION 4: Dịch vụ bổ sung -->
                      <div class="bg-white border border-gray-200 rounded-2xl p-4">
                          <div class="flex items-center justify-between mb-4">
                              <div class="flex items-center gap-2.5">
                                  <div class="w-7 h-7 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 text-sm">✨</div>
                                  <h3 class="font-bold text-gray-800 text-sm uppercase tracking-wider">Dịch Vụ Bổ Sung</h3>
                              </div>
                          </div>

                          <!-- Preset services từ thiết lập tour -->
                          <div id="presetServicesBlock" class="hidden mb-4">
                              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">📋 Dịch vụ cài sẵn của tour — chọn để thêm vào đơn</p>
                              <div id="presetServicesList" class="grid grid-cols-1 gap-2"></div>
                          </div>

                          <!-- Đường phân cách -->
                          <div id="servicesDivider" class="hidden border-t border-dashed border-gray-200 my-3"></div>

                          <!-- Custom / Thủ công -->
                          <div class="flex justify-between items-center mb-2">
                              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">🖊️ Dịch vụ khác (nhập tay)</p>
                              <button type="button" id="addServiceBtn" class="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 rounded-lg text-xs font-bold transition-colors">
                                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
                                  Thêm thủ công
                              </button>
                          </div>
                          <div id="servicesContainer" class="space-y-2">
                              <p id="emptyServicesMsg" class="text-sm text-gray-400 italic text-center py-2">Không có dịch vụ bổ sung nào được nhập tay.</p>
                          </div>

                          <!-- Tổng phí -->
                          <div id="servicesTotalRow" class="hidden mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                              <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Tổng phí dịch vụ bổ sung</span>
                              <span id="servicesTotalDisplay" class="text-sm font-black text-green-600">0đ</span>
                          </div>
                      </div>

                      <!-- SECTION 5: Tài chính -->
                      <div class="bg-white border border-gray-200 rounded-2xl p-4">
                          <div class="flex items-center gap-2.5 mb-4">
                              <div class="w-7 h-7 rounded-lg bg-orange-50 text-csr-orange flex items-center justify-center flex-shrink-0 text-sm">💰</div>
                              <h3 class="font-bold text-gray-800 text-sm uppercase tracking-wider">Tài chính & Thanh toán</h3>
                          </div>
                          <div class="bg-gray-50 rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                  <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5">Giá Tour (Gốc)</label>
                                  <input type="number" id="edit-total" class="input-field bg-white font-bold text-gray-900" oninput="window.updateEditRemaining()">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-red-500 uppercase mb-1.5">Giảm Giá</label>
                                  <input type="number" id="edit-discount" class="input-field bg-red-50 text-red-600 font-bold" oninput="window.updateEditRemaining()">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-green-600 uppercase mb-1.5">Khách Đã Cọc</label>
                                  <input type="number" id="edit-deposit" class="input-field bg-green-50 border-green-200 font-bold text-green-700" oninput="window.updateEditRemaining()">
                              </div>
                          </div>
                          <div class="mb-4">
                              <label class="block text-xs font-bold text-csr-orange uppercase mb-1.5">Số Tiền Cọc Cần Thu</label>
                              <input type="number" id="edit-deposit-required" class="input-field bg-orange-50/50 border-orange-100 font-bold text-csr-orange" placeholder="1000000">
                          </div>
                          <div class="bg-gradient-to-r from-red-500 to-rose-600 p-4 rounded-xl flex justify-between items-center text-white">
                              <span class="text-sm font-bold uppercase flex items-center gap-2">
                                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                 Còn Lại Cần Phải Thu
                              </span>
                              <span id="edit-remaining" class="text-2xl font-black drop-shadow">0đ</span>
                          </div>
                      </div>

                      <!-- Action Buttons -->
                      <div class="flex gap-3 pt-2">
                          <button type="button" onclick="window.closeEditModal()" class="flex-1 px-4 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm text-sm">Hủy bỏ</button>
                          <button type="submit" class="flex-[2] px-4 py-4 bg-csr-orange text-white rounded-xl font-bold hover:bg-[#d65503] transition-all shadow-lg shadow-csr-orange/30 text-sm flex items-center justify-center gap-2">
                              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                              Lưu Cập Nhật
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    `;
};

export const afterRender = async () => {
    console.log("[Roster] VERSION 3.2 LOADED - READY TO EDIT");
    // 1. Column Definition
    const renderStatus = (status) => {
        const s = (status || '').toLowerCase();
        if (s.includes('hoàn tất') || s.includes('hoàn thành') || s.includes('đã thanh toán') || s.includes('thanh toán')) {
            return `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                        Đã Thanh Toán</span>`;
        }
        if (s.includes('đã cọc') || s.includes('da coc')) {
            return `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2H6z"/></svg>
                        Đã Cọc</span>`;
        }
        if (s.includes('hủy') || s.includes('cancelled')) {
            return `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600 border border-red-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        Đã Hủy</span>`;
        }
        if (s.includes('bảo lưu')) {
            return `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-500 border border-gray-300">
                        ⏸️ Bảo lưu</span>`;
        }
        return `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">${status || 'Chờ cọc'}</span>`;
    };

    const renderExtraServices = (b) => {
        let items = [];

        const raw = b.services_booked;

        if (raw && raw !== '[]' && raw !== 'null' && raw !== '') {

            // Case 1: DB (Cloudflare JSONB) trả về array trực tiếp, không cần parse
            if (Array.isArray(raw)) {
                items = raw.map(sv => {
                    const label = sv.label || sv.name || sv.title || '';
                    const price = sv.price && Number(sv.price) > 0
                        ? ` (+${Number(sv.price).toLocaleString('vi-VN')}đ)` : '';
                    return (label + price).trim();
                }).filter(Boolean);
            }
            // Case 2 & 3: Dạng string (JSON hoặc JS literal)
            else if (typeof raw === 'string' && raw.trim().startsWith('[')) {
                try {
                    // Case 2: Valid JSON string
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        items = parsed.map(sv => {
                            const label = sv.label || sv.name || sv.title || '';
                            const price = sv.price && Number(sv.price) > 0
                                ? ` (+${Number(sv.price).toLocaleString('vi-VN')}đ)` : '';
                            return (label + price).trim();
                        }).filter(Boolean);
                    }
                } catch(e) {
                    // Case 3: JS object literal → dùng regex extract
                    const labelMatches = raw.match(/label:\s*['"]([^'"]+)['"]/g) || [];
                    const priceMatches = raw.match(/price:\s*(\d+)/g) || [];
                    if (labelMatches.length > 0) {
                        items = labelMatches.map((m, i) => {
                            const label = m.replace(/label:\s*['"]/, '').replace(/['"]$/, '').trim();
                            const priceStr = priceMatches[i] || '';
                            const price = priceStr ? Number(priceStr.replace(/price:\s*/, '')) : 0;
                            return (label + (price > 0 ? ` (+${price.toLocaleString('vi-VN')}đ)` : '')).trim();
                        }).filter(Boolean);
                    }
                }
            }
        }

        // Fallback: các field cũ (plain text)
        if (items.length === 0) {
            const oldRaw = b.extra_services || b.extraServices || b.extra || b.notes_extra || '';
            if (oldRaw && oldRaw !== '-' && oldRaw.trim() !== '') {
                items = oldRaw.split(/[\n,;]+/).map(s => s.trim()).filter(Boolean);
            }
        }

        if (items.length === 0) {
            return `<span class="text-gray-300 text-xs italic">Không có</span>`;
        }

        const palette = [
            'bg-violet-100 text-violet-700 border-violet-200',
            'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200',
            'bg-sky-100 text-sky-700 border-sky-200',
            'bg-teal-100 text-teal-700 border-teal-200',
            'bg-orange-100 text-orange-700 border-orange-200',
            'bg-rose-100 text-rose-700 border-rose-200',
        ];
        return `<div class="flex flex-wrap gap-1.5">${items.map((item, i) => {
            const cls = palette[i % palette.length];
            return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${cls}">
                        <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                        ${item}</span>`;
        }).join('')}</div>`;
    };

    // Helper: Check birthday in current month
    const isBirthdayMonth = (dob) => {
        if (!dob) return false;
        const m = new Date().getMonth() + 1;
        const parts = dob.split('-');
        if (parts.length === 3) return parseInt(parts[1]) === m;
        return false;
    };

    const COLUMNS = [
        { id: 'col-stt', label: 'STT', always: true, render: (b, index) => `<span class="text-gray-400 font-mono text-xs">${index + 1}</span>` },
        {
            id: 'col-name', label: 'Họ và Tên', default: true,
            render: (b) => {
                const bday = isBirthdayMonth(b.dob) ? ' <span title="Sinh nhật tháng này!" class="text-pink-500">🎂</span>' : '';
                return `<div class="font-bold text-gray-900 text-sm">${b.name || '-'}${bday}</div>`;
            }
        },
        {
            id: 'col-dob', label: 'Ngày Sinh', default: true,
            render: (b) => {
                if (!b.dob) return '<span class="text-gray-300">—</span>';
                const parts = b.dob.split('-');
                const formatted = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : b.dob;
                const bday = isBirthdayMonth(b.dob) ? ' 🎂' : '';
                return `<span class="text-gray-700 text-sm tabular-nums">${formatted}${bday}</span>`;
            }
        },
        { id: 'col-gender', label: 'Giới Tính', default: true, render: (b) => {
            const g = b.gender || '';
            if (g === 'Nam') return '<span class="text-blue-600 font-bold text-xs">👨 Nam</span>';
            if (g === 'Nữ') return '<span class="text-pink-600 font-bold text-xs">👩 Nữ</span>';
            return '<span class="text-gray-400 text-xs">—</span>';
        }},
        {
            id: 'col-phone', label: 'Số Điện Thoại', default: true,
            render: (b) => `<a href="tel:${b.phone || ''}" class="font-medium text-blue-600 hover:text-blue-800 hover:underline tabular-nums text-sm">${b.phone || '—'}</a>`
        },
        {
            id: 'col-pickup', label: 'Điểm Đón', default: true,
            render: (b) => b.pickup_point ? `<span class="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-medium">${b.pickup_point}</span>` : '<span class="text-gray-300 text-xs">—</span>'
        },
        {
            id: 'col-seat', label: '💺 Ghế', default: true,
            render: (b) => {
                const seat = b.seat_number || '';
                return `<div class="flex items-center gap-1">
                    ${seat ? `<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-csr-orange text-white font-black text-sm seat-badge" data-id="${b.id}">${seat}</span>` : `<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 text-xs seat-badge cursor-pointer hover:border-csr-orange hover:text-csr-orange transition-colors" data-id="${b.id}">+</span>`}
                </div>`;
            }
        },
        {
            id: 'col-note', label: 'Ghi Chú', default: true,
            render: (b) => b.special ? `<span class="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">${b.special}</span>` : '<span class="text-gray-300 text-xs">—</span>'
        },
        {
            id: 'col-status', label: 'Trạng Thái', default: true,
            render: (b) => renderStatus(b.status)
        },
        // --- Ẩn mặc định, tick để hiện ---
        {
            id: 'col-order-id', label: 'Mã Đơn', default: false,
            render: (b) => `<span class="font-mono text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">#${b.id || '—'}</span>`
        },
        { id: 'col-extra', label: 'Dịch Vụ Phát Sinh', default: false, render: (b) => renderExtraServices(b) },
        { id: 'col-sale', label: 'Sale Phụ Trách', default: false, render: (b) => `<div class="font-bold text-indigo-700 text-sm whitespace-nowrap">${b.sale_name && b.sale_name !== 'null' && b.sale_name !== 'Website' ? b.sale_name : '<span class="text-gray-400 font-normal">Website</span>'}</div>` },
        { id: 'col-cccd', label: 'CCCD / Passport', default: false, render: (b) => b.id_card || b.cccd || '-' },
        { id: 'col-address', label: 'Địa Chỉ', default: false, render: (b) => `<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${b.address || ''}">${b.address || '-'}</div>` },
        { id: 'col-diet', label: 'Ăn Chay', default: false, render: (b) => (b.diet === 'Ăn chay' || b.diet === 'Chay' || b.diet === 'Có') ? '<span class="text-green-600 font-bold">Có</span>' : 'Không' },
        { id: 'col-pole', label: 'Gậy Trekking', default: false, render: (b) => (b.trekking_pole === 'Có') ? '<span class="text-orange-600 font-bold">Có</span>' : 'Không' },
        { id: 'col-allergy', label: 'Dị Ứng / Bệnh', default: false, render: (b) => b.medical_notes || b.allergy || '-' },
        { id: 'col-medal', label: 'Tên Huy Chương', default: false, render: (b) => b.medal_name || b.name || '-' },
    ];


    const params = new URLSearchParams(window.location.search);
    const targetTour = params.get('tour') || '';
    const targetDateStr = params.get('date') || ''; // Ex: 2025-03-01
    const targetScheduleId = params.get('scheduleId') || '';
    const hasGroupLabel = !!params.get('groupLabel');
    const vehicleType = params.get('vehicleType') || 'solati_16';
    let targetDateFormated = targetDateStr;

    // Convert to DD/MM/YYYY for title and robust comparison
    const normalizeDate = (d) => {
        if (!d) return '';
        const parts = d.split(/[-/.]/); // Support dots too
        if (parts.length !== 3) return d;
        let day, month, year;
        if (parts[0].length === 4) { // YYYY-MM-DD
            [year, month, day] = parts;
        } else { // DD/MM/YYYY
            [day, month, year] = parts;
        }
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };

    const normalizeText = (text) => {
        return (text || '').toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
            .replace(/[-_]/g, ' ') // Replace dashes with spaces
            .replace(/\s+/g, ' ') // Collapse spaces
            .trim();
    };

    if (targetDateStr) {
        targetDateFormated = normalizeDate(targetDateStr);
    }

    // UI Elements
    const titleEl = document.getElementById('roster-title');
    const subtitleEl = document.getElementById('roster-subtitle');
    const pTourEl = document.getElementById('print-tour-name');
    const pDateEl = document.getElementById('print-tour-date');
    const pTotalEl = document.getElementById('print-total');

    const filterStatus = document.getElementById('filterStatus');
    const filterGender = document.getElementById('filterGender');
    const tbody = document.getElementById('rosterList');

    let allBookings = [];
    let visibleCols = new Set(COLUMNS.filter(c => c.default || c.always).map(c => c.id));

    // Update Titles
    if (targetTour) {
        titleEl.textContent = targetTour;
        pTourEl.textContent = targetTour;
    }
    if (targetDateFormated) {
        subtitleEl.innerHTML = `Ngày khởi hành: <span class="font-bold text-csr-orange">${targetDateFormated}</span>`;
        pDateEl.textContent = targetDateFormated;
    }

    // --- 2. Build Toggles & Header ---
    const buildColumnToggles = () => {
        const container = document.getElementById('column-toggles');
        // Chỉ hiện toggle cho các cột không phải always và không phải default (default luôn hiện sẵn)
        container.innerHTML = COLUMNS.filter(c => !c.always && !c.default).map(c => `
            <label class="flex items-center gap-2 cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-csr-orange/50 transition-colors">
                <input type="checkbox" value="${c.id}" class="col-toggle-cb text-csr-orange focus:ring-csr-orange rounded" ${visibleCols.has(c.id) ? 'checked' : ''}>
                <span class="text-sm font-medium text-gray-600 group-hover:text-gray-900 select-none">${c.label}</span>
            </label>
        `).join('');

        // Attach events
        document.querySelectorAll('.col-toggle-cb').forEach(cb => {
            cb.addEventListener('change', (e) => {
                if (e.target.checked) visibleCols.add(e.target.value);
                else visibleCols.delete(e.target.value);

                // Toggle classes on table columns
                toggleTableColumns();
            });
        });
    };

    const buildTableHeader = () => {
        const tr = document.getElementById('table-header-row');
        tr.innerHTML = COLUMNS.map(c => `
            <th class="p-4 whitespace-nowrap ${c.id}" data-col="${c.id}">${c.label}</th>
        `).join('');
    };

    const toggleTableColumns = () => {
        COLUMNS.forEach(c => {
            const isVisible = visibleCols.has(c.id);
            // Toggle header
            const th = document.querySelector(`th[data-col="${c.id}"]`);
            if (th) {
                if (isVisible) th.classList.remove('col-hidden');
                else th.classList.add('col-hidden');
            }
            // Toggle cells
            document.querySelectorAll(`td[data-col="${c.id}"]`).forEach(td => {
                if (isVisible) td.classList.remove('col-hidden');
                else td.classList.add('col-hidden');
            });
        });
    };

    // --- 3. Data Fetching & Rendering ---
    // Robust date parser: handles "5/4 - 5/4", "05/04/2026", "2026-04-05", "5/4", etc.
    const extractDayMonth = (d) => {
        if (!d) return null;
        // Nếu là range "D/M - D/M" hoặc "DD/MM - DD/MM", lấy phần đầu
        if (d.includes(' - ')) d = d.split(' - ')[0].trim();
        // Strip ISO timestamp
        if (d.includes('T')) d = d.split('T')[0];
        const parts = d.split(/[-/.]/);
        if (parts.length === 2) {
            // Format "D/M" — không có năm
            return { day: parseInt(parts[0]), month: parseInt(parts[1]), year: null };
        }
        if (parts.length === 3) {
            if (parts[0].length === 4) {
                // YYYY-MM-DD
                return { day: parseInt(parts[2]), month: parseInt(parts[1]), year: parseInt(parts[0]) };
            } else {
                // DD/MM/YYYY
                return { day: parseInt(parts[0]), month: parseInt(parts[1]), year: parseInt(parts[2]) };
            }
        }
        return null;
    };

    // Parse targetDate (luôn có năm, format YYYY-MM-DD từ Schedules)
    const targetParsed = extractDayMonth(targetDateStr);

    const dateMatches = (bookingDate) => {
        if (!targetParsed) return true; // Không filter nếu target không hợp lệ
        const bp = extractDayMonth(bookingDate);
        if (!bp) return false;
        // So sánh ngày + tháng
        if (bp.day !== targetParsed.day || bp.month !== targetParsed.month) return false;
        // Nếu booking có năm, so sánh năm; nếu không có năm thì chấp nhận (match D/M)
        if (bp.year && targetParsed.year && bp.year !== targetParsed.year) return false;
        return true;
    };

    const loadData = async () => {
        try {
            // Load Guides if scheduleId is present
            if (targetScheduleId) {
                try {
                    const guidesRes = await fetch(`/api/guides?schedule_id=${targetScheduleId}`);
                    const guides = await guidesRes.json();
                    if (guides && guides.length > 0) {
                        const guidesSection = document.getElementById('rosterGuidesSection');
                        const guidesList = document.getElementById('rosterGuidesList');
                        
                        const ROLE_COLORS = {
                            'Hướng Dẫn Viên': 'bg-blue-100 text-blue-700 border-blue-200',
                            'Leader': 'bg-purple-100 text-purple-700 border-purple-200',
                            'Photo': 'bg-pink-100 text-pink-700 border-pink-200',
                            'Guider': 'bg-cyan-100 text-cyan-700 border-cyan-200',
                            'Hậu Cần': 'bg-amber-100 text-amber-700 border-amber-200',
                            'Học Việc': 'bg-gray-100 text-gray-600 border-gray-200',
                        };

                        guidesSection.classList.remove('hidden');
                        guidesList.innerHTML = guides.map(g => {
                            const badgeColor = ROLE_COLORS[g.role] || 'bg-gray-100 text-gray-600 border-gray-200';
                            return `
                                <div class="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-sm print:shadow-none print:border-gray-400">
                                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeColor} uppercase tracking-wide print:border-black print:text-black">${g.role}</span>
                                    <span class="font-bold text-gray-900 text-sm print:text-black">${g.full_name}</span>
                                    ${g.phone ? `<a href="tel:${g.phone}" class="text-xs text-gray-500 hover:text-indigo-600 font-medium ml-1 print:text-black print:no-underline">(${g.phone})</a>` : ''}
                                </div>
                            `;
                        }).join('');
                    }
                } catch (err) {
                    console.error('Error loading guides:', err);
                }
            }

            const res = await fetch('/api/bookings');
            const data = await res.json();

            // Debug log
            console.log('[Roster] targetTour:', targetTour, 'targetDateStr:', targetDateStr, 'targetParsed:', targetParsed);
            console.log('[Roster] Total bookings:', data.length);
            if (data.length > 0) {
                const samples = data.filter(b => b.tour && b.tour.includes('Liêng')).slice(0, 3);
                samples.forEach(s => console.log('[Roster] Sample Liêng:', { tour: s.tour, date: s.date, parsed: extractDayMonth(s.date) }));
            }

            // Lọc theo Tour và Ngày (so sánh linh hoạt: range, no-year, chuẩn)
            allBookings = data.filter(b => {
                // Priority: Nếu đã request ID lịch trình (từ nút Xem Danh Sách Đoàn ở Lịch trình)
                if (targetScheduleId) {
                    // Ưu tiên 1: booking được gán trực tiếp
                    if (String(b.schedule_id) === String(targetScheduleId)) return true;
                    // Fallback: Nếu lịch trình NÀY KIỂU DOANH NGHIỆP CŨ (không có label ĐỘI A, ĐỘI B...)
                    if (!hasGroupLabel && !b.schedule_id) {
                        // Tiếp tục rơi xuống logic check Tên & Ngày
                    } else {
                        return false;
                    }
                }

                // Fallback / legacy matching for general URLs (without scheduleId or for older group-less schedules):
                let mTour = true, mDate = true;
                if (targetTour) {
                    const normB = normalizeText(b.tour);
                    const normT = normalizeText(targetTour);
                    mTour = (normB === normT || normB.includes(normT) || normT.includes(normB));
                }
                if (targetDateStr) {
                    mDate = dateMatches(b.date);
                }
                return mTour && mDate;
            });

            console.log('[Roster] Matched bookings:', allBookings.length);

            // Sắp xếp: Luôn ưu tiên những người ĐĂNG KÝ ĐẦU TIÊN hiện lên TRÊN ĐẦU (Sắp xếp theo ID tăng dần)
            // Apply sorting (Now respects the filterSort select)
            const sortOrder = document.getElementById('filterSort')?.value || 'newest';
            if (sortOrder === 'newest') {
                allBookings.sort((a, b) => parseInt(b.id) - parseInt(a.id));
            } else {
                allBookings.sort((a, b) => parseInt(a.id) - parseInt(b.id));
            }

            console.log(`[Roster] Sorted bookings (${sortOrder}):`, allBookings.map(b => b.id));

            renderTable();

        } catch (err) {
            console.error('Lỗi khi tải dữ liệu đoàn:', err);
            tbody.innerHTML = '<tr><td colspan="12" class="p-8 text-center text-red-500 font-bold">Lỗi khi tải dữ liệu. Vui lòng tải lại trang.</td></tr>';
        }
    };

    const renderTable = () => {
        const sStatus = filterStatus.value.toLowerCase();
        const sGender = filterGender.value.toLowerCase();
        const sSearch = document.getElementById('filterSearch')?.value?.toLowerCase() || '';

        const filtered = allBookings.filter(b => {
            // 1. Search term (Name, Phone, ID, Address, CRM ID)
            if (sSearch) {
                const searchStr = `${b.name} ${b.phone} ${b.address} ${b.medal_name} ${b.customer_id}`.toLowerCase();
                if (!searchStr.includes(sSearch)) return false;
            }

            // 2. Status filter
            const bStatus = (b.status || '').toLowerCase();
            const statusMatch = sStatus === '' ||
                (sStatus === 'chờ cọc' && (bStatus.includes('chờ cọc') || bStatus.includes('chờ xác nhận'))) ||
                (sStatus === 'đã cọc' && (bStatus.includes('đã cọc') || bStatus.includes('hoàn tất') || bStatus.includes('hoàn thành'))) ||
                (sStatus === 'đã hủy' && bStatus.includes('hủy'));

            if (!statusMatch) return false;

            // 3. Gender filter
            const bGender = (b.gender || '').toLowerCase();
            return sGender === '' || bGender === sGender;
        });

        const activeFiltered = filtered.filter(b => b.status !== 'Đã hủy' && b.status !== 'Bảo lưu');
        document.getElementById('text-visible-count').textContent = activeFiltered.length;
        pTotalEl.textContent = activeFiltered.length;

        if (filtered.length === 0) {
            tbody.innerHTML = '<tr><td colspan="12" class="p-12 text-center text-gray-500 bg-gray-50">Không tìm thấy khách hàng nào khớp với điều kiện lọc.</td></tr>';
            return;
        }

        tbody.innerHTML = filtered.map((b, index) => {
            const isEven = index % 2 === 0;
            const isCanceledOrHeld = (b.status === 'Đã hủy' || b.status === 'Bảo lưu');
            const rowClass = isCanceledOrHeld ? 'bg-gray-100 opacity-60' : (isEven ? 'bg-white' : 'bg-gray-50/40');
            return `<tr onclick="if(!event.target.closest('.seat-badge') && !event.target.closest('a')) { if(window.actionEdit) window.actionEdit('${b.id}'); else alert('Chưa tải xong logic chỉnh sửa!'); }" class="${rowClass} hover:bg-amber-50/40 transition-colors border-b border-gray-100 group row-clickable cursor-pointer" data-booking-id="${b.id}">` +
                COLUMNS.map(c => `
                    <td class="px-4 py-3 align-middle ${c.id === 'col-extra' ? 'min-w-[220px]' : ''} ${visibleCols.has(c.id) ? '' : 'col-hidden'}" data-col="${c.id}">
                        ${c.render(b, index)}
                    </td>
                `).join('') +
                '</tr>';
        }).join('');
    };

    // --- 4. Export Functions ---
    const exportExcel = () => {
        const visibleColumnsArr = COLUMNS.filter(c => visibleCols.has(c.id));

        const sStatus = filterStatus.value.toLowerCase();
        const sGender = filterGender.value.toLowerCase();
        const sSearch = document.getElementById('filterSearch')?.value?.toLowerCase() || '';

        const activeData = allBookings.filter(b => {
            // Multi-criteria filter (same logic as renderTable)
            if (sSearch) {
                const searchStr = `${b.name} ${b.phone} ${b.address} ${b.medal_name} ${b.customer_id}`.toLowerCase();
                if (!searchStr.includes(sSearch)) return false;
            }

            const bStatus = (b.status || '').toLowerCase();
            const statusMatch = sStatus === '' ||
                (sStatus === 'chờ cọc' && (bStatus.includes('chờ cọc') || bStatus.includes('chờ xác nhận'))) ||
                (sStatus === 'đã cọc' && (bStatus.includes('đã cọc') || bStatus.includes('hoàn tất') || bStatus.includes('hoàn thành'))) ||
                (sStatus === 'đã hủy' && bStatus.includes('hủy'));

            if (!statusMatch) return false;

            const bGender = (b.gender || '').toLowerCase();
            const genderMatch = sGender === '' || bGender === sGender;

            return genderMatch;
        });

        // Tạo nội dung file Excel bằng định dạng HTML table (hỗ trợ stylesheet cho Excel)
        let htmlTable = `
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head>
                <meta charset="utf-8" />
                <style>
                    table { border-collapse: collapse; width: 100%; font-family: 'Calibri', sans-serif; font-size: 11pt; }
                    th, td { border: 1px solid #000000; padding: 6px 8px; text-align: left; vertical-align: middle; }
                    th { background-color: #f2f2f2; font-weight: bold; }
                    /* Class ngăn Excel tự động format số điện thoại / cccd thành số khoa học / mất số 0 */
                    .num { mso-number-format: "\\@"; }
                </style>
            </head>
            <body>
                <table>
                    <thead>
                        <tr>
                            ${visibleColumnsArr.map(c => `<th>${c.label}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
        `;

        activeData.forEach((b, index) => {
            htmlTable += '<tr>';
            visibleColumnsArr.forEach(c => {
                let cellData = '';
                if (c.id === 'col-stt') cellData = index + 1;
                else if (c.id === 'col-name') cellData = b.name || '';
                else if (c.id === 'col-order-id') cellData = b.id || '';
                else if (c.id === 'col-address') cellData = b.address || '';
                else if (c.id === 'col-phone') cellData = b.phone ? String(b.phone) : '';
                else if (c.id === 'col-diet') cellData = (b.diet === 'Ăn chay' || b.diet === 'Chay' || b.diet === 'Có') ? 'Có' : 'Không';
                else if (c.id === 'col-pole') cellData = (b.trekking_pole === 'Có') ? 'Có' : 'Không';
                else if (c.id === 'col-status') cellData = b.status || '';
                else if (c.id === 'col-extra') {
                    const raw = b.services_booked;
                    if (raw && raw !== '[]' && raw !== 'null' && raw !== '') {
                        const extractItems = (arr) => arr.map(sv => {
                            const label = sv.label || sv.name || sv.title || '';
                            const price = sv.price && Number(sv.price) > 0 ? ` (+${Number(sv.price).toLocaleString('vi-VN')}đ)` : '';
                            return (label + price).trim();
                        }).filter(Boolean).join(', ');

                        if (Array.isArray(raw)) {
                            cellData = extractItems(raw);
                        } else if (typeof raw === 'string' && raw.trim().startsWith('[')) {
                            try {
                                cellData = extractItems(JSON.parse(raw));
                            } catch(e) {
                                const labelMatches = raw.match(/label:\s*['"]([^'"]+)['"]/g) || [];
                                const priceMatches = raw.match(/price:\s*(\d+)/g) || [];
                                if (labelMatches.length > 0) {
                                    cellData = labelMatches.map((m, i) => {
                                        const label = m.replace(/label:\s*['"]/, '').replace(/['"]$/, '').trim();
                                        const price = priceMatches[i] ? Number(priceMatches[i].replace(/price:\s*/, '')) : 0;
                                        return (label + (price > 0 ? ` (+${price.toLocaleString('vi-VN')}đ)` : '')).trim();
                                    }).filter(Boolean).join(', ');
                                }
                            }
                        }
                    }
                    if (!cellData) cellData = b.extra_services || '';
                }
                else {
                    // Loại bỏ mã HTML ra khỏi cell data
                    const rawStr = String(c.render(b, index));
                    const tmp = document.createElement("DIV");
                    tmp.innerHTML = rawStr;
                    cellData = tmp.textContent || tmp.innerText || "";
                }
                
                // Ép kiểu text cho phone hoặc cccd để Excel không làm mất số
                const isNumForce = (c.id === 'col-phone' || c.id === 'col-cccd');
                htmlTable += `<td ${isNumForce ? 'class="num"' : ''}>${cellData}</td>`;
            });
            htmlTable += '</tr>';
        });

        htmlTable += `
                    </tbody>
                </table>
            </body>
            </html>
        `;

        // Thêm ký tự BOM (Byte Order Mark) để đảm bảo các bản Excel cũ nhận chuẩn UTF-8
        const blob = new Blob(['\ufeff', htmlTable], { type: 'application/vnd.ms-excel;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const fileName = `DS_Doan_${targetTour || 'Tour'}_${targetDateFormated || 'Date'}.xls`.replace(/[/\\?%*:|"<>]/g, '-');

        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // ═══════════════════════════════════════════
    // SEAT MAP — Đa loại xe
    // ═══════════════════════════════════════════
    const VEHICLE_CONFIG = {
        solati_16: { label: '🚐 Solati 16 chỗ', totalSeats: 15 },
        limo_34:   { label: '🚌 Limousine 34 chỗ', totalSeats: 34 },
        sleeper_45:{ label: '🛏️ Giường Nằm 45 chỗ', totalSeats: 46 },
    };

    const getSeatLayout = (type) => {
        if (type === 'limo_34') {
            // Dãy A (cạnh tài xế): A1-A12 | Dãy B (giữa): B1-B10 | Dãy C (cửa lên): C1-C12
            // Layout: [C,C | B,B | A,A] mỗi hàng, layout doc xe
            return {
                type: 'limo',
                floors: [{
                    label: null,
                    rows: [
                        // [cột trái (dãy C), cột giữa (dãy B), cột phải (dãy A)]
                        [{ n:'C1' }, { n:'C2' }, null, { n:'B1' }, { n:'B2' }, null, { n:'A1' }, { n:'A2' }, { n:'LÁI', driver:true }],
                        [{ n:'C3' }, { n:'C4' }, null, { n:'B3' }, { n:'B4' }, null, { n:'A3' }, { n:'A4' }],
                        [{ n:'C5' }, { n:'C6' }, null, { n:'B5' }, { n:'B6' }, null, { n:'A5' }, { n:'A6' }],
                        [{ n:'C7' }, { n:'C8' }, null, { n:'B7' }, { n:'B8' }, null, { n:'A7' }, { n:'A8' }],
                        [{ n:'C9' }, { n:'C10' },null, { n:'B9' }, { n:'B10' },null, { n:'A9' }, { n:'A10' }],
                        [{ n:'C11'},{ n:'C12' },null, null, null,              null, { n:'A11'}, { n:'A12' }],
                    ]
                }],
                legend: [
                    '<span class="font-bold text-gray-600">Dãy C</span> (cửa lên)',
                    '<span class="font-bold text-gray-600">Dãy B</span> (giữa)',
                    '<span class="font-bold text-gray-600">Dãy A</span> (tài xế)',
                ]
            };
        }
        if (type === 'sleeper_45') {
            // Tầng dưới A1-A23, Tầng trên B1-B23
            const makeFloor = (prefix, from, to) => {
                // Giường nằm: 5 cột, 5-6 hàng, 2 ghế/cột
                // Layout theo ảnh: cột mỗi 3-4 ghế doc
                const seats = Array.from({length: to - from + 1}, (_, i) => `${prefix}${from + i}`);
                // Group thành rows: mỗi row có [left, right] pairs
                const rows = [];
                // Tầng dưới layout: 4 cột chạy doc, mỗi cột 5-6 ghế
                // A1,A4,A7,A10,A13,A16,A19 (cột 1)
                // A2,A5,A8,A11,A14,A17,A20 (cột 2)
                // A3,A6,A9,A12,A15,A18,A21,A22,A23 (cột 3)
                // Simplify: render theo hàng ngang, mỗi hàng 4 ghế với khoảng cách giữa
                for (let i = 0; i < seats.length; i += 4) {
                    const row = [];
                    for (let j = 0; j < 4; j++) {
                        if (j === 2) row.push(null); // đường đi
                        row.push(seats[i + j] ? { n: seats[i + j] } : null);
                    }
                    rows.push(row);
                }
                return rows;
            };
            return {
                type: 'sleeper',
                floors: [
                    { label: '🏠 Tầng Dưới', floorKey: 'down', rows: makeFloor('A', 1, 23) },
                    { label: '🏥 Tầng Trên', floorKey: 'up',   rows: makeFloor('B', 1, 23) },
                ],
                legend: null
            };
        }
        // Default: Solati 16
        return {
            type: 'solati',
            floors: [{
                label: null,
                rows: [
                        // Row 1: Lái xe (trái) + 2 ghế phải
                        [{ n: 'LÁI', driver: true }, null, { n: 1 }, { n: 2 }],
                        // Row 2–4: 2 ghế trái + 1 ghế phải
                        [{ n: 3 }, { n: 4 }, null, { n: 5 }],
                        [{ n: 6 }, { n: 7 }, null, { n: 8 }],
                        [{ n: 9 }, { n: 10 }, null, { n: 11 }],
                        // Row 5: 4 ghế cuối liền nhau
                        [{ n: 12 }, { n: 13 }, { n: 14 }, { n: 15 }],
                    ]
            }],
            legend: null
        };
    };

    const currentVehicle = VEHICLE_CONFIG[vehicleType] || VEHICLE_CONFIG['solati_16'];
    let activeFloor = 0; // tab index cho xe giường nằm

    const renderSeatMap = () => {
        const grid = document.getElementById('seatMapGrid');
        if (!grid) return;

        // Build seatMap: { seatNumber: booking }
        const seatMap = {};
        allBookings.forEach(b => {
            const isCanceledOrHeld = (b.status === 'Đã hủy' || b.status === 'Bảo lưu');
            if (b.seat_number && !isCanceledOrHeld) seatMap[String(b.seat_number)] = b;
        });

        const assignedCount = Object.keys(seatMap).length;
        const total = currentVehicle.totalSeats;
        const countEl = document.getElementById('seat-map-count');
        const badgeEl = document.getElementById('seat-count-badge');
        const vehicleLabelEl = document.getElementById('vehicle-label');
        if (countEl) countEl.textContent = `${assignedCount}/${total}`;
        if (badgeEl) badgeEl.textContent = `💺 ${assignedCount}/${total} ghế đã xếp`;
        if (vehicleLabelEl) vehicleLabelEl.textContent = currentVehicle.label;

        const layout = getSeatLayout(vehicleType);

        const renderSeatCell = (seat, seatMap) => {
            if (!seat) return `<div class="w-12 h-10 flex-shrink-0"></div>`;
            if (seat.driver) return `<div class="seat-btn seat-driver w-10 h-9 rounded-lg flex flex-col items-center justify-center text-[8px] font-bold flex-shrink-0"><span>🚗</span><span>LÁI</span></div>`;
            const sn = String(seat.n);
            const b = seatMap[sn];
            const nameAbbr = b ? (b.name || '').split(' ').pop().slice(0, 4) : '';
            const isAlpha = /[A-Z]/.test(sn); // Limousine/Sleeper dùng chữ
            const w = isAlpha ? 'w-11 h-9' : 'w-12 h-10';
            return `<button
                class="seat-btn ${b ? 'seat-assigned' : 'seat-empty'} ${w} rounded-lg flex flex-col items-center justify-center flex-shrink-0 group relative"
                data-seat="${sn}"
                data-booking-id="${b ? b.id : ''}"
                title="${b ? b.name + ' — Ghế ' + sn : 'Ghế ' + sn + ' (trống)'}">
                <span class="text-[9px] font-bold leading-none">${sn}</span>
                ${b ? `<span class="text-[8px] leading-none mt-0.5 truncate max-w-[42px] px-0.5">${nameAbbr}</span>` : ''}
            </button>`;
        };

        // Tab render cho xe giường nằm
        if (layout.type === 'sleeper') {
            grid.innerHTML = `
                <div class="flex gap-2 mb-3">
                    ${layout.floors.map((f, i) => `
                        <button class="floor-tab flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${activeFloor === i ? 'bg-csr-orange text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}" data-floor="${i}">
                            ${f.label}
                        </button>
                    `).join('')}
                </div>
                <div class="floor-content">
                    ${layout.floors.map((floor, fi) => `
                        <div class="floor-rows ${activeFloor === fi ? '' : 'hidden'}" data-floor="${fi}">
                            ${floor.rows.map(row => `
                                <div class="flex items-center justify-center gap-1 mb-1">
                                    ${row.map(seat => renderSeatCell(seat, seatMap)).join('')}
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>`;
            // Tab click
            grid.querySelectorAll('.floor-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    activeFloor = parseInt(tab.dataset.floor);
                    renderSeatMap();
                });
            });
        } else {
            // Render bình thường (solati / limo)
            let content = '';
            if (layout.legend) {
                content += `<div class="flex justify-around text-[9px] text-gray-400 mb-2 px-1">${layout.legend.map(l => `<span>${l}</span>`).join('')}</div>`;
            }
            layout.floors[0].rows.forEach(row => {
                const cells = row.map(seat => renderSeatCell(seat, seatMap)).join('');
                content += `<div class="flex items-center justify-center gap-1 mb-1">${cells}</div>`;
            });
            grid.innerHTML = content;
        }

        // Attach seat click events
        grid.querySelectorAll('.seat-btn[data-seat]').forEach(btn => {
            btn.addEventListener('click', () => openSeatModal(btn.dataset.seat, btn.dataset.bookingId));
        });
    };


    const openSeatModal = (seatNum, currentBookingId) => {
        const modal = document.getElementById('seatModal');
        const title = document.getElementById('seatModalTitle');
        const body = document.getElementById('seatModalBody');
        if (!modal || !title || !body) return;

        title.textContent = currentBookingId
            ? `Ghế ${seatNum} — ${(allBookings.find(b => String(b.id) === String(currentBookingId))?.name || '?')}`
            : `Ghế ${seatNum} — Chưa có khách`;

        const assigned = allBookings.find(b => String(b.id) === String(currentBookingId));

        let html = '';
        if (assigned) {
            html += `<div class="mb-3 p-3 bg-orange-50 border border-orange-200 rounded-xl text-sm">
                <div class="font-bold text-gray-800">${assigned.name}</div>
                <div class="text-gray-500 text-xs">${assigned.phone || ''} ${assigned.gender ? '· ' + assigned.gender : ''}</div>
                ${assigned.pickup_point ? `<div class="text-xs text-blue-600 mt-1">📍 ${assigned.pickup_point}</div>` : ''}
            </div>
            <button class="w-full py-2 text-sm font-bold text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition-colors mb-3" id="btnRemoveSeat">
                ✖ Bỏ gán ghế này
            </button>
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Chọn khách khác:</div>`;
        }

        // List unassigned passengers (+ allow re-assign)
        const unassigned = allBookings.filter(b => !b.seat_number || String(b.id) === String(currentBookingId));
        if (unassigned.length === 0) {
            html += `<p class="text-gray-400 text-sm text-center py-4">Tất cả khách đã được xếp ghế.</p>`;
        } else {
            html += unassigned.map(b => `
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-colors mb-1 btn-assign-passenger" data-booking-id="${b.id}" data-seat="${seatNum}">
                    <div class="font-bold text-gray-800 text-sm">${b.name}</div>
                    <div class="text-xs text-gray-500">${b.phone || ''} ${b.gender ? '· ' + b.gender : ''} ${b.pickup_point ? '📍 ' + b.pickup_point : ''}</div>
                </button>`).join('');
        }

        body.innerHTML = html;
        modal.style.display = 'flex';

        // Remove seat handler
        body.querySelector('#btnRemoveSeat')?.addEventListener('click', async () => {
            await saveSeat(currentBookingId, null);
            modal.style.display = 'none';
        });

        // Assign passenger handlers
        body.querySelectorAll('.btn-assign-passenger').forEach(btn => {
            btn.addEventListener('click', async () => {
                const bId = btn.dataset.bookingId;
                const sn = btn.dataset.seat;
                // Clear anyone already in that seat
                const current = allBookings.find(b => String(b.seat_number) === String(sn) && String(b.id) !== String(bId));
                if (current) await saveSeat(current.id, null);
                await saveSeat(bId, sn);
                modal.style.display = 'none';
            });
        });
    };

    const saveSeat = async (bookingId, seatNumber) => {
        try {
            await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: bookingId, seat_number: seatNumber || null })
            });
            // Update local state
            const b = allBookings.find(x => String(x.id) === String(bookingId));
            if (b) b.seat_number = seatNumber || null;
            renderTable();
            renderSeatMap();
        } catch (err) {
            console.error('Lỗi lưu ghế:', err);
            alert('Lỗi lưu số ghế. Vui lòng thử lại.');
        }
    };

    // Events
    filterStatus.addEventListener('change', renderTable);
    filterGender.addEventListener('change', renderTable);
    document.getElementById('filterSearch')?.addEventListener('input', renderTable);
    document.getElementById('filterSort')?.addEventListener('change', loadData);

    document.getElementById('btnExportPDF').addEventListener('click', () => window.print());
    document.getElementById('btnExportExcel').addEventListener('click', () => exportExcel());

    // Close modal
    document.getElementById('seatModalClose')?.addEventListener('click', () => {
        document.getElementById('seatModal').style.display = 'none';
    });
    document.getElementById('seatModal')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('seatModal')) {
            document.getElementById('seatModal').style.display = 'none';
        }
    });

    // Row hover → highlight seat on map
    document.getElementById('rosterList')?.addEventListener('mouseover', (e) => {
        const row = e.target.closest('tr[data-booking-id]');
        if (!row) return;
        document.querySelectorAll('.seat-btn').forEach(b => b.classList.remove('seat-highlighted'));
        const bid = row.dataset.bookingId;
        const booking = allBookings.find(b => String(b.id) === String(bid));
        if (booking?.seat_number) {
            const seatBtn = document.querySelector(`.seat-btn[data-seat="${booking.seat_number}"]`);
            seatBtn?.classList.add('seat-highlighted');
        }
    });

    // Seat badge click in table
    document.getElementById('rosterList')?.addEventListener('click', (e) => {
        const badge = e.target.closest('.seat-badge');
        if (!badge) return;
        const bid = badge.dataset.id;
        const b = allBookings.find(x => String(x.id) === String(bid));
        openSeatModal(b?.seat_number || '?', bid);
    });

    // Patch loadData to call renderSeatMap after loading
    const origLoadData = loadData;

    // ===== MODAL EDIT LOGIC TỪ BOOKINGS.JS =====
    let allTours = [];
    let allSchedules = [];
    let allUsers = [];

    const loadToursAndSchedules = async () => {
        try {
            const [toursRes, schedulesRes, usersRes] = await Promise.all([
                fetch('/api/tours'),
                fetch('/api/schedules'),
                fetch('/api/users')
            ]);
            allTours = toursRes.ok ? await toursRes.json() : [];
            allSchedules = schedulesRes.ok ? await schedulesRes.json() : [];
            allUsers = usersRes.ok ? await usersRes.json() : [];

            populateTourDropdown('edit-tour');
            populateSaleDropdown('edit-sale');
        } catch (err) {
            console.error('Lỗi tải tours/schedules:', err);
        }
    };

    const populateSaleDropdown = (selectId) => {
        const select = document.getElementById(selectId);
        if (!select) return;
        select.innerHTML = '<option value="">-- Website --</option>';
        allUsers.forEach(u => {
            const opt = document.createElement('option');
            opt.value = u.id;
            opt.textContent = `${u.full_name || u.fullName} (${u.role})`;
            select.appendChild(opt);
        });
    };

    const populateTourDropdown = (selectId) => {
        const select = document.getElementById(selectId);
        if (!select) return;
        const currentVal = select.value;
        const firstOption = select.options[0]?.outerHTML || '<option value="">-- Chọn Tour --</option>';
        select.innerHTML = firstOption;
        allTours.filter(t => t.is_visible !== false).forEach(t => {
            const opt = document.createElement('option');
            opt.value = t.name;
            opt.textContent = t.name;
            if (t.name === currentVal) opt.selected = true;
            select.appendChild(opt);
        });
    };

    const populateDateDropdown = (dateSelectId, tourName, currentDateVal, currentScheduleId) => {
        const dateSelect = document.getElementById(dateSelectId);
        if (!dateSelect) return;
        dateSelect.innerHTML = '<option value="">-- Chọn Lịch --</option>';
        if (!tourName) return;

        const matched = allSchedules.filter(s => {
            if (!s.tour_name) return false;
            return s.tour_name === tourName || tourName.includes(s.tour_name) || s.tour_name.includes(tourName);
        });
        if (matched.length === 0) {
            dateSelect.innerHTML = '<option value="">Chưa có lịch cho tour này</option>';
            return;
        }

        matched.sort((a, b) => new Date(a.start_date) - new Date(b.start_date)).forEach(s => {
            const booked = parseInt(s.booked_count) || 0;
            const remaining = (s.slots || 0) - booked;
            const sDate = new Date(s.start_date);
            const eDate = s.end_date ? new Date(s.end_date) : null;
            const fmtDate = (d) => `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}`;

            let label = fmtDate(sDate);
            if (eDate) label += ' - ' + fmtDate(eDate);
            if (s.group_label) label += ` · ${s.group_label}`;
            label += ` (${remaining >= 0 ? remaining : 0} chỗ trống)`;

            const opt = document.createElement('option');
            const dateStr = `${sDate.getDate().toString().padStart(2, '0')}/${(sDate.getMonth() + 1).toString().padStart(2, '0')}/${sDate.getFullYear()}`;
            opt.value = `${s.id}::${dateStr}`;
            opt.dataset.scheduleId = s.id;
            opt.dataset.date = dateStr;
            opt.textContent = label;

            if (remaining <= 0) {
                opt.disabled = true;
                opt.textContent = label.replace('chỗ trống', 'HẾT CHỖ');
            }
            // Normalize currentDateVal về DD/MM/YYYY để so sánh
            let normalizedCurrentDate = currentDateVal || '';
            if (normalizedCurrentDate.includes('-') && normalizedCurrentDate.length >= 10) {
                // ISO format: "2026-06-13" → "13/06/2026"
                const p = normalizedCurrentDate.substring(0, 10).split('-');
                if (p.length === 3) normalizedCurrentDate = `${p[2]}/${p[1]}/${p[0]}`;
            }

            if (currentScheduleId && String(s.id) === String(currentScheduleId)) {
                opt.selected = true;
            } else if (!currentScheduleId && normalizedCurrentDate && dateStr === normalizedCurrentDate) {
                opt.selected = true;
            }
            dateSelect.appendChild(opt);
        });
    };

    const editTourSelect = document.getElementById('edit-tour');
    if (editTourSelect) {
        editTourSelect.addEventListener('change', (e) => {
            populateDateDropdown('edit-date', e.target.value);
        });
    }

    window.closeEditModal = () => {
        document.getElementById('editModal').classList.remove('opacity-100');
        const mc = document.getElementById('editModalContent');
        if (mc) {
            mc.classList.remove('scale-100', 'translate-y-0');
            mc.classList.add('scale-95', 'translate-y-4');
        }
        setTimeout(() => document.getElementById('editModal').classList.add('hidden'), 300);
    };

    window.updateEditRemaining = () => {
        const total = parseInt(document.getElementById('edit-total')?.value) || 0;
        const discount = parseInt(document.getElementById('edit-discount')?.value) || 0;
        const deposit = parseInt(document.getElementById('edit-deposit')?.value) || 0;
        let svTotal = 0;
        document.querySelectorAll('.preset-service-check:checked').forEach(cb => { svTotal += parseInt(cb.dataset.price) || 0; });
        document.querySelectorAll('.service-price-input').forEach(el => { svTotal += parseInt(el.value) || 0; });
        const finalPrice = total - discount + svTotal;
        const remaining = finalPrice - deposit;
        const remainEl = document.getElementById('edit-remaining');
        if (remainEl) remainEl.textContent = remaining > 0 ? remaining.toLocaleString('vi-VN') + 'đ' : '0đ';
    };

    window.updateServicesTotal = () => {
        let total = 0;
        document.querySelectorAll('.preset-service-check:checked').forEach(cb => { total += parseInt(cb.dataset.price) || 0; });
        document.querySelectorAll('.service-price-input').forEach(el => { total += parseInt(el.value) || 0; });
        const display = document.getElementById('servicesTotalDisplay');
        if (display) display.textContent = total.toLocaleString('vi-VN') + 'đ';
        const totalRow = document.getElementById('servicesTotalRow');
        if (totalRow) totalRow.classList.toggle('hidden', total === 0);
        window.updateEditRemaining();
        return total;
    };

    window.addServiceRow = (label = '', price = 0) => {
        const container = document.getElementById('servicesContainer');
        const emptyMsg = document.getElementById('emptyServicesMsg');
        const totalRow = document.getElementById('servicesTotalRow');
        if (!container) return;
        if (emptyMsg) emptyMsg.classList.add('hidden');
        if (totalRow) totalRow.classList.remove('hidden');

        const row = document.createElement('div');
        row.className = 'service-row flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5';
        row.innerHTML = `
            <span class="text-green-500 text-sm">✨</span>
            <input type="text" class="service-label-input flex-1 text-sm bg-transparent border-none outline-none text-gray-700 font-medium placeholder:text-gray-300" placeholder="Tên dịch vụ (VD: Thuê áo mưa...)" value="${label.replace(/"/g, '&quot;')}">
            <div class="flex items-center gap-1 shrink-0">
                <span class="text-xs text-gray-400 font-medium">+</span>
                <input type="number" class="service-price-input w-24 text-sm bg-white border border-gray-200 rounded-lg px-2 py-1 text-green-600 font-bold text-right outline-none focus:border-green-400" placeholder="Giá" value="${price}" min="0">
                <span class="text-xs text-gray-400">đ</span>
            </div>
            <button type="button" class="remove-service-btn text-gray-300 hover:text-red-400 transition-colors ml-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `;
        row.querySelector('.remove-service-btn').addEventListener('click', () => {
            row.remove();
            if (container.querySelectorAll('.service-row').length === 0) {
                if (emptyMsg) emptyMsg.classList.remove('hidden');
                if (totalRow) totalRow.classList.add('hidden');
            }
            window.updateServicesTotal();
        });
        row.querySelector('.service-price-input').addEventListener('input', window.updateServicesTotal);
        container.appendChild(row);
        window.updateServicesTotal();
    };

    const addServiceBtn = document.getElementById('addServiceBtn');
    if (addServiceBtn) addServiceBtn.addEventListener('click', () => window.addServiceRow());

    window.actionEdit = async (bookingId) => {
        try {
            const booking = allBookings.find(b => b.id == bookingId);
            if (!booking) {
                alert("Không tìm thấy thông tin khách hàng!");
                return;
            }

            document.getElementById('edit-id').value = bookingId;
            document.getElementById('edit-name').value = booking.name || '';
            document.getElementById('edit-phone').value = booking.phone || '';
            document.getElementById('edit-medal-name').value = booking.medal_name || '';
            document.getElementById('edit-tour').value = booking.tour || '';
            populateDateDropdown('edit-date', booking.tour || '', booking.date || '', booking.schedule_id || null);

            const fillEditForm = (data) => {
                let dobVal = data.dob || '';
                if (dobVal && dobVal.includes('/')) {
                    const parts = dobVal.split('/');
                    if (parts.length === 3) dobVal = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
                }
                document.getElementById('edit-dob').value = dobVal;
                document.getElementById('edit-gender').value = data.gender || 'Khác';
                document.getElementById('edit-allergy').value = data.allergy || data.medical_notes || '';
                document.getElementById('edit-address').value = data.address || '';
                document.getElementById('edit-diet').value = data.diet || data.dietary || '';
                document.getElementById('edit-trekking-pole').value = data.trekking_pole || 'Không';
                document.getElementById('edit-id-card').value = data.id_card || data.cccd || '';
                // pickup_point sẽ được nạp sau khi build select từ tour config
            };

            fillEditForm(booking);
            document.getElementById('edit-status').value = booking.status || 'Chờ xác nhận cọc';
            document.getElementById('edit-commitments').checked = !!booking.commitments;
            document.getElementById('edit-special').value = booking.special || '';

            try {
                const userStr = localStorage.getItem('csr_user');
                if (userStr) {
                    const userObj = JSON.parse(userStr);
                    if (userObj.role === 'admin') {
                        const saleContainer = document.getElementById('edit-sale-container');
                        if (saleContainer) saleContainer.classList.remove('hidden');
                        const saleSelect = document.getElementById('edit-sale');
                        if (saleSelect) saleSelect.value = booking.sale_id || '';
                    }
                }
            } catch (e) {}

            const fillTotal = (parseInt(booking.total_price) || 0) + (parseInt(booking.discount) || 0);
            document.getElementById('edit-total').value = fillTotal;
            document.getElementById('edit-discount').value = booking.discount || 0;
            document.getElementById('edit-deposit').value = booking.deposit || 0;
            const bDepReq = parseInt(booking.deposit_required);
            document.getElementById('edit-deposit-required').value = !isNaN(bDepReq) ? bDepReq : 1000000;
            window.updateEditRemaining();

            const container = document.getElementById('servicesContainer');
            const emptyMsg = document.getElementById('emptyServicesMsg');
            const totalRow = document.getElementById('servicesTotalRow');
            const presetBlock = document.getElementById('presetServicesBlock');
            const presetList = document.getElementById('presetServicesList');
            const divider = document.getElementById('servicesDivider');

            let bookedServices = [];
            try {
                if (booking.services_booked) {
                    const parsed = typeof booking.services_booked === 'string' ? JSON.parse(booking.services_booked) : booking.services_booked;
                    if (Array.isArray(parsed)) bookedServices = parsed;
                }
            } catch(e) {}

            if (presetList && presetBlock) {
                presetList.innerHTML = '';
                const matchedTourData = allTours.find(t => t.name === booking.tour);
                let presetServices = [];
                try {
                    if (matchedTourData?.services) {
                        const ps = typeof matchedTourData.services === 'string' ? JSON.parse(matchedTourData.services) : matchedTourData.services;
                        if (Array.isArray(ps)) presetServices = ps;
                    }
                } catch(e) {}

                if (presetServices.length > 0) {
                    presetBlock.classList.remove('hidden');
                    if (divider) divider.classList.remove('hidden');
                    presetServices.forEach(ps => {
                        const isBooked = bookedServices.some(b => (b.label || b.name || '').toLowerCase() === (ps.label || '').toLowerCase());
                        const card = document.createElement('label');
                        card.className = 'preset-service-card flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ' + (isBooked ? 'border-green-400 bg-green-50' : 'border-gray-100 bg-gray-50');
                        card.innerHTML = `
                            <input type="checkbox" class="preset-service-check w-4 h-4 rounded accent-green-500 shrink-0" data-label="${(ps.label || '').replace(/"/g, '&quot;')}" data-price="${ps.price || 0}" ${isBooked ? 'checked' : ''}>
                            <div class="flex-1 min-w-0"><div class="font-bold text-sm text-gray-800">${ps.label || ''}</div></div>
                            <div class="text-sm font-black text-green-600 shrink-0">+${parseInt(ps.price || 0).toLocaleString('vi-VN')}đ</div>
                        `;
                        card.querySelector('.preset-service-check').addEventListener('change', (e) => {
                            card.className = 'preset-service-card flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ' + (e.target.checked ? 'border-green-400 bg-green-50' : 'border-gray-100 bg-gray-50');
                            window.updateServicesTotal();
                        });
                        presetList.appendChild(card);
                    });
                } else {
                    presetBlock.classList.add('hidden');
                    if (divider) divider.classList.add('hidden');
                }
            }

            // Nạp điểm đón từ cấu hình tour vào select
            const pickupSelect = document.getElementById('edit-pickup-point');
            if (pickupSelect) {
                const matchedTourForPickup = allTours.find(t => t.name === booking.tour);
                let pickupPoints = [];
                try {
                    if (matchedTourForPickup?.pickup_points) {
                        const pp = typeof matchedTourForPickup.pickup_points === 'string'
                            ? JSON.parse(matchedTourForPickup.pickup_points) : matchedTourForPickup.pickup_points;
                        if (Array.isArray(pp)) pickupPoints = pp;
                    }
                } catch(e) {}

                pickupSelect.innerHTML = '<option value="">— Chưa chọn —</option>';
                pickupPoints.forEach(p => {
                    const label = (p.label || p.name || p) + (p.time ? ` (${p.time})` : '');
                    const val = p.label || p.name || p;
                    const opt = document.createElement('option');
                    opt.value = val;
                    opt.textContent = label;
                    pickupSelect.appendChild(opt);
                });

                // Thêm option Khác ở cuối
                const otherOpt = document.createElement('option');
                otherOpt.value = '__custom__';
                otherOpt.textContent = '\u270f\ufe0f Khác (nhập tay)';
                pickupSelect.appendChild(otherOpt);

                const customInput = document.getElementById('edit-pickup-custom');
                const toggleCustom = (val) => {
                    if (customInput) {
                        if (val === '__custom__') {
                            customInput.classList.remove('hidden');
                            customInput.focus();
                        } else {
                            customInput.classList.add('hidden');
                            customInput.value = '';
                        }
                    }
                };

                const savedPickup = booking.pickup_point || '';
                if (savedPickup) {
                    const exists = pickupPoints.some(p => (p.label || p.name || p) === savedPickup);
                    if (!exists) {
                        pickupSelect.value = '__custom__';
                        if (customInput) {
                            customInput.value = savedPickup;
                            customInput.classList.remove('hidden');
                        }
                    } else {
                        pickupSelect.value = savedPickup;
                    }
                }

                pickupSelect.addEventListener('change', () => toggleCustom(pickupSelect.value));
            }

            if (container) {
                container.querySelectorAll('.service-row').forEach(r => r.remove());
                const matchedTourData2 = allTours.find(t => t.name === booking.tour);
                let presetLabels = new Set();
                try {
                    const ps2 = matchedTourData2?.services;
                    const arr = ps2 ? (typeof ps2 === 'string' ? JSON.parse(ps2) : ps2) : [];
                    if (Array.isArray(arr)) arr.forEach(p => presetLabels.add((p.label || '').toLowerCase()));
                } catch(e) {}

                const manualServices = bookedServices.filter(b => !presetLabels.has((b.label || b.name || '').toLowerCase()));
                if (manualServices.length > 0) {
                    if (emptyMsg) emptyMsg.classList.add('hidden');
                    if (totalRow) totalRow.classList.remove('hidden');
                    manualServices.forEach(sv => window.addServiceRow(sv.label || sv.name || '', sv.price || 0));
                } else {
                    if (emptyMsg) emptyMsg.classList.remove('hidden');
                }
                window.updateServicesTotal();
            }

            const editModal = document.getElementById('editModal');
            const editModalContent = document.getElementById('editModalContent');
            if (editModal && editModalContent) {
                editModal.classList.remove('hidden');
                setTimeout(() => {
                    editModal.classList.add('opacity-100');
                    editModalContent.classList.remove('scale-95', 'translate-y-4');
                    editModalContent.classList.add('scale-100', 'translate-y-0');
                }, 10);
            }
        } catch (err) {
            console.error("Lỗi khi mở form Edit:", err);
            alert("Lỗi khi mở form Edit: " + err.message);
        }
    };

    const editForm = document.getElementById('editForm');
    if (editForm) {
        editForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Đang lưu cập nhật...';
            btn.disabled = true;

            try {
                const bookingId = document.getElementById('edit-id').value;
                const name = document.getElementById('edit-name').value;
                const phone = document.getElementById('edit-phone').value;
                const medalName = document.getElementById('edit-medal-name').value;
                const tour = document.getElementById('edit-tour').value;
                const rawEditDate = document.getElementById('edit-date').value;
                let date = rawEditDate;
                let editScheduleId = undefined;
                if (rawEditDate && rawEditDate.includes('::')) {
                    const parts = rawEditDate.split('::');
                    editScheduleId = parseInt(parts[0]) || null;
                    date = parts[1];
                }
                const dob = document.getElementById('edit-dob').value;
                const gender = document.getElementById('edit-gender').value;
                const status = document.getElementById('edit-status').value;
                const allergy = document.getElementById('edit-allergy').value;
                const address = document.getElementById('edit-address').value;
                const diet = document.getElementById('edit-diet').value;
                const trekking_pole = document.getElementById('edit-trekking-pole').value;
                const commitments = document.getElementById('edit-commitments').checked;
                const special = document.getElementById('edit-special').value;
                const id_card = document.getElementById('edit-id-card').value;
                const pickupEl = document.getElementById('edit-pickup-point');
                const pickupCustomEl = document.getElementById('edit-pickup-custom');
                const pickup_point = (pickupEl?.value === '__custom__')
                    ? (pickupCustomEl?.value?.trim() || '')
                    : (pickupEl?.value || '');

                const servicesArr = [];
                document.querySelectorAll('.preset-service-check:checked').forEach(cb => {
                    servicesArr.push({ label: cb.dataset.label, price: parseInt(cb.dataset.price) || 0 });
                });
                document.querySelectorAll('.service-row').forEach(row => {
                    const label = (row.querySelector('.service-label-input')?.value || '').trim();
                    const price = parseInt(row.querySelector('.service-price-input')?.value) || 0;
                    if (label) servicesArr.push({ label, price });
                });
                const services_booked = servicesArr.length > 0 ? JSON.stringify(servicesArr) : null;

                const saleSelect = document.getElementById('edit-sale');
                let sale_id = undefined;
                let sale_name = undefined;
                if (saleSelect && !saleSelect.parentElement.classList.contains('hidden')) {
                    sale_id = saleSelect.value || null;
                    sale_name = 'Website';
                    if (sale_id) {
                        const u = allUsers.find(x => String(x.id) === String(sale_id));
                        if (u) sale_name = u.full_name || u.fullName;
                    }
                }

                const basePrice = parseInt(document.getElementById('edit-total').value) || 0;
                const discount = parseInt(document.getElementById('edit-discount').value) || 0;
                const deposit = parseInt(document.getElementById('edit-deposit').value) || 0;
                const editDepReqVal = parseInt(document.getElementById('edit-deposit-required').value);
                const deposit_required = !isNaN(editDepReqVal) ? editDepReqVal : 1000000;

                const bookingPayload = {
                    id: bookingId, name, phone, medal_name: medalName, tour, date, dob, gender,
                    status, allergy, address, diet, trekking_pole, commitments, special, id_card, pickup_point,
                    services_booked, sale_id, sale_name, total_price: basePrice - discount, discount, deposit, deposit_required,
                    ...(editScheduleId !== undefined ? { schedule_id: editScheduleId } : {})
                };

                const res = await fetch('/api/bookings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bookingPayload)
                });

                if (res.ok) {
                    alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!");
                    window.closeEditModal();
                    loadData(); // Tải lại bảng roster
                } else {
                    const errDB = await res.json();
                    throw new Error(errDB.error || "Gặp sự cố khi Cập nhật API.");
                }

            } catch (err) {
                alert("❌ Lỗi Cập nhật: " + err.message);
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    }

    // Row click event (Now handled by inline onclick in renderTable)

    // Run
    buildColumnToggles();
    buildTableHeader();
    Promise.all([loadData(), loadToursAndSchedules()]).then(() => renderSeatMap()).catch(() => renderSeatMap());
};
