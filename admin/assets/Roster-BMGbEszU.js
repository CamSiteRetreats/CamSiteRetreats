import{S as _e,H as je}from"./Header-CtRUqTZE.js";const Ne=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        <!-- Sidebar is hidden when printing -->
        <div class="print:hidden">
            ${_e()}
        </div>
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          <div class="print:hidden">
              ${je()}
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
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Điểm Đón</label>
                                  <input type="text" id="edit-pickup-point" class="input-field bg-gray-50 text-sm" placeholder="VD: Đà Lạt Trung Tâm">
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
    `,Ae=async()=>{console.log("[Roster] VERSION 3.2 LOADED - READY TO EDIT");const de=t=>{const e=(t||"").toLowerCase();return e.includes("hoàn tất")||e.includes("hoàn thành")||e.includes("đã thanh toán")||e.includes("thanh toán")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                        Đã Thanh Toán</span>`:e.includes("đã cọc")||e.includes("da coc")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2H6z"/></svg>
                        Đã Cọc</span>`:e.includes("hủy")||e.includes("cancelled")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600 border border-red-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        Đã Hủy</span>`:`<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">${t||"Chờ cọc"}</span>`},ce=t=>{let e=[];const s=t.services_booked;if(s&&s!=="[]"&&s!=="null"&&s!==""){if(Array.isArray(s))e=s.map(n=>{const a=n.label||n.name||n.title||"",o=n.price&&Number(n.price)>0?` (+${Number(n.price).toLocaleString("vi-VN")}đ)`:"";return(a+o).trim()}).filter(Boolean);else if(typeof s=="string"&&s.trim().startsWith("["))try{const n=JSON.parse(s);Array.isArray(n)&&n.length>0&&(e=n.map(a=>{const o=a.label||a.name||a.title||"",c=a.price&&Number(a.price)>0?` (+${Number(a.price).toLocaleString("vi-VN")}đ)`:"";return(o+c).trim()}).filter(Boolean))}catch{const a=s.match(/label:\s*['"]([^'"]+)['"]/g)||[],o=s.match(/price:\s*(\d+)/g)||[];a.length>0&&(e=a.map((c,i)=>{const d=c.replace(/label:\s*['"]/,"").replace(/['"]$/,"").trim(),l=o[i]||"",g=l?Number(l.replace(/price:\s*/,"")):0;return(d+(g>0?` (+${g.toLocaleString("vi-VN")}đ)`:"")).trim()}).filter(Boolean))}}if(e.length===0){const n=t.extra_services||t.extraServices||t.extra||t.notes_extra||"";n&&n!=="-"&&n.trim()!==""&&(e=n.split(/[\n,;]+/).map(a=>a.trim()).filter(Boolean))}if(e.length===0)return'<span class="text-gray-300 text-xs italic">Không có</span>';const r=["bg-violet-100 text-violet-700 border-violet-200","bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200","bg-sky-100 text-sky-700 border-sky-200","bg-teal-100 text-teal-700 border-teal-200","bg-orange-100 text-orange-700 border-orange-200","bg-rose-100 text-rose-700 border-rose-200"];return`<div class="flex flex-wrap gap-1.5">${e.map((n,a)=>`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${r[a%r.length]}">
                        <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                        ${n}</span>`).join("")}</div>`},U=t=>{if(!t)return!1;const e=new Date().getMonth()+1,s=t.split("-");return s.length===3?parseInt(s[1])===e:!1},E=[{id:"col-stt",label:"STT",always:!0,render:(t,e)=>`<span class="text-gray-400 font-mono text-xs">${e+1}</span>`},{id:"col-name",label:"Họ và Tên",default:!0,render:t=>{const e=U(t.dob)?' <span title="Sinh nhật tháng này!" class="text-pink-500">🎂</span>':"";return`<div class="font-bold text-gray-900 text-sm">${t.name||"-"}${e}</div>`}},{id:"col-dob",label:"Ngày Sinh",default:!0,render:t=>{if(!t.dob)return'<span class="text-gray-300">—</span>';const e=t.dob.split("-"),s=e.length===3?`${e[2]}/${e[1]}/${e[0]}`:t.dob,r=U(t.dob)?" 🎂":"";return`<span class="text-gray-700 text-sm tabular-nums">${s}${r}</span>`}},{id:"col-gender",label:"Giới Tính",default:!0,render:t=>{const e=t.gender||"";return e==="Nam"?'<span class="text-blue-600 font-bold text-xs">👨 Nam</span>':e==="Nữ"?'<span class="text-pink-600 font-bold text-xs">👩 Nữ</span>':'<span class="text-gray-400 text-xs">—</span>'}},{id:"col-phone",label:"Số Điện Thoại",default:!0,render:t=>`<a href="tel:${t.phone||""}" class="font-medium text-blue-600 hover:text-blue-800 hover:underline tabular-nums text-sm">${t.phone||"—"}</a>`},{id:"col-pickup",label:"Điểm Đón",default:!0,render:t=>t.pickup_point?`<span class="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-medium">${t.pickup_point}</span>`:'<span class="text-gray-300 text-xs">—</span>'},{id:"col-seat",label:"💺 Ghế",default:!0,render:t=>{const e=t.seat_number||"";return`<div class="flex items-center gap-1">
                    ${e?`<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-csr-orange text-white font-black text-sm seat-badge" data-id="${t.id}">${e}</span>`:`<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 text-xs seat-badge cursor-pointer hover:border-csr-orange hover:text-csr-orange transition-colors" data-id="${t.id}">+</span>`}
                </div>`}},{id:"col-note",label:"Ghi Chú",default:!0,render:t=>t.special?`<span class="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">${t.special}</span>`:'<span class="text-gray-300 text-xs">—</span>'},{id:"col-status",label:"Trạng Thái",default:!0,render:t=>de(t.status)},{id:"col-order-id",label:"Mã Đơn",default:!1,render:t=>`<span class="font-mono text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">#${t.id||"—"}</span>`},{id:"col-extra",label:"Dịch Vụ Phát Sinh",default:!1,render:t=>ce(t)},{id:"col-sale",label:"Sale Phụ Trách",default:!1,render:t=>`<div class="font-bold text-indigo-700 text-sm whitespace-nowrap">${t.sale_name&&t.sale_name!=="null"&&t.sale_name!=="Website"?t.sale_name:'<span class="text-gray-400 font-normal">Website</span>'}</div>`},{id:"col-cccd",label:"CCCD / Passport",default:!1,render:t=>t.id_card||t.cccd||"-"},{id:"col-address",label:"Địa Chỉ",default:!1,render:t=>`<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${t.address||""}">${t.address||"-"}</div>`},{id:"col-diet",label:"Ăn Chay",default:!1,render:t=>t.diet==="Ăn chay"||t.diet==="Chay"||t.diet==="Có"?'<span class="text-green-600 font-bold">Có</span>':"Không"},{id:"col-pole",label:"Gậy Trekking",default:!1,render:t=>t.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">Có</span>':"Không"},{id:"col-allergy",label:"Dị Ứng / Bệnh",default:!1,render:t=>t.medical_notes||t.allergy||"-"},{id:"col-medal",label:"Tên Huy Chương",default:!1,render:t=>t.medal_name||t.name||"-"}],I=new URLSearchParams(window.location.search),k=I.get("tour")||"",S=I.get("date")||"",_=I.get("scheduleId")||"",pe=!!I.get("groupLabel"),X=I.get("vehicleType")||"solati_16";let L=S;const ue=t=>{if(!t)return"";const e=t.split(/[-/.]/);if(e.length!==3)return t;let s,r,n;return e[0].length===4?[n,r,s]=e:[s,r,n]=e,`${s.toString().padStart(2,"0")}/${r.toString().padStart(2,"0")}/${n}`},Y=t=>(t||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[-_]/g," ").replace(/\s+/g," ").trim();S&&(L=ue(S));const ge=document.getElementById("roster-title"),me=document.getElementById("roster-subtitle"),he=document.getElementById("print-tour-name"),be=document.getElementById("print-tour-date"),fe=document.getElementById("print-total"),G=document.getElementById("filterStatus"),q=document.getElementById("filterGender"),O=document.getElementById("rosterList");let v=[],C=new Set(E.filter(t=>t.default||t.always).map(t=>t.id));k&&(ge.textContent=k,he.textContent=k),L&&(me.innerHTML=`Ngày khởi hành: <span class="font-bold text-csr-orange">${L}</span>`,be.textContent=L);const xe=()=>{const t=document.getElementById("column-toggles");t.innerHTML=E.filter(e=>!e.always&&!e.default).map(e=>`
            <label class="flex items-center gap-2 cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-csr-orange/50 transition-colors">
                <input type="checkbox" value="${e.id}" class="col-toggle-cb text-csr-orange focus:ring-csr-orange rounded" ${C.has(e.id)?"checked":""}>
                <span class="text-sm font-medium text-gray-600 group-hover:text-gray-900 select-none">${e.label}</span>
            </label>
        `).join(""),document.querySelectorAll(".col-toggle-cb").forEach(e=>{e.addEventListener("change",s=>{s.target.checked?C.add(s.target.value):C.delete(s.target.value),ye()})})},ve=()=>{const t=document.getElementById("table-header-row");t.innerHTML=E.map(e=>`
            <th class="p-4 whitespace-nowrap ${e.id}" data-col="${e.id}">${e.label}</th>
        `).join("")},ye=()=>{E.forEach(t=>{const e=C.has(t.id),s=document.querySelector(`th[data-col="${t.id}"]`);s&&(e?s.classList.remove("col-hidden"):s.classList.add("col-hidden")),document.querySelectorAll(`td[data-col="${t.id}"]`).forEach(r=>{e?r.classList.remove("col-hidden"):r.classList.add("col-hidden")})})},V=t=>{if(!t)return null;t.includes(" - ")&&(t=t.split(" - ")[0].trim()),t.includes("T")&&(t=t.split("T")[0]);const e=t.split(/[-/.]/);return e.length===2?{day:parseInt(e[0]),month:parseInt(e[1]),year:null}:e.length===3?e[0].length===4?{day:parseInt(e[2]),month:parseInt(e[1]),year:parseInt(e[0])}:{day:parseInt(e[0]),month:parseInt(e[1]),year:parseInt(e[2])}:null},T=V(S),we=t=>{if(!T)return!0;const e=V(t);return!(!e||e.day!==T.day||e.month!==T.month||e.year&&T.year&&e.year!==T.year)},P=async()=>{try{if(_)try{const n=await(await fetch(`/api/guides?schedule_id=${_}`)).json();if(n&&n.length>0){const a=document.getElementById("rosterGuidesSection"),o=document.getElementById("rosterGuidesList"),c={"Hướng Dẫn Viên":"bg-blue-100 text-blue-700 border-blue-200",Leader:"bg-purple-100 text-purple-700 border-purple-200",Photo:"bg-pink-100 text-pink-700 border-pink-200",Guider:"bg-cyan-100 text-cyan-700 border-cyan-200","Hậu Cần":"bg-amber-100 text-amber-700 border-amber-200","Học Việc":"bg-gray-100 text-gray-600 border-gray-200"};a.classList.remove("hidden"),o.innerHTML=n.map(i=>`
                                <div class="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-sm print:shadow-none print:border-gray-400">
                                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${c[i.role]||"bg-gray-100 text-gray-600 border-gray-200"} uppercase tracking-wide print:border-black print:text-black">${i.role}</span>
                                    <span class="font-bold text-gray-900 text-sm print:text-black">${i.full_name}</span>
                                    ${i.phone?`<a href="tel:${i.phone}" class="text-xs text-gray-500 hover:text-indigo-600 font-medium ml-1 print:text-black print:no-underline">(${i.phone})</a>`:""}
                                </div>
                            `).join("")}}catch(r){console.error("Error loading guides:",r)}const e=await(await fetch("/api/bookings")).json();console.log("[Roster] targetTour:",k,"targetDateStr:",S,"targetParsed:",T),console.log("[Roster] Total bookings:",e.length),e.length>0&&e.filter(n=>n.tour&&n.tour.includes("Liêng")).slice(0,3).forEach(n=>console.log("[Roster] Sample Liêng:",{tour:n.tour,date:n.date,parsed:V(n.date)})),v=e.filter(r=>{if(_){if(String(r.schedule_id)===String(_))return!0;if(!(!pe&&!r.schedule_id))return!1}let n=!0,a=!0;if(k){const o=Y(r.tour),c=Y(k);n=o===c||o.includes(c)||c.includes(o)}return S&&(a=we(r.date)),n&&a}),console.log("[Roster] Matched bookings:",v.length);const s=document.getElementById("filterSort")?.value||"newest";s==="newest"?v.sort((r,n)=>parseInt(n.id)-parseInt(r.id)):v.sort((r,n)=>parseInt(r.id)-parseInt(n.id)),console.log(`[Roster] Sorted bookings (${s}):`,v.map(r=>r.id)),$()}catch(t){console.error("Lỗi khi tải dữ liệu đoàn:",t),O.innerHTML='<tr><td colspan="12" class="p-8 text-center text-red-500 font-bold">Lỗi khi tải dữ liệu. Vui lòng tải lại trang.</td></tr>'}},$=()=>{const t=G.value.toLowerCase(),e=q.value.toLowerCase(),s=document.getElementById("filterSearch")?.value?.toLowerCase()||"",r=v.filter(n=>{if(s&&!`${n.name} ${n.phone} ${n.address} ${n.medal_name} ${n.customer_id}`.toLowerCase().includes(s))return!1;const a=(n.status||"").toLowerCase();if(!(t===""||t==="chờ cọc"&&(a.includes("chờ cọc")||a.includes("chờ xác nhận"))||t==="đã cọc"&&(a.includes("đã cọc")||a.includes("hoàn tất")||a.includes("hoàn thành"))||t==="đã hủy"&&a.includes("hủy")))return!1;const c=(n.gender||"").toLowerCase();return e===""||c===e});if(document.getElementById("text-visible-count").textContent=r.length,fe.textContent=r.length,r.length===0){O.innerHTML='<tr><td colspan="12" class="p-12 text-center text-gray-500 bg-gray-50">Không tìm thấy khách hàng nào khớp với điều kiện lọc.</td></tr>';return}O.innerHTML=r.map((n,a)=>{const o=a%2===0;return`<tr onclick="if(!event.target.closest('.seat-badge') && !event.target.closest('a')) { if(window.actionEdit) window.actionEdit('${n.id}'); else alert('Chưa tải xong logic chỉnh sửa!'); }" class="${o?"bg-white":"bg-gray-50/40"} hover:bg-amber-50/40 transition-colors border-b border-gray-100 group row-clickable cursor-pointer" data-booking-id="${n.id}">`+E.map(c=>`
                    <td class="px-4 py-3 align-middle ${c.id==="col-extra"?"min-w-[220px]":""} ${C.has(c.id)?"":"col-hidden"}" data-col="${c.id}">
                        ${c.render(n,a)}
                    </td>
                `).join("")+"</tr>"}).join("")},ke=()=>{const t=E.filter(l=>C.has(l.id)),e=G.value.toLowerCase(),s=q.value.toLowerCase(),r=document.getElementById("filterSearch")?.value?.toLowerCase()||"",n=v.filter(l=>{if(r&&!`${l.name} ${l.phone} ${l.address} ${l.medal_name} ${l.customer_id}`.toLowerCase().includes(r))return!1;const g=(l.status||"").toLowerCase();if(!(e===""||e==="chờ cọc"&&(g.includes("chờ cọc")||g.includes("chờ xác nhận"))||e==="đã cọc"&&(g.includes("đã cọc")||g.includes("hoàn tất")||g.includes("hoàn thành"))||e==="đã hủy"&&g.includes("hủy")))return!1;const m=(l.gender||"").toLowerCase();return s===""||m===s});let a=`
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
                            ${t.map(l=>`<th>${l.label}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
        `;n.forEach((l,g)=>{a+="<tr>",t.forEach(p=>{let m="";if(p.id==="col-stt")m=g+1;else if(p.id==="col-name")m=l.name||"";else if(p.id==="col-order-id")m=l.id||"";else if(p.id==="col-address")m=l.address||"";else if(p.id==="col-phone")m=l.phone?String(l.phone):"";else if(p.id==="col-diet")m=l.diet==="Ăn chay"||l.diet==="Chay"||l.diet==="Có"?"Có":"Không";else if(p.id==="col-pole")m=l.trekking_pole==="Có"?"Có":"Không";else if(p.id==="col-status")m=l.status||"";else if(p.id==="col-extra"){const h=l.services_booked;if(h&&h!=="[]"&&h!=="null"&&h!==""){const b=f=>f.map(x=>{const w=x.label||x.name||x.title||"",M=x.price&&Number(x.price)>0?` (+${Number(x.price).toLocaleString("vi-VN")}đ)`:"";return(w+M).trim()}).filter(Boolean).join(", ");if(Array.isArray(h))m=b(h);else if(typeof h=="string"&&h.trim().startsWith("["))try{m=b(JSON.parse(h))}catch{const x=h.match(/label:\s*['"]([^'"]+)['"]/g)||[],w=h.match(/price:\s*(\d+)/g)||[];x.length>0&&(m=x.map((M,N)=>{const B=M.replace(/label:\s*['"]/,"").replace(/['"]$/,"").trim(),A=w[N]?Number(w[N].replace(/price:\s*/,"")):0;return(B+(A>0?` (+${A.toLocaleString("vi-VN")}đ)`:"")).trim()}).filter(Boolean).join(", "))}}m||(m=l.extra_services||"")}else{const h=String(p.render(l,g)),b=document.createElement("DIV");b.innerHTML=h,m=b.textContent||b.innerText||""}const u=p.id==="col-phone"||p.id==="col-cccd";a+=`<td ${u?'class="num"':""}>${m}</td>`}),a+="</tr>"}),a+=`
                    </tbody>
                </table>
            </body>
            </html>
        `;const o=new Blob(["\uFEFF",a],{type:"application/vnd.ms-excel;charset=utf-8"}),c=URL.createObjectURL(o),i=`DS_Doan_${k||"Tour"}_${L||"Date"}.xls`.replace(/[/\\?%*:|"<>]/g,"-"),d=document.createElement("a");d.setAttribute("href",c),d.setAttribute("download",i),document.body.appendChild(d),d.click(),document.body.removeChild(d)},Q={solati_16:{label:"🚐 Solati 16 chỗ",totalSeats:15},limo_34:{label:"🚌 Limousine 34 chỗ",totalSeats:34},sleeper_45:{label:"🛏️ Giường Nằm 45 chỗ",totalSeats:46}},Ee=t=>{if(t==="limo_34")return{type:"limo",floors:[{label:null,rows:[[{n:"C1"},{n:"C2"},null,{n:"B1"},{n:"B2"},null,{n:"A1"},{n:"A2"},{n:"LÁI",driver:!0}],[{n:"C3"},{n:"C4"},null,{n:"B3"},{n:"B4"},null,{n:"A3"},{n:"A4"}],[{n:"C5"},{n:"C6"},null,{n:"B5"},{n:"B6"},null,{n:"A5"},{n:"A6"}],[{n:"C7"},{n:"C8"},null,{n:"B7"},{n:"B8"},null,{n:"A7"},{n:"A8"}],[{n:"C9"},{n:"C10"},null,{n:"B9"},{n:"B10"},null,{n:"A9"},{n:"A10"}],[{n:"C11"},{n:"C12"},null,null,null,null,{n:"A11"},{n:"A12"}]]}],legend:['<span class="font-bold text-gray-600">Dãy C</span> (cửa lên)','<span class="font-bold text-gray-600">Dãy B</span> (giữa)','<span class="font-bold text-gray-600">Dãy A</span> (tài xế)']};if(t==="sleeper_45"){const e=(s,r,n)=>{const a=Array.from({length:n-r+1},(c,i)=>`${s}${r+i}`),o=[];for(let c=0;c<a.length;c+=4){const i=[];for(let d=0;d<4;d++)d===2&&i.push(null),i.push(a[c+d]?{n:a[c+d]}:null);o.push(i)}return o};return{type:"sleeper",floors:[{label:"🏠 Tầng Dưới",floorKey:"down",rows:e("A",1,23)},{label:"🏥 Tầng Trên",floorKey:"up",rows:e("B",1,23)}],legend:null}}return{type:"solati",floors:[{label:null,rows:[[{n:"LÁI",driver:!0},null,{n:1},{n:2}],[{n:3},{n:4},null,{n:5}],[{n:6},{n:7},null,{n:8}],[{n:9},{n:10},null,{n:11}],[{n:12},{n:13},{n:14},{n:15}]]}],legend:null}},Z=Q[X]||Q.solati_16;let K=0;const j=()=>{const t=document.getElementById("seatMapGrid");if(!t)return;const e={};v.forEach(d=>{d.seat_number&&(e[String(d.seat_number)]=d)});const s=Object.keys(e).length,r=Z.totalSeats,n=document.getElementById("seat-map-count"),a=document.getElementById("seat-count-badge"),o=document.getElementById("vehicle-label");n&&(n.textContent=`${s}/${r}`),a&&(a.textContent=`💺 ${s}/${r} ghế đã xếp`),o&&(o.textContent=Z.label);const c=Ee(X),i=(d,l)=>{if(!d)return'<div class="w-12 h-10 flex-shrink-0"></div>';if(d.driver)return'<div class="seat-btn seat-driver w-10 h-9 rounded-lg flex flex-col items-center justify-center text-[8px] font-bold flex-shrink-0"><span>🚗</span><span>LÁI</span></div>';const g=String(d.n),p=l[g],m=p?(p.name||"").split(" ").pop().slice(0,4):"",h=/[A-Z]/.test(g)?"w-11 h-9":"w-12 h-10";return`<button
                class="seat-btn ${p?"seat-assigned":"seat-empty"} ${h} rounded-lg flex flex-col items-center justify-center flex-shrink-0 group relative"
                data-seat="${g}"
                data-booking-id="${p?p.id:""}"
                title="${p?p.name+" — Ghế "+g:"Ghế "+g+" (trống)"}">
                <span class="text-[9px] font-bold leading-none">${g}</span>
                ${p?`<span class="text-[8px] leading-none mt-0.5 truncate max-w-[42px] px-0.5">${m}</span>`:""}
            </button>`};if(c.type==="sleeper")t.innerHTML=`
                <div class="flex gap-2 mb-3">
                    ${c.floors.map((d,l)=>`
                        <button class="floor-tab flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${K===l?"bg-csr-orange text-white":"bg-gray-100 text-gray-500 hover:bg-gray-200"}" data-floor="${l}">
                            ${d.label}
                        </button>
                    `).join("")}
                </div>
                <div class="floor-content">
                    ${c.floors.map((d,l)=>`
                        <div class="floor-rows ${K===l?"":"hidden"}" data-floor="${l}">
                            ${d.rows.map(g=>`
                                <div class="flex items-center justify-center gap-1 mb-1">
                                    ${g.map(p=>i(p,e)).join("")}
                                </div>
                            `).join("")}
                        </div>
                    `).join("")}
                </div>`,t.querySelectorAll(".floor-tab").forEach(d=>{d.addEventListener("click",()=>{K=parseInt(d.dataset.floor),j()})});else{let d="";c.legend&&(d+=`<div class="flex justify-around text-[9px] text-gray-400 mb-2 px-1">${c.legend.map(l=>`<span>${l}</span>`).join("")}</div>`),c.floors[0].rows.forEach(l=>{const g=l.map(p=>i(p,e)).join("");d+=`<div class="flex items-center justify-center gap-1 mb-1">${g}</div>`}),t.innerHTML=d}t.querySelectorAll(".seat-btn[data-seat]").forEach(d=>{d.addEventListener("click",()=>ee(d.dataset.seat,d.dataset.bookingId))})},ee=(t,e)=>{const s=document.getElementById("seatModal"),r=document.getElementById("seatModalTitle"),n=document.getElementById("seatModalBody");if(!s||!r||!n)return;r.textContent=e?`Ghế ${t} — ${v.find(i=>String(i.id)===String(e))?.name||"?"}`:`Ghế ${t} — Chưa có khách`;const a=v.find(i=>String(i.id)===String(e));let o="";a&&(o+=`<div class="mb-3 p-3 bg-orange-50 border border-orange-200 rounded-xl text-sm">
                <div class="font-bold text-gray-800">${a.name}</div>
                <div class="text-gray-500 text-xs">${a.phone||""} ${a.gender?"· "+a.gender:""}</div>
                ${a.pickup_point?`<div class="text-xs text-blue-600 mt-1">📍 ${a.pickup_point}</div>`:""}
            </div>
            <button class="w-full py-2 text-sm font-bold text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition-colors mb-3" id="btnRemoveSeat">
                ✖ Bỏ gán ghế này
            </button>
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Chọn khách khác:</div>`);const c=v.filter(i=>!i.seat_number||String(i.id)===String(e));c.length===0?o+='<p class="text-gray-400 text-sm text-center py-4">Tất cả khách đã được xếp ghế.</p>':o+=c.map(i=>`
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-colors mb-1 btn-assign-passenger" data-booking-id="${i.id}" data-seat="${t}">
                    <div class="font-bold text-gray-800 text-sm">${i.name}</div>
                    <div class="text-xs text-gray-500">${i.phone||""} ${i.gender?"· "+i.gender:""} ${i.pickup_point?"📍 "+i.pickup_point:""}</div>
                </button>`).join(""),n.innerHTML=o,s.style.display="flex",n.querySelector("#btnRemoveSeat")?.addEventListener("click",async()=>{await z(e,null),s.style.display="none"}),n.querySelectorAll(".btn-assign-passenger").forEach(i=>{i.addEventListener("click",async()=>{const d=i.dataset.bookingId,l=i.dataset.seat,g=v.find(p=>String(p.seat_number)===String(l)&&String(p.id)!==String(d));g&&await z(g.id,null),await z(d,l),s.style.display="none"})})},z=async(t,e)=>{try{await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,seat_number:e||null})});const s=v.find(r=>String(r.id)===String(t));s&&(s.seat_number=e||null),$(),j()}catch(s){console.error("Lỗi lưu ghế:",s),alert("Lỗi lưu số ghế. Vui lòng thử lại.")}};G.addEventListener("change",$),q.addEventListener("change",$),document.getElementById("filterSearch")?.addEventListener("input",$),document.getElementById("filterSort")?.addEventListener("change",P),document.getElementById("btnExportPDF").addEventListener("click",()=>window.print()),document.getElementById("btnExportExcel").addEventListener("click",()=>ke()),document.getElementById("seatModalClose")?.addEventListener("click",()=>{document.getElementById("seatModal").style.display="none"}),document.getElementById("seatModal")?.addEventListener("click",t=>{t.target===document.getElementById("seatModal")&&(document.getElementById("seatModal").style.display="none")}),document.getElementById("rosterList")?.addEventListener("mouseover",t=>{const e=t.target.closest("tr[data-booking-id]");if(!e)return;document.querySelectorAll(".seat-btn").forEach(n=>n.classList.remove("seat-highlighted"));const s=e.dataset.bookingId,r=v.find(n=>String(n.id)===String(s));r?.seat_number&&document.querySelector(`.seat-btn[data-seat="${r.seat_number}"]`)?.classList.add("seat-highlighted")}),document.getElementById("rosterList")?.addEventListener("click",t=>{const e=t.target.closest(".seat-badge");if(!e)return;const s=e.dataset.id,r=v.find(n=>String(n.id)===String(s));ee(r?.seat_number||"?",s)});let D=[],te=[],F=[];const Se=async()=>{try{const[t,e,s]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules"),fetch("/api/users")]);D=t.ok?await t.json():[],te=e.ok?await e.json():[],F=s.ok?await s.json():[],Te("edit-tour"),Ce("edit-sale")}catch(t){console.error("Lỗi tải tours/schedules:",t)}},Ce=t=>{const e=document.getElementById(t);e&&(e.innerHTML='<option value="">-- Website --</option>',F.forEach(s=>{const r=document.createElement("option");r.value=s.id,r.textContent=`${s.full_name||s.fullName} (${s.role})`,e.appendChild(r)}))},Te=t=>{const e=document.getElementById(t);if(!e)return;const s=e.value,r=e.options[0]?.outerHTML||'<option value="">-- Chọn Tour --</option>';e.innerHTML=r,D.filter(n=>n.is_visible!==!1).forEach(n=>{const a=document.createElement("option");a.value=n.name,a.textContent=n.name,n.name===s&&(a.selected=!0),e.appendChild(a)})},ne=(t,e,s,r)=>{const n=document.getElementById(t);if(!n||(n.innerHTML='<option value="">-- Chọn Lịch --</option>',!e))return;const a=te.filter(o=>o.tour_name?o.tour_name===e||e.includes(o.tour_name)||o.tour_name.includes(e):!1);if(a.length===0){n.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}a.sort((o,c)=>new Date(o.start_date)-new Date(c.start_date)).forEach(o=>{const c=parseInt(o.booked_count)||0,i=(o.slots||0)-c,d=new Date(o.start_date),l=o.end_date?new Date(o.end_date):null,g=h=>`${h.getDate().toString().padStart(2,"0")}/${(h.getMonth()+1).toString().padStart(2,"0")}`;let p=g(d);l&&(p+=" - "+g(l)),o.group_label&&(p+=` · ${o.group_label}`),p+=` (${i>=0?i:0} chỗ trống)`;const m=document.createElement("option"),u=`${d.getDate().toString().padStart(2,"0")}/${(d.getMonth()+1).toString().padStart(2,"0")}/${d.getFullYear()}`;m.value=`${o.id}::${u}`,m.dataset.scheduleId=o.id,m.dataset.date=u,m.textContent=p,i<=0&&(m.disabled=!0,m.textContent=p.replace("chỗ trống","HẾT CHỖ")),(r&&String(o.id)===String(r)||!r&&s&&u===s)&&(m.selected=!0),n.appendChild(m)})},se=document.getElementById("edit-tour");se&&se.addEventListener("change",t=>{ne("edit-date",t.target.value)}),window.closeEditModal=()=>{document.getElementById("editModal").classList.remove("opacity-100");const t=document.getElementById("editModalContent");t&&(t.classList.remove("scale-100","translate-y-0"),t.classList.add("scale-95","translate-y-4")),setTimeout(()=>document.getElementById("editModal").classList.add("hidden"),300)},window.updateEditRemaining=()=>{const t=parseInt(document.getElementById("edit-total")?.value)||0,e=parseInt(document.getElementById("edit-discount")?.value)||0,s=parseInt(document.getElementById("edit-deposit")?.value)||0;let r=0;document.querySelectorAll(".preset-service-check:checked").forEach(c=>{r+=parseInt(c.dataset.price)||0}),document.querySelectorAll(".service-price-input").forEach(c=>{r+=parseInt(c.value)||0});const a=t-e+r-s,o=document.getElementById("edit-remaining");o&&(o.textContent=a>0?a.toLocaleString("vi-VN")+"đ":"0đ")},window.updateServicesTotal=()=>{let t=0;document.querySelectorAll(".preset-service-check:checked").forEach(r=>{t+=parseInt(r.dataset.price)||0}),document.querySelectorAll(".service-price-input").forEach(r=>{t+=parseInt(r.value)||0});const e=document.getElementById("servicesTotalDisplay");e&&(e.textContent=t.toLocaleString("vi-VN")+"đ");const s=document.getElementById("servicesTotalRow");return s&&s.classList.toggle("hidden",t===0),window.updateEditRemaining(),t},window.addServiceRow=(t="",e=0)=>{const s=document.getElementById("servicesContainer"),r=document.getElementById("emptyServicesMsg"),n=document.getElementById("servicesTotalRow");if(!s)return;r&&r.classList.add("hidden"),n&&n.classList.remove("hidden");const a=document.createElement("div");a.className="service-row flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5",a.innerHTML=`
            <span class="text-green-500 text-sm">✨</span>
            <input type="text" class="service-label-input flex-1 text-sm bg-transparent border-none outline-none text-gray-700 font-medium placeholder:text-gray-300" placeholder="Tên dịch vụ (VD: Thuê áo mưa...)" value="${t.replace(/"/g,"&quot;")}">
            <div class="flex items-center gap-1 shrink-0">
                <span class="text-xs text-gray-400 font-medium">+</span>
                <input type="number" class="service-price-input w-24 text-sm bg-white border border-gray-200 rounded-lg px-2 py-1 text-green-600 font-bold text-right outline-none focus:border-green-400" placeholder="Giá" value="${e}" min="0">
                <span class="text-xs text-gray-400">đ</span>
            </div>
            <button type="button" class="remove-service-btn text-gray-300 hover:text-red-400 transition-colors ml-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `,a.querySelector(".remove-service-btn").addEventListener("click",()=>{a.remove(),s.querySelectorAll(".service-row").length===0&&(r&&r.classList.remove("hidden"),n&&n.classList.add("hidden")),window.updateServicesTotal()}),a.querySelector(".service-price-input").addEventListener("input",window.updateServicesTotal),s.appendChild(a),window.updateServicesTotal()};const re=document.getElementById("addServiceBtn");re&&re.addEventListener("click",()=>window.addServiceRow()),window.actionEdit=async t=>{try{const e=v.find(u=>u.id==t);if(!e){alert("Không tìm thấy thông tin khách hàng!");return}document.getElementById("edit-id").value=t,document.getElementById("edit-name").value=e.name||"",document.getElementById("edit-phone").value=e.phone||"",document.getElementById("edit-medal-name").value=e.medal_name||"",document.getElementById("edit-tour").value=e.tour||"",ne("edit-date",e.tour||"",e.date||"",e.schedule_id||null),(u=>{let h=u.dob||"";if(h&&h.includes("/")){const b=h.split("/");b.length===3&&(h=`${b[2]}-${b[1].padStart(2,"0")}-${b[0].padStart(2,"0")}`)}document.getElementById("edit-dob").value=h,document.getElementById("edit-gender").value=u.gender||"Khác",document.getElementById("edit-allergy").value=u.allergy||u.medical_notes||"",document.getElementById("edit-address").value=u.address||"",document.getElementById("edit-diet").value=u.diet||u.dietary||"",document.getElementById("edit-trekking-pole").value=u.trekking_pole||"Không",document.getElementById("edit-id-card").value=u.id_card||u.cccd||"",document.getElementById("edit-pickup-point").value=u.pickup_point||""})(e),document.getElementById("edit-status").value=e.status||"Chờ xác nhận cọc",document.getElementById("edit-commitments").checked=!!e.commitments,document.getElementById("edit-special").value=e.special||"";try{const u=localStorage.getItem("csr_user");if(u&&JSON.parse(u).role==="admin"){const b=document.getElementById("edit-sale-container");b&&b.classList.remove("hidden");const f=document.getElementById("edit-sale");f&&(f.value=e.sale_id||"")}}catch{}const r=(parseInt(e.total_price)||0)+(parseInt(e.discount)||0);document.getElementById("edit-total").value=r,document.getElementById("edit-discount").value=e.discount||0,document.getElementById("edit-deposit").value=e.deposit||0;const n=parseInt(e.deposit_required);document.getElementById("edit-deposit-required").value=isNaN(n)?1e6:n,window.updateEditRemaining();const a=document.getElementById("servicesContainer"),o=document.getElementById("emptyServicesMsg"),c=document.getElementById("servicesTotalRow"),i=document.getElementById("presetServicesBlock"),d=document.getElementById("presetServicesList"),l=document.getElementById("servicesDivider");let g=[];try{if(e.services_booked){const u=typeof e.services_booked=="string"?JSON.parse(e.services_booked):e.services_booked;Array.isArray(u)&&(g=u)}}catch{}if(d&&i){d.innerHTML="";const u=D.find(b=>b.name===e.tour);let h=[];try{if(u?.services){const b=typeof u.services=="string"?JSON.parse(u.services):u.services;Array.isArray(b)&&(h=b)}}catch{}h.length>0?(i.classList.remove("hidden"),l&&l.classList.remove("hidden"),h.forEach(b=>{const f=g.some(w=>(w.label||w.name||"").toLowerCase()===(b.label||"").toLowerCase()),x=document.createElement("label");x.className="preset-service-card flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all "+(f?"border-green-400 bg-green-50":"border-gray-100 bg-gray-50"),x.innerHTML=`
                            <input type="checkbox" class="preset-service-check w-4 h-4 rounded accent-green-500 shrink-0" data-label="${(b.label||"").replace(/"/g,"&quot;")}" data-price="${b.price||0}" ${f?"checked":""}>
                            <div class="flex-1 min-w-0"><div class="font-bold text-sm text-gray-800">${b.label||""}</div></div>
                            <div class="text-sm font-black text-green-600 shrink-0">+${parseInt(b.price||0).toLocaleString("vi-VN")}đ</div>
                        `,x.querySelector(".preset-service-check").addEventListener("change",w=>{x.className="preset-service-card flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all "+(w.target.checked?"border-green-400 bg-green-50":"border-gray-100 bg-gray-50"),window.updateServicesTotal()}),d.appendChild(x)})):(i.classList.add("hidden"),l&&l.classList.add("hidden"))}if(a){a.querySelectorAll(".service-row").forEach(f=>f.remove());const u=D.find(f=>f.name===e.tour);let h=new Set;try{const f=u?.services,x=f?typeof f=="string"?JSON.parse(f):f:[];Array.isArray(x)&&x.forEach(w=>h.add((w.label||"").toLowerCase()))}catch{}const b=g.filter(f=>!h.has((f.label||f.name||"").toLowerCase()));b.length>0?(o&&o.classList.add("hidden"),c&&c.classList.remove("hidden"),b.forEach(f=>window.addServiceRow(f.label||f.name||"",f.price||0))):o&&o.classList.remove("hidden"),window.updateServicesTotal()}const p=document.getElementById("editModal"),m=document.getElementById("editModalContent");p&&m&&(p.classList.remove("hidden"),setTimeout(()=>{p.classList.add("opacity-100"),m.classList.remove("scale-95","translate-y-4"),m.classList.add("scale-100","translate-y-0")},10))}catch(e){console.error("Lỗi khi mở form Edit:",e),alert("Lỗi khi mở form Edit: "+e.message)}};const ae=document.getElementById("editForm");ae&&ae.addEventListener("submit",async t=>{t.preventDefault();const e=t.target.querySelector('button[type="submit"]'),s=e.textContent;e.textContent="Đang lưu cập nhật...",e.disabled=!0;try{const r=document.getElementById("edit-id").value,n=document.getElementById("edit-name").value,a=document.getElementById("edit-phone").value,o=document.getElementById("edit-medal-name").value,c=document.getElementById("edit-tour").value,i=document.getElementById("edit-date").value;let d=i,l;if(i&&i.includes("::")){const y=i.split("::");l=parseInt(y[0])||null,d=y[1]}const g=document.getElementById("edit-dob").value,p=document.getElementById("edit-gender").value,m=document.getElementById("edit-status").value,u=document.getElementById("edit-allergy").value,h=document.getElementById("edit-address").value,b=document.getElementById("edit-diet").value,f=document.getElementById("edit-trekking-pole").value,x=document.getElementById("edit-commitments").checked,w=document.getElementById("edit-special").value,M=document.getElementById("edit-id-card").value,N=document.getElementById("edit-pickup-point").value,B=[];document.querySelectorAll(".preset-service-check:checked").forEach(y=>{B.push({label:y.dataset.label,price:parseInt(y.dataset.price)||0})}),document.querySelectorAll(".service-row").forEach(y=>{const R=(y.querySelector(".service-label-input")?.value||"").trim(),Me=parseInt(y.querySelector(".service-price-input")?.value)||0;R&&B.push({label:R,price:Me})});const A=B.length>0?JSON.stringify(B):null,J=document.getElementById("edit-sale");let H,W;if(J&&!J.parentElement.classList.contains("hidden")&&(H=J.value||null,W="Website",H)){const y=F.find(R=>String(R.id)===String(H));y&&(W=y.full_name||y.fullName)}const Be=parseInt(document.getElementById("edit-total").value)||0,oe=parseInt(document.getElementById("edit-discount").value)||0,Ie=parseInt(document.getElementById("edit-deposit").value)||0,le=parseInt(document.getElementById("edit-deposit-required").value),Le=isNaN(le)?1e6:le,$e={id:r,name:n,phone:a,medal_name:o,tour:c,date:d,dob:g,gender:p,status:m,allergy:u,address:h,diet:b,trekking_pole:f,commitments:x,special:w,id_card:M,pickup_point:N,services_booked:A,sale_id:H,sale_name:W,total_price:Be-oe,discount:oe,deposit:Ie,deposit_required:Le,...l!==void 0?{schedule_id:l}:{}},ie=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($e)});if(ie.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),window.closeEditModal(),P();else{const y=await ie.json();throw new Error(y.error||"Gặp sự cố khi Cập nhật API.")}}catch(r){alert("❌ Lỗi Cập nhật: "+r.message)}finally{e.textContent=s,e.disabled=!1}}),xe(),ve(),Promise.all([P(),Se()]).then(()=>j()).catch(()=>j())};export{Ae as afterRender,Ne as render};
