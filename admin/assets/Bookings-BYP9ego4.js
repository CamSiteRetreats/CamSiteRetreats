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
                          <p class="text-gray-500 text-sm">Quản lý trạng thái đơn hàng và thông tin chi tiết đoàn.</p>
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
                              Khách Hàng Tư Vấn
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
    `,ve=()=>{let S=[],y="consult",N=[],U=[],z=[];const ue=async()=>{try{const[o,e,n]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules"),fetch("/api/users")]);N=o.ok?await o.json():[],U=e.ok?await e.json():[],z=n.ok?await n.json():[],X("addTourName"),X("edit-tour"),pe("edit-sale")}catch(o){console.error("Lỗi tải tours/schedules:",o)}},pe=o=>{const e=document.getElementById(o);e&&(e.innerHTML='<option value="">-- Website --</option>',z.forEach(n=>{const l=document.createElement("option");l.value=n.id,l.textContent=`${n.full_name||n.fullName} (${n.role})`,e.appendChild(l)}))},X=o=>{const e=document.getElementById(o);if(!e)return;const n=e.value,l=e.options[0].outerHTML;e.innerHTML=l,N.filter(r=>r.is_visible!==!1).forEach(r=>{const c=document.createElement("option");c.value=r.name,c.textContent=r.name,r.name===n&&(c.selected=!0),e.appendChild(c)})},V=(o,e,n,l)=>{const r=document.getElementById(o);if(!r)return;if(r.innerHTML='<option value="">-- Chọn Lịch --</option>',!e){r.innerHTML='<option value="">-- Chọn Tour trước --</option>';return}const c=U.filter(d=>d.tour_name===e||e.includes(d.tour_name)||d.tour_name.includes(e));if(c.length===0){r.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}c.sort((d,a)=>new Date(d.start_date)-new Date(a.start_date)).forEach(d=>{const a=parseInt(d.booked_count)||0,i=(d.slots||0)-a,g=new Date(d.start_date),s=d.end_date?new Date(d.end_date):null,f=u=>`${u.getDate().toString().padStart(2,"0")}/${(u.getMonth()+1).toString().padStart(2,"0")}`;let p=f(g);s&&(p+=" - "+f(s)),d.group_label&&(p+=` · ${d.group_label}`),p+=` (${i>=0?i:0} chỗ trống)`;const h=document.createElement("option"),x=`${g.getDate().toString().padStart(2,"0")}/${(g.getMonth()+1).toString().padStart(2,"0")}/${g.getFullYear()}`;h.value=`${d.id}::${x}`,h.dataset.scheduleId=d.id,h.dataset.date=x,h.textContent=p,i<=0&&(h.disabled=!0,h.textContent=p.replace("chỗ trống","HẾT CHỖ")),(l&&String(d.id)===String(l)||!l&&n&&x===n)&&(h.selected=!0),r.appendChild(h)})},Y=document.getElementById("addTourName");Y&&Y.addEventListener("change",o=>{const e=o.target.value;V("addTourDate",e);const n=N.find(r=>r.name===e),l=document.getElementById("addTourPrice");if(n&&l){const r=parseInt(n.price)||0;l.value=r;const c=document.getElementById("addDiscount"),d=document.getElementById("addTotalPriceDisplay"),a=parseInt(c?c.value:0)||0,i=r-a;d&&(d.textContent=(i>0?i:0).toLocaleString("vi-VN")+"đ")}});const Q=document.getElementById("edit-tour");Q&&Q.addEventListener("change",o=>{const e=o.target.value;V("edit-date",e);const n=N.find(r=>r.name===e),l=document.getElementById("edit-total");n&&l&&(parseInt(l.value)===0||!l.value)&&(l.value=parseInt(n.price)||0,typeof window.updateEditRemaining=="function"&&window.updateEditRemaining())}),ue();const j=()=>{const o=document.getElementById("bookingsTableHead"),e=document.getElementById("bookingsTableBody");if(!e||!o)return;const n=y==="upcoming"||y==="ready"||y==="completed";n?o.innerHTML=`
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
            `:o.innerHTML=`
                <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                    <th class="p-4 font-medium">Khách Hàng</th>
                    <th class="p-4 font-medium">Thông tin Tour</th>
                    <th class="p-4 font-medium">Nguồn / Sale</th>
                    <th class="p-4 font-medium text-right w-[280px]">Thao Tác</th>
                </tr>
            `;const l=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",r=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",c=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",d=document.getElementById("filterSale")?document.getElementById("filterSale").value:"",a=document.getElementById("filterStatus")?document.getElementById("filterStatus").value:"";let i=S.filter(t=>{let b=!1;const m=parseInt(t.total_price)>0&&parseInt(t.total_price)===parseInt(t.deposit),C=T=>{if(!T)return!1;try{const I=T.split("/");if(I.length===3){const $=new Date(`${I[2]}-${I[1]}-${I[0]}T00:00:00`),B=new Date;return B.setHours(0,0,0,0),$.getTime()<B.getTime()}else if(T.includes("-")){const $=new Date(`${T}T00:00:00`),B=new Date;return B.setHours(0,0,0,0),$.getTime()<B.getTime()}}catch{}return!1},k=(t.status==="Hoàn thành"||t.status==="Đã đi"||m)&&C(t.date);return y==="consult"?b=t.status==="Chờ tư vấn"&&!k:y==="pending"?b=(!t.status||t.status==="Chờ cọc"||t.status==="Chờ xác nhận cọc")&&!k:y==="upcoming"?b=t.status&&t.status!=="Chờ tư vấn"&&t.status!=="Chờ cọc"&&t.status!=="Chờ xác nhận cọc"&&!m&&t.status!=="Hoàn thành"&&!k:y==="ready"?b=(m||t.status==="Hoàn thành")&&!k:y==="completed"&&(b=k),!(!b||r&&t.tour!==r||c&&F(t.date)!==c||d&&d!=="null"&&t.sale_name!==d||d==="null"&&t.sale_name&&t.sale_name!=="Website"||l&&!`${t.name||""} ${t.phone||""} ${t.customer_id||""} ${t.id||""} csr${t.id||""} #csr${t.id||""}`.toLowerCase().includes(l)||a&&t.status!==a)});const g=document.getElementById("statTitle1"),s=document.getElementById("statTitle2"),f=document.getElementById("statTitle3"),p=document.getElementById("statTotalCustomers"),h=document.getElementById("statTotalRevenue"),x=document.getElementById("statTotalCollected");let u=i.length;if(y==="consult"){g&&(g.textContent="Tổng Leads Tư Vấn"),s&&(s.textContent="Chưa Có Sale Nhận"),f&&(f.textContent="Đã Có Sale Nhận");let t=0,b=0;i.forEach(m=>{!m.sale_id||m.sale_id==="null"||!m.sale_name||m.sale_name==="Website"||m.sale_name==="null"?t++:b++}),p&&(p.textContent=u),h&&(h.textContent=t+" Đơn"),x&&(x.textContent=b+" Đơn")}else if(y==="pending"){g&&(g.textContent="Tổng Khách (Chờ Cọc)"),s&&(s.textContent="Khách Chưa Tư Vấn (Mới)"),f&&(f.textContent="Đã Có Sale Giữ Chỗ");let t=0,b=0;i.forEach(m=>{!m.sale_id||m.sale_id==="null"||!m.sale_name||m.sale_name==="Website"||m.sale_name==="null"?t++:b++}),p&&(p.textContent=u),h&&(h.textContent=t+" Đơn"),x&&(x.textContent=b+" Đơn")}else if(y==="upcoming"){g&&(g.textContent="Tổng Số Khách"),s&&(s.textContent="Chưa Xác Nhận Cọc"),f&&(f.textContent="Chờ Thanh Toán Còn Lại");let t=0,b=0;i.forEach(m=>{m.status==="Chờ xác nhận cọc"?t++:parseInt(m.deposit)>0&&parseInt(m.total_price)>parseInt(m.deposit)&&b++}),p&&(p.textContent=u),h&&(h.textContent=t+" Khách"),x&&(x.textContent=b+" Khách")}else if(y==="ready"){g&&(g.textContent="Khách Sẵn Sàng (Full)"),s&&(s.textContent="Tổng Doanh Thu Tab"),f&&(f.textContent="Thực Thu (Full Tận Nơi)");let t=0,b=0;i.forEach(m=>{t+=parseInt(m.total_price)||0,b+=parseInt(m.deposit)||0}),p&&(p.textContent=u),h&&(h.textContent=t>0?t.toLocaleString("vi-VN")+"đ":"0đ"),x&&(x.textContent=b>0?b.toLocaleString("vi-VN")+"đ":"0đ")}else{g&&(g.textContent="Khách Đã Xong (Lịch Sử)"),s&&(s.textContent="Tổng Doanh Thu Tab"),f&&(f.textContent="Thực Thu (Đã Đóng)");let t=0,b=0;i.forEach(m=>{t+=parseInt(m.total_price)||0,b+=parseInt(m.deposit)||0}),p&&(p.textContent=u),h&&(h.textContent=t>0?t.toLocaleString("vi-VN")+"đ":"0đ"),x&&(x.textContent=b>0?b.toLocaleString("vi-VN")+"đ":"0đ")}const w=n?8:4;if(!i||i.length===0){let t=y==="consult"?"Chưa có khách hàng tư vấn nào.":y==="pending"?"Chưa có Khách chờ cọc.":y==="upcoming"?"Chưa có Khách nào Đã Cọc.":y==="ready"?"Chưa có khách sẵn sàng.":"Danh sách rỗng.";e.innerHTML=`<tr><td colspan="${w}" class="p-8 text-center text-gray-500">${t}</td></tr>`;return}e.innerHTML=i.map(t=>{const b=y==="upcoming"||y==="ready"?"bg-green-50/20 hover:bg-green-50 transition-colors":"hover:bg-gray-100 transition-colors";if(n){let m=parseInt(t.total_price)||0;if(m===0&&t.tour&&N&&N.length>0){const v=N.find(D=>D.name&&t.tour&&D.name.toLowerCase().trim()===t.tour.toLowerCase().trim());v&&parseInt(v.price)>0&&(m=parseInt(v.price))}const C=parseInt(t.deposit)||0,k=m-C,T=m>0?m.toLocaleString("vi-VN")+"đ":"Chưa định giá",I=C>0?C.toLocaleString("vi-VN")+"đ":"0đ",$=k>0?k.toLocaleString("vi-VN")+"đ":k===0&&m>0?"Đã thu trọn":"-";let B="";t.status==="Hoàn thành"||t.status==="Đã đi"?B='<span class="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-xs block w-full text-center">Hoàn thành</span>':t.status==="Chờ xác nhận cọc"?B=`<button class="action-btn confirm-deposit-btn bg-csr-orange text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-[#d65503] w-full" data-id="${t.id}">Xác nhận cọc</button>`:C>0&&k===0?B='<span class="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Hoàn tất phí</span>':B='<span class="bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Đã Cọc</span>';let M="";return C>0&&(M=`<a href="/invoice.html?id=${t.id}" target="_blank" class="mt-1.5 block text-center text-[11px] text-blue-600 hover:text-blue-800 hover:underline font-medium" onclick="event.stopPropagation()">🧾 Xem hóa đơn</a>`),`
                <tr class="${b} cursor-pointer row-clickable block md:table-row p-4 md:p-0 mb-4 md:mb-0 glass-panel md:glass-none border-l-4 border-green-500 md:border-none relative" data-id="${t.id}">
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
                                <div class="mt-1">${B}</div>
                            </div>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 align-top text-sm block md:table-cell border-t md:border-none border-gray-100 mt-2 md:mt-0 pt-2 md:pt-4">
                        <div class="md:hidden text-[10px] text-gray-400 uppercase font-medium mb-1">Thông tin Tour</div>
                        <div class="text-gray-700 font-bold md:font-medium">${t.tour}</div>
                        <div class="text-gray-500 text-xs whitespace-nowrap">${t.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-600 hidden md:table-cell">${t.sale_name||"Website"}</td>
                    <td class="p-4 align-top text-center hidden md:table-cell">${B}${M}</td>
                    
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
                             <div class="md:hidden">${M}</div>
                             <button class="action-btn payment-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 md:px-3 md:py-1.5 rounded-lg md:rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">Thanh toán</button>
                        </div>
                    </td>
                </tr>
                `}else{const m=t.name?t.name.substring(0,2).toUpperCase():"KH",C=y==="consult",k=!t.sale_id||t.sale_id==="null"||!t.sale_name||t.sale_name==="null";let T="";C&&k?T=`<button class="action-btn claim-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">Nhận khách</button>`:T=`<span class="text-sm text-gray-500">${t.sale_name||"Website"}</span>`;const I=`
                    <button class="action-btn process-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors mr-1" data-id="${t.id}">📝 Thông Tin</button>
                    ${t.customer_id?`<button class="action-btn payment-btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">💳 Thanh toán</button>`:`<button class="action-btn pay-terms-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${t.id}">🔗 Cọc Tour</button>`}
                `;return`
                <tr class="${b} cursor-pointer row-clickable block md:table-row p-4 md:p-0 mb-4 md:mb-0 glass-panel md:glass-none border-l-4 border-csr-orange md:border-none relative" data-id="${t.id}">
                    <td class="p-0 md:p-4 align-top block md:table-cell">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 md:w-10 md:h-10 rounded-full bg-csr-orange/20 text-csr-orange flex items-center justify-center font-bold text-base md:text-sm shrink-0">${m}</div>
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
    `}}).join(""),document.querySelectorAll(".claim-btn").forEach(t=>{t.addEventListener("click",async b=>{b.stopPropagation();const m=t.getAttribute("data-id"),C=localStorage.getItem("csr_user");let k=null,T="Admin";if(C){const I=JSON.parse(C);k=I.id,T=I.fullName||I.full_name||"Admin"}t.textContent="Đang xử lý...",t.disabled=!0;try{if((await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:m,sale_id:k,sale_name:T})})).ok){const $=S.find(B=>B.id==m);$&&($.sale_id=k,$.sale_name=T),j()}else alert("Lỗi khi nhận khách. Vui lòng thử lại."),t.textContent="Nhận khách",t.disabled=!1}catch(I){console.error("Lỗi nhận khách:",I),t.textContent="Nhận khách",t.disabled=!1}})})},me=()=>{const o=new Set,e=new Set,n=new Set;S.forEach(d=>{if(d.tour&&o.add(d.tour),d.date){const a=F(d.date);a&&e.add(a)}d.sale_name&&d.sale_name!=="Website"&&d.sale_name!=="null"&&n.add(d.sale_name.trim())});const l=document.getElementById("filterTour"),r=document.getElementById("filterDate"),c=document.getElementById("filterSale");if(l){const d=l.value;l.innerHTML='<option value="">Tất cả Tour</option>',[...o].sort().forEach(a=>l.innerHTML+=`<option value="${a}">${a}</option>`),l.value=d}if(r){const d=r.value;r.innerHTML='<option value="">Tất cả Ngày</option>',[...e].sort().forEach(a=>r.innerHTML+=`<option value="${a}">${a}</option>`),r.value=d}if(c){const d=c.value;c.innerHTML='<option value="">Tất cả Sale</option>',c.innerHTML+='<option value="null">Nguồn Website</option>',[...n].sort().forEach(a=>{c.innerHTML+=`<option value="${a}">${a}</option>`}),c.value=d}};function F(o){if(!o)return"";if(/^\d{1,2}\/\d{1,2}\s*-\s*\d{1,2}\/\d{1,2}$/.test(o))return o.replace(/\s+/g,"");try{if(/^\d{4}-\d{2}-\d{2}$/.test(o)){const[e,n,l]=o.split("-"),r=`${parseInt(l)}/${parseInt(n)}`;return`${r}-${r}`}if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(o)){const[e,n,l]=o.split("/"),r=`${parseInt(e)}/${parseInt(n)}`;return`${r}-${r}`}if(o.includes("-"))return o.split("-").map(n=>{const l=n.trim();if(/\/\d{4}$/.test(l)){const[r,c]=l.split("/");return`${parseInt(r)}/${parseInt(c)}`}return l}).join("-")}catch{console.warn("Date normalization failed for:",o)}return o}const _=async()=>{try{S=await(await fetch("/api/bookings")).json(),S.sort((e,n)=>parseInt(n.id)-parseInt(e.id)),me(),j()}catch(o){console.error("Lỗi parse list đơn hàng:",o);const e=document.getElementById("bookingsTableBody");e&&(e.innerHTML='<tr><td colspan="4" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu từ Server.</td></tr>')}};_(),["filterSearch","filterTour","filterDate","filterSale","filterStatus"].forEach(o=>{const e=document.getElementById(o);e&&(o==="filterSearch"?e.addEventListener("input",j):e.addEventListener("change",j))});const Z=document.getElementById("exportExcelBtn");Z&&Z.addEventListener("click",()=>{const o=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",e=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",n=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",l=document.getElementById("filterSale")?document.getElementById("filterSale").value:"";let r=S.filter(s=>{let f=!1;const p=parseInt(s.total_price)>0&&parseInt(s.total_price)===parseInt(s.deposit),h=u=>{if(!u)return!1;try{const w=u.split("/");if(w.length===3){const t=new Date(`${w[2]}-${w[1]}-${w[0]}T00:00:00`),b=new Date;return b.setHours(0,0,0,0),t.getTime()<b.getTime()}else if(u.includes("-")){const t=new Date(`${u}T00:00:00`),b=new Date;return b.setHours(0,0,0,0),t.getTime()<b.getTime()}}catch{}return!1},x=(s.status==="Hoàn thành"||s.status==="Đã đi"||p)&&h(s.date);return y==="consult"?f=s.status==="Chờ tư vấn"&&!x:y==="pending"?f=(!s.status||s.status==="Chờ cọc")&&!x:y==="upcoming"?f=s.status&&s.status!=="Chờ tư vấn"&&s.status!=="Chờ cọc"&&!p&&s.status!=="Hoàn thành"&&!x:y==="ready"?f=(p||s.status==="Hoàn thành")&&!x:y==="completed"&&(f=x),!(!f||e&&s.tour!==e||n&&F(s.date)!==n||l&&l!=="null"&&s.sale_name!==l||l==="null"&&s.sale_name&&s.sale_name!=="Website"||o&&!`${s.name||""} ${s.phone||""} ${s.customer_id||""} ${s.id||""} csr${s.id||""} #csr${s.id||""}`.toLowerCase().includes(o))});if(r.length===0){alert("Danh sách rỗng. Không có dữ liệu để xuất.");return}let c=`
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
            `;const d=new Blob(["\uFEFF",c],{type:"application/vnd.ms-excel;charset=utf-8"}),a=URL.createObjectURL(d),i=document.createElement("a");i.setAttribute("href",a);let g=y==="pending"?"ChoCoc":y==="upcoming"?"SapThamGia":y==="ready"?"ChoLenXe":"LichSu";i.setAttribute("download",`BaoCao_DonHang_${g}_${new Date().toISOString().slice(0,10)}.xls`),document.body.appendChild(i),i.click(),document.body.removeChild(i)});const ee=document.querySelectorAll(".tab-btn");ee.forEach(o=>{o.addEventListener("click",e=>{ee.forEach(n=>{n.classList.remove("border-csr-orange","text-csr-orange"),n.classList.add("border-transparent","text-gray-500")}),e.target.classList.add("border-csr-orange","text-csr-orange"),e.target.classList.remove("border-transparent","text-gray-500"),y=e.target.getAttribute("data-tab"),j()})});const H=document.getElementById("bookingModal"),A=document.getElementById("bookingModalContent"),W=document.getElementById("detailModal"),te=document.getElementById("detailModalContent"),K=document.getElementById("editModal"),J=document.getElementById("editModalContent"),ne=document.getElementById("addBookingBtn");H&&(H.classList.add("duration-200","ease-out"),A.classList.add("duration-300","ease-out")),K&&(K.classList.add("duration-200","ease-out"),J.classList.add("duration-300","ease-out")),ne&&ne.addEventListener("click",()=>{document.getElementById("bookingModalContent").querySelector("h2").innerText="Thêm Khách Hàng (Tạo Đơn)",document.getElementById("submitBookingBtn").innerText="Tạo Phơi Đăng Ký",document.getElementById("editingBookingId").value="",document.getElementById("bookingForm").reset();const o=document.getElementById("loyalty-alert");o&&o.remove(),H.classList.remove("hidden"),setTimeout(()=>{H.classList.add("opacity-100"),A.classList.remove("scale-95","translate-y-4"),A.classList.add("scale-100","translate-y-0")},10)}),window.closeModal=()=>{H&&(H.classList.remove("opacity-100"),A.classList.remove("scale-100","translate-y-0"),A.classList.add("scale-95","translate-y-4"),setTimeout(()=>{H.classList.add("hidden")},200))},window.closeDetailModal=()=>{W&&(W.classList.remove("opacity-100"),te.classList.remove("scale-100","translate-y-0"),te.classList.add("scale-95","translate-y-4"),setTimeout(()=>{W.classList.add("hidden")},200))},window.closeEditModal=()=>{K&&(K.classList.remove("opacity-100"),J.classList.remove("scale-100","translate-y-0"),J.classList.add("scale-95","translate-y-4"),setTimeout(()=>{K.classList.add("hidden")},200))},window.openRowActionModal=o=>{document.getElementById("ramName").textContent=o.name||"Khách Hàng Này",document.getElementById("ramPhone").textContent=`#CSR${o.id} - ${o.phone||""}`;const e=`
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionView(${o.id})">
                <div class="bg-blue-100/60 text-blue-600 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Chi Tiết Thông Tin</span>
            </button>
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionEdit(${o.id})">
                <div class="bg-yellow-100/60 text-yellow-600 p-2 rounded-lg group-hover:bg-yellow-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Chỉnh Sửa Phiếu</span>
            </button>
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionDelete(${o.id})">
                <div class="bg-red-100/60 text-red-500 p-2 rounded-lg group-hover:bg-red-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Xóa Đơn Hàng Này</span>
            </button>
        `;document.getElementById("ramActions").innerHTML=e,document.getElementById("rowActionModal").classList.remove("hidden")},window.addEventListener("click",o=>{const e=document.getElementById("rowActionModal");e&&o.target===e&&e.classList.add("hidden")}),window.actionView=o=>{document.getElementById("rowActionModal").classList.add("hidden");const e=S.find(u=>u.id==o);if(!e)return;const n=u=>parseInt(u||0).toLocaleString("vi-VN")+"đ",l=u=>{if(!u)return"—";if(/^\d{4}-\d{2}-\d{2}/.test(u)){const[w,t,b]=u.split("-");return`${b}/${t}/${w}`}return u},r=parseInt(e.total_price)||0,c=parseInt(e.deposit)||0,d=parseInt(e.discount)||0,a=r-c;let i=[];try{if(e.services_booked){const u=typeof e.services_booked=="string"?JSON.parse(e.services_booked):e.services_booked;Array.isArray(u)&&(i=u)}}catch{}const g=i.reduce((u,w)=>u+(parseInt(w.price)||0),0),f={"Chờ tư vấn":"bg-purple-100 text-purple-700 border-purple-200","Chờ cọc":"bg-yellow-100 text-yellow-700 border-yellow-200","Chờ xác nhận cọc":"bg-orange-100 text-orange-700 border-orange-200","Đã cọc":"bg-blue-100 text-blue-700 border-blue-200","Đã cọc (Chờ đi)":"bg-blue-100 text-blue-700 border-blue-200","Hoàn thành":"bg-green-100 text-green-700 border-green-200"}[e.status]||"bg-gray-100 text-gray-700 border-gray-200",p=(u,w,t="")=>`<div class="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-none">
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide min-w-[110px] pt-0.5">${u}</span>
                <span class="text-sm font-medium text-gray-800 flex-1 ${t}">${w||"—"}</span>
            </div>`,h=(u,w,t="bg-blue-50 text-blue-600")=>`<div class="flex items-center gap-2.5 mb-3">
                <div class="w-7 h-7 rounded-lg ${t} flex items-center justify-center flex-shrink-0 text-sm">${u}</div>
                <h3 class="font-bold text-gray-800 text-sm uppercase tracking-wider">${w}</h3>
            </div>`,x=`
        <div class="space-y-4 pb-2">

            <!-- ① Thông tin Tour -->
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-4">
                ${h("🗺️","Thông tin Tour","bg-orange-100 text-orange-600")}
                <div class="grid grid-cols-2 gap-x-4">
                    ${p("Mã Đơn",`<span class="font-mono font-black text-csr-orange text-base">#CSR${e.id}</span>`)}
                    ${p("Tên Tour",`<span class="text-csr-orange font-bold">${e.tour||"—"}</span>`)}
                    ${p("Ngày Khởi Hành",`<span class="font-bold text-gray-900">${l(e.date)}</span>`)}
                    ${p("Ngày Đăng Ký",e.created_at?l(e.created_at.split("T")[0]):"—")}
                    ${p("Trạng Thái",`<span class="inline-block px-2.5 py-1 rounded-full text-xs font-bold border ${f}">${e.status||"Chưa rõ"}</span>`)}
                    ${p("Tên Huy Chương",`<span class="font-black text-orange-600 uppercase tracking-wide">${e.medal_name||e.name}</span>`)}
                </div>
            </div>

            <!-- ② Thông tin cá nhân -->
            <div class="bg-white border border-gray-200 rounded-2xl p-4">
                ${h("👤","Thông tin Cá nhân","bg-blue-50 text-blue-600")}
                ${p("Họ và Tên",`<span class="font-bold text-gray-900 text-base">${e.name}</span>`)}
                ${p("Số Điện Thoại",`<a href="tel:${e.phone}" class="text-blue-600 font-bold hover:underline">${e.phone||"—"}</a>`)}
                ${p("Ngày Sinh",l(e.dob))}
                ${p("Giới Tính",e.gender||"—")}
                ${p("CCCD / Passport",`<span class="font-mono">${e.id_card||"—"}</span>`)}
                ${p("Địa Chỉ",e.address||"—")}
                ${p("Cam Kết SK",e.commitments?'<span class="text-green-600 font-bold">✅ Đã đồng ý</span>':'<span class="text-red-500">❌ Chưa xác nhận</span>')}
            </div>

            <!-- ③ Thông tin Hậu cần -->
            <div class="bg-white border border-gray-200 rounded-2xl p-4">
                ${h("🎒","Thông tin Hậu cần","bg-purple-50 text-purple-600")}
                ${p("Điểm Đón",e.pickup_point||"—")}
                ${p("Chế Độ Ăn",e.diet||"Không")}
                ${p("Mượn Gậy",e.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">✅ Có mượn gậy</span>':'<span class="text-gray-500">Không</span>')}
                ${p("Dị Ứng / Y Tế",e.allergy?`<span class="text-red-600 font-semibold">${e.allergy}</span>`:'<span class="text-gray-400 italic">Không có</span>')}
                ${p("Yêu Cầu Khác",e.special?`<span class="bg-yellow-50 border border-yellow-100 rounded px-2 py-1 italic text-gray-700">${e.special}</span>`:'<span class="text-gray-400 italic">Không có</span>')}
            </div>

            <!-- ④ Dịch vụ đi kèm -->
            <div class="bg-white border border-gray-200 rounded-2xl p-4">
                ${h("✨","Dịch Vụ Đi Kèm","bg-green-50 text-green-600")}
                ${i.length>0?i.map(u=>`
                        <div class="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-none">
                            <span class="text-sm text-gray-700 font-medium">${u.label||u.name||"—"}</span>
                            <span class="text-sm font-bold text-green-600">+${n(u.price)}</span>
                        </div>`).join(""):'<p class="text-sm text-gray-400 italic py-1">Không có dịch vụ đi kèm.</p>'}
            </div>

            <!-- ⑤ Giá chi tiết -->
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 text-white">
                ${h("💰","Giá Chi Tiết","bg-white/20 text-white")}
                <div class="space-y-2 text-sm">
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span class="text-gray-400">Giá Tour Gốc</span>
                        <span class="font-bold">${n(r+d)}</span>
                    </div>
                    ${d>0?`
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span class="text-gray-400">Giảm Giá / Coupon</span>
                        <span class="font-bold text-red-400">- ${n(d)}</span>
                    </div>`:""}
                    ${g>0?`
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span class="text-gray-400">Dịch Vụ Bổ Sung</span>
                        <span class="font-bold text-green-400">+ ${n(g)}</span>
                    </div>`:""}
                    <div class="flex justify-between items-center py-2 border-b border-white/20">
                        <span class="text-white font-bold">Tổng Thanh Toán</span>
                        <span class="font-black text-orange-400 text-lg">${n(r)}</span>
                    </div>
                    <div class="flex justify-between items-center py-1.5 border-b border-white/10">
                        <div>
                            <span class="text-gray-400">Đã Cọc</span>
                            ${e.deposit_date?`<div class="text-[11px] text-gray-500 mt-0.5">Ngày: ${l(e.deposit_date)}</div>`:""}
                        </div>
                        <span class="font-bold text-green-400">${c>0?n(c):"0đ (Chưa cọc)"}</span>
                    </div>
                    <div class="flex justify-between items-center py-2 bg-white/5 rounded-xl px-3 mt-2">
                        <span class="font-bold text-gray-300">Còn Lại Cần Thu</span>
                        <span class="font-black text-xl ${a>0?"text-red-400":"text-green-400"}">
                            ${a>0?n(a):"✅ Đã thu đủ"}
                        </span>
                    </div>
                </div>
            </div>

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

        </div>`;document.getElementById("detailContentBlock").innerHTML=x,document.getElementById("detailModal").classList.remove("hidden"),setTimeout(()=>{document.getElementById("detailModal").classList.add("opacity-100");const u=document.getElementById("detailModalContent");u&&(u.classList.remove("scale-95","translate-y-4"),u.classList.add("scale-100","translate-y-0"))},10)},window.actionEdit=async o=>{document.getElementById("rowActionModal").classList.add("hidden");const e=S.find(i=>i.id==o);if(!e)return;document.getElementById("edit-id").value=o,document.getElementById("edit-name").value=e.name||"",document.getElementById("edit-phone").value=e.phone||"",document.getElementById("edit-medal-name").value=e.medal_name||"",document.getElementById("edit-tour").value=e.tour||"",typeof V=="function"&&V("edit-date",e.tour||"",e.date||"",e.schedule_id||null),(i=>{let g=i.dob||"";if(typeof g=="string"&&g.includes("/")){const s=g.split("/");s.length===3&&(g=`${s[2]}-${s[1].padStart(2,"0")}-${s[0].padStart(2,"0")}`)}document.getElementById("edit-dob").value=g,document.getElementById("edit-gender").value=i.gender||"Khác",document.getElementById("edit-allergy").value=i.allergy||i.medical_notes||"",document.getElementById("edit-address").value=i.address||"",document.getElementById("edit-diet").value=i.diet||i.dietary||"Không",document.getElementById("edit-trekking-pole").value=i.trekking_pole||"Không"})(e),document.getElementById("edit-status").value=e.status||"Chờ xác nhận cọc",document.getElementById("edit-commitments").checked=!!e.commitments,document.getElementById("edit-special").value=e.special||"";try{const i=localStorage.getItem("csr_user");if(i&&JSON.parse(i).role==="admin"){const s=document.getElementById("edit-sale-container");s&&s.classList.remove("hidden");const f=document.getElementById("edit-sale");f&&(f.value=e.sale_id||"")}}catch{}if((!e.dob||!e.address||!e.gender||e.gender==="Khác")&&(e.customer_id||e.phone))try{const i=e.customer_id||e.phone,g=await fetch(`/api/admin_customers?action=search&keyword=${encodeURIComponent(i)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:i})}),s=await g.json();if(g.ok&&s.success){const f=s.data,p=document.getElementById("edit-dob"),h=document.getElementById("edit-address"),x=document.getElementById("edit-allergy"),u=document.getElementById("edit-diet"),w=document.getElementById("edit-gender"),t=document.getElementById("edit-medal-name");p&&!p.value&&(p.value=f.dob||""),h&&!h.value&&(h.value=f.address||""),x&&!x.value&&(x.value=f.medical_notes||""),u&&(u.value==="Không"||!u.value)&&(u.value=f.dietary||"Không"),w&&(w.value==="Khác"||!w.value)&&(w.value=f.gender||"Khác"),t&&!t.value&&(t.value=f.medal_name||"")}}catch(i){console.error("Pull CRM error:",i)}let r=(parseInt(e.total_price)||0)+(parseInt(e.discount)||0);if(r===0&&e.tour){const i=N.find(g=>g.name===e.tour);i&&parseInt(i.price)>0&&(r=parseInt(i.price))}document.getElementById("edit-total").value=r,document.getElementById("edit-discount").value=e.discount||0,document.getElementById("edit-deposit").value=e.deposit||0;const c=parseInt(e.deposit_required);document.getElementById("edit-deposit-required").value=isNaN(c)?1e6:c,window.updateEditRemaining();const d=document.getElementById("editModal"),a=document.getElementById("editModalContent");d&&a&&(d.classList.remove("hidden"),setTimeout(()=>{d.classList.add("opacity-100"),a.classList.remove("scale-95","translate-y-4"),a.classList.add("scale-100","translate-y-0")},10))},window.actionDelete=async o=>{if(document.getElementById("rowActionModal").classList.add("hidden"),confirm("Bạn có chắc chắn muốn xóa Đơn hàng này? Thao tác không thể hoàn tác."))try{if((await fetch(`/api/bookings?id=${o}`,{method:"DELETE"})).ok)alert("✅ Đã xóa đơn hàng thành công!"),_();else throw new Error("Lỗi từ Server")}catch(e){alert("❌ Không thể xóa bảng ghi này: "+e.message)}},window.updateEditRemaining=()=>{const o=parseInt(document.getElementById("edit-total").value)||0,e=parseInt(document.getElementById("edit-discount").value)||0,n=parseInt(document.getElementById("edit-deposit").value)||0,r=o-e-n,c=document.getElementById("edit-remaining");c&&(c.textContent=r>0?r.toLocaleString("vi-VN")+"đ":"0đ")};const oe=document.getElementById("edit-total"),ae=document.getElementById("edit-deposit");oe&&oe.addEventListener("input",window.updateEditRemaining),ae&&ae.addEventListener("input",window.updateEditRemaining),document.querySelectorAll('#bookingModal button[onclick*="hidden"]').forEach(o=>{o.removeAttribute("onclick"),o.addEventListener("click",window.closeModal)});const se=async o=>{try{const n=await(await fetch("/api/admin_customers?action=create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:o.name,phone:o.phone,cccd:o.id_card||"",dob:o.dob||null,gender:o.gender||"Khác",medical_notes:o.allergy||"",dietary:o.diet||""})})).json();n.success&&n.csr_code&&(console.log("✅ Đã đồng bộ CRM thành công:",o.name,n.csr_code),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o.id,customer_id:n.csr_code})})).ok&&(console.log("✅ Đã cập nhật Booking mã CRM"),typeof _=="function"&&_()))}catch(e){console.error("❌ Lỗi đồng bộ CRM:",e)}},de=document.getElementById("bookingsTableBody");de&&de.addEventListener("click",async o=>{const e=o.target.closest(".action-btn");if(!e){const c=o.target.closest(".row-clickable");if(c){const d=c.getAttribute("data-id"),a=S.find(i=>i.id==d);a&&openRowActionModal(a)}return}const n=e.getAttribute("data-id"),l=S.find(c=>c.id==n);if(!l)return;const r=document.getElementById("rowActionModal");if(r&&r.classList.add("hidden"),e.classList.contains("confirm-deposit-btn")){if(confirm("Xác nhận khách hàng này đã chuyển khoản đặt cọc?"))try{if(e.disabled=!0,e.classList.add("opacity-50"),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n,status:"Đã cọc"})})).ok)alert("✅ Đã xác nhận cọc thành công!"),se(l),typeof _=="function"&&_();else throw new Error("Lỗi cập nhật API")}catch(c){alert("❌ Lỗi: "+c.message)}finally{e.disabled=!1,e.classList.remove("opacity-50")}return}if(e.classList.contains("delete-btn")){window.actionDelete(n);return}else if(e.classList.contains("process-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/booking/process.html?id=${n}`;navigator.clipboard.writeText(a).then(()=>{alert("📋 Đã sao chép Link Điền Thông Tin!\\nGửi cho khách: "+a)}).catch(i=>{alert("Lỗi khi Copy Clipboard. Link là: "+a)})}else if(e.classList.contains("pay-terms-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay-terms.html?id=${n}`;navigator.clipboard.writeText(a).then(()=>{alert("📋 Đã sao chép Link Cọc Tour!\\nGửi cho khách: "+a)}).catch(i=>{alert("Lỗi khi Copy Clipboard. Link là: "+a)})}else if(e.classList.contains("send-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay?id=${n}`;navigator.clipboard.writeText(a).then(()=>{alert("📋 Đã sao chép Link Thanh Toán Cọc! Gửi cho khách qua Zalo nhé:\\n"+a)}).catch(i=>{alert("Lỗi khi Copy Clipboard. Link là: "+a)})}else if(e.classList.contains("payment-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay?id=${n}`;window.open(a,"_blank")}else e.classList.contains("view-btn")?(document.getElementById("rowActionModal").classList.add("hidden"),window.actionView(n)):e.classList.contains("edit-btn")&&window.actionEdit(n)});const P=document.getElementById("smartSearch"),L=document.getElementById("searchSuggestions");if(P){let o;P.addEventListener("input",e=>{const n=e.target.value.toLowerCase().trim();if(clearTimeout(o),n.length<2){L&&L.classList.add("hidden");return}o=setTimeout(async()=>{try{const l=await fetch(`/api/admin_customers?action=search&keyword=${n}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:n})}),r=await l.json();if(l.ok&&r.success){const d=[r.data];L&&(L.innerHTML=d.map(a=>`
                            <div class="suggestion-item p-3 hover:bg-orange-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors" 
                                 data-name="${a.full_name}" 
                                 data-phone="${a.phone}" 
                                 data-csr="${a.csr_code||""}"
                                 data-dob="${a.dob||""}"
                                 data-gender="${a.gender||""}"
                                 data-address="${a.address||""}"
                                 data-cccd="${a.cccd||""}"
                                 data-allergy="${a.medical_notes||""}"
                                 data-diet="${a.dietary||""}"
                                 data-trekking_pole="${a.trekking_pole||""}"
                                 data-medal-name="${a.medal_name||""}">
                                <div class="font-bold text-gray-900 text-sm">${a.full_name}</div>
                                <div class="flex justify-between items-center mt-1">
                                    <span class="text-xs text-gray-500">${a.phone}</span>
                                    ${a.csr_code?`<span class="bg-orange-100 text-csr-orange text-[10px] font-bold px-2 py-0.5 rounded">${a.csr_code}</span>`:""}
                                </div>
                            </div>
                        `).join(""),L.classList.remove("hidden"))}else L&&(L.innerHTML='<div class="p-3 text-xs text-gray-400 italic text-center">Không tìm thấy khách hàng cũ</div>',L.classList.remove("hidden"))}catch(l){console.error("Search error:",l)}},300)}),L&&L.addEventListener("click",e=>{const n=e.target.closest(".suggestion-item");if(n){const l=document.getElementById("addFullName"),r=document.getElementById("addPhone"),c=document.getElementById("addCsrCode");l&&(l.value=n.getAttribute("data-name")),r&&(r.value=n.getAttribute("data-phone")),c&&(c.value=n.getAttribute("data-csr"));const d=document.getElementById("addDob"),a=document.getElementById("addGender"),i=document.getElementById("addIdCard"),g=document.getElementById("addAddress");d&&(d.value=n.getAttribute("data-dob")||""),a&&(a.value=n.getAttribute("data-gender")||"Khác"),i&&(i.value=n.getAttribute("data-cccd")||""),g&&(g.value=n.getAttribute("data-address")||"");const s=document.getElementById("addAllergy"),f=document.getElementById("addDiet"),p=document.getElementById("addTrekkingPole"),h=document.getElementById("addMedalName");s&&(s.value=n.getAttribute("data-allergy")||""),f&&(f.value=n.getAttribute("data-diet")||""),p&&(p.value=n.getAttribute("data-trekking_pole")||"Không"),h&&(h.value=n.getAttribute("data-medal-name")||""),window._selectedCustomer={fullName:n.getAttribute("data-name"),phone:n.getAttribute("data-phone"),csrCode:n.getAttribute("data-csr"),dob:n.getAttribute("data-dob")||"",gender:n.getAttribute("data-gender")||"",address:n.getAttribute("data-address")||"",id_card:n.getAttribute("data-cccd")||"",allergy:n.getAttribute("data-allergy")||"",diet:n.getAttribute("data-diet")||"",trekking_pole:n.getAttribute("data-trekking_pole")||"",medal_name:n.getAttribute("data-medal-name")||""},P.value=n.getAttribute("data-name"),L.classList.add("hidden");const x=`
                    <div id="loyalty-alert" class="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-600 rounded-lg text-sm flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Nhận diện khách thân thiết: <b>${n.getAttribute("data-csr")}</b>. Hệ thống sẽ kế thừa toàn bộ hồ sơ cũ!
                    </div>`,u=document.getElementById("loyalty-alert");u&&u.remove(),P.parentElement.insertAdjacentHTML("afterend",x)}}),document.addEventListener("click",e=>{!P.contains(e.target)&&L&&!L.contains(e.target)&&L.classList.add("hidden")})}const G=document.getElementById("addTourPrice"),O=document.getElementById("addDiscount"),ie=document.getElementById("addTotalPriceDisplay");document.getElementById("addTourName");const le=()=>{if(!G||!O||!ie)return;const o=parseInt(G.value)||0,e=parseInt(O.value)||0,n=o-e;ie.textContent=(n>0?n:0).toLocaleString("vi-VN")+"đ"};G&&G.addEventListener("input",le),O&&O.addEventListener("input",le);const re=document.getElementById("searchBtn");re&&re.addEventListener("click",o=>{o.preventDefault(),document.getElementById("smartSearch").value||alert("Vui lòng nhập Số Điện Thoại hoặc Mã #CSR")});const q=document.getElementById("bookingForm");q&&q.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.querySelector('button[type="submit"]'),n=e.textContent;e.textContent="Đang lưu hệ thống...",e.disabled=!0;try{const l=document.getElementById("addFullName").value,r=document.getElementById("addPhone").value,c=document.getElementById("addTourName").value,d=document.getElementById("addTourDate").value;let a=null,i=d;if(d&&d.includes("::")){const E=d.split("::");a=parseInt(E[0])||null,i=E[1]}const g=document.getElementById("addDob").value,s=document.getElementById("addGender").value,f=document.getElementById("addIdCard").value,p=document.getElementById("addAddress").value,h=document.getElementById("addSpecial").value,x=document.getElementById("addAllergy").value,u=document.getElementById("addDiet").value,w=document.getElementById("addTrekkingPole").value,t=document.getElementById("addMedalName").value,b=parseInt(document.getElementById("addTourPrice").value)||0,m=parseInt(document.getElementById("addDiscount").value)||0,C=parseInt(document.getElementById("addDepositRequired").value),k=isNaN(C)?1e6:C,T=document.getElementById("addCsrCode").value||"",I=localStorage.getItem("csr_user");let $=null,B="Admin";if(I){const E=JSON.parse(I);$=E.id,B=E.fullName||E.full_name||"Admin"}const M=document.getElementById("editingBookingId")?document.getElementById("editingBookingId").value:"",v={name:l,phone:r,tour:c,date:i,status:"Chờ cọc",total_price:b-m,discount:m,deposit:0,sale_id:$,sale_name:B,customer_id:T,deposit_required:k,commitments:!0,schedule_id:a,dob:g,gender:s,address:p,id_card:f,special:h,allergy:x,diet:u,trekking_pole:w,medal_name:t},D=r.replace(/[^0-9]/g,"");window._selectedCustomer&&(window._selectedCustomer.phone||"").replace(/[^0-9]/g,"")===D&&(v.dob=v.dob||window._selectedCustomer.dob,v.gender=v.gender&&v.gender!=="Khác"?v.gender:window._selectedCustomer.gender||"Khác",v.address=v.address||window._selectedCustomer.address,v.id_card=v.id_card||window._selectedCustomer.id_card,v.allergy=window._selectedCustomer.allergy,v.diet=window._selectedCustomer.diet,v.trekking_pole=window._selectedCustomer.trekking_pole,v.medal_name=window._selectedCustomer.medal_name),M&&(v.id=M,delete v.status,delete v.deposit,delete v.sale_id,delete v.sale_name);const R=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(R.ok){alert(M?"✅ Đã lưu Cập nhật Đơn hàng!":"✅ Thêm Đơn Hàng Thành Công!"),window.closeModal(),q&&q.reset(),window._selectedCustomer=null;const E=document.getElementById("loyalty-alert");E&&E.remove(),document.getElementById("addTotalPriceDisplay")&&(document.getElementById("addTotalPriceDisplay").textContent="0đ"),typeof _=="function"?_():window.location.reload()}else{const E=await R.json();throw new Error(E.error||"Lỗi tạo Booking!")}}catch(l){alert("❌ "+l.message)}finally{e.textContent=n,e.disabled=!1}});const ce=document.getElementById("editForm");ce&&ce.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.querySelector('button[type="submit"]'),n=e.textContent;e.textContent="Đang lưu cập nhật...",e.disabled=!0;try{const l=document.getElementById("edit-id").value,r=document.getElementById("edit-name").value,c=document.getElementById("edit-phone").value,d=document.getElementById("edit-medal-name").value,a=document.getElementById("edit-tour").value,i=document.getElementById("edit-date").value;let g=i,s;if(i&&i.includes("::")){const E=i.split("::");s=parseInt(E[0])||null,g=E[1]}const f=document.getElementById("edit-dob").value,p=document.getElementById("edit-gender").value,h=document.getElementById("edit-status").value,x=document.getElementById("edit-allergy").value,u=document.getElementById("edit-address").value,w=document.getElementById("edit-diet").value,t=document.getElementById("edit-trekking-pole").value,b=document.getElementById("edit-commitments").checked,m=document.getElementById("edit-special").value,C=document.getElementById("edit-sale");let k,T;if(C&&C.parentElement&&!C.parentElement.classList.contains("hidden")&&(k=C.value||null,T="Website",k)){const E=z.find(ge=>String(ge.id)===String(k));E&&(T=E.full_name||E.fullName)}const I=parseInt(document.getElementById("edit-total").value)||0,$=parseInt(document.getElementById("edit-discount").value)||0,B=parseInt(document.getElementById("edit-deposit").value)||0,M=parseInt(document.getElementById("edit-deposit-required").value),v=isNaN(M)?1e6:M,D={id:l,name:r,phone:c,medal_name:d,tour:a,date:g,dob:f,gender:p,status:h,allergy:x,address:u,diet:w,trekking_pole:t,commitments:b,special:m,sale_id:k,sale_name:T,total_price:I-$,discount:$,deposit:B,deposit_required:v,...s!==void 0?{schedule_id:s}:{}},R=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)});if(R.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),(h.includes("Đã cọc")||D.total_price>0&&D.total_price===B)&&se(D),window.closeEditModal(),typeof _=="function"&&_();else{const E=await R.json();throw new Error(E.error||"Gặp sự cố khi Cập nhật API.")}}catch(l){alert("❌ Lỗi Cập nhật: "+l.message)}finally{e.textContent=n,e.disabled=!1}})};export{ve as afterRender,ye as render};
