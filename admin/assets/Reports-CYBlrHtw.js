import{S as j,H as A}from"./Header-n5pNPUhI.js";const K=()=>{let c={role:"sale",fullName:"Guest",id:null};try{const m=localStorage.getItem("csr_user");m&&(c=JSON.parse(m))}catch{}const u=c.role==="admin",x=new Date,w=new Date(x.getFullYear(),x.getMonth(),1),p=new Date(x.getFullYear(),x.getMonth()+1,0).toISOString().split("T")[0],h=w.toISOString().split("T")[0];return`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${j()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${A()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-8">
                  
                  <div class="flex justify-between items-end flex-wrap gap-4">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Báo Cáo &amp; Hiệu Suất</h1>
                          <p class="text-gray-500 text-sm">
                            ${u?"Quản lý hoa hồng, doanh thu tổng và xếp hạng Sales.":"Bảng xếp hạng doanh số và theo dõi hoa hồng của bạn."}
                          </p>
                      </div>
                      <div class="flex items-center gap-3 flex-wrap">
                          <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm">
                              <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                              <label class="text-xs font-bold text-gray-400 uppercase whitespace-nowrap">Từ ngày</label>
                              <input type="date" id="reportDateFrom" class="text-sm font-bold text-gray-800 border-none outline-none bg-transparent" value="${h}">
                          </div>
                          <span class="text-gray-400 font-bold">→</span>
                          <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm">
                              <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                              <label class="text-xs font-bold text-gray-400 uppercase whitespace-nowrap">Đến ngày</label>
                              <input type="date" id="reportDateTo" class="text-sm font-bold text-gray-800 border-none outline-none bg-transparent" value="${p}">
                          </div>
                          <button id="reportApplyBtn" class="bg-gray-900 hover:bg-csr-orange text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm">Lọc</button>
                      </div>
                  </div>

                  ${u?`
                  <!-- PHẦN 1: QUẢN LÝ HOA HỒNG TOUR (ADMIN ONLY) -->
                  <div class="glass-panel overflow-hidden">
                      <div class="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-100/50">
                          <div>
                              <h2 class="text-lg font-bold text-gray-900">1. Cài Đặt Mức Hoa Hồng Tour</h2>
                              <p class="text-xs text-gray-500 mt-1">Mức hoa hồng này được tính cho các đơn hàng của tour tương ứng.</p>
                          </div>
                      </div>
                      <div class="p-4" id="commissionSetupContainer">
                          <div class="text-center text-gray-400 py-4 text-sm">Đang tải danh sách Tour...</div>
                      </div>
                  </div>

                  <!-- PHẦN 2: DOANH THU TỔNG (ADMIN ONLY) -->
                  <div>
                      <h2 class="text-lg font-bold text-gray-900 mb-4">2. Thống Kê Doanh Thu Tổng (Kỳ Chọn)</h2>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div class="glass-panel p-6 border-l-4 border-csr-orange">
                              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wide">Số Khởi Hành (Chuyến)</h3>
                              <p class="text-4xl font-black text-gray-900 mt-2" id="stat-departures">...</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-blue-500">
                              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wide">Số Khách Tham Gia</h3>
                              <p class="text-4xl font-black text-gray-900 mt-2" id="stat-pax">...</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-green-500">
                              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wide">Tổng Doanh Thu</h3>
                              <p class="text-4xl font-black text-green-600 mt-2" id="stat-revenue">...</p>
                          </div>
                      </div>
                  </div>

                  <!-- PHẦN 3: BẢNG XẾP HẠNG SALES (ADMIN ONLY) -->
                  <div class="glass-panel overflow-hidden mt-8">
                      <div class="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-100/50">
                          <div>
                              <h2 class="text-lg font-bold text-gray-900">3. Bảng Xếp Hạng Đội Ngũ Sales</h2>
                              <p class="text-xs text-gray-500 mt-1">Tính theo đơn "Đã cọc" hoặc "Hoàn tất". Gộp theo ID người dùng (tránh lỗi đổi tên).</p>
                          </div>
                      </div>
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse">
                              <thead>
                                  <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-400 font-bold">
                                      <th class="p-4 text-center w-16">TOP</th>
                                      <th class="p-4">Nhân Viên Sale</th>
                                      <th class="p-4 text-center">Đơn Chốt</th>
                                      <th class="p-4 text-right">Doanh Số Kéo Về</th>
                                      <th class="p-4 text-right text-csr-orange">Hoa Hồng Kênh</th>
                                      <th class="p-4 text-center">Thao Tác</th>
                                  </tr>
                              </thead>
                              <tbody id="salesTableBody" class="divide-y divide-gray-100">
                                  <tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Đang tải dữ liệu...</td></tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  `:`
                  <!-- MÀN HÌNH RIÊNG DÀNH CHO ROLE SALE -->
                  
                  <!-- PHẦN 1: THỐNG KÊ CÁ NHÂN (SALE ONLY) — 4 CARDS -->
                  <div>
                      <h2 class="text-lg font-bold text-gray-900 mb-4">1. Thống Kê Của Tôi</h2>
                      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                          <div class="glass-panel p-6 border-l-4 border-gray-400">
                              <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wide leading-tight">Số Khách Tiếp Nhận</h3>
                              <p class="text-4xl font-black text-gray-900 mt-2" id="sale-stat-total-pax">...</p>
                              <p class="text-[10px] text-gray-400 mt-1">Tổng đơn trong kỳ (mọi trạng thái)</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-blue-500">
                              <h3 class="text-xs font-bold text-blue-500 uppercase tracking-wide leading-tight">Số Khách Hoàn Thành</h3>
                              <p class="text-4xl font-black text-blue-600 mt-2" id="sale-stat-success-pax">...</p>
                              <p class="text-[10px] text-gray-400 mt-1">Đã đủ chi phí &amp; đã khởi hành</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-csr-orange">
                              <h3 class="text-xs font-bold text-csr-orange uppercase tracking-wide leading-tight">Tổng Doanh Thu</h3>
                              <p class="text-3xl font-black text-csr-orange mt-2" id="sale-stat-revenue">...</p>
                              <p class="text-[10px] text-gray-400 mt-1">Đơn Đã cọc + Hoàn tất trong kỳ</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-green-500">
                              <h3 class="text-xs font-bold text-green-600 uppercase tracking-wide leading-tight">Hoa Hồng Thực Nhận</h3>
                              <p class="text-3xl font-black text-green-600 mt-2" id="sale-stat-real-comm">...</p>
                              <p class="text-[10px] text-gray-400 mt-1">Từ các khách đã hoàn thành</p>
                          </div>
                      </div>
                  </div>

                  <!-- PHẦN 2: BẢNG BÁO CÁO CÁ NHÂN THEO TOUR (SALE ONLY) -->
                  <div class="glass-panel overflow-hidden mt-8">
                      <div class="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-100/50">
                          <div>
                              <h2 class="text-lg font-bold text-gray-900">2. Báo Cáo Doanh Thu Theo Tuyến Tour</h2>
                              <p class="text-xs text-gray-500 mt-1">Gom nhóm dựa trên tour đã chốt thành công trong kỳ.</p>
                          </div>
                      </div>
                      <div class="overflow-x-auto">
                          <table class="w-full text-left border-collapse">
                              <thead>
                                  <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-400 font-bold">
                                      <th class="p-4 text-center w-16">STT</th>
                                      <th class="p-4">Tên Tour</th>
                                      <th class="p-4 text-center">Đơn Chốt</th>
                                      <th class="p-4 text-right">Doanh Số Kéo Về</th>
                                      <th class="p-4 text-right text-csr-orange">Hoa Hồng Kênh</th>
                                      <th class="p-4 text-center">Thao Tác</th>
                                  </tr>
                              </thead>
                              <tbody id="saleTourTableBody" class="divide-y divide-gray-100">
                                  <tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Đang tải dữ liệu...</td></tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  `}

               </div>
          </main>
        </div>
      </div>

      <!-- SALE / ADMIN DETAIL MODAL -->
      <div id="saleDetailModal" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-200">
          <div class="bg-white border border-gray-200 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl scale-95 transition-transform duration-300 flex flex-col" id="saleDetailContent">
              <div class="sticky top-0 bg-white/95 backdrop-blur z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <div>
                      <h2 class="text-lg font-bold text-gray-900 flex items-center gap-2" id="modalSaleName">Chi Tiết</h2>
                      <p class="text-xs text-gray-500 mt-0.5" id="modalMonthText"></p>
                  </div>
                  <button type="button" class="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors" onclick="window.closeSaleDetailModal()">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
              </div>
              
              <div class="p-6 flex-1 bg-gray-50/50">
                ${u?`
                <!-- Admin Modal Stats -->
                <div class="grid grid-cols-3 gap-4 mb-6" id="adminModalStats">
                    <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <div class="text-xs text-gray-500 font-bold uppercase mb-1">Tổng Đơn</div>
                        <div class="text-xl font-black text-gray-900" id="modalTotalBookings">0</div>
                    </div>
                    <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <div class="text-xs text-gray-500 font-bold uppercase mb-1">Doanh Số</div>
                        <div class="text-xl font-black text-gray-900" id="modalTotalRevenue">0đ</div>
                    </div>
                    <div class="bg-orange-50 p-4 rounded-xl border border-orange-200 shadow-sm">
                        <div class="text-xs text-csr-orange font-bold uppercase mb-1">Tiền Hoa Hồng</div>
                        <div class="text-xl font-black text-csr-orange" id="modalTotalCommission">0đ</div>
                    </div>
                </div>
                `:""}

                <!-- Bookings Table -->
                <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <table class="w-full text-left text-sm">
                        <thead class="bg-gray-100 border-b border-gray-200 text-xs text-gray-600 uppercase font-bold">
                            <tr>
                                <th class="p-4 w-1/2 border-r border-gray-200">
                                    <div class="flex items-center gap-2"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> Thông Tin Khách Hàng</div>
                                </th>
                                <th class="p-4 w-1/2">
                                    <div class="flex items-center gap-2"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> Chi Tiết Đơn Hàng &amp; Hoa Hồng</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="modalBookingsBody" class="divide-y divide-gray-100">
                        </tbody>
                    </table>
                </div>
              </div>
          </div>
      </div>
    `},V=()=>{let c={role:"sale",fullName:"Guest",id:null};try{const t=localStorage.getItem("csr_user");t&&(c=JSON.parse(t))}catch{}const u=c.role==="admin";let x=[],w=[],T=[],p=[];const h=document.getElementById("reportDateFrom"),m=document.getElementById("reportDateTo"),D=document.getElementById("reportApplyBtn"),C=new Date;C.setHours(0,0,0,0);const g=t=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(t||0),H=t=>{if(!t)return null;const e=t.split("-")[0].trim();if(e.includes("/")){const s=e.split("/");if(s.length===3)return new Date(parseInt(s[2]),parseInt(s[1])-1,parseInt(s[0]))}else if(e.includes("-"))return new Date(e);return null},B=()=>{const t=h.value?new Date(h.value):null,e=m.value?new Date(m.value):null;return t&&t.setHours(0,0,0,0),e&&e.setHours(23,59,59,999),{from:t,to:e}},L=(t,e,s)=>{const o=H(t.date);return!(!o||e&&o<e||s&&o>s)},M=()=>{const t={};return T.forEach(e=>{t[String(e.id)]=e.full_name||e.fullName||e.username||`User #${e.id}`}),t},_=async()=>{try{const[t,e,s]=await Promise.all([fetch("/api/admin_tours"),fetch("/api/bookings"),fetch("/api/users")]),o=t.ok?await t.json():{};x=Array.isArray(o)?o:o.data||[],w=e.ok?await e.json():[],T=s.ok?await s.json():[],u&&I(),f()}catch(t){console.error("Lỗi tải data báo cáo:",t),alert("Có lỗi xảy ra khi lấy dữ liệu báo cáo!")}},I=()=>{const t=document.getElementById("commissionSetupContainer");if(!t)return;if(x.length===0){t.innerHTML='<div class="text-sm text-gray-500 text-center py-4">Không có Tour nào trong hệ thống.</div>';return}const e=x.map(s=>{const o=s.commission_rate??5;return`
                <div class="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:border-csr-orange/30 transition-colors">
                    <div class="font-medium text-sm text-gray-900 flex-1 truncate pr-4">${s.name}</div>
                    <div class="flex items-center gap-2">
                        <div class="relative w-24">
                            <input type="number" min="0" max="100" step="0.5" class="w-full bg-gray-50 border border-gray-200 rounded-lg py-1.5 pl-3 pr-8 text-sm font-bold focus:border-csr-orange focus:outline-none" value="${o}" id="comm_input_${s.id}">
                            <span class="absolute right-3 top-1.5 text-gray-400 font-bold">%</span>
                        </div>
                        <button class="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-csr-orange transition-colors" onclick="window.saveCommission(${s.id})">Lưu</button>
                    </div>
                </div>
            `}).join("");t.innerHTML=`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">${e}</div>`};window.saveCommission=async t=>{const e=document.getElementById(`comm_input_${t}`);if(!e)return;const s=parseFloat(e.value);if(isNaN(s)||s<0||s>100){alert("Tỉ lệ hoa hồng không hợp lệ (0-100)");return}const o=e.nextElementSibling,r=o.textContent;o.textContent="...",o.disabled=!0;try{if((await fetch(`/api/admin_tours?id=${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({commission_rate:s})})).ok){const i=x.find(l=>l.id===t);i&&(i.commission_rate=s),o.classList.add("bg-green-500"),o.textContent="Đã lưu!",setTimeout(()=>{o.classList.remove("bg-green-500"),o.textContent=r,o.disabled=!1},1500),f()}else throw new Error("Lỗi cập nhật")}catch{alert("Lỗi khi lưu tỉ lệ hoa hồng!"),o.textContent=r,o.disabled=!1}};const f=()=>{const{from:t,to:e}=B(),s=M();let o=[];p=w.filter(a=>{if(!L(a,t,e))return!1;if(!u){const i=String(a.sale_id||""),l=String(c.id||c.userId||""),y=a.sale_name&&a.sale_name.toLowerCase()===c.fullName.toLowerCase();(l&&i===l||!l&&y)&&o.push(a)}return!(!a.status||!a.status.includes("Đã cọc")&&!a.status.includes("Hoàn tất")&&!a.status.includes("Hoàn thành"))}),p.forEach(a=>{const i=x.find(y=>y.name===a.tour);a._rate=i?.commission_rate??5,a._commission=(a.total_price||0)*(a._rate/100);const l=String(a.sale_id||"");l&&s[l]?(a._displaySaleName=s[l],a._saleIdStr=l):(a._displaySaleName=a.sale_name||"Admin / Tự Đặt",a._saleIdStr=l||a.sale_name||"no-id")});const r=h.value&&m.value?`${h.value.split("-").reverse().join("/")} → ${m.value.split("-").reverse().join("/")}`:"";u?(E(),$(r)):R(o)},E=()=>{const t=document.getElementById("stat-departures"),e=document.getElementById("stat-pax"),s=document.getElementById("stat-revenue");if(!t)return;const o=new Set;p.forEach(r=>o.add(r.tour+"|"+r.date)),t.textContent=o.size,e.textContent=p.length,s.textContent=g(p.reduce((r,a)=>r+(Number(a.total_price)||0),0))},$=t=>{const e=document.getElementById("salesTableBody");if(!e)return;const s={};p.forEach(r=>{const a=r._saleIdStr;s[a]||(s[a]={key:a,name:r._displaySaleName,bookings:[],totalRev:0,totalComm:0}),s[a].bookings.push(r),s[a].totalRev+=Number(r.total_price)||0,s[a].totalComm+=r._commission});let o=Object.values(s).sort((r,a)=>a.totalRev-r.totalRev);if(window._currentDetailMode="admin",window._currentDetailList=o,window._reportRangeLabel=t,o.length===0){e.innerHTML='<tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Chưa có dữ liệu nào trong kỳ này.</td></tr>';return}e.innerHTML=o.map((r,a)=>{const i=a+1;let l=`<div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold mx-auto text-xs">${i}</div>`;return i===1?l='<div class="w-8 h-8 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center text-yellow-600 font-bold mx-auto text-xs">🥇1</div>':i===2?l='<div class="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 font-bold mx-auto text-xs">🥈2</div>':i===3&&(l='<div class="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold mx-auto text-xs">🥉3</div>'),`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 border-b border-gray-100">${l}</td>
                    <td class="p-4 border-b border-gray-100 font-bold text-gray-900">${r.name}</td>
                    <td class="p-4 border-b border-gray-100 text-center font-medium">${r.bookings.length}</td>
                    <td class="p-4 border-b border-gray-100 text-right font-black text-gray-900">${g(r.totalRev)}</td>
                    <td class="p-4 border-b border-gray-100 text-right font-black text-csr-orange">${g(r.totalComm)}</td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <button class="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-md hover:border-csr-orange hover:text-csr-orange transition-colors font-medium" onclick="window.openSaleDetail(${a})">Xem Lịch Sử Đơn</button>
                    </td>
                </tr>
            `}).join("")},R=t=>{const e=t.length,s=String(c.id||c.userId||""),o=p.filter(n=>{const d=String(n.sale_id||""),k=n.sale_name&&n.sale_name.toLowerCase()===c.fullName.toLowerCase();return s?d===s:k}),r=o.filter(n=>{if(!(n.status&&(n.status.includes("Hoàn tất")||n.status.includes("Hoàn thành"))))return!1;const k=H(n.date);return k&&k<C}),a=r.length,i=o.reduce((n,d)=>n+(Number(d.total_price)||0),0),l=r.reduce((n,d)=>n+d._commission,0);document.getElementById("sale-stat-total-pax").textContent=e,document.getElementById("sale-stat-success-pax").textContent=a,document.getElementById("sale-stat-revenue").textContent=g(i),document.getElementById("sale-stat-real-comm").textContent=g(l);const y=document.getElementById("saleTourTableBody");if(!y)return;const v={};o.forEach(n=>{const d=n.tour||"Khác";v[d]||(v[d]={tourName:d,bookings:[],totalRev:0,totalComm:0}),v[d].bookings.push(n),v[d].totalRev+=Number(n.total_price)||0,v[d].totalComm+=n._commission});let S=Object.values(v).sort((n,d)=>d.totalRev-n.totalRev);if(window._currentDetailMode="sale",window._currentDetailList=S,S.length===0){y.innerHTML='<tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Bạn chưa có đơn hàng nào chốt thành công trong kỳ này.</td></tr>';return}y.innerHTML=S.map((n,d)=>`
            <tr class="hover:bg-gray-50 transition-colors bg-white">
                <td class="p-4 border-b border-gray-100 text-center text-gray-500 font-bold text-sm">${d+1}</td>
                <td class="p-4 border-b border-gray-100 font-bold text-gray-900">${n.tourName}</td>
                <td class="p-4 border-b border-gray-100 text-center font-medium">${n.bookings.length}</td>
                <td class="p-4 border-b border-gray-100 text-right font-black text-gray-900">${g(n.totalRev)}</td>
                <td class="p-4 border-b border-gray-100 text-right font-black text-csr-orange">${g(n.totalComm)}</td>
                <td class="p-4 border-b border-gray-100 text-center">
                    <button class="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-md hover:border-csr-orange hover:text-csr-orange transition-colors font-medium shadow-sm" onclick="window.openSaleDetail(${d})">Xem Chi Tiết Khách</button>
                </td>
            </tr>
        `).join("")},b=document.getElementById("saleDetailModal"),N=document.getElementById("saleDetailContent");window.closeSaleDetailModal=()=>{b.classList.add("opacity-0"),N.classList.add("scale-95"),setTimeout(()=>b.classList.add("hidden"),200)},window.openSaleDetail=t=>{const e=window._currentDetailList[t];if(!e)return;const s=window._reportRangeLabel||"";window._currentDetailMode==="admin"?(document.getElementById("modalSaleName").innerHTML=`Lịch sử đơn của: <span class="text-csr-orange">${e.name}</span>`,document.getElementById("modalMonthText").textContent=`Kỳ: ${s}`,document.getElementById("modalTotalBookings").textContent=e.bookings.length,document.getElementById("modalTotalRevenue").textContent=g(e.totalRev),document.getElementById("modalTotalCommission").textContent=g(e.totalComm)):(document.getElementById("modalSaleName").innerHTML=`Đơn chốt - Tuyến Tour: <span class="text-csr-orange">${e.tourName}</span>`,document.getElementById("modalMonthText").textContent=`Kỳ Báo Cáo: ${s}`);const o=document.getElementById("modalBookingsBody");o.innerHTML=e.bookings.map(r=>`
            <tr class="hover:bg-blue-50/20 transition-colors">
                <td class="p-4 border-r border-gray-100 border-b align-top">
                    <div class="font-bold text-gray-900 text-base mb-1">${r.name}</div>
                    <div class="text-xs text-gray-500 flex items-center gap-1">
                        SĐT: <span class="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono tracking-wider">${r.phone||"N/A"}</span>
                    </div>
                    ${window._currentDetailMode==="admin"?`<div class="text-[10px] text-gray-400 mt-1">Sale: ${r._displaySaleName}</div>`:""}
                </td>
                <td class="p-4 border-b border-gray-100 align-top">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded">${r.tour}</span>
                        <span class="text-xs text-gray-400">Khởi hành: ${r.date}</span>
                    </div>
                    <div class="text-xs mb-1">
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${r.status&&r.status.includes("Hoàn tất")?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}">${r.status||"-"}</span>
                    </div>
                    <div class="flex items-center justify-between text-sm mt-3 border-t border-gray-100 border-dashed pt-3">
                        <div class="text-gray-500">Giá trị đơn: <span class="font-bold text-gray-900">${g(r.total_price)}</span></div>
                        <div class="flex gap-4">
                            <div class="text-gray-500">Tỉ lệ HH: <span class="font-bold text-gray-900">${r._rate}%</span></div>
                            <div class="text-csr-orange bg-orange-50 px-2 py-0.5 rounded font-black border border-orange-100">+ ${g(r._commission)}</div>
                        </div>
                    </div>
                </td>
            </tr>
        `).join(""),b.classList.remove("hidden"),requestAnimationFrame(()=>{b.classList.remove("opacity-0"),N.classList.remove("scale-95")})},D.addEventListener("click",f),h.addEventListener("keydown",t=>{t.key==="Enter"&&f()}),m.addEventListener("keydown",t=>{t.key==="Enter"&&f()}),b&&b.addEventListener("click",t=>{t.target===b&&window.closeSaleDetailModal()}),_()};export{V as afterRender,K as render};
