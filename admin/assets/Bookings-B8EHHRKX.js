import{S as pt,H as mt}from"./Header-n5pNPUhI.js";console.log("Bookings V3 - Cache Busted!");const ft=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${pt()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${mt()}
          
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
                          <button data-tab="ready" class="tab-btn border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                              Khách Chờ Lên Xe
                          </button>
                          <button data-tab="completed" class="tab-btn border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                              Lịch Sử (Đã Đi)
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
    `,yt=()=>{let M=[],f="consult",H=[],W=[],z=[];const ct=async()=>{try{const[n,t,o]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules"),fetch("/api/users")]);H=n.ok?await n.json():[],W=t.ok?await t.json():[],z=o.ok?await o.json():[],J("addTourName"),J("edit-tour"),ut("edit-sale")}catch(n){console.error("Lỗi tải tours/schedules:",n)}},ut=n=>{const t=document.getElementById(n);t&&(t.innerHTML='<option value="">-- Website --</option>',z.forEach(o=>{const l=document.createElement("option");l.value=o.id,l.textContent=`${o.full_name||o.fullName} (${o.role})`,t.appendChild(l)}))},J=n=>{const t=document.getElementById(n);if(!t)return;const o=t.value,l=t.options[0].outerHTML;t.innerHTML=l,H.filter(d=>d.is_visible!==!1).forEach(d=>{const r=document.createElement("option");r.value=d.name,r.textContent=d.name,d.name===o&&(r.selected=!0),t.appendChild(r)})},R=(n,t,o,l)=>{const d=document.getElementById(n);if(!d)return;if(d.innerHTML='<option value="">-- Chọn Lịch --</option>',!t){d.innerHTML='<option value="">-- Chọn Tour trước --</option>';return}const r=W.filter(s=>s.tour_name===t||t.includes(s.tour_name)||s.tour_name.includes(t));if(r.length===0){d.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}r.sort((s,a)=>new Date(s.start_date)-new Date(a.start_date)).forEach(s=>{const a=parseInt(s.booked_count)||0,u=(s.slots||0)-a,h=new Date(s.start_date),m=s.end_date?new Date(s.end_date):null,y=w=>`${w.getDate().toString().padStart(2,"0")}/${(w.getMonth()+1).toString().padStart(2,"0")}`;let i=y(h);m&&(i+=" - "+y(m)),s.group_label&&(i+=` · ${s.group_label}`),i+=` (${u>=0?u:0} chỗ trống)`;const p=document.createElement("option"),b=`${h.getDate().toString().padStart(2,"0")}/${(h.getMonth()+1).toString().padStart(2,"0")}/${h.getFullYear()}`;p.value=`${s.id}::${b}`,p.dataset.scheduleId=s.id,p.dataset.date=b,p.textContent=i,u<=0&&(p.disabled=!0,p.textContent=i.replace("chỗ trống","HẾT CHỖ")),(l&&String(s.id)===String(l)||!l&&o&&b===o)&&(p.selected=!0),d.appendChild(p)})},X=document.getElementById("addTourName");X&&X.addEventListener("change",n=>{const t=n.target.value;R("addTourDate",t);const o=H.find(d=>d.name===t),l=document.getElementById("addTourPrice");if(o&&l){const d=parseInt(o.price)||0;l.value=d;const r=document.getElementById("addDiscount"),s=document.getElementById("addTotalPriceDisplay"),a=parseInt(r?r.value:0)||0,u=d-a;s&&(s.textContent=(u>0?u:0).toLocaleString("vi-VN")+"đ")}});const Y=document.getElementById("edit-tour");Y&&Y.addEventListener("change",n=>{const t=n.target.value;R("edit-date",t);const o=H.find(d=>d.name===t),l=document.getElementById("edit-total");o&&l&&(parseInt(l.value)===0||!l.value)&&(l.value=parseInt(o.price)||0,typeof window.updateEditRemaining=="function"&&window.updateEditRemaining())}),ct();const A=()=>{const n=document.getElementById("bookingsTableHead"),t=document.getElementById("bookingsTableBody");if(!t||!n)return;const o=f==="upcoming"||f==="ready"||f==="completed";o?n.innerHTML=`
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
            `;const l=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",d=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",r=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",s=document.getElementById("filterSale")?document.getElementById("filterSale").value:"",a=document.getElementById("filterStatus")?document.getElementById("filterStatus").value:"";let u=M.filter(e=>{let g=!1;const c=parseInt(e.total_price)>0&&parseInt(e.total_price)===parseInt(e.deposit),v=T=>{if(!T)return!1;try{const k=T.split("/");if(k.length===3){const L=new Date(`${k[2]}-${k[1]}-${k[0]}T00:00:00`),C=new Date;return C.setHours(0,0,0,0),L.getTime()<C.getTime()}else if(T.includes("-")){const L=new Date(`${T}T00:00:00`),C=new Date;return C.setHours(0,0,0,0),L.getTime()<C.getTime()}}catch{}return!1},I=(e.status==="Hoàn thành"||e.status==="Đã đi"||c)&&v(e.date);return f==="consult"?g=e.status==="Chờ tư vấn"&&!I:f==="pending"?g=(!e.status||e.status==="Chờ cọc"||e.status==="Chờ xác nhận cọc")&&!I:f==="upcoming"?g=e.status&&e.status!=="Chờ tư vấn"&&e.status!=="Chờ cọc"&&e.status!=="Chờ xác nhận cọc"&&!c&&e.status!=="Hoàn thành"&&!I:f==="ready"?g=(c||e.status==="Hoàn thành")&&!I:f==="completed"&&(g=I),!(!g||d&&e.tour!==d||r&&q(e.date)!==r||s&&s!=="null"&&e.sale_name!==s||s==="null"&&e.sale_name&&e.sale_name!=="Website"||l&&!`${e.name||""} ${e.phone||""} ${e.customer_id||""}`.toLowerCase().includes(l)||a&&e.status!==a)});const h=document.getElementById("statTitle1"),m=document.getElementById("statTitle2"),y=document.getElementById("statTitle3"),i=document.getElementById("statTotalCustomers"),p=document.getElementById("statTotalRevenue"),b=document.getElementById("statTotalCollected");let w=u.length;if(f==="consult"){h&&(h.textContent="Tổng Leads Tư Vấn"),m&&(m.textContent="Chưa Có Sale Nhận"),y&&(y.textContent="Đã Có Sale Nhận");let e=0,g=0;u.forEach(c=>{!c.sale_id||c.sale_id==="null"||!c.sale_name||c.sale_name==="Website"||c.sale_name==="null"?e++:g++}),i&&(i.textContent=w),p&&(p.textContent=e+" Đơn"),b&&(b.textContent=g+" Đơn")}else if(f==="pending"){h&&(h.textContent="Tổng Khách (Chờ Cọc)"),m&&(m.textContent="Khách Chưa Tư Vấn (Mới)"),y&&(y.textContent="Đã Có Sale Giữ Chỗ");let e=0,g=0;u.forEach(c=>{!c.sale_id||c.sale_id==="null"||!c.sale_name||c.sale_name==="Website"||c.sale_name==="null"?e++:g++}),i&&(i.textContent=w),p&&(p.textContent=e+" Đơn"),b&&(b.textContent=g+" Đơn")}else if(f==="upcoming"){h&&(h.textContent="Tổng Số Khách"),m&&(m.textContent="Chưa Xác Nhận Cọc"),y&&(y.textContent="Chờ Thanh Toán Còn Lại");let e=0,g=0;u.forEach(c=>{c.status==="Chờ xác nhận cọc"?e++:parseInt(c.deposit)>0&&parseInt(c.total_price)>parseInt(c.deposit)&&g++}),i&&(i.textContent=w),p&&(p.textContent=e+" Khách"),b&&(b.textContent=g+" Khách")}else if(f==="ready"){h&&(h.textContent="Khách Sẵn Sàng (Full)"),m&&(m.textContent="Tổng Doanh Thu Tab"),y&&(y.textContent="Thực Thu (Full Tận Nơi)");let e=0,g=0;u.forEach(c=>{e+=parseInt(c.total_price)||0,g+=parseInt(c.deposit)||0}),i&&(i.textContent=w),p&&(p.textContent=e>0?e.toLocaleString("vi-VN")+"đ":"0đ"),b&&(b.textContent=g>0?g.toLocaleString("vi-VN")+"đ":"0đ")}else{h&&(h.textContent="Khách Đã Xong (Lịch Sử)"),m&&(m.textContent="Tổng Doanh Thu Tab"),y&&(y.textContent="Thực Thu (Đã Đóng)");let e=0,g=0;u.forEach(c=>{e+=parseInt(c.total_price)||0,g+=parseInt(c.deposit)||0}),i&&(i.textContent=w),p&&(p.textContent=e>0?e.toLocaleString("vi-VN")+"đ":"0đ"),b&&(b.textContent=g>0?g.toLocaleString("vi-VN")+"đ":"0đ")}const E=o?8:4;if(!u||u.length===0){let e=f==="consult"?"Chưa có khách hàng tư vấn nào.":f==="pending"?"Chưa có Khách chờ cọc.":f==="upcoming"?"Chưa có Khách nào Đã Cọc.":f==="ready"?"Chưa có khách sẵn sàng.":"Danh sách rỗng.";t.innerHTML=`<tr><td colspan="${E}" class="p-8 text-center text-gray-500">${e}</td></tr>`;return}t.innerHTML=u.map(e=>{const g=f==="upcoming"||f==="ready"?"bg-green-50/20 hover:bg-green-50 transition-colors":"hover:bg-gray-100 transition-colors";if(o){let c=parseInt(e.total_price)||0;if(c===0&&e.tour&&H&&H.length>0){const S=H.find(N=>N.name&&e.tour&&N.name.toLowerCase().trim()===e.tour.toLowerCase().trim());S&&parseInt(S.price)>0&&(c=parseInt(S.price))}const v=parseInt(e.deposit)||0,I=c-v,T=c>0?c.toLocaleString("vi-VN")+"đ":"Chưa định giá",k=v>0?v.toLocaleString("vi-VN")+"đ":"0đ",L=I>0?I.toLocaleString("vi-VN")+"đ":I===0&&c>0?"Đã thu trọn":"-";let C="";e.status==="Hoàn thành"||e.status==="Đã đi"?C='<span class="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-xs block w-full text-center">Hoàn thành</span>':e.status==="Chờ xác nhận cọc"?C=`<button class="action-btn confirm-deposit-btn bg-csr-orange text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-[#d65503] w-full" data-id="${e.id}">Xác nhận cọc</button>`:v>0&&I===0?C='<span class="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Hoàn tất phí</span>':C='<span class="bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Đã Cọc</span>';let x="";return v>0&&(x=`<a href="/invoice.html?id=${e.id}" target="_blank" class="mt-1.5 block text-center text-[11px] text-blue-600 hover:text-blue-800 hover:underline font-medium" onclick="event.stopPropagation()">🧾 Xem hóa đơn</a>`),`
                <tr class="${g} cursor-pointer row-clickable" data-id="${e.id}">
                    <td class="p-4 align-top">
                        <div class="font-medium text-gray-900">${e.name}</div>
                        ${e.customer_id?`<div class="mt-1 flex items-center bg-orange-50 text-csr-orange text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">${e.customer_id.toUpperCase()}</div>`:`<div class="text-[11px] text-gray-500 mt-0.5">${e.phone}</div>`}
                    </td>
                    <td class="p-4 align-top text-sm">
                        <div class="text-gray-700 font-medium">${e.tour}</div>
                        <div class="text-gray-500 text-xs whitespace-nowrap">${e.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-600">${e.sale_name||"Website"}</td>
                    <td class="p-4 align-top text-center">${C}${x}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-gray-700">${T}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-green-600">${k}</td>
                    <td class="p-4 align-top text-right text-sm font-bold text-red-500">${L}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            <button class="action-btn payment-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">Thanh toán</button>
                        </div>
                    </td>
                </tr>
                `}else{const c=e.name?e.name.substring(0,2).toUpperCase():"KH",v=f==="consult",I=!e.sale_id||e.sale_id==="null"||!e.sale_name||e.sale_name==="null";let T="";v&&I?T=`<button class="action-btn claim-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">Nhận khách</button>`:T=`<span class="text-sm text-gray-500">${e.sale_name||"Website"}</span>`;const k=`
                    <button class="action-btn process-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors mr-1" data-id="${e.id}">📝 Thông Tin</button>
                    ${e.customer_id?`<button class="action-btn payment-btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">💳 Thanh toán</button>`:`<button class="action-btn pay-terms-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">🔗 Cọc Tour</button>`}
                `;return`
                <tr class="${g} cursor-pointer row-clickable" data-id="${e.id}">
                    <td class="p-4 align-top">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-csr-orange/20 text-csr-orange flex items-center justify-center font-bold">${c}</div>
                            <div>
                                <div class="font-medium text-gray-900">${e.name}</div>
                                ${e.customer_id?`<div class="mt-1 flex items-center bg-orange-50 text-csr-orange text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">${e.customer_id.toUpperCase()}</div>`:`<div class="text-[11px] text-gray-500 mt-0.5">${e.phone}</div>`}
                            </div>
                        </div>
                    </td>
                    <td class="p-4 align-top">
                        <div class="text-sm text-gray-600">${e.tour||"(Chưa rõ)"}</div>
                        <div class="text-xs text-gray-500 mt-1">Lịch: ${e.date||"(Chưa chọn)"}</div>
                        ${v&&e.special?`<div class="text-xs text-blue-500 mt-1 italic">💬 ${e.special}</div>`:""}
                    </td>
                    <td class="p-4 align-top">${T}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            ${k}
                        </div>
                    </td>
                </tr>
    `}}).join(""),document.querySelectorAll(".claim-btn").forEach(e=>{e.addEventListener("click",async g=>{g.stopPropagation();const c=e.getAttribute("data-id"),v=localStorage.getItem("csr_user");let I=null,T="Admin";if(v){const k=JSON.parse(v);I=k.id,T=k.fullName||k.full_name||"Admin"}e.textContent="Đang xử lý...",e.disabled=!0;try{if((await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,sale_id:I,sale_name:T})})).ok){const L=M.find(C=>C.id==c);L&&(L.sale_id=I,L.sale_name=T),A()}else alert("Lỗi khi nhận khách. Vui lòng thử lại."),e.textContent="Nhận khách",e.disabled=!1}catch(k){console.error("Lỗi nhận khách:",k),e.textContent="Nhận khách",e.disabled=!1}})})},gt=()=>{const n=new Set,t=new Set,o=new Set;M.forEach(s=>{if(s.tour&&n.add(s.tour),s.date){const a=q(s.date);a&&t.add(a)}s.sale_name&&s.sale_name!=="Website"&&s.sale_name!=="null"&&o.add(s.sale_name.trim())});const l=document.getElementById("filterTour"),d=document.getElementById("filterDate"),r=document.getElementById("filterSale");if(l){const s=l.value;l.innerHTML='<option value="">Tất cả Tour</option>',[...n].sort().forEach(a=>l.innerHTML+=`<option value="${a}">${a}</option>`),l.value=s}if(d){const s=d.value;d.innerHTML='<option value="">Tất cả Ngày</option>',[...t].sort().forEach(a=>d.innerHTML+=`<option value="${a}">${a}</option>`),d.value=s}if(r){const s=r.value;r.innerHTML='<option value="">Tất cả Sale</option>',r.innerHTML+='<option value="null">Nguồn Website</option>',[...o].sort().forEach(a=>{r.innerHTML+=`<option value="${a}">${a}</option>`}),r.value=s}};function q(n){if(!n)return"";if(/^\d{1,2}\/\d{1,2}\s*-\s*\d{1,2}\/\d{1,2}$/.test(n))return n.replace(/\s+/g,"");try{if(/^\d{4}-\d{2}-\d{2}$/.test(n)){const[t,o,l]=n.split("-"),d=`${parseInt(l)}/${parseInt(o)}`;return`${d}-${d}`}if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(n)){const[t,o,l]=n.split("/"),d=`${parseInt(t)}/${parseInt(o)}`;return`${d}-${d}`}if(n.includes("-"))return n.split("-").map(o=>{const l=o.trim();if(/\/\d{4}$/.test(l)){const[d,r]=l.split("/");return`${parseInt(d)}/${parseInt(r)}`}return l}).join("-")}catch{console.warn("Date normalization failed for:",n)}return n}const $=async()=>{try{M=await(await fetch("/api/bookings")).json(),gt(),A()}catch(n){console.error("Lỗi parse list đơn hàng:",n);const t=document.getElementById("bookingsTableBody");t&&(t.innerHTML='<tr><td colspan="4" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu từ Server.</td></tr>')}};$(),["filterSearch","filterTour","filterDate","filterSale","filterStatus"].forEach(n=>{const t=document.getElementById(n);t&&(n==="filterSearch"?t.addEventListener("input",A):t.addEventListener("change",A))});const Q=document.getElementById("exportExcelBtn");Q&&Q.addEventListener("click",()=>{const n=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",t=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",o=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",l=document.getElementById("filterSale")?document.getElementById("filterSale").value:"";let d=M.filter(i=>{let p=!1;const b=parseInt(i.total_price)>0&&parseInt(i.total_price)===parseInt(i.deposit),w=e=>{if(!e)return!1;try{const g=e.split("/");if(g.length===3){const c=new Date(`${g[2]}-${g[1]}-${g[0]}T00:00:00`),v=new Date;return v.setHours(0,0,0,0),c.getTime()<v.getTime()}else if(e.includes("-")){const c=new Date(`${e}T00:00:00`),v=new Date;return v.setHours(0,0,0,0),c.getTime()<v.getTime()}}catch{}return!1},E=(i.status==="Hoàn thành"||i.status==="Đã đi"||b)&&w(i.date);return f==="consult"?p=i.status==="Chờ tư vấn"&&!E:f==="pending"?p=(!i.status||i.status==="Chờ cọc")&&!E:f==="upcoming"?p=i.status&&i.status!=="Chờ tư vấn"&&i.status!=="Chờ cọc"&&!b&&i.status!=="Hoàn thành"&&!E:f==="ready"?p=(b||i.status==="Hoàn thành")&&!E:f==="completed"&&(p=E),!(!p||t&&i.tour!==t||o&&q(i.date)!==o||l&&l!=="null"&&i.sale_name!==l||l==="null"&&i.sale_name&&i.sale_name!=="Website"||n&&!`${i.name||""} ${i.phone||""} ${i.customer_id||""} `.toLowerCase().includes(n))});if(d.length===0){alert("Danh sách rỗng. Không có dữ liệu để xuất.");return}const s=[["Mã KH (CRM)","Họ và Tên","Số điện thoại","Tên Tour","Lịch trình","Trạng thái","Nguồn / Sale","Đã cọc","Tổng tiền","Ghi chú"]];d.forEach(i=>{s.push([i.customer_id||"",`"${i.name||""}"`,`= "${i.phone||""}"`,`"${i.tour||""}"`,`"${i.date||""}"`,`"${i.status||""}"`,`"${i.sale_name||"Website"}"`,i.deposit||0,i.total_price||0,`"${(i.special||"").replace(/"/g,'""')}"`])});const a="\\uFEFF"+s.map(i=>i.join(",")).join(`
`),u=new Blob([a],{type:"text/csv;charset=utf-8;"}),h=URL.createObjectURL(u),m=document.createElement("a");m.setAttribute("href",h);let y=f==="pending"?"ChoCoc":f==="upcoming"?"SapThamGia":f==="ready"?"ChoLenXe":"LichSu";m.setAttribute("download",`BaoCao_DonHang_${y}_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(m),m.click(),document.body.removeChild(m)});const Z=document.querySelectorAll(".tab-btn");Z.forEach(n=>{n.addEventListener("click",t=>{Z.forEach(o=>{o.classList.remove("border-csr-orange","text-csr-orange"),o.classList.add("border-transparent","text-gray-500")}),t.target.classList.add("border-csr-orange","text-csr-orange"),t.target.classList.remove("border-transparent","text-gray-500"),f=t.target.getAttribute("data-tab"),A()})});const D=document.getElementById("bookingModal"),j=document.getElementById("bookingModalContent"),F=document.getElementById("detailModal"),tt=document.getElementById("detailModalContent"),K=document.getElementById("editModal"),U=document.getElementById("editModalContent"),et=document.getElementById("addBookingBtn");D&&(D.classList.add("duration-200","ease-out"),j.classList.add("duration-300","ease-out")),K&&(K.classList.add("duration-200","ease-out"),U.classList.add("duration-300","ease-out")),et&&et.addEventListener("click",()=>{document.getElementById("bookingModalContent").querySelector("h2").innerText="Thêm Khách Hàng (Tạo Đơn)",document.getElementById("submitBookingBtn").innerText="Tạo Phơi Đăng Ký",document.getElementById("editingBookingId").value="",document.getElementById("bookingForm").reset();const n=document.getElementById("loyalty-alert");n&&n.remove(),D.classList.remove("hidden"),setTimeout(()=>{D.classList.add("opacity-100"),j.classList.remove("scale-95","translate-y-4"),j.classList.add("scale-100","translate-y-0")},10)}),window.closeModal=()=>{D&&(D.classList.remove("opacity-100"),j.classList.remove("scale-100","translate-y-0"),j.classList.add("scale-95","translate-y-4"),setTimeout(()=>{D.classList.add("hidden")},200))},window.closeDetailModal=()=>{F&&(F.classList.remove("opacity-100"),tt.classList.remove("scale-100","translate-y-0"),tt.classList.add("scale-95","translate-y-4"),setTimeout(()=>{F.classList.add("hidden")},200))},window.closeEditModal=()=>{K&&(K.classList.remove("opacity-100"),U.classList.remove("scale-100","translate-y-0"),U.classList.add("scale-95","translate-y-4"),setTimeout(()=>{K.classList.add("hidden")},200))},window.openRowActionModal=n=>{document.getElementById("ramName").textContent=n.name||"Khách Hàng Này",document.getElementById("ramPhone").textContent=n.customer_id?`🥇 ${n.customer_id.toUpperCase()}`:n.phone||"";const t=`
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
        `;document.getElementById("ramActions").innerHTML=t,document.getElementById("rowActionModal").classList.remove("hidden")},window.addEventListener("click",n=>{const t=document.getElementById("rowActionModal");t&&n.target===t&&t.classList.add("hidden")}),window.actionView=n=>{document.getElementById("rowActionModal").classList.add("hidden");const t=M.find(r=>r.id==n);if(!t)return;const o=parseInt(t.deposit)>0?`<span class="text-green-600 font-bold">${parseInt(t.deposit).toLocaleString("vi-VN")}đ</span>`:'<span class="text-yellow-600 font-bold">0đ (Chưa Cọc)</span>',l=t.total_price?`${parseInt(t.total_price).toLocaleString("vi-VN")}đ`:"Chưa định giá",d=`
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
                <p><strong class="text-gray-500 block">Tổng Tiền:</strong> <span class="font-bold">${l}</span></p>
                <p><strong class="text-gray-500 block">Cam Kết:</strong> <span class="${t.commitments?"text-green-600":"text-red-500"} font-bold">${t.commitments?"Đã đồng ý":"Chưa xác nhận"}</span></p>
                <p class="col-span-2"><strong class="text-gray-500 block">Nhân Viên Sale / Ghi Chú:</strong> <span class="italic text-gray-700 bg-yellow-50 p-2 block mt-1 rounded border border-yellow-100">${t.sale_name||"Website"} - ${t.special||"(Không có nhánh ghi chú)"}</span></p>
            </div>
        `;document.getElementById("detailContentBlock").innerHTML=d,document.getElementById("detailModal").classList.remove("hidden"),setTimeout(()=>{document.getElementById("detailModal").classList.add("opacity-100");const r=document.getElementById("detailModalContent");r&&(r.classList.remove("scale-95","translate-y-4"),r.classList.add("scale-100","translate-y-0"))},10)},window.actionEdit=async n=>{document.getElementById("rowActionModal").classList.add("hidden");const t=M.find(a=>a.id==n);if(!t)return;document.getElementById("edit-id").value=n,document.getElementById("edit-name").value=t.name||"",document.getElementById("edit-phone").value=t.phone||"",document.getElementById("edit-medal-name").value=t.medal_name||"",document.getElementById("edit-tour").value=t.tour||"",typeof R=="function"&&R("edit-date",t.tour||"",t.date||"",t.schedule_id||null),(a=>{let u=a.dob||"";if(typeof u=="string"&&u.includes("/")){const h=u.split("/");h.length===3&&(u=`${h[2]}-${h[1].padStart(2,"0")}-${h[0].padStart(2,"0")}`)}document.getElementById("edit-dob").value=u,document.getElementById("edit-gender").value=a.gender||"Khác",document.getElementById("edit-allergy").value=a.allergy||a.medical_notes||"",document.getElementById("edit-address").value=a.address||"",document.getElementById("edit-diet").value=a.diet||a.dietary||"Không",document.getElementById("edit-trekking-pole").value=a.trekking_pole||"Không"})(t),document.getElementById("edit-status").value=t.status||"Chờ xác nhận cọc",document.getElementById("edit-commitments").checked=!!t.commitments,document.getElementById("edit-special").value=t.special||"";try{const a=localStorage.getItem("csr_user");if(a&&JSON.parse(a).role==="admin"){const h=document.getElementById("edit-sale-container");h&&h.classList.remove("hidden");const m=document.getElementById("edit-sale");m&&(m.value=t.sale_id||"")}}catch{}if((!t.dob||!t.address||!t.gender||t.gender==="Khác")&&(t.customer_id||t.phone))try{const a=t.customer_id||t.phone,u=await fetch(`/api/admin_customers?action=search&keyword=${encodeURIComponent(a)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:a})}),h=await u.json();if(u.ok&&h.success){const m=h.data,y=document.getElementById("edit-dob"),i=document.getElementById("edit-address"),p=document.getElementById("edit-allergy"),b=document.getElementById("edit-diet"),w=document.getElementById("edit-gender"),E=document.getElementById("edit-medal-name");y&&!y.value&&(y.value=m.dob||""),i&&!i.value&&(i.value=m.address||""),p&&!p.value&&(p.value=m.medical_notes||""),b&&(b.value==="Không"||!b.value)&&(b.value=m.dietary||"Không"),w&&(w.value==="Khác"||!w.value)&&(w.value=m.gender||"Khác"),E&&!E.value&&(E.value=m.medal_name||"")}}catch(a){console.error("Pull CRM error:",a)}let d=(parseInt(t.total_price)||0)+(parseInt(t.discount)||0);if(d===0&&t.tour){const a=H.find(u=>u.name===t.tour);a&&parseInt(a.price)>0&&(d=parseInt(a.price))}document.getElementById("edit-total").value=d,document.getElementById("edit-discount").value=t.discount||0,document.getElementById("edit-deposit").value=t.deposit||0,document.getElementById("edit-deposit-required").value=t.deposit_required||1e6,window.updateEditRemaining();const r=document.getElementById("editModal"),s=document.getElementById("editModalContent");r&&s&&(r.classList.remove("hidden"),setTimeout(()=>{r.classList.add("opacity-100"),s.classList.remove("scale-95","translate-y-4"),s.classList.add("scale-100","translate-y-0")},10))},window.actionDelete=async n=>{if(document.getElementById("rowActionModal").classList.add("hidden"),confirm("Bạn có chắc chắn muốn xóa Đơn hàng này? Thao tác không thể hoàn tác."))try{if((await fetch(`/api/bookings?id=${n}`,{method:"DELETE"})).ok)alert("✅ Đã xóa đơn hàng thành công!"),$();else throw new Error("Lỗi từ Server")}catch(t){alert("❌ Không thể xóa bảng ghi này: "+t.message)}},window.updateEditRemaining=()=>{const n=parseInt(document.getElementById("edit-total").value)||0,t=parseInt(document.getElementById("edit-discount").value)||0,o=parseInt(document.getElementById("edit-deposit").value)||0,d=n-t-o,r=document.getElementById("edit-remaining");r&&(r.textContent=d>0?d.toLocaleString("vi-VN")+"đ":"0đ")};const nt=document.getElementById("edit-total"),ot=document.getElementById("edit-deposit");nt&&nt.addEventListener("input",window.updateEditRemaining),ot&&ot.addEventListener("input",window.updateEditRemaining),document.querySelectorAll('#bookingModal button[onclick*="hidden"]').forEach(n=>{n.removeAttribute("onclick"),n.addEventListener("click",window.closeModal)});const at=async n=>{try{const o=await(await fetch("/api/admin_customers?action=create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:n.name,phone:n.phone,cccd:n.id_card||"",dob:n.dob||null,gender:n.gender||"Khác",medical_notes:n.allergy||"",dietary:n.diet||""})})).json();o.success&&o.csr_code&&(console.log("✅ Đã đồng bộ CRM thành công:",n.name,o.csr_code),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n.id,customer_id:o.csr_code})})).ok&&(console.log("✅ Đã cập nhật Booking mã CRM"),typeof $=="function"&&$()))}catch(t){console.error("❌ Lỗi đồng bộ CRM:",t)}},st=document.getElementById("bookingsTableBody");st&&st.addEventListener("click",async n=>{const t=n.target.closest(".action-btn");if(!t){const r=n.target.closest(".row-clickable");if(r){const s=r.getAttribute("data-id"),a=M.find(u=>u.id==s);a&&openRowActionModal(a)}return}const o=t.getAttribute("data-id"),l=M.find(r=>r.id==o);if(!l)return;const d=document.getElementById("rowActionModal");if(d&&d.classList.add("hidden"),t.classList.contains("confirm-deposit-btn")){if(confirm("Xác nhận khách hàng này đã chuyển khoản đặt cọc?"))try{if(t.disabled=!0,t.classList.add("opacity-50"),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o,status:"Đã cọc"})})).ok)alert("✅ Đã xác nhận cọc thành công!"),at(l),typeof $=="function"&&$();else throw new Error("Lỗi cập nhật API")}catch(r){alert("❌ Lỗi: "+r.message)}finally{t.disabled=!1,t.classList.remove("opacity-50")}return}if(t.classList.contains("delete-btn")){window.actionDelete(o);return}else if(t.classList.contains("process-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/booking/process.html?id=${o}`;navigator.clipboard.writeText(a).then(()=>{alert("📋 Đã sao chép Link Điền Thông Tin!\\nGửi cho khách: "+a)}).catch(u=>{alert("Lỗi khi Copy Clipboard. Link là: "+a)})}else if(t.classList.contains("pay-terms-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay-terms.html?id=${o}`;navigator.clipboard.writeText(a).then(()=>{alert("📋 Đã sao chép Link Cọc Tour!\\nGửi cho khách: "+a)}).catch(u=>{alert("Lỗi khi Copy Clipboard. Link là: "+a)})}else if(t.classList.contains("send-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay?id=${o}`;navigator.clipboard.writeText(a).then(()=>{alert("📋 Đã sao chép Link Thanh Toán Cọc! Gửi cho khách qua Zalo nhé:\\n"+a)}).catch(u=>{alert("Lỗi khi Copy Clipboard. Link là: "+a)})}else if(t.classList.contains("payment-btn")){const a=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay?id=${o}`;window.open(a,"_blank")}else t.classList.contains("view-btn")?(document.getElementById("rowActionModal").classList.add("hidden"),window.actionView(o)):t.classList.contains("edit-btn")&&window.actionEdit(o)});const P=document.getElementById("smartSearch"),B=document.getElementById("searchSuggestions");if(P){let n;P.addEventListener("input",t=>{const o=t.target.value.toLowerCase().trim();if(clearTimeout(n),o.length<2){B&&B.classList.add("hidden");return}n=setTimeout(async()=>{try{const l=await fetch(`/api/admin_customers?action=search&keyword=${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:o})}),d=await l.json();if(l.ok&&d.success){const s=[d.data];B&&(B.innerHTML=s.map(a=>`
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
                        `).join(""),B.classList.remove("hidden"))}else B&&(B.innerHTML='<div class="p-3 text-xs text-gray-400 italic text-center">Không tìm thấy khách hàng cũ</div>',B.classList.remove("hidden"))}catch(l){console.error("Search error:",l)}},300)}),B&&B.addEventListener("click",t=>{const o=t.target.closest(".suggestion-item");if(o){const l=document.getElementById("addFullName"),d=document.getElementById("addPhone"),r=document.getElementById("addCsrCode");l&&(l.value=o.getAttribute("data-name")),d&&(d.value=o.getAttribute("data-phone")),r&&(r.value=o.getAttribute("data-csr"));const s=document.getElementById("addDob"),a=document.getElementById("addGender"),u=document.getElementById("addIdCard"),h=document.getElementById("addAddress");s&&(s.value=o.getAttribute("data-dob")||""),a&&(a.value=o.getAttribute("data-gender")||"Khác"),u&&(u.value=o.getAttribute("data-cccd")||""),h&&(h.value=o.getAttribute("data-address")||"");const m=document.getElementById("addAllergy"),y=document.getElementById("addDiet"),i=document.getElementById("addTrekkingPole"),p=document.getElementById("addMedalName");m&&(m.value=o.getAttribute("data-allergy")||""),y&&(y.value=o.getAttribute("data-diet")||""),i&&(i.value=o.getAttribute("data-trekking_pole")||"Không"),p&&(p.value=o.getAttribute("data-medal-name")||""),window._selectedCustomer={fullName:o.getAttribute("data-name"),phone:o.getAttribute("data-phone"),csrCode:o.getAttribute("data-csr"),dob:o.getAttribute("data-dob")||"",gender:o.getAttribute("data-gender")||"",address:o.getAttribute("data-address")||"",id_card:o.getAttribute("data-cccd")||"",allergy:o.getAttribute("data-allergy")||"",diet:o.getAttribute("data-diet")||"",trekking_pole:o.getAttribute("data-trekking_pole")||"",medal_name:o.getAttribute("data-medal-name")||""},P.value=o.getAttribute("data-name"),B.classList.add("hidden");const b=`
                    <div id="loyalty-alert" class="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-600 rounded-lg text-sm flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Nhận diện khách thân thiết: <b>${o.getAttribute("data-csr")}</b>. Hệ thống sẽ kế thừa toàn bộ hồ sơ cũ!
                    </div>`,w=document.getElementById("loyalty-alert");w&&w.remove(),P.parentElement.insertAdjacentHTML("afterend",b)}}),document.addEventListener("click",t=>{!P.contains(t.target)&&B&&!B.contains(t.target)&&B.classList.add("hidden")})}const V=document.getElementById("addTourPrice"),G=document.getElementById("addDiscount"),it=document.getElementById("addTotalPriceDisplay");document.getElementById("addTourName");const lt=()=>{if(!V||!G||!it)return;const n=parseInt(V.value)||0,t=parseInt(G.value)||0,o=n-t;it.textContent=(o>0?o:0).toLocaleString("vi-VN")+"đ"};V&&V.addEventListener("input",lt),G&&G.addEventListener("input",lt);const dt=document.getElementById("searchBtn");dt&&dt.addEventListener("click",n=>{n.preventDefault(),document.getElementById("smartSearch").value||alert("Vui lòng nhập Số Điện Thoại hoặc Mã #CSR")});const O=document.getElementById("bookingForm");O&&O.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.querySelector('button[type="submit"]'),o=t.textContent;t.textContent="Đang lưu hệ thống...",t.disabled=!0;try{const l=document.getElementById("addFullName").value,d=document.getElementById("addPhone").value,r=document.getElementById("addTourName").value,s=document.getElementById("addTourDate").value;let a=null,u=s;if(s&&s.includes("::")){const _=s.split("::");a=parseInt(_[0])||null,u=_[1]}const h=document.getElementById("addDob").value,m=document.getElementById("addGender").value,y=document.getElementById("addIdCard").value,i=document.getElementById("addAddress").value,p=document.getElementById("addSpecial").value,b=document.getElementById("addAllergy").value,w=document.getElementById("addDiet").value,E=document.getElementById("addTrekkingPole").value,e=document.getElementById("addMedalName").value,g=parseInt(document.getElementById("addTourPrice").value)||0,c=parseInt(document.getElementById("addDiscount").value)||0,v=parseInt(document.getElementById("addDepositRequired").value)||1e6,I=document.getElementById("addCsrCode").value||"",T=localStorage.getItem("csr_user");let k=null,L="Admin";if(T){const _=JSON.parse(T);k=_.id,L=_.fullName||_.full_name||"Admin"}const C=document.getElementById("editingBookingId")?document.getElementById("editingBookingId").value:"",x={name:l,phone:d,tour:r,date:u,status:"Chờ cọc",total_price:g-c,discount:c,deposit:0,sale_id:k,sale_name:L,customer_id:I,deposit_required:v,commitments:!0,schedule_id:a,dob:h,gender:m,address:i,id_card:y,special:p,allergy:b,diet:w,trekking_pole:E,medal_name:e},S=d.replace(/[^0-9]/g,"");window._selectedCustomer&&(window._selectedCustomer.phone||"").replace(/[^0-9]/g,"")===S&&(x.dob=x.dob||window._selectedCustomer.dob,x.gender=x.gender&&x.gender!=="Khác"?x.gender:window._selectedCustomer.gender||"Khác",x.address=x.address||window._selectedCustomer.address,x.id_card=x.id_card||window._selectedCustomer.id_card,x.allergy=window._selectedCustomer.allergy,x.diet=window._selectedCustomer.diet,x.trekking_pole=window._selectedCustomer.trekking_pole,x.medal_name=window._selectedCustomer.medal_name),C&&(x.id=C,delete x.status,delete x.deposit,delete x.sale_id,delete x.sale_name);const N=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)});if(N.ok){alert(C?"✅ Đã lưu Cập nhật Đơn hàng!":"✅ Thêm Đơn Hàng Thành Công!"),window.closeModal(),O&&O.reset(),window._selectedCustomer=null;const _=document.getElementById("loyalty-alert");_&&_.remove(),document.getElementById("addTotalPriceDisplay")&&(document.getElementById("addTotalPriceDisplay").textContent="0đ"),typeof $=="function"?$():window.location.reload()}else{const _=await N.json();throw new Error(_.error||"Lỗi tạo Booking!")}}catch(l){alert("❌ "+l.message)}finally{t.textContent=o,t.disabled=!1}});const rt=document.getElementById("editForm");rt&&rt.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.querySelector('button[type="submit"]'),o=t.textContent;t.textContent="Đang lưu cập nhật...",t.disabled=!0;try{const l=document.getElementById("edit-id").value,d=document.getElementById("edit-name").value,r=document.getElementById("edit-phone").value,s=document.getElementById("edit-medal-name").value,a=document.getElementById("edit-tour").value,u=document.getElementById("edit-date").value,h=document.getElementById("edit-dob").value,m=document.getElementById("edit-gender").value,y=document.getElementById("edit-status").value,i=document.getElementById("edit-allergy").value,p=document.getElementById("edit-address").value,b=document.getElementById("edit-diet").value,w=document.getElementById("edit-trekking-pole").value,E=document.getElementById("edit-commitments").checked,e=document.getElementById("edit-special").value,g=document.getElementById("edit-sale");let c,v;if(g&&g.parentElement&&!g.parentElement.classList.contains("hidden")&&(c=g.value||null,v="Website",c)){const S=z.find(N=>String(N.id)===String(c));S&&(v=S.full_name||S.fullName)}const I=parseInt(document.getElementById("edit-total").value)||0,T=parseInt(document.getElementById("edit-discount").value)||0,k=parseInt(document.getElementById("edit-deposit").value)||0,L=parseInt(document.getElementById("edit-deposit-required").value)||1e6,C={id:l,name:d,phone:r,medal_name:s,tour:a,date:u,dob:h,gender:m,status:y,allergy:i,address:p,diet:b,trekking_pole:w,commitments:E,special:e,sale_id:c,sale_name:v,total_price:I-T,discount:T,deposit:k,deposit_required:L},x=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)});if(x.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),(y.includes("Đã cọc")||C.total_price>0&&C.total_price===k)&&at(C),window.closeEditModal(),typeof $=="function"&&$();else{const S=await x.json();throw new Error(S.error||"Gặp sự cố khi Cập nhật API.")}}catch(l){alert("❌ Lỗi Cập nhật: "+l.message)}finally{t.textContent=o,t.disabled=!1}})};export{yt as afterRender,ft as render};
