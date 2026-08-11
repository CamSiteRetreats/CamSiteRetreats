import{S as U,H as Q}from"./Header-CARqqxjt.js";const J=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${U()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${Q()}
          
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
                              ${["2","3","4"].map(u=>`
                              <div>
                                  <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1">Ảnh phụ ${parseInt(u)-1}</label>
                                  <div id="tour-img-zone-${u}"
                                       class="relative h-24 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden cursor-pointer hover:border-csr-orange transition-colors group flex items-center justify-center bg-gray-50"
                                       ondragover="event.preventDefault(); this.classList.add('border-csr-orange','bg-orange-50');"
                                       ondragleave="this.classList.remove('border-csr-orange','bg-orange-50');"
                                       ondrop="event.preventDefault(); this.classList.remove('border-csr-orange','bg-orange-50'); window.handleTourImgDrop(event,'${u}');"
                                       onclick="document.getElementById('tour-img-input-${u}').click()">
                                      <div id="tour-img-preview-${u}" class="w-full h-full flex flex-col items-center justify-center text-gray-300 gap-1">
                                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"/></svg>
                                          <span class="text-[9px] font-bold uppercase">Thêm ảnh</span>
                                      </div>
                                      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hidden" id="tour-img-overlay-${u}">
                                          <span class="text-white font-bold text-[10px]">ĐỔI ẢNH</span>
                                      </div>
                                  </div>
                                  <input type="file" id="tour-img-input-${u}" accept="image/*" class="hidden" data-slot="${u}">
                                  <input type="hidden" id="tour-image${u}" value="">
                              </div>`).join("")}
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
    `,Y=()=>{const u=document.getElementById("toursTableBody"),b=document.getElementById("tourModal"),f=document.getElementById("tourModalContent"),T=document.getElementById("tourForm");let k=[];const w="/api/admin_tours",X=()=>{const e=document.querySelectorAll("#tour-modal-tabs .tab-btn"),t=document.querySelectorAll(".tab-panel");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(r=>{r.classList.remove("active","border-csr-orange","text-csr-orange"),r.classList.add("border-transparent","text-gray-500"),r.classList.remove("font-bold"),r.classList.add("font-semibold")}),n.classList.add("active","border-csr-orange","text-csr-orange"),n.classList.remove("border-transparent","text-gray-500"),n.classList.remove("font-semibold"),n.classList.add("font-bold");const o=n.dataset.tab;t.forEach(r=>{r.id===`tab-panel-${o}`?r.classList.remove("hidden"):r.classList.add("hidden")})})})},V=()=>{const e=document.querySelector('#tour-modal-tabs .tab-btn[data-tab="general"]');e&&e.click()},B=[{value:"XeTrungChuyen.png",label:"Xe đưa đón (XeTrungChuyen.png)"},{value:"HuongDanVien-SuaLai.png",label:"Hướng dẫn viên (HuongDanVien-SuaLai.png)"},{value:"DoAn-SuaLai.png",label:"Ăn uống (DoAn-SuaLai.png)"},{value:"NuocUong.png",label:"Nước uống (NuocUong.png)"},{value:"NuocTam-SuaLai_20260113000157.png",label:"Tắm nước nóng (NuocTam...)"},{value:"GayTrekking.png",label:"Gậy trekking (GayTrekking.png)"},{value:"HuyChuong.png",label:"Huy chương (HuyChuong.png)"},{value:"AoMua.png",label:"Áo mưa (AoMua.png)"},{value:"BaoHiem.png",label:"Bảo hiểm (BaoHiem.png)"}],z=[{value:"NMG_giay.png",label:"Giày Trekking (NMG_giay.png)"},{value:"NMG_balo.png",label:"Balo Trekking (NMG_balo.png)"},{value:"NMG_quanao.png",label:"Trang phục (NMG_quanao.png)"},{value:"NMG_dungcu.png",label:"Dụng cụ cá nhân (NMG_dungcu.png)"}],L=(e={dayTitle:"",steps:[]},t)=>{const n=document.createElement("div");n.className="day-block bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3 relative",n.dataset.index=t,n.innerHTML=`
            <button type="button" class="remove-day-btn absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors" title="Xóa Ngày">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div>
                <label class="block text-[11px] font-bold text-gray-500 uppercase mb-1">Tên ngày (Ví dụ: Ngày 1: Khám phá...)</label>
                <input type="text" class="day-title-input input-field bg-white text-sm" value="${e.dayTitle||""}" placeholder="VD: Ngày 1: Đỉnh Yang Đoan" required>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <label class="block text-[10px] font-bold text-gray-400 uppercase">Mốc thời gian</label>
                    <button type="button" class="add-time-btn text-[10px] font-bold text-csr-orange hover:underline">+ Thêm mốc</button>
                </div>
                <div class="times-container space-y-2"></div>
            </div>
        `;const o=n.querySelector(".times-container");return(e.steps||[]).forEach((i,p)=>{o.appendChild(M(i))}),n.querySelector(".add-time-btn").addEventListener("click",()=>{o.children.length,o.appendChild(M({time:"",desc:""}))}),n.querySelector(".remove-day-btn").addEventListener("click",()=>{n.remove()}),n},M=(e={time:"",desc:""},t,n)=>{const o=document.createElement("div");return o.className="time-row flex gap-2 items-center",o.innerHTML=`
            <input type="text" class="time-input input-field bg-white text-xs w-20 shrink-0" value="${e.time||""}" placeholder="08h30" required>
            <input type="text" class="desc-input input-field bg-white text-xs" value="${e.desc||""}" placeholder="Đoàn xuất phát..." required>
            <button type="button" class="remove-time-btn p-1 text-gray-400 hover:text-red-500 rounded" title="Xóa mốc">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
        `,o.querySelector(".remove-time-btn").addEventListener("click",()=>{o.remove()}),o},q=(e={title:"",desc:"",image:"XeTrungChuyen.png"})=>{const t=document.createElement("div");t.className="inclusion-row flex gap-2 items-center bg-gray-50 p-2.5 rounded-xl border border-gray-150";const n=B.map(i=>`<option value="${i.value}" ${e.image===i.value?"selected":""}>${i.label}</option>`).join("");t.innerHTML=`
            <select class="incl-image-select input-field bg-white text-xs w-44 shrink-0">
                ${n}
                <option value="custom" ${!B.some(i=>i.value===e.image)&&e.image?"selected":""}>Tự nhập path...</option>
            </select>
            <input type="text" class="incl-image-custom input-field bg-white text-xs w-32 shrink-0 ${!B.some(i=>i.value===e.image)&&e.image?"":"hidden"}" value="${e.image||""}" placeholder="đường_dẫn_ảnh.png">
            <input type="text" class="incl-title-input input-field bg-white text-xs w-36 shrink-0" value="${e.title||""}" placeholder="Tiêu đề" required>
            <input type="text" class="incl-desc-input input-field bg-white text-xs" value="${e.desc||""}" placeholder="Mô tả chi tiết" required>
            <button type="button" class="remove-incl-btn p-1 text-gray-400 hover:text-red-500 rounded" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `;const o=t.querySelector(".incl-image-select"),r=t.querySelector(".incl-image-custom");return o.addEventListener("change",()=>{o.value==="custom"?r.classList.remove("hidden"):(r.classList.add("hidden"),r.value=o.value)}),t.querySelector(".remove-incl-btn").addEventListener("click",()=>{t.remove()}),t},$=(e={title:"",desc:""})=>{const t=document.createElement("div");return t.className="exclusion-row flex gap-2 items-start bg-gray-50 p-2.5 rounded-xl border border-gray-150",t.innerHTML=`
            <input type="text" class="excl-title-input input-field bg-white text-xs w-44 shrink-0 font-bold text-red-500" value="${e.title||""}" placeholder="VD: Bữa ăn trưa" required>
            <textarea class="excl-desc-input input-field bg-white text-xs h-12 resize-none" placeholder="Mô tả..." required>${e.desc||""}</textarea>
            <button type="button" class="remove-excl-btn p-1 text-gray-400 hover:text-red-500 rounded self-center" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `,t.querySelector(".remove-excl-btn").addEventListener("click",()=>{t.remove()}),t},C=(e={title:"",desc:"",image:"NMG_giay.png"})=>{const t=document.createElement("div");t.className="preparing-row flex gap-2 items-center bg-gray-50 p-2.5 rounded-xl border border-gray-150";const n=z.map(o=>`<option value="${o.value}" ${e.image===o.value?"selected":""}>${o.label}</option>`).join("");return t.innerHTML=`
            <select class="prep-image-select input-field bg-white text-xs w-44 shrink-0">
                ${n}
            </select>
            <input type="text" class="prep-title-input input-field bg-white text-xs w-36 shrink-0" value="${e.title||""}" placeholder="Giày Trekking" required>
            <input type="text" class="prep-desc-input input-field bg-white text-xs" value="${e.desc||""}" placeholder="Lựa chọn giày có độ bám tốt..." required>
            <button type="button" class="remove-prep-btn p-1 text-gray-400 hover:text-red-500 rounded" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        `,t.querySelector(".remove-prep-btn").addEventListener("click",()=>{t.remove()}),t},N=(e={q:"",a:""})=>{const t=document.createElement("div");return t.className="faq-row flex flex-col gap-2 bg-gray-50 p-3 rounded-xl border border-gray-150 relative",t.innerHTML=`
            <button type="button" class="remove-faq-btn absolute top-2 right-2 text-gray-400 hover:text-red-500" title="Xóa">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <input type="text" class="faq-q-input input-field bg-white text-xs font-bold" value="${e.q||""}" placeholder="Câu hỏi (VD: Tour này có khó đi không?)" required>
            <textarea class="faq-a-input input-field bg-white text-xs h-14 resize-none" placeholder="Trả lời..." required>${e.a||""}</textarea>
        `,t.querySelector(".remove-faq-btn").addEventListener("click",()=>{t.remove()}),t},S=(e=[])=>{const t=document.getElementById("inclusions-container");t.innerHTML="",e.forEach(n=>t.appendChild(q(n)))},H=(e=[])=>{const t=document.getElementById("exclusions-container");t.innerHTML="",e.forEach(n=>t.appendChild($(n)))},j=(e=[])=>{const t=document.getElementById("preparing-container");t.innerHTML="",e.forEach(n=>t.appendChild(C(n)))},A=(e=[])=>{const t=document.getElementById("faqs-container");t.innerHTML="",e.forEach(n=>t.appendChild(N(n)))},G=(e=[])=>{const t=document.getElementById("days-container");t.innerHTML="",e.forEach((n,o)=>t.appendChild(L(n,o)))},_=(e=null)=>{const t=document.getElementById("tourModalTitle");if(e){t.textContent="Chỉnh Sửa Tour",document.getElementById("tour-edit-id").value=e.id,document.getElementById("tour-name").value=e.name||"",document.getElementById("tour-short-desc").value=e.short_desc||e.shortDesc||"",y("main",e.image||""),y("2",e.image2||""),y("3",e.image3||""),y("4",e.image4||""),document.getElementById("tour-duration").value=e.duration||"",document.getElementById("tour-price").value=e.price||"",document.getElementById("tour-level").value=e.level||"Trung Bình",document.getElementById("tour-region").value=e.region||"Miền Nam",document.getElementById("tour-type").value=e.type||"TREKKING",document.getElementById("tour-altitude").value=e.altitude||"",document.getElementById("tour-sort-order").value=e.sort_order||0,document.getElementById("tour-custom-domain").value=e.custom_domain||"",document.getElementById("tour-is-visible").checked=e.is_visible!==!1;const n=e.specs||{};document.getElementById("tour-location").value=n.location||"",document.getElementById("tour-distance").value=n.distance||"",document.getElementById("tour-transport").value=n.transport||"",document.getElementById("tour-groupsize").value=n.groupSize||"",G(e.itinerary||[]),S(e.inclusions||[]),H(e.exclusions||[]),j(e.preparing||[]),A(e.faqs||[])}else{t.textContent="Thêm Tour Mới",T.reset(),document.getElementById("tour-edit-id").value="",document.getElementById("tour-is-visible").checked=!0,document.getElementById("tour-custom-domain").value="https://camsiteretreats.com/tour/",["main","2","3","4"].forEach(p=>y(p,"")),document.getElementById("tour-location").value="",document.getElementById("tour-distance").value="",document.getElementById("tour-transport").value="",document.getElementById("tour-groupsize").value="";const n=[{title:"Xe đưa đón",desc:"Di chuyển bằng xe du lịch đời mới, đưa đón 2 chiều từ điểm hẹn.",image:"XeTrungChuyen.png"},{title:"Hướng dẫn viên",desc:"Đội ngũ HDV chuyên nghiệp, nhiệt tình, hỗ trợ suốt tuyến.",image:"HuongDanVien-SuaLai.png"},{title:"Ăn uống",desc:"Các bữa ăn chất lượng theo chương trình dã ngoại.",image:"DoAn-SuaLai.png"},{title:"Bảo hiểm du lịch",desc:"Bảo hiểm du lịch trọn gói theo quy định.",image:"BaoHiem.png"},{title:"Dụng cụ cắm trại",desc:"Lều trại, túi ngủ, thảm cách nhiệt tiêu chuẩn chất lượng.",image:"Leu-SuaLai.png"}],o=[{title:"Thuế VAT",desc:"Chi phí chưa bao gồm thuế giá trị gia tăng (VAT) nếu cần xuất hóa đơn."},{title:"Chi phí cá nhân",desc:"Điện thoại, giặt ủi, nước uống tự gọi ngoài chương trình."},{title:"Tip cho HDV",desc:"Tiền tip cho đội ngũ phục vụ (tùy hỷ theo mức độ hài lòng)."}],r=[{title:"Giày Trekking",desc:"Lựa chọn giày có độ bám tốt, ưu tiên cao cổ bảo vệ cổ chân. Nên chọn kích cỡ lớn hơn chân từ 1-2 size để tránh đau mũi chân khi xuống dốc.",image:"NMG_giay.png"},{title:"Balo Trekking",desc:"Sử dụng balo có hệ thống trợ lực để giảm áp lực cột sống. Nên sắp xếp đồ nặng sát lưng và cân đối hai bên.",image:"NMG_balo.png"},{title:"Trang phục",desc:"Ưu tiên chất liệu khô nhanh (Quick-dry), thoáng khí. Nên mang theo áo khoác gió mỏng và quần dài để tránh trầy xước.",image:"NMG_quanao.png"},{title:"Dụng cụ cá nhân",desc:"Cần chuẩn bị sạc dự phòng, đèn pin, kem chống nắng và thuốc xịt côn trùng. Gậy trekking là một trợ thủ đắc lực.",image:"NMG_dungcu.png"}];G([{dayTitle:"Ngày 1: Xuất phát & Trải nghiệm",steps:[{time:"05:00",desc:"Tập trung tại điểm hẹn và di chuyển."},{time:"11:30",desc:"Dùng bữa trưa và nhận lều trại."}]}]),S(n),H(o),j(r),A([])}V(),b.classList.remove("hidden"),setTimeout(()=>{b.classList.add("opacity-100"),f.classList.remove("scale-95"),f.classList.add("scale-100")},10),O()},E=()=>{b.classList.remove("opacity-100"),f.classList.remove("scale-100"),f.classList.add("scale-95"),setTimeout(()=>{b.classList.add("hidden")},200)};document.getElementById("addTourBtn").addEventListener("click",()=>_()),document.getElementById("closeTourModalBtn").addEventListener("click",E),document.getElementById("cancelTourBtn").addEventListener("click",E),b.addEventListener("click",e=>{e.target===b&&E()}),document.getElementById("add-day-btn").addEventListener("click",()=>{const e=document.querySelectorAll(".day-block").length;document.getElementById("days-container").appendChild(L({dayTitle:"",steps:[]},e))}),document.getElementById("add-inclusion-btn").addEventListener("click",()=>{document.getElementById("inclusions-container").appendChild(q())}),document.getElementById("add-exclusion-btn").addEventListener("click",()=>{document.getElementById("exclusions-container").appendChild($())}),document.getElementById("add-prep-btn").addEventListener("click",()=>{document.getElementById("preparing-container").appendChild(C())}),document.getElementById("add-faq-btn").addEventListener("click",()=>{document.getElementById("faqs-container").appendChild(N())}),X();const K=["main","2","3","4"],D=(e,t)=>{const n=document.getElementById(`tour-img-preview-${e}`),o=document.getElementById(`tour-img-overlay-${e}`);document.getElementById(`tour-img-zone-${e}`),n&&(n.innerHTML=`<img src="${t}" class="w-full h-full object-cover" alt="preview">`,n.className="w-full h-full",o&&o.classList.remove("hidden"))},y=(e,t)=>{const n=document.getElementById(`tour-img-preview-${e}`),o=document.getElementById(`tour-img-overlay-${e}`),r=document.getElementById(e==="main"?"tour-image":`tour-image${e}`);if(n){if(t)n.innerHTML=`<img src="${t}" class="w-full h-full object-cover" alt="preview">`,n.className="w-full h-full",o&&o.classList.remove("hidden");else{const i=e==="main";n.innerHTML=i?'<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><span class="text-xs font-bold uppercase">Kéo thả hoặc click để chọn ảnh</span><span class="text-[10px] text-gray-400">JPG, PNG, WEBP — tối đa 10MB, tự động nén</span>':'<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"/></svg><span class="text-[9px] font-bold uppercase">Thêm ảnh</span>',n.className="w-full h-full flex flex-col items-center justify-center text-gray-300 gap-1",o&&o.classList.add("hidden")}r&&(r.value=t||"")}},R=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=i=>{const p=new Image;p.onload=()=>{let{width:d,height:g}=p;(d>1200||g>1200)&&(d>g?(g=Math.round(g*1200/d),d=1200):(d=Math.round(d*1200/g),g=1200));let h=.85,v=1,a="",l=1/0;const c=2*1024*1024,s=document.createElement("canvas"),m=s.getContext("2d");for(;l>c&&h>.1;)s.width=Math.round(d*v),s.height=Math.round(g*v),m.clearRect(0,0,s.width,s.height),m.drawImage(p,0,0,s.width,s.height),a=s.toDataURL("image/jpeg",h),l=(a.split(",")[1]||a).length*.75,l>c&&(h>.5?h-=.1:v*=.8);console.log(`[compressTourImage] Nén hoàn tất: ${Math.round(l/1024)}KB (Chất lượng: ${Math.round(h*100)}%, Tỷ lệ: ${Math.round(v*100)}%)`),t(a)},p.onerror=n,p.src=i.target.result},r.onerror=n,r.readAsDataURL(e)}),P=async(e,t)=>{const n=document.getElementById(`tour-img-preview-${t}`),o=document.getElementById(t==="main"?"tour-image":`tour-image${t}`);if(n){n.innerHTML='<svg class="animate-spin w-7 h-7 text-csr-orange" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>',n.className="w-full h-full flex items-center justify-center";try{const r=await R(e),i=(e.name||`tour-${t}`).replace(/\.[^.]+$/,""),d=await(await fetch("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:r,filename:`tour-${i}`})})).json();if(!d.success)throw new Error(d.error||"Upload thất bại");D(t,d.url),o&&(o.value=d.url),console.log(`[tour-upload] ✅ slot=${t} ${d.stats?.inputKB}KB → ${d.stats?.outputKB}KB`)}catch(r){n.innerHTML=`<span class="text-red-400 text-xs text-center p-2">❌ Lỗi: ${r.message}</span>`,n.className="w-full h-full flex items-center justify-center",alert("Lỗi upload ảnh: "+r.message)}}},O=()=>{K.forEach(e=>{const t=document.getElementById(`tour-img-input-${e}`);!t||t.dataset.bound||(t.dataset.bound="1",t.addEventListener("change",n=>{const o=n.target.files?.[0];o&&P(o,e)}))})};window.handleTourImgDrop=(e,t)=>{const n=e.dataTransfer?.files?.[0];n&&n.type.startsWith("image/")&&P(n,t)};const I=async()=>{u.innerHTML='<tr><td colspan="7" class="text-center py-8 text-gray-400">Đang tải danh sách tour...</td></tr>';try{const e=await fetch(w);if(!e.ok)throw new Error("Failed to load tours");const t=await e.json();k=Array.isArray(t)?t:t.data||[],F()}catch(e){console.error("Error loading tours:",e),u.innerHTML='<tr><td colspan="7" class="text-center py-4 text-red-500">Lỗi kết nối server.</td></tr>'}},F=()=>{if(k.length===0){u.innerHTML='<tr><td colspan="7" class="text-center py-8 text-gray-400">Chưa có tour nào.</td></tr>';return}u.innerHTML=k.map(e=>{const t=!e.price||e.price==="Update"||e.price==="0"||parseInt(e.price)===0?'<span class="text-gray-400 italic">Update...</span>':`<span class="font-bold text-csr-orange">${parseInt(e.price).toLocaleString("vi-VN")}đ</span>`,n=e.level==="Dễ"?"bg-green-100 text-green-700":e.level==="Khó"?"bg-red-100 text-red-600":"bg-orange-100 text-orange-700",o=e.is_visible!==!1?'<span class="bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-full font-bold">Hiển thị</span>':'<span class="bg-gray-200 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-bold">Đã ẩn</span>';return`
                <tr class="hover:bg-gray-50 transition-colors group block md:table-row border-b md:border-none p-4 md:p-0" data-tour-id="${e.id}">
                    <td class="p-0 md:p-4 block md:table-cell mb-4 md:mb-0">
                        <div class="flex items-center gap-3">
                            <div class="w-16 h-16 md:w-12 md:h-12 rounded-xl bg-gray-100 overflow-hidden border border-gray-200 shrink-0">
                                <img src="${e.image||""}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/100x100/f3f4f6/9ca3af?text=No+Img'" loading="lazy">
                            </div>
                            <div class="min-w-0">
                                <div class="font-bold text-base md:text-sm text-gray-900 group-hover:text-csr-orange transition-colors truncate">${e.name}</div>
                                <div class="text-[10px] text-gray-400 truncate max-w-[200px]">${e.short_desc||e.shortDesc||""}</div>
                                <div class="flex items-center gap-2 mt-1 md:hidden">
                                     <span class="px-2 py-0.5 ${n} rounded text-[10px] font-bold uppercase">${e.level||"-"}</span>
                                     ${o}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="hidden md:table-cell p-4 text-sm text-gray-500">
                        <div>${e.region||"-"}</div>
                        <div class="text-[10px] uppercase font-bold text-gray-400">${e.type||"-"}</div>
                    </td>
                    <td class="hidden md:table-cell p-4 text-sm text-gray-600">${e.duration||"-"}</td>
                    <td class="hidden md:table-cell p-4">
                        <span class="px-2 py-0.5 ${n} rounded text-[10px] font-bold uppercase">${e.level||"-"}</span>
                    </td>
                    <td class="p-0 md:p-4 block md:table-cell mb-4 md:mb-0">
                        <div class="flex justify-between items-center md:block">
                            <span class="text-xs font-bold text-gray-400 uppercase md:hidden tracking-wider">Giá tour</span>
                            <div class="text-sm md:text-base">${t}</div>
                        </div>
                    </td>
                    <td class="hidden md:table-cell p-4 text-center">${o}</td>
                    <td class="p-0 md:p-4 block md:table-cell">
                        <div class="flex items-center justify-end md:justify-end gap-2 md:gap-1">
                            <button class="tour-edit-btn p-3 md:p-2 text-gray-500 md:text-gray-400 hover:text-blue-500 hover:bg-blue-50 bg-gray-100 md:bg-transparent rounded-xl md:rounded-lg transition-colors flex-1 md:flex-none justify-center flex items-center gap-2 md:block" data-id="${e.id}" title="Sửa">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                <span class="md:hidden font-bold text-sm">Sửa</span>
                            </button>
                            <a href="/admin/tour-settings?id=${e.id}" data-link class="p-3 md:p-2 text-gray-500 md:text-gray-400 hover:text-orange-500 hover:bg-orange-50 bg-gray-100 md:bg-transparent rounded-xl md:rounded-lg transition-colors inline-flex flex-1 md:flex-none justify-center items-center gap-2 md:block" title="Thiết lập đăng ký">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
                                <span class="md:hidden font-bold text-sm">Cài đặt</span>
                            </a>
                            <button class="tour-delete-btn p-3 md:p-2 text-gray-500 md:text-gray-400 hover:text-red-500 hover:bg-red-50 bg-gray-100 md:bg-transparent rounded-xl md:rounded-lg transition-colors flex-1 md:flex-none justify-center flex items-center gap-2 md:block" data-id="${e.id}" title="Xóa">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                <span class="md:hidden font-bold text-sm">Xóa</span>
                            </button>
                        </div>
                    </td>
                </tr>
            `}).join("")};u.addEventListener("click",async e=>{const t=e.target.closest(".tour-edit-btn"),n=e.target.closest(".tour-delete-btn");if(t){const o=parseInt(t.getAttribute("data-id")),r=k.find(i=>i.id===o);r&&_(r)}if(n){const o=n.getAttribute("data-id");if(confirm("Dữ liệu lịch trình liên quan có thể bị ảnh hưởng. Bạn vẫn muốn xóa tour này?"))try{if((await fetch(`${w}?id=${o}`,{method:"DELETE"})).ok)I();else throw new Error("Delete failed")}catch(r){alert("Lỗi khi xóa: "+r.message)}}}),T.addEventListener("submit",async e=>{e.preventDefault();const t=T.querySelector('button[type="submit"]'),n=t.textContent;t.textContent="Đang lưu...",t.disabled=!0;const o=document.getElementById("tour-edit-id").value,r=[];document.querySelectorAll(".day-block").forEach(a=>{const l=a.querySelector(".day-title-input").value.trim(),c=[];a.querySelectorAll(".time-row").forEach(s=>{const m=s.querySelector(".time-input").value.trim(),x=s.querySelector(".desc-input").value.trim();(m||x)&&c.push({time:m,desc:x})}),l&&r.push({dayTitle:l,steps:c})});const i=[];document.querySelectorAll(".inclusion-row").forEach(a=>{const l=a.querySelector(".incl-image-select").value,c=a.querySelector(".incl-image-custom").value.trim(),s=l==="custom"?c:l,m=a.querySelector(".incl-title-input").value.trim(),x=a.querySelector(".incl-desc-input").value.trim();m&&i.push({title:m,desc:x,image:s})});const p=[];document.querySelectorAll(".exclusion-row").forEach(a=>{const l=a.querySelector(".excl-title-input").value.trim(),c=a.querySelector(".excl-desc-input").value.trim();l&&p.push({title:l,desc:c})});const d=[];document.querySelectorAll(".preparing-row").forEach(a=>{const l=a.querySelector(".prep-image-select").value,c=a.querySelector(".prep-title-input").value.trim(),s=a.querySelector(".prep-desc-input").value.trim();c&&d.push({title:c,desc:s,image:l})});const g=[];document.querySelectorAll(".faq-row").forEach(a=>{const l=a.querySelector(".faq-q-input").value.trim(),c=a.querySelector(".faq-a-input").value.trim();l&&g.push({q:l,a:c})});const h={location:document.getElementById("tour-location").value.trim()||null,distance:document.getElementById("tour-distance").value.trim()||null,transport:document.getElementById("tour-transport").value.trim()||null,groupSize:document.getElementById("tour-groupsize").value.trim()||null},v={id:o?parseInt(o):null,name:document.getElementById("tour-name").value,image:document.getElementById("tour-image").value,image2:document.getElementById("tour-image2").value||null,image3:document.getElementById("tour-image3").value||null,image4:document.getElementById("tour-image4").value||null,shortDesc:document.getElementById("tour-short-desc").value,altitude:document.getElementById("tour-altitude").value||null,level:document.getElementById("tour-level").value,region:document.getElementById("tour-region").value,type:document.getElementById("tour-type").value,duration:document.getElementById("tour-duration").value,price:document.getElementById("tour-price").value,sort_order:parseInt(document.getElementById("tour-sort-order").value)||0,custom_domain:document.getElementById("tour-custom-domain").value.trim()||null,is_visible:document.getElementById("tour-is-visible").checked,specs:h,itinerary:r,inclusions:i,exclusions:p,preparing:d,faqs:g};try{const a=o?`${w}?id=${o}`:w,c=await fetch(a,{method:o?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(!c.ok){const s=await c.json();throw new Error(s.message||s.error||"Save failed")}E(),I(),alert(o?"✅ Cập nhật tour thành công!":"✅ Thêm tour mới thành công! Website sẽ tự đồng bộ trong vài giây.")}catch(a){alert("❌ Lỗi: "+a.message)}finally{t.textContent=n,t.disabled=!1}}),I()};export{Y as afterRender,J as render};
