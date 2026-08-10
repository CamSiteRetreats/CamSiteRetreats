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
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Quản Lý Tour</h1>
                          <p class="text-gray-500 text-sm">Thêm, sửa, xóa các tuyến trekking. Đồng bộ trực tiếp lên Website.</p>
                      </div>
                      <button id="addTourBtn" class="btn-primary flex items-center gap-2">
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                          Thêm Tour Mới
                      </button>
                  </div>

                  <!-- Table -->
                  <div class="glass-panel overflow-hidden">
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse">
                              <thead class="hidden md:table-header-group">
                                  <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                                      <th class="p-4 font-medium">Tour</th>
                                      <th class="p-4 font-medium">Vùng / Loại</th>
                                      <th class="p-4 font-medium">Thời Lượng</th>
                                      <th class="p-4 font-medium">Độ Khó</th>
                                      <th class="p-4 font-medium">Giá</th>
                                      <th class="p-4 font-medium text-center">Hiển Thị</th>
                                      <th class="p-4 font-medium text-right">Thao Tác</th>
                                  </tr>
                              </thead>
                              <tbody id="toursTableBody" class="divide-y divide-csr-border block md:table-row-group">
                              </tbody>
                          </table>
                      </div>
                  </div>
               </div>
          </main>
        </div>
      </div>

      <!-- Add/Edit Tour Modal -->
      <div id="tourModal" class="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-2 md:p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300 transform relative" id="tourModalContent">
              <button id="closeTourModalBtn" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors z-20">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div class="p-5 md:p-8">
                  <h2 id="tourModalTitle" class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Thêm Tour Mới</h2>
                  <form id="tourForm" class="space-y-4 md:space-y-5">
                      <input type="hidden" id="tour-edit-id">

                      <!-- Tab Navigation -->
                      <div class="border-b border-gray-200">
                          <nav class="flex gap-4 md:gap-6 overflow-x-auto pb-1" aria-label="Tabs" id="tour-modal-tabs">
                              <button type="button" class="tab-btn active border-b-2 border-csr-orange py-2 px-1 text-sm font-bold text-csr-orange shrink-0" data-tab="general">Thông tin chung</button>
                              <button type="button" class="tab-btn border-b-2 border-transparent py-2 px-1 text-sm font-semibold text-gray-500 hover:text-gray-700 hover:border-gray-300 shrink-0" data-tab="itinerary">Lộ trình</button>
                              <button type="button" class="tab-btn border-b-2 border-transparent py-2 px-1 text-sm font-semibold text-gray-500 hover:text-gray-700 hover:border-gray-300 shrink-0" data-tab="cost">Chi phí</button>
                              <button type="button" class="tab-btn border-b-2 border-transparent py-2 px-1 text-sm font-semibold text-gray-500 hover:text-gray-700 hover:border-gray-300 shrink-0" data-tab="prep-faq">Chuẩn bị & FAQ</button>
                          </nav>
                      </div>

                      <!-- Tab panels -->
                      <div id="tab-panel-general" class="tab-panel space-y-4 md:space-y-5">
                          <!-- Tên & Mô tả -->
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tên Tour *</label>
                              <input type="text" id="tour-name" class="input-field bg-gray-50 text-base" placeholder="VD: Tà Năng - Phan Dũng" required>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Mô tả ngắn</label>
                              <textarea id="tour-short-desc" class="input-field bg-gray-50 h-20 resize-none text-base" placeholder="Mô tả ngắn hiển thị trên card tour..."></textarea>
                          </div>

                          <!-- Ảnh chính -->
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ảnh chính *</label>
                              <div id="tour-img-zone-main"
                                   class="relative w-full h-36 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden cursor-pointer hover:border-csr-orange transition-colors group flex items-center justify-center bg-gray-50"
                                   ondragover="event.preventDefault(); this.classList.add('border-csr-orange','bg-orange-50');"
                                   ondragleave="this.classList.remove('border-csr-orange','bg-orange-50');"
                                   ondrop="event.preventDefault(); this.classList.remove('border-csr-orange','bg-orange-50'); window.handleTourImgDrop(event,'main');"
                                   onclick="document.getElementById('tour-img-input-main').click()">
                                  <div id="tour-img-preview-main" class="w-full h-full flex flex-col items-center justify-center text-gray-300 gap-1">
                                      <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                      <span class="text-xs font-bold uppercase">Kéo thả hoặc click để chọn ảnh</span>
                                      <span class="text-[10px] text-gray-400">JPG, PNG, WEBP — tối đa 10MB, tự động nén</span>
                                  </div>
                                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hidden" id="tour-img-overlay-main">
                                      <span class="text-white font-bold text-sm">ĐỔI ẢNH</span>
                                  </div>
                              </div>
                              <input type="file" id="tour-img-input-main" accept="image/*" class="hidden" data-slot="main">
                              <input type="hidden" id="tour-image" value="">
                          </div>

                          <!-- Ảnh phụ 1,2,3 -->
                          <div class="grid grid-cols-3 gap-3">
                              ${['2','3','4'].map(n => `
                              <div>
                                  <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Ảnh phụ ${parseInt(n)-1}</label>
                                  <div id="tour-img-zone-${n}"
                                       class="relative h-24 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden cursor-pointer hover:border-csr-orange transition-colors group flex items-center justify-center bg-gray-50"
                                       ondragover="event.preventDefault(); this.classList.add('border-csr-orange','bg-orange-50');"
                                       ondragleave="this.classList.remove('border-csr-orange','bg-orange-50');"
                                       ondrop="event.preventDefault(); this.classList.remove('border-csr-orange','bg-orange-50'); window.handleTourImgDrop(event,'${n}');"
                                       onclick="document.getElementById('tour-img-input-${n}').click()">
                                      <div id="tour-img-preview-${n}" class="w-full h-full flex flex-col items-center justify-center text-gray-300 gap-1">
                                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"/></svg>
                                          <span class="text-[9px] font-bold uppercase">Thêm ảnh</span>
                                      </div>
                                      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hidden" id="tour-img-overlay-${n}">
                                          <span class="text-white font-bold text-[10px]">ĐỔI ẢNH</span>
                                      </div>
                                  </div>
                                  <input type="file" id="tour-img-input-${n}" accept="image/*" class="hidden" data-slot="${n}">
                                  <input type="hidden" id="tour-image${n}" value="">
                              </div>`).join('')}
                          </div>

                          <!-- Thông số -->
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Thời lượng *</label>
                                  <input type="text" id="tour-duration" class="input-field bg-gray-50 text-base" placeholder="2 Ngày 1 Đêm" required>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Giá (VNĐ) *</label>
                                  <input type="text" id="tour-price" class="input-field bg-gray-50 font-bold text-base" placeholder="3000000" required>
                              </div>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Địa điểm cụ thể</label>
                                  <input type="text" id="tour-location" class="input-field bg-gray-50 text-base" placeholder="VD: Di Linh, Lâm Đồng">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Quãng đường (Độ dài)</label>
                                  <input type="text" id="tour-distance" class="input-field bg-gray-50 text-base" placeholder="VD: ~18 km">
                              </div>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Phương tiện</label>
                                  <input type="text" id="tour-transport" class="input-field bg-gray-50 text-base" placeholder="VD: Xe 16 chỗ">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Giới hạn số lượng (Khách)</label>
                                  <input type="text" id="tour-groupsize" class="input-field bg-gray-50 text-base" placeholder="VD: Tối đa 13 khách">
                              </div>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Độ khó</label>
                                  <select id="tour-level" class="input-field bg-gray-50 text-base">
                                      <option value="Dễ">Dễ</option>
                                      <option value="Trung Bình" selected>Trung Bình</option>
                                      <option value="Khó">Khó</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Vùng miền</label>
                                  <select id="tour-region" class="input-field bg-gray-50 text-base">
                                      <option value="Miền Nam">Miền Nam</option>
                                      <option value="Miền Bắc">Miền Bắc</option>
                                      <option value="Miền Trung">Miền Trung</option>
                                  </select>
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Loại hình</label>
                                  <select id="tour-type" class="input-field bg-gray-50 text-base">
                                      <option value="TREKKING">TREKKING</option>
                                      <option value="CAMPING">CAMPING</option>
                                      <option value="CANYONING">CANYONING</option>
                                      <option value="HIKING">HIKING</option>
                                  </select>
                              </div>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Độ cao</label>
                                  <input type="text" id="tour-altitude" class="input-field bg-gray-50 text-base" placeholder="VD: 2.287M">
                              </div>
                              <div>
                                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Thứ tự hiển thị</label>
                                  <input type="number" id="tour-sort-order" class="input-field bg-gray-50 text-base" value="0" placeholder="0">
                              </div>
                          </div>

                          <!-- Domain & Visibility -->
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tên miền riêng (Custom Domain)</label>
                              <input type="text" id="tour-custom-domain" class="input-field bg-gray-50 text-base" placeholder="https://camsiteretreats.com/tour/tanangphandung">
                          </div>
                          <div>
                              <label class="flex items-center gap-3 cursor-pointer py-2">
                                  <input type="checkbox" id="tour-is-visible" checked class="w-6 h-6 rounded border-gray-200 text-csr-orange focus:ring-csr-orange">
                                  <span class="text-base font-bold text-gray-700">Hiển thị tour này trên website</span>
                              </label>
                          </div>
                      </div>

                      <!-- Tab Panel: Lộ trình -->
                      <div id="tab-panel-itinerary" class="tab-panel hidden space-y-4">
                          <div class="flex justify-between items-center mb-2">
                              <h3 class="text-sm font-bold text-gray-700 uppercase tracking-wider">Lộ trình chi tiết</h3>
                              <button type="button" id="add-day-btn" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm Ngày</button>
                          </div>
                          <div id="days-container" class="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                              <!-- Days will be dynamically generated -->
                          </div>
                      </div>

                      <!-- Tab Panel: Chi phí -->
                      <div id="tab-panel-cost" class="tab-panel hidden space-y-6">
                          <div>
                              <div class="flex justify-between items-center mb-3">
                                  <h3 class="text-sm font-bold text-gray-700 uppercase tracking-wider">Chi phí bao gồm (Inclusions)</h3>
                                  <button type="button" id="add-inclusion-btn" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm khoản</button>
                              </div>
                              <div id="inclusions-container" class="space-y-3 max-h-[30vh] overflow-y-auto pr-1">
                                  <!-- Dynamic Inclusions -->
                              </div>
                          </div>
                          <hr class="border-gray-100">
                          <div>
                              <div class="flex justify-between items-center mb-3">
                                  <h3 class="text-sm font-bold text-gray-700 uppercase tracking-wider text-red-500">Chi phí không bao gồm (Exclusions)</h3>
                                  <button type="button" id="add-exclusion-btn" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm khoản</button>
                              </div>
                              <div id="exclusions-container" class="space-y-3 max-h-[30vh] overflow-y-auto pr-1">
                                  <!-- Dynamic Exclusions -->
                              </div>
                          </div>
                      </div>

                      <!-- Tab Panel: Chuẩn bị & FAQ -->
                      <div id="tab-panel-prep-faq" class="tab-panel hidden space-y-6">
                          <div>
                              <div class="flex justify-between items-center mb-3">
                                  <h3 class="text-sm font-bold text-gray-700 uppercase tracking-wider">Vật dụng cần chuẩn bị</h3>
                                  <button type="button" id="add-prep-btn" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm vật dụng</button>
                              </div>
                              <div id="preparing-container" class="space-y-3 max-h-[30vh] overflow-y-auto pr-1">
                                  <!-- Dynamic Preparing -->
                              </div>
                          </div>
                          <hr class="border-gray-100">
                          <div>
                              <div class="flex justify-between items-center mb-3">
                                  <h3 class="text-sm font-bold text-gray-700 uppercase tracking-wider">Câu hỏi thường gặp (FAQs)</h3>
                                  <button type="button" id="add-faq-btn" class="text-xs font-bold text-csr-orange hover:underline">+ Thêm câu hỏi</button>
                              </div>
                              <div id="faqs-container" class="space-y-3 max-h-[30vh] overflow-y-auto pr-1">
                                  <!-- Dynamic FAQs -->
                              </div>
                          </div>
                      </div>

                      <!-- Buttons -->
                      <div class="pt-3 flex gap-3 border-t border-gray-100">
                          <button type="button" id="cancelTourBtn" class="flex-1 min-h-[50px] border border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all">Hủy</button>
                          <button type="submit" class="flex-1 min-h-[50px] bg-csr-orange text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all">Lưu Tour</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    `;
};

export const afterRender = () => {
    const tableBody = document.getElementById('toursTableBody');
    const modal = document.getElementById('tourModal');
    const modalContent = document.getElementById('tourModalContent');
    const form = document.getElementById('tourForm');

    let tours = [];
    const API_TOURS = '/api/admin_tours';

    // --- TAB SYSTEM BINDING ---
    const bindTabEvents = () => {
        const tabBtns = document.querySelectorAll('#tour-modal-tabs .tab-btn');
        const panels = document.querySelectorAll('.tab-panel');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => {
                    b.classList.remove('active', 'border-csr-orange', 'text-csr-orange');
                    b.classList.add('border-transparent', 'text-gray-500');
                    b.classList.remove('font-bold');
                    b.classList.add('font-semibold');
                });
                btn.classList.add('active', 'border-csr-orange', 'text-csr-orange');
                btn.classList.remove('border-transparent', 'text-gray-500');
                btn.classList.remove('font-semibold');
                btn.classList.add('font-bold');

                const activeTab = btn.dataset.tab;
                panels.forEach(p => {
                    if (p.id === `tab-panel-${activeTab}`) {
                        p.classList.remove('hidden');
                    } else {
                        p.classList.add('hidden');
                    }
                });
            });
        });
    };

    const resetTabs = () => {
        const firstTab = document.querySelector('#tour-modal-tabs .tab-btn[data-tab="general"]');
        if (firstTab) firstTab.click();
    };

    // --- DYNAMIC BUILDERS HELPERS ---
    
    // Preset options for Inclusion Images
    const INCLUSION_PRESETS = [
        { value: 'XeTrungChuyen.png', label: 'Xe đưa đón (XeTrungChuyen.png)' },
        { value: 'HuongDanVien-SuaLai.png', label: 'Hướng dẫn viên (HuongDanVien-SuaLai.png)' },
        { value: 'DoAn-SuaLai.png', label: 'Ăn uống (DoAn-SuaLai.png)' },
        { value: 'NuocUong.png', label: 'Nước uống (NuocUong.png)' },
        { value: 'NuocTam-SuaLai_20260113000157.png', label: 'Tắm nước nóng (NuocTam...)' },
        { value: 'GayTrekking.png', label: 'Gậy trekking (GayTrekking.png)' },
        { value: 'HuyChuong.png', label: 'Huy chương (HuyChuong.png)' },
        { value: 'AoMua.png', label: 'Áo mưa (AoMua.png)' },
        { value: 'BaoHiem.png', label: 'Bảo hiểm (BaoHiem.png)' }
    ];

    // Preset options for Preparing Images
    const PREP_PRESETS = [
        { value: 'NMG_giay.png', label: 'Giày Trekking (NMG_giay.png)' },
        { value: 'NMG_balo.png', label: 'Balo Trekking (NMG_balo.png)' },
        { value: 'NMG_quanao.png', label: 'Trang phục (NMG_quanao.png)' },
        { value: 'NMG_dungcu.png', label: 'Dụng cụ cá nhân (NMG_dungcu.png)' }
    ];

    const createDayElement = (dayData = { dayTitle: '', steps: [] }, dayIdx) => {
        const div = document.createElement('div');
        div.className = 'day-block bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3 relative';
        div.dataset.index = dayIdx;

        div.innerHTML = `
            <button type="button" class="remove-day-btn absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors" title="Xóa Ngày">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div>
                <label class="block text-[11px] font-bold text-gray-500 uppercase mb-1">Tên ngày (Ví dụ: Ngày 1: Khám phá...)</label>
                <input type="text" class="day-title-input input-field bg-white text-sm" value="${dayData.dayTitle || ''}" placeholder="VD: Ngày 1: Đỉnh Yang Đoan" required>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <label class="block text-[10px] font-bold text-gray-400 uppercase">Mốc thời gian</label>
                    <button type="button" class="add-time-btn text-[10px] font-bold text-csr-orange hover:underline">+ Thêm mốc</button>
                </div>
                <div class="times-container space-y-2"></div>
            </div>
        `;

        const timesContainer = div.querySelector('.times-container');
        const steps = dayData.steps || [];
        steps.forEach((step, stepIdx) => {
            timesContainer.appendChild(createTimeRowElement(step, dayIdx, stepIdx));
        });

        // Event listener for adding a time
        div.querySelector('.add-time-btn').addEventListener('click', () => {
            const currentStepsCount = timesContainer.children.length;
            timesContainer.appendChild(createTimeRowElement({ time: '', desc: '' }, dayIdx, currentStepsCount));
        });

        // Event listener for removing day
        div.querySelector('.remove-day-btn').addEventListener('click', () => {
            div.remove();
        });

        return div;
    };

    const createTimeRowElement = (stepData = { time: '', desc: '' }, dayIdx, stepIdx) => {
        const div = document.createElement('div');
        div.className = 'time-row flex gap-2 items-center';
        div.innerHTML = `
            <input type="text" class="time-input input-field bg-white text-xs w-20 shrink-0" value="${stepData.time || ''}" placeholder="08h30" required>
            <input type="text" class="desc-input input-field bg-white text-xs" value="${stepData.desc || ''}" placeholder="Đoàn xuất phát..." required>
            <button type="button" class="remove-time-btn p-1 text-gray-400 hover:text-red-500 rounded" title="Xóa mốc">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
        `;
        div.querySelector('.remove-time-btn').addEventListener('click', () => {
            div.remove();
        });
        return div;
    };

    const createInclusionRow = (inclData = { title: '', desc: '', image: 'XeTrungChuyen.png' }) => {
        const div = document.createElement('div');
        div.className = 'inclusion-row flex gap-2 items-center bg-gray-50 p-2.5 rounded-xl border border-gray-150';
        
        const presetOptions = INCLUSION_PRESETS.map(p => 
            `<option value="${p.value}" ${inclData.image === p.value ? 'selected' : ''}>${p.label}</option>`
        ).join('');

        div.innerHTML = `
            <select class="incl-image-select input-field bg-white text-xs w-44 shrink-0">
                ${presetOptions}
                <option value="custom" ${!INCLUSION_PRESETS.some(p => p.value === inclData.image) && inclData.image ? 'selected' : ''}>Tự nhập path...</option>
            </select>
            <input type="text" class="incl-image-custom input-field bg-white text-xs w-32 shrink-0 ${!INCLUSION_PRESETS.some(p => p.value === inclData.image) && inclData.image ? '' : 'hidden'}" value="${inclData.image || ''}" placeholder="đường_dẫn_ảnh.png">
            <input type="text" class="incl-title-input input-field bg-white text-xs w-36 shrink-0" value="${inclData.title || ''}" placeholder="Tiêu đề" required>
            <input type="text" class="incl-desc-input input-field bg-white text-xs" value="${inclData.desc || ''}" placeholder="Mô tả chi tiết" required>
            <button type="button" class="remove-incl-btn p-1 text-gray-400 hover:text-red-500 rounded" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `;

        const imageSelect = div.querySelector('.incl-image-select');
        const customInput = div.querySelector('.incl-image-custom');
        
        imageSelect.addEventListener('change', () => {
            if (imageSelect.value === 'custom') {
                customInput.classList.remove('hidden');
            } else {
                customInput.classList.add('hidden');
                customInput.value = imageSelect.value;
            }
        });

        div.querySelector('.remove-incl-btn').addEventListener('click', () => {
            div.remove();
        });

        return div;
    };

    const createExclusionRow = (exclData = { title: '', desc: '' }) => {
        const div = document.createElement('div');
        div.className = 'exclusion-row flex gap-2 items-start bg-gray-50 p-2.5 rounded-xl border border-gray-150';
        div.innerHTML = `
            <input type="text" class="excl-title-input input-field bg-white text-xs w-44 shrink-0 font-bold text-red-500" value="${exclData.title || ''}" placeholder="VD: Bữa ăn trưa" required>
            <textarea class="excl-desc-input input-field bg-white text-xs h-12 resize-none" placeholder="Mô tả..." required>${exclData.desc || ''}</textarea>
            <button type="button" class="remove-excl-btn p-1 text-gray-400 hover:text-red-500 rounded self-center" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `;
        div.querySelector('.remove-excl-btn').addEventListener('click', () => {
            div.remove();
        });
        return div;
    };

    const createPreparingRow = (prepData = { title: '', desc: '', image: 'NMG_giay.png' }) => {
        const div = document.createElement('div');
        div.className = 'preparing-row flex gap-2 items-center bg-gray-50 p-2.5 rounded-xl border border-gray-150';
        
        const presetOptions = PREP_PRESETS.map(p => 
            `<option value="${p.value}" ${prepData.image === p.value ? 'selected' : ''}>${p.label}</option>`
        ).join('');

        div.innerHTML = `
            <select class="prep-image-select input-field bg-white text-xs w-44 shrink-0">
                ${presetOptions}
            </select>
            <input type="text" class="prep-title-input input-field bg-white text-xs w-36 shrink-0" value="${prepData.title || ''}" placeholder="Giày Trekking" required>
            <input type="text" class="prep-desc-input input-field bg-white text-xs" value="${prepData.desc || ''}" placeholder="Lựa chọn giày có độ bám tốt..." required>
            <button type="button" class="remove-prep-btn p-1 text-gray-400 hover:text-red-500 rounded" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `;
        div.querySelector('.remove-prep-btn').addEventListener('click', () => {
            div.remove();
        });
        return div;
    };

    const createFaqRow = (faqData = { q: '', a: '' }) => {
        const div = document.createElement('div');
        div.className = 'faq-row flex flex-col gap-2 bg-gray-50 p-3 rounded-xl border border-gray-150 relative';
        div.innerHTML = `
            <button type="button" class="remove-faq-btn absolute top-2 right-2 text-gray-400 hover:text-red-500" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <input type="text" class="faq-q-input input-field bg-white text-xs font-bold" value="${faqData.q || ''}" placeholder="Câu hỏi (VD: Tour này có khó đi không?)" required>
            <textarea class="faq-a-input input-field bg-white text-xs h-14 resize-none" placeholder="Trả lời..." required>${faqData.a || ''}</textarea>
        `;
        div.querySelector('.remove-faq-btn').addEventListener('click', () => {
            div.remove();
        });
        return div;
    };

    const renderInclusions = (list = []) => {
        const container = document.getElementById('inclusions-container');
        container.innerHTML = '';
        list.forEach(item => container.appendChild(createInclusionRow(item)));
    };

    const renderExclusions = (list = []) => {
        const container = document.getElementById('exclusions-container');
        container.innerHTML = '';
        list.forEach(item => container.appendChild(createExclusionRow(item)));
    };

    const renderPreparing = (list = []) => {
        const container = document.getElementById('preparing-container');
        container.innerHTML = '';
        list.forEach(item => container.appendChild(createPreparingRow(item)));
    };

    const renderFaqs = (list = []) => {
        const container = document.getElementById('faqs-container');
        container.innerHTML = '';
        list.forEach(item => container.appendChild(createFaqRow(item)));
    };

    const renderItinerary = (list = []) => {
        const container = document.getElementById('days-container');
        container.innerHTML = '';
        list.forEach((day, idx) => container.appendChild(createDayElement(day, idx)));
    };

    // --- MODAL LOGIC ---
    const openModal = (editData = null) => {
        const title = document.getElementById('tourModalTitle');
        if (editData) {
            title.textContent = 'Chỉnh Sửa Tour';
            document.getElementById('tour-edit-id').value = editData.id;
            document.getElementById('tour-name').value = editData.name || '';
            document.getElementById('tour-short-desc').value = editData.short_desc || editData.shortDesc || '';
            // Hiển thị ảnh hiện có vào preview zones
            resetSlotPreview('main', editData.image || '');
            resetSlotPreview('2', editData.image2 || '');
            resetSlotPreview('3', editData.image3 || '');
            resetSlotPreview('4', editData.image4 || '');
            document.getElementById('tour-duration').value = editData.duration || '';
            document.getElementById('tour-price').value = editData.price || '';
            document.getElementById('tour-level').value = editData.level || 'Trung Bình';
            document.getElementById('tour-region').value = editData.region || 'Miền Nam';
            document.getElementById('tour-type').value = editData.type || 'TREKKING';
            document.getElementById('tour-altitude').value = editData.altitude || '';
            document.getElementById('tour-sort-order').value = editData.sort_order || 0;
            document.getElementById('tour-custom-domain').value = editData.custom_domain || '';
            document.getElementById('tour-is-visible').checked = editData.is_visible !== false;

            const specs = editData.specs || {};
            document.getElementById('tour-location').value = specs.location || '';
            document.getElementById('tour-distance').value = specs.distance || '';
            document.getElementById('tour-transport').value = specs.transport || '';
            document.getElementById('tour-groupsize').value = specs.groupSize || '';

            // Render dynamic tabs lists
            renderItinerary(editData.itinerary || []);
            renderInclusions(editData.inclusions || []);
            renderExclusions(editData.exclusions || []);
            renderPreparing(editData.preparing || []);
            renderFaqs(editData.faqs || []);
        } else {
            title.textContent = 'Thêm Tour Mới';
            form.reset();
            document.getElementById('tour-edit-id').value = '';
            document.getElementById('tour-is-visible').checked = true;
            document.getElementById('tour-custom-domain').value = 'https://camsiteretreats.com/tour/';
            // Reset tất cả preview về trạng thái trống
            ['main','2','3','4'].forEach(slot => resetSlotPreview(slot, ''));

            document.getElementById('tour-location').value = '';
            document.getElementById('tour-distance').value = '';
            document.getElementById('tour-transport').value = '';
            document.getElementById('tour-groupsize').value = '';

            // Empty the dynamic lists
            renderItinerary([]);
            renderInclusions([]);
            renderExclusions([]);
            renderPreparing([]);
            renderFaqs([]);
        }

        resetTabs();
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('opacity-100');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);

        // Bind image upload inputs after modal is open
        bindTourImageInputs();
    };

    const closeModal = () => {
        modal.classList.remove('opacity-100');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        setTimeout(() => { modal.classList.add('hidden'); }, 200);
    };

    document.getElementById('addTourBtn').addEventListener('click', () => openModal());
    document.getElementById('closeTourModalBtn').addEventListener('click', closeModal);
    document.getElementById('cancelTourBtn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    // Add buttons list action bindings
    document.getElementById('add-day-btn').addEventListener('click', () => {
        const nextIdx = document.querySelectorAll('.day-block').length;
        document.getElementById('days-container').appendChild(createDayElement({ dayTitle: '', steps: [] }, nextIdx));
    });

    document.getElementById('add-inclusion-btn').addEventListener('click', () => {
        document.getElementById('inclusions-container').appendChild(createInclusionRow());
    });

    document.getElementById('add-exclusion-btn').addEventListener('click', () => {
        document.getElementById('exclusions-container').appendChild(createExclusionRow());
    });

    document.getElementById('add-prep-btn').addEventListener('click', () => {
        document.getElementById('preparing-container').appendChild(createPreparingRow());
    });

    document.getElementById('add-faq-btn').addEventListener('click', () => {
        document.getElementById('faqs-container').appendChild(createFaqRow());
    });

    bindTabEvents();

    // ── IMAGE UPLOAD HELPERS ────────────────────────────────────────────────
    const SLOTS = ['main', '2', '3', '4'];

    /** Cập nhật preview zone sau khi upload thành công */
    const setSlotPreview = (slot, url) => {
        const previewEl = document.getElementById(`tour-img-preview-${slot}`);
        const overlayEl = document.getElementById(`tour-img-overlay-${slot}`);
        const zone = document.getElementById(`tour-img-zone-${slot}`);
        if (!previewEl) return;
        // Thay nội dung preview bằng ảnh thật
        previewEl.innerHTML = `<img src="${url}" class="w-full h-full object-cover" alt="preview">`;
        previewEl.className = 'w-full h-full';
        if (overlayEl) overlayEl.classList.remove('hidden');
    };

    /** Reset preview về trạng thái ban đầu (khi mở modal thêm mới) */
    const resetSlotPreview = (slot, url) => {
        const previewEl = document.getElementById(`tour-img-preview-${slot}`);
        const overlayEl = document.getElementById(`tour-img-overlay-${slot}`);
        const hiddenInput = document.getElementById(slot === 'main' ? 'tour-image' : `tour-image${slot}`);
        if (!previewEl) return;
        if (url) {
            previewEl.innerHTML = `<img src="${url}" class="w-full h-full object-cover" alt="preview">`;
            previewEl.className = 'w-full h-full';
            if (overlayEl) overlayEl.classList.remove('hidden');
        } else {
            const isMain = slot === 'main';
            previewEl.innerHTML = isMain
                ? `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><span class="text-xs font-bold uppercase">Kéo thả hoặc click để chọn ảnh</span><span class="text-[10px] text-gray-400">JPG, PNG, WEBP — tối đa 10MB, tự động nén</span>`
                : `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"/></svg><span class="text-[9px] font-bold uppercase">Thêm ảnh</span>`;
            previewEl.className = 'w-full h-full flex flex-col items-center justify-center text-gray-300 gap-1';
            if (overlayEl) overlayEl.classList.add('hidden');
        }
        if (hiddenInput) hiddenInput.value = url || '';
    };

    /** Nén ảnh bằng Canvas (client-side): max 1200px, quality 85% */
    const compressTourImage = (file) => new Promise((resolve, reject) => {
        const MAX_PX = 1200;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                let { width, height } = img;
                if (width > MAX_PX || height > MAX_PX) {
                    if (width > height) { height = Math.round(height * MAX_PX / width); width = MAX_PX; }
                    else               { width  = Math.round(width * MAX_PX / height);  height = MAX_PX; }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width; canvas.height = height;
                canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', 0.85));
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

    /** Upload 1 file ảnh → server → cập nhật zone + hidden input */
    const uploadTourImage = async (file, slot) => {
        const previewEl = document.getElementById(`tour-img-preview-${slot}`);
        const hiddenInput = document.getElementById(slot === 'main' ? 'tour-image' : `tour-image${slot}`);
        if (!previewEl) return;

        // Hiển thị spinner
        previewEl.innerHTML = `<svg class="animate-spin w-7 h-7 text-csr-orange" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>`;
        previewEl.className = 'w-full h-full flex items-center justify-center';

        try {
            const base64 = await compressTourImage(file);
            const safeName = (file.name || `tour-${slot}`).replace(/\.[^.]+$/, '');
            const res = await fetch('/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image: base64, filename: `tour-${safeName}` }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.error || 'Upload thất bại');

            setSlotPreview(slot, data.url);
            if (hiddenInput) hiddenInput.value = data.url;
            console.log(`[tour-upload] ✅ slot=${slot} ${data.stats?.inputKB}KB → ${data.stats?.outputKB}KB`);
        } catch (err) {
            previewEl.innerHTML = `<span class="text-red-400 text-xs text-center p-2">❌ Lỗi: ${err.message}</span>`;
            previewEl.className = 'w-full h-full flex items-center justify-center';
            alert('Lỗi upload ảnh: ' + err.message);
        }
    };

    /** Bind file-input change cho 4 slot ảnh */
    const bindTourImageInputs = () => {
        SLOTS.forEach(slot => {
            const input = document.getElementById(`tour-img-input-${slot}`);
            if (!input || input.dataset.bound) return;
            input.dataset.bound = '1';
            input.addEventListener('change', (e) => {
                const file = e.target.files?.[0];
                if (file) uploadTourImage(file, slot);
            });
        });
    };

    /** Handler drag-drop (inline HTML gọi qua window) */
    window.handleTourImgDrop = (event, slot) => {
        const file = event.dataTransfer?.files?.[0];
        if (file && file.type.startsWith('image/')) uploadTourImage(file, slot);
    };

    // --- LOAD TOURS ---
    const loadTours = async () => {
        tableBody.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-gray-400">Đang tải danh sách tour...</td></tr>`;
        try {
            const res = await fetch(API_TOURS);
            if (!res.ok) throw new Error('Failed to load tours');
            const data = await res.json();
            tours = Array.isArray(data) ? data : (data.data || []);
            renderTable();
        } catch (err) {
            console.error('Error loading tours:', err);
            tableBody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-red-500">Lỗi kết nối server.</td></tr>`;
        }
    };

    // --- RENDER TABLE ---
    const renderTable = () => {
        if (tours.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-gray-400">Chưa có tour nào.</td></tr>`;
            return;
        }

        tableBody.innerHTML = tours.map(t => {
            const priceDisplay = (!t.price || t.price === 'Update' || t.price === '0' || parseInt(t.price) === 0)
                ? '<span class="text-gray-400 italic">Update...</span>'
                : `<span class="font-bold text-csr-orange">${parseInt(t.price).toLocaleString('vi-VN')}đ</span>`;

            const levelColor = t.level === 'Dễ' ? 'bg-green-100 text-green-700'
                : t.level === 'Khó' ? 'bg-red-100 text-red-600'
                    : 'bg-orange-100 text-orange-700';

            const visibleBadge = t.is_visible !== false
                ? '<span class="bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-full font-bold">Hiển thị</span>'
                : '<span class="bg-gray-200 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-bold">Đã ẩn</span>';

            return `
                <tr class="hover:bg-gray-50 transition-colors group block md:table-row border-b md:border-none p-4 md:p-0" data-tour-id="${t.id}">
                    <td class="p-0 md:p-4 block md:table-cell mb-4 md:mb-0">
                        <div class="flex items-center gap-3">
                            <div class="w-16 h-16 md:w-12 md:h-12 rounded-xl bg-gray-100 overflow-hidden border border-gray-200 shrink-0">
                                <img src="${t.image || ''}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/100x100/f3f4f6/9ca3af?text=No+Img'" loading="lazy">
                            </div>
                            <div class="min-w-0">
                                <div class="font-bold text-base md:text-sm text-gray-900 group-hover:text-csr-orange transition-colors truncate">${t.name}</div>
                                <div class="text-[10px] text-gray-400 truncate max-w-[200px]">${t.short_desc || t.shortDesc || ''}</div>
                                <div class="flex items-center gap-2 mt-1 md:hidden">
                                     <span class="px-2 py-0.5 ${levelColor} rounded text-[10px] font-bold uppercase">${t.level || '-'}</span>
                                     ${visibleBadge}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="hidden md:table-cell p-4 text-sm text-gray-500">
                        <div>${t.region || '-'}</div>
                        <div class="text-[10px] uppercase font-bold text-gray-400">${t.type || '-'}</div>
                    </td>
                    <td class="hidden md:table-cell p-4 text-sm text-gray-600">${t.duration || '-'}</td>
                    <td class="hidden md:table-cell p-4">
                        <span class="px-2 py-0.5 ${levelColor} rounded text-[10px] font-bold uppercase">${t.level || '-'}</span>
                    </td>
                    <td class="p-0 md:p-4 block md:table-cell mb-4 md:mb-0">
                        <div class="flex justify-between items-center md:block">
                            <span class="text-xs font-bold text-gray-400 uppercase md:hidden tracking-wider">Giá tour</span>
                            <div class="text-sm md:text-base">${priceDisplay}</div>
                        </div>
                    </td>
                    <td class="hidden md:table-cell p-4 text-center">${visibleBadge}</td>
                    <td class="p-0 md:p-4 block md:table-cell">
                        <div class="flex items-center justify-end md:justify-end gap-2 md:gap-1">
                            <button class="tour-edit-btn p-3 md:p-2 text-gray-500 md:text-gray-400 hover:text-blue-500 hover:bg-blue-50 bg-gray-100 md:bg-transparent rounded-xl md:rounded-lg transition-colors flex-1 md:flex-none justify-center flex items-center gap-2 md:block" data-id="${t.id}" title="Sửa">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                <span class="md:hidden font-bold text-sm">Sửa</span>
                            </button>
                            <a href="/admin/tour-settings?id=${t.id}" data-link class="p-3 md:p-2 text-gray-500 md:text-gray-400 hover:text-orange-500 hover:bg-orange-50 bg-gray-100 md:bg-transparent rounded-xl md:rounded-lg transition-colors inline-flex flex-1 md:flex-none justify-center items-center gap-2 md:block" title="Thiết lập đăng ký">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
                                <span class="md:hidden font-bold text-sm">Cài đặt</span>
                            </a>
                            <button class="tour-delete-btn p-3 md:p-2 text-gray-500 md:text-gray-400 hover:text-red-500 hover:bg-red-50 bg-gray-100 md:bg-transparent rounded-xl md:rounded-lg transition-colors flex-1 md:flex-none justify-center flex items-center gap-2 md:block" data-id="${t.id}" title="Xóa">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                <span class="md:hidden font-bold text-sm">Xóa</span>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    };

    // --- TABLE ACTION HANDLER (Event Delegation) ---
    tableBody.addEventListener('click', async (e) => {
        const editBtn = e.target.closest('.tour-edit-btn');
        const deleteBtn = e.target.closest('.tour-delete-btn');

        if (editBtn) {
            const id = parseInt(editBtn.getAttribute('data-id'));
            const t = tours.find(x => x.id === id);
            if (t) openModal(t);
        }

        if (deleteBtn) {
            const id = deleteBtn.getAttribute('data-id');
            if (confirm('Dữ liệu lịch trình liên quan có thể bị ảnh hưởng. Bạn vẫn muốn xóa tour này?')) {
                try {
                    const res = await fetch(`${API_TOURS}?id=${id}`, { method: 'DELETE' });
                    if (res.ok) {
                        loadTours();
                    } else {
                        throw new Error('Delete failed');
                    }
                } catch (err) {
                    alert('Lỗi khi xóa: ' + err.message);
                }
            }
        }
    });

    // --- SAVE TOUR (Create / Update) ---
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Đang lưu...';
        btn.disabled = true;

        const id = document.getElementById('tour-edit-id').value;

        // Serialize Itinerary
        const itinerary = [];
        document.querySelectorAll('.day-block').forEach(dayBlock => {
            const dayTitle = dayBlock.querySelector('.day-title-input').value.trim();
            const steps = [];
            dayBlock.querySelectorAll('.time-row').forEach(timeRow => {
                const time = timeRow.querySelector('.time-input').value.trim();
                const desc = timeRow.querySelector('.desc-input').value.trim();
                if (time || desc) {
                    steps.push({ time, desc });
                }
            });
            if (dayTitle) {
                itinerary.push({ dayTitle, steps });
            }
        });

        // Serialize Inclusions
        const inclusions = [];
        document.querySelectorAll('.inclusion-row').forEach(row => {
            const selectVal = row.querySelector('.incl-image-select').value;
            const customVal = row.querySelector('.incl-image-custom').value.trim();
            const image = selectVal === 'custom' ? customVal : selectVal;
            const title = row.querySelector('.incl-title-input').value.trim();
            const desc = row.querySelector('.incl-desc-input').value.trim();
            if (title) {
                inclusions.push({ title, desc, image });
            }
        });

        // Serialize Exclusions
        const exclusions = [];
        document.querySelectorAll('.exclusion-row').forEach(row => {
            const title = row.querySelector('.excl-title-input').value.trim();
            const desc = row.querySelector('.excl-desc-input').value.trim();
            if (title) {
                exclusions.push({ title, desc });
            }
        });

        // Serialize Preparing
        const preparing = [];
        document.querySelectorAll('.preparing-row').forEach(row => {
            const image = row.querySelector('.prep-image-select').value;
            const title = row.querySelector('.prep-title-input').value.trim();
            const desc = row.querySelector('.prep-desc-input').value.trim();
            if (title) {
                preparing.push({ title, desc, image });
            }
        });

        // Serialize FAQs
        const faqs = [];
        document.querySelectorAll('.faq-row').forEach(row => {
            const q = row.querySelector('.faq-q-input').value.trim();
            const a = row.querySelector('.faq-a-input').value.trim();
            if (q) {
                faqs.push({ q, a });
            }
        });

        const specs = {
            location: document.getElementById('tour-location').value.trim() || null,
            distance: document.getElementById('tour-distance').value.trim() || null,
            transport: document.getElementById('tour-transport').value.trim() || null,
            groupSize: document.getElementById('tour-groupsize').value.trim() || null
        };

        const payload = {
            id: id ? parseInt(id) : null,
            name: document.getElementById('tour-name').value,
            image: document.getElementById('tour-image').value,
            image2: document.getElementById('tour-image2').value || null,
            image3: document.getElementById('tour-image3').value || null,
            image4: document.getElementById('tour-image4').value || null,
            shortDesc: document.getElementById('tour-short-desc').value,
            altitude: document.getElementById('tour-altitude').value || null,
            level: document.getElementById('tour-level').value,
            region: document.getElementById('tour-region').value,
            type: document.getElementById('tour-type').value,
            duration: document.getElementById('tour-duration').value,
            price: document.getElementById('tour-price').value,
            sort_order: parseInt(document.getElementById('tour-sort-order').value) || 0,
            custom_domain: document.getElementById('tour-custom-domain').value.trim() || null,
            is_visible: document.getElementById('tour-is-visible').checked,
            
            specs,
            itinerary,
            inclusions,
            exclusions,
            preparing,
            faqs
        };

        try {
            const url = id ? `${API_TOURS}?id=${id}` : API_TOURS;
            const method = id ? 'PUT' : 'POST';
            const res = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || errData.error || 'Save failed');
            }

            closeModal();
            loadTours();
            alert(id ? '✅ Cập nhật tour thành công!' : '✅ Thêm tour mới thành công! Website sẽ tự đồng bộ trong vài giây.');
        } catch (err) {
            alert('❌ Lỗi: ' + err.message);
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    });

    // --- INIT ---
    loadTours();
};
