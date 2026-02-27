import{S,H as C}from"./Header-CvqOcIss.js";const H=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${S()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${C()}
          
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
                      <div class="glass-panel p-5 h-fit lg:col-span-1">
                          <h3 class="font-medium text-gray-900 mb-4">Lọc Tuyến Đi</h3>
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
    `,$=()=>{let m=[],u="";const v="/api/schedules",k="/api/tours",i=document.getElementById("scheduleList"),d=document.getElementById("scheduleModal"),h=document.getElementById("scheduleModalContent"),b=document.getElementById("scheduleForm"),x=(t=null)=>{const e=document.getElementById("scheduleModalTitle");if(t){e.textContent="Chỉnh Sửa Lịch Trình",document.getElementById("sch-edit-id").value=t.id,document.getElementById("sch-tour-name").value=t.tour_name;const a=n=>n&&n.includes("T")?n.split("T")[0]:n;document.getElementById("sch-start-date").value=a(t.start_date),document.getElementById("sch-end-date").value=a(t.end_date),document.getElementById("sch-slots").value=t.slots,document.getElementById("sch-status").value=t.status||"Đang mở"}else e.textContent="Thêm Lịch Khởi Hành",b.reset(),document.getElementById("sch-edit-id").value="";d.classList.remove("hidden"),setTimeout(()=>{d.classList.add("opacity-100"),h.classList.remove("scale-95"),h.classList.add("scale-100")},10)},g=()=>{d.classList.remove("opacity-100"),h.classList.remove("scale-100"),h.classList.add("scale-95"),setTimeout(()=>{d.classList.add("hidden")},200)};document.getElementById("addScheduleBtn").addEventListener("click",()=>x()),document.getElementById("closeScheduleModalBtn").addEventListener("click",g),document.getElementById("cancelScheduleBtn").addEventListener("click",g),d.addEventListener("click",t=>{t.target===d&&g()});const L=async()=>{try{const t=await fetch(k);if(!t.ok)throw new Error("Failed to load tours");const e=await t.json(),a=document.getElementById("sch-tour-name");a.innerHTML='<option value="">-- Chọn Tour --</option>',e.forEach(s=>{a.innerHTML+=`<option value="${s.name}">${s.name}</option>`});const n=document.getElementById("tourFilterList");let o=`
                <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="tourFilter" value="" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100" checked>
                    <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">Tất cả Tuyến</span>
                </label>
            `;e.forEach(s=>{o+=`
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="tourFilter" value="${s.name}" class="text-csr-orange focus:ring-csr-orange border-gray-200 bg-gray-100">
                        <span class="text-gray-500 group-hover:text-gray-900 transition-colors text-sm">${s.name}</span>
                    </label>
                `}),n.innerHTML=o,n.querySelectorAll('input[name="tourFilter"]').forEach(s=>{s.addEventListener("change",l=>{u=l.target.value,f()})})}catch(t){console.error("Error loading tours:",t)}},y=async()=>{i.innerHTML='<div class="text-center py-12 text-gray-400">Đang tải lịch trình...</div>';try{const t=await fetch(v);if(!t.ok)throw new Error("Failed to fetch schedules");m=await t.json(),f()}catch(t){console.error("Error loading schedules:",t),i.innerHTML='<div class="text-center py-12 text-red-400 font-medium">Lỗi kết nối server.</div>'}},f=()=>{let t=m;if(u&&(t=t.filter(e=>e.tour_name===u)),t.length===0){i.innerHTML='<div class="text-center py-12 text-gray-400 italic">Chưa có lịch trình nào'+(u?" cho tuyến này":"")+".</div>";return}i.innerHTML=t.map(e=>{const a=new Date(e.start_date),n=new Date(e.end_date),o=a.toLocaleDateString("vi-VN"),s=n.toLocaleDateString("vi-VN"),l=`${a.getDate().toString().padStart(2,"0")}/${(a.getMonth()+1).toString().padStart(2,"0")}`,c=parseInt(e.booked_count)||0,p=parseInt(e.slots)||0,w=Math.max(0,p-c),B=p>0?Math.min(100,Math.round(c/p*100)):0;let r=e.status||"Đang mở";w<=0?r="Hết chỗ":w<=3&&(r="Sắp hết"),e.status==="Hết chỗ"&&(r="Hết chỗ");const M=r==="Đang mở"?"text-green-600 bg-green-50 border-green-200":r==="Sắp hết"?"text-orange-600 bg-orange-50 border-orange-200":"text-red-500 bg-red-50 border-red-200",T=r==="Đang mở"?"bg-green-500":r==="Sắp hết"?"bg-orange-500":"bg-red-500";return`
                <div class="glass-panel p-5 border-l-4 border-csr-orange hover:shadow-md transition-all duration-200" data-schedule-id="${e.id}">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex items-center gap-4 flex-1 min-w-0">
                            <div class="bg-csr-orange/10 text-csr-orange font-bold rounded-xl p-3 text-center min-w-[72px] shrink-0">
                                <div class="text-[10px] uppercase tracking-wider font-medium">Khởi Hành</div>
                                <div class="text-xl font-black">${l}</div>
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-lg font-bold text-gray-900 mb-1 tracking-wide truncate">${e.tour_name}</h3>
                                <div class="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        ${o} — ${s}
                                    </span>
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        <strong class="text-csr-orange">${c}</strong> / ${p} chỗ
                                    </span>
                                    <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border ${M}">${r}</span>
                                </div>
                                <!-- Progress Bar -->
                                <div class="mt-2 w-full bg-gray-100 rounded-full h-2 overflow-hidden max-w-xs">
                                    <div class="${T} h-2 rounded-full transition-all duration-500" style="width: ${B}%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2 shrink-0">
                            <button class="sch-edit-btn bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg p-2.5 transition-colors" data-id="${e.id}" title="Sửa">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            <button class="sch-delete-btn bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-500 rounded-lg p-2.5 transition-colors" data-id="${e.id}" title="Xóa">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            <button class="sch-details-btn bg-csr-orange hover:opacity-90 text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-all flex items-center gap-2" data-tour="${e.tour_name}" data-date="${e.start_date}" title="Xem Danh Sách Đoàn">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                                Xem DS Đoàn
                            </button>
                        </div>
                    </div>
                </div>
            `}).join(""),i.addEventListener("click",E)},E=async t=>{const e=t.target.closest(".sch-edit-btn"),a=t.target.closest(".sch-delete-btn"),n=t.target.closest(".sch-details-btn");if(e){const o=e.getAttribute("data-id"),s=m.find(l=>l.id==o);s&&x(s)}if(a){const o=a.getAttribute("data-id");if(confirm("Bạn có chắc chắn muốn xóa lịch trình này?"))try{if((await fetch(`${v}?id=${o}`,{method:"DELETE"})).ok)y();else throw new Error("Delete failed")}catch(s){alert("Lỗi khi xóa: "+s.message)}}if(n){const o=n.getAttribute("data-tour"),s=n.getAttribute("data-date"),l=s&&s.includes("T")?s.split("T")[0]:s,c=`/admin/roster?tour=${encodeURIComponent(o)}&date=${encodeURIComponent(l)}`;history.pushState(null,null,c),window.dispatchEvent(new Event("popstate"))}};b.addEventListener("submit",async t=>{t.preventDefault();const e=t.target.querySelector('button[type="submit"]'),a=e.textContent;e.textContent="Đang lưu...",e.disabled=!0;const n=document.getElementById("sch-edit-id").value,o={id:n?parseInt(n):null,tour_name:document.getElementById("sch-tour-name").value,start_date:document.getElementById("sch-start-date").value,end_date:document.getElementById("sch-end-date").value,slots:parseInt(document.getElementById("sch-slots").value),status:document.getElementById("sch-status").value};try{if(!(await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok)throw new Error("Failed to save schedule");g(),y(),alert(n?"✅ Cập nhật lịch trình thành công!":"✅ Thêm lịch trình mới thành công! Form đặt chỗ trên website sẽ tự cập nhật trong 30 giây.")}catch(s){alert("❌ Lỗi: "+s.message)}finally{e.textContent=a,e.disabled=!1}}),L(),y()};export{$ as afterRender,H as render};
