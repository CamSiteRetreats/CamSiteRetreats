import{S as _,H as $}from"./Header-Dmidaim7.js";const L=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${_()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${$()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-6">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Khách Hàng Thân Thiết</h1>
                          <p class="text-gray-500 text-sm">Danh sách khách hàng đã cọc hoặc hoàn thành tour — tự động đồng bộ từ Đơn Hàng.</p>
                      </div>
                  </div>

                  <!-- Statistics -->
                  <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
                      <div class="glass-panel p-5 border-l-4 border-csr-orange">
                          <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Tổng Khách Hàng</div>
                          <div class="text-3xl font-bold text-gray-900 mt-1" id="stat-total">--</div>
                      </div>
                      <div class="glass-panel p-5 border-l-4 border-green-500">
                          <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Khách Quay Lại (≥2 Tour)</div>
                          <div class="text-3xl font-bold text-green-600 mt-1" id="stat-returning">--</div>
                      </div>
                      <div class="glass-panel p-5 border-l-4 border-blue-500">
                          <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Đủ ĐK Giảm Giá</div>
                          <div class="text-3xl font-bold text-blue-600 mt-1" id="stat-discount">--</div>
                      </div>
                      <div class="glass-panel p-5 border-l-4 border-purple-500">
                          <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Tổng Doanh Thu (LTV)</div>
                          <div class="text-2xl font-bold text-purple-600 mt-1" id="stat-ltv">--</div>
                      </div>
                  </div>

                  <!-- Search -->
                  <div class="glass-panel overflow-hidden">
                      <div class="p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50/50 gap-4">
                          <div class="relative w-full md:w-80">
                              <svg class="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              <input type="text" id="crmSearchInput" placeholder="Tìm kiếm khách hàng..." class="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 md:py-2 text-sm text-gray-900 focus:border-csr-orange focus:outline-none focus:ring-2 focus:ring-csr-orange/20 transition-all">
                          </div>
                          <div class="text-[11px] md:text-sm text-gray-400 font-medium" id="resultCount"></div>
                      </div>
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse md:table block">
                              <thead class="hidden md:table-header-group">
                                  <tr class="bg-gray-50 border-b border-gray-200 text-[10px] uppercase tracking-wider text-gray-400">
                                      <th class="p-4 font-medium">Mã KH</th>
                                      <th class="p-4 font-medium">Khách Hàng</th>
                                      <th class="p-4 font-medium">Tour Gần Nhất</th>
                                      <th class="p-4 font-medium text-center">Số Tour</th>
                                      <th class="p-4 font-medium">Tổng Chi (LTV)</th>
                                      <th class="p-4 font-medium">Đề Xuất</th>
                                      <th class="p-4 font-medium text-center">Thao Tác</th>
                                  </tr>
                              </thead>
                              <tbody id="crmTableBody" class="divide-y divide-gray-100 block md:table-row-group">
                              </tbody>
                          </table>
                      </div>
                  </div>
               </div>
          </main>
        </div>
      </div>

      <!-- DETAIL MODAL -->
      <div id="customerDetailModal" class="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-2 md:p-4 opacity-0 transition-opacity duration-200">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-3xl max-h-[95vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300" id="customerDetailContent">
              <div class="sticky top-0 bg-white/95 backdrop-blur z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 class="text-lg font-bold text-gray-900">Chi Tiết Khách Hàng</h2>
                  <button type="button" class="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors" onclick="window.closeCustomerDetail()">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              <div class="p-6" id="customerDetailBody">
              </div>
          </div>
      </div>
    `,H=()=>{const i=document.getElementById("crmTableBody"),b=document.getElementById("crmSearchInput");let l=[],v=[];const g=async()=>{i.innerHTML='<tr><td colspan="6" class="text-center py-8 text-gray-400">Đang tải danh sách khách hàng...</td></tr>';try{const[t,n]=await Promise.all([fetch("/api/admin_customers"),fetch("/api/bookings")]),s=t.ok?await t.json():{data:[]};v=n.ok?await n.json():[],l=(s.data||[]).map(e=>y(e)),m(l),w(l)}catch(t){console.error("Error loading CRM:",t),i.innerHTML='<tr><td colspan="6" class="text-center py-4 text-red-500">Lỗi kết nối server.</td></tr>'}},y=t=>{const n=v.filter(s=>s.phone===t.phone&&s.status&&!s.status.includes("hủy")).sort((s,e)=>new Date(e.created_at)-new Date(s.created_at));return t._bookings=n,t._tourCount=n.length,t._latestTour=n.length>0?n[0].tour:null,t._latestDate=n.length>0?n[0].date:null,t._ltv=n.filter(s=>s.status?.includes("cọc")||s.status?.includes("Cọc")||s.status?.includes("Hoàn")).reduce((s,e)=>s+(parseInt(e.total_price)||0),0),t._tourCount>=5?t._discount={pct:7,label:"Giảm 7%",color:"bg-purple-100 text-purple-600 border-purple-200"}:t._tourCount>=2?t._discount={pct:5,label:"Giảm 5%",color:"bg-green-100 text-green-600 border-green-200"}:t._discount=null,t},m=t=>{const n=document.getElementById("resultCount");if(n&&(n.textContent=`${t.length} khách hàng`),t.length===0){i.innerHTML='<tr><td colspan="6" class="text-center py-8 text-gray-400">Không tìm thấy khách hàng nào.</td></tr>';return}let s="";try{const e=localStorage.getItem("csr_user");e&&(s=JSON.parse(e).role||"")}catch{}i.innerHTML=t.map((e,c)=>{const u=(e.full_name||"?")[0].toUpperCase(),r=["bg-orange-500","bg-blue-500","bg-green-500","bg-purple-500","bg-pink-500","bg-teal-500"],o=r[Math.abs(u.charCodeAt(0))%r.length],x=e._latestTour?`<span class="text-sm text-gray-700">${e._latestTour}</span><div class="text-[10px] text-gray-400 mt-0.5">${e._latestDate||""}</div>`:'<span class="text-gray-300 text-xs">Chưa có</span>',p=e._discount?`<span class="text-xs px-2.5 py-1 rounded-full font-bold border ${e._discount.color}">${e._discount.label}</span>`:'<span class="text-gray-300 text-xs">—</span>',h=e._tourCount>0?`<span class="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${e._tourCount>=5?"bg-purple-100 text-purple-600":e._tourCount>=2?"bg-green-100 text-green-600":"bg-gray-100 text-gray-600"}">${e._tourCount}</span>`:'<span class="text-gray-300">0</span>',a=e._ltv>0?`<span class="text-sm font-bold text-purple-700">${(e._ltv/1e6).toFixed(1)}Mđ</span>`:'<span class="text-gray-300 text-xs">—</span>';return`
                <tr class="hover:bg-gray-50 transition-colors block md:table-row p-4 md:p-0 mb-4 md:mb-0 glass-panel md:glass-none border-l-4 border-csr-orange md:border-none relative">
                    <td class="p-0 md:p-4 block md:table-cell mb-3 md:mb-0">
                        <div class="flex justify-between items-center md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Mã KH</span>
                            <span class="font-mono text-csr-orange bg-csr-orange/10 px-2 py-1 rounded text-[11px] md:text-xs font-bold cursor-pointer hover:bg-csr-orange/20 transition-colors" title="Click để copy" onclick="navigator.clipboard.writeText('${e.csr_code||""}'); this.textContent='Đã copy!'; setTimeout(() => this.textContent='${e.csr_code||"-"}', 1500)">${e.csr_code||"-"}</span>
                        </div>
                    </td>
                    <td class="p-0 md:p-4 block md:table-cell mb-4 md:mb-0 pt-3 border-t md:border-none border-gray-50">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 md:w-9 md:h-9 rounded-full ${o} flex items-center justify-center text-white text-base md:text-sm font-bold shrink-0">${u}</div>
                            <div class="min-w-0">
                                <div class="font-bold md:font-medium text-gray-900 text-base md:text-sm truncate">${e.full_name||"-"}</div>
                                <div class="text-xs md:text-[11px] text-gray-500 font-medium">${e.phone||"-"}</div>
                            </div>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 block md:table-cell">
                        <div class="flex justify-between md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Tour gần nhất</span>
                            <div class="text-right md:text-left">${x}</div>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 block md:table-cell">
                        <div class="flex justify-between items-center md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Số Tour tham gia</span>
                            <div class="text-right md:text-center">${h}</div>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 block md:table-cell">
                        <div class="flex justify-between items-center md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Tổng chi (LTV)</span>
                            <div class="text-right md:text-left">${a}</div>
                        </div>
                    </td>
                    <td class="py-2 md:p-4 block md:table-cell">
                        <div class="flex justify-between items-center md:block">
                            <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Hạng mức</span>
                            <div class="text-right">${p}</div>
                        </div>
                    </td>
                    <td class="py-4 md:p-4 block md:table-cell border-t md:border-none border-gray-50 mt-2">
                        <div class="flex items-center justify-center gap-2">
                             <button class="detail-btn bg-csr-orange hover:bg-orange-600 text-white md:bg-transparent md:text-csr-orange md:hover:bg-csr-orange/10 px-4 py-2.5 md:px-3 md:py-1.5 rounded-xl md:rounded-lg text-xs font-bold transition-colors flex-1 md:flex-none flex justify-center items-center" data-idx="${c}">
                                 Chi Tiết
                             </button>
                             ${s==="admin"?`
                                 <button class="delete-customer-btn bg-red-50 text-red-500 hover:text-white hover:bg-red-500 px-3 py-2.5 md:py-1.5 rounded-xl md:rounded-lg text-xs font-bold transition-colors border border-red-100 md:border-transparent hover:border-red-600 shadow-sm flex items-center justify-center shrink-0" data-id="${e.id}" title="Xoá Khách Hàng Này">
                                     <svg class="w-5 h-5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                 </button>
                             `:""}
                        </div>
                    </td>
                </tr>
            `}).join("")},w=t=>{document.getElementById("stat-total").textContent=t.length,document.getElementById("stat-returning").textContent=t.filter(e=>e._tourCount>=2).length,document.getElementById("stat-discount").textContent=t.filter(e=>e._discount).length;const n=t.reduce((e,c)=>e+(c._ltv||0),0),s=document.getElementById("stat-ltv");s&&(s.textContent=n>0?(n/1e6).toFixed(1)+"Mđ":"0đ")};b&&b.addEventListener("input",t=>{const n=t.target.value.toLowerCase().trim();if(!n){m(l);return}const s=l.filter(e=>e.csr_code&&e.csr_code.toLowerCase().includes(n)||e.full_name&&e.full_name.toLowerCase().includes(n)||e.phone&&e.phone.includes(n));m(s)});const d=document.getElementById("customerDetailModal"),f=document.getElementById("customerDetailContent"),k=document.getElementById("customerDetailBody");window.closeCustomerDetail=()=>{d.classList.add("opacity-0"),f.classList.add("scale-95"),setTimeout(()=>d.classList.add("hidden"),200)};const C=t=>{const n=r=>{if(!r)return"-";const o=new Date(r);return isNaN(o)?r:`${o.getDate().toString().padStart(2,"0")}/${(o.getMonth()+1).toString().padStart(2,"0")}/${o.getFullYear()}`},s=t._bookings[0]||{},e=[{label:"Mã Khách Hàng",value:t.csr_code,color:"text-csr-orange font-mono font-bold"},{label:"Họ và Tên",value:t.full_name},{label:"Số Điện Thoại",value:t.phone},{label:"CCCD / CMND",value:t.cccd||s.id_card||""},{label:"Ngày Sinh",value:t.dob?n(t.dob):s.dob||""},{label:"Giới Tính",value:t.gender||s.gender||""},{label:"Tên In Huy Chương",value:s.medal_name||"(Dùng tên thật)",color:"text-csr-orange font-bold text-sm"},{label:"Địa Chỉ",value:s.address||""},{label:"Chế Độ Ăn",value:t.dietary||s.diet||""},{label:"Dị Ứng / Y Tế",value:t.medical_notes||s.allergy||""},{label:"Gậy Trekking",value:s.trekking_pole||""},{label:"Ghi Chú Đặc Biệt",value:s.special||""}].filter(r=>r.value),c=t._discount?`<div class="p-4 rounded-xl ${t._discount.color} border text-center">
                  <div class="text-2xl font-black">${t._discount.label}</div>
                  <div class="text-xs mt-1 opacity-80">Áp dụng cho tour tiếp theo (Đã tham gia ${t._tourCount} tour)</div>
               </div>`:`<div class="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center text-gray-400 text-sm">
                  Chưa đủ điều kiện giảm giá (cần tham gia ≥ 2 tour)
               </div>`,u=t._bookings.length>0?t._bookings.map((r,o)=>{const x=a=>a?a.includes("Đã cọc")?["bg-green-100 text-green-600",a]:a.includes("Hoàn")?["bg-blue-100 text-blue-600",a]:a.includes("Chờ")?["bg-yellow-100 text-yellow-600",a]:["bg-gray-100 text-gray-500",a]:["bg-gray-100 text-gray-500","Mới"],[p,h]=x(r.status);return`
                    <div class="flex items-center gap-4 p-3 rounded-lg ${o===0?"bg-csr-orange/5 border border-csr-orange/20":"hover:bg-gray-50"}">
                        <div class="w-8 h-8 rounded-full ${o===0?"bg-csr-orange":"bg-gray-200"} flex items-center justify-center text-white text-xs font-bold shrink-0">${o+1}</div>
                        <div class="flex-1 min-w-0">
                            <div class="font-medium text-sm text-gray-800 truncate">${r.tour||"-"}</div>
                            <div class="text-[10px] text-gray-400">${r.date||"-"} ${r.medal_name?`• <span class="text-csr-orange font-medium">Huy chương: ${r.medal_name}</span>`:""}</div>
                        </div>
                        <span class="${p} text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0">${h}</span>
                    </div>
                `}).join(""):'<div class="text-center py-4 text-gray-400 text-sm">Chưa có lịch sử tour.</div>';k.innerHTML=`
            <!-- Header Card -->
            <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 rounded-2xl bg-csr-orange flex items-center justify-center text-white text-2xl font-bold">${(t.full_name||"?")[0].toUpperCase()}</div>
                <div>
                    <h3 class="text-xl font-bold text-gray-900">${t.full_name||"-"}</h3>
                    <div class="text-sm text-gray-500">${t.phone||"-"} • <span class="text-csr-orange font-mono font-bold">${t.csr_code||"-"}</span></div>
                    <div class="text-[11px] text-gray-400 mt-0.5">Tham gia: ${n(t.created_at)} • ${t._tourCount} tour</div>
                </div>
            </div>

            <!-- Tổng chi tiêu LTV -->
            ${t._ltv>0?`
            <div class="mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 flex items-center justify-between">
                <div>
                    <div class="text-xs font-bold text-purple-500 uppercase tracking-wide">Tổng Chi Tiêu (LTV)</div>
                    <div class="text-2xl font-black text-purple-700 mt-0.5">${t._ltv.toLocaleString("vi-VN")}đ</div>
                </div>
                <div class="text-4xl">💰</div>
            </div>`:""}

            <!-- Đề xuất giảm giá -->
            <div class="mb-6">${c}</div>

            <!-- Thông tin chi tiết -->
            <div class="mb-6">
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Thông Tin Cá Nhân</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${e.map(r=>`
                        <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span class="text-xs text-gray-500 font-medium">${r.label}</span>
                            <span class="text-sm font-medium ${r.color||"text-gray-900"}">${r.value||"-"}</span>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- Ghi chú chăm sóc nội bộ -->
            <div class="mb-6">
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">📝 Ghi Chú Chăm Sóc Nội Bộ</h4>
                <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                    <textarea id="crm-notes-input"
                        placeholder="VD: Khách hay đi một mình, thích giường tầng trên, dị ứng nhẹ với pe-ni-xi-lin, có sinh nhật tháng 3..."
                        class="w-full bg-transparent border-none outline-none text-sm text-gray-700 resize-none placeholder-yellow-400 min-h-[80px]"
                        rows="4">${t.notes||""}</textarea>
                    <div class="flex justify-end mt-2">
                        <button id="crm-notes-save" data-id="${t.id}"
                            class="px-4 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-bold rounded-lg transition-colors">
                            Lưu Ghi Chú
                        </button>
                    </div>
                </div>
            </div>

            <!-- Lịch sử Tour -->
            <div>
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Lịch Sử Tour (${t._tourCount})</h4>
                <div class="space-y-2">${u}</div>
            </div>
        `,d.classList.remove("hidden"),requestAnimationFrame(()=>{d.classList.remove("opacity-0"),f.classList.remove("scale-95")})};i&&i.addEventListener("click",async t=>{const n=t.target.closest(".detail-btn");if(n){const e=parseInt(n.dataset.idx);l[e]&&C(l[e])}const s=t.target.closest(".delete-customer-btn");if(s){const e=s.dataset.id;if(confirm("⚠️ CẢNH BÁO: Bạn có chắc chắn muốn xóa khách hàng thân thiết này khỏi danh sách CRM không?")){const u=confirm(`🤔 CÂU HỎI PHỤ: Bạn có muốn XÓA LUÔN tất cả lịch sử Đơn Hàng / Booking của khách này không?

- Chọn OK: Xóa khách CRM + Xóa toàn bộ Đơn.
- Chọn Cancel: Chỉ xóa khách khỏi danh sách CRM.`);try{s.innerHTML='<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';const o=await(await fetch(`/api/admin_customers?id=${e}&delete_bookings=${u}`,{method:"DELETE"})).json();o.success?(alert("✅ Đã xóa khách hàng thành công!"),g()):(alert("❌ Lỗi: "+o.message),s.innerHTML="Lỗi")}catch(r){console.error(r),alert("Lỗi kết nối máy chủ khi xóa!"),g()}}}}),d&&d.addEventListener("click",t=>{t.target===d&&window.closeCustomerDetail()}),g()};export{H as afterRender,L as render};
