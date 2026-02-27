import{S as tt,H as et}from"./Header-CvqOcIss.js";const at=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${tt()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${et()}
          
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
                          <button data-tab="pending" class="tab-btn border-csr-orange text-csr-orange whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
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
                                  <label class="block text-xs font-bold text-csr-orange uppercase mb-1.5">Tên In Huy Chương</label>
                                  <input type="text" id="addMedalName" class="input-field text-sm font-bold bg-orange-50/50" placeholder="Mặc định ghi Tên Thật">
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

                      <div class="grid grid-cols-1 gap-5 pt-2">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ghi Chú Đơn Hàng (Sale Note)</label>
                              <input type="text" id="edit-special" class="input-field bg-gray-50 text-sm text-blue-600 font-medium">
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
    `,st=()=>{let C=[],b="pending",$=[],K=[];const Q=async()=>{try{const[e,t]=await Promise.all([fetch("/api/tours"),fetch("/api/schedules")]);$=e.ok?await e.json():[],K=t.ok?await t.json():[],j("addTourName"),j("edit-tour")}catch(e){console.error("Lỗi tải tours/schedules:",e)}},j=e=>{const t=document.getElementById(e);if(!t)return;const s=t.value,i=t.options[0].outerHTML;t.innerHTML=i,$.filter(r=>r.is_visible!==!1).forEach(r=>{const a=document.createElement("option");a.value=r.name,a.textContent=r.name,r.name===s&&(a.selected=!0),t.appendChild(a)})},_=(e,t,s)=>{const i=document.getElementById(e);if(!i)return;if(i.innerHTML='<option value="">-- Chọn Lịch --</option>',!t){i.innerHTML='<option value="">-- Chọn Tour trước --</option>';return}const r=K.filter(a=>a.tour_name===t||t.includes(a.tour_name)||a.tour_name.includes(t));if(r.length===0){i.innerHTML='<option value="">Chưa có lịch cho tour này</option>';return}r.sort((a,o)=>new Date(a.start_date)-new Date(o.start_date)).forEach(a=>{const o=parseInt(a.booked_count)||0,l=(a.slots||0)-o,g=new Date(a.start_date),h=a.end_date?new Date(a.end_date):null,u=x=>`${x.getDate().toString().padStart(2,"0")}/${(x.getMonth()+1).toString().padStart(2,"0")}`;let p=u(g);h&&(p+=" - "+u(h)),p+=` (${l>=0?l:0} chỗ trống)`;const d=document.createElement("option");d.value=`${g.getDate().toString().padStart(2,"0")}/${(g.getMonth()+1).toString().padStart(2,"0")}/${g.getFullYear()}`,d.textContent=p,l<=0&&(d.disabled=!0,d.textContent=p.replace("chỗ trống","HẾT CHỖ")),s&&d.value===s&&(d.selected=!0),i.appendChild(d)})},A=document.getElementById("addTourName");A&&A.addEventListener("change",e=>{_("addTourDate",e.target.value)});const V=document.getElementById("edit-tour");V&&V.addEventListener("change",e=>{_("edit-date",e.target.value)}),Q();const H=()=>{const e=document.getElementById("bookingsTableHead"),t=document.getElementById("bookingsTableBody");if(!t||!e)return;const s=b==="upcoming"||b==="completed";s?e.innerHTML=`
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
            `;const i=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",r=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",a=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",o=document.getElementById("filterSale")?document.getElementById("filterSale").value:"";let l=C.filter(n=>{let m=!1;const c=parseInt(n.total_price)>0&&parseInt(n.total_price)===parseInt(n.deposit);return b==="pending"?m=!n.status||n.status==="Chờ cọc":b==="upcoming"?m=(n.status==="Chờ xác nhận cọc"||n.status==="Đã cọc"||n.status==="Đã cọc (Chờ đi)")&&!c:b==="completed"&&(m=c||n.status==="Hoàn thành"||n.status==="Đã đi"),!(!m||r&&n.tour!==r||a&&n.date!==a||o&&String(n.sale_id)!==String(o)||i&&!`${n.name||""} ${n.phone||""} ${n.customer_id||""}`.toLowerCase().includes(i))});const g=document.getElementById("statTitle1"),h=document.getElementById("statTitle2"),u=document.getElementById("statTitle3"),p=document.getElementById("statTotalCustomers"),d=document.getElementById("statTotalRevenue"),x=document.getElementById("statTotalCollected");let T=l.length;if(b==="pending"){g&&(g.textContent="Tổng Khách (Chờ Cọc)"),h&&(h.textContent="Khách Chưa Tư Vấn (Mới)"),u&&(u.textContent="Đã Có Sale Giữ Chỗ");let n=0,m=0;l.forEach(c=>{!c.sale_id||c.sale_id==="null"||!c.sale_name||c.sale_name==="Website"||c.sale_name==="null"?n++:m++}),p&&(p.textContent=T),d&&(d.textContent=n+" Đơn"),x&&(x.textContent=m+" Đơn")}else if(b==="upcoming"){g&&(g.textContent="Tổng Số Khách"),h&&(h.textContent="Chưa Xác Nhận Cọc"),u&&(u.textContent="Chờ Thanh Toán Còn Lại");let n=0,m=0;l.forEach(c=>{c.status==="Chờ xác nhận cọc"?n++:parseInt(c.deposit)>0&&parseInt(c.total_price)>parseInt(c.deposit)&&m++}),p&&(p.textContent=T),d&&(d.textContent=n+" Khách"),x&&(x.textContent=m+" Khách")}else{g&&(g.textContent="Khách Sẵn Sàng (Full)"),h&&(h.textContent="Tổng Doanh Thu Tab"),u&&(u.textContent="Thực Thu (Full Tận Nơi)");let n=0,m=0;l.forEach(c=>{n+=parseInt(c.total_price)||0,m+=parseInt(c.deposit)||0}),p&&(p.textContent=T),d&&(d.textContent=n>0?n.toLocaleString("vi-VN")+"đ":"0đ"),x&&(x.textContent=m>0?m.toLocaleString("vi-VN")+"đ":"0đ")}const S=s?8:4;if(!l||l.length===0){let n=b==="pending"?"Chưa có Khách chờ cọc.":b==="upcoming"?"Chưa có Khách nào Đã Cọc.":"Danh sách rỗng.";t.innerHTML=`<tr><td colspan="${S}" class="p-8 text-center text-gray-500">${n}</td></tr>`;return}t.innerHTML=l.map(n=>{const m=b==="upcoming"?"bg-green-50/20 hover:bg-green-50 transition-colors":"hover:bg-gray-100 transition-colors";if(s){const c=parseInt(n.total_price)||0,v=parseInt(n.deposit)||0,w=c-v,I=c>0?c.toLocaleString("vi-VN")+"đ":"Chưa định giá",f=v>0?v.toLocaleString("vi-VN")+"đ":"0đ",E=w>0?w.toLocaleString("vi-VN")+"đ":w===0&&c>0?"Đã thu trọn":"-";let y="";return n.status==="Hoàn thành"||n.status==="Đã đi"?y='<span class="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-xs block w-full text-center">Hoàn thành</span>':n.status==="Chờ xác nhận cọc"?y=`<button class="action-btn confirm-deposit-btn bg-csr-orange text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-[#d65503] w-full" data-id="${n.id}">Xác nhận cọc</button>`:v>0&&w===0?y='<span class="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Hoàn tất phí</span>':y='<span class="bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Đã Cọc</span>',`
                <tr class="${m} cursor-pointer row-clickable" data-id="${n.id}">
                    <td class="p-4 align-top">
                        <div class="font-medium text-gray-900">${n.name}</div>
                        ${n.customer_id?`<div class="mt-1 flex items-center bg-orange-50 text-csr-orange text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">${n.customer_id.toUpperCase()}</div>`:`<div class="text-[11px] text-gray-500 mt-0.5">${n.phone}</div>`}
                    </td>
                    <td class="p-4 align-top text-sm">
                        <div class="text-gray-700 font-medium">${n.tour}</div>
                        <div class="text-gray-500 text-xs whitespace-nowrap">${n.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-600">${n.sale_name||"Website"}</td>
                    <td class="p-4 align-top text-center">${y}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-gray-700">${I}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-green-600">${f}</td>
                    <td class="p-4 align-top text-right text-sm font-bold text-red-500">${E}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            <button class="action-btn payment-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${n.id}">Thanh toán</button>
                        </div>
                    </td>
                </tr>
                `}else{const c=n.name?n.name.substring(0,2).toUpperCase():"KH";return`
                <tr class="${m} cursor-pointer row-clickable" data-id="${n.id}">
                    <td class="p-4 align-top">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-csr-orange/20 text-csr-orange flex items-center justify-center font-bold">${c}</div>
                            <div>
                                <div class="font-medium text-gray-900">${n.name}</div>
                                ${n.customer_id?`<div class="mt-1 flex items-center bg-orange-50 text-csr-orange text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">${n.customer_id.toUpperCase()}</div>`:`<div class="text-[11px] text-gray-500 mt-0.5">${n.phone}</div>`}
                            </div>
                        </div>
                    </td>
                    <td class="p-4 align-top">
                        <div class="text-sm text-gray-600">${n.tour}</div>
                        <div class="text-xs text-gray-500 mt-1">Lịch: ${n.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-500">${n.sale_name||"Website"}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            <button class="action-btn process-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${n.id}">Copy link Process</button>
                        </div>
                    </td>
                </tr>
                `}}).join("")},Z=()=>{const e=new Set,t=new Set,s=new Map;C.forEach(o=>{o.tour&&e.add(o.tour),o.date&&t.add(o.date),o.sale_id&&o.sale_name&&s.set(o.sale_id,o.sale_name)});const i=document.getElementById("filterTour"),r=document.getElementById("filterDate"),a=document.getElementById("filterSale");if(i){const o=i.value;i.innerHTML='<option value="">Tất cả Tour</option>',[...e].sort().forEach(l=>i.innerHTML+=`<option value="${l}">${l}</option>`),i.value=o}if(r){const o=r.value;r.innerHTML='<option value="">Tất cả Ngày</option>',[...t].sort().forEach(l=>r.innerHTML+=`<option value="${l}">${l}</option>`),r.value=o}if(a){const o=a.value;a.innerHTML='<option value="">Tất cả Sale</option>',a.innerHTML+='<option value="null">Nguồn Website</option>';for(let[l,g]of s)a.innerHTML+=`<option value="${l}">${g}</option>`;a.value=o}},k=async()=>{try{C=await(await fetch("/api/bookings")).json(),Z(),H()}catch(e){console.error("Lỗi parse list đơn hàng:",e);const t=document.getElementById("bookingsTableBody");t&&(t.innerHTML='<tr><td colspan="4" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu từ Server.</td></tr>')}};k(),["filterSearch","filterTour","filterDate","filterSale"].forEach(e=>{const t=document.getElementById(e);t&&(e==="filterSearch"?t.addEventListener("input",H):t.addEventListener("change",H))});const P=document.getElementById("exportExcelBtn");P&&P.addEventListener("click",()=>{const e=document.getElementById("filterSearch")?document.getElementById("filterSearch").value.toLowerCase():"",t=document.getElementById("filterTour")?document.getElementById("filterTour").value:"",s=document.getElementById("filterDate")?document.getElementById("filterDate").value:"",i=document.getElementById("filterSale")?document.getElementById("filterSale").value:"";let r=C.filter(d=>{let x=!1;return b==="pending"?x=d.status==="Chờ xác nhận cọc"||parseInt(d.deposit)===0||!d.deposit:b==="upcoming"?x=d.status!=="Chờ xác nhận cọc"&&parseInt(d.deposit)>0:b==="completed"&&(x=d.status==="Hoàn thành"),!(!x||t&&d.tour!==t||s&&d.date!==s||i&&String(d.sale_id)!==String(i)||e&&!`${d.name||""} ${d.phone||""} ${d.customer_id||""}`.toLowerCase().includes(e))});if(r.length===0){alert("Danh sách rỗng. Không có dữ liệu để xuất.");return}const o=[["Mã KH (CRM)","Họ và Tên","Số điện thoại","Tên Tour","Lịch trình","Trạng thái","Nguồn / Sale","Đã cọc","Tổng tiền","Ghi chú"]];r.forEach(d=>{o.push([d.customer_id||"",`"${d.name||""}"`,`="${d.phone||""}"`,`"${d.tour||""}"`,`"${d.date||""}"`,`"${d.status||""}"`,`"${d.sale_name||"Website"}"`,d.deposit||0,d.total_price||0,`"${(d.special||"").replace(/"/g,'""')}"`])});const l="\\uFEFF"+o.map(d=>d.join(",")).join(`
`),g=new Blob([l],{type:"text/csv;charset=utf-8;"}),h=URL.createObjectURL(g),u=document.createElement("a");u.setAttribute("href",h);let p=b==="pending"?"ChoCoc":b==="upcoming"?"SapThamGia":"HoanThanh";u.setAttribute("download",`BaoCao_DonHang_${p}_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(u),u.click(),document.body.removeChild(u)});const R=document.querySelectorAll(".tab-btn");R.forEach(e=>{e.addEventListener("click",t=>{R.forEach(s=>{s.classList.remove("border-csr-orange","text-csr-orange"),s.classList.add("border-transparent","text-gray-500")}),t.target.classList.add("border-csr-orange","text-csr-orange"),t.target.classList.remove("border-transparent","text-gray-500"),b=t.target.getAttribute("data-tab"),H()})});const B=document.getElementById("bookingModal"),M=document.getElementById("bookingModalContent"),N=document.getElementById("detailModal"),z=document.getElementById("detailModalContent"),L=document.getElementById("editModal"),D=document.getElementById("editModalContent"),F=document.getElementById("addBookingBtn");B&&(B.classList.add("duration-200","ease-out"),M.classList.add("duration-300","ease-out")),L&&(L.classList.add("duration-200","ease-out"),D.classList.add("duration-300","ease-out")),F&&F.addEventListener("click",()=>{document.getElementById("bookingModalContent").querySelector("h2").innerText="Thêm Khách Hàng (Tạo Đơn)",document.getElementById("submitBookingBtn").innerText="Tạo Phơi Đăng Ký",document.getElementById("editingBookingId").value="",document.getElementById("bookingForm").reset();const e=document.getElementById("loyalty-alert");e&&e.remove(),B.classList.remove("hidden"),setTimeout(()=>{B.classList.add("opacity-100"),M.classList.remove("scale-95","translate-y-4"),M.classList.add("scale-100","translate-y-0")},10)}),window.closeModal=()=>{B&&(B.classList.remove("opacity-100"),M.classList.remove("scale-100","translate-y-0"),M.classList.add("scale-95","translate-y-4"),setTimeout(()=>{B.classList.add("hidden")},200))},window.closeDetailModal=()=>{N&&(N.classList.remove("opacity-100"),z.classList.remove("scale-100","translate-y-0"),z.classList.add("scale-95","translate-y-4"),setTimeout(()=>{N.classList.add("hidden")},200))},window.closeEditModal=()=>{L&&(L.classList.remove("opacity-100"),D.classList.remove("scale-100","translate-y-0"),D.classList.add("scale-95","translate-y-4"),setTimeout(()=>{L.classList.add("hidden")},200))},window.openRowActionModal=e=>{document.getElementById("ramName").textContent=e.name||"Khách Hàng Này",document.getElementById("ramPhone").textContent=e.customer_id?`🥇 ${e.customer_id.toUpperCase()}`:e.phone||"";const t=`
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
        `;document.getElementById("ramActions").innerHTML=t,document.getElementById("rowActionModal").classList.remove("hidden")},window.addEventListener("click",e=>{const t=document.getElementById("rowActionModal");t&&e.target===t&&t.classList.add("hidden")}),window.actionView=e=>{document.getElementById("rowActionModal").classList.add("hidden");const t=C.find(a=>a.id==e);if(!t)return;const s=parseInt(t.deposit)>0?`<span class="text-green-600 font-bold">${parseInt(t.deposit).toLocaleString("vi-VN")}đ</span>`:'<span class="text-yellow-600 font-bold">0đ (Chưa Cọc)</span>',i=t.total_price?`${parseInt(t.total_price).toLocaleString("vi-VN")}đ`:"Chưa định giá",r=`
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
        `;document.getElementById("detailContentBlock").innerHTML=r,document.getElementById("detailModal").classList.remove("hidden"),setTimeout(()=>{document.getElementById("detailModal").classList.add("opacity-100");const a=document.getElementById("detailModalContent");a&&(a.classList.remove("scale-95","translate-y-4"),a.classList.add("scale-100","translate-y-0"))},10)},window.actionEdit=e=>{document.getElementById("rowActionModal").classList.add("hidden");const t=C.find(o=>o.id==e);if(!t)return;document.getElementById("edit-id").value=e,document.getElementById("edit-name").value=t.name||"",document.getElementById("edit-phone").value=t.phone||"",document.getElementById("edit-medal-name").value=t.medal_name||"",document.getElementById("edit-tour").value=t.tour||"",typeof _=="function"&&_("edit-date",t.tour||"",t.date||"");const s=document.getElementById("edit-date");if(s&&t.date&&s.value!==t.date){const o=document.createElement("option");o.value=t.date,o.textContent=t.date+" (dữ liệu cũ)",o.selected=!0,s.appendChild(o)}document.getElementById("edit-dob").value=t.dob||"",document.getElementById("edit-gender").value=t.gender||"Khác",document.getElementById("edit-status").value=t.status||"Chờ xác nhận cọc",document.getElementById("edit-allergy").value=t.allergy||"",document.getElementById("edit-address").value=t.address||"",document.getElementById("edit-diet").value=t.diet||"Không",document.getElementById("edit-trekking-pole").value=t.trekking_pole||"Không",document.getElementById("edit-commitments").checked=!!t.commitments,document.getElementById("edit-special").value=t.special||"",document.getElementById("edit-total").value=t.total_price||0,document.getElementById("edit-deposit").value=t.deposit||0,(()=>{const o=parseInt(document.getElementById("edit-total").value)||0,l=parseInt(document.getElementById("edit-deposit").value)||0,g=o-l,h=document.getElementById("edit-remaining");h&&(h.textContent=g>0?g.toLocaleString("vi-VN")+"đ":"0đ")})();const r=document.getElementById("editModal"),a=document.getElementById("editModalContent");r&&a&&(r.classList.remove("hidden"),setTimeout(()=>{r.classList.add("opacity-100"),a.classList.remove("scale-95","translate-y-4"),a.classList.add("scale-100","translate-y-0")},10))},window.actionDelete=async e=>{if(document.getElementById("rowActionModal").classList.add("hidden"),confirm("Bạn có chắc chắn muốn xóa Đơn hàng này? Thao tác không thể hoàn tác."))try{if((await fetch(`/api/bookings?id=${e}`,{method:"DELETE"})).ok)alert("✅ Đã xóa đơn hàng thành công!"),k();else throw new Error("Lỗi từ Server")}catch(t){alert("❌ Không thể xóa bảng ghi này: "+t.message)}};const G=()=>{const e=parseInt(document.getElementById("edit-total").value)||0,t=parseInt(document.getElementById("edit-deposit").value)||0,s=e-t,i=document.getElementById("edit-remaining");i&&(i.textContent=s>0?s.toLocaleString("vi-VN")+"đ":"0đ")},O=document.getElementById("edit-total"),U=document.getElementById("edit-deposit");O&&O.addEventListener("input",G),U&&U.addEventListener("input",G),document.querySelectorAll('#bookingModal button[onclick*="hidden"]').forEach(e=>{e.removeAttribute("onclick"),e.addEventListener("click",window.closeModal)});const q=async e=>{try{const s=await(await fetch("/api/admin_customers?action=create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:e.name,phone:e.phone,cccd:e.id_card||"",dob:e.dob||null,gender:e.gender||"Khác",medical_notes:e.allergy||"",dietary:e.diet||""})})).json();s.success&&s.csr_code&&(console.log("✅ Đã đồng bộ CRM thành công:",e.name,s.csr_code),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.id,customer_id:s.csr_code})})).ok&&(console.log("✅ Đã cập nhật Booking mã CRM"),typeof k=="function"&&k()))}catch(t){console.error("❌ Lỗi đồng bộ CRM:",t)}},J=document.getElementById("bookingsTableBody");J&&J.addEventListener("click",async e=>{const t=e.target.closest(".action-btn");if(!t){const a=e.target.closest(".row-clickable");if(a){const o=a.getAttribute("data-id"),l=C.find(g=>g.id==o);l&&openRowActionModal(l)}return}const s=t.getAttribute("data-id"),i=C.find(a=>a.id==s);if(!i)return;const r=document.getElementById("rowActionModal");if(r&&r.classList.add("hidden"),t.classList.contains("confirm-deposit-btn")){if(confirm("Xác nhận khách hàng này đã chuyển khoản đặt cọc?"))try{if(t.disabled=!0,t.classList.add("opacity-50"),(await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:s,status:"Đã cọc"})})).ok)alert("✅ Đã xác nhận cọc thành công!"),q(i),typeof k=="function"&&k();else throw new Error("Lỗi cập nhật API")}catch(a){alert("❌ Lỗi: "+a.message)}finally{t.disabled=!1,t.classList.remove("opacity-50")}return}if(t.classList.contains("delete-btn")){window.actionDelete(s);return}else if(t.classList.contains("process-btn")){const l=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/booking/process.html?id=${s}`;navigator.clipboard.writeText(l).then(()=>{alert("📋 Đã sao chép Link Form Điền Thông Tin Cơ Bản! Gửi cho khách qua Zalo nhé:\\n"+l)}).catch(g=>{alert("Lỗi khi Copy Clipboard. Link là: "+l)})}else if(t.classList.contains("send-btn")){const l=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay/${s}`;navigator.clipboard.writeText(l).then(()=>{alert("📋 Đã sao chép Link Thanh Toán Cọc! Gửi cho khách qua Zalo nhé:\\n"+l)}).catch(g=>{alert("Lỗi khi Copy Clipboard. Link là: "+l)})}else if(t.classList.contains("payment-btn")){const l=(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8888":window.location.origin)+`/pay/${s}`;window.open(l,"_blank")}else t.classList.contains("view-btn")?(document.getElementById("rowActionModal").classList.add("hidden"),window.actionView(s)):t.classList.contains("edit-btn")&&window.actionEdit(s)});const Y=document.getElementById("searchBtn");Y&&Y.addEventListener("click",async e=>{e.preventDefault();const t=document.getElementById("smartSearch").value,s=e.target;if(!t){alert("Vui lòng nhập Số Điện Thoại hoặc Mã #CSR");return}s.innerHTML='<svg class="animate-spin h-4 w-4 text-gray-900 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>',s.disabled=!0;try{const r=await fetch("/api/admin_customers?action=search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:t})}),a=await r.json();if(r.ok&&a.success){const o=a.data;if(document.getElementById("addFullName")&&(document.getElementById("addFullName").value=o.full_name||""),document.getElementById("addPhone")&&(document.getElementById("addPhone").value=o.phone||""),document.getElementById("addCsrCode")&&(document.getElementById("addCsrCode").value=o.csr_code||""),document.getElementById("addDob")&&o.dob){let u=o.dob;if(u.includes("/")){const p=u.split("/");u=p[2]+"-"+p[1].padStart(2,"0")+"-"+p[0].padStart(2,"0")}document.getElementById("addDob").value=u}document.getElementById("addGender")&&(document.getElementById("addGender").value=o.gender||"Khác"),document.getElementById("addIdCard")&&(document.getElementById("addIdCard").value=o.cccd||""),document.getElementById("addAllergy")&&(document.getElementById("addAllergy").value=o.medical_notes||""),document.getElementById("addDiet")&&(document.getElementById("addDiet").value=o.dietary||"Bình Thường"),document.getElementById("addAddress")&&(document.getElementById("addAddress").value=o.address||""),document.getElementById("addTrekkingPole")&&(document.getElementById("addTrekkingPole").value=o.trekking_pole||"Không"),document.getElementById("addMedalName")&&(document.getElementById("addMedalName").value=o.medal_name||"");let l="";o.loyalty_tier==="VIP"?l=`<span class="bg-yellow-500/20 text-yellow-500 ml-2 px-2 py-0.5 rounded text-xs">⭐ Khách VIP - Đã đi ${o.tour_count} chuyến</span>`:o.loyalty_tier==="Member"&&(l='<span class="bg-csr-orange/20 text-csr-orange ml-2 px-2 py-0.5 rounded text-xs">✨ Thành viên</span>');const g=`
                    <div id="loyalty-alert" class="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-sm flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Đã tải thông tin Auto-fill thành công! ${l}
                    </div>`,h=document.getElementById("loyalty-alert");h&&h.remove(),document.getElementById("smartSearch").parentElement.insertAdjacentHTML("afterend",g)}else throw new Error(a.message||"Không tìm thấy dữ liệu.")}catch(i){alert("❌ "+i.message),document.getElementById("bookingForm").reset();const r=document.getElementById("loyalty-alert");r&&r.remove()}finally{s.innerHTML="Tra cứu",s.disabled=!1}});const W=document.getElementById("bookingForm");W&&W.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.querySelector('button[type="submit"]'),s=t.textContent;t.textContent="Đang lưu hệ thống...",t.disabled=!0;try{const i=document.getElementById("addFullName").value,r=document.getElementById("addPhone").value,a=document.getElementById("addTourName").value,o=document.getElementById("addTourDate").value,l=document.getElementById("addNote").value,g=document.getElementById("addDob").value||null,h=document.getElementById("addGender").value||"Khác",u=document.getElementById("addIdCard").value||"",p=document.getElementById("addAddress").value||"",d=document.getElementById("addDiet").value||"Bình Thường",x=document.getElementById("addTrekkingPole").value||"Không",T=document.getElementById("addAllergy").value||"",S=document.getElementById("addMedalName")?document.getElementById("addMedalName").value:"",n=localStorage.getItem("csr_admin_session");let m=null,c="Admin";if(n){const y=JSON.parse(n);m=y.id,c=y.full_name}const v=document.getElementById("editingBookingId")?document.getElementById("editingBookingId").value:"",w=$.find(y=>y.name===a),I=w&&parseInt(w.price)||0,f={name:i,phone:r,tour:a,date:o,status:"Chờ cọc",total_price:I,deposit:0,sale_id:m,sale_name:c,customer_id:"",dob:g,gender:h,id_card:u,address:p,diet:d,trekking_pole:x,allergy:T,special:l,medal_name:S};v&&(f.id=v,delete f.status,delete f.deposit,delete f.total_price,delete f.sale_id,delete f.sale_name,delete f.customer_id);const E=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)});if(E.ok){alert(v?"✅ Đã lưu Cập nhật Đơn hàng!":"✅ Thêm Đơn Hàng Thành Công! (Khách chờ thông tin/cọc)"),window.closeModal();const y=document.getElementById("loyalty-alert");y&&y.remove(),typeof k=="function"?k():window.location.reload()}else{const y=await E.json();throw new Error(y.error||"Lỗi tạo Booking!")}}catch(i){alert("❌ "+i.message)}finally{t.textContent=s,t.disabled=!1}});const X=document.getElementById("editForm");X&&X.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.querySelector('button[type="submit"]'),s=t.textContent;t.textContent="Đang lưu cập nhật...",t.disabled=!0;try{const i=document.getElementById("edit-id").value,r=document.getElementById("edit-name").value,a=document.getElementById("edit-phone").value,o=document.getElementById("edit-medal-name").value,l=document.getElementById("edit-tour").value,g=document.getElementById("edit-date").value,h=document.getElementById("edit-dob").value,u=document.getElementById("edit-gender").value,p=document.getElementById("edit-status").value,d=document.getElementById("edit-allergy").value,x=document.getElementById("edit-address").value,T=document.getElementById("edit-diet").value,S=document.getElementById("edit-trekking-pole").value,n=document.getElementById("edit-commitments").checked,m=document.getElementById("edit-special").value,c=document.getElementById("edit-total").value,v=document.getElementById("edit-deposit").value,w=c?parseInt(c):0,I=v?parseInt(v):0,f={id:i,name:r,phone:a,medal_name:o,tour:l,date:g,dob:h,gender:u,status:p,allergy:d,address:x,diet:T,trekking_pole:S,commitments:n,special:m,total_price:w,deposit:I},E=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)});if(E.ok)alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!"),(p.includes("Đã cọc")||w>0&&w===I)&&q(f),window.closeEditModal(),typeof k=="function"&&k();else{const y=await E.json();throw new Error(y.error||"Gặp sự cố khi Cập nhật API.")}}catch(i){alert("❌ Lỗi Cập nhật: "+i.message)}finally{t.textContent=s,t.disabled=!1}})};export{st as afterRender,at as render};
