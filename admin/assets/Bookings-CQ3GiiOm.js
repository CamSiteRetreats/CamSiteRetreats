import{S as he,H as be}from"./Header-CamAZjvb.js";console.log("Bookings V3 - Cache Busted!");const ye=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${he()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${be()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-6">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Khách Đăng Ký & Tham Gia Tour</h1>
                          <p class="text-gray-500 text-sm">Quản lý đăng ký chờ lịch, đơn hàng và thông tin chi tiết đoàn.</p>
                      </div>
                      <button id="addBookingBtn" class="btn-primary flex items-center gap-2 shadow-lg shadow-csr-orange/20">
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                          Thêm Khách Thủ Công
                      </button>
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

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 border-b border-gray-100 pb-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Trạng Thái Đơn</label>
                              <select id="edit-status" class="input-field bg-gray-50 text-sm font-medium">
                                  <option value="Chờ xác nhận cọc">Chờ xác nhận cọc</option>
                                  <option value="Đã cọc (Chờ đi)">Đã cọc (Chờ đi)</option>
                                  <option value="Hoàn thành">Hoàn thành</option>
                              </select>
                          </div>
                          <div id="edit-sale-container" class="hidden">
                              <label class="block text-xs font-bold text-blue-600 uppercase mb-1.5">Người Phụ Trách</label>
                              <select id="edit-sale" class="input-field bg-blue-50 text-sm font-bold text-blue-700 border-blue-200">
                                  <option value="">-- Website --</option>
                              </select>
                          </div>
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
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

                      <div class="border-t border-gray-100 pt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Giá Tour (Gốc)</label>
                              <input type="number" id="edit-total" class="input-field bg-gray-50 font-bold text-gray-900" oninput="window.updateEditRemaining()">
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-red-500 uppercase mb-1.5">Giảm Giá</label>
                              <input type="number" id="edit-discount" class="input-field bg-red-50 text-red-600 font-bold" oninput="window.updateEditRemaining()">
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Khách Đã Cọc</label>
                              <input type="number" id="edit-deposit" class="input-field bg-green-50 border-green-200 font-bold text-green-700" oninput="window.updateEditRemaining()">
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
    `,ve=()=>{let _=[],w="consult",D=[],J=[],q=[];const ue=async()=>{try{const[a,e,n]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules"),fetch("/api/users")]);D=a.ok?await a.json():[],J=e.ok?await e.json():[],q=n.ok?await n.json():[],X("addTourName"),X("edit-tour"),pe("edit-sale")}catch(a){console.error("Lỗi tải tours/schedules:",a)}},pe=a=>{const e=document.getElementById(a);e&&(e.innerHTML='<option value="">-- Website --</option>',q.forEach(n=>{const l=document.createElement("option");l.value=n.id,l.textContent=`${n.full_name||n.fullName} (${n.role})`,e.appendChild(l)}))},X=a=>{const e=document.getElementById(a);if(!e)return;const n=e.value,l=e.options[0].outerHTML;e.innerHTML=l,D.filter(r=>r.is_visible!==!1).forEach(r=>{const c=document.createElement("option");c.value=r.name,c.textContent=r.name,r.name===n&&(c.selected=!0),e.appendChild(c)})},V=(a,e,n,l)=>{const r=document.getElementById(a);if(!r)return;if(r.innerHTML='<option value="">-- Chọn Lịch --</option>',!e){r.innerHTML='<option value="">-- Chọn Tour trước --</option>';return}const c=J.filter(d=>d.tour_name===e||e.includes(d.tour_name)||d.tour_name.includes(e));if(c.length===0){r.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}c.sort((d,o)=>new Date(d.start_date)-new Date(o.start_date)).forEach(d=>{const o=parseInt(d.booked_count)||0,i=(d.slots||0)-o,m=new Date(d.start_date),s=d.end_date?new Date(d.end_date):null,h=f=>`${f.getDate().toString().padStart(2,"0")}/${(f.getMonth()+1).toString().padStart(2,"0")}`;let x=h(m);s&&(x+=" - "+h(s)),d.group_label&&(x+=` · ${d.group_label}`),x+=` (${i>=0?i:0} chỗ trống)`;const b=document.createElement("option"),g=`${m.getDate().toString().padStart(2,"0")}/${(m.getMonth()+1).toString().padStart(2,"0")}/${m.getFullYear()}`;b.value=`${d.id}::${g}`,b.dataset.scheduleId=d.id,b.dataset.date=g,b.textContent=x,i<=0&&(b.disabled=!0,b.textContent=x.replace("chỗ trống","HẾT CHỖ")),(l&&String(d.id)===String(l)||!l&&n&&g===n)&&(b.selected=!0),r.appendChild(b)})},Y=document.getElementById("addTourName");Y&&Y.addEventListener("change",a=>{const e=a.target.value;V("addTourDate",e);const n=D.find(r=>r.name===e),l=document.getElementById("addTourPrice");if(n&&l){const r=parseInt(n.price)||0;l.value=r;const c=document.getElementById("addDiscount"),d=document.getElementById("addTotalPriceDisplay"),o=parseInt(c?c.value:0)||0,i=r-o;d&&(d.textContent=(i>0?i:0).toLocaleString("vi-VN")+"đ")}});const Q=document.getElementById("edit-tour");Q&&Q.addEventListener("change",a=>{const e=a.target.value;V("edit-date",e);const n=D.find(r=>r.name===e),l=document.getElementById("edit-total");n&&l&&(parseInt(l.value)===0||!l.value)&&(l.value=parseInt(n.price)||0,typeof window.updateEditRemaining=="function"&&window.updateEditRemaining())}),ue();const j=()=>{const a=document.getElementById("bookingsTableHead"),e=document.getElementById("bookingsTableBody");if(!e||!a)return;const n=w==="upcoming"||w==="ready"||w==="completed";n?a.innerHTML=`
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
            `:a.innerHTML=`
                <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                    <th class="p-4 font-medium">Khách Hàng</th>
                    <th class="p-4 font-medium">Thông tin Tour</th>
                    <th class="p-4 font-medium">Nguồn / Sale</th>
                    <th class="p-4 font-medium text-right w-[280px]">Thao Tác</th>
                </tr>
            `;const l=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",r=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",c=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",d=document.getElementById("filterSale")?document.getElementById("filterSale").value:"",o=document.getElementById("filterStatus")?document.getElementById("filterStatus").value:"";let i=_.filter(t=>{let p=!1;const u=parseInt(t.total_price)>0&&parseInt(t.total_price)===parseInt(t.deposit),C=T=>{if(!T)return!1;try{const I=T.split("/");if(I.length===3){const $=new Date(`${I[2]}-${I[1]}-${I[0]}T00:00:00`),E=new Date;return E.setHours(0,0,0,0),$.getTime()<E.getTime()}else if(T.includes("-")){const $=new Date(`${T}T00:00:00`),E=new Date;return E.setHours(0,0,0,0),$.getTime()<E.getTime()}}catch{}return!1},k=(t.status==="Hoàn thành"||t.status==="Đã đi"||u)&&C(t.date);return w==="consult"?p=t.status==="Chờ tư vấn"&&!k:w==="pending"?p=(!t.status||t.status==="Chờ cọc"||t.status==="Chờ xác nhận cọc")&&!k:w==="upcoming"?p=t.status&&t.status!=="Chờ tư vấn"&&t.status!=="Chờ cọc"&&t.status!=="Chờ xác nhận cọc"&&!u&&t.status!=="Hoàn thành"&&!k:w==="ready"?p=(u||t.status==="Hoàn thành")&&!k:w==="completed"&&(p=k),!(!p||r&&t.tour!==r||c&&F(t.date)!==c||d&&d!=="null"&&t.sale_name!==d||d==="null"&&t.sale_name&&t.sale_name!=="Website"||l&&!`${t.name||""} ${t.phone||""} ${t.customer_id||""} ${t.id||""} csr${t.id||""} #csr${t.id||""}`.toLowerCase().includes(l)||o&&t.status!==o)});const m=document.getElementById("statTitle1"),s=document.getElementById("statTitle2"),h=document.getElementById("statTitle3"),x=document.getElementById("statTotalCustomers"),b=document.getElementById("statTotalRevenue"),g=document.getElementById("statTotalCollected");let f=i.length;if(w==="consult"){m&&(m.textContent="Tổng Đăng Ký Chờ Lịch"),s&&(s.textContent="Chưa Được Liên Hệ"),h&&(h.textContent="Đã Có Sale Phụ Trách");let t=0,p=0;i.forEach(u=>{!u.sale_id||u.sale_id==="null"||!u.sale_name||u.sale_name==="Website"||u.sale_name==="null"?t++:p++}),x&&(x.textContent=f),b&&(b.textContent=t+" Người"),g&&(g.textContent=p+" Người")}else if(w==="pending"){m&&(m.textContent="Tổng Khách (Chờ Cọc)"),s&&(s.textContent="Khách Chưa Tư Vấn (Mới)"),h&&(h.textContent="Đã Có Sale Giữ Chỗ");let t=0,p=0;i.forEach(u=>{!u.sale_id||u.sale_id==="null"||!u.sale_name||u.sale_name==="Website"||u.sale_name==="null"?t++:p++}),x&&(x.textContent=f),b&&(b.textContent=t+" Đơn"),g&&(g.textContent=p+" Đơn")}else if(w==="upcoming"){m&&(m.textContent="Tổng Số Khách"),s&&(s.textContent="Chưa Xác Nhận Cọc"),h&&(h.textContent="Chờ Thanh Toán Còn Lại");let t=0,p=0;i.forEach(u=>{u.status==="Chờ xác nhận cọc"?t++:parseInt(u.deposit)>0&&parseInt(u.total_price)>parseInt(u.deposit)&&p++}),x&&(x.textContent=f),b&&(b.textContent=t+" Khách"),g&&(g.textContent=p+" Khách")}else if(w==="ready"){m&&(m.textContent="Khách Sẵn Sàng (Full)"),s&&(s.textContent="Tổng Doanh Thu Tab"),h&&(h.textContent="Thực Thu (Full Tận Nơi)");let t=0,p=0;i.forEach(u=>{t+=parseInt(u.total_price)||0,p+=parseInt(u.deposit)||0}),x&&(x.textContent=f),b&&(b.textContent=t>0?t.toLocaleString("vi-VN")+"đ":"0đ"),g&&(g.textContent=p>0?p.toLocaleString("vi-VN")+"đ":"0đ")}else{m&&(m.textContent="Khách Đã Xong (Lịch Sử)"),s&&(s.textContent="Tổng Doanh Thu Tab"),h&&(h.textContent="Thực Thu (Đã Đóng)");let t=0,p=0;i.forEach(u=>{t+=parseInt(u.total_price)||0,p+=parseInt(u.deposit)||0}),x&&(x.textContent=f),b&&(b.textContent=t>0?t.toLocaleString("vi-VN")+"đ":"0đ"),g&&(g.textContent=p>0?p.toLocaleString("vi-VN")+"đ":"0đ")}const L=n?8:4;if(!i||i.length===0){let t=w==="consult"?"Chưa có khách hàng tư vấn nào.":w==="pending"?"Chưa có Khách chờ cọc.":w==="upcoming"?"Chưa có Khách nào Đã Cọc.":w==="ready"?"Chưa có khách sẵn sàng.":"Danh sách rỗng.";e.innerHTML=`<tr><td colspan="${L}" class="p-8 text-center text-gray-500">${t}</td></tr>`;return}e.innerHTML=i.map(t=>{const p=w==="upcoming"||w==="ready"?"bg-green-50/20 hover:bg-green-50 transition-colors":"hover:bg-gray-100 transition-colors";if(n){let u=parseInt(t.total_price)||0;if(u===0&&t.tour&&D&&D.length>0){const y=D.find(M=>M.name&&t.tour&&M.name.toLowerCase().trim()===t.tour.toLowerCase().trim());y&&parseInt(y.price)>0&&(u=parseInt(y.price))}const C=parseInt(t.deposit)||0,k=u-C,T=u>0?u.toLocaleString("vi-VN")+"đ":"Chưa định giá",I=C>0?C.toLocaleString("vi-VN")+"đ":"0đ",$=k>0?k.toLocaleString("vi-VN")+"đ":k===0&&u>0?"Đã thu trọn":"-";let E="";t.status==="Hoàn thành"||t.status==="Đã đi"?E='<span class="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-xs block w-full text-center">Hoàn thành</span>':t.status==="Chờ xác nhận cọc"?E=`<button class="action-btn confirm-deposit-btn bg-csr-orange text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-[#d65503] w-full" data-id="${t.id}">Xác nhận cọc</button>`:C>0&&k===0?E='<span class="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Hoàn tất phí</span>':E='<span class="bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Đã Cọc</span>';let v="";return C>0&&(v=`<a href="/invoice.html?id=${t.id}" target="_blank" class="mt-1.5 block text-center text-[11px] text-blue-600 hover:text-blue-800 hover:underline font-medium" onclick="event.stopPropagation()">🧾 Xem hóa đơn</a>`),`
                <tr class="${p} cursor-pointer row-clickable block md:table-row p-4 md:p-0 mb-4 md:mb-0 glass-panel md:glass-none border-l-4 border-green-500 md:border-none relative" data-id="${t.id}">
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
                                <div class="mt-1">${E}</div>
                            </div>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 align-top text-sm block md:table-cell border-t md:border-none border-gray-100 mt-2 md:mt-0 pt-2 md:pt-4">
                        <div class="md:hidden text-[10px] text-gray-400 uppercase font-medium mb-1">Thông tin Tour</div>
                        <div class="text-gray-700 font-bold md:font-medium">${t.tour}</div>
                        <div class="text-gray-500 text-xs whitespace-nowrap">${t.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-600 hidden md:table-cell">${t.sale_name||"Website"}</td>
                    <td class="p-4 align-top text-center hidden md:table-cell">${E}${v}</td>
                    
                    <td class="py-2 md:p-4 align-top text-right text-sm font-medium text-gray-700 block md:table-cell border-t md:border-none border-gray-100 pt-2 md:pt-4">
                        <div class="flex justify-between md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Tổng tiền</span>
                            <span>${T}</span>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 align-top text-right text-sm font-medium text-green-600 block md:table-cell">
                        <div class="flex justify-between md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Đã cọc</span>
                            <span>${I}</span>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 align-top text-right text-sm font-bold text-red-500 block md:table-cell">
                        <div class="flex justify-between md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Còn lại</span>
                            <span>${$}</span>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 align-top text-right block md:table-cell border-t md:border-none border-gray-100 pt-2 md:pt-4">
                        <div class="flex justify-between items-center md:justify-end gap-2">
                             <div class="md:hidden">${v}</div>
                             <button class="action-btn payment-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 md:px-3 md:py-1.5 rounded-lg md:rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">Thanh toán</button>
                        </div>
                    </td>
                </tr>
                `}else{const u=t.name?t.name.substring(0,2).toUpperCase():"KH",C=w==="consult",k=!t.sale_id||t.sale_id==="null"||!t.sale_name||t.sale_name==="null";let T="";C&&k?T=`<button class="action-btn claim-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">Nhận khách</button>`:T=`<span class="text-sm text-gray-500">${t.sale_name||"Website"}</span>`;const I=`
                    <button class="action-btn process-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors mr-1" data-id="${t.id}">📝 Thông Tin</button>
                    ${t.customer_id?`<button class="action-btn payment-btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">💳 Thanh toán</button>`:`<button class="action-btn pay-terms-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">🔗 Cọc Tour</button>`}
                `;return`
                <tr class="${p} cursor-pointer row-clickable block md:table-row p-4 md:p-0 mb-4 md:mb-0 glass-panel md:glass-none border-l-4 border-csr-orange md:border-none relative" data-id="${t.id}">
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
                        ${C&&t.special?`<div class="text-xs text-blue-500 mt-1 italic bg-blue-50 md:bg-transparent p-2 md:p-0 rounded">💬 ${t.special}</div>`:""}
                    </td>
                    <td class="py-2 md:p-4 align-top block md:table-cell">
                        <div class="flex justify-between items-center md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Phụ trách</span>
                            <div>${T}</div>
                        </div>
                    </td>
                    <td class="py-3 md:p-4 align-top text-right block md:table-cell border-t md:border-none border-gray-100 mt-2 md:mt-0 pt-3 md:pt-4">
                        <div class="flex flex-row md:flex-col gap-2 justify-end">
                            ${I}
                        </div>
                    </td>
                </tr>
    `}}).join(""),document.querySelectorAll(".claim-btn").forEach(t=>{t.addEventListener("click",async p=>{p.stopPropagation();const u=t.getAttribute("data-id"),C=localStorage.getItem("csr_user");let k=null,T="Admin";if(C){const I=JSON.parse(C);k=I.id,T=I.fullName||I.full_name||"Admin"}t.textContent="Đang xử lý...",t.disabled=!0;try{if((await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:u,sale_id:k,sale_name:T})})).ok){const $=_.find(E=>E.id==u);$&&($.sale_id=k,$.sale_name=T),j()}else alert("Lỗi khi nhận khách. Vui lòng thử lại."),t.textContent="Nhận khách",t.disabled=!1}catch(I){console.error("Lỗi nhận khách:",I),t.textContent="Nhận khách",t.disabled=!1}})})},ge=()=>{const a=new Set,e=new Set,n=new Set;_.forEach(d=>{if(d.tour&&a.add(d.tour),d.date){const o=F(d.date);o&&e.add(o)}d.sale_name&&d.sale_name!=="Website"&&d.sale_name!=="null"&&n.add(d.sale_name.trim())});const l=document.getElementById("filterTour"),r=document.getElementById("filterDate"),c=document.getElementById("filterSale");if(l){const d=l.value;l.innerHTML='<option value="">Tất cả Tour</option>',[...a].sort().forEach(o=>l.innerHTML+=`<option value="${o}">${o}</option>`),l.value=d}if(r){const d=r.value;r.innerHTML='<option value="">Tất cả Ngày</option>',[...e].sort().forEach(o=>r.innerHTML+=`<option value="${o}">${o}</option>`),r.value=d}if(c){const d=c.value;c.innerHTML='<option value="">Tất cả Sale</option>',c.innerHTML+='<option value="null">Nguồn Website</option>',[...n].sort().forEach(o=>{c.innerHTML+=`<option value="${o}">${o}</option>`}),c.value=d}};function F(a){if(!a)return"";if(/^\d{1,2}\/\d{1,2}\s*-\s*\d{1,2}\/\d{1,2}$/.test(a))return a.replace(/\s+/g,"");try{if(/^\d{4}-\d{2}-\d{2}$/.test(a)){const[e,n,l]=a.split("-"),r=`${parseInt(l)}/${parseInt(n)}`;return`${r}-${r}`}if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(a)){const[e,n,l]=a.split("/"),r=`${parseInt(e)}/${parseInt(n)}`;return`${r}-${r}`}if(a.includes("-"))return a.split("-").map(n=>{const l=n.trim();if(/\/\d{4}$/.test(l)){const[r,c]=l.split("/");return`${parseInt(r)}/${parseInt(c)}`}return l}).join("-")}catch{console.warn("Date normalization failed for:",a)}return a}const H=async()=>{try{_=await(await fetch("/api/bookings")).json(),_.sort((e,n)=>parseInt(n.id)-parseInt(e.id)),ge(),j()}catch(a){console.error("Lỗi parse list đơn hàng:",a);const e=document.getElementById("bookingsTableBody");e&&(e.innerHTML='<tr><td colspan="4" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu từ Server.</td></tr>')}};H(),["filterSearch","filterTour","filterDate","filterSale","filterStatus"].forEach(a=>{const e=document.getElementById(a);e&&(a==="filterSearch"?e.addEventListener("input",j):e.addEventListener("change",j))});const Z=document.getElementById("exportExcelBtn");Z&&Z.addEventListener("click",()=>{const a=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",e=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",n=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",l=document.getElementById("filterSale")?document.getElementById("filterSale").value:"";let r=_.filter(s=>{let h=!1;const x=parseInt(s.total_price)>0&&parseInt(s.total_price)===parseInt(s.deposit),b=f=>{if(!f)return!1;try{const L=f.split("/");if(L.length===3){const t=new Date(`${L[2]}-${L[1]}-${L[0]}T00:00:00`),p=new Date;return p.setHours(0,0,0,0),t.getTime()<p.getTime()}else if(f.includes("-")){const t=new Date(`${f}T00:00:00`),p=new Date;return p.setHours(0,0,0,0),t.getTime()<p.getTime()}}catch{}return!1},g=(s.status==="Hoàn thành"||s.status==="Đã đi"||x)&&b(s.date);return w==="consult"?h=s.status==="Chờ tư vấn"&&!g:w==="pending"?h=(!s.status||s.status==="Chờ cọc")&&!g:w==="upcoming"?h=s.status&&s.status!=="Chờ tư vấn"&&s.status!=="Chờ cọc"&&!x&&s.status!=="Hoàn thành"&&!g:w==="ready"?h=(x||s.status==="Hoàn thành")&&!g:w==="completed"&&(h=g),!(!h||e&&s.tour!==e||n&&F(s.date)!==n||l&&l!=="null"&&s.sale_name!==l||l==="null"&&s.sale_name&&s.sale_name!=="Website"||a&&!`${s.name||""} ${s.phone||""} ${s.customer_id||""} ${s.id||""} csr${s.id||""} #csr${s.id||""}`.toLowerCase().includes(a))});if(r.length===0){alert("Danh sách rỗng. Không có dữ liệu để xuất.");return}let c=`
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
            `;r.forEach(s=>{c+=`
                    <tr>
                        <td class="num">#CSR${s.id||""}</td>
                        <td>${(s.name||"").replace(/</g,"&lt;")}</td>
                        <td class="num">${s.phone||""}</td>
                        <td>${(s.tour||"").replace(/</g,"&lt;")}</td>
                        <td class="num">${s.date||""}</td>
                        <td>${(s.status||"").replace(/</g,"&lt;")}</td>
                        <td>${(s.sale_name||"Website").replace(/</g,"&lt;")}</td>
                        <td>${s.deposit||0}</td>
                        <td>${s.total_price||0}</td>
                        <td>${(s.special||"").replace(/</g,"&lt;")}</td>
                    </tr>
                `}),c+=`
                        </tbody>
                    </table>
                </body>
                </html>
            `;const d=new Blob(["\uFEFF",c],{type:"application/vnd.ms-excel;charset=utf-8"}),o=URL.createObjectURL(d),i=document.createElement("a");i.setAttribute("href",o);let m=w==="pending"?"ChoCoc":w==="upcoming"?"SapThamGia":w==="ready"?"ChoLenXe":"LichSu";i.setAttribute("download",`BaoCao_DonHang_${m}_${new Date().toISOString().slice(0,10)}.xls`),document.body.appendChild(i),i.click(),document.body.removeChild(i)});const ee=document.querySelectorAll(".tab-btn");ee.forEach(a=>{a.addEventListener("click",e=>{ee.forEach(n=>{n.classList.remove("border-csr-orange","text-csr-orange"),n.classList.add("border-transparent","text-gray-500")}),e.target.classList.add("border-csr-orange","text-csr-orange"),e.target.classList.remove("border-transparent","text-gray-500"),w=e.target.getAttribute("data-tab"),j()})});const N=document.getElementById("bookingModal"),A=document.getElementById("bookingModalContent"),U=document.getElementById("detailModal"),te=document.getElementById("detailModalContent"),K=document.getElementById("editModal"),W=document.getElementById("editModalContent"),ne=document.getElementById("addBookingBtn");N&&(N.classList.add("duration-200","ease-out"),A.classList.add("duration-300","ease-out")),K&&(K.classList.add("duration-200","ease-out"),W.classList.add("duration-300","ease-out")),ne&&ne.addEventListener("click",()=>{document.getElementById("bookingModalContent").querySelector("h2").innerText="Thêm Khách Hàng (Tạo Đơn)",document.getElementById("submitBookingBtn").innerText="Tạo Phơi Đăng Ký",document.getElementById("editingBookingId").value="",document.getElementById("bookingForm").reset();const a=document.getElementById("loyalty-alert");a&&a.remove(),N.classList.remove("hidden"),setTimeout(()=>{N.classList.add("opacity-100"),A.classList.remove("scale-95","translate-y-4"),A.classList.add("scale-100","translate-y-0")},10)}),window.closeModal=()=>{N&&(N.classList.remove("opacity-100"),A.classList.remove("scale-100","translate-y-0"),A.classList.add("scale-95","translate-y-4"),setTimeout(()=>{N.classList.add("hidden")},200))},window.closeDetailModal=()=>{U&&(U.classList.remove("opacity-100"),te.classList.remove("scale-100","translate-y-0"),te.classList.add("scale-95","translate-y-4"),setTimeout(()=>{U.classList.add("hidden")},200))},window.closeEditModal=()=>{K&&(K.classList.remove("opacity-100"),W.classList.remove("scale-100","translate-y-0"),W.classList.add("scale-95","translate-y-4"),setTimeout(()=>{K.classList.add("hidden")},200))},window.openRowActionModal=a=>{document.getElementById("ramName").textContent=a.name||"Khách Hàng Này",document.getElementById("ramPhone").textContent=`#CSR${a.id} - ${a.phone||""}`;const e=`
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionView(${a.id})">
                <div class="bg-blue-100/60 text-blue-600 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Chi Tiết Thông Tin</span>
            </button>
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionEdit(${a.id})">
                <div class="bg-yellow-100/60 text-yellow-600 p-2 rounded-lg group-hover:bg-yellow-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Chỉnh Sửa Phiếu</span>
            </button>
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionDelete(${a.id})">
                <div class="bg-red-100/60 text-red-500 p-2 rounded-lg group-hover:bg-red-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Xóa Đơn Hàng Này</span>
            </button>
        `;document.getElementById("ramActions").innerHTML=e,document.getElementById("rowActionModal").classList.remove("hidden")},window.addEventListener("click",a=>{const e=document.getElementById("rowActionModal");e&&a.target===e&&e.classList.add("hidden")}),window.actionView=a=>{document.getElementById("rowActionModal").classList.add("hidden");const e=_.find(t=>t.id==a);if(!e)return;const n=t=>parseInt(t||0).toLocaleString("vi-VN")+"đ",l=t=>{if(!t)return"—";if(/^\d{4}-\d{2}-\d{2}/.test(t)){const[p,u,C]=t.split("-");return`${C}/${u}/${p}`}return t},r=parseInt(e.total_price)||0,c=parseInt(e.deposit)||0,d=parseInt(e.discount)||0,o=r-c;let i=[];try{if(e.services_booked){const t=typeof e.services_booked=="string"?JSON.parse(e.services_booked):e.services_booked;Array.isArray(t)&&(i=t)}}catch{}const m=i.reduce((t,p)=>t+(parseInt(p.price)||0),0),h={"Chờ tư vấn":"Chờ lịch"}[e.status]||e.status,b={"Chờ tư vấn":"bg-purple-100 text-purple-700 border-purple-200","Chờ cọc":"bg-yellow-100 text-yellow-700 border-yellow-200","Chờ xác nhận cọc":"bg-orange-100 text-orange-700 border-orange-200","Đã cọc":"bg-blue-100 text-blue-700 border-blue-200","Đã cọc (Chờ đi)":"bg-blue-100 text-blue-700 border-blue-200","Hoàn thành":"bg-green-100 text-green-700 border-green-200"}[e.status]||"bg-gray-100 text-gray-700 border-gray-200",g=(t,p,u="")=>`<div class="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-none">
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide min-w-[110px] pt-0.5">${t}</span>
                <span class="text-sm font-medium text-gray-800 flex-1 ${u}">${p||"—"}</span>
            </div>`,f=(t,p,u="bg-blue-50 text-blue-600")=>`<div class="flex items-center gap-2.5 mb-3">
                <div class="w-7 h-7 rounded-lg ${u} flex items-center justify-center flex-shrink-0 text-sm">${t}</div>
                <h3 class="font-bold text-gray-800 text-sm uppercase tracking-wider">${p}</h3>
            </div>`,L=`
        <div class="space-y-4 pb-2">

            <!-- ① Thông tin Tour -->
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-4">
                ${f("🗺️","Thông tin Tour","bg-orange-100 text-orange-600")}
                <div class="grid grid-cols-2 gap-x-4">
                    ${g("Mã Đơn",`<span class="font-mono font-black text-csr-orange text-base">#CSR${e.id}</span>`)}
                    ${g("Tên Tour",`<span class="text-csr-orange font-bold">${e.tour||"—"}</span>`)}
                    ${g("Ngày Khởi Hành",`<span class="font-bold text-gray-900">${l(e.date)}</span>`)}
                    ${g("Ngày Đăng Ký",e.created_at?l(e.created_at.split("T")[0]):"—")}
                    ${g("Trạng Thái",`<span class="inline-block px-2.5 py-1 rounded-full text-xs font-bold border ${b}">${h||"Chưa rõ"}</span>`)}
                    ${g("Tên Huy Chương",`<span class="font-black text-orange-600 uppercase tracking-wide">${e.medal_name||e.name}</span>`)}
                </div>
            </div>

            <!-- ② Thông tin cá nhân -->
            <div class="bg-white border border-gray-200 rounded-2xl p-4">
                ${f("👤","Thông tin Cá nhân","bg-blue-50 text-blue-600")}
                ${g("Họ và Tên",`<span class="font-bold text-gray-900 text-base">${e.name}</span>`)}
                ${g("Số Điện Thoại",`<a href="tel:${e.phone}" class="text-blue-600 font-bold hover:underline">${e.phone||"—"}</a>`)}
                ${g("Ngày Sinh",l(e.dob))}
                ${g("Giới Tính",e.gender||"—")}
                ${g("CCCD / Passport",`<span class="font-mono">${e.id_card||"—"}</span>`)}
                ${g("Địa Chỉ",e.address||"—")}
                ${g("Cam Kết SK",e.commitments?'<span class="text-green-600 font-bold">✅ Đã đồng ý</span>':'<span class="text-red-500">❌ Chưa xác nhận</span>')}
            </div>

            <!-- ③ Thông tin Hậu cần -->
            <div class="bg-white border border-gray-200 rounded-2xl p-4">
                ${f("🎒","Thông tin Hậu cần","bg-purple-50 text-purple-600")}
                ${g("Điểm Đón",e.pickup_point||"—")}
                ${g("Chế Độ Ăn",e.diet||"Không")}
                ${g("Mượn Gậy",e.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">✅ Có mượn gậy</span>':'<span class="text-gray-500">Không</span>')}
                ${g("Dị Ứng / Y Tế",e.allergy?`<span class="text-red-600 font-semibold">${e.allergy}</span>`:'<span class="text-gray-400 italic">Không có</span>')}
                ${g("Yêu Cầu Khác",e.special?`<span class="bg-yellow-50 border border-yellow-100 rounded px-2 py-1 italic text-gray-700">${e.special}</span>`:'<span class="text-gray-400 italic">Không có</span>')}
            </div>

            <!-- ④ Dịch vụ đi kèm -->
            <div class="bg-white border border-gray-200 rounded-2xl p-4">
                ${f("✨","Dịch Vụ Đi Kèm","bg-green-50 text-green-600")}
                ${i.length>0?i.map(t=>`
                        <div class="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-none">
                            <span class="text-sm text-gray-700 font-medium">${t.label||t.name||"—"}</span>
                            <span class="text-sm font-bold text-green-600">+${n(t.price)}</span>
                        </div>`).join(""):'<p class="text-sm text-gray-400 italic py-1">Không có dịch vụ đi kèm.</p>'}
            </div>

            <!-- ⑤ Giá chi tiết -->
            <div class="bg-gradient-to-br from-csr-orange to-orange-600 rounded-2xl p-4 text-white shadow-lg shadow-orange-500/20">
                ${f("💰","Giá Chi Tiết","bg-white/20 text-white")}
                <div class="space-y-2 text-sm">
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span class="text-orange-50 font-medium">Giá Tour Gốc</span>
                        <span class="font-bold">${n(r+d)}</span>
                    </div>
                    ${d>0?`
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span class="text-orange-50 font-medium">Giảm Giá / Coupon</span>
                        <span class="font-bold text-yellow-200">- ${n(d)}</span>
                    </div>`:""}
                    ${m>0?`
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span class="text-orange-50 font-medium">Dịch Vụ Bổ Sung</span>
                        <span class="font-bold text-green-100">+ ${n(m)}</span>
                    </div>`:""}
                    <div class="flex justify-between items-center py-2.5 border-b border-white/20">
                        <span class="text-white font-black uppercase tracking-wider">Tổng Thanh Toán</span>
                        <span class="font-black text-white text-xl drop-shadow-sm">${n(r)}</span>
                    </div>
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <div>
                            <span class="text-orange-50 font-medium">Đã Cọc</span>
                            ${e.deposit_date?`<div class="text-[11px] text-orange-200 mt-0.5">Ngày: ${l(e.deposit_date)}</div>`:""}
                        </div>
                        <span class="font-bold text-green-100">${c>0?n(c):"0đ (Chưa cọc)"}</span>
                    </div>
                    <div class="flex justify-between items-center py-3 bg-white text-gray-900 rounded-xl px-4 mt-3 shadow-inner">
                        <span class="font-black text-xs uppercase tracking-widest text-gray-500">Còn Lại Cần Thu</span>
                        <span class="font-black text-2xl ${o>0?"text-red-600":"text-green-600"}">
                            ${o>0?n(o):"✅ ĐÃ THU ĐỦ"}
                        </span>
                    </div>
                </div>
            </div>

            <!-- ⑥ Hành trình cùng Cam Site (CRM 360) -->
            ${(()=>{const t=e.phone;if(!t)return"";const p=_.filter(v=>v.phone===t&&!v.status?.includes("hủy")&&!v.status?.includes("Hủy")).sort((v,y)=>new Date(y.created_at||0)-new Date(v.created_at||0)),u=p.length,C=p.reduce((v,y)=>v+(parseInt(y.total_price)||0),0);let k,T,I;u>=5?(k="KHÁCH VIP",T="bg-purple-100 text-purple-700 border-purple-300",I="👑"):u>=2?(k="KHÁCH THÂN THIẾT",T="bg-green-100 text-green-700 border-green-300",I="🌟"):(k="KHÁCH MỚI",T="bg-gray-100 text-gray-500 border-gray-300",I="👋");const $=p.filter(v=>v.id!=a),E=$.length>0?$.slice(0,5).map((v,y)=>{const M=v.status?.includes("Hoàn")?"bg-green-100 text-green-600":v.status?.includes("cọc")||v.status?.includes("Cọc")?"bg-blue-100 text-blue-600":"bg-gray-100 text-gray-500";return`<div class="flex items-center gap-3 py-2 border-b border-gray-100 last:border-none">
                            <div class="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-csr-orange text-xs font-bold shrink-0">${y+1}</div>
                            <div class="flex-1 min-w-0">
                                <div class="text-sm font-medium text-gray-800 truncate">${v.tour||"—"}</div>
                                <div class="text-[10px] text-gray-400">${v.date||"—"}${v.medal_name?` • <span class="text-csr-orange font-medium">Huy chương: ${v.medal_name}</span>`:""}</div>
                            </div>
                            <span class="${M} text-[9px] px-2 py-0.5 rounded-full font-bold shrink-0">${v.status||"Mới"}</span>
                        </div>`}).join(""):'<div class="text-center py-3 text-gray-400 text-xs italic">Đây là lần đầu tiên khách đặt tour.</div>';return`<div class="bg-gradient-to-br from-slate-50 to-gray-50 border border-gray-200 rounded-2xl p-4">
                    ${f("🏅","Hành Trình Cùng Cam Site","bg-slate-100 text-slate-600")}

                    <!-- Tier + LTV -->
                    <div class="flex items-center justify-between mb-4 gap-3">
                        <div class="flex items-center gap-2">
                            <span class="text-lg">${I}</span>
                            <span class="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${T}">${k}</span>
                        </div>
                        <div class="text-right">
                            <div class="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">Tổng đã chi (LTV)</div>
                            <div class="text-lg font-black text-gray-900">${C>0?C.toLocaleString("vi-VN")+"đ":"—"}</div>
                        </div>
                    </div>

                    <!-- Số tour tham gia -->
                    <div class="flex items-center gap-2 mb-3 text-sm text-gray-500">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-400">Tổng tour đã đặt:</span>
                        <span class="font-black text-gray-800 text-base">${u}</span>
                        <span class="text-[10px] text-gray-400">(kể cả đơn này)</span>
                    </div>

                    <!-- Lịch sử tours trước -->
                    ${$.length>0?`
                    <div class="mb-3">
                        <div class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-2">Các tour trước đây (${$.length})</div>
                        <div class="bg-white rounded-xl border border-gray-100 px-3">${E}</div>
                    </div>`:E}

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

        </div>`;document.getElementById("detailContentBlock").innerHTML=L,document.getElementById("detailModal").classList.remove("hidden"),setTimeout(()=>{document.getElementById("detailModal").classList.add("opacity-100");const t=document.getElementById("detailModalContent");t&&(t.classList.remove("scale-95","translate-y-4"),t.classList.add("scale-100","translate-y-0"))},10)},window.actionEdit=async a=>{document.getElementById("rowActionModal").classList.add("hidden");const e=_.find(i=>i.id==a);if(!e)return;document.getElementById("edit-id").value=a,document.getElementById("edit-name").value=e.name||"",document.getElementById("edit-phone").value=e.phone||"",document.getElementById("edit-medal-name").value=e.medal_name||"",document.getElementById("edit-tour").value=e.tour||"",typeof V=="function"&&V("edit-date",e.tour||"",e.date||"",e.schedule_id||null),(i=>{let m=i.dob||"";if(typeof m=="string"&&m.includes("/")){const s=m.split("/");s.length===3&&(m=`${s[2]}-${s[1].padStart(2,"0")}-${s[0].padStart(2,"0")}`)}document.getElementById("edit-dob").value=m,document.getElementById("edit-gender").value=i.gender||"Khác",document.getElementById("edit-allergy").value=i.allergy||i.medical_notes||"",document.getElementById("edit-address").value=i.address||"",document.getElementById("edit-diet").value=i.diet||i.dietary||"Không",document.getElementById("edit-trekking-pole").value=i.trekking_pole||"Không"})(e),document.getElementById("edit-status").value=e.status||"Chờ xác nhận cọc",document.getElementById("edit-commitments").checked=!!e.commitments,document.getElementById("edit-special").value=e.special||"";try{const i=localStorage.getItem("csr_user");if(i&&JSON.parse(i).role==="admin"){const s=document.getElementById("edit-sale-container");s&&s.classList.remove("hidden");const h=document.getElementById("edit-sale");h&&(h.value=e.sale_id||"")}}catch{}if((!e.dob||!e.address||!e.gender||e.gender==="Khác")&&(e.customer_id||e.phone))try{const i=e.customer_id||e.phone,m=await fetch(`/api/admin_customers?action=search&keyword=${encodeURIComponent(i)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:i})}),s=await m.json();if(m.ok&&s.success){const h=s.data,x=document.getElementById("edit-dob"),b=document.getElementById("edit-address"),g=document.getElementById("edit-allergy"),f=document.getElementById("edit-diet"),L=document.getElementById("edit-gender"),t=document.getElementById("edit-medal-name");x&&!x.value&&(x.value=h.dob||""),b&&!b.value&&(b.value=h.address||""),g&&!g.value&&(g.value=h.medical_notes||""),f&&(f.value==="Không"||!f.value)&&(f.value=h.dietary||"Không"),L&&(L.value==="Khác"||!L.value)&&(L.value=h.gender||"Khác"),t&&!t.value&&(t.value=h.medal_name||"")}}catch(i){console.error("Pull CRM error:",i)}let r=(parseInt(e.total_price)||0)+(parseInt(e.discount)||0);if(r===0&&e.tour){const i=D.find(m=>m.name===e.tour);i&&parseInt(i.price)>0&&(r=parseInt(i.price))}document.getElementById("edit-total").value=r,document.getElementById("edit-discount").value=e.discount||0,document.getElementById("edit-deposit").value=e.deposit||0;const c=parseInt(e.deposit_required);document.getElementById("edit-deposit-required").value=isNaN(c)?1e6:c,window.updateEditRemaining();const d=document.getElementById("editModal"),o=document.getElementById("editModalContent");d&&o&&(d.classList.remove("hidden"),setTimeout(()=>{d.classList.add("opacity-100"),o.classList.remove("scale-95","translate-y-4"),o.classList.add("scale-100","translate-y-0")},10))},window.actionDelete=async a=>{if(document.getElementById("rowActionModal").classList.add("hidden"),confirm("Bạn có chắc chắn muốn xóa Đơn hàng này? Thao tác không thể hoàn tác."))try{if((await fetch(`/api/bookings?id=${a}`,{method:"DELETE"})).ok)alert("✅ Đã xóa đơn hàng thành công!"),H();else throw new Error("Lỗi từ Server")}catch(e){alert("❌ Không thể xóa bảng ghi này: "+e.message)}},window.updateEditRemaining=()=>{const a=parseInt(document.getElementById("edit-total").value)||0,e=parseInt(document.getElementById("edit-discount").value)||0,n=parseInt(document.getElementById("edit-deposit").value)||0,r=a-e-n,c=document.getElementById("edit-remaining");c&&(c.textContent=r>0?r.toLocaleString("vi-VN")+"đ":"0đ")};const ae=document.getElementById("edit-total"),oe=document.getElementById("edit-deposit");ae&&ae.addEventListener("input",window.updateEditRemaining),oe&&oe.addEventListener("input",window.updateEditRemaining),document.querySelectorAll('#bookingModal button[onclick*="hidden"]').forEach(a=>{a.removeAttribute("onclick"),a.addEventListener("click",window.closeModal)});const se=async a=>{try{const n=await(await fetch("/api/admin_customers?action=create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:a.name,phone:a.phone,cccd:a.id_card||"",dob:a.dob||null,gender:a.gender||"Khác",medical_notes:a.allergy||"",dietary:a.diet||""})})).json();n.success&&n.csr_code&&(console.log("✅ Đã đồng bộ CRM thành công:",a.name,n.csr_code),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a.id,customer_id:n.csr_code})})).ok&&(console.log("✅ Đã cập nhật Booking mã CRM"),typeof H=="function"&&H()))}catch(e){console.error("❌ Lỗi đồng bộ CRM:",e)}},de=document.getElementById("bookingsTableBody");de&&de.addEventListener("click",async a=>{const e=a.target.closest(".action-btn");if(!e){const c=a.target.closest(".row-clickable");if(c){const d=c.getAttribute("data-id"),o=_.find(i=>i.id==d);o&&openRowActionModal(o)}return}const n=e.getAttribute("data-id"),l=_.find(c=>c.id==n);if(!l)return;const r=document.getElementById("rowActionModal");if(r&&r.classList.add("hidden"),e.classList.contains("confirm-deposit-btn")){if(confirm("Xác nhận khách hàng này đã chuyển khoản đặt cọc?"))try{if(e.disabled=!0,e.classList.add("opacity-50"),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n,status:"Đã cọc"})})).ok)alert("✅ Đã xác nhận cọc thành công!"),se(l),typeof H=="function"&&H();else throw new Error("Lỗi cập nhật API")}catch(c){alert("❌ Lỗi: "+c.message)}finally{e.disabled=!1,e.classList.remove("opacity-50")}return}if(e.classList.contains("delete-btn")){window.actionDelete(n);return}else if(e.classList.contains("process-btn")){const o=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/booking/process.html?id=${n}`;navigator.clipboard.writeText(o).then(()=>{alert("📋 Đã sao chép Link Điền Thông Tin!\\nGửi cho khách: "+o)}).catch(i=>{alert("Lỗi khi Copy Clipboard. Link là: "+o)})}else if(e.classList.contains("pay-terms-btn")){const o=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay-terms.html?id=${n}`;navigator.clipboard.writeText(o).then(()=>{alert("📋 Đã sao chép Link Cọc Tour!\\nGửi cho khách: "+o)}).catch(i=>{alert("Lỗi khi Copy Clipboard. Link là: "+o)})}else if(e.classList.contains("send-btn")){const o=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay?id=${n}`;navigator.clipboard.writeText(o).then(()=>{alert("📋 Đã sao chép Link Thanh Toán Cọc! Gửi cho khách qua Zalo nhé:\\n"+o)}).catch(i=>{alert("Lỗi khi Copy Clipboard. Link là: "+o)})}else if(e.classList.contains("payment-btn")){const o=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay?id=${n}`;window.open(o,"_blank")}else e.classList.contains("view-btn")?(document.getElementById("rowActionModal").classList.add("hidden"),window.actionView(n)):e.classList.contains("edit-btn")&&window.actionEdit(n)});const P=document.getElementById("smartSearch"),S=document.getElementById("searchSuggestions");if(P){let a;P.addEventListener("input",e=>{const n=e.target.value.toLowerCase().trim();if(clearTimeout(a),n.length<2){S&&S.classList.add("hidden");return}a=setTimeout(async()=>{try{const l=await fetch(`/api/admin_customers?action=search&keyword=${n}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:n})}),r=await l.json();if(l.ok&&r.success){const d=[r.data];S&&(S.innerHTML=d.map(o=>`
                            <div class="suggestion-item p-3 hover:bg-orange-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors" 
                                 data-name="${o.full_name}" 
                                 data-phone="${o.phone}" 
                                 data-csr="${o.csr_code||""}"
                                 data-dob="${o.dob||""}"
                                 data-gender="${o.gender||""}"
                                 data-address="${o.address||""}"
                                 data-cccd="${o.cccd||""}"
                                 data-allergy="${o.medical_notes||""}"
                                 data-diet="${o.dietary||""}"
                                 data-trekking_pole="${o.trekking_pole||""}"
                                 data-medal-name="${o.medal_name||""}">
                                <div class="font-bold text-gray-900 text-sm">${o.full_name}</div>
                                <div class="flex justify-between items-center mt-1">
                                    <span class="text-xs text-gray-500">${o.phone}</span>
                                    ${o.csr_code?`<span class="bg-orange-100 text-csr-orange text-[10px] font-bold px-2 py-0.5 rounded">${o.csr_code}</span>`:""}
                                </div>
                            </div>
                        `).join(""),S.classList.remove("hidden"))}else S&&(S.innerHTML='<div class="p-3 text-xs text-gray-400 italic text-center">Không tìm thấy khách hàng cũ</div>',S.classList.remove("hidden"))}catch(l){console.error("Search error:",l)}},300)}),S&&S.addEventListener("click",e=>{const n=e.target.closest(".suggestion-item");if(n){const l=document.getElementById("addFullName"),r=document.getElementById("addPhone"),c=document.getElementById("addCsrCode");l&&(l.value=n.getAttribute("data-name")),r&&(r.value=n.getAttribute("data-phone")),c&&(c.value=n.getAttribute("data-csr"));const d=document.getElementById("addDob"),o=document.getElementById("addGender"),i=document.getElementById("addIdCard"),m=document.getElementById("addAddress");d&&(d.value=n.getAttribute("data-dob")||""),o&&(o.value=n.getAttribute("data-gender")||"Khác"),i&&(i.value=n.getAttribute("data-cccd")||""),m&&(m.value=n.getAttribute("data-address")||"");const s=document.getElementById("addAllergy"),h=document.getElementById("addDiet"),x=document.getElementById("addTrekkingPole"),b=document.getElementById("addMedalName");s&&(s.value=n.getAttribute("data-allergy")||""),h&&(h.value=n.getAttribute("data-diet")||""),x&&(x.value=n.getAttribute("data-trekking_pole")||"Không"),b&&(b.value=n.getAttribute("data-medal-name")||""),window._selectedCustomer={fullName:n.getAttribute("data-name"),phone:n.getAttribute("data-phone"),csrCode:n.getAttribute("data-csr"),dob:n.getAttribute("data-dob")||"",gender:n.getAttribute("data-gender")||"",address:n.getAttribute("data-address")||"",id_card:n.getAttribute("data-cccd")||"",allergy:n.getAttribute("data-allergy")||"",diet:n.getAttribute("data-diet")||"",trekking_pole:n.getAttribute("data-trekking_pole")||"",medal_name:n.getAttribute("data-medal-name")||""},P.value=n.getAttribute("data-name"),S.classList.add("hidden");const g=`
                    <div id="loyalty-alert" class="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-600 rounded-lg text-sm flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Nhận diện khách thân thiết: <b>${n.getAttribute("data-csr")}</b>. Hệ thống sẽ kế thừa toàn bộ hồ sơ cũ!
                    </div>`,f=document.getElementById("loyalty-alert");f&&f.remove(),P.parentElement.insertAdjacentHTML("afterend",g)}}),document.addEventListener("click",e=>{!P.contains(e.target)&&S&&!S.contains(e.target)&&S.classList.add("hidden")})}const G=document.getElementById("addTourPrice"),O=document.getElementById("addDiscount"),ie=document.getElementById("addTotalPriceDisplay");document.getElementById("addTourName");const le=()=>{if(!G||!O||!ie)return;const a=parseInt(G.value)||0,e=parseInt(O.value)||0,n=a-e;ie.textContent=(n>0?n:0).toLocaleString("vi-VN")+"đ"};G&&G.addEventListener("input",le),O&&O.addEventListener("input",le);const re=document.getElementById("searchBtn");re&&re.addEventListener("click",a=>{a.preventDefault(),document.getElementById("smartSearch").value||alert("Vui lòng nhập Số Điện Thoại hoặc Mã #CSR")});const z=document.getElementById("bookingForm");z&&z.addEventListener("submit",async a=>{a.preventDefault();const e=a.target.querySelector('button[type="submit"]'),n=e.textContent;e.textContent="Đang lưu hệ thống...",e.disabled=!0;try{const l=document.getElementById("addFullName").value,r=document.getElementById("addPhone").value,c=document.getElementById("addTourName").value,d=document.getElementById("addTourDate").value;let o=null,i=d;if(d&&d.includes("::")){const B=d.split("::");o=parseInt(B[0])||null,i=B[1]}const m=document.getElementById("addDob").value,s=document.getElementById("addGender").value,h=document.getElementById("addIdCard").value,x=document.getElementById("addAddress").value,b=document.getElementById("addSpecial").value,g=document.getElementById("addAllergy").value,f=document.getElementById("addDiet").value,L=document.getElementById("addTrekkingPole").value,t=document.getElementById("addMedalName").value,p=parseInt(document.getElementById("addTourPrice").value)||0,u=parseInt(document.getElementById("addDiscount").value)||0,C=parseInt(document.getElementById("addDepositRequired").value),k=isNaN(C)?1e6:C,T=document.getElementById("addCsrCode").value||"",I=localStorage.getItem("csr_user");let $=null,E="Admin";if(I){const B=JSON.parse(I);$=B.id,E=B.fullName||B.full_name||"Admin"}const v=document.getElementById("editingBookingId")?document.getElementById("editingBookingId").value:"",y={name:l,phone:r,tour:c,date:i,status:"Chờ cọc",total_price:p-u,discount:u,deposit:0,sale_id:$,sale_name:E,customer_id:T,deposit_required:k,commitments:!0,schedule_id:o,dob:m,gender:s,address:x,id_card:h,special:b,allergy:g,diet:f,trekking_pole:L,medal_name:t},M=r.replace(/[^0-9]/g,"");window._selectedCustomer&&(window._selectedCustomer.phone||"").replace(/[^0-9]/g,"")===M&&(y.dob=y.dob||window._selectedCustomer.dob,y.gender=y.gender&&y.gender!=="Khác"?y.gender:window._selectedCustomer.gender||"Khác",y.address=y.address||window._selectedCustomer.address,y.id_card=y.id_card||window._selectedCustomer.id_card,y.allergy=window._selectedCustomer.allergy,y.diet=window._selectedCustomer.diet,y.trekking_pole=window._selectedCustomer.trekking_pole,y.medal_name=window._selectedCustomer.medal_name),v&&(y.id=v,delete y.status,delete y.deposit,delete y.sale_id,delete y.sale_name);const R=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)});if(R.ok){alert(v?"✅ Đã lưu Cập nhật Đơn hàng!":"✅ Thêm Đơn Hàng Thành Công!"),window.closeModal(),z&&z.reset(),window._selectedCustomer=null;const B=document.getElementById("loyalty-alert");B&&B.remove(),document.getElementById("addTotalPriceDisplay")&&(document.getElementById("addTotalPriceDisplay").textContent="0đ"),typeof H=="function"?H():window.location.reload()}else{const B=await R.json();throw new Error(B.error||"Lỗi tạo Booking!")}}catch(l){alert("❌ "+l.message)}finally{e.textContent=n,e.disabled=!1}});const ce=document.getElementById("editForm");ce&&ce.addEventListener("submit",async a=>{a.preventDefault();const e=a.target.querySelector('button[type="submit"]'),n=e.textContent;e.textContent="Đang lưu cập nhật...",e.disabled=!0;try{const l=document.getElementById("edit-id").value,r=document.getElementById("edit-name").value,c=document.getElementById("edit-phone").value,d=document.getElementById("edit-medal-name").value,o=document.getElementById("edit-tour").value,i=document.getElementById("edit-date").value;let m=i,s;if(i&&i.includes("::")){const B=i.split("::");s=parseInt(B[0])||null,m=B[1]}const h=document.getElementById("edit-dob").value,x=document.getElementById("edit-gender").value,b=document.getElementById("edit-status").value,g=document.getElementById("edit-allergy").value,f=document.getElementById("edit-address").value,L=document.getElementById("edit-diet").value,t=document.getElementById("edit-trekking-pole").value,p=document.getElementById("edit-commitments").checked,u=document.getElementById("edit-special").value,C=document.getElementById("edit-sale");let k,T;if(C&&C.parentElement&&!C.parentElement.classList.contains("hidden")&&(k=C.value||null,T="Website",k)){const B=q.find(me=>String(me.id)===String(k));B&&(T=B.full_name||B.fullName)}const I=parseInt(document.getElementById("edit-total").value)||0,$=parseInt(document.getElementById("edit-discount").value)||0,E=parseInt(document.getElementById("edit-deposit").value)||0,v=parseInt(document.getElementById("edit-deposit-required").value),y=isNaN(v)?1e6:v,M={id:l,name:r,phone:c,medal_name:d,tour:o,date:m,dob:h,gender:x,status:b,allergy:g,address:f,diet:L,trekking_pole:t,commitments:p,special:u,sale_id:k,sale_name:T,total_price:I-$,discount:$,deposit:E,deposit_required:y,...s!==void 0?{schedule_id:s}:{}},R=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)});if(R.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),(b.includes("Đã cọc")||M.total_price>0&&M.total_price===E)&&se(M),window.closeEditModal(),typeof H=="function"&&H();else{const B=await R.json();throw new Error(B.error||"Gặp sự cố khi Cập nhật API.")}}catch(l){alert("❌ Lỗi Cập nhật: "+l.message)}finally{e.textContent=n,e.disabled=!1}})};export{ve as afterRender,ye as render};
