import{S as De,H as Ne}from"./Header-CtRUqTZE.js";const Ae=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        <!-- Sidebar is hidden when printing -->
        <div class="print:hidden">
            ${De()}
        </div>
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          <div class="print:hidden">
              ${Ne()}
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
    `,Re=async()=>{console.log("[Roster] VERSION 3.2 LOADED - READY TO EDIT");const ce=t=>{const e=(t||"").toLowerCase();return e.includes("hoàn tất")||e.includes("hoàn thành")||e.includes("đã thanh toán")||e.includes("thanh toán")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                        Đã Thanh Toán</span>`:e.includes("đã cọc")||e.includes("da coc")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2H6z"/></svg>
                        Đã Cọc</span>`:e.includes("hủy")||e.includes("cancelled")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600 border border-red-200">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        Đã Hủy</span>`:e.includes("bảo lưu")?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-500 border border-gray-300">
                        ⏸️ Bảo lưu</span>`:`<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">${t||"Chờ cọc"}</span>`},pe=t=>{let e=[];const s=t.services_booked;if(s&&s!=="[]"&&s!=="null"&&s!==""){if(Array.isArray(s))e=s.map(n=>{const r=n.label||n.name||n.title||"",a=n.price&&Number(n.price)>0?` (+${Number(n.price).toLocaleString("vi-VN")}đ)`:"";return(r+a).trim()}).filter(Boolean);else if(typeof s=="string"&&s.trim().startsWith("["))try{const n=JSON.parse(s);Array.isArray(n)&&n.length>0&&(e=n.map(r=>{const a=r.label||r.name||r.title||"",u=r.price&&Number(r.price)>0?` (+${Number(r.price).toLocaleString("vi-VN")}đ)`:"";return(a+u).trim()}).filter(Boolean))}catch{const r=s.match(/label:\s*['"]([^'"]+)['"]/g)||[],a=s.match(/price:\s*(\d+)/g)||[];r.length>0&&(e=r.map((u,d)=>{const i=u.replace(/label:\s*['"]/,"").replace(/['"]$/,"").trim(),l=a[d]||"",m=l?Number(l.replace(/price:\s*/,"")):0;return(i+(m>0?` (+${m.toLocaleString("vi-VN")}đ)`:"")).trim()}).filter(Boolean))}}if(e.length===0){const n=t.extra_services||t.extraServices||t.extra||t.notes_extra||"";n&&n!=="-"&&n.trim()!==""&&(e=n.split(/[\n,;]+/).map(r=>r.trim()).filter(Boolean))}if(e.length===0)return'<span class="text-gray-300 text-xs italic">Không có</span>';const o=["bg-violet-100 text-violet-700 border-violet-200","bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200","bg-sky-100 text-sky-700 border-sky-200","bg-teal-100 text-teal-700 border-teal-200","bg-orange-100 text-orange-700 border-orange-200","bg-rose-100 text-rose-700 border-rose-200"];return`<div class="flex flex-wrap gap-1.5">${e.map((n,r)=>`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${o[r%o.length]}">
                        <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                        ${n}</span>`).join("")}</div>`},X=t=>{if(!t)return!1;const e=new Date().getMonth()+1,s=t.split("-");return s.length===3?parseInt(s[1])===e:!1},I=[{id:"col-stt",label:"STT",always:!0,render:(t,e)=>`<span class="text-gray-400 font-mono text-xs">${e+1}</span>`},{id:"col-name",label:"Họ và Tên",default:!0,render:t=>{const e=X(t.dob)?' <span title="Sinh nhật tháng này!" class="text-pink-500">🎂</span>':"";return`<div class="font-bold text-gray-900 text-sm">${t.name||"-"}${e}</div>`}},{id:"col-dob",label:"Ngày Sinh",default:!0,render:t=>{if(!t.dob)return'<span class="text-gray-300">—</span>';const e=t.dob.split("-"),s=e.length===3?`${e[2]}/${e[1]}/${e[0]}`:t.dob,o=X(t.dob)?" 🎂":"";return`<span class="text-gray-700 text-sm tabular-nums">${s}${o}</span>`}},{id:"col-gender",label:"Giới Tính",default:!0,render:t=>{const e=t.gender||"";return e==="Nam"?'<span class="text-blue-600 font-bold text-xs">👨 Nam</span>':e==="Nữ"?'<span class="text-pink-600 font-bold text-xs">👩 Nữ</span>':'<span class="text-gray-400 text-xs">—</span>'}},{id:"col-phone",label:"Số Điện Thoại",default:!0,render:t=>`<a href="tel:${t.phone||""}" class="font-medium text-blue-600 hover:text-blue-800 hover:underline tabular-nums text-sm">${t.phone||"—"}</a>`},{id:"col-pickup",label:"Điểm Đón",default:!0,render:t=>t.pickup_point?`<span class="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-medium">${t.pickup_point}</span>`:'<span class="text-gray-300 text-xs">—</span>'},{id:"col-seat",label:"💺 Ghế",default:!0,render:t=>{const e=t.seat_number||"";return`<div class="flex items-center gap-1">
                    ${e?`<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-csr-orange text-white font-black text-sm seat-badge" data-id="${t.id}">${e}</span>`:`<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 text-xs seat-badge cursor-pointer hover:border-csr-orange hover:text-csr-orange transition-colors" data-id="${t.id}">+</span>`}
                </div>`}},{id:"col-note",label:"Ghi Chú",default:!0,render:t=>t.special?`<span class="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">${t.special}</span>`:'<span class="text-gray-300 text-xs">—</span>'},{id:"col-status",label:"Trạng Thái",default:!0,render:t=>ce(t.status)},{id:"col-order-id",label:"Mã Đơn",default:!1,render:t=>`<span class="font-mono text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">#${t.id||"—"}</span>`},{id:"col-extra",label:"Dịch Vụ Phát Sinh",default:!1,render:t=>pe(t)},{id:"col-sale",label:"Sale Phụ Trách",default:!1,render:t=>`<div class="font-bold text-indigo-700 text-sm whitespace-nowrap">${t.sale_name&&t.sale_name!=="null"&&t.sale_name!=="Website"?t.sale_name:'<span class="text-gray-400 font-normal">Website</span>'}</div>`},{id:"col-cccd",label:"CCCD / Passport",default:!1,render:t=>t.id_card||t.cccd||"-"},{id:"col-address",label:"Địa Chỉ",default:!1,render:t=>`<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${t.address||""}">${t.address||"-"}</div>`},{id:"col-diet",label:"Ăn Chay",default:!1,render:t=>t.diet==="Ăn chay"||t.diet==="Chay"||t.diet==="Có"?'<span class="text-green-600 font-bold">Có</span>':"Không"},{id:"col-pole",label:"Gậy Trekking",default:!1,render:t=>t.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">Có</span>':"Không"},{id:"col-allergy",label:"Dị Ứng / Bệnh",default:!1,render:t=>t.medical_notes||t.allergy||"-"},{id:"col-medal",label:"Tên Huy Chương",default:!1,render:t=>t.medal_name||t.name||"-"}],M=new URLSearchParams(window.location.search),B=M.get("tour")||"",T=M.get("date")||"",H=M.get("scheduleId")||"",ue=!!M.get("groupLabel"),Y=M.get("vehicleType")||"solati_16";let j=T;const ge=t=>{if(!t)return"";const e=t.split(/[-/.]/);if(e.length!==3)return t;let s,o,n;return e[0].length===4?[n,o,s]=e:[s,o,n]=e,`${s.toString().padStart(2,"0")}/${o.toString().padStart(2,"0")}/${n}`},Q=t=>(t||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[-_]/g," ").replace(/\s+/g," ").trim();T&&(j=ge(T));const me=document.getElementById("roster-title"),he=document.getElementById("roster-subtitle"),be=document.getElementById("print-tour-name"),fe=document.getElementById("print-tour-date"),xe=document.getElementById("print-total"),O=document.getElementById("filterStatus"),q=document.getElementById("filterGender"),P=document.getElementById("rosterList");let w=[],L=new Set(I.filter(t=>t.default||t.always).map(t=>t.id));B&&(me.textContent=B,be.textContent=B),j&&(he.innerHTML=`Ngày khởi hành: <span class="font-bold text-csr-orange">${j}</span>`,fe.textContent=j);const ve=()=>{const t=document.getElementById("column-toggles");t.innerHTML=I.filter(e=>!e.always&&!e.default).map(e=>`
            <label class="flex items-center gap-2 cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-csr-orange/50 transition-colors">
                <input type="checkbox" value="${e.id}" class="col-toggle-cb text-csr-orange focus:ring-csr-orange rounded" ${L.has(e.id)?"checked":""}>
                <span class="text-sm font-medium text-gray-600 group-hover:text-gray-900 select-none">${e.label}</span>
            </label>
        `).join(""),document.querySelectorAll(".col-toggle-cb").forEach(e=>{e.addEventListener("change",s=>{s.target.checked?L.add(s.target.value):L.delete(s.target.value),we()})})},ye=()=>{const t=document.getElementById("table-header-row");t.innerHTML=I.map(e=>`
            <th class="p-4 whitespace-nowrap ${e.id}" data-col="${e.id}">${e.label}</th>
        `).join("")},we=()=>{I.forEach(t=>{const e=L.has(t.id),s=document.querySelector(`th[data-col="${t.id}"]`);s&&(e?s.classList.remove("col-hidden"):s.classList.add("col-hidden")),document.querySelectorAll(`td[data-col="${t.id}"]`).forEach(o=>{e?o.classList.remove("col-hidden"):o.classList.add("col-hidden")})})},V=t=>{if(!t)return null;t.includes(" - ")&&(t=t.split(" - ")[0].trim()),t.includes("T")&&(t=t.split("T")[0]);const e=t.split(/[-/.]/);return e.length===2?{day:parseInt(e[0]),month:parseInt(e[1]),year:null}:e.length===3?e[0].length===4?{day:parseInt(e[2]),month:parseInt(e[1]),year:parseInt(e[0])}:{day:parseInt(e[0]),month:parseInt(e[1]),year:parseInt(e[2])}:null},$=V(T),ke=t=>{if(!$)return!0;const e=V(t);return!(!e||e.day!==$.day||e.month!==$.month||e.year&&$.year&&e.year!==$.year)},K=async()=>{try{if(H)try{const n=await(await fetch(`/api/guides?schedule_id=${H}`)).json();if(n&&n.length>0){const r=document.getElementById("rosterGuidesSection"),a=document.getElementById("rosterGuidesList"),u={"Hướng Dẫn Viên":"bg-blue-100 text-blue-700 border-blue-200",Leader:"bg-purple-100 text-purple-700 border-purple-200",Photo:"bg-pink-100 text-pink-700 border-pink-200",Guider:"bg-cyan-100 text-cyan-700 border-cyan-200","Hậu Cần":"bg-amber-100 text-amber-700 border-amber-200","Học Việc":"bg-gray-100 text-gray-600 border-gray-200"};r.classList.remove("hidden"),a.innerHTML=n.map(d=>`
                                <div class="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-sm print:shadow-none print:border-gray-400">
                                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${u[d.role]||"bg-gray-100 text-gray-600 border-gray-200"} uppercase tracking-wide print:border-black print:text-black">${d.role}</span>
                                    <span class="font-bold text-gray-900 text-sm print:text-black">${d.full_name}</span>
                                    ${d.phone?`<a href="tel:${d.phone}" class="text-xs text-gray-500 hover:text-indigo-600 font-medium ml-1 print:text-black print:no-underline">(${d.phone})</a>`:""}
                                </div>
                            `).join("")}}catch(o){console.error("Error loading guides:",o)}const e=await(await fetch("/api/bookings")).json();console.log("[Roster] targetTour:",B,"targetDateStr:",T,"targetParsed:",$),console.log("[Roster] Total bookings:",e.length),e.length>0&&e.filter(n=>n.tour&&n.tour.includes("Liêng")).slice(0,3).forEach(n=>console.log("[Roster] Sample Liêng:",{tour:n.tour,date:n.date,parsed:V(n.date)})),w=e.filter(o=>{if(H){if(String(o.schedule_id)===String(H))return!0;if(!(!ue&&!o.schedule_id))return!1}let n=!0,r=!0;if(B){const a=Q(o.tour),u=Q(B);n=a===u||a.includes(u)||u.includes(a)}return T&&(r=ke(o.date)),n&&r}),console.log("[Roster] Matched bookings:",w.length);const s=document.getElementById("filterSort")?.value||"newest";s==="newest"?w.sort((o,n)=>parseInt(n.id)-parseInt(o.id)):w.sort((o,n)=>parseInt(o.id)-parseInt(n.id)),console.log(`[Roster] Sorted bookings (${s}):`,w.map(o=>o.id)),D()}catch(t){console.error("Lỗi khi tải dữ liệu đoàn:",t),P.innerHTML='<tr><td colspan="12" class="p-8 text-center text-red-500 font-bold">Lỗi khi tải dữ liệu. Vui lòng tải lại trang.</td></tr>'}},D=()=>{const t=O.value.toLowerCase(),e=q.value.toLowerCase(),s=document.getElementById("filterSearch")?.value?.toLowerCase()||"",o=w.filter(r=>{if(s&&!`${r.name} ${r.phone} ${r.address} ${r.medal_name} ${r.customer_id}`.toLowerCase().includes(s))return!1;const a=(r.status||"").toLowerCase();if(!(t===""||t==="chờ cọc"&&(a.includes("chờ cọc")||a.includes("chờ xác nhận"))||t==="đã cọc"&&(a.includes("đã cọc")||a.includes("hoàn tất")||a.includes("hoàn thành"))||t==="đã hủy"&&a.includes("hủy")))return!1;const d=(r.gender||"").toLowerCase();return e===""||d===e}),n=o.filter(r=>r.status!=="Đã hủy"&&r.status!=="Bảo lưu");if(document.getElementById("text-visible-count").textContent=n.length,xe.textContent=n.length,o.length===0){P.innerHTML='<tr><td colspan="12" class="p-12 text-center text-gray-500 bg-gray-50">Không tìm thấy khách hàng nào khớp với điều kiện lọc.</td></tr>';return}P.innerHTML=o.map((r,a)=>{const u=a%2===0,i=r.status==="Đã hủy"||r.status==="Bảo lưu"?"bg-gray-100 opacity-60":u?"bg-white":"bg-gray-50/40";return`<tr onclick="if(!event.target.closest('.seat-badge') && !event.target.closest('a')) { if(window.actionEdit) window.actionEdit('${r.id}'); else alert('Chưa tải xong logic chỉnh sửa!'); }" class="${i} hover:bg-amber-50/40 transition-colors border-b border-gray-100 group row-clickable cursor-pointer" data-booking-id="${r.id}">`+I.map(l=>`
                    <td class="px-4 py-3 align-middle ${l.id==="col-extra"?"min-w-[220px]":""} ${L.has(l.id)?"":"col-hidden"}" data-col="${l.id}">
                        ${l.render(r,a)}
                    </td>
                `).join("")+"</tr>"}).join("")},Ee=()=>{const t=I.filter(l=>L.has(l.id)),e=O.value.toLowerCase(),s=q.value.toLowerCase(),o=document.getElementById("filterSearch")?.value?.toLowerCase()||"",n=w.filter(l=>{if(o&&!`${l.name} ${l.phone} ${l.address} ${l.medal_name} ${l.customer_id}`.toLowerCase().includes(o))return!1;const m=(l.status||"").toLowerCase();if(!(e===""||e==="chờ cọc"&&(m.includes("chờ cọc")||m.includes("chờ xác nhận"))||e==="đã cọc"&&(m.includes("đã cọc")||m.includes("hoàn tất")||m.includes("hoàn thành"))||e==="đã hủy"&&m.includes("hủy")))return!1;const h=(l.gender||"").toLowerCase();return s===""||h===s});let r=`
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
        `;n.forEach((l,m)=>{r+="<tr>",t.forEach(p=>{let h="";if(p.id==="col-stt")h=m+1;else if(p.id==="col-name")h=l.name||"";else if(p.id==="col-order-id")h=l.id||"";else if(p.id==="col-address")h=l.address||"";else if(p.id==="col-phone")h=l.phone?String(l.phone):"";else if(p.id==="col-diet")h=l.diet==="Ăn chay"||l.diet==="Chay"||l.diet==="Có"?"Có":"Không";else if(p.id==="col-pole")h=l.trekking_pole==="Có"?"Có":"Không";else if(p.id==="col-status")h=l.status||"";else if(p.id==="col-extra"){const c=l.services_booked;if(c&&c!=="[]"&&c!=="null"&&c!==""){const f=b=>b.map(g=>{const v=g.label||g.name||g.title||"",y=g.price&&Number(g.price)>0?` (+${Number(g.price).toLocaleString("vi-VN")}đ)`:"";return(v+y).trim()}).filter(Boolean).join(", ");if(Array.isArray(c))h=f(c);else if(typeof c=="string"&&c.trim().startsWith("["))try{h=f(JSON.parse(c))}catch{const g=c.match(/label:\s*['"]([^'"]+)['"]/g)||[],v=c.match(/price:\s*(\d+)/g)||[];g.length>0&&(h=g.map((y,x)=>{const S=y.replace(/label:\s*['"]/,"").replace(/['"]$/,"").trim(),_=v[x]?Number(v[x].replace(/price:\s*/,"")):0;return(S+(_>0?` (+${_.toLocaleString("vi-VN")}đ)`:"")).trim()}).filter(Boolean).join(", "))}}h||(h=l.extra_services||"")}else{const c=String(p.render(l,m)),f=document.createElement("DIV");f.innerHTML=c,h=f.textContent||f.innerText||""}const E=p.id==="col-phone"||p.id==="col-cccd";r+=`<td ${E?'class="num"':""}>${h}</td>`}),r+="</tr>"}),r+=`
                    </tbody>
                </table>
            </body>
            </html>
        `;const a=new Blob(["\uFEFF",r],{type:"application/vnd.ms-excel;charset=utf-8"}),u=URL.createObjectURL(a),d=`DS_Doan_${B||"Tour"}_${j||"Date"}.xls`.replace(/[/\\?%*:|"<>]/g,"-"),i=document.createElement("a");i.setAttribute("href",u),i.setAttribute("download",d),document.body.appendChild(i),i.click(),document.body.removeChild(i)},Z={solati_16:{label:"🚐 Solati 16 chỗ",totalSeats:15},limo_34:{label:"🚌 Limousine 34 chỗ",totalSeats:34},sleeper_45:{label:"🛏️ Giường Nằm 45 chỗ",totalSeats:46}},Se=t=>{if(t==="limo_34")return{type:"limo",floors:[{label:null,rows:[[{n:"C1"},{n:"C2"},null,{n:"B1"},{n:"B2"},null,{n:"A1"},{n:"A2"},{n:"LÁI",driver:!0}],[{n:"C3"},{n:"C4"},null,{n:"B3"},{n:"B4"},null,{n:"A3"},{n:"A4"}],[{n:"C5"},{n:"C6"},null,{n:"B5"},{n:"B6"},null,{n:"A5"},{n:"A6"}],[{n:"C7"},{n:"C8"},null,{n:"B7"},{n:"B8"},null,{n:"A7"},{n:"A8"}],[{n:"C9"},{n:"C10"},null,{n:"B9"},{n:"B10"},null,{n:"A9"},{n:"A10"}],[{n:"C11"},{n:"C12"},null,null,null,null,{n:"A11"},{n:"A12"}]]}],legend:['<span class="font-bold text-gray-600">Dãy C</span> (cửa lên)','<span class="font-bold text-gray-600">Dãy B</span> (giữa)','<span class="font-bold text-gray-600">Dãy A</span> (tài xế)']};if(t==="sleeper_45"){const e=(s,o,n)=>{const r=Array.from({length:n-o+1},(u,d)=>`${s}${o+d}`),a=[];for(let u=0;u<r.length;u+=4){const d=[];for(let i=0;i<4;i++)i===2&&d.push(null),d.push(r[u+i]?{n:r[u+i]}:null);a.push(d)}return a};return{type:"sleeper",floors:[{label:"🏠 Tầng Dưới",floorKey:"down",rows:e("A",1,23)},{label:"🏥 Tầng Trên",floorKey:"up",rows:e("B",1,23)}],legend:null}}return{type:"solati",floors:[{label:null,rows:[[{n:"LÁI",driver:!0},null,{n:1},{n:2}],[{n:3},{n:4},null,{n:5}],[{n:6},{n:7},null,{n:8}],[{n:9},{n:10},null,{n:11}],[{n:12},{n:13},{n:14},{n:15}]]}],legend:null}},ee=Z[Y]||Z.solati_16;let z=0;const A=()=>{const t=document.getElementById("seatMapGrid");if(!t)return;const e={};w.forEach(i=>{const l=i.status==="Đã hủy"||i.status==="Bảo lưu";i.seat_number&&!l&&(e[String(i.seat_number)]=i)});const s=Object.keys(e).length,o=ee.totalSeats,n=document.getElementById("seat-map-count"),r=document.getElementById("seat-count-badge"),a=document.getElementById("vehicle-label");n&&(n.textContent=`${s}/${o}`),r&&(r.textContent=`💺 ${s}/${o} ghế đã xếp`),a&&(a.textContent=ee.label);const u=Se(Y),d=(i,l)=>{if(!i)return'<div class="w-12 h-10 flex-shrink-0"></div>';if(i.driver)return'<div class="seat-btn seat-driver w-10 h-9 rounded-lg flex flex-col items-center justify-center text-[8px] font-bold flex-shrink-0"><span>🚗</span><span>LÁI</span></div>';const m=String(i.n),p=l[m],h=p?(p.name||"").split(" ").pop().slice(0,4):"",c=/[A-Z]/.test(m)?"w-11 h-9":"w-12 h-10";return`<button
                class="seat-btn ${p?"seat-assigned":"seat-empty"} ${c} rounded-lg flex flex-col items-center justify-center flex-shrink-0 group relative"
                data-seat="${m}"
                data-booking-id="${p?p.id:""}"
                title="${p?p.name+" — Ghế "+m:"Ghế "+m+" (trống)"}">
                <span class="text-[9px] font-bold leading-none">${m}</span>
                ${p?`<span class="text-[8px] leading-none mt-0.5 truncate max-w-[42px] px-0.5">${h}</span>`:""}
            </button>`};if(u.type==="sleeper")t.innerHTML=`
                <div class="flex gap-2 mb-3">
                    ${u.floors.map((i,l)=>`
                        <button class="floor-tab flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${z===l?"bg-csr-orange text-white":"bg-gray-100 text-gray-500 hover:bg-gray-200"}" data-floor="${l}">
                            ${i.label}
                        </button>
                    `).join("")}
                </div>
                <div class="floor-content">
                    ${u.floors.map((i,l)=>`
                        <div class="floor-rows ${z===l?"":"hidden"}" data-floor="${l}">
                            ${i.rows.map(m=>`
                                <div class="flex items-center justify-center gap-1 mb-1">
                                    ${m.map(p=>d(p,e)).join("")}
                                </div>
                            `).join("")}
                        </div>
                    `).join("")}
                </div>`,t.querySelectorAll(".floor-tab").forEach(i=>{i.addEventListener("click",()=>{z=parseInt(i.dataset.floor),A()})});else{let i="";u.legend&&(i+=`<div class="flex justify-around text-[9px] text-gray-400 mb-2 px-1">${u.legend.map(l=>`<span>${l}</span>`).join("")}</div>`),u.floors[0].rows.forEach(l=>{const m=l.map(p=>d(p,e)).join("");i+=`<div class="flex items-center justify-center gap-1 mb-1">${m}</div>`}),t.innerHTML=i}t.querySelectorAll(".seat-btn[data-seat]").forEach(i=>{i.addEventListener("click",()=>te(i.dataset.seat,i.dataset.bookingId))})},te=(t,e)=>{const s=document.getElementById("seatModal"),o=document.getElementById("seatModalTitle"),n=document.getElementById("seatModalBody");if(!s||!o||!n)return;o.textContent=e?`Ghế ${t} — ${w.find(d=>String(d.id)===String(e))?.name||"?"}`:`Ghế ${t} — Chưa có khách`;const r=w.find(d=>String(d.id)===String(e));let a="";r&&(a+=`<div class="mb-3 p-3 bg-orange-50 border border-orange-200 rounded-xl text-sm">
                <div class="font-bold text-gray-800">${r.name}</div>
                <div class="text-gray-500 text-xs">${r.phone||""} ${r.gender?"· "+r.gender:""}</div>
                ${r.pickup_point?`<div class="text-xs text-blue-600 mt-1">📍 ${r.pickup_point}</div>`:""}
            </div>
            <button class="w-full py-2 text-sm font-bold text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition-colors mb-3" id="btnRemoveSeat">
                ✖ Bỏ gán ghế này
            </button>
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Chọn khách khác:</div>`);const u=w.filter(d=>!d.seat_number||String(d.id)===String(e));u.length===0?a+='<p class="text-gray-400 text-sm text-center py-4">Tất cả khách đã được xếp ghế.</p>':a+=u.map(d=>`
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-colors mb-1 btn-assign-passenger" data-booking-id="${d.id}" data-seat="${t}">
                    <div class="font-bold text-gray-800 text-sm">${d.name}</div>
                    <div class="text-xs text-gray-500">${d.phone||""} ${d.gender?"· "+d.gender:""} ${d.pickup_point?"📍 "+d.pickup_point:""}</div>
                </button>`).join(""),n.innerHTML=a,s.style.display="flex",n.querySelector("#btnRemoveSeat")?.addEventListener("click",async()=>{await F(e,null),s.style.display="none"}),n.querySelectorAll(".btn-assign-passenger").forEach(d=>{d.addEventListener("click",async()=>{const i=d.dataset.bookingId,l=d.dataset.seat,m=w.find(p=>String(p.seat_number)===String(l)&&String(p.id)!==String(i));m&&await F(m.id,null),await F(i,l),s.style.display="none"})})},F=async(t,e)=>{try{await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,seat_number:e||null})});const s=w.find(o=>String(o.id)===String(t));s&&(s.seat_number=e||null),D(),A()}catch(s){console.error("Lỗi lưu ghế:",s),alert("Lỗi lưu số ghế. Vui lòng thử lại.")}};O.addEventListener("change",D),q.addEventListener("change",D),document.getElementById("filterSearch")?.addEventListener("input",D),document.getElementById("filterSort")?.addEventListener("change",K),document.getElementById("btnExportPDF").addEventListener("click",()=>window.print()),document.getElementById("btnExportExcel").addEventListener("click",()=>Ee()),document.getElementById("seatModalClose")?.addEventListener("click",()=>{document.getElementById("seatModal").style.display="none"}),document.getElementById("seatModal")?.addEventListener("click",t=>{t.target===document.getElementById("seatModal")&&(document.getElementById("seatModal").style.display="none")}),document.getElementById("rosterList")?.addEventListener("mouseover",t=>{const e=t.target.closest("tr[data-booking-id]");if(!e)return;document.querySelectorAll(".seat-btn").forEach(n=>n.classList.remove("seat-highlighted"));const s=e.dataset.bookingId,o=w.find(n=>String(n.id)===String(s));o?.seat_number&&document.querySelector(`.seat-btn[data-seat="${o.seat_number}"]`)?.classList.add("seat-highlighted")}),document.getElementById("rosterList")?.addEventListener("click",t=>{const e=t.target.closest(".seat-badge");if(!e)return;const s=e.dataset.id,o=w.find(n=>String(n.id)===String(s));te(o?.seat_number||"?",s)});let N=[],ne=[],J=[];const Ce=async()=>{try{const[t,e,s]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules"),fetch("/api/users")]);N=t.ok?await t.json():[],ne=e.ok?await e.json():[],J=s.ok?await s.json():[],Ie("edit-tour"),Be("edit-sale")}catch(t){console.error("Lỗi tải tours/schedules:",t)}},Be=t=>{const e=document.getElementById(t);e&&(e.innerHTML='<option value="">-- Website --</option>',J.forEach(s=>{const o=document.createElement("option");o.value=s.id,o.textContent=`${s.full_name||s.fullName} (${s.role})`,e.appendChild(o)}))},Ie=t=>{const e=document.getElementById(t);if(!e)return;const s=e.value,o=e.options[0]?.outerHTML||'<option value="">-- Chọn Tour --</option>';e.innerHTML=o,N.filter(n=>n.is_visible!==!1).forEach(n=>{const r=document.createElement("option");r.value=n.name,r.textContent=n.name,n.name===s&&(r.selected=!0),e.appendChild(r)})},se=(t,e,s,o)=>{const n=document.getElementById(t);if(!n||(n.innerHTML='<option value="">-- Chọn Lịch --</option>',!e))return;const r=ne.filter(a=>a.tour_name?a.tour_name===e||e.includes(a.tour_name)||a.tour_name.includes(e):!1);if(r.length===0){n.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}r.sort((a,u)=>new Date(a.start_date)-new Date(u.start_date)).forEach(a=>{const u=parseInt(a.booked_count)||0,d=(a.slots||0)-u,i=new Date(a.start_date),l=a.end_date?new Date(a.end_date):null,m=c=>`${c.getDate().toString().padStart(2,"0")}/${(c.getMonth()+1).toString().padStart(2,"0")}`;let p=m(i);l&&(p+=" - "+m(l)),a.group_label&&(p+=` · ${a.group_label}`),p+=` (${d>=0?d:0} chỗ trống)`;const h=document.createElement("option"),E=`${i.getDate().toString().padStart(2,"0")}/${(i.getMonth()+1).toString().padStart(2,"0")}/${i.getFullYear()}`;h.value=`${a.id}::${E}`,h.dataset.scheduleId=a.id,h.dataset.date=E,h.textContent=p,d<=0&&(h.disabled=!0,h.textContent=p.replace("chỗ trống","HẾT CHỖ")),(o&&String(a.id)===String(o)||!o&&s&&E===s)&&(h.selected=!0),n.appendChild(h)})},re=document.getElementById("edit-tour");re&&re.addEventListener("change",t=>{se("edit-date",t.target.value)}),window.closeEditModal=()=>{document.getElementById("editModal").classList.remove("opacity-100");const t=document.getElementById("editModalContent");t&&(t.classList.remove("scale-100","translate-y-0"),t.classList.add("scale-95","translate-y-4")),setTimeout(()=>document.getElementById("editModal").classList.add("hidden"),300)},window.updateEditRemaining=()=>{const t=parseInt(document.getElementById("edit-total")?.value)||0,e=parseInt(document.getElementById("edit-discount")?.value)||0,s=parseInt(document.getElementById("edit-deposit")?.value)||0;let o=0;document.querySelectorAll(".preset-service-check:checked").forEach(u=>{o+=parseInt(u.dataset.price)||0}),document.querySelectorAll(".service-price-input").forEach(u=>{o+=parseInt(u.value)||0});const r=t-e+o-s,a=document.getElementById("edit-remaining");a&&(a.textContent=r>0?r.toLocaleString("vi-VN")+"đ":"0đ")},window.updateServicesTotal=()=>{let t=0;document.querySelectorAll(".preset-service-check:checked").forEach(o=>{t+=parseInt(o.dataset.price)||0}),document.querySelectorAll(".service-price-input").forEach(o=>{t+=parseInt(o.value)||0});const e=document.getElementById("servicesTotalDisplay");e&&(e.textContent=t.toLocaleString("vi-VN")+"đ");const s=document.getElementById("servicesTotalRow");return s&&s.classList.toggle("hidden",t===0),window.updateEditRemaining(),t},window.addServiceRow=(t="",e=0)=>{const s=document.getElementById("servicesContainer"),o=document.getElementById("emptyServicesMsg"),n=document.getElementById("servicesTotalRow");if(!s)return;o&&o.classList.add("hidden"),n&&n.classList.remove("hidden");const r=document.createElement("div");r.className="service-row flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5",r.innerHTML=`
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
        `,r.querySelector(".remove-service-btn").addEventListener("click",()=>{r.remove(),s.querySelectorAll(".service-row").length===0&&(o&&o.classList.remove("hidden"),n&&n.classList.add("hidden")),window.updateServicesTotal()}),r.querySelector(".service-price-input").addEventListener("input",window.updateServicesTotal),s.appendChild(r),window.updateServicesTotal()};const oe=document.getElementById("addServiceBtn");oe&&oe.addEventListener("click",()=>window.addServiceRow()),window.actionEdit=async t=>{try{const e=w.find(c=>c.id==t);if(!e){alert("Không tìm thấy thông tin khách hàng!");return}document.getElementById("edit-id").value=t,document.getElementById("edit-name").value=e.name||"",document.getElementById("edit-phone").value=e.phone||"",document.getElementById("edit-medal-name").value=e.medal_name||"",document.getElementById("edit-tour").value=e.tour||"",se("edit-date",e.tour||"",e.date||"",e.schedule_id||null),(c=>{let f=c.dob||"";if(f&&f.includes("/")){const b=f.split("/");b.length===3&&(f=`${b[2]}-${b[1].padStart(2,"0")}-${b[0].padStart(2,"0")}`)}document.getElementById("edit-dob").value=f,document.getElementById("edit-gender").value=c.gender||"Khác",document.getElementById("edit-allergy").value=c.allergy||c.medical_notes||"",document.getElementById("edit-address").value=c.address||"",document.getElementById("edit-diet").value=c.diet||c.dietary||"",document.getElementById("edit-trekking-pole").value=c.trekking_pole||"Không",document.getElementById("edit-id-card").value=c.id_card||c.cccd||""})(e),document.getElementById("edit-status").value=e.status||"Chờ xác nhận cọc",document.getElementById("edit-commitments").checked=!!e.commitments,document.getElementById("edit-special").value=e.special||"";try{const c=localStorage.getItem("csr_user");if(c&&JSON.parse(c).role==="admin"){const b=document.getElementById("edit-sale-container");b&&b.classList.remove("hidden");const g=document.getElementById("edit-sale");g&&(g.value=e.sale_id||"")}}catch{}const o=(parseInt(e.total_price)||0)+(parseInt(e.discount)||0);document.getElementById("edit-total").value=o,document.getElementById("edit-discount").value=e.discount||0,document.getElementById("edit-deposit").value=e.deposit||0;const n=parseInt(e.deposit_required);document.getElementById("edit-deposit-required").value=isNaN(n)?1e6:n,window.updateEditRemaining();const r=document.getElementById("servicesContainer"),a=document.getElementById("emptyServicesMsg"),u=document.getElementById("servicesTotalRow"),d=document.getElementById("presetServicesBlock"),i=document.getElementById("presetServicesList"),l=document.getElementById("servicesDivider");let m=[];try{if(e.services_booked){const c=typeof e.services_booked=="string"?JSON.parse(e.services_booked):e.services_booked;Array.isArray(c)&&(m=c)}}catch{}if(i&&d){i.innerHTML="";const c=N.find(b=>b.name===e.tour);let f=[];try{if(c?.services){const b=typeof c.services=="string"?JSON.parse(c.services):c.services;Array.isArray(b)&&(f=b)}}catch{}f.length>0?(d.classList.remove("hidden"),l&&l.classList.remove("hidden"),f.forEach(b=>{const g=m.some(y=>(y.label||y.name||"").toLowerCase()===(b.label||"").toLowerCase()),v=document.createElement("label");v.className="preset-service-card flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all "+(g?"border-green-400 bg-green-50":"border-gray-100 bg-gray-50"),v.innerHTML=`
                            <input type="checkbox" class="preset-service-check w-4 h-4 rounded accent-green-500 shrink-0" data-label="${(b.label||"").replace(/"/g,"&quot;")}" data-price="${b.price||0}" ${g?"checked":""}>
                            <div class="flex-1 min-w-0"><div class="font-bold text-sm text-gray-800">${b.label||""}</div></div>
                            <div class="text-sm font-black text-green-600 shrink-0">+${parseInt(b.price||0).toLocaleString("vi-VN")}đ</div>
                        `,v.querySelector(".preset-service-check").addEventListener("change",y=>{v.className="preset-service-card flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all "+(y.target.checked?"border-green-400 bg-green-50":"border-gray-100 bg-gray-50"),window.updateServicesTotal()}),i.appendChild(v)})):(d.classList.add("hidden"),l&&l.classList.add("hidden"))}const p=document.getElementById("edit-pickup-point");if(p){const c=N.find(x=>x.name===e.tour);let f=[];try{if(c?.pickup_points){const x=typeof c.pickup_points=="string"?JSON.parse(c.pickup_points):c.pickup_points;Array.isArray(x)&&(f=x)}}catch{}p.innerHTML='<option value="">— Chưa chọn —</option>',f.forEach(x=>{const S=(x.label||x.name||x)+(x.time?` (${x.time})`:""),_=x.label||x.name||x,C=document.createElement("option");C.value=_,C.textContent=S,p.appendChild(C)});const b=document.createElement("option");b.value="__custom__",b.textContent="✏️ Khác (nhập tay)",p.appendChild(b);const g=document.getElementById("edit-pickup-custom"),v=x=>{g&&(x==="__custom__"?(g.classList.remove("hidden"),g.focus()):(g.classList.add("hidden"),g.value=""))},y=e.pickup_point||"";y&&(f.some(S=>(S.label||S.name||S)===y)?p.value=y:(p.value="__custom__",g&&(g.value=y,g.classList.remove("hidden")))),p.addEventListener("change",()=>v(p.value))}if(r){r.querySelectorAll(".service-row").forEach(g=>g.remove());const c=N.find(g=>g.name===e.tour);let f=new Set;try{const g=c?.services,v=g?typeof g=="string"?JSON.parse(g):g:[];Array.isArray(v)&&v.forEach(y=>f.add((y.label||"").toLowerCase()))}catch{}const b=m.filter(g=>!f.has((g.label||g.name||"").toLowerCase()));b.length>0?(a&&a.classList.add("hidden"),u&&u.classList.remove("hidden"),b.forEach(g=>window.addServiceRow(g.label||g.name||"",g.price||0))):a&&a.classList.remove("hidden"),window.updateServicesTotal()}const h=document.getElementById("editModal"),E=document.getElementById("editModalContent");h&&E&&(h.classList.remove("hidden"),setTimeout(()=>{h.classList.add("opacity-100"),E.classList.remove("scale-95","translate-y-4"),E.classList.add("scale-100","translate-y-0")},10))}catch(e){console.error("Lỗi khi mở form Edit:",e),alert("Lỗi khi mở form Edit: "+e.message)}};const ae=document.getElementById("editForm");ae&&ae.addEventListener("submit",async t=>{t.preventDefault();const e=t.target.querySelector('button[type="submit"]'),s=e.textContent;e.textContent="Đang lưu cập nhật...",e.disabled=!0;try{const o=document.getElementById("edit-id").value,n=document.getElementById("edit-name").value,r=document.getElementById("edit-phone").value,a=document.getElementById("edit-medal-name").value,u=document.getElementById("edit-tour").value,d=document.getElementById("edit-date").value;let i=d,l;if(d&&d.includes("::")){const k=d.split("::");l=parseInt(k[0])||null,i=k[1]}const m=document.getElementById("edit-dob").value,p=document.getElementById("edit-gender").value,h=document.getElementById("edit-status").value,E=document.getElementById("edit-allergy").value,c=document.getElementById("edit-address").value,f=document.getElementById("edit-diet").value,b=document.getElementById("edit-trekking-pole").value,g=document.getElementById("edit-commitments").checked,v=document.getElementById("edit-special").value,y=document.getElementById("edit-id-card").value,x=document.getElementById("edit-pickup-point"),S=document.getElementById("edit-pickup-custom"),_=x?.value==="__custom__"?S?.value?.trim()||"":x?.value||"",C=[];document.querySelectorAll(".preset-service-check:checked").forEach(k=>{C.push({label:k.dataset.label,price:parseInt(k.dataset.price)||0})}),document.querySelectorAll(".service-row").forEach(k=>{const G=(k.querySelector(".service-label-input")?.value||"").trim(),je=parseInt(k.querySelector(".service-price-input")?.value)||0;G&&C.push({label:G,price:je})});const Te=C.length>0?JSON.stringify(C):null,W=document.getElementById("edit-sale");let R,U;if(W&&!W.parentElement.classList.contains("hidden")&&(R=W.value||null,U="Website",R)){const k=J.find(G=>String(G.id)===String(R));k&&(U=k.full_name||k.fullName)}const Le=parseInt(document.getElementById("edit-total").value)||0,le=parseInt(document.getElementById("edit-discount").value)||0,$e=parseInt(document.getElementById("edit-deposit").value)||0,ie=parseInt(document.getElementById("edit-deposit-required").value),_e=isNaN(ie)?1e6:ie,Me={id:o,name:n,phone:r,medal_name:a,tour:u,date:i,dob:m,gender:p,status:h,allergy:E,address:c,diet:f,trekking_pole:b,commitments:g,special:v,id_card:y,pickup_point:_,services_booked:Te,sale_id:R,sale_name:U,total_price:Le-le,discount:le,deposit:$e,deposit_required:_e,...l!==void 0?{schedule_id:l}:{}},de=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Me)});if(de.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),window.closeEditModal(),K();else{const k=await de.json();throw new Error(k.error||"Gặp sự cố khi Cập nhật API.")}}catch(o){alert("❌ Lỗi Cập nhật: "+o.message)}finally{e.textContent=s,e.disabled=!1}}),ve(),ye(),Promise.all([K(),Ce()]).then(()=>A()).catch(()=>A())};export{Re as afterRender,Ae as render};
