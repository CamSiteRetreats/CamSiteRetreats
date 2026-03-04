import{S as rt,H as ct}from"./Header-CvqOcIss.js";const mt=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${rt()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${ct()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-6">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Khách Đăng Ký & Tham Gia Tour</h1>
                          <p class="text-gray-500 text-sm">Quản lý trạng thái đơn hàng và thông tin chi tiết đoàn.</p>
                      </div>
                      <button id="addBookingBtn" class="btn-primary flex items-center gap-2 shadow-lg shadow-csr-orange/20">
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                          Thêm Khách Thủ Công
                      </button>
                  </div>

                  <!-- Tab Navigation -->
                  <div class="border-b border-gray-200">
                      <nav class="-mb-px flex space-x-8" aria-label="Tabs" id="bookingTabsNav">
                          <button data-tab="consult" class="tab-btn border-csr-orange text-csr-orange whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                              Khách Hàng Tư Vấn
                          </button>
                          <button data-tab="pending" class="tab-btn border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                              Khách Hàng Đăng Ký (Chờ Cọc)
                          </button>
                          <button data-tab="upcoming" class="tab-btn border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                              Khách Sắp Tham Gia
                          </button>
                          <button data-tab="completed" class="tab-btn border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                              Khách Chờ Lên Xe
                          </button>
                      </nav>
                  </div>

                  <!-- Dashboard Báo Cáo Nhanh (Mini) -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div class="glass-panel p-5 border-l-4 border-csr-orange flex items-center justify-between">
                          <div>
                               <p id="statTitle1" class="text-sm text-gray-500 font-medium mb-1">Tổng Khách (Chờ Cọc)</p>
                               <h3 id="statTotalCustomers" class="text-2xl font-black text-gray-900">0</h3>
                          </div>
                          <div class="w-12 h-12 bg-csr-orange/10 rounded-full flex items-center justify-center text-csr-orange">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                          </div>
                      </div>
                      <div class="glass-panel p-5 border-l-4 border-blue-500 flex items-center justify-between">
                          <div>
                              <p id="statTitle2" class="text-sm text-gray-500 font-medium mb-1">Khách Chưa Tư Vấn (Mới)</p>
                              <h3 id="statTotalRevenue" class="text-2xl font-black text-gray-900">0 đơn</h3>
                          </div>
                          <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                      </div>
                      <div class="glass-panel p-5 border-l-4 border-green-500 flex items-center justify-between">
                          <div>
                              <p id="statTitle3" class="text-sm text-gray-500 font-medium mb-1">Đã Có Sale Giữ Chỗ</p>
                              <h3 id="statTotalCollected" class="text-2xl font-black text-gray-900">0 đơn</h3>
                          </div>
                          <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                          </div>
                      </div>
                  </div>

                  <!-- Advanced Search & Filter Bar -->
                  <div class="glass-panel p-4 flex flex-wrap gap-4 items-center justify-between bg-white border border-gray-200">
                     <div class="flex flex-wrap gap-3 flex-1 min-w-[300px]">
                         <div class="relative min-w-[200px] flex-1">
                            <svg class="w-5 h-5 absolute left-3 top-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <input type="text" id="filterSearch" placeholder="Tìm tên, SĐT, mã CRM..." class="input-field pl-10 h-10 w-full text-sm">
                         </div>
                         <select id="filterTour" class="input-field h-10 text-sm max-w-[170px]">
                             <option value="">Tất cả Tour</option>
                         </select>
                         <select id="filterDate" class="input-field h-10 text-sm max-w-[150px]">
                             <option value="">Tất cả Ngày</option>
                         </select>
                         <select id="filterSale" class="input-field h-10 text-sm max-w-[150px]">
                             <option value="">Tất cả Sale</option>
                         </select>
                         <select id="filterStatus" class="input-field h-10 text-sm max-w-[170px]">
                             <option value="">Tất cả Trạng Thái</option>
                             <option value="Chờ tư vấn">Chờ tư vấn</option>
                             <option value="Chờ cọc">Chờ cọc</option>
                             <option value="Chờ xác nhận cọc">Chờ xác nhận cọc</option>
                             <option value="Đã cọc">Đã cọc</option>
                             <option value="Đã cọc (Chờ đi)">Đã cọc (Chờ đi)</option>
                             <option value="Hoàn thành">Hoàn thành</option>
                         </select>
                     </div>
                     <button id="exportExcelBtn" class="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors border border-green-200 shadow-sm h-10 whitespace-nowrap">
                         <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                         Xuất Excel
                     </button>
                  </div>

                  <!-- Table Content -->
                  <div class="glass-panel overflow-hidden">
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse">
                              <thead id="bookingsTableHead">
                                  <!-- Sẽ được render động bằng JavaScript -->
                              </thead>
                              <tbody id="bookingsTableBody" class="divide-y divide-csr-border">
                                  <tr>
                                      <td colspan="4" class="p-8 text-center text-gray-500">
                                          <svg class="animate-spin h-6 w-6 text-csr-orange mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                          Đang tải danh sách Đơn Hàng từ hệ thống...
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
               </div>
          </main>
        </div>
      </div>

      <!-- ROW ACTION MODAL (Hiển thị khi click vào Dòng Khách Hàng) -->
      <div id="rowActionModal" class="fixed inset-0 z-[60] bg-gray-900/40 backdrop-blur-sm hidden flex items-center justify-center p-4">
          <div class="bg-white rounded-[16px] shadow-2xl max-w-[320px] w-full transform transition-all">
              <div class="px-5 pt-6 pb-4 flex justify-between items-start">
                  <div>
                      <h3 class="font-bold text-gray-900 text-[17px] leading-tight mb-1" id="ramName">Tên Khách Hàng</h3>
                      <p class="text-[12px] text-gray-500 font-medium" id="ramPhone">SĐT / Mã CRM</p>
                  </div>
                  <button type="button" class="text-gray-400 hover:text-gray-700 bg-white rounded-full p-0.5 border border-gray-200 flex-shrink-0" onclick="document.getElementById('rowActionModal').classList.add('hidden')">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              <div class="px-3 pb-4 space-y-1.5" id="ramActions">
                  <!-- Actions injected here -->
              </div>
              <div class="px-5 pb-5 mt-2">
                  <button onclick="document.getElementById('rowActionModal').classList.add('hidden')" class="px-4 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors w-full">Đóng</button>
              </div>
          </div>
      </div>

      <!-- Add Manual Booking Modal with Auto-Fill capability -->
      <div id="bookingModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-gray-50 border border-gray-200 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300 transform" id="bookingModalContent">
              <div class="sticky top-0 bg-gray-50/95 backdrop-blur z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 class="text-xl font-bold text-gray-900">Thêm Khách Hàng (Tạo Đơn)</h2>
                  <button type="button" class="text-gray-500 hover:text-gray-900" onclick="document.getElementById('bookingModal').classList.add('hidden')">
                      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              
              <div class="p-6">
                  <!-- Ô 1: Tìm Khách Hàng Cũ -->
                  <div class="mb-6 p-4 bg-csr-orange/5 border border-csr-orange/20 rounded-lg">
                      <h3 class="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                          <svg class="w-4 h-4 text-csr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                          Tìm Khách Hàng Cũ
                      </h3>
                      <div class="relative">
                          <input type="text" id="smartSearch" class="input-field bg-white w-full" placeholder="Nhập mã CSR, SĐT, hoặc họ tên..." autocomplete="off">
                          <div id="searchDropdown" class="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 hidden max-h-60 overflow-y-auto"></div>
                      </div>
                      <p class="text-[11px] text-gray-500 mt-2 italic">* Tìm thấy → tự động điền thông tin, link thanh toán thay cho link process.</p>
                  </div>

                  <form id="bookingForm" class="space-y-5">
                      <!-- Ô 2: Thông Tin Khách Hàng -->
                      <div class="rounded-xl border-2 border-csr-orange/40 bg-orange-50/30 p-5">
                          <div class="flex items-center gap-2 mb-4">
                              <span class="w-7 h-7 rounded-full bg-csr-orange text-white text-xs font-bold flex items-center justify-center">1</span>
                              <span class="font-bold text-gray-900">Thông Tin Khách Hàng</span>
                              <span class="text-[10px] bg-csr-orange/20 text-csr-orange px-2 py-0.5 rounded-full font-bold ml-auto">BẮT BUỘC</span>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Họ và Tên *</label>
                                  <input type="text" id="addFullName" class="input-field" required placeholder="Nhập họ và tên">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Số Điện Thoại *</label>
                                  <input type="tel" id="addPhone" class="input-field" required placeholder="0912 345 678">
                              </div>
                          </div>
                      </div>

                      <!-- Ô 3: Chọn Tour & Khởi Hành -->
                      <div class="rounded-xl border-2 border-blue-400/40 bg-blue-50/30 p-5">
                          <div class="flex items-center gap-2 mb-4">
                              <span class="w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">2</span>
                              <span class="font-bold text-gray-900">Chọn Tour Khởi Hành</span>
                              <span class="text-[10px] bg-blue-500/20 text-blue-600 px-2 py-0.5 rounded-full font-bold ml-auto">BẮT BUỘC</span>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tuyến Tour *</label>
                                  <select id="addTourName" class="input-field" required>
                                      <option value="">-- Chọn Tour --</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày Khởi Hành *</label>
                                  <select id="addTourDate" class="input-field" required>
                                      <option value="">-- Chọn Tour trước --</option>
                                  </select>
                              </div>
                          </div>

                          <!-- Giảm giá + Giá tour + Cọc -->
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-blue-200">
                              <div>
                                  <label class="block text-xs font-bold text-green-600 uppercase mb-1.5">Giảm Giá (đ)</label>
                                  <input type="number" id="addDiscount" class="input-field text-sm font-bold bg-green-50/50 text-green-700" value="0" min="0" placeholder="0">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Giá Tour (đ)</label>
                                  <input type="number" id="addTotalPrice" class="input-field text-sm font-bold" placeholder="Tự động lấy từ tour" value="0">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-csr-orange uppercase mb-1.5">Tiền Cọc (đ)</label>
                                  <input type="number" id="addDepositRequired" class="input-field text-sm font-bold bg-orange-50/50" value="1000000" placeholder="1000000">
                              </div>
                          </div>
                          <div id="priceCalculation" class="mt-3 p-3 bg-white rounded-lg border border-blue-100 text-sm hidden">
                              <div class="flex justify-between text-gray-500"><span>Giá gốc:</span><span id="calcOriginal">0đ</span></div>
                              <div class="flex justify-between text-green-600 font-bold"><span>Giảm giá:</span><span id="calcDiscount">-0đ</span></div>
                              <div class="flex justify-between text-gray-900 font-black border-t border-gray-200 pt-1 mt-1"><span>Tổng thu:</span><span id="calcTotal">0đ</span></div>
                          </div>
                      </div>

                      <!-- Ghi chú -->
                      <div class="rounded-xl border border-gray-200 bg-white p-5">
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ghi Chú (Sale / Yêu Cầu Đặc Biệt)</label>
                          <textarea id="addNote" rows="2" class="input-field resize-none text-sm" placeholder="VD: Khách chốt qua zalo, giá ưu đãi..."></textarea>
                      </div>

                      <div class="flex justify-end gap-3 pt-4">
                          <input type="hidden" id="editingBookingId" value="">
                          <input type="hidden" id="selectedCustomerId" value="">
                          <button type="button" class="px-5 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors" onclick="window.closeModal()">Hủy Lên Đơn</button>
                          <button type="submit" id="submitBookingBtn" class="btn-primary px-8">Tạo Đơn Đăng Ký</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>

      <!-- Detail Booking Modal (Read-Only) -->
      <div id="detailModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-200 ease-out">
          <div class="bg-gray-50 border border-gray-200 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl scale-95 translate-y-4 duration-300 ease-out transition-all" id="detailModalContent">
              <div class="sticky top-0 bg-gray-50/95 backdrop-blur z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 class="text-xl font-bold text-gray-900">Chi Tiết Đơn Hàng</h2>
                  <button type="button" class="text-gray-500 hover:text-gray-900" onclick="window.closeDetailModal()">
                      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              <div class="p-6">
                 <div class="space-y-4 text-sm" id="detailContentBlock">
                    <!-- Sẽ được điền bằng JS -->
                 </div>
                 <div class="mt-6 text-right">
                    <button type="button" class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition-colors" onclick="window.closeDetailModal()">Đóng</button>
                 </div>
              </div>
          </div>
      </div>

      <!-- Edit Booking Modal (Full Detail Edit) -->
      <div id="editModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300 transform relative" id="editModalContent">
              <button onclick="window.closeEditModal()" class="absolute top-5 right-5 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors z-20">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              
              <div class="p-8">
                  <h2 class="text-2xl font-bold text-gray-800 mb-6">Chỉnh Sửa Đơn Hàng Chi Tiết</h2>

                  <form id="editForm" class="space-y-5">
                      <input type="hidden" id="edit-id">

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Họ tên *</label>
                              <input type="text" id="edit-name" class="input-field bg-gray-50 font-medium" required>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">SĐT *</label>
                              <input type="tel" id="edit-phone" class="input-field bg-gray-50 font-medium" required>
                          </div>
                      </div>

                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Mã CRM / Tên In Huy Chương</label>
                          <input type="text" id="edit-medal-name" class="input-field bg-gray-50 font-bold text-csr-orange">
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tuyến Tour</label>
                              <select id="edit-tour" class="input-field bg-gray-50 font-medium max-w-full">
                                  <option value="">-- Chọn Tour --</option>
                              </select>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày đi</label>
                              <select id="edit-date" class="input-field bg-gray-50 font-mono">
                                  <option value="">-- Chọn Lịch --</option>
                              </select>
                          </div>
                      </div>

                      <!-- New Info Fields for Edit -->
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-gray-100 pt-5 mt-2">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày sinh</label>
                              <input type="date" id="edit-dob" class="input-field bg-gray-50 text-sm">
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Giới tính</label>
                              <select id="edit-gender" class="input-field bg-gray-50 text-sm">
                                  <option value="Khác">Khác</option>
                                  <option value="Nam">Nam</option>
                                  <option value="Nữ">Nữ</option>
                              </select>
                          </div>
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Trạng Thái Đơn</label>
                              <select id="edit-status" class="input-field bg-gray-50 text-sm font-medium">
                                  <option value="Chờ xác nhận cọc">Chờ xác nhận cọc</option>
                                  <option value="Đã cọc (Chờ đi)">Đã cọc (Chờ đi)</option>
                                  <option value="Hoàn thành">Hoàn thành</option>
                              </select>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Dị ứng / Ghi Chú Y Tế</label>
                              <input type="text" id="edit-allergy" class="input-field bg-gray-50 text-sm" placeholder="VD: Không có">
                          </div>
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Chế độ ăn</label>
                              <input type="text" id="edit-diet" class="input-field bg-gray-50 text-sm" placeholder="VD: Ăn chay, không hành...">
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Mượn Gậy</label>
                              <select id="edit-trekking-pole" class="input-field bg-gray-50 text-sm">
                                  <option value="Không">Không mượn</option>
                                  <option value="Có">Có mượn gậy</option>
                              </select>
                          </div>
                      </div>
                      
                      <div class="grid grid-cols-1 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Địa chỉ</label>
                              <input type="text" id="edit-address" class="input-field bg-gray-50 text-sm">
                          </div>
                      </div>

                      <div class="flex items-center gap-2 py-2">
                          <input type="checkbox" id="edit-commitments" class="w-4 h-4 text-csr-orange border-gray-300 rounded focus:ring-csr-orange">
                          <label for="edit-commitments" class="text-xs font-bold text-gray-600 uppercase">Khách đã đồng ý Cam kết sức khỏe & Nội quy</label>
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ghi Chú Đơn Hàng (Sale Note)</label>
                              <input type="text" id="edit-special" class="input-field bg-gray-50 text-sm text-blue-600 font-medium">
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-csr-orange uppercase mb-1.5">Số Tiền Cọc Cần Thu</label>
                              <input type="number" id="edit-deposit-required" class="input-field bg-orange-50/50 font-bold text-csr-orange" placeholder="1000000">
                          </div>
                      </div>

                      <div class="border-t border-gray-100 pt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tổng Tiền Tour</label>
                              <input type="number" id="edit-total" class="input-field bg-gray-50 font-bold text-lg text-gray-900 h-12">
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Khách Đã Cọc</label>
                              <input type="number" id="edit-deposit" class="input-field bg-green-50 border-green-200 font-bold text-lg text-green-700 h-12">
                          </div>
                      </div>

                      <div class="bg-red-50 p-4 rounded-xl flex justify-between items-center border border-red-100 mt-2">
                          <span class="text-sm font-bold text-red-500 uppercase flex items-center gap-2">
                             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                             Còn Lại Cần Phải Thu
                          </span>
                          <span id="edit-remaining" class="text-2xl font-black text-red-600">0đ</span>
                      </div>

                      <div class="flex gap-4 pt-6 mt-4">
                          <button type="button" onclick="window.closeEditModal()" class="flex-1 px-4 py-3.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-sm text-sm">Hủy bỏ</button>
                          <button type="submit" class="flex-1 px-4 py-3.5 bg-csr-orange text-white rounded-xl font-bold hover:bg-[#d65503] transition-colors shadow-lg shadow-csr-orange/30 text-sm">Lên Cập Nhật Mới</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    `,ht=()=>{let E=[],f="consult",A=[],q=[];const it=async()=>{try{const[e,t]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules")]);A=e.ok?await e.json():[],q=t.ok?await t.json():[],G("addTourName"),G("edit-tour")}catch(e){console.error("Lỗi tải tours/schedules:",e)}},G=e=>{const t=document.getElementById(e);if(!t)return;const o=t.value,s=t.options[0].outerHTML;t.innerHTML=s,A.filter(r=>r.is_visible!==!1).forEach(r=>{const a=document.createElement("option");a.value=r.name,a.textContent=r.name,r.name===o&&(a.selected=!0),t.appendChild(a)})},j=(e,t,o)=>{const s=document.getElementById(e);if(!s)return;if(s.innerHTML='<option value="">-- Chọn Lịch --</option>',!t){s.innerHTML='<option value="">-- Chọn Tour trước --</option>';return}const r=q.filter(a=>a.tour_name===t||t.includes(a.tour_name)||a.tour_name.includes(t));if(r.length===0){s.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}r.sort((a,i)=>new Date(a.start_date)-new Date(i.start_date)).forEach(a=>{const i=parseInt(a.booked_count)||0,c=(a.slots||0)-i,u=new Date(a.start_date),g=a.end_date?new Date(a.end_date):null,h=b=>`${b.getDate().toString().padStart(2,"0")}/${(b.getMonth()+1).toString().padStart(2,"0")}`;let x=h(u);g&&(x+=" - "+h(g)),x+=` (${c>=0?c:0} chỗ trống)`;const l=document.createElement("option");l.value=`${u.getDate().toString().padStart(2,"0")}/${(u.getMonth()+1).toString().padStart(2,"0")}/${u.getFullYear()}`,l.textContent=x,c<=0&&(l.disabled=!0,l.textContent=x.replace("chỗ trống","HẾT CHỖ")),o&&l.value===o&&(l.selected=!0),s.appendChild(l)})},z=document.getElementById("addTourName");z&&z.addEventListener("change",e=>{j("addTourDate",e.target.value)});const O=document.getElementById("edit-tour");O&&O.addEventListener("change",e=>{j("edit-date",e.target.value)}),it();const $=()=>{const e=document.getElementById("bookingsTableHead"),t=document.getElementById("bookingsTableBody");if(!t||!e)return;const o=f==="upcoming"||f==="completed";o?e.innerHTML=`
                <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                    <th class="p-4 font-medium">Họ Và Tên</th>
                    <th class="p-4 font-medium">Tour / Ngày</th>
                    <th class="p-4 font-medium">Người Phụ Trách</th>
                    <th class="p-4 font-medium text-center">Trạng Thái</th>
                    <th class="p-4 font-medium text-right">Tổng Tiền</th>
                    <th class="p-4 font-medium text-right">Đã Cọc</th>
                    <th class="p-4 font-medium text-right">Còn Lại</th>
                    <th class="p-4 font-medium text-right w-[100px]">Thao Tác</th>
                </tr>
            `:e.innerHTML=`
                <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                    <th class="p-4 font-medium">Khách Hàng</th>
                    <th class="p-4 font-medium">Thông tin Tour</th>
                    <th class="p-4 font-medium">Nguồn / Sale</th>
                    <th class="p-4 font-medium text-right w-[280px]">Thao Tác</th>
                </tr>
            `;const s=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",r=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",a=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",i=document.getElementById("filterSale")?document.getElementById("filterSale").value:"",c=document.getElementById("filterStatus")?document.getElementById("filterStatus").value:"";let u=E.filter(n=>{let p=!1;const d=parseInt(n.total_price)>0&&parseInt(n.total_price)===parseInt(n.deposit);return f==="consult"?p=n.status==="Chờ tư vấn":f==="pending"?p=!n.status||n.status==="Chờ cọc":f==="upcoming"?p=(n.status==="Chờ xác nhận cọc"||n.status==="Đã cọc"||n.status==="Đã cọc (Chờ đi)")&&!d:f==="completed"&&(p=d||n.status==="Hoàn thành"||n.status==="Đã đi"),!(!p||r&&n.tour!==r||a&&n.date!==a||i&&String(n.sale_id)!==String(i)||s&&!`${n.name||""} ${n.phone||""} ${n.customer_id||""}`.toLowerCase().includes(s)||c&&n.status!==c)});const g=document.getElementById("statTitle1"),h=document.getElementById("statTitle2"),x=document.getElementById("statTitle3"),l=document.getElementById("statTotalCustomers"),b=document.getElementById("statTotalRevenue"),v=document.getElementById("statTotalCollected");let I=u.length;if(f==="consult"){g&&(g.textContent="Tổng Leads Tư Vấn"),h&&(h.textContent="Chưa Có Sale Nhận"),x&&(x.textContent="Đã Có Sale Nhận");let n=0,p=0;u.forEach(d=>{!d.sale_id||d.sale_id==="null"||!d.sale_name||d.sale_name==="Website"||d.sale_name==="null"?n++:p++}),l&&(l.textContent=I),b&&(b.textContent=n+" Đơn"),v&&(v.textContent=p+" Đơn")}else if(f==="pending"){g&&(g.textContent="Tổng Khách (Chờ Cọc)"),h&&(h.textContent="Khách Chưa Tư Vấn (Mới)"),x&&(x.textContent="Đã Có Sale Giữ Chỗ");let n=0,p=0;u.forEach(d=>{!d.sale_id||d.sale_id==="null"||!d.sale_name||d.sale_name==="Website"||d.sale_name==="null"?n++:p++}),l&&(l.textContent=I),b&&(b.textContent=n+" Đơn"),v&&(v.textContent=p+" Đơn")}else if(f==="upcoming"){g&&(g.textContent="Tổng Số Khách"),h&&(h.textContent="Chưa Xác Nhận Cọc"),x&&(x.textContent="Chờ Thanh Toán Còn Lại");let n=0,p=0;u.forEach(d=>{d.status==="Chờ xác nhận cọc"?n++:parseInt(d.deposit)>0&&parseInt(d.total_price)>parseInt(d.deposit)&&p++}),l&&(l.textContent=I),b&&(b.textContent=n+" Khách"),v&&(v.textContent=p+" Khách")}else{g&&(g.textContent="Khách Sẵn Sàng (Full)"),h&&(h.textContent="Tổng Doanh Thu Tab"),x&&(x.textContent="Thực Thu (Full Tận Nơi)");let n=0,p=0;u.forEach(d=>{n+=parseInt(d.total_price)||0,p+=parseInt(d.deposit)||0}),l&&(l.textContent=I),b&&(b.textContent=n>0?n.toLocaleString("vi-VN")+"đ":"0đ"),v&&(v.textContent=p>0?p.toLocaleString("vi-VN")+"đ":"0đ")}const _=o?8:4;if(!u||u.length===0){let n=f==="consult"?"Chưa có khách hàng tư vấn nào.":f==="pending"?"Chưa có Khách chờ cọc.":f==="upcoming"?"Chưa có Khách nào Đã Cọc.":"Danh sách rỗng.";t.innerHTML=`<tr><td colspan="${_}" class="p-8 text-center text-gray-500">${n}</td></tr>`;return}t.innerHTML=u.map(n=>{const p=f==="upcoming"?"bg-green-50/20 hover:bg-green-50 transition-colors":"hover:bg-gray-100 transition-colors";if(o){const d=parseInt(n.total_price)||0,y=parseInt(n.deposit)||0,m=d-y,w=d>0?d.toLocaleString("vi-VN")+"đ":"Chưa định giá",k=y>0?y.toLocaleString("vi-VN")+"đ":"0đ",L=m>0?m.toLocaleString("vi-VN")+"đ":m===0&&d>0?"Đã thu trọn":"-";let T="";const D=`<a href="/invoice.html?id=${n.id}" target="_blank" class="block mt-1 text-[10px] text-blue-500 hover:text-blue-700 font-bold text-center underline">🧾 Xem hóa đơn</a>`;return n.status==="Hoàn thành"||n.status==="Đã đi"?T='<span class="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-xs block w-full text-center">Hoàn thành</span>'+D:n.status==="Chờ xác nhận cọc"?T=`<button class="action-btn confirm-deposit-btn bg-csr-orange text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-[#d65503] w-full" data-id="${n.id}">Xác nhận cọc</button>`:y>0&&m===0?T='<span class="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Hoàn tất phí</span>'+D:T='<span class="bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Đã Cọc</span>'+D,`
                <tr class="${p} cursor-pointer row-clickable" data-id="${n.id}">
                    <td class="p-4 align-top">
                        <div class="font-medium text-gray-900">${n.name}</div>
                        ${n.customer_id?`<div class="mt-1 flex items-center bg-orange-50 text-csr-orange text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">${n.customer_id.toUpperCase()}</div>`:`<div class="text-[11px] text-gray-500 mt-0.5">${n.phone}</div>`}
                    </td>
                    <td class="p-4 align-top text-sm">
                        <div class="text-gray-700 font-medium">${n.tour}</div>
                        <div class="text-gray-500 text-xs whitespace-nowrap">${n.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-600">${n.sale_name||"Website"}</td>
                    <td class="p-4 align-top text-center">${T}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-gray-700">${w}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-green-600">${k}</td>
                    <td class="p-4 align-top text-right text-sm font-bold text-red-500">${L}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            <button class="action-btn payment-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${n.id}">Thanh toán</button>
                        </div>
                    </td>
                </tr>
                `}else{const d=n.name?n.name.substring(0,2).toUpperCase():"KH",y=f==="consult",m=!n.sale_id||n.sale_id==="null"||!n.sale_name||n.sale_name==="null";let w="";return y&&m?w=`<button class="action-btn claim-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${n.id}">Nhận khách</button>`:w=`<span class="text-sm text-gray-500">${n.sale_name||"Website"}</span>`,`
                <tr class="${p} cursor-pointer row-clickable" data-id="${n.id}">
                    <td class="p-4 align-top">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-csr-orange/20 text-csr-orange flex items-center justify-center font-bold">${d}</div>
                            <div>
                                <div class="font-medium text-gray-900">${n.name}</div>
                                ${n.customer_id?`<div class="mt-1 flex items-center bg-orange-50 text-csr-orange text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">${n.customer_id.toUpperCase()}</div>`:`<div class="text-[11px] text-gray-500 mt-0.5">${n.phone}</div>`}
                            </div>
                        </div>
                    </td>
                    <td class="p-4 align-top">
                        <div class="text-sm text-gray-600">${n.tour||"(Chưa rõ)"}</div>
                        <div class="text-xs text-gray-500 mt-1">Lịch: ${n.date||"(Chưa chọn)"}</div>
                        ${y&&n.special?`<div class="text-xs text-blue-500 mt-1 italic">💬 ${n.special}</div>`:""}
                    </td>
                    <td class="p-4 align-top">${w}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            <button class="action-btn process-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${n.id}">Copy link Process</button>
                        </div>
                    </td>
                </tr>
                `}}).join(""),document.querySelectorAll(".claim-btn").forEach(n=>{n.addEventListener("click",async p=>{p.stopPropagation();const d=n.getAttribute("data-id"),y=localStorage.getItem("csr_user");let m=null,w="Admin";if(y){const k=JSON.parse(y);m=k.id,w=k.fullName||k.full_name||"Admin"}n.textContent="Đang xử lý...",n.disabled=!0;try{if((await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:d,sale_id:m,sale_name:w})})).ok){const L=E.find(T=>T.id==d);L&&(L.sale_id=m,L.sale_name=w),$()}else alert("Lỗi khi nhận khách. Vui lòng thử lại."),n.textContent="Nhận khách",n.disabled=!1}catch(k){console.error("Lỗi nhận khách:",k),n.textContent="Nhận khách",n.disabled=!1}})})},dt=()=>{const e=new Set,t=new Set,o=new Map;E.forEach(i=>{i.tour&&e.add(i.tour),i.date&&t.add(i.date),i.sale_id&&i.sale_name&&o.set(i.sale_id,i.sale_name)});const s=document.getElementById("filterTour"),r=document.getElementById("filterDate"),a=document.getElementById("filterSale");if(s){const i=s.value;s.innerHTML='<option value="">Tất cả Tour</option>',[...e].sort().forEach(c=>s.innerHTML+=`<option value="${c}">${c}</option>`),s.value=i}if(r){const i=r.value;r.innerHTML='<option value="">Tất cả Ngày</option>',[...t].sort().forEach(c=>r.innerHTML+=`<option value="${c}">${c}</option>`),r.value=i}if(a){const i=a.value;a.innerHTML='<option value="">Tất cả Sale</option>',a.innerHTML+='<option value="null">Nguồn Website</option>';for(let[c,u]of o)a.innerHTML+=`<option value="${c}">${u}</option>`;a.value=i}},C=async()=>{try{E=await(await fetch("/api/bookings")).json(),dt(),$()}catch(e){console.error("Lỗi parse list đơn hàng:",e);const t=document.getElementById("bookingsTableBody");t&&(t.innerHTML='<tr><td colspan="4" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu từ Server.</td></tr>')}};C(),["filterSearch","filterTour","filterDate","filterSale","filterStatus"].forEach(e=>{const t=document.getElementById(e);t&&(e==="filterSearch"?t.addEventListener("input",$):t.addEventListener("change",$))});const F=document.getElementById("exportExcelBtn");F&&F.addEventListener("click",()=>{const e=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",t=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",o=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",s=document.getElementById("filterSale")?document.getElementById("filterSale").value:"";let r=E.filter(l=>{let b=!1;return f==="pending"?b=l.status==="Chờ xác nhận cọc"||parseInt(l.deposit)===0||!l.deposit:f==="upcoming"?b=l.status!=="Chờ xác nhận cọc"&&parseInt(l.deposit)>0:f==="completed"&&(b=l.status==="Hoàn thành"),!(!b||t&&l.tour!==t||o&&l.date!==o||s&&String(l.sale_id)!==String(s)||e&&!`${l.name||""} ${l.phone||""} ${l.customer_id||""}`.toLowerCase().includes(e))});if(r.length===0){alert("Danh sách rỗng. Không có dữ liệu để xuất.");return}const i=[["Mã KH (CRM)","Họ và Tên","Số điện thoại","Tên Tour","Lịch trình","Trạng thái","Nguồn / Sale","Đã cọc","Tổng tiền","Ghi chú"]];r.forEach(l=>{i.push([l.customer_id||"",`"${l.name||""}"`,`="${l.phone||""}"`,`"${l.tour||""}"`,`"${l.date||""}"`,`"${l.status||""}"`,`"${l.sale_name||"Website"}"`,l.deposit||0,l.total_price||0,`"${(l.special||"").replace(/"/g,'""')}"`])});const c="\\uFEFF"+i.map(l=>l.join(",")).join(`
`),u=new Blob([c],{type:"text/csv;charset=utf-8;"}),g=URL.createObjectURL(u),h=document.createElement("a");h.setAttribute("href",g);let x=f==="pending"?"ChoCoc":f==="upcoming"?"SapThamGia":"HoanThanh";h.setAttribute("download",`BaoCao_DonHang_${x}_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(h),h.click(),document.body.removeChild(h)});const U=document.querySelectorAll(".tab-btn");U.forEach(e=>{e.addEventListener("click",t=>{U.forEach(o=>{o.classList.remove("border-csr-orange","text-csr-orange"),o.classList.add("border-transparent","text-gray-500")}),t.target.classList.add("border-csr-orange","text-csr-orange"),t.target.classList.remove("border-transparent","text-gray-500"),f=t.target.getAttribute("data-tab"),$()})});const M=document.getElementById("bookingModal"),H=document.getElementById("bookingModalContent"),P=document.getElementById("detailModal"),J=document.getElementById("detailModalContent"),N=document.getElementById("editModal"),V=document.getElementById("editModalContent"),W=document.getElementById("addBookingBtn");M&&(M.classList.add("duration-200","ease-out"),H.classList.add("duration-300","ease-out")),N&&(N.classList.add("duration-200","ease-out"),V.classList.add("duration-300","ease-out")),W&&W.addEventListener("click",()=>{document.getElementById("bookingModalContent").querySelector("h2").innerText="Thêm Khách Hàng (Tạo Đơn)",document.getElementById("submitBookingBtn").innerText="Tạo Phơi Đăng Ký",document.getElementById("editingBookingId").value="",document.getElementById("bookingForm").reset();const e=document.getElementById("loyalty-alert");e&&e.remove(),M.classList.remove("hidden"),setTimeout(()=>{M.classList.add("opacity-100"),H.classList.remove("scale-95","translate-y-4"),H.classList.add("scale-100","translate-y-0")},10)}),window.closeModal=()=>{M&&(M.classList.remove("opacity-100"),H.classList.remove("scale-100","translate-y-0"),H.classList.add("scale-95","translate-y-4"),setTimeout(()=>{M.classList.add("hidden")},200))},window.closeDetailModal=()=>{P&&(P.classList.remove("opacity-100"),J.classList.remove("scale-100","translate-y-0"),J.classList.add("scale-95","translate-y-4"),setTimeout(()=>{P.classList.add("hidden")},200))},window.closeEditModal=()=>{N&&(N.classList.remove("opacity-100"),V.classList.remove("scale-100","translate-y-0"),V.classList.add("scale-95","translate-y-4"),setTimeout(()=>{N.classList.add("hidden")},200))},window.openRowActionModal=e=>{document.getElementById("ramName").textContent=e.name||"Khách Hàng Này",document.getElementById("ramPhone").textContent=e.customer_id?`🥇 ${e.customer_id.toUpperCase()}`:e.phone||"";const t=`
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionView(${e.id})">
                <div class="bg-blue-100/60 text-blue-600 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Chi Tiết Thông Tin</span>
            </button>
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionEdit(${e.id})">
                <div class="bg-yellow-100/60 text-yellow-600 p-2 rounded-lg group-hover:bg-yellow-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Chỉnh Sửa Phiếu</span>
            </button>
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionDelete(${e.id})">
                <div class="bg-red-100/60 text-red-500 p-2 rounded-lg group-hover:bg-red-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Xóa Đơn Hàng Này</span>
            </button>
        `;document.getElementById("ramActions").innerHTML=t,document.getElementById("rowActionModal").classList.remove("hidden")},window.addEventListener("click",e=>{const t=document.getElementById("rowActionModal");t&&e.target===t&&t.classList.add("hidden")}),window.actionView=e=>{document.getElementById("rowActionModal").classList.add("hidden");const t=E.find(a=>a.id==e);if(!t)return;const o=parseInt(t.deposit)>0?`<span class="text-green-600 font-bold">${parseInt(t.deposit).toLocaleString("vi-VN")}đ</span>`:'<span class="text-yellow-600 font-bold">0đ (Chưa Cọc)</span>',s=t.total_price?`${parseInt(t.total_price).toLocaleString("vi-VN")}đ`:"Chưa định giá",r=`
           <div class="grid grid-cols-2 gap-y-3 gap-x-6 border-b pb-4">
               <p><strong class="text-gray-500 block">Họ và Tên:</strong> <span class="text-lg font-medium">${t.name}</span></p>
               <p><strong class="text-gray-500 block">SĐT:</strong> <span class="text-lg">${t.phone}</span></p>
               <p><strong class="text-gray-500 block">Mã CRM:</strong> <span class="text-csr-orange font-mono">${t.customer_id||"Trống"}</span></p>
               <p><strong class="text-gray-500 block">Huy Chương:</strong> <span class="text-csr-orange font-bold text-lg">${t.medal_name||"Theo Tên Thật"}</span></p>
           </div>
            <div class="grid grid-cols-2 gap-y-3 gap-x-6 border-b py-4 bg-gray-50/50 rounded-lg p-3">
                <p><strong class="text-gray-500 block">Ngày Sinh:</strong> <span>${t.dob||"Không có"}</span></p>
                <p><strong class="text-gray-500 block">Giới Tính:</strong> <span>${t.gender||"Bình thường"}</span></p>
                <p><strong class="text-gray-500 block">Dị Ứng / Y tế:</strong> <span class="text-red-500 font-medium">${t.allergy||"Không"}</span></p>
                <p><strong class="text-gray-500 block">Chế Độ Ăn:</strong> <span>${t.diet||"Không"}</span></p>
                <p><strong class="text-gray-500 block">Mượn Gậy:</strong> <span>${t.trekking_pole||"Không"}</span></p>
                <p><strong class="text-gray-500 block">CCCD:</strong> <span>${t.id_card||"Không có"}</span></p>
                <p class="col-span-2"><strong class="text-gray-500 block">Địa Chỉ:</strong> <span class="text-xs break-words">${t.address||"Không có"}</span></p>
            </div>
            <div class="grid grid-cols-2 gap-y-3 gap-x-6 pt-4">
                <p><strong class="text-gray-500 block">Tour Tham Gia:</strong> <span class="text-blue-600 font-medium">${t.tour}</span></p>
                <p><strong class="text-gray-500 block">Ngày Khởi Hành:</strong> <span>${t.date}</span></p>
                <p><strong class="text-gray-500 block">Tiền Cọc:</strong> ${o}</p>
                <p><strong class="text-gray-500 block">Tổng Tiền:</strong> <span class="font-bold">${s}</span></p>
                <p><strong class="text-gray-500 block">Cam Kết:</strong> <span class="${t.commitments?"text-green-600":"text-red-500"} font-bold">${t.commitments?"Đã đồng ý":"Chưa xác nhận"}</span></p>
                <p class="col-span-2"><strong class="text-gray-500 block">Nhân Viên Sale / Ghi Chú:</strong> <span class="italic text-gray-700 bg-yellow-50 p-2 block mt-1 rounded border border-yellow-100">${t.sale_name||"Website"} - ${t.special||"(Không có nhánh ghi chú)"}</span></p>
            </div>
        `;document.getElementById("detailContentBlock").innerHTML=r,document.getElementById("detailModal").classList.remove("hidden"),setTimeout(()=>{document.getElementById("detailModal").classList.add("opacity-100");const a=document.getElementById("detailModalContent");a&&(a.classList.remove("scale-95","translate-y-4"),a.classList.add("scale-100","translate-y-0"))},10)},window.actionEdit=e=>{document.getElementById("rowActionModal").classList.add("hidden");const t=E.find(i=>i.id==e);if(!t)return;document.getElementById("edit-id").value=e,document.getElementById("edit-name").value=t.name||"",document.getElementById("edit-phone").value=t.phone||"",document.getElementById("edit-medal-name").value=t.medal_name||"",document.getElementById("edit-tour").value=t.tour||"",typeof j=="function"&&j("edit-date",t.tour||"",t.date||"");const o=document.getElementById("edit-date");if(o&&t.date&&o.value!==t.date){const i=document.createElement("option");i.value=t.date,i.textContent=t.date+" (dữ liệu cũ)",i.selected=!0,o.appendChild(i)}document.getElementById("edit-dob").value=t.dob||"",document.getElementById("edit-gender").value=t.gender||"Khác",document.getElementById("edit-status").value=t.status||"Chờ xác nhận cọc",document.getElementById("edit-allergy").value=t.allergy||"",document.getElementById("edit-address").value=t.address||"",document.getElementById("edit-diet").value=t.diet||"Không",document.getElementById("edit-trekking-pole").value=t.trekking_pole||"Không",document.getElementById("edit-commitments").checked=!!t.commitments,document.getElementById("edit-special").value=t.special||"",document.getElementById("edit-total").value=t.total_price||0,document.getElementById("edit-deposit").value=t.deposit||0,(()=>{const i=parseInt(document.getElementById("edit-total").value)||0,c=parseInt(document.getElementById("edit-deposit").value)||0,u=i-c,g=document.getElementById("edit-remaining");g&&(g.textContent=u>0?u.toLocaleString("vi-VN")+"đ":"0đ")})();const r=document.getElementById("editModal"),a=document.getElementById("editModalContent");r&&a&&(r.classList.remove("hidden"),setTimeout(()=>{r.classList.add("opacity-100"),a.classList.remove("scale-95","translate-y-4"),a.classList.add("scale-100","translate-y-0")},10))},window.actionDelete=async e=>{if(document.getElementById("rowActionModal").classList.add("hidden"),confirm("Bạn có chắc chắn muốn xóa Đơn hàng này? Thao tác không thể hoàn tác."))try{if((await fetch(`/api/bookings?id=${e}`,{method:"DELETE"})).ok)alert("✅ Đã xóa đơn hàng thành công!"),C();else throw new Error("Lỗi từ Server")}catch(t){alert("❌ Không thể xóa bảng ghi này: "+t.message)}};const X=()=>{const e=parseInt(document.getElementById("edit-total").value)||0,t=parseInt(document.getElementById("edit-deposit").value)||0,o=e-t,s=document.getElementById("edit-remaining");s&&(s.textContent=o>0?o.toLocaleString("vi-VN")+"đ":"0đ")},Y=document.getElementById("edit-total"),Z=document.getElementById("edit-deposit");Y&&Y.addEventListener("input",X),Z&&Z.addEventListener("input",X),document.querySelectorAll('#bookingModal button[onclick*="hidden"]').forEach(e=>{e.removeAttribute("onclick"),e.addEventListener("click",window.closeModal)});const Q=async e=>{try{const o=await(await fetch("/api/admin_customers?action=create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:e.name,phone:e.phone,cccd:e.id_card||"",dob:e.dob||null,gender:e.gender||"Khác",medical_notes:e.allergy||"",dietary:e.diet||""})})).json();o.success&&o.csr_code&&(console.log("✅ Đã đồng bộ CRM thành công:",e.name,o.csr_code),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.id,customer_id:o.csr_code})})).ok&&(console.log("✅ Đã cập nhật Booking mã CRM"),typeof C=="function"&&C()))}catch(t){console.error("❌ Lỗi đồng bộ CRM:",t)}},tt=document.getElementById("bookingsTableBody");tt&&tt.addEventListener("click",async e=>{const t=e.target.closest(".action-btn");if(!t){const a=e.target.closest(".row-clickable");if(a){const i=a.getAttribute("data-id"),c=E.find(u=>u.id==i);c&&openRowActionModal(c)}return}const o=t.getAttribute("data-id"),s=E.find(a=>a.id==o);if(!s)return;const r=document.getElementById("rowActionModal");if(r&&r.classList.add("hidden"),t.classList.contains("confirm-deposit-btn")){if(confirm("Xác nhận khách hàng này đã chuyển khoản đặt cọc?"))try{if(t.disabled=!0,t.classList.add("opacity-50"),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o,status:"Đã cọc"})})).ok)alert("✅ Đã xác nhận cọc thành công!"),Q(s),typeof C=="function"&&C();else throw new Error("Lỗi cập nhật API")}catch(a){alert("❌ Lỗi: "+a.message)}finally{t.disabled=!1,t.classList.remove("opacity-50")}return}if(t.classList.contains("delete-btn")){window.actionDelete(o);return}else if(t.classList.contains("process-btn")){const c=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/booking/process.html?id=${o}`;navigator.clipboard.writeText(c).then(()=>{alert("📋 Đã sao chép Link Form Điền Thông Tin Cơ Bản! Gửi cho khách qua Zalo nhé:\\n"+c)}).catch(u=>{alert("Lỗi khi Copy Clipboard. Link là: "+c)})}else if(t.classList.contains("send-btn")){const c=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay/${o}`;navigator.clipboard.writeText(c).then(()=>{alert("📋 Đã sao chép Link Thanh Toán Cọc! Gửi cho khách qua Zalo nhé:\\n"+c)}).catch(u=>{alert("Lỗi khi Copy Clipboard. Link là: "+c)})}else if(t.classList.contains("payment-btn")){const c=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay/${o}`;window.open(c,"_blank")}else t.classList.contains("view-btn")?(document.getElementById("rowActionModal").classList.add("hidden"),window.actionView(o)):t.classList.contains("edit-btn")&&window.actionEdit(o)});const S=document.getElementById("smartSearch"),B=document.getElementById("searchDropdown");let et=null,nt=[];(async()=>{try{const t=await(await fetch("/api/admin_customers")).json();t.success&&(nt=t.data||[])}catch(e){console.warn("CRM load error:",e)}})(),S&&(S.addEventListener("input",()=>{clearTimeout(et);const e=S.value.trim().toLowerCase();if(e.length<2){B.classList.add("hidden");return}et=setTimeout(()=>{const t=nt.filter(o=>{const s=(o.full_name||"").toLowerCase(),r=(o.phone||"").toLowerCase(),a=(o.csr_code||"").toLowerCase();return s.includes(e)||r.includes(e)||a.includes(e)}).slice(0,8);t.length===0?B.innerHTML='<div class="p-3 text-sm text-gray-400 text-center">Không tìm thấy khách hàng</div>':B.innerHTML=t.map(o=>`
                        <div class="search-result-item p-3 hover:bg-orange-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors"
                             data-phone="${o.phone||""}" data-name="${o.full_name||""}" data-csr="${o.csr_code||""}"
                             data-tier="${o.loyalty_tier||""}" data-count="${o.tour_count||0}">
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="font-bold text-gray-900 text-sm">${o.full_name||""}</span>
                                    <span class="text-gray-400 text-xs ml-2">${o.phone||""}</span>
                                </div>
                                <span class="text-csr-orange text-xs font-mono font-bold">${(o.csr_code||"").toUpperCase()}</span>
                            </div>
                            ${o.loyalty_tier==="VIP"?'<span class="text-[10px] text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded font-bold">⭐ VIP</span>':""}
                        </div>
                    `).join(""),B.classList.remove("hidden"),B.querySelectorAll(".search-result-item").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.name,r=o.dataset.phone,a=o.dataset.csr;document.getElementById("addFullName").value=s,document.getElementById("addPhone").value=r,document.getElementById("selectedCustomerId").value=a,S.value=`${s} (${a})`,B.classList.add("hidden");const i=document.getElementById("loyalty-alert");i&&i.remove();const c=o.dataset.tier,u=o.dataset.count;let g="";c==="VIP"?g=`<span class="text-yellow-500 ml-1">⭐ VIP - ${u} chuyến</span>`:c==="Member"&&(g='<span class="text-csr-orange ml-1">✨ Thành viên</span>'),S.parentElement.insertAdjacentHTML("afterend",`<div id="loyalty-alert" class="mt-2 p-2 bg-green-500/10 border border-green-500/30 text-green-600 rounded-lg text-xs flex items-center">
                                ✅ Đã chọn khách hàng: <strong class="ml-1">${s}</strong> ${g}
                            </div>`)})})},300)}),document.addEventListener("click",e=>{!S.contains(e.target)&&!B.contains(e.target)&&B.classList.add("hidden")}));const R=()=>{const e=document.getElementById("addTotalPrice"),t=document.getElementById("addDiscount"),o=document.getElementById("priceCalculation");if(!e||!t||!o)return;const s=parseInt(e.value)||0,r=parseInt(t.value)||0,a=Math.max(0,s-r);s>0?(o.classList.remove("hidden"),document.getElementById("calcOriginal").textContent=s.toLocaleString("vi-VN")+"đ",document.getElementById("calcDiscount").textContent=r>0?"-"+r.toLocaleString("vi-VN")+"đ":"Không",document.getElementById("calcTotal").textContent=a.toLocaleString("vi-VN")+"đ"):o.classList.add("hidden")},ot=document.getElementById("addDiscount"),at=document.getElementById("addTotalPrice");ot&&ot.addEventListener("input",R),at&&at.addEventListener("input",R);const K=document.getElementById("addTourName");K&&(K.onchange,K.addEventListener("change",()=>{const e=A.find(t=>t.name===K.value);if(e&&e.price){const t=document.getElementById("addTotalPrice");t&&(t.value=parseInt(e.price)||0,R())}}));const st=document.getElementById("bookingForm");st&&st.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.querySelector('button[type="submit"]'),o=t.textContent;t.textContent="Đang lưu hệ thống...",t.disabled=!0;try{const s=document.getElementById("addFullName").value,r=document.getElementById("addPhone").value,a=document.getElementById("addTourName").value,i=document.getElementById("addTourDate").value,c=document.getElementById("addNote").value,u=document.getElementById("addTotalPrice"),g=document.getElementById("addDiscount"),h=document.getElementById("addDepositRequired"),x=g&&parseInt(g.value)||0,l=u?Math.max(0,(parseInt(u.value)||0)-x):0,b=h?parseInt(h.value):1e6,v=document.getElementById("selectedCustomerId")?document.getElementById("selectedCustomerId").value:"",I=localStorage.getItem("csr_user");let _=null,n="Admin";if(I){const m=JSON.parse(I);_=m.id,n=m.fullName||m.full_name||"Admin"}const p=document.getElementById("editingBookingId")?document.getElementById("editingBookingId").value:"",d={name:s,phone:r,tour:a,date:i,status:"Chờ cọc",total_price:l,deposit:0,sale_id:_,sale_name:n,customer_id:v,special:c,deposit_required:b,discount:x};p&&(d.id=p,delete d.status,delete d.deposit,delete d.total_price,delete d.sale_id,delete d.sale_name,delete d.customer_id);const y=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(y.ok){alert(p?"✅ Đã lưu Cập nhật Đơn hàng!":"✅ Thêm Đơn Hàng Thành Công! (Khách chờ thông tin/cọc)"),window.closeModal();const m=document.getElementById("loyalty-alert");m&&m.remove(),typeof C=="function"?C():window.location.reload()}else{const m=await y.json();throw new Error(m.error||"Lỗi tạo Booking!")}}catch(s){alert("❌ "+s.message)}finally{t.textContent=o,t.disabled=!1}});const lt=document.getElementById("editForm");lt&&lt.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.querySelector('button[type="submit"]'),o=t.textContent;t.textContent="Đang lưu cập nhật...",t.disabled=!0;try{const s=document.getElementById("edit-id").value,r=document.getElementById("edit-name").value,a=document.getElementById("edit-phone").value,i=document.getElementById("edit-medal-name").value,c=document.getElementById("edit-tour").value,u=document.getElementById("edit-date").value,g=document.getElementById("edit-dob").value,h=document.getElementById("edit-gender").value,x=document.getElementById("edit-status").value,l=document.getElementById("edit-allergy").value,b=document.getElementById("edit-address").value,v=document.getElementById("edit-diet").value,I=document.getElementById("edit-trekking-pole").value,_=document.getElementById("edit-commitments").checked,n=document.getElementById("edit-special").value,p=document.getElementById("edit-total").value,d=document.getElementById("edit-deposit").value,y=document.getElementById("edit-deposit-required")?document.getElementById("edit-deposit-required").value:"",m=p?parseInt(p):0,w=d?parseInt(d):0,k=y?parseInt(y):1e6,L={id:s,name:r,phone:a,medal_name:i,tour:c,date:u,dob:g,gender:h,status:x,allergy:l,address:b,diet:v,trekking_pole:I,commitments:_,special:n,total_price:m,deposit:w,deposit_required:k},T=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});if(T.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),(x.includes("Đã cọc")||m>0&&m===w)&&Q(L),window.closeEditModal(),typeof C=="function"&&C();else{const D=await T.json();throw new Error(D.error||"Gặp sự cố khi Cập nhật API.")}}catch(s){alert("❌ Lỗi Cập nhật: "+s.message)}finally{t.textContent=o,t.disabled=!1}})};export{ht as afterRender,mt as render};
