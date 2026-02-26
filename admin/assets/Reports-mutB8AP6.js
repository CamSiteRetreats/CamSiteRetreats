import{S as N,H as S}from"./Header-CvqOcIss.js";const L=()=>{let h={role:"sale",fullName:"Guest"};try{const i=localStorage.getItem("csr_user");i&&(h=JSON.parse(i))}catch{}const m=h.role==="admin",x=new Date,b=`${x.getFullYear()}-${(x.getMonth()+1).toString().padStart(2,"0")}`;return`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${N()}
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${S()}
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
               <div class="max-w-7xl mx-auto space-y-8">
                  
                  <div class="flex justify-between items-end">
                      <div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Báo Cáo & Hiệu Suất</h1>
                          <p class="text-gray-500 text-sm">
                            ${m?"Quản lý hoa hồng, doanh thu tổng và xếp hạng Sales.":"Bảng xếp hạng doanh số và theo dõi hoa hồng."}
                          </p>
                      </div>
                      <div class="flex items-center gap-3">
                          <label class="text-sm font-bold text-gray-500 uppercase">Kỳ Báo Cáo:</label>
                          <input type="month" id="reportMonth" class="input-field text-sm w-48 font-bold" value="${b}">
                      </div>
                  </div>

                  ${m?`
                  <!-- PHẦN 1: QUẢN LÝ HOA HỒNG TOUR (ADMIN ONLY) -->
                  <div class="glass-panel overflow-hidden">
                      <div class="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-100/50">
                          <div>
                              <h2 class="text-lg font-bold text-gray-900">1. Cài Đặt Mức Hoa Hồng Tour</h2>
                              <p class="text-xs text-gray-500 mt-1">Lưu ý: Mức hoa hồng này sẽ được tính ngay lập tức cho các đơn hàng của tour tương ứng.</p>
                          </div>
                      </div>
                      <div class="p-4" id="commissionSetupContainer">
                          <!-- Tour list rendered here -->
                          <div class="text-center text-gray-400 py-4 text-sm">Đang tải danh sách Tour...</div>
                      </div>
                  </div>

                  <!-- PHẦN 2: DOANH THU TỔNG (ADMIN ONLY) -->
                  <div>
                      <h2 class="text-lg font-bold text-gray-900 mb-4">2. Thống Kê Doanh Thu Tổng (Tháng Chọn)</h2>
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
                              <p class="text-xs text-gray-500 mt-1">Tính theo các đơn hàng "Đã cọc" hoặc "Hoàn tất" khởi hành trong tháng.</p>
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
                  
                  <!-- PHẦN 1: THỐNG KÊ CÁ NHÂN (SALE ONLY) -->
                  <div>
                      <h2 class="text-lg font-bold text-gray-900 mb-4">1. Thống Kê Doanh Thu Đơn Của Tôi</h2>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div class="glass-panel p-6 border-l-4 border-gray-400">
                              <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wide">Số Khách Tiếp Nhận</h3>
                              <p class="text-4xl font-black text-gray-900 mt-2" id="sale-stat-total-pax">...</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-blue-500">
                              <h3 class="text-xs font-bold text-blue-500 uppercase tracking-wide">Số Khách Đã Hoàn Thành</h3>
                              <p class="text-4xl font-black text-blue-600 mt-2" id="sale-stat-success-pax">...</p>
                          </div>
                          <div class="glass-panel p-6 border-l-4 border-csr-orange">
                              <h3 class="text-xs font-bold text-csr-orange uppercase tracking-wide">Tổng Doanh Thu Của Tôi</h3>
                              <p class="text-4xl font-black text-csr-orange mt-2" id="sale-stat-revenue">...</p>
                          </div>
                      </div>
                  </div>

                  <!-- PHẦN 2: BẢNG BÁO CÁO CÁ NHÂN THEO TOUR (SALE ONLY) -->
                  <div class="glass-panel overflow-hidden mt-8">
                      <div class="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-100/50">
                          <div>
                              <h2 class="text-lg font-bold text-gray-900">2. Báo Cáo Doanh Thu Tháng Theo Tuyến Tour</h2>
                              <p class="text-xs text-gray-500 mt-1">Gom nhóm dựa trên tour đã chốt thành công trong tháng.</p>
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
                ${m?`
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

                <!-- Bookings Table (2 Columns layout for Sales, standard for Admin) -->
                <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <table class="w-full text-left text-sm">
                        <thead class="bg-gray-100 border-b border-gray-200 text-xs text-gray-600 uppercase font-bold">
                            <!-- Layout 2 cột rõ ràng cho Sale View, Admin xem chung bảng cũ -->
                            <tr>
                                <th class="p-4 w-1/2 border-r border-gray-200">
                                    <div class="flex items-center gap-2"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> Thông Khách Hàng</div>
                                </th>
                                <th class="p-4 w-1/2">
                                    <div class="flex items-center gap-2"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> Chi Tiết Đơn Hàng & Hoa Hồng</div>
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
    `},B=()=>{let h={role:"sale",fullName:"Guest"};try{const a=localStorage.getItem("csr_user");a&&(h=JSON.parse(a))}catch{}const m=h.role==="admin";let x=[],b=[],i=[];const p=document.getElementById("reportMonth"),g=a=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(a||0),f=async()=>{try{const[a,o]=await Promise.all([fetch("/api/tours"),fetch("/api/bookings")]);x=a.ok?await a.json():[],b=o.ok?await o.json():[],m&&w(),y()}catch(a){console.error("Lỗi tải data báo cáo:",a),alert("Có lỗi xảy ra khi lấy dữ liệu báo cáo!")}},w=()=>{const a=document.getElementById("commissionSetupContainer");if(!a)return;if(x.length===0){a.innerHTML='<div class="text-sm text-gray-500 text-center py-4">Không có Tour nào trong hệ thống.</div>';return}const o=x.map(e=>{const t=e.commission_rate??5;return`
                <div class="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:border-csr-orange/30 transition-colors">
                    <div class="font-medium text-sm text-gray-900 flex-1 truncate pr-4">${e.name}</div>
                    <div class="flex items-center gap-2">
                        <div class="relative w-24">
                            <input type="number" min="0" max="100" step="0.5" class="w-full bg-gray-50 border border-gray-200 rounded-lg py-1.5 pl-3 pr-8 text-sm font-bold focus:border-csr-orange focus:outline-none" value="${t}" id="comm_input_${e.id}">
                            <span class="absolute right-3 top-1.5 text-gray-400 font-bold">%</span>
                        </div>
                        <button class="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-csr-orange transition-colors" onclick="window.saveCommission(${e.id})">Lưu</button>
                    </div>
                </div>
            `}).join("");a.innerHTML=`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">${o}</div>`};window.saveCommission=async a=>{const o=document.getElementById(`comm_input_${a}`);if(!o)return;const e=parseFloat(o.value);if(isNaN(e)||e<0||e>100){alert("Tỉ lệ hoa hồng không hợp lệ (0-100)");return}const t=o.nextElementSibling,r=t.textContent;t.textContent="...",t.disabled=!0;try{if((await fetch(`/api/tours?id=${a}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({commission_rate:e})})).ok){const s=x.find(c=>c.id===a);s&&(s.commission_rate=e),t.classList.add("bg-green-500"),t.textContent="Đã lưu!",setTimeout(()=>{t.classList.remove("bg-green-500"),t.textContent=r,t.disabled=!1},1500),y()}else throw new Error("Lỗi cập nhật")}catch{alert("Lỗi khi lưu tỉ lệ hoa hồng!"),t.textContent=r,t.disabled=!1}};const y=()=>{const a=p.value;if(!a)return;let o=[];i=b.filter(e=>{if(!e.date)return!1;let t,r;if(e.date.includes("/")){const c=e.date.split("-")[0].trim().split("/");c.length===3&&(t=c[2],r=c[1].padStart(2,"0"))}else if(e.date.includes("-")){const s=e.date.split("-");t=s[0],r=s[1]}return!(!t||!r||`${t}-${r}`!==a||(!m&&e.sale_name&&e.sale_name.toLowerCase()===h.fullName.toLowerCase()&&o.push(e),!e.status||!e.status.includes("Đã cọc")&&!e.status.includes("Hoàn tất")))}),i.forEach(e=>{const t=x.find(r=>r.name===e.tour);e._rate=t&&t.commission_rate!==void 0?t.commission_rate:5,e._commission=(e.total_price||0)*(e._rate/100),e._saleName=e.sale_name||"Admin / Tự Đặt"}),m?(T(),k()):C(o)},T=()=>{const a=document.getElementById("stat-departures"),o=document.getElementById("stat-pax"),e=document.getElementById("stat-revenue");if(!a)return;const t=new Set;i.forEach(s=>t.add(s.tour+"|"+s.date));const r=i.length,l=i.reduce((s,c)=>s+(Number(c.total_price)||0),0);a.textContent=t.size,o.textContent=r,e.textContent=g(l)},k=()=>{const a=document.getElementById("salesTableBody");if(!a)return;const o={};i.forEach(t=>{const r=t._saleName;o[r]||(o[r]={name:r,bookings:[],totalRev:0,totalComm:0}),o[r].bookings.push(t),o[r].totalRev+=Number(t.total_price)||0,o[r].totalComm+=t._commission});let e=Object.values(o).sort((t,r)=>r.totalRev-t.totalRev);if(window._currentDetailMode="admin",window._currentDetailList=e,e.length===0){a.innerHTML='<tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Chưa có dữ liệu nào trong tháng này.</td></tr>';return}a.innerHTML=e.map((t,r)=>{const l=r+1;let s=`<div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold mx-auto text-xs">${l}</div>`;return l===1?s='<div class="w-8 h-8 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center text-yellow-600 font-bold mx-auto text-xs">🥇1</div>':l===2?s='<div class="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 font-bold mx-auto text-xs">🥈2</div>':l===3&&(s='<div class="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold mx-auto text-xs">🥉3</div>'),`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 border-b border-gray-100">${s}</td>
                    <td class="p-4 border-b border-gray-100 font-bold text-gray-900">${t.name}</td>
                    <td class="p-4 border-b border-gray-100 text-center font-medium">${t.bookings.length}</td>
                    <td class="p-4 border-b border-gray-100 text-right font-black text-gray-900">${g(t.totalRev)}</td>
                    <td class="p-4 border-b border-gray-100 text-right font-black text-csr-orange">${g(t.totalComm)}</td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <button class="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-md hover:border-csr-orange hover:text-csr-orange transition-colors font-medium" onclick="window.openSaleDetail(${r})">Xem Lịch Sử Đơn</button>
                    </td>
                </tr>
            `}).join("")},C=a=>{const o=a.length,e=i.filter(n=>n.sale_name&&n.sale_name.toLowerCase()===h.fullName.toLowerCase()),t=e.length,r=e.reduce((n,d)=>n+(Number(d.total_price)||0),0);document.getElementById("sale-stat-total-pax").textContent=o,document.getElementById("sale-stat-success-pax").textContent=t,document.getElementById("sale-stat-revenue").textContent=g(r);const l=document.getElementById("saleTourTableBody");if(!l)return;const s={};e.forEach(n=>{const d=n.tour||"Khác";s[d]||(s[d]={tourName:d,bookings:[],totalRev:0,totalComm:0}),s[d].bookings.push(n),s[d].totalRev+=Number(n.total_price)||0,s[d].totalComm+=n._commission});let c=Object.values(s).sort((n,d)=>d.totalRev-n.totalRev);if(window._currentDetailMode="sale",window._currentDetailList=c,c.length===0){l.innerHTML='<tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Bạn chưa có đơn hàng nào chốt thành công trong tháng này.</td></tr>';return}l.innerHTML=c.map((n,d)=>`
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
        `).join("")},u=document.getElementById("saleDetailModal"),v=document.getElementById("saleDetailContent");window.closeSaleDetailModal=()=>{u.classList.add("opacity-0"),v.classList.add("scale-95"),setTimeout(()=>u.classList.add("hidden"),200)},window.openSaleDetail=a=>{const o=window._currentDetailList[a];if(!o)return;window._currentDetailMode==="admin"?(document.getElementById("modalSaleName").innerHTML=`Lịch sử đơn của Sale: <span class="text-csr-orange">${o.name}</span>`,document.getElementById("modalMonthText").textContent=`Thống kê Tháng ${p.value}`,document.getElementById("modalTotalBookings").textContent=o.bookings.length,document.getElementById("modalTotalRevenue").textContent=g(o.totalRev),document.getElementById("modalTotalCommission").textContent=g(o.totalComm)):(document.getElementById("modalSaleName").innerHTML=`Trích xuất đơn chốt - Tuyến Tour: <span class="text-csr-orange">${o.tourName}</span>`,document.getElementById("modalMonthText").textContent=`Kỳ Báo Cáo ${p.value}`);const e=document.getElementById("modalBookingsBody");e.innerHTML=o.bookings.map(t=>`
                <tr class="hover:bg-blue-50/20 transition-colors">
                    <td class="p-4 border-r border-gray-100 border-b align-top">
                        <div class="font-bold text-gray-900 text-base mb-1">${t.name}</div>
                        <div class="text-xs text-gray-500 flex items-center gap-1">
                            Mã số: <span class="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono tracking-wider">${t.phone||"N/A"}</span>
                        </div>
                    </td>
                    <td class="p-4 border-b border-gray-100 align-top">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-sm font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded">${t.tour}</span>
                            <span class="text-xs text-gray-400">Khởi hành: ${t.date}</span>
                        </div>
                        <div class="flex items-center justify-between text-sm mt-3 border-t border-gray-100 border-dashed pt-3">
                            <div class="text-gray-500">Giá trị đơn: <span class="font-bold text-gray-900">${g(t.total_price)}</span></div>
                            <div class="flex gap-4">
                                <div class="text-gray-500">Tỉ lệ HH: <span class="font-bold text-gray-900">${t._rate}%</span></div>
                                <div class="text-csr-orange bg-orange-50 px-2 py-0.5 rounded font-black border border-orange-100">+ ${g(t._commission)}</div>
                            </div>
                        </div>
                    </td>
                </tr>
            `).join(""),u.classList.remove("hidden"),requestAnimationFrame(()=>{u.classList.remove("opacity-0"),v.classList.remove("scale-95")})},p.addEventListener("change",()=>{y()}),u&&u.addEventListener("click",a=>{a.target===u&&window.closeSaleDetailModal()}),f()};export{B as afterRender,L as render};
