import{S as q,H as V}from"./Header-CARqqxjt.js";const R=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${q()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${V()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-6">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Quản Lý Lịch Trình</h1>
                          <p class="text-gray-500 text-sm">Cập nhật ngày khởi hành, số chỗ — đồng bộ trực tiếp với form đặt chỗ trên website.</p>
                      </div>
                      <button id="addScheduleBtn" class="btn-primary flex items-center gap-2">
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                          Tạo Lịch Trình
                      </button>
                  </div>

                  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <!-- Left filter pane -->
                      <div class="glass-panel p-5 h-fit lg:col-span-1 mb-6 lg:mb-0">
                          <h3 class="font-medium text-gray-900 mb-4 border-b pb-2">Thời Gian</h3>
                          <div class="flex flex-col gap-2 mb-6" id="timeFilterOptions">
                              <label class="flex items-center gap-3 cursor-pointer group">
                                  <input type="radio" name="timeFilter" value="upcoming" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100" checked>
                                  <span class="text-gray-700 font-medium group-hover:text-gray-900 transition-colors text-sm">Sắp diễn ra</span>
                              </label>
                              <label class="flex items-center gap-3 cursor-pointer group">
                                  <input type="radio" name="timeFilter" value="past" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100">
                                  <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">Đã khởi hành</span>
                              </label>
                          </div>

                          <h3 class="font-medium text-gray-900 mb-4 border-b pb-2">Lọc Tuyến Đi</h3>
                          <div id="tourFilterList" class="space-y-3">
                              <label class="flex items-center gap-3 cursor-pointer group">
                                  <input type="radio" name="tourFilter" value="" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100" checked>
                                  <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">Tất cả Tuyến</span>
                              </label>
                              <!-- Tour options will be loaded dynamically -->
                          </div>
                      </div>

                      <!-- Right Content List -->
                      <div class="lg:col-span-3 space-y-4" id="scheduleList">
                          <div class="text-center py-12 text-gray-400">Đang tải lịch trình...</div>
                      </div>
                  </div>
               </div>
          </main>
        </div>
      </div>

      <!-- Add/Edit Schedule Modal -->
      <div id="scheduleModal" class="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-2 md:p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-lg shadow-2xl scale-95 transition-transform duration-300 transform relative max-h-[95vh] overflow-y-auto" id="scheduleModalContent">
              <button id="closeScheduleModalBtn" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors z-20">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div class="p-5 md:p-8">
                  <h2 id="scheduleModalTitle" class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Thêm Lịch Khởi Hành</h2>
                  <form id="scheduleForm" class="space-y-5">
                      <input type="hidden" id="sch-edit-id">
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Chọn Tour *</label>
                          <select id="sch-tour-name" class="input-field bg-gray-50 font-medium" required>
                              <option value="">-- Chọn Tour --</option>
                          </select>
                      </div>
                      <div class="grid grid-cols-2 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày bắt đầu *</label>
                              <input type="date" id="sch-start-date" class="input-field bg-gray-50" required>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ngày kết thúc *</label>
                              <input type="date" id="sch-end-date" class="input-field bg-gray-50" required>
                          </div>
                      </div>
                      <div class="grid grid-cols-2 gap-5">
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Số chỗ *</label>
                              <input type="number" id="sch-slots" class="input-field bg-gray-50 font-bold text-lg" placeholder="VD: 13" required>
                          </div>
                          <div>
                              <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Trạng thái</label>
                              <select id="sch-status" class="input-field bg-gray-50 font-medium">
                                  <option value="Đang mở">Đang mở</option>
                                  <option value="Sắp hết">Sắp hết</option>
                                  <option value="Hết chỗ">Hết chỗ</option>
                              </select>
                          </div>
                      </div>
                       <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Link Nhóm Zalo <span class="text-gray-400 normal-case font-normal">(Sẽ hiện cho khách sau khi thanh toán)</span></label>
                          <div class="relative">
                              <span class="absolute left-3 top-3 text-blue-500">
                                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.14 1c-6.15 0-11.14 4.58-11.14 10.21 0 3.2 1.6 6.05 4.12 7.91-.12.44-.43 1.6-.43 1.6s-.1.38.16.53c.26.15.54-.04.54-.04l1.88-1.29c.6.16 1.23.25 1.88.25 6.15 0 11.14-4.58 11.14-10.21S18.29 1 12.14 1z"/></svg>
                              </span>
                              <input type="url" id="sch-zalo-link" class="input-field bg-gray-50 pl-10" placeholder="https://zalo.me/g/xxxxxx">
                          </div>
                      </div>
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Nhãn Nhóm <span class="text-gray-400 normal-case font-normal">(tùy chọn, dùng khi có 2+ nhóm cùng ngày)</span></label>
                          <input type="text" id="sch-group-label" class="input-field bg-blue-50/50 font-bold text-blue-700 border-blue-200" placeholder="VD: Nhóm 1, VIP, Budget...">
                          <p class="text-[10px] text-gray-400 mt-1 italic">Nhập nhãn nếu mở nhiều đoàn cùng ngày để phân biệt trong form đặt chỗ.</p>
                      </div>
                      <div>
                          <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">🚗 Loại Xe</label>
                          <select id="sch-vehicle-type" class="input-field bg-gray-50 font-medium">
                              <option value="solati_16">🚐 Solati 16 chỗ ngồi</option>
                              <option value="limo_34">🚌 Limousine 34 chỗ nằm (3 dãy A/B/C)</option>
                              <option value="sleeper_45">🛏️ Giường nằm 45 chỗ (2 tầng A/B)</option>
                          </select>
                          <p class="text-[10px] text-gray-400 mt-1 italic">Sơ đồ ghế trên trang vận hành sẽ hiển thị đúng loại xe này.</p>
                      </div>
                      <div class="pt-3 flex gap-3">
                          <button type="button" id="cancelScheduleBtn" class="flex-1 px-6 py-3 border border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all">
                              Hủy
                          </button>
                          <button type="submit" class="flex-1 px-6 py-3 bg-csr-orange text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all">
                              Lưu Lịch Trình
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>

      <!-- Guide Picker Modal -->
      <div id="guidePickerModal" class="fixed inset-0 z-[70] bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] flex flex-col">
              <div class="flex items-center justify-between p-5 border-b border-gray-100">
                  <div>
                      <h2 class="text-lg font-black text-gray-800">👥 Phân Công Nhân Sự</h2>
                      <p class="text-xs text-gray-400 mt-0.5" id="guidePickerSubtitle">Chọn nhân sự cho lịch tour</p>
                  </div>
                  <div class="flex items-center gap-2">
                      <a href="/admin/guides" data-link class="text-xs text-indigo-600 hover:underline font-medium">Thêm nhân sự mới →</a>
                      <button id="closeGuidePickerBtn" class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                          <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                      </button>
                  </div>
              </div>
              <div class="p-5 overflow-y-auto flex-1">
                  <div id="guidePickerList" class="space-y-2">
                      <div class="text-center py-8 text-gray-400">Đang tải...</div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Photo Links Modal -->
      <div id="photoLinksModal" class="fixed inset-0 z-[80] bg-gray-900/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] flex flex-col">
              <div class="flex items-center justify-between p-5 border-b border-gray-100 shrink-0">
                  <div>
                      <h2 class="text-lg font-black text-gray-800">📸 Quản Lý Link Ảnh</h2>
                      <p class="text-xs text-gray-400 mt-0.5" id="photoModalSubtitle">Thêm link ảnh cho chuyến đi</p>
                  </div>
                  <button id="closePhotoModalBtn" class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
              </div>

              <div class="p-5 overflow-y-auto flex-1">
                  <!-- PIN Config -->
                  <div class="mb-5 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                      <label class="block text-xs font-bold text-amber-700 uppercase mb-2 flex items-center gap-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                          Mã PIN Truy Cập (4 số)
                      </label>
                      <input type="tel" id="photoPin" maxlength="4" inputmode="numeric" pattern="[0-9]{4}"
                          class="w-full border border-amber-300 bg-white rounded-lg px-3 py-2 text-sm font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 tracking-widest text-center text-lg"
                          placeholder="_ _ _ _">
                      <p class="text-[11px] text-amber-600 mt-1.5 font-medium">Khách cần nhập đúng PIN này mới xem được. Để trống = ai cũng xem được.</p>
                  </div>

                  <!-- Links list -->
                  <div id="photoLinksList" class="space-y-3 mb-4">
                      <!-- Dynamic rows -->
                  </div>

                  <button id="addPhotoLinkBtn" class="w-full py-2.5 border-2 border-dashed border-gray-200 text-gray-400 hover:border-csr-orange hover:text-csr-orange rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                      Thêm Link Ảnh Mới
                  </button>
              </div>

              <div class="p-5 border-t border-gray-100 shrink-0 space-y-2">
                  <button id="copyPhotoShareLinkBtn" class="w-full py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                      Sao Chép Link Chia Sẻ Cho Khách
                  </button>
                  <button id="savePhotoLinksBtn" class="w-full py-3 bg-csr-orange text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                      Lưu Thay Đổi
                  </button>
              </div>
          </div>
      </div>
    `,G=()=>{let f=[],k="",m="upcoming";const w="/api/schedules",j="/api/tours",x=document.getElementById("scheduleList"),g=document.getElementById("scheduleModal"),L=document.getElementById("scheduleModalContent"),$=document.getElementById("scheduleForm"),C=(t=null)=>{const o=document.getElementById("scheduleModalTitle");if(t){o.textContent="Chỉnh Sửa Lịch Trình",document.getElementById("sch-edit-id").value=t.id,document.getElementById("sch-tour-name").value=t.tour_name;const e=n=>n&&n.includes("T")?n.split("T")[0]:n;document.getElementById("sch-start-date").value=e(t.start_date),document.getElementById("sch-end-date").value=e(t.end_date),document.getElementById("sch-slots").value=t.slots,document.getElementById("sch-status").value=t.status||"Đang mở",document.getElementById("sch-group-label").value=t.group_label||"",document.getElementById("sch-zalo-link").value=t.zalo_link||"",document.getElementById("sch-vehicle-type").value=t.vehicle_type||"solati_16"}else o.textContent="Thêm Lịch Khởi Hành",$.reset(),document.getElementById("sch-edit-id").value="",document.getElementById("sch-zalo-link").value="";g.classList.remove("hidden"),setTimeout(()=>{g.classList.add("opacity-100"),L.classList.remove("scale-95"),L.classList.add("scale-100")},10)},B=()=>{g.classList.remove("opacity-100"),L.classList.remove("scale-100"),L.classList.add("scale-95"),setTimeout(()=>{g.classList.add("hidden")},200)};document.getElementById("addScheduleBtn").addEventListener("click",()=>C()),document.getElementById("closeScheduleModalBtn").addEventListener("click",B),document.getElementById("cancelScheduleBtn").addEventListener("click",B),g.addEventListener("click",t=>{t.target===g&&B()});const A=async()=>{try{const t=await fetch(j);if(!t.ok)throw new Error("Failed to load tours");const o=await t.json(),e=document.getElementById("sch-tour-name");e.innerHTML='<option value="">-- Chọn Tour --</option>',o.forEach(l=>{e.innerHTML+=`<option value="${l.name}">${l.name}</option>`});const n=document.getElementById("tourFilterList");let r=`
                <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="tourFilter" value="" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100" checked>
                    <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">Tất cả Tuyến</span>
                </label>
            `;o.forEach(l=>{r+=`
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="tourFilter" value="${l.name}" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100">
                        <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">${l.name}</span>
                    </label>
                `}),n.innerHTML=r,n.querySelectorAll('input[name="tourFilter"]').forEach(l=>{l.addEventListener("change",d=>{k=d.target.value,T()})}),document.querySelectorAll('input[name="timeFilter"]').forEach(l=>{l.addEventListener("change",d=>{m=d.target.value,document.querySelectorAll('input[name="timeFilter"]').forEach(a=>{const s=a.nextElementSibling;a.checked?(s.classList.add("text-gray-700","font-medium"),s.classList.remove("text-gray-500")):(s.classList.remove("text-gray-700","font-medium"),s.classList.add("text-gray-500"))}),T()})})}catch(t){console.error("Error loading tours:",t)}},E=async()=>{x.innerHTML='<div class="text-center py-12 text-gray-400">Đang tải lịch trình...</div>';try{const t=await fetch(w);if(!t.ok)throw new Error("Failed to fetch schedules");f=await t.json(),T()}catch(t){console.error("Error loading schedules:",t),x.innerHTML='<div class="text-center py-12 text-red-400 font-medium">Lỗi kết nối server.</div>'}},T=()=>{let t=f;k&&(t=t.filter(e=>e.tour_name===k));const o=new Date;if(o.setHours(0,0,0,0),t=t.filter(e=>{const n=new Date(e.start_date);n.setHours(0,0,0,0);const r=n<o;return m==="upcoming"?!r:m==="past"?r:!0}),t.sort((e,n)=>{const r=new Date(e.start_date),l=new Date(n.start_date);return m==="upcoming"?r-l:l-r}),t.length===0){x.innerHTML='<div class="text-center py-12 text-gray-400 italic">Chưa có lịch trình nào'+(k?" cho tuyến này":"")+(m==="past"?" trong quá khứ":" sắp tới")+".</div>";return}x.innerHTML=t.map(e=>{const n=new Date(e.start_date),r=new Date(e.end_date),l=n.toLocaleDateString("vi-VN");r.toLocaleDateString("vi-VN");const d=`${n.getDate().toString().padStart(2,"0")}/${(n.getMonth()+1).toString().padStart(2,"0")}`,a=parseInt(e.booked_count)||0,s=parseInt(e.slots)||0,i=Math.max(0,s-a),c=s>0?Math.min(100,Math.round(a/s*100)):0,h=e.group_label?`<span class="ml-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border bg-blue-50 text-blue-600 border-blue-200">${e.group_label}</span>`:"",y=e.zalo_link?'<span class="ml-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border bg-blue-600 text-white border-blue-700 flex items-center gap-1"><svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.14 1c-6.15 0-11.14 4.58-11.14 10.21 0 3.2 1.6 6.05 4.12 7.91-.12.44-.43 1.6-.43 1.6s-.1.38.16.53c.26.15.54-.04.54-.04l1.88-1.29c.6.16 1.23.25 1.88.25 6.15 0 11.14-4.58 11.14-10.21S18.29 1 12.14 1z"/></svg> ZALO</span>':"";let u=e.status||"Đang mở";i<=0?u="Hết chỗ":i<=3&&(u="Sắp hết"),e.status==="Hết chỗ"&&(u="Hết chỗ");const N=u==="Đang mở"?"text-green-600 bg-green-50 border-green-200":u==="Sắp hết"?"text-orange-600 bg-orange-50 border-orange-200":"text-red-500 bg-red-50 border-red-200",D=u==="Đang mở"?"bg-green-500":u==="Sắp hết"?"bg-orange-500":"bg-red-500";return`
                <div class="glass-panel p-4 md:p-5 border-l-4 border-csr-orange hover:shadow-md transition-all duration-200" data-schedule-id="${e.id}">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                            <div class="bg-csr-orange/10 text-csr-orange font-bold rounded-xl p-2 md:p-3 text-center min-w-[64px] md:min-w-[72px] shrink-0">
                                <div class="text-[9px] md:text-[10px] uppercase tracking-wider font-medium">Khởi Hành</div>
                                <div class="text-lg md:text-xl font-black">${d}</div>
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-base md:text-lg font-bold text-gray-900 mb-0.5 md:mb-1 tracking-wide truncate flex items-center gap-1">
                                    ${e.tour_name}${h}${y}
                                </h3>
                                <div class="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 flex-wrap">
                                    <span class="flex items-center gap-1">
                                        <svg class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        ${l}
                                    </span>
                                    <span class="flex items-center gap-1">
                                        <svg class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        <strong class="text-csr-orange">${a}</strong> / ${s}
                                    </span>
                                    <span class="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-md border ${N}">${u}</span>
                                </div>
                                <!-- Progress Bar (Hidden on small mobile) -->
                                <div class="mt-2 w-full bg-gray-100 rounded-full h-1.5 overflow-hidden max-w-xs hidden md:block">
                                    <div class="${D} h-1.5 rounded-full transition-all duration-500" style="width: ${c}%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row md:flex-row gap-2 shrink-0 border-t md:border-none pt-3 md:pt-0">
                            <button class="sch-edit-btn bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg p-2 md:p-2.5 transition-colors flex-1 md:flex-none flex justify-center" data-id="${e.id}" title="Sửa">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            <button class="sch-delete-btn bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-500 rounded-lg p-2 md:p-2.5 transition-colors flex-1 md:flex-none flex justify-center" data-id="${e.id}" title="Xóa">
                                <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            <button class="sch-guides-btn bg-indigo-50 hover:bg-indigo-100 text-indigo-600 border border-indigo-200 rounded-lg px-2.5 py-2 md:py-2.5 text-xs font-bold transition-all flex items-center justify-center gap-1.5 flex-[1.5] md:flex-none" data-id="${e.id}" data-tour="${e.tour_name}" title="Phân công Nhân Sự">
                                👥 Nhân Sự
                            </button>
                            <button class="sch-photo-btn bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-lg px-2.5 py-2 md:py-2.5 text-xs font-bold transition-all flex items-center justify-center gap-1.5 flex-[1.5] md:flex-none" data-id="${e.id}" data-tour="${e.tour_name}" title="Quản lý Link Ảnh">
                                📸 Link Ảnh${e.photo_links&&e.photo_links.length>0?`<span class="bg-purple-600 text-white text-[9px] rounded-full px-1.5 py-0.5 font-black">${e.photo_links.length}</span>`:""}
                            </button>
                            <button class="sch-review-btn bg-yellow-50 hover:bg-yellow-100 text-yellow-600 border border-yellow-200 rounded-lg px-3 py-2 md:py-2.5 text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-1.5 flex-[1.5] md:flex-none" data-id="${e.id}" title="Copy Link Đánh Giá">
                                ⭐ Link ĐG
                            </button>
                            <button class="sch-details-btn bg-csr-orange hover:opacity-90 text-white rounded-lg px-3 py-2 md:py-2.5 text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2 flex-[2] md:flex-none" data-id="${e.id}" data-tour="${e.tour_name}" data-date="${e.start_date}" data-group-label="${e.group_label||""}" data-vehicle="${e.vehicle_type||"solati_16"}" title="Xem Danh Sách Đoàn">
                                <svg class="w-4 h-4 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                                📋 DS Đoàn
                            </button>
                        </div>
                    </div>
                </div>
            `}).join("")},b=document.getElementById("guidePickerModal"),v=document.getElementById("guidePickerList");let S=null;const H=async(t,o)=>{S=t,document.getElementById("guidePickerSubtitle").textContent=`Tour: ${o}`,b.classList.remove("hidden"),v.innerHTML='<div class="text-center py-8 text-gray-400">Đang tải...</div>';try{const[e,n]=await Promise.all([fetch("/api/guides"),fetch(`/api/guides?schedule_id=${t}`)]),r=await e.json(),l=await n.json(),d=new Set(l.map(s=>s.id)),a={"Hướng Dẫn Viên":"bg-blue-100 text-blue-700",Leader:"bg-purple-100 text-purple-700",Photo:"bg-pink-100 text-pink-700",Guider:"bg-cyan-100 text-cyan-700","Hậu Cần":"bg-amber-100 text-amber-700","Học Việc":"bg-gray-100 text-gray-600"};if(r.length===0){v.innerHTML='<div class="text-center py-8 text-gray-400"><div class="text-3xl mb-2">👥</div><p>Chưa có nhân sự nào.</p><a href="/admin/guides" data-link class="text-indigo-600 text-sm font-medium hover:underline">+ Thêm nhân sự mới</a></div>';return}v.innerHTML=r.map(s=>{const i=d.has(s.id),c=a[s.role]||"bg-gray-100 text-gray-600",h=(s.full_name||"X").split(" ").slice(-2).map(y=>y[0]).join("").toUpperCase();return`
                <div class="flex items-center gap-3 p-3 rounded-xl border transition-all ${i?"border-indigo-200 bg-indigo-50":"border-gray-100 hover:border-gray-200 hover:bg-gray-50"}">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-csr-orange/20 to-orange-100 flex items-center justify-center text-csr-orange font-black text-xs shrink-0">${h}</div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-gray-900 truncate">${s.full_name}</div>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${c}">${s.role}</span>
                    </div>
                    <button class="guide-toggle-btn px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${i?"bg-red-100 text-red-600 hover:bg-red-200":"bg-indigo-600 text-white hover:bg-indigo-700"}"
                        data-guide-id="${s.id}" data-assigned="${i}">
                        ${i?"✕ Bỏ":"+ Thêm"}
                    </button>
                </div>`}).join(""),v.querySelectorAll(".guide-toggle-btn").forEach(s=>{s.addEventListener("click",async()=>{const i=parseInt(s.getAttribute("data-guide-id")),c=s.getAttribute("data-assigned")==="true";s.disabled=!0,s.textContent="...",await fetch(`/api/guides?action=${c?"unassign":"assign"}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({schedule_id:S,guide_id:i})}),H(S,document.getElementById("guidePickerSubtitle").textContent.replace("Tour: ",""))})})}catch(e){v.innerHTML=`<div class="text-center py-8 text-red-400">Lỗi tải dữ liệu: ${e.message}</div>`}};document.getElementById("closeGuidePickerBtn").addEventListener("click",()=>b.classList.add("hidden")),b.addEventListener("click",t=>{t.target===b&&b.classList.add("hidden")});const p=document.getElementById("photoLinksModal");let M=null,P=null;const _=t=>{const o=document.getElementById("photoLinksList");if(!t||t.length===0){o.innerHTML='<p class="text-center text-gray-400 text-sm py-2 italic">Chưa có link nào. Nhấn nút bên dưới để thêm.</p>';return}o.innerHTML=t.map((e,n)=>`
            <div class="flex gap-2 items-start" data-link-idx="${n}">
                <div class="flex-1 space-y-2">
                    <input type="text" class="photo-link-title-input w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50 focus:bg-white" placeholder="Tiêu đề (VD: Album Full HD, Flycam...)" value="${e.title||""}">
                    <input type="url" class="photo-link-url-input w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50 focus:bg-white" placeholder="https://drive.google.com/..." value="${e.url||""}">
                </div>
                <button class="remove-photo-link-btn p-2 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors shrink-0 mt-1" data-idx="${n}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
        `).join(""),o.querySelectorAll(".remove-photo-link-btn").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.getAttribute("data-idx")),r=I();r.splice(n,1),_(r)})})},I=()=>{const t=document.querySelectorAll("#photoLinksList [data-link-idx]");return Array.from(t).map(o=>({title:o.querySelector(".photo-link-title-input").value.trim(),url:o.querySelector(".photo-link-url-input").value.trim()})).filter(o=>o.title||o.url)},z=(t,o,e)=>{M=t,P=e,document.getElementById("photoModalSubtitle").textContent=`Tour: ${o}`,document.getElementById("photoPin").value=e.photo_pin||"",_(e.photo_links||[]),p.classList.remove("hidden")};document.getElementById("closePhotoModalBtn").addEventListener("click",()=>p.classList.add("hidden")),p.addEventListener("click",t=>{t.target===p&&p.classList.add("hidden")}),document.getElementById("addPhotoLinkBtn").addEventListener("click",()=>{const t=I();t.push({title:"",url:""}),_(t);const o=document.querySelectorAll("#photoLinksList [data-link-idx]"),e=o[o.length-1];e&&e.querySelector(".photo-link-title-input").focus()}),document.getElementById("copyPhotoShareLinkBtn").addEventListener("click",()=>{const t=`${window.location.origin}/photos?id=${M}`;navigator.clipboard.writeText(t).then(()=>{const o=document.getElementById("copyPhotoShareLinkBtn"),e=o.innerHTML;o.innerHTML="✅ Đã copy link!",o.classList.add("bg-green-50","text-green-700","border-green-200"),o.classList.remove("bg-purple-50","text-purple-700","border-purple-200"),setTimeout(()=>{o.innerHTML=e,o.classList.remove("bg-green-50","text-green-700","border-green-200"),o.classList.add("bg-purple-50","text-purple-700","border-purple-200")},2500)}).catch(()=>alert(`Link chia sẻ:
${window.location.origin}/photos?id=${M}`))}),document.getElementById("savePhotoLinksBtn").addEventListener("click",async()=>{const t=document.getElementById("savePhotoLinksBtn"),o=I(),e=document.getElementById("photoPin").value.trim(),n=P;if(e&&(e.length!==4||!/^\d{4}$/.test(e))){alert("PIN phải là 4 chữ số!");return}t.textContent="Đang lưu...",t.disabled=!0;const r={id:M,tour_name:n.tour_name,start_date:n.start_date&&n.start_date.includes("T")?n.start_date.split("T")[0]:n.start_date,end_date:n.end_date&&n.end_date.includes("T")?n.end_date.split("T")[0]:n.end_date,slots:n.slots,status:n.status,group_label:n.group_label||null,zalo_link:n.zalo_link||null,photo_links:o,photo_pin:e||null};try{if(!(await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("Save failed");p.classList.add("hidden"),await E(),alert(`✅ Đã lưu ${o.length} link ảnh!`)}catch(l){alert("❌ Lỗi: "+l.message)}finally{t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg> Lưu Thay Đổi',t.disabled=!1}});const F=async t=>{const o=t.target.closest(".sch-edit-btn"),e=t.target.closest(".sch-delete-btn"),n=t.target.closest(".sch-review-btn"),r=t.target.closest(".sch-details-btn"),l=t.target.closest(".sch-guides-btn"),d=t.target.closest(".sch-photo-btn");if(o){const a=o.getAttribute("data-id"),s=f.find(i=>i.id==a);s&&C(s)}if(l){const a=l.getAttribute("data-id"),s=l.getAttribute("data-tour");H(parseInt(a),s)}if(d){const a=parseInt(d.getAttribute("data-id")),s=d.getAttribute("data-tour"),i=f.find(c=>c.id==a);i&&z(a,s,i)}if(e){const a=e.getAttribute("data-id");if(confirm("Bạn có chắc chắn muốn xóa lịch trình này?"))try{if((await fetch(`${w}?id=${a}`,{method:"DELETE"})).ok)E();else throw new Error("Delete failed")}catch(s){alert("Lỗi khi xóa: "+s.message)}}if(n){const a=n.getAttribute("data-id"),s=`${window.location.origin}/review?schedule_id=${a}`;navigator.clipboard.writeText(s).then(()=>{const i=n.innerHTML;n.innerHTML="✅ Đã copy!",setTimeout(()=>n.innerHTML=i,2e3)}).catch(()=>{alert(`Không thể copy. Link:
`+s)})}if(r){const a=r.getAttribute("data-id"),s=r.getAttribute("data-tour"),i=r.getAttribute("data-date"),c=i&&i.includes("T")?i.split("T")[0]:i,h=r.getAttribute("data-group-label")||"",y=`/admin/roster?tour=${encodeURIComponent(s)}&date=${encodeURIComponent(c)}&scheduleId=${a}&groupLabel=${encodeURIComponent(h)}&vehicleType=${encodeURIComponent(r.getAttribute("data-vehicle")||"solati_16")}`;history.pushState(null,null,y),window.dispatchEvent(new Event("popstate"))}};$.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.querySelector('button[type="submit"]'),e=o.textContent;o.textContent="Đang lưu...",o.disabled=!0;const n=document.getElementById("sch-edit-id").value,r={id:n?parseInt(n):null,tour_name:document.getElementById("sch-tour-name").value,start_date:document.getElementById("sch-start-date").value,end_date:document.getElementById("sch-end-date").value,slots:parseInt(document.getElementById("sch-slots").value),status:document.getElementById("sch-status").value,group_label:document.getElementById("sch-group-label").value.trim()||null,zalo_link:document.getElementById("sch-zalo-link").value.trim()||null,vehicle_type:document.getElementById("sch-vehicle-type").value||"solati_16"};try{if(!(await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("Failed to save schedule");B(),E(),alert(n?"✅ Cập nhật lịch trình thành công!":"✅ Thêm lịch trình mới thành công! Form đặt chỗ trên website sẽ tự cập nhật trong 30 giây.")}catch(l){alert("❌ Lỗi: "+l.message)}finally{o.textContent=e,o.disabled=!1}}),x.addEventListener("click",F),A(),E()};export{G as afterRender,R as render};
