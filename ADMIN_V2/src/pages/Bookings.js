import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => {
    return `
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${Sidebar()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${Header()}
          
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
    `;
};

export const afterRender = () => {
    let currentBookings = []; // Lưu trữ tạm thời trạng thái DB
    let activeTab = 'pending'; // 'pending', 'upcoming', 'completed'
    let allTours = [];
    let allSchedules = [];

    // ===== FETCH TOURS + SCHEDULES ĐỂ POPULATE DROPDOWNS =====
    const loadToursAndSchedules = async () => {
        try {
            const [toursRes, schedulesRes] = await Promise.all([
                fetch('/api/tours'),
                fetch('/api/schedules')
            ]);
            allTours = toursRes.ok ? await toursRes.json() : [];
            allSchedules = schedulesRes.ok ? await schedulesRes.json() : [];

            // Populate tour dropdowns (cả modal tạo đơn + modal edit)
            populateTourDropdown('addTourName');
            populateTourDropdown('edit-tour');
        } catch (err) {
            console.error('Lỗi tải tours/schedules:', err);
        }
    };

    const populateTourDropdown = (selectId) => {
        const select = document.getElementById(selectId);
        if (!select) return;
        const currentVal = select.value;
        // Giữ option đầu
        const firstOption = select.options[0].outerHTML;
        select.innerHTML = firstOption;
        allTours
            .filter(t => t.is_visible !== false)
            .forEach(t => {
                const opt = document.createElement('option');
                opt.value = t.name;
                opt.textContent = t.name;
                if (t.name === currentVal) opt.selected = true;
                select.appendChild(opt);
            });
    };

    const populateDateDropdown = (dateSelectId, tourName, currentDateVal) => {
        const dateSelect = document.getElementById(dateSelectId);
        if (!dateSelect) return;
        dateSelect.innerHTML = '<option value="">-- Chọn Lịch --</option>';

        if (!tourName) {
            dateSelect.innerHTML = '<option value="">-- Chọn Tour trước --</option>';
            return;
        }

        // Lọc schedules theo tour name (match linh hoạt)
        const matched = allSchedules.filter(s => {
            return s.tour_name === tourName || tourName.includes(s.tour_name) || s.tour_name.includes(tourName);
        });

        if (matched.length === 0) {
            dateSelect.innerHTML = '<option value="">Chưa có lịch cho tour này</option>';
            return;
        }

        matched
            .sort((a, b) => new Date(a.start_date) - new Date(b.start_date))
            .forEach(s => {
                const booked = parseInt(s.booked_count) || 0;
                const remaining = (s.slots || 0) - booked;
                const sDate = new Date(s.start_date);
                const eDate = s.end_date ? new Date(s.end_date) : null;
                const fmtDate = (d) => `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}`;

                let label = fmtDate(sDate);
                if (eDate) label += ' - ' + fmtDate(eDate);
                label += ` (${remaining >= 0 ? remaining : 0} chỗ trống)`;

                const opt = document.createElement('option');
                // Value = format giống với booking.date (DD/MM/YYYY)
                opt.value = `${sDate.getDate().toString().padStart(2, '0')}/${(sDate.getMonth() + 1).toString().padStart(2, '0')}/${sDate.getFullYear()}`;
                opt.textContent = label;
                if (remaining <= 0) {
                    opt.disabled = true;
                    opt.textContent = label.replace('chỗ trống', 'HẾT CHỖ');
                }
                // Auto-select nếu match giá trị hiện tại
                if (currentDateVal && opt.value === currentDateVal) opt.selected = true;
                dateSelect.appendChild(opt);
            });
    };

    // Gắn event: khi chọn tour → cập nhật dropdown ngày
    const addTourSelect = document.getElementById('addTourName');
    if (addTourSelect) {
        addTourSelect.addEventListener('change', (e) => {
            populateDateDropdown('addTourDate', e.target.value);
        });
    }
    const editTourSelect = document.getElementById('edit-tour');
    if (editTourSelect) {
        editTourSelect.addEventListener('change', (e) => {
            populateDateDropdown('edit-date', e.target.value);
        });
    }

    // Fetch data ngay lập tức
    loadToursAndSchedules();

    // Tách riêng hàm Build HTML để tái sử dụng khi Filter Tabs
    const renderTable = () => {
        const thead = document.getElementById('bookingsTableHead');
        const tbody = document.getElementById('bookingsTableBody');
        if (!tbody || !thead) return;

        // Xử lý Thead tùy thuộc theo Tab
        const isDetailView = activeTab === 'upcoming' || activeTab === 'completed';

        if (isDetailView) {
            thead.innerHTML = `
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
            `;
        } else {
            thead.innerHTML = `
                <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                    <th class="p-4 font-medium">Khách Hàng</th>
                    <th class="p-4 font-medium">Thông tin Tour</th>
                    <th class="p-4 font-medium">Nguồn / Sale</th>
                    <th class="p-4 font-medium text-right w-[280px]">Thao Tác</th>
                </tr>
            `;
        }

        // ----- BỘ LỌC DATA (Kế thừa từ Admin cũ) -----
        const searchTerm = document.getElementById('filterSearch') ? document.getElementById('filterSearch').value.toLowerCase() : '';
        const filterTour = document.getElementById('filterTour') ? document.getElementById('filterTour').value : '';
        const filterDate = document.getElementById('filterDate') ? document.getElementById('filterDate').value : '';
        const filterSale = document.getElementById('filterSale') ? document.getElementById('filterSale').value : '';

        let filteredData = currentBookings.filter(b => {
            // 1. Phân Trạng Thái theo Tab (Luồng mới 26/02)
            let tabMatch = false;
            const isFullyPaid = parseInt(b.total_price) > 0 && parseInt(b.total_price) === parseInt(b.deposit);

            if (activeTab === 'pending') {
                // Chỉ hiện các lead chưa điền form hoặc đơn chưa có hành động gì
                tabMatch = !b.status || b.status === 'Chờ cọc';
            } else if (activeTab === 'upcoming') {
                // Khách đã có thông tin/cọc nhưng CHƯA hoàn tất phí
                tabMatch = (b.status === 'Chờ xác nhận cọc' || b.status === 'Đã cọc' || b.status === 'Đã cọc (Chờ đi)') && !isFullyPaid;
            } else if (activeTab === 'completed') {
                // Khách đã hoàn tất phí HOẶC trạng thái là Hoàn thành/Đã đi
                tabMatch = isFullyPaid || b.status === 'Hoàn thành' || b.status === 'Đã đi';
            }
            if (!tabMatch) return false;

            // 2. Lọc Tour
            if (filterTour && b.tour !== filterTour) return false;

            // 3. Lọc Ngày
            if (filterDate && b.date !== filterDate) return false;

            // 4. Lọc Sale
            if (filterSale && String(b.sale_id) !== String(filterSale)) return false;

            // 5. Lọc Search (Tên, SĐT, CRM ID)
            if (searchTerm) {
                const searchString = `${b.name || ''} ${b.phone || ''} ${b.customer_id || ''}`.toLowerCase();
                if (!searchString.includes(searchTerm)) return false;
            }

            return true;
        });

        // ----- CẬP NHẬT DASHBOARD MINI -----
        const statTitle1 = document.getElementById('statTitle1');
        const statTitle2 = document.getElementById('statTitle2');
        const statTitle3 = document.getElementById('statTitle3');
        const statTotalCustomers = document.getElementById('statTotalCustomers');
        const statTotalRevenue = document.getElementById('statTotalRevenue');
        const statTotalCollected = document.getElementById('statTotalCollected');

        let totalCustomersCount = filteredData.length;

        if (activeTab === 'pending') {
            if (statTitle1) statTitle1.textContent = 'Tổng Khách (Chờ Cọc)';
            if (statTitle2) statTitle2.textContent = 'Khách Chưa Tư Vấn (Mới)';
            if (statTitle3) statTitle3.textContent = 'Đã Có Sale Giữ Chỗ';

            let untounchedCount = 0;
            let processingCount = 0;

            filteredData.forEach(b => {
                if (!b.sale_id || b.sale_id === 'null' || !b.sale_name || b.sale_name === 'Website' || b.sale_name === 'null') {
                    untounchedCount++;
                } else {
                    processingCount++;
                }
            });

            if (statTotalCustomers) statTotalCustomers.textContent = totalCustomersCount;
            if (statTotalRevenue) statTotalRevenue.textContent = untounchedCount + ' Đơn';
            if (statTotalCollected) statTotalCollected.textContent = processingCount + ' Đơn';
        } else if (activeTab === 'upcoming') {
            // Dashboard cho Khách Sắp Tham Gia (Công nợ)
            if (statTitle1) statTitle1.textContent = 'Tổng Số Khách';
            if (statTitle2) statTitle2.textContent = 'Chưa Xác Nhận Cọc';
            if (statTitle3) statTitle3.textContent = 'Chờ Thanh Toán Còn Lại';

            let unconfirmedCount = 0;
            let partialPaidCount = 0;

            filteredData.forEach(b => {
                if (b.status === 'Chờ xác nhận cọc') {
                    unconfirmedCount++;
                } else if (parseInt(b.deposit) > 0 && parseInt(b.total_price) > parseInt(b.deposit)) {
                    partialPaidCount++;
                }
            });

            if (statTotalCustomers) statTotalCustomers.textContent = totalCustomersCount;
            if (statTotalRevenue) statTotalRevenue.textContent = unconfirmedCount + ' Khách';
            if (statTotalCollected) statTotalCollected.textContent = partialPaidCount + ' Khách';
        } else {
            // Dashboard cho Khách Chờ Lên Xe
            if (statTitle1) statTitle1.textContent = 'Khách Sẵn Sàng (Full)';
            if (statTitle2) statTitle2.textContent = 'Tổng Doanh Thu Tab';
            if (statTitle3) statTitle3.textContent = 'Thực Thu (Full Tận Nơi)';

            let totalRevenueSum = 0;
            let totalCollectedSum = 0;

            filteredData.forEach(b => {
                totalRevenueSum += parseInt(b.total_price) || 0;
                totalCollectedSum += parseInt(b.deposit) || 0;
            });

            if (statTotalCustomers) statTotalCustomers.textContent = totalCustomersCount;
            if (statTotalRevenue) statTotalRevenue.textContent = totalRevenueSum > 0 ? totalRevenueSum.toLocaleString('vi-VN') + 'đ' : '0đ';
            if (statTotalCollected) statTotalCollected.textContent = totalCollectedSum > 0 ? totalCollectedSum.toLocaleString('vi-VN') + 'đ' : '0đ';
        }
        // ------------------------------------

        const colSpan = isDetailView ? 8 : 4;
        if (!filteredData || filteredData.length === 0) {
            let emptyMsg = activeTab === 'pending' ? 'Chưa có Khách chờ cọc.' : (activeTab === 'upcoming' ? 'Chưa có Khách nào Đã Cọc.' : 'Danh sách rỗng.');
            tbody.innerHTML = `<tr><td colspan="${colSpan}" class="p-8 text-center text-gray-500">${emptyMsg}</td></tr>`;
            return;
        }

        tbody.innerHTML = filteredData.map(b => {
            const rowClass = activeTab === 'upcoming' ? 'bg-green-50/20 hover:bg-green-50 transition-colors' : 'hover:bg-gray-100 transition-colors';

            if (isDetailView) {
                // =============== LAYOUT 8 CỘT CHI TIẾT ===============
                const totalPrice = parseInt(b.total_price) || 0;
                const depositPrice = parseInt(b.deposit) || 0;
                const remainPrice = totalPrice - depositPrice;

                const formatedTotal = totalPrice > 0 ? totalPrice.toLocaleString('vi-VN') + 'đ' : 'Chưa định giá';
                const formatedDeposit = depositPrice > 0 ? depositPrice.toLocaleString('vi-VN') + 'đ' : '0đ';
                const formatedRemain = remainPrice > 0 ? remainPrice.toLocaleString('vi-VN') + 'đ' : (remainPrice === 0 && totalPrice > 0 ? 'Đã thu trọn' : '-');

                let statusBadge = '';
                if (b.status === 'Hoàn thành' || b.status === 'Đã đi') {
                    statusBadge = '<span class="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-xs block w-full text-center">Hoàn thành</span>';
                } else if (b.status === 'Chờ xác nhận cọc') {
                    statusBadge = `<button class="action-btn confirm-deposit-btn bg-csr-orange text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-[#d65503] w-full" data-id="${b.id}">Xác nhận cọc</button>`;
                } else if (depositPrice > 0 && remainPrice === 0) {
                    statusBadge = '<span class="bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Hoàn tất phí</span>';
                } else {
                    statusBadge = '<span class="bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-xs font-medium block w-full text-center">Đã Cọc</span>';
                }

                return `
                <tr class="${rowClass} cursor-pointer row-clickable" data-id="${b.id}">
                    <td class="p-4 align-top">
                        <div class="font-medium text-gray-900">${b.name}</div>
                        ${b.customer_id
                        ? `<div class="mt-1 flex items-center bg-orange-50 text-csr-orange text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">${b.customer_id.toUpperCase()}</div>`
                        : `<div class="text-[11px] text-gray-500 mt-0.5">${b.phone}</div>`
                    }
                    </td>
                    <td class="p-4 align-top text-sm">
                        <div class="text-gray-700 font-medium">${b.tour}</div>
                        <div class="text-gray-500 text-xs whitespace-nowrap">${b.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-600">${b.sale_name || 'Website'}</td>
                    <td class="p-4 align-top text-center">${statusBadge}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-gray-700">${formatedTotal}</td>
                    <td class="p-4 align-top text-right text-sm font-medium text-green-600">${formatedDeposit}</td>
                    <td class="p-4 align-top text-right text-sm font-bold text-red-500">${formatedRemain}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            <button class="action-btn payment-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${b.id}">Thanh toán</button>
                        </div>
                    </td>
                </tr>
                `;
            } else {
                // =============== LAYOUT 4 CỘT CHỜ CỌC ===============
                const avtChar = b.name ? b.name.substring(0, 2).toUpperCase() : 'KH';
                return `
                <tr class="${rowClass} cursor-pointer row-clickable" data-id="${b.id}">
                    <td class="p-4 align-top">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-csr-orange/20 text-csr-orange flex items-center justify-center font-bold">${avtChar}</div>
                            <div>
                                <div class="font-medium text-gray-900">${b.name}</div>
                                ${b.customer_id
                        ? `<div class="mt-1 flex items-center bg-orange-50 text-csr-orange text-xs font-bold px-2 py-0.5 rounded border border-orange-100 w-fit">${b.customer_id.toUpperCase()}</div>`
                        : `<div class="text-[11px] text-gray-500 mt-0.5">${b.phone}</div>`
                    }
                            </div>
                        </div>
                    </td>
                    <td class="p-4 align-top">
                        <div class="text-sm text-gray-600">${b.tour}</div>
                        <div class="text-xs text-gray-500 mt-1">Lịch: ${b.date}</div>
                    </td>
                    <td class="p-4 align-top text-sm text-gray-500">${b.sale_name || 'Website'}</td>
                    <td class="p-4 align-top text-right">
                        <div class="flex flex-col gap-1.5 items-end">
                            <button class="action-btn process-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-colors" data-id="${b.id}">Copy link Process</button>
                        </div>
                    </td>
                </tr>
                `;
            }
        }).join('');
    };

    // Xây dựng Dropdown Bộ Lọc từ Data Thực Tế
    const populateFilters = () => {
        const tourSet = new Set();
        const dateSet = new Set();
        const saleMap = new Map();

        currentBookings.forEach(b => {
            if (b.tour) tourSet.add(b.tour);
            if (b.date) dateSet.add(b.date);
            if (b.sale_id && b.sale_name) saleMap.set(b.sale_id, b.sale_name);
        });

        const filterTourInfo = document.getElementById('filterTour');
        const filterDateInfo = document.getElementById('filterDate');
        const filterSaleInfo = document.getElementById('filterSale');

        if (filterTourInfo) {
            const currentVal = filterTourInfo.value;
            filterTourInfo.innerHTML = '<option value="">Tất cả Tour</option>';
            [...tourSet].sort().forEach(t => filterTourInfo.innerHTML += `<option value="${t}">${t}</option>`);
            filterTourInfo.value = currentVal;
        }

        if (filterDateInfo) {
            const currentVal = filterDateInfo.value;
            filterDateInfo.innerHTML = '<option value="">Tất cả Ngày</option>';
            [...dateSet].sort().forEach(d => filterDateInfo.innerHTML += `<option value="${d}">${d}</option>`);
            filterDateInfo.value = currentVal;
        }

        if (filterSaleInfo) {
            const currentVal = filterSaleInfo.value;
            filterSaleInfo.innerHTML = '<option value="">Tất cả Sale</option>';
            // Add Website option
            filterSaleInfo.innerHTML += '<option value="null">Nguồn Website</option>';
            for (let [id, name] of saleMap) {
                filterSaleInfo.innerHTML += `<option value="${id}">${name}</option>`;
            }
            filterSaleInfo.value = currentVal;
        }
    }

    // Tải danh sách Khách hàng đăng ký từ Backend
    const loadBookings = async () => {
        try {
            const res = await fetch('/api/bookings');
            currentBookings = await res.json();
            populateFilters(); // Generate Options cho thẻ Select
            renderTable(); // Gọi hàm Render HTML sau khi tải xong mảng
        } catch (err) {
            console.error("Lỗi parse list đơn hàng:", err);
            const tbody = document.getElementById('bookingsTableBody');
            if (tbody) tbody.innerHTML = '<tr><td colspan="4" class="p-8 text-center text-red-500">Lỗi lấy dữ liệu từ Server.</td></tr>';
        }
    };

    loadBookings();

    // Event Listener cho các thẻ Filter
    ['filterSearch', 'filterTour', 'filterDate', 'filterSale'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'filterSearch') el.addEventListener('input', renderTable);
            else el.addEventListener('change', renderTable);
        }
    });

    // Chức năng Xuất Excel (CSV)
    const exportExcelBtn = document.getElementById('exportExcelBtn');
    if (exportExcelBtn) {
        exportExcelBtn.addEventListener('click', () => {
            // Lấy dữ liệu lọc hiện tại được lưu lại trong một scoped function
            // Cần tính toán lại filter một lần nữa vì ta không lưu filteredData ra scope bên ngoài
            const searchTerm = document.getElementById('filterSearch') ? document.getElementById('filterSearch').value.toLowerCase() : '';
            const filterTour = document.getElementById('filterTour') ? document.getElementById('filterTour').value : '';
            const filterDate = document.getElementById('filterDate') ? document.getElementById('filterDate').value : '';
            const filterSale = document.getElementById('filterSale') ? document.getElementById('filterSale').value : '';

            let dataToExport = currentBookings.filter(b => {
                let tabMatch = false;
                if (activeTab === 'pending') tabMatch = b.status === 'Chờ xác nhận cọc' || parseInt(b.deposit) === 0 || !b.deposit;
                else if (activeTab === 'upcoming') tabMatch = b.status !== 'Chờ xác nhận cọc' && parseInt(b.deposit) > 0;
                else if (activeTab === 'completed') tabMatch = b.status === 'Hoàn thành';
                if (!tabMatch) return false;
                if (filterTour && b.tour !== filterTour) return false;
                if (filterDate && b.date !== filterDate) return false;
                if (filterSale && String(b.sale_id) !== String(filterSale)) return false;
                if (searchTerm) {
                    const searchString = `${b.name || ''} ${b.phone || ''} ${b.customer_id || ''}`.toLowerCase();
                    if (!searchString.includes(searchTerm)) return false;
                }
                return true;
            });

            if (dataToExport.length === 0) {
                alert("Danh sách rỗng. Không có dữ liệu để xuất.");
                return;
            }

            // Headers
            const headers = ['Mã KH (CRM)', 'Họ và Tên', 'Số điện thoại', 'Tên Tour', 'Lịch trình', 'Trạng thái', 'Nguồn / Sale', 'Đã cọc', 'Tổng tiền', 'Ghi chú'];

            // Build CSV rows
            const rows = [headers];
            dataToExport.forEach(b => {
                rows.push([
                    b.customer_id || '',
                    `"${b.name || ''}"`,
                    `="${b.phone || ''}"`, // Force Excel treat as text string
                    `"${b.tour || ''}"`,
                    `"${b.date || ''}"`,
                    `"${b.status || ''}"`,
                    `"${b.sale_name || 'Website'}"`,
                    b.deposit || 0,
                    b.total_price || 0,
                    `"${(b.special || '').replace(/"/g, '""')}"` // Escape quotes
                ]);
            });

            // Convert to CSV string format with BOM for UTF-8 compatibility
            const csvContent = "\\uFEFF" + rows.map(e => e.join(",")).join("\n");

            // Trigger download
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            let filenameStatus = activeTab === 'pending' ? 'ChoCoc' : (activeTab === 'upcoming' ? 'SapThamGia' : 'HoanThanh');
            link.setAttribute("download", `BaoCao_DonHang_${filenameStatus}_${new Date().toISOString().slice(0, 10)}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Logic Đổi Tab
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Đặt lại Style tất cả Tab
            tabBtns.forEach(b => {
                b.classList.remove('border-csr-orange', 'text-csr-orange');
                b.classList.add('border-transparent', 'text-gray-500');
            });

            // Gắn Style Tab đang chọn
            e.target.classList.add('border-csr-orange', 'text-csr-orange');
            e.target.classList.remove('border-transparent', 'text-gray-500');

            // Cập nhật State & Render lại
            activeTab = e.target.getAttribute('data-tab');
            renderTable();
        });
    });

    // Modal behavior - Smooth Animation
    const modal = document.getElementById('bookingModal');
    const modalContent = document.getElementById('bookingModalContent');
    const detailModal = document.getElementById('detailModal');
    const detailModalContent = document.getElementById('detailModalContent');
    const editModal = document.getElementById('editModal');
    const editModalContent = document.getElementById('editModalContent');
    const btnAdd = document.getElementById('addBookingBtn');

    // Make modal transition faster and smoother
    if (modal) {
        modal.classList.add('duration-200', 'ease-out');
        modalContent.classList.add('duration-300', 'ease-out');
    }
    if (editModal) {
        editModal.classList.add('duration-200', 'ease-out');
        editModalContent.classList.add('duration-300', 'ease-out');
    }

    if (btnAdd) {
        btnAdd.addEventListener('click', () => {
            document.getElementById('bookingModalContent').querySelector('h2').innerText = 'Thêm Khách Hàng (Tạo Đơn)';
            document.getElementById('submitBookingBtn').innerText = 'Tạo Phơi Đăng Ký';
            document.getElementById('editingBookingId').value = ''; // Reset trạng thái Sửa
            document.getElementById('bookingForm').reset();
            const existingAlert = document.getElementById('loyalty-alert');
            if (existingAlert) existingAlert.remove();

            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.add('opacity-100');
                modalContent.classList.remove('scale-95', 'translate-y-4');
                modalContent.classList.add('scale-100', 'translate-y-0');
            }, 10);
        });
    }

    // Window global functions for closing modals
    window.closeModal = () => {
        if (!modal) return;
        modal.classList.remove('opacity-100');
        modalContent.classList.remove('scale-100', 'translate-y-0');
        modalContent.classList.add('scale-95', 'translate-y-4');
        setTimeout(() => { modal.classList.add('hidden'); }, 200);
    }

    window.closeDetailModal = () => {
        if (!detailModal) return;
        detailModal.classList.remove('opacity-100');
        detailModalContent.classList.remove('scale-100', 'translate-y-0');
        detailModalContent.classList.add('scale-95', 'translate-y-4');
        setTimeout(() => { detailModal.classList.add('hidden'); }, 200);
    }

    window.closeEditModal = () => {
        if (!editModal) return;
        editModal.classList.remove('opacity-100');
        editModalContent.classList.remove('scale-100', 'translate-y-0');
        editModalContent.classList.add('scale-95', 'translate-y-4');
        setTimeout(() => { editModal.classList.add('hidden'); }, 200);
    }

    // Modal Hành Động trên Dòng (Row Action Modal)
    window.openRowActionModal = (booking) => {
        document.getElementById('ramName').textContent = booking.name || 'Khách Hàng Này';
        document.getElementById('ramPhone').textContent = booking.customer_id ? `🥇 ${booking.customer_id.toUpperCase()}` : (booking.phone || '');

        const actionHtml = `
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionView(${booking.id})">
                <div class="bg-blue-100/60 text-blue-600 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Chi Tiết Thông Tin</span>
            </button>
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionEdit(${booking.id})">
                <div class="bg-yellow-100/60 text-yellow-600 p-2 rounded-lg group-hover:bg-yellow-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Chỉnh Sửa Phiếu</span>
            </button>
            <button class="w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors group" onclick="window.actionDelete(${booking.id})">
                <div class="bg-red-100/60 text-red-500 p-2 rounded-lg group-hover:bg-red-200 transition-colors">
                    <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </div>
                <span class="font-bold text-[#1f2937] text-sm">Xóa Đơn Hàng Này</span>
            </button>
        `;
        document.getElementById('ramActions').innerHTML = actionHtml;
        document.getElementById('rowActionModal').classList.remove('hidden');
    };

    // Đóng Modal khi bấm ra ngoài
    window.addEventListener('click', (e) => {
        const rowModal = document.getElementById('rowActionModal');
        if (rowModal && e.target === rowModal) {
            rowModal.classList.add('hidden');
        }
    });

    // Hàm chức năng Row (Toàn cục)
    window.actionView = (bookingId) => {
        document.getElementById('rowActionModal').classList.add('hidden');
        const booking = currentBookings.find(b => b.id == bookingId);
        if (!booking) return;

        const depositHtml = parseInt(booking.deposit) > 0 ? `<span class="text-green-600 font-bold">${parseInt(booking.deposit).toLocaleString('vi-VN')}đ</span>` : `<span class="text-yellow-600 font-bold">0đ (Chưa Cọc)</span>`;
        const priceHtml = booking.total_price ? `${parseInt(booking.total_price).toLocaleString('vi-VN')}đ` : 'Chưa định giá';

        const content = `
           <div class="grid grid-cols-2 gap-y-3 gap-x-6 border-b pb-4">
               <p><strong class="text-gray-500 block">Họ và Tên:</strong> <span class="text-lg font-medium">${booking.name}</span></p>
               <p><strong class="text-gray-500 block">SĐT:</strong> <span class="text-lg">${booking.phone}</span></p>
               <p><strong class="text-gray-500 block">Mã CRM:</strong> <span class="text-csr-orange font-mono">${booking.customer_id || 'Trống'}</span></p>
               <p><strong class="text-gray-500 block">Huy Chương:</strong> <span class="text-csr-orange font-bold text-lg">${booking.medal_name || 'Theo Tên Thật'}</span></p>
           </div>
            <div class="grid grid-cols-2 gap-y-3 gap-x-6 border-b py-4 bg-gray-50/50 rounded-lg p-3">
                <p><strong class="text-gray-500 block">Ngày Sinh:</strong> <span>${booking.dob || 'Không có'}</span></p>
                <p><strong class="text-gray-500 block">Giới Tính:</strong> <span>${booking.gender || 'Bình thường'}</span></p>
                <p><strong class="text-gray-500 block">Dị Ứng / Y tế:</strong> <span class="text-red-500 font-medium">${booking.allergy || 'Không'}</span></p>
                <p><strong class="text-gray-500 block">Chế Độ Ăn:</strong> <span>${booking.diet || 'Không'}</span></p>
                <p><strong class="text-gray-500 block">Mượn Gậy:</strong> <span>${booking.trekking_pole || 'Không'}</span></p>
                <p><strong class="text-gray-500 block">CCCD:</strong> <span>${booking.id_card || 'Không có'}</span></p>
                <p class="col-span-2"><strong class="text-gray-500 block">Địa Chỉ:</strong> <span class="text-xs break-words">${booking.address || 'Không có'}</span></p>
            </div>
            <div class="grid grid-cols-2 gap-y-3 gap-x-6 pt-4">
                <p><strong class="text-gray-500 block">Tour Tham Gia:</strong> <span class="text-blue-600 font-medium">${booking.tour}</span></p>
                <p><strong class="text-gray-500 block">Ngày Khởi Hành:</strong> <span>${booking.date}</span></p>
                <p><strong class="text-gray-500 block">Tiền Cọc:</strong> ${depositHtml}</p>
                <p><strong class="text-gray-500 block">Tổng Tiền:</strong> <span class="font-bold">${priceHtml}</span></p>
                <p><strong class="text-gray-500 block">Cam Kết:</strong> <span class="${booking.commitments ? 'text-green-600' : 'text-red-500'} font-bold">${booking.commitments ? 'Đã đồng ý' : 'Chưa xác nhận'}</span></p>
                <p class="col-span-2"><strong class="text-gray-500 block">Nhân Viên Sale / Ghi Chú:</strong> <span class="italic text-gray-700 bg-yellow-50 p-2 block mt-1 rounded border border-yellow-100">${booking.sale_name || 'Website'} - ${booking.special || '(Không có nhánh ghi chú)'}</span></p>
            </div>
        `;
        document.getElementById('detailContentBlock').innerHTML = content;
        document.getElementById('detailModal').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('detailModal').classList.add('opacity-100');
            const mc = document.getElementById('detailModalContent');
            if (mc) {
                mc.classList.remove('scale-95', 'translate-y-4');
                mc.classList.add('scale-100', 'translate-y-0');
            }
        }, 10);
    };

    window.actionEdit = (bookingId) => {
        document.getElementById('rowActionModal').classList.add('hidden');
        const booking = currentBookings.find(b => b.id == bookingId);
        if (!booking) return;

        // Nạp data vào các trường của Edit Form
        document.getElementById('edit-id').value = bookingId;
        document.getElementById('edit-name').value = booking.name || '';
        document.getElementById('edit-phone').value = booking.phone || '';
        document.getElementById('edit-medal-name').value = booking.medal_name || '';

        // Tour & Lịch trình (populate dropdown date theo tour)
        document.getElementById('edit-tour').value = booking.tour || '';
        if (typeof populateDateDropdown === 'function') {
            populateDateDropdown('edit-date', booking.tour || '', booking.date || '');
        }

        // Nếu ngày cũ không match schedule nào → thêm option thủ công
        const editDateEl = document.getElementById('edit-date');
        if (editDateEl && booking.date && editDateEl.value !== booking.date) {
            const customOpt = document.createElement('option');
            customOpt.value = booking.date;
            customOpt.textContent = booking.date + ' (dữ liệu cũ)';
            customOpt.selected = true;
            editDateEl.appendChild(customOpt);
        }

        // Các trường mở rộng
        document.getElementById('edit-dob').value = booking.dob || '';
        document.getElementById('edit-gender').value = booking.gender || 'Khác';
        document.getElementById('edit-status').value = booking.status || 'Chờ xác nhận cọc';
        document.getElementById('edit-allergy').value = booking.allergy || '';
        document.getElementById('edit-address').value = booking.address || '';
        document.getElementById('edit-diet').value = booking.diet || 'Không';
        document.getElementById('edit-trekking-pole').value = booking.trekking_pole || 'Không';
        document.getElementById('edit-commitments').checked = !!booking.commitments;
        document.getElementById('edit-special').value = booking.special || ''; // Ghi chú sale

        // Tài chính
        document.getElementById('edit-total').value = booking.total_price || 0;
        document.getElementById('edit-deposit').value = booking.deposit || 0;

        // Kích hoạt hàm tính remain
        const updateRemainingCalculation = () => {
            const total = parseInt(document.getElementById('edit-total').value) || 0;
            const deposit = parseInt(document.getElementById('edit-deposit').value) || 0;
            const remaining = total - deposit;
            const remainEl = document.getElementById('edit-remaining');
            if (remainEl) {
                remainEl.textContent = remaining > 0 ? remaining.toLocaleString('vi-VN') + 'đ' : '0đ';
            }
        };
        updateRemainingCalculation();

        // Hiện Modal Edit
        const editModal = document.getElementById('editModal');
        const editModalContent = document.getElementById('editModalContent');
        if (editModal && editModalContent) {
            editModal.classList.remove('hidden');
            setTimeout(() => {
                editModal.classList.add('opacity-100');
                editModalContent.classList.remove('scale-95', 'translate-y-4');
                editModalContent.classList.add('scale-100', 'translate-y-0');
            }, 10);
        }
    };

    window.actionDelete = async (bookingId) => {
        document.getElementById('rowActionModal').classList.add('hidden');
        if (confirm('Bạn có chắc chắn muốn xóa Đơn hàng này? Thao tác không thể hoàn tác.')) {
            try {
                const res = await fetch(`/api/bookings?id=${bookingId}`, { method: 'DELETE' });
                if (res.ok) {
                    alert('✅ Đã xóa đơn hàng thành công!');
                    loadBookings();
                } else {
                    throw new Error('Lỗi từ Server');
                }
            } catch (err) {
                alert('❌ Không thể xóa bảng ghi này: ' + err.message);
            }
        }
    };

    // Logic tính toán số tiền còn lại trong Form Edit
    const updateRemainingCalculation = () => {
        const total = parseInt(document.getElementById('edit-total').value) || 0;
        const deposit = parseInt(document.getElementById('edit-deposit').value) || 0;
        const remaining = total - deposit;
        const remainEl = document.getElementById('edit-remaining');
        if (remainEl) {
            remainEl.textContent = remaining > 0 ? remaining.toLocaleString('vi-VN') + 'đ' : '0đ';
        }
    };

    // Gắn event tự động tính toán
    const editTotalInput = document.getElementById('edit-total');
    const editDepositInput = document.getElementById('edit-deposit');
    if (editTotalInput) editTotalInput.addEventListener('input', updateRemainingCalculation);
    if (editDepositInput) editDepositInput.addEventListener('input', updateRemainingCalculation);

    // Cần phải gán lại event cho 2 nút close cũ 
    const closeBtns = document.querySelectorAll('#bookingModal button[onclick*="hidden"]');
    closeBtns.forEach(btn => {
        btn.removeAttribute('onclick');
        btn.addEventListener('click', window.closeModal);
    });

    // Hàm tự động đồng bộ khách hàng sang CRM (Khách Hàng Thân Thiết)
    const syncToCRM = async (booking) => {
        try {
            const res = await fetch('/api/admin_customers?action=create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    full_name: booking.name,
                    phone: booking.phone,
                    cccd: booking.id_card || '',
                    dob: booking.dob || null,
                    gender: booking.gender || 'Khác',
                    medical_notes: booking.allergy || '',
                    dietary: booking.diet || ''
                })
            });
            const data = await res.json();
            if (data.success && data.csr_code) {
                console.log("✅ Đã đồng bộ CRM thành công:", booking.name, data.csr_code);
                // Update booking with new internal CRM ID
                const updateRes = await fetch('/api/bookings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: booking.id,
                        customer_id: data.csr_code
                    })
                });
                if (updateRes.ok) {
                    console.log("✅ Đã cập nhật Booking mã CRM");
                    if (typeof loadBookings === 'function') loadBookings();
                }
            }
        } catch (err) {
            console.error("❌ Lỗi đồng bộ CRM:", err);
        }
    };

    // Delegation Events cho bảng (Xóa, Edit, View, Ký Cọc, Payment, Row Click)
    const tbody = document.getElementById('bookingsTableBody');
    if (tbody) {
        tbody.addEventListener('click', async (e) => {
            const btn = e.target.closest('.action-btn');

            // XỬ LÝ CLICK VÀO DÒNG (KÍCH HOẠT ACTION MODAL NẾU KHÔNG PHẢI BUTTON)
            if (!btn) {
                const tr = e.target.closest('.row-clickable');
                if (tr) {
                    const bookingId = tr.getAttribute('data-id');
                    const booking = currentBookings.find(b => b.id == bookingId);
                    if (booking) openRowActionModal(booking);
                }
                return;
            }

            const bookingId = btn.getAttribute('data-id');
            const booking = currentBookings.find(b => b.id == bookingId);
            if (!booking) return;

            // Đóng Modal Hành động dòng (nếu có đang mở)
            const rowModal = document.getElementById('rowActionModal');
            if (rowModal) rowModal.classList.add('hidden');

            // XÁC NHẬN CỌC NHANH
            if (btn.classList.contains('confirm-deposit-btn')) {
                if (confirm("Xác nhận khách hàng này đã chuyển khoản đặt cọc?")) {
                    try {
                        btn.disabled = true;
                        btn.classList.add('opacity-50');

                        const res = await fetch('/api/bookings', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                id: bookingId,
                                status: 'Đã cọc'
                            })
                        });

                        if (res.ok) {
                            alert("✅ Đã xác nhận cọc thành công!");
                            // Tự động đồng bộ CRM khi đã cọc
                            syncToCRM(booking);
                            if (typeof loadBookings === 'function') loadBookings();
                        } else {
                            throw new Error('Lỗi cập nhật API');
                        }
                    } catch (err) {
                        alert("❌ Lỗi: " + err.message);
                    } finally {
                        btn.disabled = false;
                        btn.classList.remove('opacity-50');
                    }
                }
                return;
            }

            // XÓA
            if (btn.classList.contains('delete-btn')) {
                window.actionDelete(bookingId);
                return;
            }
            // COPY LINK PROCESS
            else if (btn.classList.contains('process-btn')) {
                const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
                const baseUrl = isLocal
                    ? 'http://localhost:8888'
                    : window.location.origin;

                const url = baseUrl + `/booking/process.html?id=${bookingId}`;
                navigator.clipboard.writeText(url).then(() => {
                    alert('📋 Đã sao chép Link Form Điền Thông Tin Cơ Bản! Gửi cho khách qua Zalo nhé:\\n' + url);
                }).catch(err => {
                    alert('Lỗi khi Copy Clipboard. Link là: ' + url);
                });
            }
            // GỬI LINK CỌC
            else if (btn.classList.contains('send-btn')) {
                // Điểu chỉnh đường dẫn trỏ đúng vào thư mục booking/
                // Note: Đã bật tính năng host static web bằng dev-server.js trên port 8888
                const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
                const baseUrl = isLocal
                    ? 'http://localhost:8888'
                    : window.location.origin;

                const url = baseUrl + `/booking/payment.html?id=${bookingId}`;
                navigator.clipboard.writeText(url).then(() => {
                    alert('📋 Đã sao chép Link Form Đăng Ký Cọc! Gửi cho khách qua Zalo nhé:\\n' + url);
                }).catch(err => {
                    alert('Lỗi khi Copy Clipboard. Link là: ' + url);
                });
            }
            // NÚT THANH TOÁN (PAYMENT)
            else if (btn.classList.contains('payment-btn')) {
                // Link tới Form Cọc / Thanh toán Online
                const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
                const baseUrl = isLocal
                    ? 'http://localhost:8888'
                    : window.location.origin;

                const url = baseUrl + `/booking/payment.html?id=${bookingId}`;
                window.open(url, '_blank');
            }
            // THAO TÁC ROW ACTION MODAL (CHI TIẾT)
            else if (btn.classList.contains('view-btn')) {
                // Đóng menu nếu mở từ Menu Thao Tác Dòng
                document.getElementById('rowActionModal').classList.add('hidden');
                window.actionView(bookingId);
            }
            // SỬA ĐƠN HÀNG - Gọi Edit Form Mở Rộng
            else if (btn.classList.contains('edit-btn')) {
                window.actionEdit(bookingId);
            }
        });
    }

    // Fake Auto-fill logic
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const input = document.getElementById('smartSearch').value;
            const btn = e.target;

            if (!input) {
                alert("Vui lòng nhập Số Điện Thoại hoặc Mã #CSR");
                return;
            }

            btn.innerHTML = `<svg class="animate-spin h-4 w-4 text-gray-900 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
            btn.disabled = true;

            try {
                // Vite Proxy xử lý Endpoint
                const apiUrl = `/api/admin_customers?action=search`;

                const res = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ keyword: input })
                });

                const json = await res.json();

                if (res.ok && json.success) {
                    const customer = json.data;
                    // Đổ dữ liệu vào giao diện tinh gọn bằng ID
                    // Section 1: Định danh
                    if (document.getElementById('addFullName')) document.getElementById('addFullName').value = customer.full_name || '';
                    if (document.getElementById('addPhone')) document.getElementById('addPhone').value = customer.phone || '';
                    if (document.getElementById('addCsrCode')) document.getElementById('addCsrCode').value = customer.csr_code || '';

                    // Section 3: Chi tiết (auto-fill từ CRM)
                    if (document.getElementById('addDob') && customer.dob) {
                        // Convert dob to YYYY-MM-DD for date input
                        let dobVal = customer.dob;
                        if (dobVal.includes('/')) {
                            const parts = dobVal.split('/');
                            dobVal = parts[2] + '-' + parts[1].padStart(2, '0') + '-' + parts[0].padStart(2, '0');
                        }
                        document.getElementById('addDob').value = dobVal;
                    }
                    if (document.getElementById('addGender')) document.getElementById('addGender').value = customer.gender || 'Khác';
                    if (document.getElementById('addIdCard')) document.getElementById('addIdCard').value = customer.cccd || '';
                    if (document.getElementById('addAllergy')) document.getElementById('addAllergy').value = customer.medical_notes || '';
                    if (document.getElementById('addDiet')) document.getElementById('addDiet').value = customer.dietary || 'Bình Thường';
                    if (document.getElementById('addAddress')) document.getElementById('addAddress').value = customer.address || '';
                    if (document.getElementById('addTrekkingPole')) document.getElementById('addTrekkingPole').value = customer.trekking_pole || 'Không';
                    if (document.getElementById('addMedalName')) document.getElementById('addMedalName').value = customer.medal_name || '';

                    // Loyalty Highlight Logic
                    let tagHtml = "";
                    if (customer.loyalty_tier === 'VIP') {
                        tagHtml = `<span class="bg-yellow-500/20 text-yellow-500 ml-2 px-2 py-0.5 rounded text-xs">⭐ Khách VIP - Đã đi ${customer.tour_count} chuyến</span>`;
                    } else if (customer.loyalty_tier === 'Member') {
                        tagHtml = `<span class="bg-csr-orange/20 text-csr-orange ml-2 px-2 py-0.5 rounded text-xs">✨ Thành viên</span>`;
                    }

                    const alertHtml = `
                    <div id="loyalty-alert" class="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-sm flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Đã tải thông tin Auto-fill thành công! ${tagHtml}
                    </div>`;

                    // Remove old alert if exist
                    const existingAlert = document.getElementById('loyalty-alert');
                    if (existingAlert) existingAlert.remove();

                    document.getElementById('smartSearch').parentElement.insertAdjacentHTML('afterend', alertHtml);

                } else {
                    throw new Error(json.message || "Không tìm thấy dữ liệu.");
                }

            } catch (err) {
                alert("❌ " + err.message);
                // Reset form fields
                document.getElementById('bookingForm').reset();
                const existingAlert = document.getElementById('loyalty-alert');
                if (existingAlert) existingAlert.remove();
            } finally {
                btn.innerHTML = 'Tra cứu';
                btn.disabled = false;
            }
        });
    }

    // Xử lý Lưu Form (Tạo Khách Hàng / Đăng Ký Bookings)
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Đang lưu hệ thống...';
            btn.disabled = true;

            try {
                // Thu thập tất cả field từ form
                const fullName = document.getElementById('addFullName').value;
                const phone = document.getElementById('addPhone').value;
                const tourName = document.getElementById('addTourName').value;
                const tourDate = document.getElementById('addTourDate').value;
                const saleTag = document.getElementById('addNote').value;

                // Section 3: Chi tiết (lấy từ form thay vì hardcode null)
                const dob = document.getElementById('addDob').value || null;
                const gender = document.getElementById('addGender').value || 'Khác';
                const idCard = document.getElementById('addIdCard').value || '';
                const address = document.getElementById('addAddress').value || '';
                const diet = document.getElementById('addDiet').value || 'Bình Thường';
                const trekkingPole = document.getElementById('addTrekkingPole').value || 'Không';
                const allergy = document.getElementById('addAllergy').value || '';
                const medalName = document.getElementById('addMedalName') ? document.getElementById('addMedalName').value : '';

                // Lấy profile Sale hiện tại
                const userSessionStr = localStorage.getItem('csr_admin_session');
                let sale_id = null; let sale_name = 'Admin';
                if (userSessionStr) {
                    const session = JSON.parse(userSessionStr);
                    sale_id = session.id;
                    sale_name = session.full_name;
                }

                const editingId = document.getElementById('editingBookingId') ? document.getElementById('editingBookingId').value : '';

                // Tìm giá của tour
                const selectedTourInfo = allTours.find(t => t.name === tourName);
                const defaultTourPrice = selectedTourInfo ? (parseInt(selectedTourInfo.price) || 0) : 0;

                const bookingPayload = {
                    name: fullName,
                    phone: phone,
                    tour: tourName,
                    date: tourDate,
                    status: 'Chờ cọc', // Luôn set là "Chờ cọc" với tạo mới thủ công
                    total_price: defaultTourPrice,
                    deposit: 0,
                    sale_id: sale_id,
                    sale_name: sale_name,
                    customer_id: "", // Không cấp mã khi tạo mới
                    dob: dob,
                    gender: gender,
                    id_card: idCard,
                    address: address,
                    diet: diet,
                    trekking_pole: trekkingPole,
                    allergy: allergy,
                    special: saleTag,
                    medal_name: medalName
                };

                // Nếu có editingId tức là đang ở Mode EDIT Đơn Hàng => Truyền id vào Payloads
                if (editingId) {
                    bookingPayload.id = editingId;
                    // Trạng thái giữ nguyên (không chuyển về Chờ cọc) - Để API Backend tự lo hoặc không ghi đè Status
                    delete bookingPayload.status;
                    delete bookingPayload.deposit;
                    delete bookingPayload.total_price;
                    delete bookingPayload.sale_id; // Giữ nguyên sale cũ
                    delete bookingPayload.sale_name;
                    delete bookingPayload.customer_id; // Giữ nguyên customer_id cũ
                }

                const bookingRes = await fetch('/api/bookings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bookingPayload)
                });

                if (bookingRes.ok) {
                    alert(editingId ? "✅ Đã lưu Cập nhật Đơn hàng!" : "✅ Thêm Đơn Hàng Thành Công! (Khách chờ thông tin/cọc)");
                    window.closeModal();
                    // Clear loyalty alert
                    const existingAlert = document.getElementById('loyalty-alert');
                    if (existingAlert) existingAlert.remove();

                    // Tải lại rổ hàng List Booking Table
                    if (typeof loadBookings === 'function') {
                        loadBookings();
                    } else {
                        window.location.reload();
                    }
                } else {
                    const errDB = await bookingRes.json();
                    throw new Error(errDB.error || "Lỗi tạo Booking!");
                }

            } catch (err) {
                alert("❌ " + err.message);
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    }

    // Xử lý XÁC NHẬN SỬA ĐƠN HÀNG CHI TIẾT
    const editForm = document.getElementById('editForm');
    if (editForm) {
        editForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Đang lưu cập nhật...';
            btn.disabled = true;

            try {
                // Thu thập Dữ liệu Edit
                const bookingId = document.getElementById('edit-id').value;
                const name = document.getElementById('edit-name').value;
                const phone = document.getElementById('edit-phone').value;
                const medalName = document.getElementById('edit-medal-name').value;
                const tour = document.getElementById('edit-tour').value;
                const date = document.getElementById('edit-date').value;
                const dob = document.getElementById('edit-dob').value;
                const gender = document.getElementById('edit-gender').value;
                const status = document.getElementById('edit-status').value;
                const allergy = document.getElementById('edit-allergy').value;
                const address = document.getElementById('edit-address').value;
                const diet = document.getElementById('edit-diet').value;
                const trekking_pole = document.getElementById('edit-trekking-pole').value;
                const commitments = document.getElementById('edit-commitments').checked;
                const special = document.getElementById('edit-special').value;
                const totalText = document.getElementById('edit-total').value;
                const depositText = document.getElementById('edit-deposit').value;
                const total_price = totalText ? parseInt(totalText) : 0;
                const deposit = depositText ? parseInt(depositText) : 0;

                const bookingPayload = {
                    id: bookingId,
                    name: name,
                    phone: phone,
                    medal_name: medalName,
                    tour: tour,
                    date: date,
                    dob: dob,
                    gender: gender,
                    status: status,
                    allergy: allergy,
                    address: address,
                    diet: diet,
                    trekking_pole: trekking_pole,
                    commitments: commitments,
                    special: special,
                    total_price: total_price,
                    deposit: deposit
                };

                // Chỉ Call Update API Bookings
                const res = await fetch('/api/bookings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bookingPayload)
                });

                if (res.ok) {
                    alert("✅ Đã cập nhật thành công Chi tiết Đơn hàng!");
                    // Nếu trạng thái là Đã cọc hoặc Hoàn tất phí, tự động đồng bộ CRM
                    if (status.includes('Đã cọc') || (total_price > 0 && total_price === deposit)) {
                        syncToCRM(bookingPayload);
                    }
                    window.closeEditModal();
                    if (typeof loadBookings === 'function') loadBookings();
                } else {
                    const errDB = await res.json();
                    throw new Error(errDB.error || "Gặp sự cố khi Cập nhật API.");
                }

            } catch (err) {
                alert("❌ Lỗi Cập nhật: " + err.message);
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    }
};
