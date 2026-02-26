import{S as _,H as $}from"./Header-CvqOcIss.js";const L=()=>`
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
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                  </div>

                  <!-- Search -->
                  <div class="glass-panel overflow-hidden">
                      <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                          <div class="relative w-80">
                              <svg class="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              <input type="text" id="crmSearchInput" placeholder="Tìm theo Mã #CSR, SĐT, Họ tên..." class="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-900 focus:border-csr-orange focus:outline-none transition-colors">
                          </div>
                          <div class="text-sm text-gray-400" id="resultCount"></div>
                      </div>
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse">
                              <thead>
                                  <tr class="bg-gray-50 border-b border-gray-200 text-[10px] uppercase tracking-wider text-gray-400">
                                      <th class="p-4 font-medium">Mã KH</th>
                                      <th class="p-4 font-medium">Khách Hàng</th>
                                      <th class="p-4 font-medium">Tour Gần Nhất</th>
                                      <th class="p-4 font-medium text-center">Số Tour</th>
                                      <th class="p-4 font-medium">Đề Xuất</th>
                                      <th class="p-4 font-medium text-center">Thao Tác</th>
                                  </tr>
                              </thead>
                              <tbody id="crmTableBody" class="divide-y divide-gray-100">
                              </tbody>
                          </table>
                      </div>
                  </div>
               </div>
          </main>
        </div>
      </div>

      <!-- DETAIL MODAL -->
      <div id="customerDetailModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-200">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300" id="customerDetailContent">
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
    `,H=()=>{const d=document.getElementById("crmTableBody"),v=document.getElementById("crmSearchInput");let l=[],b=[];const g=async()=>{d.innerHTML='<tr><td colspan="6" class="text-center py-8 text-gray-400">Đang tải danh sách khách hàng...</td></tr>';try{const[t,s]=await Promise.all([fetch("/api/admin_customers"),fetch("/api/bookings")]),n=t.ok?await t.json():{data:[]};b=s.ok?await s.json():[],l=(n.data||[]).map(e=>y(e)),h(l),w(l)}catch(t){console.error("Error loading CRM:",t),d.innerHTML='<tr><td colspan="6" class="text-center py-4 text-red-500">Lỗi kết nối server.</td></tr>'}},y=t=>{const s=b.filter(n=>n.phone===t.phone&&n.status&&!n.status.includes("hủy")).sort((n,e)=>new Date(e.created_at)-new Date(n.created_at));return t._bookings=s,t._tourCount=s.length,t._latestTour=s.length>0?s[0].tour:null,t._latestDate=s.length>0?s[0].date:null,t._tourCount>=5?t._discount={pct:7,label:"Giảm 7%",color:"bg-purple-100 text-purple-600 border-purple-200"}:t._tourCount>=2?t._discount={pct:5,label:"Giảm 5%",color:"bg-green-100 text-green-600 border-green-200"}:t._discount=null,t},h=t=>{const s=document.getElementById("resultCount");if(s&&(s.textContent=`${t.length} khách hàng`),t.length===0){d.innerHTML='<tr><td colspan="6" class="text-center py-8 text-gray-400">Không tìm thấy khách hàng nào.</td></tr>';return}let n="";try{const e=localStorage.getItem("csr_user");e&&(n=JSON.parse(e).role||"")}catch{}d.innerHTML=t.map((e,u)=>{const c=(e.full_name||"?")[0].toUpperCase(),o=["bg-orange-500","bg-blue-500","bg-green-500","bg-purple-500","bg-pink-500","bg-teal-500"],r=o[Math.abs(c.charCodeAt(0))%o.length],x=e._latestTour?`<span class="text-sm text-gray-700">${e._latestTour}</span><div class="text-[10px] text-gray-400 mt-0.5">${e._latestDate||""}</div>`:'<span class="text-gray-300 text-xs">Chưa có</span>',p=e._discount?`<span class="text-xs px-2.5 py-1 rounded-full font-bold border ${e._discount.color}">${e._discount.label}</span>`:'<span class="text-gray-300 text-xs">—</span>',m=e._tourCount>0?`<span class="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${e._tourCount>=5?"bg-purple-100 text-purple-600":e._tourCount>=2?"bg-green-100 text-green-600":"bg-gray-100 text-gray-600"}">${e._tourCount}</span>`:'<span class="text-gray-300">0</span>';return`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4">
                        <span class="font-mono text-csr-orange bg-csr-orange/10 px-2 py-1 rounded text-xs font-bold cursor-pointer hover:bg-csr-orange/20 transition-colors" title="Click để copy" onclick="navigator.clipboard.writeText('${e.csr_code||""}'); this.textContent='Đã copy!'; setTimeout(() => this.textContent='${e.csr_code||"-"}', 1500)">${e.csr_code||"-"}</span>
                    </td>
                    <td class="p-4">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-full ${r} flex items-center justify-center text-white text-sm font-bold shrink-0">${c}</div>
                            <div>
                                <div class="font-medium text-gray-900 text-sm">${e.full_name||"-"}</div>
                                <div class="text-[11px] text-gray-400">${e.phone||"-"}</div>
                            </div>
                        </div>
                    </td>
                    <td class="p-4">${x}</td>
                    <td class="p-4 text-center">${m}</td>
                    <td class="p-4">${p}</td>
                    <td class="p-4 text-center">
                        <div class="flex items-center justify-center gap-2">
                             <button class="detail-btn text-csr-orange hover:text-orange-700 hover:bg-csr-orange/10 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors" data-idx="${u}">
                                 Xem Chi Tiết
                             </button>
                             ${n==="admin"?`
                                 <button class="delete-customer-btn text-red-500 hover:text-white hover:bg-red-500 px-2 py-1.5 rounded-lg text-xs font-bold transition-colors border border-transparent hover:border-red-600 shadow-sm" data-id="${e.id}" title="Xoá Khách Hàng Này">
                                     <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                 </button>
                             `:""}
                        </div>
                    </td>
                </tr>
            `}).join("")},w=t=>{document.getElementById("stat-total").textContent=t.length,document.getElementById("stat-returning").textContent=t.filter(s=>s._tourCount>=2).length,document.getElementById("stat-discount").textContent=t.filter(s=>s._discount).length};v&&v.addEventListener("input",t=>{const s=t.target.value.toLowerCase().trim();if(!s){h(l);return}const n=l.filter(e=>e.csr_code&&e.csr_code.toLowerCase().includes(s)||e.full_name&&e.full_name.toLowerCase().includes(s)||e.phone&&e.phone.includes(s));h(n)});const i=document.getElementById("customerDetailModal"),f=document.getElementById("customerDetailContent"),C=document.getElementById("customerDetailBody");window.closeCustomerDetail=()=>{i.classList.add("opacity-0"),f.classList.add("scale-95"),setTimeout(()=>i.classList.add("hidden"),200)};const k=t=>{const s=o=>{if(!o)return"-";const r=new Date(o);return isNaN(r)?o:`${r.getDate().toString().padStart(2,"0")}/${(r.getMonth()+1).toString().padStart(2,"0")}/${r.getFullYear()}`},n=t._bookings[0]||{},e=[{label:"Mã Khách Hàng",value:t.csr_code,color:"text-csr-orange font-mono font-bold"},{label:"Họ và Tên",value:t.full_name},{label:"Số Điện Thoại",value:t.phone},{label:"CCCD / CMND",value:t.cccd||n.id_card||""},{label:"Ngày Sinh",value:t.dob?s(t.dob):n.dob||""},{label:"Giới Tính",value:t.gender||n.gender||""},{label:"Tên In Huy Chương",value:n.medal_name||"(Dùng tên thật)",color:"text-csr-orange font-bold text-sm"},{label:"Địa Chỉ",value:n.address||""},{label:"Chế Độ Ăn",value:t.dietary||n.diet||""},{label:"Dị Ứng / Y Tế",value:t.medical_notes||n.allergy||""},{label:"Gậy Trekking",value:n.trekking_pole||""},{label:"Ghi Chú Đặc Biệt",value:n.special||""}].filter(o=>o.value),u=t._discount?`<div class="p-4 rounded-xl ${t._discount.color} border text-center">
                  <div class="text-2xl font-black">${t._discount.label}</div>
                  <div class="text-xs mt-1 opacity-80">Áp dụng cho tour tiếp theo (Đã tham gia ${t._tourCount} tour)</div>
               </div>`:`<div class="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center text-gray-400 text-sm">
                  Chưa đủ điều kiện giảm giá (cần tham gia ≥ 2 tour)
               </div>`,c=t._bookings.length>0?t._bookings.map((o,r)=>{const x=a=>a?a.includes("Đã cọc")?["bg-green-100 text-green-600",a]:a.includes("Hoàn")?["bg-blue-100 text-blue-600",a]:a.includes("Chờ")?["bg-yellow-100 text-yellow-600",a]:["bg-gray-100 text-gray-500",a]:["bg-gray-100 text-gray-500","Mới"],[p,m]=x(o.status);return`
                    <div class="flex items-center gap-4 p-3 rounded-lg ${r===0?"bg-csr-orange/5 border border-csr-orange/20":"hover:bg-gray-50"}">
                        <div class="w-8 h-8 rounded-full ${r===0?"bg-csr-orange":"bg-gray-200"} flex items-center justify-center text-white text-xs font-bold shrink-0">${r+1}</div>
                        <div class="flex-1 min-w-0">
                            <div class="font-medium text-sm text-gray-800 truncate">${o.tour||"-"}</div>
                            <div class="text-[10px] text-gray-400">${o.date||"-"} ${o.medal_name?`• <span class="text-csr-orange font-medium">Huy chương: ${o.medal_name}</span>`:""}</div>
                        </div>
                        <span class="${p} text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0">${m}</span>
                    </div>
                `}).join(""):'<div class="text-center py-4 text-gray-400 text-sm">Chưa có lịch sử tour.</div>';C.innerHTML=`
            <!-- Header Card -->
            <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 rounded-2xl bg-csr-orange flex items-center justify-center text-white text-2xl font-bold">${(t.full_name||"?")[0].toUpperCase()}</div>
                <div>
                    <h3 class="text-xl font-bold text-gray-900">${t.full_name||"-"}</h3>
                    <div class="text-sm text-gray-500">${t.phone||"-"} • <span class="text-csr-orange font-mono font-bold">${t.csr_code||"-"}</span></div>
                    <div class="text-[11px] text-gray-400 mt-0.5">Tham gia: ${s(t.created_at)} • ${t._tourCount} tour</div>
                </div>
            </div>

            <!-- Đề xuất giảm giá -->
            <div class="mb-6">${u}</div>

            <!-- Thông tin chi tiết -->
            <div class="mb-6">
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Thông Tin Cá Nhân</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${e.map(o=>`
                        <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span class="text-xs text-gray-500 font-medium">${o.label}</span>
                            <span class="text-sm font-medium ${o.color||"text-gray-900"}">${o.value||"-"}</span>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- Lịch sử Tour -->
            <div>
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Lịch Sử Tour (${t._tourCount})</h4>
                <div class="space-y-2">${c}</div>
            </div>
        `,i.classList.remove("hidden"),requestAnimationFrame(()=>{i.classList.remove("opacity-0"),f.classList.remove("scale-95")})};d&&d.addEventListener("click",async t=>{const s=t.target.closest(".detail-btn");if(s){const e=parseInt(s.dataset.idx);l[e]&&k(l[e])}const n=t.target.closest(".delete-customer-btn");if(n){const e=n.dataset.id;if(confirm("⚠️ CẢNH BÁO: Bạn có chắc chắn muốn xóa khách hàng thân thiết này khỏi danh sách CRM không?")){const c=confirm(`🤔 CÂU HỎI PHỤ: Bạn có muốn XÓA LUÔN tất cả lịch sử Đơn Hàng / Booking của khách này không?

- Chọn OK: Xóa khách CRM + Xóa toàn bộ Đơn.
- Chọn Cancel: Chỉ xóa khách khỏi danh sách CRM.`);try{n.innerHTML='<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';const r=await(await fetch(`/api/admin_customers?id=${e}&delete_bookings=${c}`,{method:"DELETE"})).json();r.success?(alert("✅ Đã xóa khách hàng thành công!"),g()):(alert("❌ Lỗi: "+r.message),n.innerHTML="Lỗi")}catch(o){console.error(o),alert("Lỗi kết nối máy chủ khi xóa!"),g()}}}}),i&&i.addEventListener("click",t=>{t.target===i&&window.closeCustomerDetail()}),g()};export{H as afterRender,L as render};
