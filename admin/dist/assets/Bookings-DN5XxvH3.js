import{S as ht,H as bt}from"./Header-CamAZjvb.js";console.log("Bookings V3 - Cache Busted!");const yt=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${ht()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${bt()}
          
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
    `,vt=()=>{let M=[],f="consult",N=[],U=[],z=[];const ut=async()=>{try{const[n,t,o]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules"),fetch("/api/users")]);N=n.ok?await n.json():[],U=t.ok?await t.json():[],z=o.ok?await o.json():[],X("addTourName"),X("edit-tour"),pt("edit-sale")}catch(n){console.error("Lỗi tải tours/schedules:",n)}},pt=n=>{const t=document.getElementById(n);t&&(t.innerHTML='<option value="">-- Website --</option>',z.forEach(o=>{const l=document.createElement("option");l.value=o.id,l.textContent=`${o.full_name||o.fullName} (${o.role})`,t.appendChild(l)}))},X=n=>{const t=document.getElementById(n);if(!t)return;const o=t.value,l=t.options[0].outerHTML;t.innerHTML=l,N.filter(i=>i.is_visible!==!1).forEach(i=>{const c=document.createElement("option");c.value=i.name,c.textContent=i.name,i.name===o&&(c.selected=!0),t.appendChild(c)})},V=(n,t,o,l)=>{const i=document.getElementById(n);if(!i)return;if(i.innerHTML='<option value="">-- Chọn Lịch --</option>',!t){i.innerHTML='<option value="">-- Chọn Tour trước --</option>';return}const c=U.filter(d=>d.tour_name===t||t.includes(d.tour_name)||d.tour_name.includes(t));if(c.length===0){i.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}c.sort((d,a)=>new Date(d.start_date)-new Date(a.start_date)).forEach(d=>{const a=parseInt(d.booked_count)||0,r=(d.slots||0)-a,h=new Date(d.start_date),p=d.end_date?new Date(d.end_date):null,b=k=>`${k.getDate().toString().padStart(2,"0")}/${(k.getMonth()+1).toString().padStart(2,"0")}`;let s=b(h);p&&(s+=" - "+b(p)),d.group_label&&(s+=` · ${d.group_label}`),s+=` (${r>=0?r:0} chỗ trống)`;const g=document.createElement("option"),x=`${h.getDate().toString().padStart(2,"0")}/${(h.getMonth()+1).toString().padStart(2,"0")}/${h.getFullYear()}`;g.value=`${d.id}::${x}`,g.dataset.scheduleId=d.id,g.dataset.date=x,g.textContent=s,r<=0&&(g.disabled=!0,g.textContent=s.replace("chỗ trống","HẾT CHỖ")),(l&&String(d.id)===String(l)||!l&&o&&x===o)&&(g.selected=!0),i.appendChild(g)})},Y=document.getElementById("addTourName");Y&&Y.addEventListener("change",n=>{const t=n.target.value;V("addTourDate",t);const o=N.find(i=>i.name===t),l=document.getElementById("addTourPrice");if(o&&l){const i=parseInt(o.price)||0;l.value=i;const c=document.getElementById("addDiscount"),d=document.getElementById("addTotalPriceDisplay"),a=parseInt(c?c.value:0)||0,r=i-a;d&&(d.textContent=(r>0?r:0).toLocaleString("vi-VN")+"đ")}});const Q=document.getElementById("edit-tour");Q&&Q.addEventListener("change",n=>{const t=n.target.value;V("edit-date",t);const o=N.find(i=>i.name===t),l=document.getElementById("edit-total");o&&l&&(parseInt(l.value)===0||!l.value)&&(l.value=parseInt(o.price)||0,typeof window.updateEditRemaining=="function"&&window.updateEditRemaining())}),ut();const j=()=>{const n=document.getElementById("bookingsTableHead"),t=document.getElementById("bookingsTableBody");if(!t||!n)return;const o=f==="upcoming"||f==="ready"||f==="completed";o?n.innerHTML=`
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
            `;const l=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",i=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",c=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",d=document.getElementById("filterSale")?document.getElementById("filterSale").value:"",a=document.getElementById("filterStatus")?document.getElementById("filterStatus").value:"";let r=M.filter(e=>{let m=!1;const u=parseInt(e.total_price)>0&&parseInt(e.total_price)===parseInt(e.deposit),y=C=>{if(!C)return!1;try{const T=C.split("/");if(T.length===3){const L=new Date(`${T[2]}-${T[1]}-${T[0]}T00:00:00`),E=new Date;return E.setHours(0,0,0,0),L.getTime()<E.getTime()}else if(C.includes("-")){const L=new Date(`${C}T00:00:00`),E=new Date;return E.setHours(0,0,0,0),L.getTime()<E.getTime()}}catch{}return!1},w=(e.status==="Hoàn thành"||e.status==="Đã đi"||u)&&y(e.date);return f==="consult"?m=e.status==="Chờ tư vấn"&&!w:f==="pending"?m=(!e.status||e.status==="Chờ cọc"||e.status==="Chờ xác nhận cọc")&&!w:f==="upcoming"?m=e.status&&e.status!=="Chờ tư vấn"&&e.status!=="Chờ cọc"&&e.status!=="Chờ xác nhận cọc"&&!u&&e.status!=="Hoàn thành"&&!w:f==="ready"?m=(u||e.status==="Hoàn thành")&&!w:f==="completed"&&(m=w),!(!m||i&&e.tour!==i||c&&F(e.date)!==c||d&&d!=="null"&&e.sale_name!==d||d==="null"&&e.sale_name&&e.sale_name!=="Website"||l&&!`${e.name||""} ${e.phone||""} ${e.customer_id||""} ${e.id||""} csr${e.id||""} #csr${e.id||""}`.toLowerCase().includes(l)||a&&e.status!==a)});const h=document.getElementById("statTitle1"),p=document.getElementById("statTitle2"),b=document.getElementById("statTitle3"),s=document.getElementById("statTotalCustomers"),g=document.getElementById("statTotalRevenue"),x=document.getElementById("statTotalCollected");let k=r.length;if(f==="consult"){h&&(h.textContent="Tổng Leads Tư Vấn"),p&&(p.textContent="Chưa Có Sale Nhận"),b&&(b.textContent="Đã Có Sale Nhận");let e=0,m=0;r.forEach(u=>{!u.sale_id||u.sale_id==="null"||!u.sale_name||u.sale_name==="Website"||u.sale_name==="null"?e++:m++}),s&&(s.textContent=k),g&&(g.textContent=e+" Đơn"),x&&(x.textContent=m+" Đơn")}else if(f==="pending"){h&&(h.textContent="Tổng Khách (Chờ Cọc)"),p&&(p.textContent="Khách Chưa Tư Vấn (Mới)"),b&&(b.textContent="Đã Có Sale Giữ Chỗ");let e=0,m=0;r.forEach(u=>{!u.sale_id||u.sale_id==="null"||!u.sale_name||u.sale_name==="Website"||u.sale_name==="null"?e++:m++}),s&&(s.textContent=k),g&&(g.textContent=e+" Đơn"),x&&(x.textContent=m+" Đơn")}else if(f==="upcoming"){h&&(h.textContent="Tổng Số Khách"),p&&(p.textContent="Chưa Xác Nhận Cọc"),b&&(b.textContent="Chờ Thanh Toán Còn Lại");let e=0,m=0;r.forEach(u=>{u.status==="Chờ xác nhận cọc"?e++:parseInt(u.deposit)>0&&parseInt(u.total_price)>parseInt(u.deposit)&&m++}),s&&(s.textContent=k),g&&(g.textContent=e+" Khách"),x&&(x.textContent=m+" Khách")}else if(f==="ready"){h&&(h.textContent="Khách Sẵn Sàng (Full)"),p&&(p.textContent="Tổng Doanh Thu Tab"),b&&(b.textContent="Thực Thu (Full Tận Nơi)");let e=0,m=0;r.forEach(u=>{e+=parseInt(u.total_price)||0,m+=parseInt(u.deposit)||0}),s&&(s.textContent=k),g&&(g.textContent=e>0?e.toLocaleString("vi-VN")+"đ":"0đ"),x&&(x.textContent=m>0?m.toLocaleString("vi-VN")+"đ":"0đ")}else{h&&(h.textContent="Khách Đã Xong (Lịch Sử)"),p&&(p.textContent="Tổng Doanh Thu Tab"),b&&(b.textContent="Thực Thu (Đã Đóng)");let e=0,m=0;r.forEach(u=>{e+=parseInt(u.total_price)||0,m+=parseInt(u.deposit)||0}),s&&(s.textContent=k),g&&(g.textContent=e>0?e.toLocaleString("vi-VN")+"đ":"0đ"),x&&(x.textContent=m>0?m.toLocaleString("vi-VN")+"đ":"0đ")}const B=o?8:4;if(!r||r.length===0){let e=f==="consult"?"Chưa có khách hàng tư vấn nào.":f==="pending"?"Chưa có Khách chờ cọc.":f==="upcoming"?"Chưa có Khách nào Đã Cọc.":f==="ready"?"Chưa có khách sẵn sàng.":"Danh sách rỗng.";t.innerHTML=`<tr><td colspan="${B}" class="p-8 text-center text-gray-500">${e}</td></tr>`;return}t.innerHTML=r.map(e=>{const m=f==="upcoming"||f==="ready"?"bg-green-50/20 hover:bg-green-50 transition-colors":"hover:bg-gray-100 transition-colors";if(o){let u=parseInt(e.total_price)||0;if(u===0&&e.tour&&N&&N.length>0){const v=N.find(D=>D.name&&e.tour&&D.name.toLowerCase().trim()===e.tour.toLowerCase().trim());v&&parseInt(v.price)>0&&(u=parseInt(v.price))}const y=parseInt(e.deposit)||0,w=u-y,C=u>0?u.toLocaleString("vi-VN")+"đ":"Chưa định giá",T=y>0?y.toLocaleString("vi-VN")+"đ":"0đ",L=w>0?w.toLocaleString("vi-VN")+"đ":w===0&&u>0?"Đã thu trọn":"-";let E="";e.status==="Hoàn thành"||e.status==="Đã đi"?E='<span class="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-xs block w-full text-center">Hoàn thành</span>':e.status==="Chờ xác nhận cọc"?E=`<button class="action-btn confirm-deposit-btn bg-csr-orange text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-[#d65503] w-full" data-id="${e.id}">Xác nhận cọc</button>`:y>0&&w===0?E='<span class="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Hoàn tất phí</span>':E='<span class="bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Đã Cọc</span>';let $="";return y>0&&($=`<a href="/invoice.html?id=${e.id}" target="_blank" class="mt-1.5 block text-center text-[11px] text-blue-600 hover:text-blue-800 hover:underline font-medium" onclick="event.stopPropagation()">🧾 Xem hóa đơn</a>`),`
                <tr class="${m} cursor-pointer row-clickable block md:table-row p-4 md:p-0 mb-4 md:mb-0 glass-panel md:glass-none border-l-4 border-green-500 md:border-none relative" data-id="${e.id}">
                    <td class="p-0 md:p-4 align-top block md:table-cell mb-2 md:mb-0">
                        <div class="flex justify-between items-start md:block">
                            <div>
                                <div class="font-bold text-gray-900 text-base md:text-sm">${e.name}</div>
                                <div class="mt-1 flex items-center gap-2">
                                    <div class="bg-orange-50 text-csr-orange text-[10px] md:text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">#CSR${e.id}</div>
                                    <div class="text-[11px] text-gray-500">${e.phone}</div>
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
                        <div class="text-gray-700 font-bold md:font-medium">${e.tour}</div>
                        <div class="text-gray-500 text-xs whitespace-nowrap">${e.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-600 hidden md:table-cell">${e.sale_name||"Website"}</td>
                    <td class="p-4 align-top text-center hidden md:table-cell">${E}${$}</td>
                    
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
                            <span>${L}</span>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 align-top text-right block md:table-cell border-t md:border-none border-gray-100 pt-2 md:pt-4">
                        <div class="flex justify-between items-center md:justify-end gap-2">
                             <div class="md:hidden">${$}</div>
                             <button class="action-btn payment-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 md:px-3 md:py-1.5 rounded-lg md:rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">Thanh toán</button>
                        </div>
                    </td>
                </tr>
                `}else{const u=e.name?e.name.substring(0,2).toUpperCase():"KH",y=f==="consult",w=!e.sale_id||e.sale_id==="null"||!e.sale_name||e.sale_name==="null";let C="";y&&w?C=`<button class="action-btn claim-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">Nhận khách</button>`:C=`<span class="text-sm text-gray-500">${e.sale_name||"Website"}</span>`;const T=`
                    <button class="action-btn process-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors mr-1" data-id="${e.id}">📝 Thông Tin</button>
                    ${e.customer_id?`<button class="action-btn payment-btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">💳 Thanh toán</button>`:`<button class="action-btn pay-terms-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">🔗 Cọc Tour</button>`}
                `;return`
                <tr class="${m} cursor-pointer row-clickable block md:table-row p-4 md:p-0 mb-4 md:mb-0 glass-panel md:glass-none border-l-4 border-csr-orange md:border-none relative" data-id="${e.id}">
                    <td class="p-0 md:p-4 align-top block md:table-cell">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 md:w-10 md:h-10 rounded-full bg-csr-orange/20 text-csr-orange flex items-center justify-center font-bold text-base md:text-sm shrink-0">${u}</div>
                            <div class="min-w-0">
                                <div class="font-bold text-gray-900 text-base md:text-sm truncate">${e.name}</div>
                                <div class="mt-1 flex items-center gap-2">
                                    <div class="bg-orange-50 text-csr-orange text-[10px] md:text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">#CSR${e.id}</div>
                                    <div class="text-[11px] text-gray-500">${e.phone}</div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="py-3 md:p-4 align-top block md:table-cell border-t md:border-none border-gray-100 mt-3 md:mt-0 pt-3 md:pt-4">
                        <div class="md:hidden text-[10px] text-gray-400 uppercase font-medium mb-1">Đăng ký Tour</div>
                        <div class="text-sm text-gray-700 font-bold md:font-medium">${e.tour||"(Chưa rõ)"}</div>
                        <div class="text-xs text-gray-500 mt-1">Lịch: ${e.date||"(Chưa chọn)"}</div>
                        ${y&&e.special?`<div class="text-xs text-blue-500 mt-1 italic bg-blue-50 md:bg-transparent p-2 md:p-0 rounded">💬 ${e.special}</div>`:""}
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
    `}}).join(""),document.querySelectorAll(".claim-btn").forEach(e=>{e.addEventListener("click",async m=>{m.stopPropagation();const u=e.getAttribute("data-id"),y=localStorage.getItem("csr_user");let w=null,C="Admin";if(y){const T=JSON.parse(y);w=T.id,C=T.fullName||T.full_name||"Admin"}e.textContent="Đang xử lý...",e.disabled=!0;try{if((await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:u,sale_id:w,sale_name:C})})).ok){const L=M.find(E=>E.id==u);L&&(L.sale_id=w,L.sale_name=C),j()}else alert("Lỗi khi nhận khách. Vui lòng thử lại."),e.textContent="Nhận khách",e.disabled=!1}catch(T){console.error("Lỗi nhận khách:",T),e.textContent="Nhận khách",e.disabled=!1}})})},gt=()=>{const n=new Set,t=new Set,o=new Set;M.forEach(d=>{if(d.tour&&n.add(d.tour),d.date){const a=F(d.date);a&&t.add(a)}d.sale_name&&d.sale_name!=="Website"&&d.sale_name!=="null"&&o.add(d.sale_name.trim())});const l=document.getElementById("filterTour"),i=document.getElementById("filterDate"),c=document.getElementById("filterSale");if(l){const d=l.value;l.innerHTML='<option value="">Tất cả Tour</option>',[...n].sort().forEach(a=>l.innerHTML+=`<option value="${a}">${a}</option>`),l.value=d}if(i){const d=i.value;i.innerHTML='<option value="">Tất cả Ngày</option>',[...t].sort().forEach(a=>i.innerHTML+=`<option value="${a}">${a}</option>`),i.value=d}if(c){const d=c.value;c.innerHTML='<option value="">Tất cả Sale</option>',c.innerHTML+='<option value="null">Nguồn Website</option>',[...o].sort().forEach(a=>{c.innerHTML+=`<option value="${a}">${a}</option>`}),c.value=d}};function F(n){if(!n)return"";if(/^\d{1,2}\/\d{1,2}\s*-\s*\d{1,2}\/\d{1,2}$/.test(n))return n.replace(/\s+/g,"");try{if(/^\d{4}-\d{2}-\d{2}$/.test(n)){const[t,o,l]=n.split("-"),i=`${parseInt(l)}/${parseInt(o)}`;return`${i}-${i}`}if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(n)){const[t,o,l]=n.split("/"),i=`${parseInt(t)}/${parseInt(o)}`;return`${i}-${i}`}if(n.includes("-"))return n.split("-").map(o=>{const l=o.trim();if(/\/\d{4}$/.test(l)){const[i,c]=l.split("/");return`${parseInt(i)}/${parseInt(c)}`}return l}).join("-")}catch{console.warn("Date normalization failed for:",n)}return n}const _=async()=>{try{M=await(await fetch("/api/bookings")).json(),gt(),j()}catch(n){console.error("Lỗi parse list đơn hàng:",n);const t=document.getElementById("bookingsTableBody");t&&(t.innerHTML='<tr><td colspan="4" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu từ Server.</td></tr>')}};_(),["filterSearch","filterTour","filterDate","filterSale","filterStatus"].forEach(n=>{const t=document.getElementById(n);t&&(n==="filterSearch"?t.addEventListener("input",j):t.addEventListener("change",j))});const Z=document.getElementById("exportExcelBtn");Z&&Z.addEventListener("click",()=>{const n=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",t=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",o=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",l=document.getElementById("filterSale")?document.getElementById("filterSale").value:"";let i=M.filter(s=>{let g=!1;const x=parseInt(s.total_price)>0&&parseInt(s.total_price)===parseInt(s.deposit),k=e=>{if(!e)return!1;try{const m=e.split("/");if(m.length===3){const u=new Date(`${m[2]}-${m[1]}-${m[0]}T00:00:00`),y=new Date;return y.setHours(0,0,0,0),u.getTime()<y.getTime()}else if(e.includes("-")){const u=new Date(`${e}T00:00:00`),y=new Date;return y.setHours(0,0,0,0),u.getTime()<y.getTime()}}catch{}return!1},B=(s.status==="Hoàn thành"||s.status==="Đã đi"||x)&&k(s.date);return f==="consult"?g=s.status==="Chờ tư vấn"&&!B:f==="pending"?g=(!s.status||s.status==="Chờ cọc")&&!B:f==="upcoming"?g=s.status&&s.status!=="Chờ tư vấn"&&s.status!=="Chờ cọc"&&!x&&s.status!=="Hoàn thành"&&!B:f==="ready"?g=(x||s.status==="Hoàn thành")&&!B:f==="completed"&&(g=B),!(!g||t&&s.tour!==t||o&&F(s.date)!==o||l&&l!=="null"&&s.sale_name!==l||l==="null"&&s.sale_name&&s.sale_name!=="Website"||n&&!`${s.name||""} ${s.phone||""} ${s.customer_id||""} ${s.id||""} csr${s.id||""} #csr${s.id||""}`.toLowerCase().includes(n))});if(i.length===0){alert("Danh sách rỗng. Không có dữ liệu để xuất.");return}const d=[["Mã KH (CRM)","Họ và Tên","Số điện thoại","Tên Tour","Lịch trình","Trạng thái","Nguồn / Sale","Đã cọc","Tổng tiền","Ghi chú"]];i.forEach(s=>{d.push([`"#CSR${s.id}"`,`"${s.name||""}"`,`= "${s.phone||""}"`,`"${s.tour||""}"`,`"${s.date||""}"`,`"${s.status||""}"`,`"${s.sale_name||"Website"}"`,s.deposit||0,s.total_price||0,`"${(s.special||"").replace(/"/g,'""')}"`])});const a="\\uFEFF"+d.map(s=>s.join(",")).join(`
`),r=new Blob([a],{type:"text/csv;charset=utf-8;"}),h=URL.createObjectURL(r),p=document.createElement("a");p.setAttribute("href",h);let b=f==="pending"?"ChoCoc":f==="upcoming"?"SapThamGia":f==="ready"?"ChoLenXe":"LichSu";p.setAttribute("download",`BaoCao_DonHang_${b}_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(p),p.click(),document.body.removeChild(p)});const tt=document.querySelectorAll(".tab-btn");tt.forEach(n=>{n.addEventListener("click",t=>{tt.forEach(o=>{o.classList.remove("border-csr-orange","text-csr-orange"),o.classList.add("border-transparent","text-gray-500")}),t.target.classList.add("border-csr-orange","text-csr-orange"),t.target.classList.remove("border-transparent","text-gray-500"),f=t.target.getAttribute("data-tab"),j()})});const H=document.getElementById("bookingModal"),A=document.getElementById("bookingModalContent"),W=document.getElementById("detailModal"),et=document.getElementById("detailModalContent"),K=document.getElementById("editModal"),J=document.getElementById("editModalContent"),nt=document.getElementById("addBookingBtn");H&&(H.classList.add("duration-200","ease-out"),A.classList.add("duration-300","ease-out")),K&&(K.classList.add("duration-200","ease-out"),J.classList.add("duration-300","ease-out")),nt&&nt.addEventListener("click",()=>{document.getElementById("bookingModalContent").querySelector("h2").innerText="Thêm Khách Hàng (Tạo Đơn)",document.getElementById("submitBookingBtn").innerText="Tạo Phơi Đăng Ký",document.getElementById("editingBookingId").value="",document.getElementById("bookingForm").reset();const n=document.getElementById("loyalty-alert");n&&n.remove(),H.classList.remove("hidden"),setTimeout(()=>{H.classList.add("opacity-100"),A.classList.remove("scale-95","translate-y-4"),A.classList.add("scale-100","translate-y-0")},10)}),window.closeModal=()=>{H&&(H.classList.remove("opacity-100"),A.classList.remove("scale-100","translate-y-0"),A.classList.add("scale-95","translate-y-4"),setTimeout(()=>{H.classList.add("hidden")},200))},window.closeDetailModal=()=>{W&&(W.classList.remove("opacity-100"),et.classList.remove("scale-100","translate-y-0"),et.classList.add("scale-95","translate-y-4"),setTimeout(()=>{W.classList.add("hidden")},200))},window.closeEditModal=()=>{K&&(K.classList.remove("opacity-100"),J.classList.remove("scale-100","translate-y-0"),J.classList.add("scale-95","translate-y-4"),setTimeout(()=>{K.classList.add("hidden")},200))},window.openRowActionModal=n=>{document.getElementById("ramName").textContent=n.name||"Khách Hàng Này",document.getElementById("ramPhone").textContent=`#CSR${n.id} - ${n.phone||""}`;const t=`
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
        `;document.getElementById("ramActions").innerHTML=t,document.getElementById("rowActionModal").classList.remove("hidden")},window.addEventListener("click",n=>{const t=document.getElementById("rowActionModal");t&&n.target===t&&t.classList.add("hidden")}),window.actionView=n=>{document.getElementById("rowActionModal").classList.add("hidden");const t=M.find(c=>c.id==n);if(!t)return;const o=parseInt(t.deposit)>0?`<span class="text-green-600 font-bold">${parseInt(t.deposit).toLocaleString("vi-VN")}đ</span>`:'<span class="text-yellow-600 font-bold">0đ (Chưa Cọc)</span>',l=t.total_price?`${parseInt(t.total_price).toLocaleString("vi-VN")}đ`:"Chưa định giá",i=`
           <div class="grid grid-cols-2 gap-y-3 gap-x-6 border-b pb-4">
               <p><strong class="text-gray-500 block">Họ và Tên:</strong> <span class="text-lg font-medium">${t.name}</span></p>
               <p><strong class="text-gray-500 block">SĐT:</strong> <span class="text-lg">${t.phone}</span></p>
               <p><strong class="text-gray-500 block">ID Đơn:</strong> <span class="text-csr-orange font-mono font-bold text-lg">#CSR${t.id}</span></p>
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
                <p><strong class="text-gray-500 block">Tổng Tiền:</strong> <span class="font-bold">${l}</span></p>
                <p><strong class="text-gray-500 block">Cam Kết:</strong> <span class="${t.commitments?"text-green-600":"text-red-500"} font-bold">${t.commitments?"Đã đồng ý":"Chưa xác nhận"}</span></p>
                <p class="col-span-2"><strong class="text-gray-500 block">Nhân Viên Sale / Ghi Chú:</strong> <span class="italic text-gray-700 bg-yellow-50 p-2 block mt-1 rounded border border-yellow-100">${t.sale_name||"Website"} - ${t.special||"(Không có nhánh ghi chú)"}</span></p>
            </div>
        `;document.getElementById("detailContentBlock").innerHTML=i,document.getElementById("detailModal").classList.remove("hidden"),setTimeout(()=>{document.getElementById("detailModal").classList.add("opacity-100");const c=document.getElementById("detailModalContent");c&&(c.classList.remove("scale-95","translate-y-4"),c.classList.add("scale-100","translate-y-0"))},10)},window.actionEdit=async n=>{document.getElementById("rowActionModal").classList.add("hidden");const t=M.find(r=>r.id==n);if(!t)return;document.getElementById("edit-id").value=n,document.getElementById("edit-name").value=t.name||"",document.getElementById("edit-phone").value=t.phone||"",document.getElementById("edit-medal-name").value=t.medal_name||"",document.getElementById("edit-tour").value=t.tour||"",typeof V=="function"&&V("edit-date",t.tour||"",t.date||"",t.schedule_id||null),(r=>{let h=r.dob||"";if(typeof h=="string"&&h.includes("/")){const p=h.split("/");p.length===3&&(h=`${p[2]}-${p[1].padStart(2,"0")}-${p[0].padStart(2,"0")}`)}document.getElementById("edit-dob").value=h,document.getElementById("edit-gender").value=r.gender||"Khác",document.getElementById("edit-allergy").value=r.allergy||r.medical_notes||"",document.getElementById("edit-address").value=r.address||"",document.getElementById("edit-diet").value=r.diet||r.dietary||"Không",document.getElementById("edit-trekking-pole").value=r.trekking_pole||"Không"})(t),document.getElementById("edit-status").value=t.status||"Chờ xác nhận cọc",document.getElementById("edit-commitments").checked=!!t.commitments,document.getElementById("edit-special").value=t.special||"";try{const r=localStorage.getItem("csr_user");if(r&&JSON.parse(r).role==="admin"){const p=document.getElementById("edit-sale-container");p&&p.classList.remove("hidden");const b=document.getElementById("edit-sale");b&&(b.value=t.sale_id||"")}}catch{}if((!t.dob||!t.address||!t.gender||t.gender==="Khác")&&(t.customer_id||t.phone))try{const r=t.customer_id||t.phone,h=await fetch(`/api/admin_customers?action=search&keyword=${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:r})}),p=await h.json();if(h.ok&&p.success){const b=p.data,s=document.getElementById("edit-dob"),g=document.getElementById("edit-address"),x=document.getElementById("edit-allergy"),k=document.getElementById("edit-diet"),B=document.getElementById("edit-gender"),e=document.getElementById("edit-medal-name");s&&!s.value&&(s.value=b.dob||""),g&&!g.value&&(g.value=b.address||""),x&&!x.value&&(x.value=b.medical_notes||""),k&&(k.value==="Không"||!k.value)&&(k.value=b.dietary||"Không"),B&&(B.value==="Khác"||!B.value)&&(B.value=b.gender||"Khác"),e&&!e.value&&(e.value=b.medal_name||"")}}catch(r){console.error("Pull CRM error:",r)}let i=(parseInt(t.total_price)||0)+(parseInt(t.discount)||0);if(i===0&&t.tour){const r=N.find(h=>h.name===t.tour);r&&parseInt(r.price)>0&&(i=parseInt(r.price))}document.getElementById("edit-total").value=i,document.getElementById("edit-discount").value=t.discount||0,document.getElementById("edit-deposit").value=t.deposit||0;const c=parseInt(t.deposit_required);document.getElementById("edit-deposit-required").value=isNaN(c)?1e6:c,window.updateEditRemaining();const d=document.getElementById("editModal"),a=document.getElementById("editModalContent");d&&a&&(d.classList.remove("hidden"),setTimeout(()=>{d.classList.add("opacity-100"),a.classList.remove("scale-95","translate-y-4"),a.classList.add("scale-100","translate-y-0")},10))},window.actionDelete=async n=>{if(document.getElementById("rowActionModal").classList.add("hidden"),confirm("Bạn có chắc chắn muốn xóa Đơn hàng này? Thao tác không thể hoàn tác."))try{if((await fetch(`/api/bookings?id=${n}`,{method:"DELETE"})).ok)alert("✅ Đã xóa đơn hàng thành công!"),_();else throw new Error("Lỗi từ Server")}catch(t){alert("❌ Không thể xóa bảng ghi này: "+t.message)}},window.updateEditRemaining=()=>{const n=parseInt(document.getElementById("edit-total").value)||0,t=parseInt(document.getElementById("edit-discount").value)||0,o=parseInt(document.getElementById("edit-deposit").value)||0,i=n-t-o,c=document.getElementById("edit-remaining");c&&(c.textContent=i>0?i.toLocaleString("vi-VN")+"đ":"0đ")};const ot=document.getElementById("edit-total"),at=document.getElementById("edit-deposit");ot&&ot.addEventListener("input",window.updateEditRemaining),at&&at.addEventListener("input",window.updateEditRemaining),document.querySelectorAll('#bookingModal button[onclick*="hidden"]').forEach(n=>{n.removeAttribute("onclick"),n.addEventListener("click",window.closeModal)});const st=async n=>{try{const o=await(await fetch("/api/admin_customers?action=create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:n.name,phone:n.phone,cccd:n.id_card||"",dob:n.dob||null,gender:n.gender||"Khác",medical_notes:n.allergy||"",dietary:n.diet||""})})).json();o.success&&o.csr_code&&(console.log("✅ Đã đồng bộ CRM thành công:",n.name,o.csr_code),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n.id,customer_id:o.csr_code})})).ok&&(console.log("✅ Đã cập nhật Booking mã CRM"),typeof _=="function"&&_()))}catch(t){console.error("❌ Lỗi đồng bộ CRM:",t)}},dt=document.getElementById("bookingsTableBody");dt&&dt.addEventListener("click",async n=>{const t=n.target.closest(".action-btn");if(!t){const c=n.target.closest(".row-clickable");if(c){const d=c.getAttribute("data-id"),a=M.find(r=>r.id==d);a&&openRowActionModal(a)}return}const o=t.getAttribute("data-id"),l=M.find(c=>c.id==o);if(!l)return;const i=document.getElementById("rowActionModal");if(i&&i.classList.add("hidden"),t.classList.contains("confirm-deposit-btn")){if(confirm("Xác nhận khách hàng này đã chuyển khoản đặt cọc?"))try{if(t.disabled=!0,t.classList.add("opacity-50"),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o,status:"Đã cọc"})})).ok)alert("✅ Đã xác nhận cọc thành công!"),st(l),typeof _=="function"&&_();else throw new Error("Lỗi cập nhật API")}catch(c){alert("❌ Lỗi: "+c.message)}finally{t.disabled=!1,t.classList.remove("opacity-50")}return}if(t.classList.contains("delete-btn")){window.actionDelete(o);return}else if(t.classList.contains("process-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/booking/process.html?id=${o}`;navigator.clipboard.writeText(a).then(()=>{alert("📋 Đã sao chép Link Điền Thông Tin!\\nGửi cho khách: "+a)}).catch(r=>{alert("Lỗi khi Copy Clipboard. Link là: "+a)})}else if(t.classList.contains("pay-terms-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay-terms.html?id=${o}`;navigator.clipboard.writeText(a).then(()=>{alert("📋 Đã sao chép Link Cọc Tour!\\nGửi cho khách: "+a)}).catch(r=>{alert("Lỗi khi Copy Clipboard. Link là: "+a)})}else if(t.classList.contains("send-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay?id=${o}`;navigator.clipboard.writeText(a).then(()=>{alert("📋 Đã sao chép Link Thanh Toán Cọc! Gửi cho khách qua Zalo nhé:\\n"+a)}).catch(r=>{alert("Lỗi khi Copy Clipboard. Link là: "+a)})}else if(t.classList.contains("payment-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay?id=${o}`;window.open(a,"_blank")}else t.classList.contains("view-btn")?(document.getElementById("rowActionModal").classList.add("hidden"),window.actionView(o)):t.classList.contains("edit-btn")&&window.actionEdit(o)});const P=document.getElementById("smartSearch"),S=document.getElementById("searchSuggestions");if(P){let n;P.addEventListener("input",t=>{const o=t.target.value.toLowerCase().trim();if(clearTimeout(n),o.length<2){S&&S.classList.add("hidden");return}n=setTimeout(async()=>{try{const l=await fetch(`/api/admin_customers?action=search&keyword=${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:o})}),i=await l.json();if(l.ok&&i.success){const d=[i.data];S&&(S.innerHTML=d.map(a=>`
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
                        `).join(""),S.classList.remove("hidden"))}else S&&(S.innerHTML='<div class="p-3 text-xs text-gray-400 italic text-center">Không tìm thấy khách hàng cũ</div>',S.classList.remove("hidden"))}catch(l){console.error("Search error:",l)}},300)}),S&&S.addEventListener("click",t=>{const o=t.target.closest(".suggestion-item");if(o){const l=document.getElementById("addFullName"),i=document.getElementById("addPhone"),c=document.getElementById("addCsrCode");l&&(l.value=o.getAttribute("data-name")),i&&(i.value=o.getAttribute("data-phone")),c&&(c.value=o.getAttribute("data-csr"));const d=document.getElementById("addDob"),a=document.getElementById("addGender"),r=document.getElementById("addIdCard"),h=document.getElementById("addAddress");d&&(d.value=o.getAttribute("data-dob")||""),a&&(a.value=o.getAttribute("data-gender")||"Khác"),r&&(r.value=o.getAttribute("data-cccd")||""),h&&(h.value=o.getAttribute("data-address")||"");const p=document.getElementById("addAllergy"),b=document.getElementById("addDiet"),s=document.getElementById("addTrekkingPole"),g=document.getElementById("addMedalName");p&&(p.value=o.getAttribute("data-allergy")||""),b&&(b.value=o.getAttribute("data-diet")||""),s&&(s.value=o.getAttribute("data-trekking_pole")||"Không"),g&&(g.value=o.getAttribute("data-medal-name")||""),window._selectedCustomer={fullName:o.getAttribute("data-name"),phone:o.getAttribute("data-phone"),csrCode:o.getAttribute("data-csr"),dob:o.getAttribute("data-dob")||"",gender:o.getAttribute("data-gender")||"",address:o.getAttribute("data-address")||"",id_card:o.getAttribute("data-cccd")||"",allergy:o.getAttribute("data-allergy")||"",diet:o.getAttribute("data-diet")||"",trekking_pole:o.getAttribute("data-trekking_pole")||"",medal_name:o.getAttribute("data-medal-name")||""},P.value=o.getAttribute("data-name"),S.classList.add("hidden");const x=`
                    <div id="loyalty-alert" class="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-600 rounded-lg text-sm flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Nhận diện khách thân thiết: <b>${o.getAttribute("data-csr")}</b>. Hệ thống sẽ kế thừa toàn bộ hồ sơ cũ!
                    </div>`,k=document.getElementById("loyalty-alert");k&&k.remove(),P.parentElement.insertAdjacentHTML("afterend",x)}}),document.addEventListener("click",t=>{!P.contains(t.target)&&S&&!S.contains(t.target)&&S.classList.add("hidden")})}const G=document.getElementById("addTourPrice"),O=document.getElementById("addDiscount"),lt=document.getElementById("addTotalPriceDisplay");document.getElementById("addTourName");const it=()=>{if(!G||!O||!lt)return;const n=parseInt(G.value)||0,t=parseInt(O.value)||0,o=n-t;lt.textContent=(o>0?o:0).toLocaleString("vi-VN")+"đ"};G&&G.addEventListener("input",it),O&&O.addEventListener("input",it);const rt=document.getElementById("searchBtn");rt&&rt.addEventListener("click",n=>{n.preventDefault(),document.getElementById("smartSearch").value||alert("Vui lòng nhập Số Điện Thoại hoặc Mã #CSR")});const q=document.getElementById("bookingForm");q&&q.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.querySelector('button[type="submit"]'),o=t.textContent;t.textContent="Đang lưu hệ thống...",t.disabled=!0;try{const l=document.getElementById("addFullName").value,i=document.getElementById("addPhone").value,c=document.getElementById("addTourName").value,d=document.getElementById("addTourDate").value;let a=null,r=d;if(d&&d.includes("::")){const I=d.split("::");a=parseInt(I[0])||null,r=I[1]}const h=document.getElementById("addDob").value,p=document.getElementById("addGender").value,b=document.getElementById("addIdCard").value,s=document.getElementById("addAddress").value,g=document.getElementById("addSpecial").value,x=document.getElementById("addAllergy").value,k=document.getElementById("addDiet").value,B=document.getElementById("addTrekkingPole").value,e=document.getElementById("addMedalName").value,m=parseInt(document.getElementById("addTourPrice").value)||0,u=parseInt(document.getElementById("addDiscount").value)||0,y=parseInt(document.getElementById("addDepositRequired").value),w=isNaN(y)?1e6:y,C=document.getElementById("addCsrCode").value||"",T=localStorage.getItem("csr_user");let L=null,E="Admin";if(T){const I=JSON.parse(T);L=I.id,E=I.fullName||I.full_name||"Admin"}const $=document.getElementById("editingBookingId")?document.getElementById("editingBookingId").value:"",v={name:l,phone:i,tour:c,date:r,status:"Chờ cọc",total_price:m-u,discount:u,deposit:0,sale_id:L,sale_name:E,customer_id:C,deposit_required:w,commitments:!0,schedule_id:a,dob:h,gender:p,address:s,id_card:b,special:g,allergy:x,diet:k,trekking_pole:B,medal_name:e},D=i.replace(/[^0-9]/g,"");window._selectedCustomer&&(window._selectedCustomer.phone||"").replace(/[^0-9]/g,"")===D&&(v.dob=v.dob||window._selectedCustomer.dob,v.gender=v.gender&&v.gender!=="Khác"?v.gender:window._selectedCustomer.gender||"Khác",v.address=v.address||window._selectedCustomer.address,v.id_card=v.id_card||window._selectedCustomer.id_card,v.allergy=window._selectedCustomer.allergy,v.diet=window._selectedCustomer.diet,v.trekking_pole=window._selectedCustomer.trekking_pole,v.medal_name=window._selectedCustomer.medal_name),$&&(v.id=$,delete v.status,delete v.deposit,delete v.sale_id,delete v.sale_name);const R=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(R.ok){alert($?"✅ Đã lưu Cập nhật Đơn hàng!":"✅ Thêm Đơn Hàng Thành Công!"),window.closeModal(),q&&q.reset(),window._selectedCustomer=null;const I=document.getElementById("loyalty-alert");I&&I.remove(),document.getElementById("addTotalPriceDisplay")&&(document.getElementById("addTotalPriceDisplay").textContent="0đ"),typeof _=="function"?_():window.location.reload()}else{const I=await R.json();throw new Error(I.error||"Lỗi tạo Booking!")}}catch(l){alert("❌ "+l.message)}finally{t.textContent=o,t.disabled=!1}});const ct=document.getElementById("editForm");ct&&ct.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.querySelector('button[type="submit"]'),o=t.textContent;t.textContent="Đang lưu cập nhật...",t.disabled=!0;try{const l=document.getElementById("edit-id").value,i=document.getElementById("edit-name").value,c=document.getElementById("edit-phone").value,d=document.getElementById("edit-medal-name").value,a=document.getElementById("edit-tour").value,r=document.getElementById("edit-date").value;let h=r,p;if(r&&r.includes("::")){const I=r.split("::");p=parseInt(I[0])||null,h=I[1]}const b=document.getElementById("edit-dob").value,s=document.getElementById("edit-gender").value,g=document.getElementById("edit-status").value,x=document.getElementById("edit-allergy").value,k=document.getElementById("edit-address").value,B=document.getElementById("edit-diet").value,e=document.getElementById("edit-trekking-pole").value,m=document.getElementById("edit-commitments").checked,u=document.getElementById("edit-special").value,y=document.getElementById("edit-sale");let w,C;if(y&&y.parentElement&&!y.parentElement.classList.contains("hidden")&&(w=y.value||null,C="Website",w)){const I=z.find(mt=>String(mt.id)===String(w));I&&(C=I.full_name||I.fullName)}const T=parseInt(document.getElementById("edit-total").value)||0,L=parseInt(document.getElementById("edit-discount").value)||0,E=parseInt(document.getElementById("edit-deposit").value)||0,$=parseInt(document.getElementById("edit-deposit-required").value),v=isNaN($)?1e6:$,D={id:l,name:i,phone:c,medal_name:d,tour:a,date:h,dob:b,gender:s,status:g,allergy:x,address:k,diet:B,trekking_pole:e,commitments:m,special:u,sale_id:w,sale_name:C,total_price:T-L,discount:L,deposit:E,deposit_required:v,...p!==void 0?{schedule_id:p}:{}},R=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)});if(R.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),(g.includes("Đã cọc")||D.total_price>0&&D.total_price===E)&&st(D),window.closeEditModal(),typeof _=="function"&&_();else{const I=await R.json();throw new Error(I.error||"Gặp sự cố khi Cập nhật API.")}}catch(l){alert("❌ Lỗi Cập nhật: "+l.message)}finally{t.textContent=o,t.disabled=!1}})};export{vt as afterRender,yt as render};
