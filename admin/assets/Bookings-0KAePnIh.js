import{S as nt,H as ot}from"./Header-CvqOcIss.js";const lt=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${nt()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${ot()}
          
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
                  <!-- Smart Search Bar -->
                  <div class="mb-8 p-4 bg-csr-orange/5 border border-csr-orange/20 rounded-lg">
                      <h3 class="text-sm font-medium text-csr-light mb-3 flex items-center gap-2">
                          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                          Tự động điền thông tin khách hàng cũ
                      </h3>
                      <div class="flex gap-4">
                          <input type="text" id="smartSearch" class="input-field bg-gray-100 focus:bg-white flex-1" placeholder="Nhập Số Điện Thoại hoặc Mã ID (#CSR...)">
                          <button id="searchBtn" class="bg-white hover:bg-gray-200 border border-gray-200 text-gray-900 px-4 rounded-lg transition-colors">Tra cứu</button>
                      </div>
                      <p class="text-[11px] text-gray-500 mt-2 italic">* Nếu tìm thấy, toàn bộ thông tin Y tế, CCCD, Ngày sinh sẽ được tự động điền (Auto-fill).</p>
                  </div>

                  <form id="bookingForm" class="space-y-5">
                      <!-- SECTION 1: Định Danh Khách Hàng (BẮT BUỘC) -->
                      <div class="rounded-xl border-2 border-csr-orange/40 bg-orange-50/30 p-5">
                          <div class="flex items-center gap-2 mb-4">
                              <span class="w-7 h-7 rounded-full bg-csr-orange text-white text-xs font-bold flex items-center justify-center">1</span>
                              <span class="font-bold text-gray-900">Định Danh Khách Hàng</span>
                              <span class="text-[10px] bg-csr-orange/20 text-csr-orange px-2 py-0.5 rounded-full font-bold ml-auto">BẮT BUỘC</span>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Họ và Tên *</label>
                                  <input type="text" id="addFullName" class="input-field" required placeholder="Nhập họ và tên">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Số Điện Thoại *</label>
                                  <input type="tel" id="addPhone" class="input-field" required placeholder="0912 345 678">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Mã CSR (Tự Sinh)</label>
                                  <input type="text" id="addCsrCode" class="input-field bg-gray-100 text-csr-orange font-mono" placeholder="#CSR------" disabled>
                              </div>
                          </div>
                      </div>

                      <!-- SECTION 2: Chọn Tour & Khởi Hành (BẮT BUỘC) -->
                      <div class="rounded-xl border-2 border-blue-400/40 bg-blue-50/30 p-5">
                          <div class="flex items-center gap-2 mb-4">
                              <span class="w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">2</span>
                              <span class="font-bold text-gray-900">Chọn Tour & Khởi Hành</span>
                              <span class="text-[10px] bg-blue-500/20 text-blue-600 px-2 py-0.5 rounded-full font-bold ml-auto">BẮT BUỘC</span>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div class="md:col-span-2">
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
                      </div>

                      <!-- SECTION 3: Thông Tin Chi Tiết (TÙY CHỌN) -->
                      <div class="rounded-xl border border-gray-200 bg-white p-5">
                          <div class="flex items-center gap-2 mb-4">
                              <span class="w-7 h-7 rounded-full bg-gray-400 text-white text-xs font-bold flex items-center justify-center">3</span>
                              <span class="font-bold text-gray-900">Thông Tin Chi Tiết</span>
                              <span class="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-bold ml-auto">TÙY CHỌN</span>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày Sinh</label>
                                  <input type="date" id="addDob" class="input-field text-sm">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Giới Tính</label>
                                  <select id="addGender" class="input-field text-sm">
                                      <option value="Khác">Chưa rõ</option>
                                      <option value="Nam">Nam</option>
                                      <option value="Nữ">Nữ</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">CCCD / CMND</label>
                                  <input type="text" id="addIdCard" class="input-field text-sm" placeholder="Số CCCD">
                              </div>
                              <div class="md:col-span-3">
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Địa Chỉ</label>
                                  <input type="text" id="addAddress" class="input-field text-sm" placeholder="Quận/Huyện, Tỉnh/Thành phố">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Chế Độ Ăn</label>
                                  <select id="addDiet" class="input-field text-sm">
                                      <option value="Bình Thường">Bình Thường</option>
                                      <option value="Ăn Chay">Ăn Chay</option>
                                      <option value="Không Ăn Bò">Không Ăn Bò</option>
                                      <option value="Khác">Khác</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Gậy Trekking</label>
                                  <select id="addTrekkingPole" class="input-field text-sm">
                                      <option value="Không">Không mượn</option>
                                      <option value="Có">Có (mượn gậy)</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Dị Ứng / Lưu Ý Y Tế</label>
                                  <input type="text" id="addAllergy" class="input-field text-sm" placeholder="VD: dị ứng hải sản...">
                              </div>
                              <div class="md:col-span-2">
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ghi Chú Thêm (Sale / Yêu Cầu Đặc Biệt)</label>
                                  <textarea id="addNote" rows="1" class="input-field resize-none text-sm" placeholder="VD: Khách chốt qua zalo, giá ưu đãi..."></textarea>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-csr-orange uppercase mb-1.5">Số Tiền Cọc Cần Thu</label>
                                  <input type="number" id="addDepositRequired" class="input-field text-sm font-bold bg-orange-50/50" value="1000000" placeholder="1000000">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-blue-600 uppercase mb-1.5">Tên In Huy Chương</label>
                                  <input type="text" id="addMedalName" class="input-field text-sm font-bold bg-blue-50/50" placeholder="Mặc định ghi Tên Thật">
                              </div>
                          </div>
                      </div>

                      <div class="flex justify-end gap-3 pt-4">
                          <input type="hidden" id="editingBookingId" value="">
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
    `,it=()=>{let I=[],x="consult",D=[],A=[];const tt=async()=>{try{const[n,t]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules")]);D=n.ok?await n.json():[],A=t.ok?await t.json():[],V("addTourName"),V("edit-tour")}catch(n){console.error("Lỗi tải tours/schedules:",n)}},V=n=>{const t=document.getElementById(n);if(!t)return;const s=t.value,i=t.options[0].outerHTML;t.innerHTML=i,D.filter(d=>d.is_visible!==!1).forEach(d=>{const a=document.createElement("option");a.value=d.name,a.textContent=d.name,d.name===s&&(a.selected=!0),t.appendChild(a)})},N=(n,t,s)=>{const i=document.getElementById(n);if(!i)return;if(i.innerHTML='<option value="">-- Chọn Lịch --</option>',!t){i.innerHTML='<option value="">-- Chọn Tour trước --</option>';return}const d=A.filter(a=>a.tour_name===t||t.includes(a.tour_name)||a.tour_name.includes(t));if(d.length===0){i.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}d.sort((a,o)=>new Date(a.start_date)-new Date(o.start_date)).forEach(a=>{const o=parseInt(a.booked_count)||0,r=(a.slots||0)-o,u=new Date(a.start_date),h=a.end_date?new Date(a.end_date):null,p=y=>`${y.getDate().toString().padStart(2,"0")}/${(y.getMonth()+1).toString().padStart(2,"0")}`;let m=p(u);h&&(m+=" - "+p(h)),m+=` (${r>=0?r:0} chỗ trống)`;const l=document.createElement("option");l.value=`${u.getDate().toString().padStart(2,"0")}/${(u.getMonth()+1).toString().padStart(2,"0")}/${u.getFullYear()}`,l.textContent=m,r<=0&&(l.disabled=!0,l.textContent=m.replace("chỗ trống","HẾT CHỖ")),s&&l.value===s&&(l.selected=!0),i.appendChild(l)})},R=document.getElementById("addTourName");R&&R.addEventListener("change",n=>{N("addTourDate",n.target.value)});const P=document.getElementById("edit-tour");P&&P.addEventListener("change",n=>{N("edit-date",n.target.value)}),tt();const S=()=>{const n=document.getElementById("bookingsTableHead"),t=document.getElementById("bookingsTableBody");if(!t||!n)return;const s=x==="upcoming"||x==="completed";s?n.innerHTML=`
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
            `;const i=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",d=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",a=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",o=document.getElementById("filterSale")?document.getElementById("filterSale").value:"",r=document.getElementById("filterStatus")?document.getElementById("filterStatus").value:"";let u=I.filter(e=>{let g=!1;const c=parseInt(e.total_price)>0&&parseInt(e.total_price)===parseInt(e.deposit);return x==="consult"?g=e.status==="Chờ tư vấn":x==="pending"?g=!e.status||e.status==="Chờ cọc":x==="upcoming"?g=(e.status==="Chờ xác nhận cọc"||e.status==="Đã cọc"||e.status==="Đã cọc (Chờ đi)")&&!c:x==="completed"&&(g=c||e.status==="Hoàn thành"||e.status==="Đã đi"),!(!g||d&&e.tour!==d||a&&e.date!==a||o&&String(e.sale_id)!==String(o)||i&&!`${e.name||""} ${e.phone||""} ${e.customer_id||""}`.toLowerCase().includes(i)||r&&e.status!==r)});const h=document.getElementById("statTitle1"),p=document.getElementById("statTitle2"),m=document.getElementById("statTitle3"),l=document.getElementById("statTotalCustomers"),y=document.getElementById("statTotalRevenue"),C=document.getElementById("statTotalCollected");let L=u.length;if(x==="consult"){h&&(h.textContent="Tổng Leads Tư Vấn"),p&&(p.textContent="Chưa Có Sale Nhận"),m&&(m.textContent="Đã Có Sale Nhận");let e=0,g=0;u.forEach(c=>{!c.sale_id||c.sale_id==="null"||!c.sale_name||c.sale_name==="Website"||c.sale_name==="null"?e++:g++}),l&&(l.textContent=L),y&&(y.textContent=e+" Đơn"),C&&(C.textContent=g+" Đơn")}else if(x==="pending"){h&&(h.textContent="Tổng Khách (Chờ Cọc)"),p&&(p.textContent="Khách Chưa Tư Vấn (Mới)"),m&&(m.textContent="Đã Có Sale Giữ Chỗ");let e=0,g=0;u.forEach(c=>{!c.sale_id||c.sale_id==="null"||!c.sale_name||c.sale_name==="Website"||c.sale_name==="null"?e++:g++}),l&&(l.textContent=L),y&&(y.textContent=e+" Đơn"),C&&(C.textContent=g+" Đơn")}else if(x==="upcoming"){h&&(h.textContent="Tổng Số Khách"),p&&(p.textContent="Chưa Xác Nhận Cọc"),m&&(m.textContent="Chờ Thanh Toán Còn Lại");let e=0,g=0;u.forEach(c=>{c.status==="Chờ xác nhận cọc"?e++:parseInt(c.deposit)>0&&parseInt(c.total_price)>parseInt(c.deposit)&&g++}),l&&(l.textContent=L),y&&(y.textContent=e+" Khách"),C&&(C.textContent=g+" Khách")}else{h&&(h.textContent="Khách Sẵn Sàng (Full)"),p&&(p.textContent="Tổng Doanh Thu Tab"),m&&(m.textContent="Thực Thu (Full Tận Nơi)");let e=0,g=0;u.forEach(c=>{e+=parseInt(c.total_price)||0,g+=parseInt(c.deposit)||0}),l&&(l.textContent=L),y&&(y.textContent=e>0?e.toLocaleString("vi-VN")+"đ":"0đ"),C&&(C.textContent=g>0?g.toLocaleString("vi-VN")+"đ":"0đ")}const H=s?8:4;if(!u||u.length===0){let e=x==="consult"?"Chưa có khách hàng tư vấn nào.":x==="pending"?"Chưa có Khách chờ cọc.":x==="upcoming"?"Chưa có Khách nào Đã Cọc.":"Danh sách rỗng.";t.innerHTML=`<tr><td colspan="${H}" class="p-8 text-center text-gray-500">${e}</td></tr>`;return}t.innerHTML=u.map(e=>{const g=x==="upcoming"?"bg-green-50/20 hover:bg-green-50 transition-colors":"hover:bg-gray-100 transition-colors";if(s){const c=parseInt(e.total_price)||0,f=parseInt(e.deposit)||0,b=c-f,w=c>0?c.toLocaleString("vi-VN")+"đ":"Chưa định giá",T=f>0?f.toLocaleString("vi-VN")+"đ":"0đ",v=b>0?b.toLocaleString("vi-VN")+"đ":b===0&&c>0?"Đã thu trọn":"-";let k="";return e.status==="Hoàn thành"||e.status==="Đã đi"?k='<span class="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-xs block w-full text-center">Hoàn thành</span>':e.status==="Chờ xác nhận cọc"?k=`<button class="action-btn confirm-deposit-btn bg-csr-orange text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-[#d65503] w-full" data-id="${e.id}">Xác nhận cọc</button>`:f>0&&b===0?k='<span class="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Hoàn tất phí</span>':k='<span class="bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Đã Cọc</span>',`
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
                    <td class="p-4 align-top text-center">${k}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-gray-700">${w}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-green-600">${T}</td>
                    <td class="p-4 align-top text-right text-sm font-bold text-red-500">${v}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            <button class="action-btn payment-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">Thanh toán</button>
                        </div>
                    </td>
                </tr>
                `}else{const c=e.name?e.name.substring(0,2).toUpperCase():"KH",f=x==="consult",b=!e.sale_id||e.sale_id==="null"||!e.sale_name||e.sale_name==="null";let w="";return f&&b?w=`<button class="action-btn claim-btn bg-csr-orange hover:bg-[#d65503] text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">Nhận khách</button>`:w=`<span class="text-sm text-gray-500">${e.sale_name||"Website"}</span>`,`
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
                        ${f&&e.special?`<div class="text-xs text-blue-500 mt-1 italic">💬 ${e.special}</div>`:""}
                    </td>
                    <td class="p-4 align-top">${w}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            <button class="action-btn process-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${e.id}">Copy link Process</button>
                        </div>
                    </td>
                </tr>
                `}}).join(""),document.querySelectorAll(".claim-btn").forEach(e=>{e.addEventListener("click",async g=>{g.stopPropagation();const c=e.getAttribute("data-id"),f=localStorage.getItem("csr_user");let b=null,w="Admin";if(f){const T=JSON.parse(f);b=T.id,w=T.fullName||T.full_name||"Admin"}e.textContent="Đang xử lý...",e.disabled=!0;try{if((await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,sale_id:b,sale_name:w})})).ok){const v=I.find(k=>k.id==c);v&&(v.sale_id=b,v.sale_name=w),S()}else alert("Lỗi khi nhận khách. Vui lòng thử lại."),e.textContent="Nhận khách",e.disabled=!1}catch(T){console.error("Lỗi nhận khách:",T),e.textContent="Nhận khách",e.disabled=!1}})})},et=()=>{const n=new Set,t=new Set,s=new Map;I.forEach(o=>{o.tour&&n.add(o.tour),o.date&&t.add(o.date),o.sale_id&&o.sale_name&&s.set(o.sale_id,o.sale_name)});const i=document.getElementById("filterTour"),d=document.getElementById("filterDate"),a=document.getElementById("filterSale");if(i){const o=i.value;i.innerHTML='<option value="">Tất cả Tour</option>',[...n].sort().forEach(r=>i.innerHTML+=`<option value="${r}">${r}</option>`),i.value=o}if(d){const o=d.value;d.innerHTML='<option value="">Tất cả Ngày</option>',[...t].sort().forEach(r=>d.innerHTML+=`<option value="${r}">${r}</option>`),d.value=o}if(a){const o=a.value;a.innerHTML='<option value="">Tất cả Sale</option>',a.innerHTML+='<option value="null">Nguồn Website</option>';for(let[r,u]of s)a.innerHTML+=`<option value="${r}">${u}</option>`;a.value=o}},E=async()=>{try{I=await(await fetch("/api/bookings")).json(),et(),S()}catch(n){console.error("Lỗi parse list đơn hàng:",n);const t=document.getElementById("bookingsTableBody");t&&(t.innerHTML='<tr><td colspan="4" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu từ Server.</td></tr>')}};E(),["filterSearch","filterTour","filterDate","filterSale","filterStatus"].forEach(n=>{const t=document.getElementById(n);t&&(n==="filterSearch"?t.addEventListener("input",S):t.addEventListener("change",S))});const q=document.getElementById("exportExcelBtn");q&&q.addEventListener("click",()=>{const n=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",t=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",s=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",i=document.getElementById("filterSale")?document.getElementById("filterSale").value:"";let d=I.filter(l=>{let y=!1;return x==="pending"?y=l.status==="Chờ xác nhận cọc"||parseInt(l.deposit)===0||!l.deposit:x==="upcoming"?y=l.status!=="Chờ xác nhận cọc"&&parseInt(l.deposit)>0:x==="completed"&&(y=l.status==="Hoàn thành"),!(!y||t&&l.tour!==t||s&&l.date!==s||i&&String(l.sale_id)!==String(i)||n&&!`${l.name||""} ${l.phone||""} ${l.customer_id||""}`.toLowerCase().includes(n))});if(d.length===0){alert("Danh sách rỗng. Không có dữ liệu để xuất.");return}const o=[["Mã KH (CRM)","Họ và Tên","Số điện thoại","Tên Tour","Lịch trình","Trạng thái","Nguồn / Sale","Đã cọc","Tổng tiền","Ghi chú"]];d.forEach(l=>{o.push([l.customer_id||"",`"${l.name||""}"`,`="${l.phone||""}"`,`"${l.tour||""}"`,`"${l.date||""}"`,`"${l.status||""}"`,`"${l.sale_name||"Website"}"`,l.deposit||0,l.total_price||0,`"${(l.special||"").replace(/"/g,'""')}"`])});const r="\\uFEFF"+o.map(l=>l.join(",")).join(`
`),u=new Blob([r],{type:"text/csv;charset=utf-8;"}),h=URL.createObjectURL(u),p=document.createElement("a");p.setAttribute("href",h);let m=x==="pending"?"ChoCoc":x==="upcoming"?"SapThamGia":"HoanThanh";p.setAttribute("download",`BaoCao_DonHang_${m}_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(p),p.click(),document.body.removeChild(p)});const O=document.querySelectorAll(".tab-btn");O.forEach(n=>{n.addEventListener("click",t=>{O.forEach(s=>{s.classList.remove("border-csr-orange","text-csr-orange"),s.classList.add("border-transparent","text-gray-500")}),t.target.classList.add("border-csr-orange","text-csr-orange"),t.target.classList.remove("border-transparent","text-gray-500"),x=t.target.getAttribute("data-tab"),S()})});const M=document.getElementById("bookingModal"),_=document.getElementById("bookingModalContent"),K=document.getElementById("detailModal"),z=document.getElementById("detailModalContent"),$=document.getElementById("editModal"),j=document.getElementById("editModalContent"),F=document.getElementById("addBookingBtn");M&&(M.classList.add("duration-200","ease-out"),_.classList.add("duration-300","ease-out")),$&&($.classList.add("duration-200","ease-out"),j.classList.add("duration-300","ease-out")),F&&F.addEventListener("click",()=>{document.getElementById("bookingModalContent").querySelector("h2").innerText="Thêm Khách Hàng (Tạo Đơn)",document.getElementById("submitBookingBtn").innerText="Tạo Phơi Đăng Ký",document.getElementById("editingBookingId").value="",document.getElementById("bookingForm").reset();const n=document.getElementById("loyalty-alert");n&&n.remove(),M.classList.remove("hidden"),setTimeout(()=>{M.classList.add("opacity-100"),_.classList.remove("scale-95","translate-y-4"),_.classList.add("scale-100","translate-y-0")},10)}),window.closeModal=()=>{M&&(M.classList.remove("opacity-100"),_.classList.remove("scale-100","translate-y-0"),_.classList.add("scale-95","translate-y-4"),setTimeout(()=>{M.classList.add("hidden")},200))},window.closeDetailModal=()=>{K&&(K.classList.remove("opacity-100"),z.classList.remove("scale-100","translate-y-0"),z.classList.add("scale-95","translate-y-4"),setTimeout(()=>{K.classList.add("hidden")},200))},window.closeEditModal=()=>{$&&($.classList.remove("opacity-100"),j.classList.remove("scale-100","translate-y-0"),j.classList.add("scale-95","translate-y-4"),setTimeout(()=>{$.classList.add("hidden")},200))},window.openRowActionModal=n=>{document.getElementById("ramName").textContent=n.name||"Khách Hàng Này",document.getElementById("ramPhone").textContent=n.customer_id?`🥇 ${n.customer_id.toUpperCase()}`:n.phone||"";const t=`
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
        `;document.getElementById("ramActions").innerHTML=t,document.getElementById("rowActionModal").classList.remove("hidden")},window.addEventListener("click",n=>{const t=document.getElementById("rowActionModal");t&&n.target===t&&t.classList.add("hidden")}),window.actionView=n=>{document.getElementById("rowActionModal").classList.add("hidden");const t=I.find(a=>a.id==n);if(!t)return;const s=parseInt(t.deposit)>0?`<span class="text-green-600 font-bold">${parseInt(t.deposit).toLocaleString("vi-VN")}đ</span>`:'<span class="text-yellow-600 font-bold">0đ (Chưa Cọc)</span>',i=t.total_price?`${parseInt(t.total_price).toLocaleString("vi-VN")}đ`:"Chưa định giá",d=`
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
                <p><strong class="text-gray-500 block">Tiền Cọc:</strong> ${s}</p>
                <p><strong class="text-gray-500 block">Tổng Tiền:</strong> <span class="font-bold">${i}</span></p>
                <p><strong class="text-gray-500 block">Cam Kết:</strong> <span class="${t.commitments?"text-green-600":"text-red-500"} font-bold">${t.commitments?"Đã đồng ý":"Chưa xác nhận"}</span></p>
                <p class="col-span-2"><strong class="text-gray-500 block">Nhân Viên Sale / Ghi Chú:</strong> <span class="italic text-gray-700 bg-yellow-50 p-2 block mt-1 rounded border border-yellow-100">${t.sale_name||"Website"} - ${t.special||"(Không có nhánh ghi chú)"}</span></p>
            </div>
        `;document.getElementById("detailContentBlock").innerHTML=d,document.getElementById("detailModal").classList.remove("hidden"),setTimeout(()=>{document.getElementById("detailModal").classList.add("opacity-100");const a=document.getElementById("detailModalContent");a&&(a.classList.remove("scale-95","translate-y-4"),a.classList.add("scale-100","translate-y-0"))},10)},window.actionEdit=n=>{document.getElementById("rowActionModal").classList.add("hidden");const t=I.find(o=>o.id==n);if(!t)return;document.getElementById("edit-id").value=n,document.getElementById("edit-name").value=t.name||"",document.getElementById("edit-phone").value=t.phone||"",document.getElementById("edit-medal-name").value=t.medal_name||"",document.getElementById("edit-tour").value=t.tour||"",typeof N=="function"&&N("edit-date",t.tour||"",t.date||"");const s=document.getElementById("edit-date");if(s&&t.date&&s.value!==t.date){const o=document.createElement("option");o.value=t.date,o.textContent=t.date+" (dữ liệu cũ)",o.selected=!0,s.appendChild(o)}document.getElementById("edit-dob").value=t.dob||"",document.getElementById("edit-gender").value=t.gender||"Khác",document.getElementById("edit-status").value=t.status||"Chờ xác nhận cọc",document.getElementById("edit-allergy").value=t.allergy||"",document.getElementById("edit-address").value=t.address||"",document.getElementById("edit-diet").value=t.diet||"Không",document.getElementById("edit-trekking-pole").value=t.trekking_pole||"Không",document.getElementById("edit-commitments").checked=!!t.commitments,document.getElementById("edit-special").value=t.special||"",document.getElementById("edit-total").value=t.total_price||0,document.getElementById("edit-deposit").value=t.deposit||0,(()=>{const o=parseInt(document.getElementById("edit-total").value)||0,r=parseInt(document.getElementById("edit-deposit").value)||0,u=o-r,h=document.getElementById("edit-remaining");h&&(h.textContent=u>0?u.toLocaleString("vi-VN")+"đ":"0đ")})();const d=document.getElementById("editModal"),a=document.getElementById("editModalContent");d&&a&&(d.classList.remove("hidden"),setTimeout(()=>{d.classList.add("opacity-100"),a.classList.remove("scale-95","translate-y-4"),a.classList.add("scale-100","translate-y-0")},10))},window.actionDelete=async n=>{if(document.getElementById("rowActionModal").classList.add("hidden"),confirm("Bạn có chắc chắn muốn xóa Đơn hàng này? Thao tác không thể hoàn tác."))try{if((await fetch(`/api/bookings?id=${n}`,{method:"DELETE"})).ok)alert("✅ Đã xóa đơn hàng thành công!"),E();else throw new Error("Lỗi từ Server")}catch(t){alert("❌ Không thể xóa bảng ghi này: "+t.message)}};const G=()=>{const n=parseInt(document.getElementById("edit-total").value)||0,t=parseInt(document.getElementById("edit-deposit").value)||0,s=n-t,i=document.getElementById("edit-remaining");i&&(i.textContent=s>0?s.toLocaleString("vi-VN")+"đ":"0đ")},U=document.getElementById("edit-total"),J=document.getElementById("edit-deposit");U&&U.addEventListener("input",G),J&&J.addEventListener("input",G),document.querySelectorAll('#bookingModal button[onclick*="hidden"]').forEach(n=>{n.removeAttribute("onclick"),n.addEventListener("click",window.closeModal)});const W=async n=>{try{const s=await(await fetch("/api/admin_customers?action=create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:n.name,phone:n.phone,cccd:n.id_card||"",dob:n.dob||null,gender:n.gender||"Khác",medical_notes:n.allergy||"",dietary:n.diet||""})})).json();s.success&&s.csr_code&&(console.log("✅ Đã đồng bộ CRM thành công:",n.name,s.csr_code),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n.id,customer_id:s.csr_code})})).ok&&(console.log("✅ Đã cập nhật Booking mã CRM"),typeof E=="function"&&E()))}catch(t){console.error("❌ Lỗi đồng bộ CRM:",t)}},Y=document.getElementById("bookingsTableBody");Y&&Y.addEventListener("click",async n=>{const t=n.target.closest(".action-btn");if(!t){const a=n.target.closest(".row-clickable");if(a){const o=a.getAttribute("data-id"),r=I.find(u=>u.id==o);r&&openRowActionModal(r)}return}const s=t.getAttribute("data-id"),i=I.find(a=>a.id==s);if(!i)return;const d=document.getElementById("rowActionModal");if(d&&d.classList.add("hidden"),t.classList.contains("confirm-deposit-btn")){if(confirm("Xác nhận khách hàng này đã chuyển khoản đặt cọc?"))try{if(t.disabled=!0,t.classList.add("opacity-50"),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:s,status:"Đã cọc"})})).ok)alert("✅ Đã xác nhận cọc thành công!"),W(i),typeof E=="function"&&E();else throw new Error("Lỗi cập nhật API")}catch(a){alert("❌ Lỗi: "+a.message)}finally{t.disabled=!1,t.classList.remove("opacity-50")}return}if(t.classList.contains("delete-btn")){window.actionDelete(s);return}else if(t.classList.contains("process-btn")){const r=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/booking/process.html?id=${s}`;navigator.clipboard.writeText(r).then(()=>{alert("📋 Đã sao chép Link Form Điền Thông Tin Cơ Bản! Gửi cho khách qua Zalo nhé:\\n"+r)}).catch(u=>{alert("Lỗi khi Copy Clipboard. Link là: "+r)})}else if(t.classList.contains("send-btn")){const r=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay/${s}`;navigator.clipboard.writeText(r).then(()=>{alert("📋 Đã sao chép Link Thanh Toán Cọc! Gửi cho khách qua Zalo nhé:\\n"+r)}).catch(u=>{alert("Lỗi khi Copy Clipboard. Link là: "+r)})}else if(t.classList.contains("payment-btn")){const r=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay/${s}`;window.open(r,"_blank")}else t.classList.contains("view-btn")?(document.getElementById("rowActionModal").classList.add("hidden"),window.actionView(s)):t.classList.contains("edit-btn")&&window.actionEdit(s)});const X=document.getElementById("searchBtn");X&&X.addEventListener("click",async n=>{n.preventDefault();const t=document.getElementById("smartSearch").value,s=n.target;if(!t){alert("Vui lòng nhập Số Điện Thoại hoặc Mã #CSR");return}s.innerHTML='<svg class="animate-spin h-4 w-4 text-gray-900 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>',s.disabled=!0;try{const d=await fetch("/api/admin_customers?action=search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:t})}),a=await d.json();if(d.ok&&a.success){const o=a.data;if(document.getElementById("addFullName")&&(document.getElementById("addFullName").value=o.full_name||""),document.getElementById("addPhone")&&(document.getElementById("addPhone").value=o.phone||""),document.getElementById("addCsrCode")&&(document.getElementById("addCsrCode").value=o.csr_code||""),document.getElementById("addDob")&&o.dob){let p=o.dob;if(p.includes("/")){const m=p.split("/");p=m[2]+"-"+m[1].padStart(2,"0")+"-"+m[0].padStart(2,"0")}document.getElementById("addDob").value=p}document.getElementById("addGender")&&(document.getElementById("addGender").value=o.gender||"Khác"),document.getElementById("addIdCard")&&(document.getElementById("addIdCard").value=o.cccd||""),document.getElementById("addAllergy")&&(document.getElementById("addAllergy").value=o.medical_notes||""),document.getElementById("addDiet")&&(document.getElementById("addDiet").value=o.dietary||"Bình Thường"),document.getElementById("addAddress")&&(document.getElementById("addAddress").value=o.address||""),document.getElementById("addTrekkingPole")&&(document.getElementById("addTrekkingPole").value=o.trekking_pole||"Không"),document.getElementById("addMedalName")&&(document.getElementById("addMedalName").value=o.medal_name||"");let r="";o.loyalty_tier==="VIP"?r=`<span class="bg-yellow-500/20 text-yellow-500 ml-2 px-2 py-0.5 rounded text-xs">⭐ Khách VIP - Đã đi ${o.tour_count} chuyến</span>`:o.loyalty_tier==="Member"&&(r='<span class="bg-csr-orange/20 text-csr-orange ml-2 px-2 py-0.5 rounded text-xs">✨ Thành viên</span>');const u=`
                    <div id="loyalty-alert" class="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-sm flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Đã tải thông tin Auto-fill thành công! ${r}
                    </div>`,h=document.getElementById("loyalty-alert");h&&h.remove(),document.getElementById("smartSearch").parentElement.insertAdjacentHTML("afterend",u)}else throw new Error(a.message||"Không tìm thấy dữ liệu.")}catch(i){alert("❌ "+i.message),document.getElementById("bookingForm").reset();const d=document.getElementById("loyalty-alert");d&&d.remove()}finally{s.innerHTML="Tra cứu",s.disabled=!1}});const Q=document.getElementById("bookingForm");Q&&Q.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.querySelector('button[type="submit"]'),s=t.textContent;t.textContent="Đang lưu hệ thống...",t.disabled=!0;try{const i=document.getElementById("addFullName").value,d=document.getElementById("addPhone").value,a=document.getElementById("addTourName").value,o=document.getElementById("addTourDate").value,r=document.getElementById("addNote").value,u=document.getElementById("addDob").value||null,h=document.getElementById("addGender").value||"Khác",p=document.getElementById("addIdCard").value||"",m=document.getElementById("addAddress").value||"",l=document.getElementById("addDiet").value||"Bình Thường",y=document.getElementById("addTrekkingPole").value||"Không",C=document.getElementById("addAllergy").value||"",L=document.getElementById("addDepositRequired"),H=L?parseInt(L.value):1e6,e=document.getElementById("addMedalName")?document.getElementById("addMedalName").value:"",g=localStorage.getItem("csr_user");let c=null,f="Admin";if(g){const B=JSON.parse(g);c=B.id,f=B.fullName||B.full_name||"Admin"}const b=document.getElementById("editingBookingId")?document.getElementById("editingBookingId").value:"",w=D.find(B=>B.name===a),T=w&&parseInt(w.price)||0,v={name:i,phone:d,tour:a,date:o,status:"Chờ cọc",total_price:T,deposit:0,sale_id:c,sale_name:f,customer_id:"",dob:u,gender:h,id_card:p,address:m,diet:l,trekking_pole:y,allergy:C,special:r,medal_name:e,deposit_required:H};b&&(v.id=b,delete v.status,delete v.deposit,delete v.total_price,delete v.sale_id,delete v.sale_name,delete v.customer_id);const k=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(k.ok){alert(b?"✅ Đã lưu Cập nhật Đơn hàng!":"✅ Thêm Đơn Hàng Thành Công! (Khách chờ thông tin/cọc)"),window.closeModal();const B=document.getElementById("loyalty-alert");B&&B.remove(),typeof E=="function"?E():window.location.reload()}else{const B=await k.json();throw new Error(B.error||"Lỗi tạo Booking!")}}catch(i){alert("❌ "+i.message)}finally{t.textContent=s,t.disabled=!1}});const Z=document.getElementById("editForm");Z&&Z.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.querySelector('button[type="submit"]'),s=t.textContent;t.textContent="Đang lưu cập nhật...",t.disabled=!0;try{const i=document.getElementById("edit-id").value,d=document.getElementById("edit-name").value,a=document.getElementById("edit-phone").value,o=document.getElementById("edit-medal-name").value,r=document.getElementById("edit-tour").value,u=document.getElementById("edit-date").value,h=document.getElementById("edit-dob").value,p=document.getElementById("edit-gender").value,m=document.getElementById("edit-status").value,l=document.getElementById("edit-allergy").value,y=document.getElementById("edit-address").value,C=document.getElementById("edit-diet").value,L=document.getElementById("edit-trekking-pole").value,H=document.getElementById("edit-commitments").checked,e=document.getElementById("edit-special").value,g=document.getElementById("edit-total").value,c=document.getElementById("edit-deposit").value,f=document.getElementById("edit-deposit-required")?document.getElementById("edit-deposit-required").value:"",b=g?parseInt(g):0,w=c?parseInt(c):0,T=f?parseInt(f):1e6,v={id:i,name:d,phone:a,medal_name:o,tour:r,date:u,dob:h,gender:p,status:m,allergy:l,address:y,diet:C,trekking_pole:L,commitments:H,special:e,total_price:b,deposit:w,deposit_required:T},k=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(k.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),(m.includes("Đã cọc")||b>0&&b===w)&&W(v),window.closeEditModal(),typeof E=="function"&&E();else{const B=await k.json();throw new Error(B.error||"Gặp sự cố khi Cập nhật API.")}}catch(i){alert("❌ Lỗi Cập nhật: "+i.message)}finally{t.textContent=s,t.disabled=!1}})};export{it as afterRender,lt as render};
