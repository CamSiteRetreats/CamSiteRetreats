import{S as pt,H as mt}from"./Header-DjwXxBfR.js";const ft=()=>`
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
                      <input type="hidden" id="edit-customer-id">

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
    `,yt=()=>{let M=[],f="consult",V=[],U=[],G=[];const rt=async()=>{try{const[n,t,o]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules"),fetch("/api/users")]);V=n.ok?await n.json():[],U=t.ok?await t.json():[],G=o.ok?await o.json():[],J("addTourName"),J("edit-tour"),ct("edit-sale")}catch(n){console.error("Lỗi tải tours/schedules:",n)}},ct=n=>{const t=document.getElementById(n);t&&(t.innerHTML='<option value="">-- Website --</option>',G.forEach(o=>{const d=document.createElement("option");d.value=o.id,d.textContent=`${o.full_name||o.fullName} (${o.role})`,t.appendChild(d)}))},J=n=>{const t=document.getElementById(n);if(!t)return;const o=t.value,d=t.options[0].outerHTML;t.innerHTML=d,V.filter(l=>l.is_visible!==!1).forEach(l=>{const a=document.createElement("option");a.value=l.name,a.textContent=l.name,l.name===o&&(a.selected=!0),t.appendChild(a)})},K=(n,t,o)=>{const d=document.getElementById(n);if(!d)return;if(d.innerHTML='<option value="">-- Chọn Lịch --</option>',!t){d.innerHTML='<option value="">-- Chọn Tour trước --</option>';return}const l=U.filter(a=>a.tour_name===t||t.includes(a.tour_name)||a.tour_name.includes(t));if(l.length===0){d.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}l.sort((a,r)=>new Date(a.start_date)-new Date(r.start_date)).forEach(a=>{const r=parseInt(a.booked_count)||0,s=(a.slots||0)-r,g=new Date(a.start_date),y=a.end_date?new Date(a.end_date):null,h=m=>`${m.getDate().toString().padStart(2,"0")}/${(m.getMonth()+1).toString().padStart(2,"0")}`;let b=h(g);y&&(b+=" - "+h(y)),b+=` (${s>=0?s:0} chỗ trống)`;const i=document.createElement("option");i.value=`${g.getDate().toString().padStart(2,"0")}/${(g.getMonth()+1).toString().padStart(2,"0")}/${g.getFullYear()}`,i.textContent=b,s<=0&&(i.disabled=!0,i.textContent=b.replace("chỗ trống","HẾT CHỖ")),o&&i.value===o&&(i.selected=!0),d.appendChild(i)})},W=document.getElementById("addTourName");W&&W.addEventListener("change",n=>{K("addTourDate",n.target.value)});const X=document.getElementById("edit-tour");X&&X.addEventListener("change",n=>{K("edit-date",n.target.value)}),rt();const D=()=>{const n=document.getElementById("bookingsTableHead"),t=document.getElementById("bookingsTableBody");if(!t||!n)return;const o=f==="upcoming"||f==="ready"||f==="completed";o?n.innerHTML=`
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
            `;const d=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",l=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",a=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",r=document.getElementById("filterSale")?document.getElementById("filterSale").value:"",s=document.getElementById("filterStatus")?document.getElementById("filterStatus").value:"";let g=M.filter(e=>{let u=!1;const c=parseInt(e.total_price)>0&&parseInt(e.total_price)===parseInt(e.deposit),x=w=>{if(!w)return!1;try{const p=w.split("/");if(p.length===3){const T=new Date(`${p[2]}-${p[1]}-${p[0]}T00:00:00`),L=new Date;return L.setHours(0,0,0,0),T.getTime()<L.getTime()}else if(w.includes("-")){const T=new Date(`${w}T00:00:00`),L=new Date;return L.setHours(0,0,0,0),T.getTime()<L.getTime()}}catch{}return!1},k=(e.status==="Hoàn thành"||e.status==="Đã đi"||c)&&x(e.date),C=parseInt(e.deposit)||0;return f==="consult"?u=e.status==="Chờ tư vấn"&&!k:f==="pending"?u=C===0&&(!e.status||e.status==="Chờ cọc"||e.status==="Chờ xác nhận cọc")&&!k:f==="upcoming"?u=(C>0||e.status&&e.status.includes("Đã cọc"))&&!c&&e.status!=="Hoàn thành"&&e.status!=="Chờ tư vấn"&&!k:f==="ready"?u=(c||e.status==="Hoàn thành")&&!k:f==="completed"&&(u=k),!(!u||l&&e.tour!==l||a&&O(e.date)!==a||r&&String(e.sale_id)!==String(r)||d&&!`${e.name||""} ${e.phone||""} ${e.customer_id||""}`.toLowerCase().includes(d)||s&&e.status!==s)});const y=document.getElementById("statTitle1"),h=document.getElementById("statTitle2"),b=document.getElementById("statTitle3"),i=document.getElementById("statTotalCustomers"),m=document.getElementById("statTotalRevenue"),v=document.getElementById("statTotalCollected");let B=g.length;if(f==="consult"){y&&(y.textContent="Tổng Leads Tư Vấn"),h&&(h.textContent="Chưa Có Sale Nhận"),b&&(b.textContent="Đã Có Sale Nhận");let e=0,u=0;g.forEach(c=>{!c.sale_id||c.sale_id==="null"||!c.sale_name||c.sale_name==="Website"||c.sale_name==="null"?e++:u++}),i&&(i.textContent=B),m&&(m.textContent=e+" Đơn"),v&&(v.textContent=u+" Đơn")}else if(f==="pending"){y&&(y.textContent="Tổng Khách (Chờ Cọc)"),h&&(h.textContent="Khách Chưa Tư Vấn (Mới)"),b&&(b.textContent="Đã Có Sale Giữ Chỗ");let e=0,u=0;g.forEach(c=>{!c.sale_id||c.sale_id==="null"||!c.sale_name||c.sale_name==="Website"||c.sale_name==="null"?e++:u++}),i&&(i.textContent=B),m&&(m.textContent=e+" Đơn"),v&&(v.textContent=u+" Đơn")}else if(f==="upcoming"){y&&(y.textContent="Tổng Số Khách"),h&&(h.textContent="Chưa Xác Nhận Cọc"),b&&(b.textContent="Chờ Thanh Toán Còn Lại");let e=0,u=0;g.forEach(c=>{c.status==="Chờ xác nhận cọc"?e++:parseInt(c.deposit)>0&&parseInt(c.total_price)>parseInt(c.deposit)&&u++}),i&&(i.textContent=B),m&&(m.textContent=e+" Khách"),v&&(v.textContent=u+" Khách")}else if(f==="ready"){y&&(y.textContent="Khách Sẵn Sàng (Full)"),h&&(h.textContent="Tổng Doanh Thu Tab"),b&&(b.textContent="Thực Thu (Full Tận Nơi)");let e=0,u=0;g.forEach(c=>{e+=parseInt(c.total_price)||0,u+=parseInt(c.deposit)||0}),i&&(i.textContent=B),m&&(m.textContent=e>0?e.toLocaleString("vi-VN")+"đ":"0đ"),v&&(v.textContent=u>0?u.toLocaleString("vi-VN")+"đ":"0đ")}else{y&&(y.textContent="Khách Đã Xong (Lịch Sử)"),h&&(h.textContent="Tổng Doanh Thu Tab"),b&&(b.textContent="Thực Thu (Đã Đóng)");let e=0,u=0;g.forEach(c=>{e+=parseInt(c.total_price)||0,u+=parseInt(c.deposit)||0}),i&&(i.textContent=B),m&&(m.textContent=e>0?e.toLocaleString("vi-VN")+"đ":"0đ"),v&&(v.textContent=u>0?u.toLocaleString("vi-VN")+"đ":"0đ")}const S=o?8:4;if(!g||g.length===0){let e=f==="consult"?"Chưa có khách hàng tư vấn nào.":f==="pending"?"Chưa có Khách chờ cọc.":f==="upcoming"?"Chưa có Khách nào Đã Cọc.":f==="ready"?"Chưa có khách sẵn sàng.":"Danh sách rỗng.";t.innerHTML=`<tr><td colspan="${S}" class="p-8 text-center text-gray-500">${e}</td></tr>`;return}t.innerHTML=g.map(e=>{const u=f==="upcoming"||f==="ready"?"bg-green-50/20 hover:bg-green-50 transition-colors":"hover:bg-gray-100 transition-colors";if(o){const c=parseInt(e.total_price)||0,x=parseInt(e.deposit)||0,k=c-x,C=c>0?c.toLocaleString("vi-VN")+"đ":"Chưa định giá",w=x>0?x.toLocaleString("vi-VN")+"đ":"0đ",p=k>0?k.toLocaleString("vi-VN")+"đ":k===0&&c>0?"Đã thu trọn":"-";let T="";e.status==="Hoàn thành"||e.status==="Đã đi"?T='<span class="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-xs block w-full text-center">Hoàn thành</span>':e.status==="Chờ xác nhận cọc"?T=`<button class="action-btn confirm-deposit-btn bg-csr-orange text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-[#d65503] w-full" data-id="${e.id}">Xác nhận cọc</button>`:x>0&&k===0?T='<span class="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Hoàn tất phí</span>':T='<span class="bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Đã Cọc</span>';let L="";return x>0&&(L=`<a href="/invoice.html?id=${e.id}" target="_blank" class="mt-1.5 block text-center text-[11px] text-blue-600 hover:text-blue-800 hover:underline font-medium" onclick="event.stopPropagation()">🧾 Xem hóa đơn</a>`),`
                <tr class="${u} cursor-pointer row-clickable" data-id="${e.id}">
                    <td class="p-4 align-top">
                        <div class="font-medium text-gray-900">${e.name}</div>
                        ${e.customer_id?`<div class="mt-1 flex items-center bg-orange-50 text-csr-orange text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">${e.customer_id.toUpperCase()}</div>`:`<div class="text-[11px] text-gray-500 mt-0.5">${e.phone}</div>`}
                    </td>
                    <td class="p-4 align-top text-sm">
                        <div class="text-gray-700 font-medium">${e.tour}</div>
                        <div class="text-gray-500 text-xs whitespace-nowrap">${e.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-600">${e.sale_name||"Website"}</td>
                    <td class="p-4 align-top text-center">${T}${L}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-gray-700">${C}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-green-600">${w}</td>
                    <td class="p-4 align-top text-right text-sm font-bold text-red-500">${p}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            <button class="action-btn payment-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">Thanh toán</button>
                        </div>
                    </td>
                </tr>
                `}else{const c=e.name?e.name.substring(0,2).toUpperCase():"KH",x=f==="consult",k=!e.sale_id||e.sale_id==="null"||!e.sale_name||e.sale_name==="null";let C="";x&&k?C=`<button class="action-btn claim-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">Nhận khách</button>`:C=`<span class="text-sm text-gray-500">${e.sale_name||"Website"}</span>`;const w=`
                    <button class="action-btn process-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors mr-1" data-id="${e.id}">📝 Thông Tin</button>
                    ${e.customer_id?`<button class="action-btn payment-btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">💳 Thanh toán</button>`:`<button class="action-btn pay-terms-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">🔗 Cọc Tour</button>`}
                `;return`
                <tr class="${u} cursor-pointer row-clickable" data-id="${e.id}">
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
                        ${x&&e.special?`<div class="text-xs text-blue-500 mt-1 italic">💬 ${e.special}</div>`:""}
                    </td>
                    <td class="p-4 align-top">${C}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            ${w}
                        </div>
                    </td>
                </tr>
    `}}).join(""),document.querySelectorAll(".claim-btn").forEach(e=>{e.addEventListener("click",async u=>{u.stopPropagation();const c=e.getAttribute("data-id"),x=localStorage.getItem("csr_user");let k=null,C="Admin";if(x){const w=JSON.parse(x);k=w.id,C=w.fullName||w.full_name||"Admin"}e.textContent="Đang xử lý...",e.disabled=!0;try{if((await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,sale_id:k,sale_name:C})})).ok){const p=M.find(T=>T.id==c);p&&(p.sale_id=k,p.sale_name=C),D()}else alert("Lỗi khi nhận khách. Vui lòng thử lại."),e.textContent="Nhận khách",e.disabled=!1}catch(w){console.error("Lỗi nhận khách:",w),e.textContent="Nhận khách",e.disabled=!1}})})},ut=()=>{const n=new Set,t=new Set,o=new Map;M.forEach(r=>{if(r.tour&&n.add(r.tour),r.date){const s=O(r.date);s&&t.add(s)}r.sale_id&&r.sale_name&&o.set(r.sale_id,r.sale_name)});const d=document.getElementById("filterTour"),l=document.getElementById("filterDate"),a=document.getElementById("filterSale");if(d){const r=d.value;d.innerHTML='<option value="">Tất cả Tour</option>',[...n].sort().forEach(s=>d.innerHTML+=`<option value="${s}">${s}</option>`),d.value=r}if(l){const r=l.value;l.innerHTML='<option value="">Tất cả Ngày</option>',[...t].sort().forEach(s=>l.innerHTML+=`<option value="${s}">${s}</option>`),l.value=r}if(a){const r=a.value;a.innerHTML='<option value="">Tất cả Sale</option>',a.innerHTML+='<option value="null">Nguồn Website</option>';for(let[s,g]of o)a.innerHTML+=`<option value="${s}">${g}</option>`;a.value=r}};function O(n){if(!n)return"";if(/^\d{1,2}\/\d{1,2}\s*-\s*\d{1,2}\/\d{1,2}$/.test(n))return n.replace(/\s+/g,"");try{if(/^\d{4}-\d{2}-\d{2}$/.test(n)){const[t,o,d]=n.split("-"),l=`${parseInt(d)}/${parseInt(o)}`;return`${l}-${l}`}if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(n)){const[t,o,d]=n.split("/"),l=`${parseInt(t)}/${parseInt(o)}`;return`${l}-${l}`}if(n.includes("-"))return n.split("-").map(o=>{const d=o.trim();if(/\/\d{4}$/.test(d)){const[l,a]=d.split("/");return`${parseInt(l)}/${parseInt(a)}`}return d}).join("-")}catch{console.warn("Date normalization failed for:",n)}return n}const _=async()=>{try{M=await(await fetch("/api/bookings")).json(),ut(),D()}catch(n){console.error("Lỗi parse list đơn hàng:",n);const t=document.getElementById("bookingsTableBody");t&&(t.innerHTML='<tr><td colspan="4" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu từ Server.</td></tr>')}};_(),["filterSearch","filterTour","filterDate","filterSale","filterStatus"].forEach(n=>{const t=document.getElementById(n);t&&(n==="filterSearch"?t.addEventListener("input",D):t.addEventListener("change",D))});const Y=document.getElementById("exportExcelBtn");Y&&Y.addEventListener("click",()=>{const n=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",t=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",o=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",d=document.getElementById("filterSale")?document.getElementById("filterSale").value:"";let l=M.filter(i=>{let m=!1;const v=parseInt(i.total_price)>0&&parseInt(i.total_price)===parseInt(i.deposit),B=e=>{if(!e)return!1;try{const u=e.split("/");if(u.length===3){const c=new Date(`${u[2]}-${u[1]}-${u[0]}T00:00:00`),x=new Date;return x.setHours(0,0,0,0),c.getTime()<x.getTime()}else if(e.includes("-")){const c=new Date(`${e}T00:00:00`),x=new Date;return x.setHours(0,0,0,0),c.getTime()<x.getTime()}}catch{}return!1},S=(i.status==="Hoàn thành"||i.status==="Đã đi"||v)&&B(i.date);return f==="consult"?m=i.status==="Chờ tư vấn"&&!S:f==="pending"?m=(!i.status||i.status==="Chờ cọc")&&!S:f==="upcoming"?m=i.status&&i.status!=="Chờ tư vấn"&&i.status!=="Chờ cọc"&&!v&&i.status!=="Hoàn thành"&&!S:f==="ready"?m=(v||i.status==="Hoàn thành")&&!S:f==="completed"&&(m=S),!(!m||t&&i.tour!==t||o&&O(i.date)!==o||d&&String(i.sale_id)!==String(d)||n&&!`${i.name||""} ${i.phone||""} ${i.customer_id||""} `.toLowerCase().includes(n))});if(l.length===0){alert("Danh sách rỗng. Không có dữ liệu để xuất.");return}const r=[["Mã KH (CRM)","Họ và Tên","Số điện thoại","Tên Tour","Lịch trình","Trạng thái","Nguồn / Sale","Đã cọc","Tổng tiền","Ghi chú"]];l.forEach(i=>{r.push([i.customer_id||"",`"${i.name||""}"`,`= "${i.phone||""}"`,`"${i.tour||""}"`,`"${i.date||""}"`,`"${i.status||""}"`,`"${i.sale_name||"Website"}"`,i.deposit||0,i.total_price||0,`"${(i.special||"").replace(/"/g,'""')}"`])});const s="\\uFEFF"+r.map(i=>i.join(",")).join(`
`),g=new Blob([s],{type:"text/csv;charset=utf-8;"}),y=URL.createObjectURL(g),h=document.createElement("a");h.setAttribute("href",y);let b=f==="pending"?"ChoCoc":f==="upcoming"?"SapThamGia":f==="ready"?"ChoLenXe":"LichSu";h.setAttribute("download",`BaoCao_DonHang_${b}_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(h),h.click(),document.body.removeChild(h)});const Q=document.querySelectorAll(".tab-btn");Q.forEach(n=>{n.addEventListener("click",t=>{Q.forEach(o=>{o.classList.remove("border-csr-orange","text-csr-orange"),o.classList.add("border-transparent","text-gray-500")}),t.target.classList.add("border-csr-orange","text-csr-orange"),t.target.classList.remove("border-transparent","text-gray-500"),f=t.target.getAttribute("data-tab"),D()})});const $=document.getElementById("bookingModal"),N=document.getElementById("bookingModalContent"),z=document.getElementById("detailModal"),Z=document.getElementById("detailModalContent"),A=document.getElementById("editModal"),q=document.getElementById("editModalContent"),tt=document.getElementById("addBookingBtn");$&&($.classList.add("duration-200","ease-out"),N.classList.add("duration-300","ease-out")),A&&(A.classList.add("duration-200","ease-out"),q.classList.add("duration-300","ease-out")),tt&&tt.addEventListener("click",()=>{document.getElementById("bookingModalContent").querySelector("h2").innerText="Thêm Khách Hàng (Tạo Đơn)",document.getElementById("submitBookingBtn").innerText="Tạo Phơi Đăng Ký",document.getElementById("editingBookingId").value="",document.getElementById("bookingForm").reset();const n=document.getElementById("loyalty-alert");n&&n.remove(),$.classList.remove("hidden"),setTimeout(()=>{$.classList.add("opacity-100"),N.classList.remove("scale-95","translate-y-4"),N.classList.add("scale-100","translate-y-0")},10)}),window.closeModal=()=>{$&&($.classList.remove("opacity-100"),N.classList.remove("scale-100","translate-y-0"),N.classList.add("scale-95","translate-y-4"),setTimeout(()=>{$.classList.add("hidden")},200))},window.closeDetailModal=()=>{z&&(z.classList.remove("opacity-100"),Z.classList.remove("scale-100","translate-y-0"),Z.classList.add("scale-95","translate-y-4"),setTimeout(()=>{z.classList.add("hidden")},200))},window.closeEditModal=()=>{A&&(A.classList.remove("opacity-100"),q.classList.remove("scale-100","translate-y-0"),q.classList.add("scale-95","translate-y-4"),setTimeout(()=>{A.classList.add("hidden")},200))},window.openRowActionModal=n=>{document.getElementById("ramName").textContent=n.name||"Khách Hàng Này",document.getElementById("ramPhone").textContent=n.customer_id?`🥇 ${n.customer_id.toUpperCase()}`:n.phone||"";const t=`
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
        `;document.getElementById("ramActions").innerHTML=t,document.getElementById("rowActionModal").classList.remove("hidden")},window.addEventListener("click",n=>{const t=document.getElementById("rowActionModal");t&&n.target===t&&t.classList.add("hidden")}),window.actionView=n=>{document.getElementById("rowActionModal").classList.add("hidden");const t=M.find(a=>a.id==n);if(!t)return;const o=parseInt(t.deposit)>0?`<span class="text-green-600 font-bold">${parseInt(t.deposit).toLocaleString("vi-VN")}đ</span>`:'<span class="text-yellow-600 font-bold">0đ (Chưa Cọc)</span>',d=t.total_price?`${parseInt(t.total_price).toLocaleString("vi-VN")}đ`:"Chưa định giá",l=`
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
                <p><strong class="text-gray-500 block">Tổng Tiền:</strong> <span class="font-bold">${d}</span></p>
                <p><strong class="text-gray-500 block">Cam Kết:</strong> <span class="${t.commitments?"text-green-600":"text-red-500"} font-bold">${t.commitments?"Đã đồng ý":"Chưa xác nhận"}</span></p>
                <p class="col-span-2"><strong class="text-gray-500 block">Nhân Viên Sale / Ghi Chú:</strong> <span class="italic text-gray-700 bg-yellow-50 p-2 block mt-1 rounded border border-yellow-100">${t.sale_name||"Website"} - ${t.special||"(Không có nhánh ghi chú)"}</span></p>
            </div>
        `;document.getElementById("detailContentBlock").innerHTML=l,document.getElementById("detailModal").classList.remove("hidden"),setTimeout(()=>{document.getElementById("detailModal").classList.add("opacity-100");const a=document.getElementById("detailModalContent");a&&(a.classList.remove("scale-95","translate-y-4"),a.classList.add("scale-100","translate-y-0"))},10)},window.actionEdit=async n=>{document.getElementById("rowActionModal").classList.add("hidden");const t=M.find(a=>a.id==n);if(!t)return;document.getElementById("edit-id").value=n,document.getElementById("edit-customer-id").value=t.customer_id||"",document.getElementById("edit-name").value=t.name||"",document.getElementById("edit-phone").value=t.phone||"",document.getElementById("edit-medal-name").value=t.medal_name||"",document.getElementById("edit-tour").value=t.tour||"",typeof K=="function"&&K("edit-date",t.tour||"",t.date||""),(a=>{let r=a.dob||"";if(typeof r=="string"&&r.includes("/")){const s=r.split("/");s.length===3&&(r=`${s[2]}-${s[1].padStart(2,"0")}-${s[0].padStart(2,"0")}`)}document.getElementById("edit-dob").value=r,document.getElementById("edit-gender").value=a.gender||"Khác",document.getElementById("edit-allergy").value=a.allergy||a.medical_notes||"",document.getElementById("edit-address").value=a.address||"",document.getElementById("edit-diet").value=a.diet||a.dietary||"Không",document.getElementById("edit-trekking-pole").value=a.trekking_pole||"Không"})(t),document.getElementById("edit-status").value=t.status||"Chờ xác nhận cọc",document.getElementById("edit-commitments").checked=!!t.commitments,document.getElementById("edit-special").value=t.special||"";try{const a=localStorage.getItem("csr_user");if(a&&JSON.parse(a).role==="admin"){const s=document.getElementById("edit-sale-container");s&&s.classList.remove("hidden");const g=document.getElementById("edit-sale");g&&(g.value=t.sale_id||"")}}catch{}if((!t.dob||!t.address||!t.gender||t.gender==="Khác")&&(t.customer_id||t.phone))try{const a=t.customer_id||t.phone,r=await fetch(`/api/admin_customers?action=search&keyword=${encodeURIComponent(a)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:a})}),s=await r.json();if(r.ok&&s.success){const g=s.data,y=document.getElementById("edit-dob"),h=document.getElementById("edit-address"),b=document.getElementById("edit-allergy"),i=document.getElementById("edit-diet"),m=document.getElementById("edit-gender"),v=document.getElementById("edit-medal-name");y&&!y.value&&(y.value=g.dob||""),h&&!h.value&&(h.value=g.address||""),b&&!b.value&&(b.value=g.medical_notes||""),i&&(i.value==="Không"||!i.value)&&(i.value=g.dietary||"Không"),m&&(m.value==="Khác"||!m.value)&&(m.value=g.gender||"Khác"),v&&!v.value&&(v.value=g.medal_name||"")}}catch(a){console.error("Pull CRM error:",a)}document.getElementById("edit-total").value=(parseInt(t.total_price)||0)+(parseInt(t.discount)||0),document.getElementById("edit-discount").value=t.discount||0,document.getElementById("edit-deposit").value=t.deposit||0,document.getElementById("edit-deposit-required").value=t.deposit_required||1e6,window.updateEditRemaining();const d=document.getElementById("editModal"),l=document.getElementById("editModalContent");d&&l&&(d.classList.remove("hidden"),setTimeout(()=>{d.classList.add("opacity-100"),l.classList.remove("scale-95","translate-y-4"),l.classList.add("scale-100","translate-y-0")},10))},window.actionDelete=async n=>{if(document.getElementById("rowActionModal").classList.add("hidden"),confirm("Bạn có chắc chắn muốn xóa Đơn hàng này? Thao tác không thể hoàn tác."))try{if((await fetch(`/api/bookings?id=${n}`,{method:"DELETE"})).ok)alert("✅ Đã xóa đơn hàng thành công!"),_();else throw new Error("Lỗi từ Server")}catch(t){alert("❌ Không thể xóa bảng ghi này: "+t.message)}},window.updateEditRemaining=()=>{const n=parseInt(document.getElementById("edit-total").value)||0,t=parseInt(document.getElementById("edit-discount").value)||0,o=parseInt(document.getElementById("edit-deposit").value)||0,l=n-t-o,a=document.getElementById("edit-remaining");a&&(a.textContent=l>0?l.toLocaleString("vi-VN")+"đ":"0đ")};const et=document.getElementById("edit-total"),nt=document.getElementById("edit-deposit");et&&et.addEventListener("input",window.updateEditRemaining),nt&&nt.addEventListener("input",window.updateEditRemaining),document.querySelectorAll('#bookingModal button[onclick*="hidden"]').forEach(n=>{n.removeAttribute("onclick"),n.addEventListener("click",window.closeModal)});const ot=async n=>{try{const o=await(await fetch("/api/admin_customers?action=create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:n.name,phone:n.phone,cccd:n.id_card||"",dob:n.dob||null,gender:n.gender||"Khác",medical_notes:n.allergy||"",dietary:n.diet||""})})).json();o.success&&o.csr_code&&(console.log("✅ Đã đồng bộ CRM thành công:",n.name,o.csr_code),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n.id,customer_id:o.csr_code})})).ok&&(console.log("✅ Đã cập nhật Booking mã CRM"),typeof _=="function"&&_()))}catch(t){console.error("❌ Lỗi đồng bộ CRM:",t)}},at=document.getElementById("bookingsTableBody");at&&at.addEventListener("click",async n=>{const t=n.target.closest(".action-btn");if(!t){const a=n.target.closest(".row-clickable");if(a){const r=a.getAttribute("data-id"),s=M.find(g=>g.id==r);s&&openRowActionModal(s)}return}const o=t.getAttribute("data-id"),d=M.find(a=>a.id==o);if(!d)return;const l=document.getElementById("rowActionModal");if(l&&l.classList.add("hidden"),t.classList.contains("confirm-deposit-btn")){if(confirm("Xác nhận khách hàng này đã chuyển khoản đặt cọc?"))try{if(t.disabled=!0,t.classList.add("opacity-50"),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o,status:"Đã cọc"})})).ok)alert("✅ Đã xác nhận cọc thành công!"),ot(d),typeof _=="function"&&_();else throw new Error("Lỗi cập nhật API")}catch(a){alert("❌ Lỗi: "+a.message)}finally{t.disabled=!1,t.classList.remove("opacity-50")}return}if(t.classList.contains("delete-btn")){window.actionDelete(o);return}else if(t.classList.contains("process-btn")){const s=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/booking/process.html?id=${o}`;navigator.clipboard.writeText(s).then(()=>{alert("📋 Đã sao chép Link Điền Thông Tin!\\nGửi cho khách: "+s)}).catch(g=>{alert("Lỗi khi Copy Clipboard. Link là: "+s)})}else if(t.classList.contains("pay-terms-btn")){const s=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay-terms.html?id=${o}`;navigator.clipboard.writeText(s).then(()=>{alert("📋 Đã sao chép Link Cọc Tour!\\nGửi cho khách: "+s)}).catch(g=>{alert("Lỗi khi Copy Clipboard. Link là: "+s)})}else if(t.classList.contains("send-btn")){const s=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay/${o}`;navigator.clipboard.writeText(s).then(()=>{alert("📋 Đã sao chép Link Thanh Toán Cọc! Gửi cho khách qua Zalo nhé:\\n"+s)}).catch(g=>{alert("Lỗi khi Copy Clipboard. Link là: "+s)})}else if(t.classList.contains("payment-btn")){const s=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay/${o}`;window.open(s,"_blank")}else t.classList.contains("view-btn")?(document.getElementById("rowActionModal").classList.add("hidden"),window.actionView(o)):t.classList.contains("edit-btn")&&window.actionEdit(o)});const j=document.getElementById("smartSearch"),E=document.getElementById("searchSuggestions");if(j){let n;j.addEventListener("input",t=>{const o=t.target.value.toLowerCase().trim();if(clearTimeout(n),o.length<2){E&&E.classList.add("hidden");return}n=setTimeout(async()=>{try{const d=await fetch(`/api/admin_customers?action=search&keyword=${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:o})}),l=await d.json();if(d.ok&&l.success){const r=[l.data];E&&(E.innerHTML=r.map(s=>`
                            <div class="suggestion-item p-3 hover:bg-orange-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors" 
                                 data-name="${s.full_name}" 
                                 data-phone="${s.phone}" 
                                 data-csr="${s.csr_code||""}"
                                 data-dob="${s.dob||""}"
                                 data-gender="${s.gender||""}"
                                 data-address="${s.address||""}"
                                 data-cccd="${s.cccd||""}"
                                 data-allergy="${s.medical_notes||""}"
                                 data-diet="${s.dietary||""}"
                                 data-trekking_pole="${s.trekking_pole||""}"
                                 data-medal-name="${s.medal_name||""}">
                                <div class="font-bold text-gray-900 text-sm">${s.full_name}</div>
                                <div class="flex justify-between items-center mt-1">
                                    <span class="text-xs text-gray-500">${s.phone}</span>
                                    ${s.csr_code?`<span class="bg-orange-100 text-csr-orange text-[10px] font-bold px-2 py-0.5 rounded">${s.csr_code}</span>`:""}
                                </div>
                            </div>
                        `).join(""),E.classList.remove("hidden"))}else E&&(E.innerHTML='<div class="p-3 text-xs text-gray-400 italic text-center">Không tìm thấy khách hàng cũ</div>',E.classList.remove("hidden"))}catch(d){console.error("Search error:",d)}},300)}),E&&E.addEventListener("click",t=>{const o=t.target.closest(".suggestion-item");if(o){const d=document.getElementById("addFullName"),l=document.getElementById("addPhone"),a=document.getElementById("addCsrCode");d&&(d.value=o.getAttribute("data-name")),l&&(l.value=o.getAttribute("data-phone")),a&&(a.value=o.getAttribute("data-csr"));const r=document.getElementById("addDob"),s=document.getElementById("addGender"),g=document.getElementById("addIdCard"),y=document.getElementById("addAddress");r&&(r.value=o.getAttribute("data-dob")||""),s&&(s.value=o.getAttribute("data-gender")||"Khác"),g&&(g.value=o.getAttribute("data-cccd")||""),y&&(y.value=o.getAttribute("data-address")||"");const h=document.getElementById("addAllergy"),b=document.getElementById("addDiet"),i=document.getElementById("addTrekkingPole"),m=document.getElementById("addMedalName");h&&(h.value=o.getAttribute("data-allergy")||""),b&&(b.value=o.getAttribute("data-diet")||""),i&&(i.value=o.getAttribute("data-trekking_pole")||"Không"),m&&(m.value=o.getAttribute("data-medal-name")||""),window._selectedCustomer={fullName:o.getAttribute("data-name"),phone:o.getAttribute("data-phone"),csrCode:o.getAttribute("data-csr"),dob:o.getAttribute("data-dob")||"",gender:o.getAttribute("data-gender")||"",address:o.getAttribute("data-address")||"",id_card:o.getAttribute("data-cccd")||"",allergy:o.getAttribute("data-allergy")||"",diet:o.getAttribute("data-diet")||"",trekking_pole:o.getAttribute("data-trekking_pole")||"",medal_name:o.getAttribute("data-medal-name")||""},j.value=o.getAttribute("data-name"),E.classList.add("hidden");const v=`
                    <div id="loyalty-alert" class="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-600 rounded-lg text-sm flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Nhận diện khách thân thiết: <b>${o.getAttribute("data-csr")}</b>. Hệ thống sẽ kế thừa toàn bộ hồ sơ cũ!
                    </div>`,B=document.getElementById("loyalty-alert");B&&B.remove(),j.parentElement.insertAdjacentHTML("afterend",v)}}),document.addEventListener("click",t=>{!j.contains(t.target)&&E&&!E.contains(t.target)&&E.classList.add("hidden")})}const H=document.getElementById("addTourPrice"),P=document.getElementById("addDiscount"),st=document.getElementById("addTotalPriceDisplay"),it=document.getElementById("addTourName"),F=()=>{if(!H||!P||!st)return;const n=parseInt(H.value)||0,t=parseInt(P.value)||0,o=n-t;st.textContent=(o>0?o:0).toLocaleString("vi-VN")+"đ"};H&&H.addEventListener("input",F),P&&P.addEventListener("input",F),it&&it.addEventListener("change",n=>{const t=n.target.value,o=V.find(d=>d.name===t);o&&H&&(H.value=o.price||0,F())});const dt=document.getElementById("searchBtn");dt&&dt.addEventListener("click",n=>{n.preventDefault(),document.getElementById("smartSearch").value||alert("Vui lòng nhập Số Điện Thoại hoặc Mã #CSR")});const R=document.getElementById("bookingForm");R&&R.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.querySelector('button[type="submit"]'),o=t.textContent;t.textContent="Đang lưu hệ thống...",t.disabled=!0;try{const d=document.getElementById("addFullName").value,l=document.getElementById("addPhone").value,a=document.getElementById("addTourName").value,r=document.getElementById("addTourDate").value,s=document.getElementById("addDob").value,g=document.getElementById("addGender").value,y=document.getElementById("addIdCard").value,h=document.getElementById("addAddress").value,b=document.getElementById("addSpecial").value,i=document.getElementById("addAllergy").value,m=document.getElementById("addDiet").value,v=document.getElementById("addTrekkingPole").value,B=document.getElementById("addMedalName").value,S=parseInt(document.getElementById("addTourPrice").value)||0,e=parseInt(document.getElementById("addDiscount").value)||0,u=parseInt(document.getElementById("addDepositRequired").value)||1e6,c=document.getElementById("addCsrCode").value||"",x=localStorage.getItem("csr_user");let k=null,C="Admin";if(x){const I=JSON.parse(x);k=I.id,C=I.fullName||I.full_name||"Admin"}const w=document.getElementById("editingBookingId")?document.getElementById("editingBookingId").value:"",p={name:d,phone:l,tour:a,date:r,status:"Chờ cọc",total_price:S-e,discount:e,deposit:0,sale_id:k,sale_name:C,customer_id:c,deposit_required:u,commitments:!0,dob:s,gender:g,address:h,id_card:y,special:b,allergy:i,diet:m,trekking_pole:v,medal_name:B},T=l.replace(/[^0-9]/g,"");window._selectedCustomer&&(window._selectedCustomer.phone||"").replace(/[^0-9]/g,"")===T&&(p.dob=p.dob||window._selectedCustomer.dob,p.gender=p.gender&&p.gender!=="Khác"?p.gender:window._selectedCustomer.gender||"Khác",p.address=p.address||window._selectedCustomer.address,p.id_card=p.id_card||window._selectedCustomer.id_card,p.allergy=window._selectedCustomer.allergy,p.diet=window._selectedCustomer.diet,p.trekking_pole=window._selectedCustomer.trekking_pole,p.medal_name=window._selectedCustomer.medal_name),w&&(p.id=w,p.action="update",delete p.status,delete p.deposit,delete p.sale_id,delete p.sale_name);const L=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});if(L.ok){alert(w?"✅ Đã lưu Cập nhật Đơn hàng!":"✅ Thêm Đơn Hàng Thành Công!"),window.closeModal(),R&&R.reset(),window._selectedCustomer=null;const I=document.getElementById("loyalty-alert");I&&I.remove(),document.getElementById("addTotalPriceDisplay")&&(document.getElementById("addTotalPriceDisplay").textContent="0đ"),typeof _=="function"?_():window.location.reload()}else{const I=await L.json();throw new Error(I.error||"Lỗi tạo Booking!")}}catch(d){alert("❌ "+d.message)}finally{t.textContent=o,t.disabled=!1}});const lt=document.getElementById("editForm");lt&&lt.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.querySelector('button[type="submit"]'),o=t.textContent;t.textContent="Đang lưu cập nhật...",t.disabled=!0;try{const d=document.getElementById("edit-id").value,l=document.getElementById("edit-name").value,a=document.getElementById("edit-phone").value,r=document.getElementById("edit-medal-name").value,s=document.getElementById("edit-tour").value,g=document.getElementById("edit-date").value,y=document.getElementById("edit-dob").value,h=document.getElementById("edit-gender").value,b=document.getElementById("edit-status").value,i=document.getElementById("edit-allergy").value,m=document.getElementById("edit-address").value,v=document.getElementById("edit-diet").value,B=document.getElementById("edit-trekking-pole").value,S=document.getElementById("edit-commitments").checked,e=document.getElementById("edit-special").value,u=document.getElementById("edit-sale");let c,x;if(u&&u.parentElement&&!u.parentElement.classList.contains("hidden")&&(c=u.value||null,x="Website",c)){const I=G.find(gt=>String(gt.id)===String(c));I&&(x=I.full_name||I.fullName)}const k=parseInt(document.getElementById("edit-total").value)||0,C=parseInt(document.getElementById("edit-discount").value)||0,w=parseInt(document.getElementById("edit-deposit").value)||0,p=parseInt(document.getElementById("edit-deposit-required").value)||1e6,T={id:d,action:"update",customer_id:document.getElementById("edit-customer-id").value||null,name:l,phone:a,medal_name:r,tour:s,date:g,dob:y,gender:h,status:b,allergy:i,address:m,diet:v,trekking_pole:B,commitments:S,special:e,sale_id:c,sale_name:x,total_price:k-C,discount:C,deposit:w,deposit_required:p},L=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)});if(L.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),(b.includes("Đã cọc")||T.total_price>0&&T.total_price===w)&&ot(T),window.closeEditModal(),typeof _=="function"&&_();else{const I=await L.json();throw new Error(I.error||"Gặp sự cố khi Cập nhật API.")}}catch(d){alert("❌ Lỗi Cập nhật: "+d.message)}finally{t.textContent=o,t.disabled=!1}})};export{yt as afterRender,ft as render};
