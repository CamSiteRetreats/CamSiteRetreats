import{S as Be,H as Le}from"./Header-DFYmXmuY.js";console.log("Bookings V3 - Cache Busted!");const _e=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${Be()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${Le()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-6">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Khách Đăng Ký & Tham Gia Tour</h1>
                          <p class="text-gray-500 text-sm">Quản lý đăng ký chờ lịch, đơn hàng và thông tin chi tiết đoàn.</p>
                      </div>
                      <div class="flex items-center gap-2">
                          <button id="addWaitingBtn" class="btn-primary flex items-center gap-2 shadow-lg shadow-purple-500/20 bg-purple-600 hover:bg-purple-700 hidden">
                              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                              Thêm Khách Chờ Lịch
                          </button>
                          <button id="addBookingBtn" class="btn-primary flex items-center gap-2 shadow-lg shadow-csr-orange/20">
                              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                              Thêm Khách Thủ Công
                          </button>
                      </div>
                  </div>

                  <!-- Tab Navigation -->
                  <div class="border-b border-gray-200 -mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto custom-scrollbar no-scrollbar">
                      <nav class="-mb-px flex space-x-6 min-w-max pb-1" aria-label="Tabs" id="bookingTabsNav">
                          <button data-tab="consult" class="tab-btn border-csr-orange text-csr-orange whitespace-nowrap py-3 px-1 border-b-2 font-bold text-sm">
                              ⏳ Đăng Ký Chờ Lịch
                          </button>
                          <button data-tab="pending" class="tab-btn border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm">
                              Chờ Cọc
                          </button>
                          <button data-tab="upcoming" class="tab-btn border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm">
                              Sắp Tham Gia
                          </button>
                          <button data-tab="ready" class="tab-btn border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm">
                              Chờ Lên Xe
                          </button>
                          <button data-tab="completed" class="tab-btn border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm">
                              Lịch Sử
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
                             <option value="Chờ tư vấn">Chờ lịch</option>
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
                              <thead id="bookingsTableHead" class="hidden md:table-header-group">
                                  <!-- Sẽ được render động bằng JavaScript -->
                              </thead>
                              <tbody id="bookingsTableBody" class="divide-y divide-csr-border block md:table-row-group">
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

      <!-- Add Waiting List Customer Modal -->
      <div id="waitingModal" class="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-2 md:p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-white border border-gray-200 rounded-xl w-full max-w-lg shadow-2xl scale-95 transition-transform duration-300 transform" id="waitingModalContent">
               <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-purple-50 rounded-t-xl">
                   <h2 class="text-lg font-bold text-purple-900">Thêm Khách Đăng Ký Chờ Lịch</h2>
                   <button type="button" class="text-gray-500 hover:text-gray-900" onclick="window.closeWaitingModal()">
                       <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                   </button>
               </div>
               <div class="p-6">
                   <form id="waitingForm" class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Họ và Tên *</label>
                            <input type="text" id="wl-name" class="input-field bg-gray-50 font-medium" required placeholder="Nhập họ và tên">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Số Điện Thoại *</label>
                                <input type="tel" id="wl-phone" class="input-field bg-gray-50 font-medium" required placeholder="09xx xxx xxx">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tên Zalo / Ghi Chú</label>
                                <input type="text" id="wl-zalo" class="input-field bg-gray-50" placeholder="Nick Zalo">
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tuyến Tour Mong Muốn *</label>
                            <select id="wl-tour" class="input-field bg-gray-50" required>
                                <option value="">-- Chọn Tour --</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Lịch Khởi Hành (Tùy chọn)</label>
                            <select id="wl-date" class="input-field bg-gray-50">
                                <option value="">-- Chọn Lịch (Hoặc để trống) --</option>
                            </select>
                        </div>
                        
                        <div class="flex gap-3 pt-4 mt-2">
                            <button type="button" onclick="window.closeWaitingModal()" class="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">Hủy</button>
                            <button type="submit" id="wl-submit" class="flex-[2] px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-md">Lưu Vào Danh Sách</button>
                        </div>
                   </form>
               </div>
          </div>
      </div>

      <!-- ROW ACTION MODAL (Hiển thị khi click vào Dòng Khách Hàng) -->
      <div id="rowActionModal" class="fixed inset-0 z-[70] bg-gray-900/40 backdrop-blur-sm hidden flex items-center justify-center p-4">
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
      <div id="bookingModal" class="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-2 md:p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-gray-50 border border-gray-200 rounded-xl w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300 transform" id="bookingModalContent">
              <div class="sticky top-0 bg-gray-50/95 backdrop-blur z-10 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 class="text-lg md:text-xl font-bold text-gray-900">Thêm Khách Hàng (Tạo Đơn)</h2>
                  <button type="button" class="text-gray-500 hover:text-gray-900" onclick="window.closeModal()">
                      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              
              <div class="p-6">
                  <!-- Smart Search Bar -->
                  <div class="mb-6 p-4 bg-csr-orange/5 border border-csr-orange/20 rounded-lg relative">
                      <h3 class="text-sm font-medium text-csr-light mb-3 flex items-center gap-2">
                          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                          Tìm kiếm khách hàng cũ
                      </h3>
                      <div class="flex gap-2 relative">
                          <input type="text" id="smartSearch" class="input-field bg-gray-100 focus:bg-white flex-1" placeholder="Nhập Số Điện Thoại, Tên hoặc Mã (#CSR...)">
                          <div id="searchSuggestions" class="absolute left-0 top-full w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-1 z-50 hidden max-h-60 overflow-y-auto">
                              <!-- Suggestions will be rendered here -->
                          </div>
                      </div>
                      <p class="text-[11px] text-gray-500 mt-2 italic">* Tìm theo SĐT, Tên hoặc #CSR để tự động điền thông tin nhanh.</p>
                  </div>

                  <form id="bookingForm" class="space-y-6">
                      <!-- SECTION 1: Thông tin khách hàng -->
                      <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                          <div class="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                              <span class="w-6 h-6 rounded-full bg-csr-orange text-white text-xs font-bold flex items-center justify-center">1</span>
                              <span class="font-bold text-gray-800">Thông Tin Khách Hàng</span>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Họ và Tên *</label>
                                  <input type="text" id="addFullName" class="input-field" required placeholder="Nhập họ và tên">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Số Điện Thoại *</label>
                                  <input type="tel" id="addPhone" class="input-field" required placeholder="09xx xxx xxx">
                              </div>
                              <input type="hidden" id="addCsrCode">
                          </div>

                          <!-- Hidden by default, shown when detail is expanded or via auto-fill -->
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5 font-bold text-blue-600">Ngày Sinh</label>
                                  <input type="date" id="addDob" class="input-field">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5 font-bold text-blue-600">Giới Tính</label>
                                  <select id="addGender" class="input-field">
                                      <option value="Khác">Khác</option>
                                      <option value="Nam">Nam</option>
                                      <option value="Nữ">Nữ</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5 font-bold text-blue-600">CCCD / Passport</label>
                                  <input type="text" id="addIdCard" class="input-field" placeholder="Số định danh">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5 font-bold text-blue-600">Địa Chỉ</label>
                                  <input type="text" id="addAddress" class="input-field" placeholder="Tỉnh/Thành, Quận/Huyện">
                              </div>
                          </div>

                          <!-- SECTION 3: Hồ Sơ Chi Tiết -->
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100 bg-gray-50/50 -mx-5 px-5 rounded-b-xl">
                              <div class="md:col-span-2 text-xs font-black text-csr-orange uppercase tracking-widest mb-2 flex items-center gap-2">
                                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                  Hồ sơ chi tiết (Mở rộng)
                              </div>
                              <div>
                                  <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Dị ứng / Y tế</label>
                                  <input type="text" id="addAllergy" class="input-field bg-white" placeholder="Thuốc, hải sản, hen suyễn...">
                              </div>
                              <div>
                                  <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Chế độ ăn</label>
                                  <input type="text" id="addDiet" class="input-field bg-white" placeholder="Chay, không cay, không hành...">
                              </div>
                              <div>
                                  <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Mượn gậy</label>
                                  <select id="addTrekkingPole" class="input-field bg-white">
                                      <option value="Không">Không mượn</option>
                                      <option value="Có">Có mượn gậy</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Tên khắc Huy chương</label>
                                  <input type="text" id="addMedalName" class="input-field bg-white" placeholder="Để trống nếu lấy Họ Tên">
                              </div>
                          </div>
                      </div>

                      <!-- SECTION 2: Tuyến Tour & Tài Chính -->
                      <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                          <div class="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                              <span class="w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">2</span>
                              <span class="font-bold text-gray-800">Tuyến Tour & Tài Chính</span>
                          </div>
                          
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                              <div class="md:col-span-2">
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Lựa chọn Tuyến Tour *</label>
                                  <select id="addTourName" class="input-field" required>
                                      <option value="">-- Chọn Tour --</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày Khởi Hành *</label>
                                  <select id="addTourDate" class="input-field" required>
                                      <option value="">-- Chọn lịch khởi hành --</option>
                                  </select>
                              </div>
                          </div>

                          <div class="grid grid-cols-1 mb-6">
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5 font-bold text-blue-600">Ghi chú (Sale Note)</label>
                              <input type="text" id="addSpecial" class="input-field bg-blue-50/30" placeholder="Lưu ý đón khách, yêu cầu riêng...">
                          </div>
                          
                          <div class="bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-4">
                              <div>
                                  <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Giá Gốc (đ)</label>
                                  <input type="number" id="addTourPrice" class="input-field bg-white font-bold" value="0">
                              </div>
                              <div>
                                  <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 font-bold text-red-500">Giảm Giá (đ)</label>
                                  <input type="number" id="addDiscount" class="input-field bg-white text-red-600 font-bold" value="0">
                              </div>
                              <div>
                                  <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Cọc Trước (đ)</label>
                                  <input type="number" id="addDepositRequired" class="input-field bg-white font-bold text-green-600" value="1000000">
                              </div>
                              <div class="flex flex-col justify-end">
                                  <div class="text-[10px] font-bold text-gray-400 uppercase mb-1">Tổng Tiền Thu Khách</div>
                                  <div id="addTotalPriceDisplay" class="text-lg font-black text-gray-900 pt-2 border-t border-gray-200">0đ</div>
                              </div>
                          </div>
                      </div>

                      <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                          <p class="text-xs text-gray-400 italic">* Các thông tin chi tiết khác (CCCD, Y tế,...) sẽ được khách bổ sung qua Link Process.</p>
                          <div class="flex gap-3">
                              <input type="hidden" id="editingBookingId" value="">
                              <button type="button" class="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors" onclick="window.closeModal()">Hủy</button>
                              <button type="submit" id="submitBookingBtn" class="bg-csr-orange hover:bg-[#d65503] text-white px-8 py-2.5 rounded-lg font-bold shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95">Tạo Đơn Hàng</button>
                          </div>
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
          <div class="bg-gray-50 border border-gray-200 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300 transform relative" id="editModalContent">
              
              <!-- Sticky Header -->
              <div class="sticky top-0 bg-gray-50/95 backdrop-blur z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center rounded-t-2xl">
                  <div>
                      <h2 class="text-xl font-bold text-gray-900">✏️ Chỉnh Sửa Phiếu Đăng Ký</h2>
                      <p class="text-xs text-gray-400 mt-0.5">Cập nhật thông tin chi tiết của đơn hàng</p>
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
    `,Me=()=>{let H=[],I="consult",N=[],te=[],J=[];const Te=async()=>{try{const[n,e,o]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules"),fetch("/api/users")]);N=n.ok?await n.json():[],te=e.ok?await e.json():[],J=o.ok?await o.json():[],U("addTourName"),U("edit-tour"),U("wl-tour"),Ce("edit-sale")}catch(n){console.error("Lỗi tải tours/schedules:",n)}},Ce=n=>{const e=document.getElementById(n);e&&(e.innerHTML='<option value="">-- Website --</option>',J.forEach(o=>{const d=document.createElement("option");d.value=o.id,d.textContent=`${o.full_name||o.fullName} (${o.role})`,e.appendChild(d)}))},U=n=>{const e=document.getElementById(n);if(!e)return;const o=e.value,d=e.options[0].outerHTML;e.innerHTML=d,N.filter(l=>l.is_visible!==!1).forEach(l=>{const r=document.createElement("option");r.value=l.name,r.textContent=l.name,l.name===o&&(r.selected=!0),e.appendChild(r)})},R=(n,e,o,d)=>{const l=document.getElementById(n);if(!l)return;if(l.innerHTML='<option value="">-- Chọn Lịch --</option>',!e){l.innerHTML='<option value="">-- Chọn Tour trước --</option>';return}const r=te.filter(s=>s.tour_name===e||e.includes(s.tour_name)||s.tour_name.includes(e));if(r.length===0){l.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}r.sort((s,i)=>new Date(s.start_date)-new Date(i.start_date)).forEach(s=>{const i=parseInt(s.booked_count)||0,g=(s.slots||0)-i,v=new Date(s.start_date),p=s.end_date?new Date(s.end_date):null,y=c=>`${c.getDate().toString().padStart(2,"0")}/${(c.getMonth()+1).toString().padStart(2,"0")}`;let w=y(v);p&&(w+=" - "+y(p)),s.group_label&&(w+=` · ${s.group_label}`),w+=` (${g>=0?g:0} chỗ trống)`;const x=document.createElement("option"),m=`${v.getDate().toString().padStart(2,"0")}/${(v.getMonth()+1).toString().padStart(2,"0")}/${v.getFullYear()}`;x.value=`${s.id}::${m}`,x.dataset.scheduleId=s.id,x.dataset.date=m,x.textContent=w,g<=0&&(x.disabled=!0,x.textContent=w.replace("chỗ trống","HẾT CHỖ")),(d&&String(s.id)===String(d)||!d&&o&&m===o)&&(x.selected=!0),l.appendChild(x)})},ne=document.getElementById("addTourName");ne&&ne.addEventListener("change",n=>{const e=n.target.value;R("addTourDate",e);const o=N.find(l=>l.name===e),d=document.getElementById("addTourPrice");if(o&&d){const l=parseInt(o.price)||0;d.value=l;const r=document.getElementById("addDiscount"),s=document.getElementById("addTotalPriceDisplay"),i=parseInt(r?r.value:0)||0,g=l-i;s&&(s.textContent=(g>0?g:0).toLocaleString("vi-VN")+"đ")}});const oe=document.getElementById("edit-tour");oe&&oe.addEventListener("change",n=>{const e=n.target.value;R("edit-date",e);const o=N.find(l=>l.name===e),d=document.getElementById("edit-total");o&&d&&(parseInt(d.value)===0||!d.value)&&(d.value=parseInt(o.price)||0,typeof window.updateEditRemaining=="function"&&window.updateEditRemaining())});const ae=document.getElementById("wl-tour");ae&&ae.addEventListener("change",n=>{const e=n.target.value;R("wl-date",e)}),Te();const P=()=>{const n=document.getElementById("bookingsTableHead"),e=document.getElementById("bookingsTableBody");if(!e||!n)return;const o=I==="upcoming"||I==="ready"||I==="completed";o?n.innerHTML=`
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
            `:n.innerHTML=`
                <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                    <th class="p-4 font-medium">Khách Hàng</th>
                    <th class="p-4 font-medium">Thông tin Tour</th>
                    <th class="p-4 font-medium">Nguồn / Sale</th>
                    <th class="p-4 font-medium text-right w-[280px]">Thao Tác</th>
                </tr>
            `;const d=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",l=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",r=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",s=document.getElementById("filterSale")?document.getElementById("filterSale").value:"",i=document.getElementById("filterStatus")?document.getElementById("filterStatus").value:"";let g=H.filter(t=>{let a=!1;const u=parseInt(t.total_price)>0&&parseInt(t.total_price)===parseInt(t.deposit),h=C=>{if(!C)return!1;try{const T=C.split("/");if(T.length===3){const B=new Date(`${T[2]}-${T[1]}-${T[0]}T00:00:00`),L=new Date;return L.setHours(0,0,0,0),B.getTime()<L.getTime()}else if(C.includes("-")){const B=new Date(`${C}T00:00:00`),L=new Date;return L.setHours(0,0,0,0),B.getTime()<L.getTime()}}catch{}return!1},b=(t.status==="Hoàn thành"||t.status==="Đã đi"||u)&&h(t.date);return I==="consult"?a=t.status==="Chờ tư vấn"&&!b:I==="pending"?a=(!t.status||t.status==="Chờ cọc"||t.status==="Chờ xác nhận cọc")&&!b:I==="upcoming"?a=t.status&&t.status!=="Chờ tư vấn"&&t.status!=="Chờ cọc"&&t.status!=="Chờ xác nhận cọc"&&!u&&t.status!=="Hoàn thành"&&!b:I==="ready"?a=(u||t.status==="Hoàn thành")&&!b:I==="completed"&&(a=b),!(!a||l&&t.tour!==l||r&&X(t.date)!==r||s&&s!=="null"&&t.sale_name!==s||s==="null"&&t.sale_name&&t.sale_name!=="Website"||d&&!`${t.name||""} ${t.phone||""} ${t.customer_id||""} ${t.id||""} csr${t.id||""} #csr${t.id||""}`.toLowerCase().includes(d)||i&&t.status!==i)});const v=document.getElementById("statTitle1"),p=document.getElementById("statTitle2"),y=document.getElementById("statTitle3"),w=document.getElementById("statTotalCustomers"),x=document.getElementById("statTotalRevenue"),m=document.getElementById("statTotalCollected");let c=g.length;if(I==="consult"){const t=document.getElementById("addWaitingBtn"),a=document.getElementById("addBookingBtn");t&&t.classList.remove("hidden"),a&&a.classList.add("hidden"),v&&(v.textContent="Tổng Đăng Ký Chờ Lịch"),p&&(p.textContent="Chưa Được Liên Hệ"),y&&(y.textContent="Đã Có Sale Phụ Trách");let u=0,h=0;g.forEach(b=>{!b.sale_id||b.sale_id==="null"||!b.sale_name||b.sale_name==="Website"||b.sale_name==="null"?u++:h++}),w&&(w.textContent=c),x&&(x.textContent=u+" Người"),m&&(m.textContent=h+" Người")}else if(I==="pending"){const t=document.getElementById("addWaitingBtn"),a=document.getElementById("addBookingBtn");t&&t.classList.add("hidden"),a&&a.classList.remove("hidden"),v&&(v.textContent="Tổng Khách (Chờ Cọc)"),p&&(p.textContent="Khách Chưa Tư Vấn (Mới)"),y&&(y.textContent="Đã Có Sale Giữ Chỗ");let u=0,h=0;g.forEach(b=>{!b.sale_id||b.sale_id==="null"||!b.sale_name||b.sale_name==="Website"||b.sale_name==="null"?u++:h++}),w&&(w.textContent=c),x&&(x.textContent=u+" Đơn"),m&&(m.textContent=h+" Đơn")}else if(I==="upcoming"){v&&(v.textContent="Tổng Số Khách"),p&&(p.textContent="Chưa Xác Nhận Cọc"),y&&(y.textContent="Chờ Thanh Toán Còn Lại");let t=0,a=0;g.forEach(u=>{u.status==="Chờ xác nhận cọc"?t++:parseInt(u.deposit)>0&&parseInt(u.total_price)>parseInt(u.deposit)&&a++}),w&&(w.textContent=c),x&&(x.textContent=t+" Khách"),m&&(m.textContent=a+" Khách")}else if(I==="ready"){v&&(v.textContent="Khách Sẵn Sàng (Full)"),p&&(p.textContent="Tổng Doanh Thu Tab"),y&&(y.textContent="Thực Thu (Full Tận Nơi)");let t=0,a=0;g.forEach(u=>{t+=parseInt(u.total_price)||0,a+=parseInt(u.deposit)||0}),w&&(w.textContent=c),x&&(x.textContent=t>0?t.toLocaleString("vi-VN")+"đ":"0đ"),m&&(m.textContent=a>0?a.toLocaleString("vi-VN")+"đ":"0đ")}else{v&&(v.textContent="Khách Đã Xong (Lịch Sử)"),p&&(p.textContent="Tổng Doanh Thu Tab"),y&&(y.textContent="Thực Thu (Đã Đóng)");let t=0,a=0;g.forEach(u=>{t+=parseInt(u.total_price)||0,a+=parseInt(u.deposit)||0}),w&&(w.textContent=c),x&&(x.textContent=t>0?t.toLocaleString("vi-VN")+"đ":"0đ"),m&&(m.textContent=a>0?a.toLocaleString("vi-VN")+"đ":"0đ")}const k=o?8:4;if(!g||g.length===0){let t=I==="consult"?"Chưa có khách hàng tư vấn nào.":I==="pending"?"Chưa có Khách chờ cọc.":I==="upcoming"?"Chưa có Khách nào Đã Cọc.":I==="ready"?"Chưa có khách sẵn sàng.":"Danh sách rỗng.";e.innerHTML=`<tr><td colspan="${k}" class="p-8 text-center text-gray-500">${t}</td></tr>`;return}e.innerHTML=g.map(t=>{const a=I==="upcoming"||I==="ready"?"bg-green-50/20 hover:bg-green-50 transition-colors":"hover:bg-gray-100 transition-colors";if(o){let u=parseInt(t.total_price)||0;if(u===0&&t.tour&&N&&N.length>0){const f=N.find(D=>D.name&&t.tour&&D.name.toLowerCase().trim()===t.tour.toLowerCase().trim());f&&parseInt(f.price)>0&&(u=parseInt(f.price))}const h=parseInt(t.deposit)||0,b=u-h,C=u>0?u.toLocaleString("vi-VN")+"đ":"Chưa định giá",T=h>0?h.toLocaleString("vi-VN")+"đ":"0đ",B=b>0?b.toLocaleString("vi-VN")+"đ":b===0&&u>0?"Đã thu trọn":"-";let L="";t.status==="Hoàn thành"||t.status==="Đã đi"?L='<span class="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-xs block w-full text-center">Hoàn thành</span>':t.status==="Chờ xác nhận cọc"?L=`<button class="action-btn confirm-deposit-btn bg-csr-orange text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-[#d65503] w-full" data-id="${t.id}">Xác nhận cọc</button>`:h>0&&b===0?L='<span class="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Hoàn tất phí</span>':L='<span class="bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Đã Cọc</span>';let E="";return h>0&&(E=`<a href="/invoice.html?id=${t.id}" target="_blank" class="mt-1.5 block text-center text-[11px] text-blue-600 hover:text-blue-800 hover:underline font-medium" onclick="event.stopPropagation()">🧾 Xem hóa đơn</a>`),`
                <tr class="${a} cursor-pointer row-clickable block md:table-row p-4 md:p-0 mb-4 md:mb-0 glass-panel md:glass-none border-l-4 border-green-500 md:border-none relative" data-id="${t.id}">
                    <td class="p-0 md:p-4 align-top block md:table-cell mb-2 md:mb-0">
                        <div class="flex justify-between items-start md:block">
                            <div>
                                <div class="font-bold text-gray-900 text-base md:text-sm">${t.name}</div>
                                <div class="mt-1 flex items-center gap-2">
                                    <div class="bg-orange-50 text-csr-orange text-[10px] md:text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">#CSR${t.id}</div>
                                    <div class="text-[11px] text-gray-500">${t.phone}</div>
                                </div>
                            </div>
                            <div class="md:hidden text-right">
                                <div class="text-[10px] text-gray-400 uppercase font-medium">Trạng thái</div>
                                <div class="mt-1">${L}</div>
                            </div>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 align-top text-sm block md:table-cell border-t md:border-none border-gray-100 mt-2 md:mt-0 pt-2 md:pt-4">
                        <div class="md:hidden text-[10px] text-gray-400 uppercase font-medium mb-1">Thông tin Tour</div>
                        <div class="text-gray-700 font-bold md:font-medium">${t.tour}</div>
                        <div class="text-gray-500 text-xs whitespace-nowrap">${t.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-600 hidden md:table-cell">${t.sale_name||"Website"}</td>
                    <td class="p-4 align-top text-center hidden md:table-cell">${L}${E}</td>
                    
                    <td class="py-2 md:p-4 align-top text-right text-sm font-medium text-gray-700 block md:table-cell border-t md:border-none border-gray-100 pt-2 md:pt-4">
                        <div class="flex justify-between md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Tổng tiền</span>
                            <span>${C}</span>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 align-top text-right text-sm font-medium text-green-600 block md:table-cell">
                        <div class="flex justify-between md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Đã cọc</span>
                            <span>${T}</span>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 align-top text-right text-sm font-bold text-red-500 block md:table-cell">
                        <div class="flex justify-between md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Còn lại</span>
                            <span>${B}</span>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 align-top text-right block md:table-cell border-t md:border-none border-gray-100 pt-2 md:pt-4">
                        <div class="flex justify-between items-center md:justify-end gap-2">
                             <div class="md:hidden">${E}</div>
                             <button class="action-btn payment-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 md:px-3 md:py-1.5 rounded-lg md:rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">Thanh toán</button>
                        </div>
                    </td>
                </tr>
                `}else{const u=t.name?t.name.substring(0,2).toUpperCase():"KH",h=I==="consult",b=!t.sale_id||t.sale_id==="null"||!t.sale_name||t.sale_name==="null";let C="";h&&b?C=`<button class="action-btn claim-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">Nhận khách</button>`:C=`<span class="text-sm text-gray-500">${t.sale_name||"Website"}</span>`;const T=`
                    <button class="action-btn process-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors mr-1" data-id="${t.id}">📝 Thông Tin</button>
                    ${t.customer_id?`<button class="action-btn payment-btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">💳 Thanh toán</button>`:`<button class="action-btn pay-terms-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">🔗 Cọc Tour</button>`}
                `;return`
                <tr class="${a} cursor-pointer row-clickable block md:table-row p-4 md:p-0 mb-4 md:mb-0 glass-panel md:glass-none border-l-4 border-csr-orange md:border-none relative" data-id="${t.id}">
                    <td class="p-0 md:p-4 align-top block md:table-cell">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 md:w-10 md:h-10 rounded-full bg-csr-orange/20 text-csr-orange flex items-center justify-center font-bold text-base md:text-sm shrink-0">${u}</div>
                            <div class="min-w-0">
                                <div class="font-bold text-gray-900 text-base md:text-sm truncate">${t.name}</div>
                                <div class="mt-1 flex items-center gap-2">
                                    <div class="bg-orange-50 text-csr-orange text-[10px] md:text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">#CSR${t.id}</div>
                                    <div class="text-[11px] text-gray-500">${t.phone}</div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="py-3 md:p-4 align-top block md:table-cell border-t md:border-none border-gray-100 mt-3 md:mt-0 pt-3 md:pt-4">
                        <div class="md:hidden text-[10px] text-gray-400 uppercase font-medium mb-1">Đăng ký Tour</div>
                        <div class="text-sm text-gray-700 font-bold md:font-medium">${t.tour||"(Chưa rõ)"}</div>
                        <div class="text-xs text-gray-500 mt-1">Lịch: ${t.date||"(Chưa chọn)"}</div>
                        ${h&&t.special?`<div class="text-xs text-blue-500 mt-1 italic bg-blue-50 md:bg-transparent p-2 md:p-0 rounded">💬 ${t.special}</div>`:""}
                    </td>
                    <td class="py-2 md:p-4 align-top block md:table-cell">
                        <div class="flex justify-between items-center md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Phụ trách</span>
                            <div>${C}</div>
                        </div>
                    </td>
                    <td class="py-3 md:p-4 align-top text-right block md:table-cell border-t md:border-none border-gray-100 mt-2 md:mt-0 pt-3 md:pt-4">
                        <div class="flex flex-row md:flex-col gap-2 justify-end">
                            ${T}
                        </div>
                    </td>
                </tr>
    `}}).join(""),document.querySelectorAll(".claim-btn").forEach(t=>{t.addEventListener("click",async a=>{a.stopPropagation();const u=t.getAttribute("data-id"),h=localStorage.getItem("csr_user");let b=null,C="Admin";if(h){const T=JSON.parse(h);b=T.id,C=T.fullName||T.full_name||"Admin"}t.textContent="Đang xử lý...",t.disabled=!0;try{if((await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:u,sale_id:b,sale_name:C})})).ok){const B=H.find(L=>L.id==u);B&&(B.sale_id=b,B.sale_name=C),P()}else alert("Lỗi khi nhận khách. Vui lòng thử lại."),t.textContent="Nhận khách",t.disabled=!1}catch(T){console.error("Lỗi nhận khách:",T),t.textContent="Nhận khách",t.disabled=!1}})})},Ie=()=>{const n=new Set,e=new Set,o=new Set;H.forEach(s=>{if(s.tour&&n.add(s.tour),s.date){const i=X(s.date);i&&e.add(i)}s.sale_name&&s.sale_name!=="Website"&&s.sale_name!=="null"&&o.add(s.sale_name.trim())});const d=document.getElementById("filterTour"),l=document.getElementById("filterDate"),r=document.getElementById("filterSale");if(d){const s=d.value;d.innerHTML='<option value="">Tất cả Tour</option>',[...n].sort().forEach(i=>d.innerHTML+=`<option value="${i}">${i}</option>`),d.value=s}if(l){const s=l.value;l.innerHTML='<option value="">Tất cả Ngày</option>',[...e].sort().forEach(i=>l.innerHTML+=`<option value="${i}">${i}</option>`),l.value=s}if(r){const s=r.value;r.innerHTML='<option value="">Tất cả Sale</option>',r.innerHTML+='<option value="null">Nguồn Website</option>',[...o].sort().forEach(i=>{r.innerHTML+=`<option value="${i}">${i}</option>`}),r.value=s}};function X(n){if(!n)return"";if(/^\d{1,2}\/\d{1,2}\s*-\s*\d{1,2}\/\d{1,2}$/.test(n))return n.replace(/\s+/g,"");try{if(/^\d{4}-\d{2}-\d{2}$/.test(n)){const[e,o,d]=n.split("-"),l=`${parseInt(d)}/${parseInt(o)}`;return`${l}-${l}`}if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(n)){const[e,o,d]=n.split("/"),l=`${parseInt(e)}/${parseInt(o)}`;return`${l}-${l}`}if(n.includes("-"))return n.split("-").map(o=>{const d=o.trim();if(/\/\d{4}$/.test(d)){const[l,r]=d.split("/");return`${parseInt(l)}/${parseInt(r)}`}return d}).join("-")}catch{console.warn("Date normalization failed for:",n)}return n}const M=async()=>{try{H=await(await fetch("/api/bookings")).json(),H.sort((e,o)=>parseInt(o.id)-parseInt(e.id)),Ie(),P()}catch(n){console.error("Lỗi parse list đơn hàng:",n);const e=document.getElementById("bookingsTableBody");e&&(e.innerHTML='<tr><td colspan="4" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu từ Server.</td></tr>')}};M(),["filterSearch","filterTour","filterDate","filterSale","filterStatus"].forEach(n=>{const e=document.getElementById(n);e&&(n==="filterSearch"?e.addEventListener("input",P):e.addEventListener("change",P))});const se=document.getElementById("exportExcelBtn");se&&se.addEventListener("click",()=>{const n=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",e=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",o=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",d=document.getElementById("filterSale")?document.getElementById("filterSale").value:"";let l=H.filter(p=>{let y=!1;const w=parseInt(p.total_price)>0&&parseInt(p.total_price)===parseInt(p.deposit),x=c=>{if(!c)return!1;try{const k=c.split("/");if(k.length===3){const t=new Date(`${k[2]}-${k[1]}-${k[0]}T00:00:00`),a=new Date;return a.setHours(0,0,0,0),t.getTime()<a.getTime()}else if(c.includes("-")){const t=new Date(`${c}T00:00:00`),a=new Date;return a.setHours(0,0,0,0),t.getTime()<a.getTime()}}catch{}return!1},m=(p.status==="Hoàn thành"||p.status==="Đã đi"||w)&&x(p.date);return I==="consult"?y=p.status==="Chờ tư vấn"&&!m:I==="pending"?y=(!p.status||p.status==="Chờ cọc")&&!m:I==="upcoming"?y=p.status&&p.status!=="Chờ tư vấn"&&p.status!=="Chờ cọc"&&!w&&p.status!=="Hoàn thành"&&!m:I==="ready"?y=(w||p.status==="Hoàn thành")&&!m:I==="completed"&&(y=m),!(!y||e&&p.tour!==e||o&&X(p.date)!==o||d&&d!=="null"&&p.sale_name!==d||d==="null"&&p.sale_name&&p.sale_name!=="Website"||n&&!`${p.name||""} ${p.phone||""} ${p.customer_id||""} ${p.id||""} csr${p.id||""} #csr${p.id||""}`.toLowerCase().includes(n))});if(l.length===0){alert("Danh sách rỗng. Không có dữ liệu để xuất.");return}let r=`
                <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
                <head>
                    <meta charset="utf-8" />
                    <style>
                        table { border-collapse: collapse; width: 100%; font-family: 'Calibri', sans-serif; font-size: 11pt; }
                        th, td { border: 1px solid #000000; padding: 6px 8px; text-align: left; vertical-align: middle; }
                        th { background-color: #f2f2f2; font-weight: bold; }
                        .num { mso-number-format: "\\@"; }
                    </style>
                </head>
                <body>
                    <table>
                        <thead>
                            <tr>
                                <th>Mã KH (CRM)</th>
                                <th>Họ và Tên</th>
                                <th>Số điện thoại</th>
                                <th>Tên Tour</th>
                                <th>Lịch trình</th>
                                <th>Trạng thái</th>
                                <th>Nguồn / Sale</th>
                                <th>Đã cọc</th>
                                <th>Tổng tiền</th>
                                <th>Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody>
            `;l.forEach(p=>{r+=`
                    <tr>
                        <td class="num">#CSR${p.id||""}</td>
                        <td>${(p.name||"").replace(/</g,"&lt;")}</td>
                        <td class="num">${p.phone||""}</td>
                        <td>${(p.tour||"").replace(/</g,"&lt;")}</td>
                        <td class="num">${p.date||""}</td>
                        <td>${(p.status||"").replace(/</g,"&lt;")}</td>
                        <td>${(p.sale_name||"Website").replace(/</g,"&lt;")}</td>
                        <td>${p.deposit||0}</td>
                        <td>${p.total_price||0}</td>
                        <td>${(p.special||"").replace(/</g,"&lt;")}</td>
                    </tr>
                `}),r+=`
                        </tbody>
                    </table>
                </body>
                </html>
            `;const s=new Blob(["\uFEFF",r],{type:"application/vnd.ms-excel;charset=utf-8"}),i=URL.createObjectURL(s),g=document.createElement("a");g.setAttribute("href",i);let v=I==="pending"?"ChoCoc":I==="upcoming"?"SapThamGia":I==="ready"?"ChoLenXe":"LichSu";g.setAttribute("download",`BaoCao_DonHang_${v}_${new Date().toISOString().slice(0,10)}.xls`),document.body.appendChild(g),g.click(),document.body.removeChild(g)});const ie=document.querySelectorAll(".tab-btn");ie.forEach(n=>{n.addEventListener("click",e=>{ie.forEach(o=>{o.classList.remove("border-csr-orange","text-csr-orange"),o.classList.add("border-transparent","text-gray-500")}),e.target.classList.add("border-csr-orange","text-csr-orange"),e.target.classList.remove("border-transparent","text-gray-500"),I=e.target.getAttribute("data-tab"),P()})});const j=document.getElementById("bookingModal"),V=document.getElementById("bookingModalContent"),Y=document.getElementById("detailModal"),de=document.getElementById("detailModalContent"),q=document.getElementById("editModal"),Z=document.getElementById("editModalContent"),le=document.getElementById("addBookingBtn");j&&(j.classList.add("duration-200","ease-out"),V.classList.add("duration-300","ease-out")),q&&(q.classList.add("duration-200","ease-out"),Z.classList.add("duration-300","ease-out")),le&&le.addEventListener("click",()=>{document.getElementById("bookingModalContent").querySelector("h2").innerText="Thêm Khách Hàng (Tạo Đơn)",document.getElementById("submitBookingBtn").innerText="Tạo Phơi Đăng Ký",document.getElementById("editingBookingId").value="",document.getElementById("bookingForm").reset();const n=document.getElementById("loyalty-alert");n&&n.remove(),j.classList.remove("hidden"),setTimeout(()=>{j.classList.add("opacity-100"),V.classList.remove("scale-95","translate-y-4"),V.classList.add("scale-100","translate-y-0")},10)}),window.closeModal=()=>{j&&(j.classList.remove("opacity-100"),V.classList.remove("scale-100","translate-y-0"),V.classList.add("scale-95","translate-y-4"),setTimeout(()=>{j.classList.add("hidden")},200))},window.closeDetailModal=()=>{Y&&(Y.classList.remove("opacity-100"),de.classList.remove("scale-100","translate-y-0"),de.classList.add("scale-95","translate-y-4"),setTimeout(()=>{Y.classList.add("hidden")},200))},window.closeEditModal=()=>{q&&(q.classList.remove("opacity-100"),Z.classList.remove("scale-100","translate-y-0"),Z.classList.add("scale-95","translate-y-4"),setTimeout(()=>{q.classList.add("hidden")},200))},window.openRowActionModal=n=>{document.getElementById("ramName").textContent=n.name||"Khách Hàng Này",document.getElementById("ramPhone").textContent=`#CSR${n.id} - ${n.phone||""}`;const e=`
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionView(${n.id})">
                <div class="bg-blue-100/60 text-blue-600 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Chi Tiết Thông Tin</span>
            </button>
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionEdit(${n.id})">
                <div class="bg-yellow-100/60 text-yellow-600 p-2 rounded-lg group-hover:bg-yellow-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Chỉnh Sửa Phiếu</span>
            </button>
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionDelete(${n.id})">
                <div class="bg-red-100/60 text-red-500 p-2 rounded-lg group-hover:bg-red-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Xóa Đơn Hàng Này</span>
            </button>
        `;document.getElementById("ramActions").innerHTML=e,document.getElementById("rowActionModal").classList.remove("hidden")},window.addEventListener("click",n=>{const e=document.getElementById("rowActionModal");e&&n.target===e&&e.classList.add("hidden")}),window.actionView=n=>{document.getElementById("rowActionModal").classList.add("hidden");const e=H.find(t=>t.id==n);if(!e)return;const o=t=>parseInt(t||0).toLocaleString("vi-VN")+"đ",d=t=>{if(!t)return"—";if(/^\d{4}-\d{2}-\d{2}/.test(t)){const[a,u,h]=t.split("-");return`${h}/${u}/${a}`}return t},l=parseInt(e.total_price)||0,r=parseInt(e.deposit)||0,s=parseInt(e.discount)||0,i=l-r;let g=[];try{if(e.services_booked){const t=typeof e.services_booked=="string"?JSON.parse(e.services_booked):e.services_booked;Array.isArray(t)&&(g=t)}}catch{}const v=g.reduce((t,a)=>t+(parseInt(a.price)||0),0),y={"Chờ tư vấn":"Chờ lịch"}[e.status]||e.status,x={"Chờ tư vấn":"bg-purple-100 text-purple-700 border-purple-200","Chờ cọc":"bg-yellow-100 text-yellow-700 border-yellow-200","Chờ xác nhận cọc":"bg-orange-100 text-orange-700 border-orange-200","Đã cọc":"bg-blue-100 text-blue-700 border-blue-200","Đã cọc (Chờ đi)":"bg-blue-100 text-blue-700 border-blue-200","Hoàn thành":"bg-green-100 text-green-700 border-green-200"}[e.status]||"bg-gray-100 text-gray-700 border-gray-200",m=(t,a,u="")=>`<div class="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-none">
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide min-w-[110px] pt-0.5">${t}</span>
                <span class="text-sm font-medium text-gray-800 flex-1 ${u}">${a||"—"}</span>
            </div>`,c=(t,a,u="bg-blue-50 text-blue-600")=>`<div class="flex items-center gap-2.5 mb-3">
                <div class="w-7 h-7 rounded-lg ${u} flex items-center justify-center flex-shrink-0 text-sm">${t}</div>
                <h3 class="font-bold text-gray-800 text-sm uppercase tracking-wider">${a}</h3>
            </div>`,k=`
        <div class="space-y-4 pb-2">

            <!-- ① Thông tin Tour -->
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-4">
                ${c("🗺️","Thông tin Tour","bg-orange-100 text-orange-600")}
                <div class="grid grid-cols-2 gap-x-4">
                    ${m("Mã Đơn",`<span class="font-mono font-black text-csr-orange text-base">#CSR${e.id}</span>`)}
                    ${m("Tên Tour",`<span class="text-csr-orange font-bold">${e.tour||"—"}</span>`)}
                    ${m("Ngày Khởi Hành",`<span class="font-bold text-gray-900">${d(e.date)}</span>`)}
                    ${m("Ngày Đăng Ký",e.created_at?d(e.created_at.split("T")[0]):"—")}
                    ${m("Trạng Thái",`<span class="inline-block px-2.5 py-1 rounded-full text-xs font-bold border ${x}">${y||"Chưa rõ"}</span>`)}
                    ${m("Tên Huy Chương",`<span class="font-black text-orange-600 uppercase tracking-wide">${e.medal_name||e.name}</span>`)}
                </div>
            </div>

            <!-- ② Thông tin cá nhân -->
            <div class="bg-white border border-gray-200 rounded-2xl p-4">
                ${c("👤","Thông tin Cá nhân","bg-blue-50 text-blue-600")}
                ${m("Họ và Tên",`<span class="font-bold text-gray-900 text-base">${e.name}</span>`)}
                ${m("Số Điện Thoại",`<a href="tel:${e.phone}" class="text-blue-600 font-bold hover:underline">${e.phone||"—"}</a>`)}
                ${m("Ngày Sinh",d(e.dob))}
                ${m("Giới Tính",e.gender||"—")}
                ${m("CCCD / Passport",`<span class="font-mono">${e.id_card||"—"}</span>`)}
                ${m("Địa Chỉ",e.address||"—")}
                ${m("Cam Kết SK",e.commitments?'<span class="text-green-600 font-bold">✅ Đã đồng ý</span>':'<span class="text-red-500">❌ Chưa xác nhận</span>')}
            </div>

            <!-- ③ Thông tin Hậu cần -->
            <div class="bg-white border border-gray-200 rounded-2xl p-4">
                ${c("🎒","Thông tin Hậu cần","bg-purple-50 text-purple-600")}
                ${m("Điểm Đón",e.pickup_point||"—")}
                ${m("Chế Độ Ăn",e.diet||"Không")}
                ${m("Mượn Gậy",e.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">✅ Có mượn gậy</span>':'<span class="text-gray-500">Không</span>')}
                ${m("Dị Ứng / Y Tế",e.allergy?`<span class="text-red-600 font-semibold">${e.allergy}</span>`:'<span class="text-gray-400 italic">Không có</span>')}
                ${m("Yêu Cầu Khác",e.special?`<span class="bg-yellow-50 border border-yellow-100 rounded px-2 py-1 italic text-gray-700">${e.special}</span>`:'<span class="text-gray-400 italic">Không có</span>')}
            </div>

            <!-- ④ Dịch vụ đi kèm -->
            <div class="bg-white border border-gray-200 rounded-2xl p-4">
                ${c("✨","Dịch Vụ Đi Kèm","bg-green-50 text-green-600")}
                ${g.length>0?g.map(t=>`
                        <div class="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-none">
                            <span class="text-sm text-gray-700 font-medium">${t.label||t.name||"—"}</span>
                            <span class="text-sm font-bold text-green-600">+${o(t.price)}</span>
                        </div>`).join(""):'<p class="text-sm text-gray-400 italic py-1">Không có dịch vụ đi kèm.</p>'}
            </div>

            <!-- ⑤ Giá chi tiết -->
            <div class="bg-gradient-to-br from-csr-orange to-orange-600 rounded-2xl p-4 text-white shadow-lg shadow-orange-500/20">
                ${c("💰","Giá Chi Tiết","bg-white/20 text-white")}
                <div class="space-y-2 text-sm">
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span class="text-orange-50 font-medium">Giá Tour Gốc</span>
                        <span class="font-bold">${o(l+s)}</span>
                    </div>
                    ${s>0?`
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span class="text-orange-50 font-medium">Giảm Giá / Coupon</span>
                        <span class="font-bold text-yellow-200">- ${o(s)}</span>
                    </div>`:""}
                    ${v>0?`
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span class="text-orange-50 font-medium">Dịch Vụ Bổ Sung</span>
                        <span class="font-bold text-green-100">+ ${o(v)}</span>
                    </div>`:""}
                    <div class="flex justify-between items-center py-2.5 border-b border-white/20">
                        <span class="text-white font-black uppercase tracking-wider">Tổng Thanh Toán</span>
                        <span class="font-black text-white text-xl drop-shadow-sm">${o(l)}</span>
                    </div>
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <div>
                            <span class="text-orange-50 font-medium">Đã Cọc</span>
                            ${e.deposit_date?`<div class="text-[11px] text-orange-200 mt-0.5">Ngày: ${d(e.deposit_date)}</div>`:""}
                        </div>
                        <span class="font-bold text-green-100">${r>0?o(r):"0đ (Chưa cọc)"}</span>
                    </div>
                    <div class="flex justify-between items-center py-3 bg-white text-gray-900 rounded-xl px-4 mt-3 shadow-inner">
                        <span class="font-black text-xs uppercase tracking-widest text-gray-500">Còn Lại Cần Thu</span>
                        <span class="font-black text-2xl ${i>0?"text-red-600":"text-green-600"}">
                            ${i>0?o(i):"✅ ĐÃ THU ĐỦ"}
                        </span>
                    </div>
                </div>
            </div>

            <!-- ⑥ Hành trình cùng Cam Site (CRM 360) -->
            ${(()=>{const t=e.phone;if(!t)return"";const a=H.filter(E=>E.phone===t&&!E.status?.includes("hủy")&&!E.status?.includes("Hủy")).sort((E,f)=>new Date(f.created_at||0)-new Date(E.created_at||0)),u=a.length,h=a.reduce((E,f)=>E+(parseInt(f.total_price)||0),0);let b,C,T;u>=5?(b="KHÁCH VIP",C="bg-purple-100 text-purple-700 border-purple-300",T="👑"):u>=2?(b="KHÁCH THÂN THIẾT",C="bg-green-100 text-green-700 border-green-300",T="🌟"):(b="KHÁCH MỚI",C="bg-gray-100 text-gray-500 border-gray-300",T="👋");const B=a.filter(E=>E.id!=n),L=B.length>0?B.slice(0,5).map((E,f)=>{const D=E.status?.includes("Hoàn")?"bg-green-100 text-green-600":E.status?.includes("cọc")||E.status?.includes("Cọc")?"bg-blue-100 text-blue-600":"bg-gray-100 text-gray-500";return`<div class="flex items-center gap-3 py-2 border-b border-gray-100 last:border-none">
                            <div class="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-csr-orange text-xs font-bold shrink-0">${f+1}</div>
                            <div class="flex-1 min-w-0">
                                <div class="text-sm font-medium text-gray-800 truncate">${E.tour||"—"}</div>
                                <div class="text-[10px] text-gray-400">${E.date||"—"}${E.medal_name?` • <span class="text-csr-orange font-medium">Huy chương: ${E.medal_name}</span>`:""}</div>
                            </div>
                            <span class="${D} text-[9px] px-2 py-0.5 rounded-full font-bold shrink-0">${E.status||"Mới"}</span>
                        </div>`}).join(""):'<div class="text-center py-3 text-gray-400 text-xs italic">Đây là lần đầu tiên khách đặt tour.</div>';return`<div class="bg-gradient-to-br from-slate-50 to-gray-50 border border-gray-200 rounded-2xl p-4">
                    ${c("🏅","Hành Trình Cùng Cam Site","bg-slate-100 text-slate-600")}

                    <!-- Tier + LTV -->
                    <div class="flex items-center justify-between mb-4 gap-3">
                        <div class="flex items-center gap-2">
                            <span class="text-lg">${T}</span>
                            <span class="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${C}">${b}</span>
                        </div>
                        <div class="text-right">
                            <div class="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">Tổng đã chi (LTV)</div>
                            <div class="text-lg font-black text-gray-900">${h>0?h.toLocaleString("vi-VN")+"đ":"—"}</div>
                        </div>
                    </div>

                    <!-- Số tour tham gia -->
                    <div class="flex items-center gap-2 mb-3 text-sm text-gray-500">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-400">Tổng tour đã đặt:</span>
                        <span class="font-black text-gray-800 text-base">${u}</span>
                        <span class="text-[10px] text-gray-400">(kể cả đơn này)</span>
                    </div>

                    <!-- Lịch sử tours trước -->
                    ${B.length>0?`
                    <div class="mb-3">
                        <div class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-2">Các tour trước đây (${B.length})</div>
                        <div class="bg-white rounded-xl border border-gray-100 px-3">${L}</div>
                    </div>`:L}

                    <!-- Link CRM Profile -->
                    <a href="/admin/customers" data-link class="flex items-center justify-center gap-2 w-full mt-1 py-2 rounded-xl bg-white border border-gray-200 text-xs font-bold text-gray-500 hover:border-csr-orange hover:text-csr-orange transition-colors">
                        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                        Xem Hồ Sơ CRM Đầy Đủ →
                    </a>
                </div>`})()}

            <!-- Sale phụ trách -->
            ${e.sale_name&&e.sale_name!=="Website"?`
            <div class="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                    ${(e.sale_name||"W").charAt(0).toUpperCase()}
                </div>
                <div>
                    <div class="text-xs text-blue-500 uppercase font-semibold tracking-wide">Sale Phụ Trách</div>
                    <div class="text-sm font-bold text-blue-800">${e.sale_name}</div>
                </div>
            </div>`:""}

        </div>`;document.getElementById("detailContentBlock").innerHTML=k,document.getElementById("detailModal").classList.remove("hidden"),setTimeout(()=>{document.getElementById("detailModal").classList.add("opacity-100");const t=document.getElementById("detailModalContent");t&&(t.classList.remove("scale-95","translate-y-4"),t.classList.add("scale-100","translate-y-0"))},10)},window.actionEdit=async n=>{document.getElementById("rowActionModal").classList.add("hidden");const e=H.find(c=>c.id==n);if(!e)return;document.getElementById("edit-id").value=n,document.getElementById("edit-name").value=e.name||"",document.getElementById("edit-phone").value=e.phone||"",document.getElementById("edit-medal-name").value=e.medal_name||"",document.getElementById("edit-tour").value=e.tour||"",typeof R=="function"&&R("edit-date",e.tour||"",e.date||"",e.schedule_id||null),(c=>{let k=c.dob||"";if(typeof k=="string"&&k.includes("/")){const u=k.split("/");u.length===3&&(k=`${u[2]}-${u[1].padStart(2,"0")}-${u[0].padStart(2,"0")}`)}document.getElementById("edit-dob").value=k,document.getElementById("edit-gender").value=c.gender||"Khác",document.getElementById("edit-allergy").value=c.allergy||c.medical_notes||"",document.getElementById("edit-address").value=c.address||"",document.getElementById("edit-diet").value=c.diet||c.dietary||"",document.getElementById("edit-trekking-pole").value=c.trekking_pole||"Không";const t=document.getElementById("edit-id-card");t&&(t.value=c.id_card||c.cccd||"");const a=document.getElementById("edit-pickup-point");a&&(a.value=c.pickup_point||"")})(e),document.getElementById("edit-status").value=e.status||"Chờ xác nhận cọc",document.getElementById("edit-commitments").checked=!!e.commitments,document.getElementById("edit-special").value=e.special||"";try{const c=localStorage.getItem("csr_user");if(c&&JSON.parse(c).role==="admin"){const t=document.getElementById("edit-sale-container");t&&t.classList.remove("hidden");const a=document.getElementById("edit-sale");a&&(a.value=e.sale_id||"")}}catch{}if((!e.dob||!e.address||!e.gender||e.gender==="Khác")&&(e.customer_id||e.phone))try{const c=e.customer_id||e.phone,k=await fetch(`/api/admin_customers?action=search&keyword=${encodeURIComponent(c)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:c})}),t=await k.json();if(k.ok&&t.success){const a=t.data,u=document.getElementById("edit-dob"),h=document.getElementById("edit-address"),b=document.getElementById("edit-allergy"),C=document.getElementById("edit-diet"),T=document.getElementById("edit-gender"),B=document.getElementById("edit-medal-name");u&&!u.value&&(u.value=a.dob||""),h&&!h.value&&(h.value=a.address||""),b&&!b.value&&(b.value=a.medical_notes||""),C&&!C.value&&(C.value=a.dietary||""),T&&(T.value==="Khác"||!T.value)&&(T.value=a.gender||"Khác"),B&&!B.value&&(B.value=a.medal_name||"");const L=document.getElementById("edit-id-card");L&&!L.value&&(L.value=a.cccd||"")}}catch(c){console.error("Pull CRM error:",c)}let l=(parseInt(e.total_price)||0)+(parseInt(e.discount)||0);if(l===0&&e.tour){const c=N.find(k=>k.name===e.tour);c&&parseInt(c.price)>0&&(l=parseInt(c.price))}document.getElementById("edit-total").value=l,document.getElementById("edit-discount").value=e.discount||0,document.getElementById("edit-deposit").value=e.deposit||0;const r=parseInt(e.deposit_required);document.getElementById("edit-deposit-required").value=isNaN(r)?1e6:r,window.updateEditRemaining();const s=document.getElementById("servicesContainer"),i=document.getElementById("emptyServicesMsg"),g=document.getElementById("servicesTotalRow"),v=document.getElementById("presetServicesBlock"),p=document.getElementById("presetServicesList"),y=document.getElementById("servicesDivider");let w=[];try{if(e.services_booked){const c=typeof e.services_booked=="string"?JSON.parse(e.services_booked):e.services_booked;Array.isArray(c)&&(w=c)}}catch{}if(p&&v){p.innerHTML="";const c=N.find(t=>t.name===e.tour);let k=[];try{if(c?.services){const t=typeof c.services=="string"?JSON.parse(c.services):c.services;Array.isArray(t)&&(k=t)}}catch{}k.length>0?(v.classList.remove("hidden"),y&&y.classList.remove("hidden"),k.forEach(t=>{const a=w.some(h=>(h.label||h.name||"").toLowerCase()===(t.label||"").toLowerCase()),u=document.createElement("label");u.className="preset-service-card flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all "+(a?"border-green-400 bg-green-50":"border-gray-100 bg-gray-50 hover:border-orange-200"),u.innerHTML=`
                        <input type="checkbox" class="preset-service-check w-4 h-4 rounded accent-green-500 shrink-0" 
                               data-label="${(t.label||"").replace(/"/g,"&quot;")}" 
                               data-price="${t.price||0}" 
                               ${a?"checked":""}>
                        ${t.image?`<img src="${t.image}" class="w-10 h-10 rounded-lg object-cover shrink-0">`:'<div class="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-500 text-lg shrink-0">✨</div>'}
                        <div class="flex-1 min-w-0">
                            <div class="font-bold text-sm text-gray-800">${t.label||""}</div>
                            ${t.description?`<div class="text-xs text-gray-400 truncate">${t.description}</div>`:""}
                        </div>
                        <div class="text-sm font-black text-green-600 shrink-0">+${parseInt(t.price||0).toLocaleString("vi-VN")}đ</div>
                    `,u.querySelector(".preset-service-check").addEventListener("change",h=>{u.className="preset-service-card flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all "+(h.target.checked?"border-green-400 bg-green-50":"border-gray-100 bg-gray-50 hover:border-orange-200"),window.updateServicesTotal()}),p.appendChild(u)})):(v.classList.add("hidden"),y&&y.classList.add("hidden"))}if(s){s.querySelectorAll(".service-row").forEach(a=>a.remove());const c=N.find(a=>a.name===e.tour);let k=new Set;try{const a=c?.services,u=a?typeof a=="string"?JSON.parse(a):a:[];Array.isArray(u)&&u.forEach(h=>k.add((h.label||"").toLowerCase()))}catch{}const t=w.filter(a=>!k.has((a.label||a.name||"").toLowerCase()));t.length>0?(i&&i.classList.add("hidden"),g&&g.classList.remove("hidden"),t.forEach(a=>window.addServiceRow(a.label||a.name||"",a.price||0))):i&&i.classList.remove("hidden"),window.updateServicesTotal()}const x=document.getElementById("editModal"),m=document.getElementById("editModalContent");x&&m&&(x.classList.remove("hidden"),setTimeout(()=>{x.classList.add("opacity-100"),m.classList.remove("scale-95","translate-y-4"),m.classList.add("scale-100","translate-y-0")},10))},window.actionDelete=async n=>{if(document.getElementById("rowActionModal").classList.add("hidden"),confirm("Bạn có chắc chắn muốn xóa Đơn hàng này? Thao tác không thể hoàn tác."))try{if((await fetch(`/api/bookings?id=${n}`,{method:"DELETE"})).ok)alert("✅ Đã xóa đơn hàng thành công!"),M();else throw new Error("Lỗi từ Server")}catch(e){alert("❌ Không thể xóa bảng ghi này: "+e.message)}},window.updateServicesTotal=()=>{let n=0;document.querySelectorAll(".preset-service-check:checked").forEach(d=>{n+=parseInt(d.dataset.price)||0}),document.querySelectorAll(".service-price-input").forEach(d=>{n+=parseInt(d.value)||0});const e=document.getElementById("servicesTotalDisplay");e&&(e.textContent=n.toLocaleString("vi-VN")+"đ");const o=document.getElementById("servicesTotalRow");return o&&o.classList.toggle("hidden",n===0),window.updateEditRemaining(),n},window.addServiceRow=(n="",e=0)=>{const o=document.getElementById("servicesContainer"),d=document.getElementById("emptyServicesMsg"),l=document.getElementById("servicesTotalRow");if(!o)return;d&&d.classList.add("hidden"),l&&l.classList.remove("hidden");const r=document.createElement("div");r.className="service-row flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5",r.innerHTML=`
            <span class="text-green-500 text-sm">✨</span>
            <input type="text" class="service-label-input flex-1 text-sm bg-transparent border-none outline-none text-gray-700 font-medium placeholder:text-gray-300" placeholder="Tên dịch vụ (VD: Thuê áo mưa, Bảo hiểm...)" value="${n.replace(/"/g,"&quot;")}">
            <div class="flex items-center gap-1 shrink-0">
                <span class="text-xs text-gray-400 font-medium">+</span>
                <input type="number" class="service-price-input w-24 text-sm bg-white border border-gray-200 rounded-lg px-2 py-1 text-green-600 font-bold text-right outline-none focus:border-green-400" placeholder="Giá" value="${e}" min="0">
                <span class="text-xs text-gray-400">đ</span>
            </div>
            <button type="button" class="remove-service-btn text-gray-300 hover:text-red-400 transition-colors ml-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `,r.querySelector(".remove-service-btn").addEventListener("click",()=>{r.remove(),o.querySelectorAll(".service-row").length===0&&(d&&d.classList.remove("hidden"),l&&l.classList.add("hidden")),window.updateServicesTotal()}),r.querySelector(".service-price-input").addEventListener("input",window.updateServicesTotal),o.appendChild(r),window.updateServicesTotal()};const re=document.getElementById("addServiceBtn");re&&re.addEventListener("click",()=>window.addServiceRow()),window.updateEditRemaining=()=>{const n=parseInt(document.getElementById("edit-total")?.value)||0,e=parseInt(document.getElementById("edit-discount")?.value)||0,o=parseInt(document.getElementById("edit-deposit")?.value)||0;let d=0;document.querySelectorAll(".preset-service-check:checked").forEach(i=>{d+=parseInt(i.dataset.price)||0}),document.querySelectorAll(".service-price-input").forEach(i=>{d+=parseInt(i.value)||0});const r=n-e+d-o,s=document.getElementById("edit-remaining");s&&(s.textContent=r>0?r.toLocaleString("vi-VN")+"đ":"0đ")};const ce=document.getElementById("edit-total"),ue=document.getElementById("edit-deposit");ce&&ce.addEventListener("input",window.updateEditRemaining),ue&&ue.addEventListener("input",window.updateEditRemaining),document.querySelectorAll('#bookingModal button[onclick*="hidden"]').forEach(n=>{n.removeAttribute("onclick"),n.addEventListener("click",window.closeModal)});const pe=async n=>{try{const o=await(await fetch("/api/admin_customers?action=create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:n.name,phone:n.phone,cccd:n.id_card||"",dob:n.dob||null,gender:n.gender||"Khác",medical_notes:n.allergy||"",dietary:n.diet||""})})).json();o.success&&o.csr_code&&(console.log("✅ Đã đồng bộ CRM thành công:",n.name,o.csr_code),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n.id,customer_id:o.csr_code})})).ok&&(console.log("✅ Đã cập nhật Booking mã CRM"),typeof M=="function"&&M()))}catch(e){console.error("❌ Lỗi đồng bộ CRM:",e)}},ge=document.getElementById("bookingsTableBody");ge&&ge.addEventListener("click",async n=>{const e=n.target.closest(".action-btn");if(!e){const r=n.target.closest(".row-clickable");if(r){const s=r.getAttribute("data-id"),i=H.find(g=>g.id==s);i&&openRowActionModal(i)}return}const o=e.getAttribute("data-id"),d=H.find(r=>r.id==o);if(!d)return;const l=document.getElementById("rowActionModal");if(l&&l.classList.add("hidden"),e.classList.contains("confirm-deposit-btn")){if(confirm("Xác nhận khách hàng này đã chuyển khoản đặt cọc?"))try{if(e.disabled=!0,e.classList.add("opacity-50"),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o,status:"Đã cọc"})})).ok)alert("✅ Đã xác nhận cọc thành công!"),pe(d),typeof M=="function"&&M();else throw new Error("Lỗi cập nhật API")}catch(r){alert("❌ Lỗi: "+r.message)}finally{e.disabled=!1,e.classList.remove("opacity-50")}return}if(e.classList.contains("delete-btn")){window.actionDelete(o);return}else if(e.classList.contains("process-btn")){const i=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/booking/process.html?id=${o}`;navigator.clipboard.writeText(i).then(()=>{alert("📋 Đã sao chép Link Điền Thông Tin!\\nGửi cho khách: "+i)}).catch(g=>{alert("Lỗi khi Copy Clipboard. Link là: "+i)})}else if(e.classList.contains("pay-terms-btn")){const i=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay-terms.html?id=${o}`;navigator.clipboard.writeText(i).then(()=>{alert("📋 Đã sao chép Link Cọc Tour!\\nGửi cho khách: "+i)}).catch(g=>{alert("Lỗi khi Copy Clipboard. Link là: "+i)})}else if(e.classList.contains("send-btn")){const i=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay?id=${o}`;navigator.clipboard.writeText(i).then(()=>{alert("📋 Đã sao chép Link Thanh Toán Cọc! Gửi cho khách qua Zalo nhé:\\n"+i)}).catch(g=>{alert("Lỗi khi Copy Clipboard. Link là: "+i)})}else if(e.classList.contains("payment-btn")){const g=`Dạ sắp đến ngày khởi hành rồi, cảm ơn anh chị đã tin tưởng và lựa chọn CAM SITE RETREATS trong hành trình lần này, em xin phép nhận nốt thanh toán phần tiền còn lại để chuẩn bị thật tốt cho chuyến đi nhennn!!!
Dạ mình thanh toán ở link này giúp em nhé: ${(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay?id=${o}`}`;navigator.clipboard.writeText(g).then(()=>{const v=e.textContent;e.textContent="✅ Đã copy!",e.classList.remove("bg-blue-500","hover:bg-blue-600"),e.classList.add("bg-green-500"),setTimeout(()=>{e.textContent=v,e.classList.add("bg-blue-500","hover:bg-blue-600"),e.classList.remove("bg-green-500")},2e3)}).catch(()=>{alert(`🔗 Nội dung đã chuẩn bị (copy thủ công):

`+g)})}else e.classList.contains("view-btn")?(document.getElementById("rowActionModal").classList.add("hidden"),window.actionView(o)):e.classList.contains("edit-btn")&&window.actionEdit(o)});const O=document.getElementById("smartSearch"),S=document.getElementById("searchSuggestions");if(O){let n;O.addEventListener("input",e=>{const o=e.target.value.toLowerCase().trim();if(clearTimeout(n),o.length<2){S&&S.classList.add("hidden");return}n=setTimeout(async()=>{try{const d=await fetch(`/api/admin_customers?action=search&keyword=${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:o})}),l=await d.json();if(d.ok&&l.success){const s=[l.data];S&&(S.innerHTML=s.map(i=>`
                            <div class="suggestion-item p-3 hover:bg-orange-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors" 
                                 data-name="${i.full_name}" 
                                 data-phone="${i.phone}" 
                                 data-csr="${i.csr_code||""}"
                                 data-dob="${i.dob||""}"
                                 data-gender="${i.gender||""}"
                                 data-address="${i.address||""}"
                                 data-cccd="${i.cccd||""}"
                                 data-allergy="${i.medical_notes||""}"
                                 data-diet="${i.dietary||""}"
                                 data-trekking_pole="${i.trekking_pole||""}"
                                 data-medal-name="${i.medal_name||""}">
                                <div class="font-bold text-gray-900 text-sm">${i.full_name}</div>
                                <div class="flex justify-between items-center mt-1">
                                    <span class="text-xs text-gray-500">${i.phone}</span>
                                    ${i.csr_code?`<span class="bg-orange-100 text-csr-orange text-[10px] font-bold px-2 py-0.5 rounded">${i.csr_code}</span>`:""}
                                </div>
                            </div>
                        `).join(""),S.classList.remove("hidden"))}else S&&(S.innerHTML='<div class="p-3 text-xs text-gray-400 italic text-center">Không tìm thấy khách hàng cũ</div>',S.classList.remove("hidden"))}catch(d){console.error("Search error:",d)}},300)}),S&&S.addEventListener("click",e=>{const o=e.target.closest(".suggestion-item");if(o){const d=document.getElementById("addFullName"),l=document.getElementById("addPhone"),r=document.getElementById("addCsrCode");d&&(d.value=o.getAttribute("data-name")),l&&(l.value=o.getAttribute("data-phone")),r&&(r.value=o.getAttribute("data-csr"));const s=document.getElementById("addDob"),i=document.getElementById("addGender"),g=document.getElementById("addIdCard"),v=document.getElementById("addAddress");s&&(s.value=o.getAttribute("data-dob")||""),i&&(i.value=o.getAttribute("data-gender")||"Khác"),g&&(g.value=o.getAttribute("data-cccd")||""),v&&(v.value=o.getAttribute("data-address")||"");const p=document.getElementById("addAllergy"),y=document.getElementById("addDiet"),w=document.getElementById("addTrekkingPole"),x=document.getElementById("addMedalName");p&&(p.value=o.getAttribute("data-allergy")||""),y&&(y.value=o.getAttribute("data-diet")||""),w&&(w.value=o.getAttribute("data-trekking_pole")||"Không"),x&&(x.value=o.getAttribute("data-medal-name")||""),window._selectedCustomer={fullName:o.getAttribute("data-name"),phone:o.getAttribute("data-phone"),csrCode:o.getAttribute("data-csr"),dob:o.getAttribute("data-dob")||"",gender:o.getAttribute("data-gender")||"",address:o.getAttribute("data-address")||"",id_card:o.getAttribute("data-cccd")||"",allergy:o.getAttribute("data-allergy")||"",diet:o.getAttribute("data-diet")||"",trekking_pole:o.getAttribute("data-trekking_pole")||"",medal_name:o.getAttribute("data-medal-name")||""},O.value=o.getAttribute("data-name"),S.classList.add("hidden");const m=`
                    <div id="loyalty-alert" class="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-600 rounded-lg text-sm flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Nhận diện khách thân thiết: <b>${o.getAttribute("data-csr")}</b>. Hệ thống sẽ kế thừa toàn bộ hồ sơ cũ!
                    </div>`,c=document.getElementById("loyalty-alert");c&&c.remove(),O.parentElement.insertAdjacentHTML("afterend",m)}}),document.addEventListener("click",e=>{!O.contains(e.target)&&S&&!S.contains(e.target)&&S.classList.add("hidden")})}const G=document.getElementById("addTourPrice"),z=document.getElementById("addDiscount"),me=document.getElementById("addTotalPriceDisplay");document.getElementById("addTourName");const he=()=>{if(!G||!z||!me)return;const n=parseInt(G.value)||0,e=parseInt(z.value)||0,o=n-e;me.textContent=(o>0?o:0).toLocaleString("vi-VN")+"đ"};G&&G.addEventListener("input",he),z&&z.addEventListener("input",he);const be=document.getElementById("searchBtn");be&&be.addEventListener("click",n=>{n.preventDefault(),document.getElementById("smartSearch").value||alert("Vui lòng nhập Số Điện Thoại hoặc Mã #CSR")});const W=document.getElementById("bookingForm");W&&W.addEventListener("submit",async n=>{n.preventDefault();const e=n.target.querySelector('button[type="submit"]'),o=e.textContent;e.textContent="Đang lưu hệ thống...",e.disabled=!0;try{const d=document.getElementById("addFullName").value,l=document.getElementById("addPhone").value,r=document.getElementById("addTourName").value,s=document.getElementById("addTourDate").value;let i=null,g=s;if(s&&s.includes("::")){const $=s.split("::");i=parseInt($[0])||null,g=$[1]}const v=document.getElementById("addDob").value,p=document.getElementById("addGender").value,y=document.getElementById("addIdCard").value,w=document.getElementById("addAddress").value,x=document.getElementById("addSpecial").value,m=document.getElementById("addAllergy").value,c=document.getElementById("addDiet").value,k=document.getElementById("addTrekkingPole").value,t=document.getElementById("addMedalName").value,a=parseInt(document.getElementById("addTourPrice").value)||0,u=parseInt(document.getElementById("addDiscount").value)||0,h=parseInt(document.getElementById("addDepositRequired").value),b=isNaN(h)?1e6:h,C=document.getElementById("addCsrCode").value||"",T=localStorage.getItem("csr_user");let B=null,L="Admin";if(T){const $=JSON.parse(T);B=$.id,L=$.fullName||$.full_name||"Admin"}const E=document.getElementById("editingBookingId")?document.getElementById("editingBookingId").value:"",f={name:d,phone:l,tour:r,date:g,status:"Chờ cọc",total_price:a-u,discount:u,deposit:0,sale_id:B,sale_name:L,customer_id:C,deposit_required:b,commitments:!0,schedule_id:i,dob:v,gender:p,address:w,id_card:y,special:x,allergy:m,diet:c,trekking_pole:k,medal_name:t},D=l.replace(/[^0-9]/g,"");window._selectedCustomer&&(window._selectedCustomer.phone||"").replace(/[^0-9]/g,"")===D&&(f.dob=f.dob||window._selectedCustomer.dob,f.gender=f.gender&&f.gender!=="Khác"?f.gender:window._selectedCustomer.gender||"Khác",f.address=f.address||window._selectedCustomer.address,f.id_card=f.id_card||window._selectedCustomer.id_card,f.allergy=window._selectedCustomer.allergy,f.diet=window._selectedCustomer.diet,f.trekking_pole=window._selectedCustomer.trekking_pole,f.medal_name=window._selectedCustomer.medal_name),E&&(f.id=E,delete f.status,delete f.deposit,delete f.sale_id,delete f.sale_name);const K=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)});if(K.ok){alert(E?"✅ Đã lưu Cập nhật Đơn hàng!":"✅ Thêm Đơn Hàng Thành Công!"),window.closeModal(),W&&W.reset(),window._selectedCustomer=null;const $=document.getElementById("loyalty-alert");$&&$.remove(),document.getElementById("addTotalPriceDisplay")&&(document.getElementById("addTotalPriceDisplay").textContent="0đ"),typeof M=="function"?M():window.location.reload()}else{const $=await K.json();throw new Error($.error||"Lỗi tạo Booking!")}}catch(d){alert("❌ "+d.message)}finally{e.textContent=o,e.disabled=!1}});const xe=document.getElementById("editForm");xe&&xe.addEventListener("submit",async n=>{n.preventDefault();const e=n.target.querySelector('button[type="submit"]'),o=e.textContent;e.textContent="Đang lưu cập nhật...",e.disabled=!0;try{const d=document.getElementById("edit-id").value,l=document.getElementById("edit-name").value,r=document.getElementById("edit-phone").value,s=document.getElementById("edit-medal-name").value,i=document.getElementById("edit-tour").value,g=document.getElementById("edit-date").value;let v=g,p;if(g&&g.includes("::")){const _=g.split("::");p=parseInt(_[0])||null,v=_[1]}const y=document.getElementById("edit-dob").value,w=document.getElementById("edit-gender").value,x=document.getElementById("edit-status").value,m=document.getElementById("edit-allergy").value,c=document.getElementById("edit-address").value,k=document.getElementById("edit-diet").value,t=document.getElementById("edit-trekking-pole").value,a=document.getElementById("edit-commitments").checked,u=document.getElementById("edit-special").value,h=document.getElementById("edit-id-card"),b=h?h.value:"",C=document.getElementById("edit-pickup-point"),T=C?C.value:"",B=[];document.querySelectorAll(".preset-service-check:checked").forEach(_=>{const A=_.dataset.label,ee=parseInt(_.dataset.price)||0;A&&B.push({label:A,price:ee})}),document.querySelectorAll(".service-row").forEach(_=>{const A=(_.querySelector(".service-label-input")?.value||"").trim(),ee=parseInt(_.querySelector(".service-price-input")?.value)||0;A&&B.push({label:A,price:ee})});const E=B.length>0?JSON.stringify(B):null,f=document.getElementById("edit-sale");let D,K;if(f&&f.parentElement&&!f.parentElement.classList.contains("hidden")&&(D=f.value||null,K="Website",D)){const _=J.find(A=>String(A.id)===String(D));_&&(K=_.full_name||_.fullName)}const $=parseInt(document.getElementById("edit-total").value)||0,ve=parseInt(document.getElementById("edit-discount").value)||0,ye=parseInt(document.getElementById("edit-deposit").value)||0,we=parseInt(document.getElementById("edit-deposit-required").value),Ee=isNaN(we)?1e6:we,F={id:d,name:l,phone:r,medal_name:s,tour:i,date:v,dob:y,gender:w,status:x,allergy:m,address:c,diet:k,trekking_pole:t,commitments:a,special:u,id_card:b,pickup_point:T,services_booked:E,sale_id:D,sale_name:K,total_price:$-ve,discount:ve,deposit:ye,deposit_required:Ee,...p!==void 0?{schedule_id:p}:{}},ke=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)});if(ke.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),(x.includes("Đã cọc")||F.total_price>0&&F.total_price===ye)&&pe(F),window.closeEditModal(),typeof M=="function"&&M();else{const _=await ke.json();throw new Error(_.error||"Gặp sự cố khi Cập nhật API.")}}catch(d){alert("❌ Lỗi Cập nhật: "+d.message)}finally{e.textContent=o,e.disabled=!1}}),window.openWaitingModal=()=>{document.getElementById("waitingModal").classList.remove("hidden"),setTimeout(()=>{document.getElementById("waitingModal").classList.add("opacity-100");const n=document.getElementById("waitingModalContent");n&&(n.classList.remove("scale-95"),n.classList.add("scale-100"))},10)},window.closeWaitingModal=()=>{document.getElementById("waitingModal").classList.remove("opacity-100");const n=document.getElementById("waitingModalContent");n&&(n.classList.remove("scale-100"),n.classList.add("scale-95")),setTimeout(()=>{document.getElementById("waitingModal").classList.add("hidden")},300)};const fe=document.getElementById("addWaitingBtn");fe&&fe.addEventListener("click",()=>window.openWaitingModal());const Q=document.getElementById("waitingForm");Q&&Q.addEventListener("submit",async n=>{n.preventDefault();const e=document.getElementById("wl-submit");e.innerHTML="Đang lưu...",e.disabled=!0;const o=document.getElementById("wl-zalo").value?`Tên Zalo / Ghi Chú: ${document.getElementById("wl-zalo").value}`:"";let d={id:"null",name:"Website"};try{const s=localStorage.getItem("csr_user");if(s){const i=JSON.parse(s);d={id:i.id,name:i.full_name||i.fullName}}}catch{}const l={name:document.getElementById("wl-name").value,phone:document.getElementById("wl-phone").value,tour:document.getElementById("wl-tour").value,date:"Mở (Chưa có ngày)",status:"Chờ tư vấn",special:o,sale_id:d.id,sale_name:d.name},r=document.getElementById("wl-date");if(r&&r.value){const s=r.value.split("::");s.length===2&&s[0]&&s[0]!=="undefined"&&(l.schedule_id=s[0],l.date=s[1])}try{const i=await(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).json();i.success?(window.closeWaitingModal(),Q.reset(),typeof M=="function"?M():(alert("✅ Đã thêm vào danh sách chờ!"),window.location.reload())):alert("Lỗi lưu danh sách: "+i.message)}catch(s){console.error(s),alert("Có lỗi xảy ra, vui lòng thử lại.")}finally{e.innerHTML="Lưu Vào Danh Sách",e.disabled=!1}})};export{Me as afterRender,_e as render};
