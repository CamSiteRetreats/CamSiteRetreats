import{S as F,H as _}from"./Header-DjwXxBfR.js";const D=()=>{let c={role:"sale"};try{const l=localStorage.getItem("csr_user");l&&(c=JSON.parse(l))}catch{}const d=c.role==="admin";return`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${F()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${_()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-6">
                  
                  ${d?"":`<div class="flex items-center gap-3 bg-amber-50 border border-amber-200 text-amber-700 rounded-xl px-4 py-3 text-sm font-medium">
                      <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      Bạn đang ở chế độ <strong class="ml-1">Chỉ xem</strong>. Liên hệ Admin để chỉnh sửa dữ liệu.
                  </div>`}

                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Quản Lý Lịch Trình</h1>
                          <p class="text-gray-500 text-sm">Cập nhật ngày khởi hành, số chỗ — đồng bộ trực tiếp với form đặt chỗ trên website.</p>
                      </div>
                      ${d?`<button id="addScheduleBtn" class="btn-primary flex items-center gap-2">
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                          Tạo Lịch Trình
                      </button>`:""}
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
      <div id="scheduleModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-lg shadow-2xl scale-95 transition-transform duration-300 transform relative" id="scheduleModalContent">
              <button id="closeScheduleModalBtn" class="absolute top-5 right-5 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors z-20">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div class="p-8">
                  <h2 id="scheduleModalTitle" class="text-2xl font-bold text-gray-800 mb-6">Thêm Lịch Khởi Hành</h2>
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
    `},q=()=>{let c=[],d="",l="upcoming";const b="/api/schedules",M="/api/tours",p=document.getElementById("scheduleList"),u=document.getElementById("scheduleModal"),m=document.getElementById("scheduleModalContent"),L=document.getElementById("scheduleForm"),E=(t=null)=>{const n=document.getElementById("scheduleModalTitle");if(t){n.textContent="Chỉnh Sửa Lịch Trình",document.getElementById("sch-edit-id").value=t.id,document.getElementById("sch-tour-name").value=t.tour_name;const s=r=>r&&r.includes("T")?r.split("T")[0]:r;document.getElementById("sch-start-date").value=s(t.start_date),document.getElementById("sch-end-date").value=s(t.end_date),document.getElementById("sch-slots").value=t.slots,document.getElementById("sch-status").value=t.status||"Đang mở"}else n.textContent="Thêm Lịch Khởi Hành",L.reset(),document.getElementById("sch-edit-id").value="";u.classList.remove("hidden"),setTimeout(()=>{u.classList.add("opacity-100"),m.classList.remove("scale-95"),m.classList.add("scale-100")},10)},v=()=>{u.classList.remove("opacity-100"),m.classList.remove("scale-100"),m.classList.add("scale-95"),setTimeout(()=>{u.classList.add("hidden")},200)};let S={role:"sale"};try{const t=localStorage.getItem("csr_user");t&&(S=JSON.parse(t))}catch{}S.role==="admin"&&(document.getElementById("addScheduleBtn")?.addEventListener("click",()=>E()),document.getElementById("closeScheduleModalBtn")?.addEventListener("click",v),document.getElementById("cancelScheduleBtn")?.addEventListener("click",v),u?.addEventListener("click",t=>{t.target===u&&v()}));const T=async()=>{try{const t=await fetch(M);if(!t.ok)throw new Error("Failed to load tours");const n=await t.json(),s=document.getElementById("sch-tour-name");s.innerHTML='<option value="">-- Chọn Tour --</option>',n.forEach(e=>{s.innerHTML+=`<option value="${e.name}">${e.name}</option>`});const r=document.getElementById("tourFilterList");let a=`
                <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="tourFilter" value="" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100" checked>
                    <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">Tất cả Tuyến</span>
                </label>
            `;n.forEach(e=>{a+=`
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="tourFilter" value="${e.name}" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100">
                        <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">${e.name}</span>
                    </label>
                `}),r.innerHTML=a,r.querySelectorAll('input[name="tourFilter"]').forEach(e=>{e.addEventListener("change",o=>{d=o.target.value,f()})}),document.querySelectorAll('input[name="timeFilter"]').forEach(e=>{e.addEventListener("change",o=>{l=o.target.value,document.querySelectorAll('input[name="timeFilter"]').forEach(g=>{const h=g.nextElementSibling;g.checked?(h.classList.add("text-gray-700","font-medium"),h.classList.remove("text-gray-500")):(h.classList.remove("text-gray-700","font-medium"),h.classList.add("text-gray-500"))}),f()})})}catch(t){console.error("Error loading tours:",t)}},y=async()=>{p.innerHTML='<div class="text-center py-12 text-gray-400">Đang tải lịch trình...</div>';try{const t=await fetch(b);if(!t.ok)throw new Error("Failed to fetch schedules");c=await t.json(),f()}catch(t){console.error("Error loading schedules:",t),p.innerHTML='<div class="text-center py-12 text-red-400 font-medium">Lỗi kết nối server.</div>'}},f=()=>{let t=c;d&&(t=t.filter(s=>s.tour_name===d));const n=new Date;if(n.setHours(0,0,0,0),t=t.filter(s=>{const r=new Date(s.start_date);r.setHours(0,0,0,0);const a=r<n;return l==="upcoming"?!a:l==="past"?a:!0}),t.sort((s,r)=>{const a=new Date(s.start_date),e=new Date(r.start_date);return l==="upcoming"?a-e:e-a}),t.length===0){p.innerHTML='<div class="text-center py-12 text-gray-400 italic">Chưa có lịch trình nào'+(d?" cho tuyến này":"")+(l==="past"?" trong quá khứ":" sắp tới")+".</div>";return}p.innerHTML=t.map(s=>{const r=new Date(s.start_date),a=new Date(s.end_date),e=k=>`${k.getDate().toString().padStart(2,"0")}/${(k.getMonth()+1).toString().padStart(2,"0")}/${k.getFullYear()}`,o=e(r),g=e(a),h=`${r.getDate().toString().padStart(2,"0")}/${(r.getMonth()+1).toString().padStart(2,"0")}`,w=parseInt(s.booked_count)||0,x=parseInt(s.slots)||0,B=Math.max(0,x-w),I=x>0?Math.min(100,Math.round(w/x*100)):0;let i=s.status||"Đang mở";B<=0?i="Hết chỗ":B<=3&&(i="Sắp hết"),s.status==="Hết chỗ"&&(i="Hết chỗ");const H=i==="Đang mở"?"text-green-600 bg-green-50 border-green-200":i==="Sắp hết"?"text-orange-600 bg-orange-50 border-orange-200":"text-red-500 bg-red-50 border-red-200",$=i==="Đang mở"?"bg-green-500":i==="Sắp hết"?"bg-orange-500":"bg-red-500";return`
                <div class="glass-panel p-5 border-l-4 border-csr-orange hover:shadow-md transition-all duration-200" data-schedule-id="${s.id}">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex items-center gap-4 flex-1 min-w-0">
                            <div class="bg-csr-orange/10 text-csr-orange font-bold rounded-xl p-3 text-center min-w-[72px] shrink-0">
                                <div class="text-[10px] uppercase tracking-wider font-medium">Khởi Hành</div>
                                <div class="text-xl font-black">${h}</div>
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-lg font-bold text-gray-900 mb-1 tracking-wide truncate">${s.tour_name}</h3>
                                <div class="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        ${o} — ${g}
                                    </span>
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        <strong class="text-csr-orange">${w}</strong> / ${x} chỗ
                                    </span>
                                    <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border ${H}">${i}</span>
                                </div>
                                <!-- Progress Bar -->
                                <div class="mt-2 w-full bg-gray-100 rounded-full h-2 overflow-hidden max-w-xs">
                                    <div class="${$} h-2 rounded-full transition-all duration-500" style="width: ${I}%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2 shrink-0">
                            <button class="sch-edit-btn bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg p-2.5 transition-colors" data-id="${s.id}" title="Sửa">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            <button class="sch-delete-btn bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-500 rounded-lg p-2.5 transition-colors" data-id="${s.id}" title="Xóa">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            <button class="sch-details-btn bg-csr-orange hover:opacity-90 text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-all flex items-center gap-2" data-tour="${s.tour_name}" data-date="${s.start_date}" title="Xem Danh Sách Đoàn">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                                Xem DS Đoàn
                            </button>
                        </div>
                    </div>
                </div>
            `}).join(""),p.addEventListener("click",C)},C=async t=>{const n=t.target.closest(".sch-edit-btn"),s=t.target.closest(".sch-delete-btn"),r=t.target.closest(".sch-details-btn");if(n){const a=n.getAttribute("data-id"),e=c.find(o=>o.id==a);e&&E(e)}if(s){const a=s.getAttribute("data-id");if(confirm("Bạn có chắc chắn muốn xóa lịch trình này?"))try{if((await fetch(`${b}?id=${a}`,{method:"DELETE"})).ok)y();else throw new Error("Delete failed")}catch(e){alert("Lỗi khi xóa: "+e.message)}}if(r){const a=r.getAttribute("data-tour"),e=r.getAttribute("data-date"),o=e&&e.includes("T")?e.split("T")[0]:e,g=`/admin/roster?tour=${encodeURIComponent(a)}&date=${encodeURIComponent(o)}`;history.pushState(null,null,g),window.dispatchEvent(new Event("popstate"))}};L.addEventListener("submit",async t=>{t.preventDefault();const n=t.target.querySelector('button[type="submit"]'),s=n.textContent;n.textContent="Đang lưu...",n.disabled=!0;const r=document.getElementById("sch-edit-id").value,a={id:r?parseInt(r):null,tour_name:document.getElementById("sch-tour-name").value,start_date:document.getElementById("sch-start-date").value,end_date:document.getElementById("sch-end-date").value,slots:parseInt(document.getElementById("sch-slots").value),status:document.getElementById("sch-status").value};try{const e=await fetch(b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!e.ok){const o=await e.json().catch(()=>({}));throw new Error(o.error||"Failed to save schedule")}v(),y(),alert(r?"✅ Cập nhật lịch trình thành công!":"✅ Thêm lịch trình mới thành công! Form đặt chỗ trên website sẽ tự cập nhật trong 30 giây.")}catch(e){alert("❌ Lỗi: "+e.message)}finally{n.textContent=s,n.disabled=!1}}),T(),y()};export{q as afterRender,D as render};
