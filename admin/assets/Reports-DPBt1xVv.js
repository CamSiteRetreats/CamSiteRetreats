import{S as J,H as X}from"./Header-Dmidaim7.js";const K=()=>{let v={role:"sale",fullName:"Guest",id:null};try{const w=localStorage.getItem("csr_user");w&&(v=JSON.parse(w))}catch{}const S=v.role==="admin",p=new Date,I=new Date(p.getFullYear(),p.getMonth(),1),x=new Date(p.getFullYear(),p.getMonth()+1,0).toISOString().split("T")[0],y=I.toISOString().split("T")[0];return`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${J()}
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${X()}
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
            <div class="max-w-7xl mx-auto space-y-6">

              <!-- Header & Date Filter -->
              <div class="flex justify-between items-end flex-wrap gap-4">
                  <div>
                      <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-1">
                        ${S?"💰 Hoa Hồng & Báo Cáo":"📊 Báo Cáo Của Tôi"}
                      </h1>
                      <p class="text-gray-500 text-sm">${S?"Quản lý và thanh toán hoa hồng cho đội ngũ Sales.":"Theo dõi đơn hàng và hoa hồng của bạn."}</p>
                  </div>
                  <div class="flex items-center gap-3 flex-wrap">
                      <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm">
                          <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <label class="text-xs font-bold text-gray-400 uppercase whitespace-nowrap">Từ ngày</label>
                          <input type="date" id="reportDateFrom" class="text-sm font-bold text-gray-800 border-none outline-none bg-transparent" value="${y}">
                      </div>
                      <span class="text-gray-400 font-bold">→</span>
                      <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm">
                          <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <label class="text-xs font-bold text-gray-400 uppercase whitespace-nowrap">Đến ngày</label>
                          <input type="date" id="reportDateTo" class="text-sm font-bold text-gray-800 border-none outline-none bg-transparent" value="${x}">
                      </div>
                      <button id="reportApplyBtn" class="bg-gray-900 hover:bg-csr-orange text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm">Lọc</button>
                  </div>
              </div>

              ${S?`
              <!-- ADMIN: Cài đặt % hoa hồng theo Tour -->
              <div class="glass-panel overflow-hidden">
                  <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-100/50 cursor-pointer" id="commissionSetupToggle">
                      <div>
                          <h2 class="text-base font-bold text-gray-900">⚙️ Cài đặt % Hoa Hồng Theo Tour</h2>
                          <p class="text-xs text-gray-400 mt-0.5">Click để mở/đóng</p>
                      </div>
                      <svg id="commissionSetupChevron" class="w-5 h-5 text-gray-400 transition-transform duration-200 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                  <div class="p-4 hidden" id="commissionSetupContainer">
                      <div class="text-center text-gray-400 py-4 text-sm">Đang tải danh sách Tour...</div>
                  </div>
              </div>

              <!-- ADMIN: Danh sách Sales -->
              <div class="glass-panel overflow-hidden">
                  <div class="p-4 border-b border-gray-200 bg-gray-100/50">
                      <h2 class="text-base font-bold text-gray-900">👥 Danh Sách Nhân Viên Sale</h2>
                      <p class="text-xs text-gray-400 mt-0.5">Bấm "Xem" để mở lịch sử đơn và thanh toán hoa hồng.</p>
                  </div>
                  <div class="overflow-x-auto">
                      <table class="w-full text-left border-collapse text-sm">
                          <thead>
                              <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-400 font-bold">
                                  <th class="p-4">#</th>
                                  <th class="p-4">Nhân Viên Sale</th>
                                  <th class="p-4 text-center">Đơn Đã Cọc</th>
                                  <th class="p-4 text-center">Đơn Hoàn Thành</th>
                                  <th class="p-4 text-right text-csr-orange">HH Chưa Thanh Toán</th>
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
              <!-- SALE: 4 Stat Cards -->
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div class="glass-panel p-5 border-l-4 border-gray-400">
                      <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wide leading-tight">Tổng Đơn Tiếp Nhận</h3>
                      <p class="text-3xl font-black text-gray-900 mt-2" id="sale-stat-total-pax">...</p>
                  </div>
                  <div class="glass-panel p-5 border-l-4 border-blue-500">
                      <h3 class="text-xs font-bold text-blue-500 uppercase tracking-wide leading-tight">Đã Hoàn Thành</h3>
                      <p class="text-3xl font-black text-blue-600 mt-2" id="sale-stat-success-pax">...</p>
                  </div>
                  <div class="glass-panel p-5 border-l-4 border-csr-orange">
                      <h3 class="text-xs font-bold text-csr-orange uppercase tracking-wide leading-tight">Tổng Doanh Số</h3>
                      <p class="text-2xl font-black text-csr-orange mt-2" id="sale-stat-revenue">...</p>
                  </div>
                  <div class="glass-panel p-5 border-l-4 border-green-500">
                      <h3 class="text-xs font-bold text-green-600 uppercase tracking-wide leading-tight">HH Thực Nhận</h3>
                      <p class="text-2xl font-black text-green-600 mt-2" id="sale-stat-real-comm">...</p>
                  </div>
              </div>

              <!-- SALE: Lịch sử đơn của mình -->
              <div class="glass-panel overflow-hidden">
                  <div class="p-4 border-b border-gray-200 bg-gray-100/50">
                      <h2 class="text-base font-bold text-gray-900">📋 Lịch Sử Đơn Của Tôi</h2>
                  </div>
                  <div id="saleOrdersContainer">
                      <div class="p-8 text-center text-gray-400 text-sm">Đang tải...</div>
                  </div>
              </div>

              <!-- SALE: Lịch sử thanh toán HH từ Admin -->
              <div class="glass-panel overflow-hidden">
                  <div class="p-4 border-b border-gray-200 bg-gray-100/50">
                      <h2 class="text-base font-bold text-gray-900">💸 Lịch Sử Admin Thanh Toán Hoa Hồng</h2>
                  </div>
                  <div id="salePaymentHistoryContainer">
                      <div class="p-8 text-center text-gray-400 text-sm">Đang tải...</div>
                  </div>
              </div>
              `}

            </div>
          </main>
        </div>
      </div>

      <!-- ADMIN SALE DETAIL PANEL (SLIDE-IN) -->
      <div id="saleDetailPanel" class="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm hidden opacity-0 transition-opacity duration-200 flex items-stretch justify-end">
          <div class="bg-white w-full max-w-4xl h-full flex flex-col shadow-2xl translate-x-full transition-transform duration-300" id="saleDetailPanelInner">

              <!-- Panel Header -->
              <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-white shrink-0">
                  <div>
                      <h2 class="text-lg font-bold text-gray-900" id="panelSaleName">Chi Tiết Sale</h2>
                      <p class="text-xs text-gray-400 mt-0.5" id="panelSaleStats"></p>
                  </div>
                  <button onclick="window.closeSalePanel()" class="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
              </div>

              <!-- Payment Toolbar -->
              <div class="px-6 py-3 border-b border-gray-100 bg-orange-50/50 flex items-center justify-between gap-4 shrink-0" id="payToolbar">
                  <div class="text-sm text-gray-600" id="paySelectionInfo">Chọn đơn để thanh toán hoa hồng</div>
                  <button id="payCommissionBtn" onclick="window.openPayConfirmModal()"
                      class="bg-csr-orange text-white text-sm font-bold px-5 py-2 rounded-xl hover:bg-[#d65503] transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed" disabled>
                      💰 Thanh Toán Hoa Hồng
                  </button>
              </div>

              <!-- Tabs: Lịch sử đơn / Lịch sử thanh toán -->
              <div class="flex border-b border-gray-200 px-6 bg-white shrink-0">
                  <button id="tabOrders" onclick="window.switchPanelTab('orders')" class="py-3 px-1 mr-6 text-sm font-bold border-b-2 border-csr-orange text-csr-orange transition-colors">Lịch Sử Đơn</button>
                  <button id="tabPayHistory" onclick="window.switchPanelTab('pay-history')" class="py-3 px-1 mr-6 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 transition-colors">Lịch Sử Thanh Toán</button>
              </div>

              <!-- Tab Content -->
              <div class="flex-1 overflow-y-auto">
                  <!-- Orders Tab -->
                  <div id="tabContentOrders" class="p-4">
                      <div class="text-center text-gray-400 py-8 text-sm">Đang tải...</div>
                  </div>
                  <!-- Payment History Tab -->
                  <div id="tabContentPayHistory" class="p-4 hidden">
                      <div class="text-center text-gray-400 py-8 text-sm">Đang tải lịch sử...</div>
                  </div>
              </div>
          </div>
      </div>

      <!-- CONFIRM PAYMENT MODAL -->
      <div id="payConfirmModal" class="fixed inset-0 z-[60] bg-gray-900/70 backdrop-blur-sm hidden opacity-0 transition-opacity duration-200 flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6 scale-95 transition-transform duration-300" id="payConfirmModalInner">
              <h3 class="text-lg font-bold text-gray-900 mb-1">Xác Nhận Thanh Toán Hoa Hồng</h3>
              <p class="text-sm text-gray-500 mb-5">Vui lòng kiểm tra lại trước khi xác nhận.</p>

              <div class="bg-orange-50 border border-orange-100 rounded-xl p-4 space-y-2 mb-5">
                  <div class="flex justify-between text-sm"><span class="text-gray-500">Nhân viên:</span> <span class="font-bold text-gray-900" id="confirmSaleName">—</span></div>
                  <div class="flex justify-between text-sm"><span class="text-gray-500">Số đơn:</span> <span class="font-bold text-gray-900" id="confirmOrderCount">—</span></div>
                  <div class="flex justify-between text-sm border-t border-orange-100 pt-2 mt-2"><span class="text-gray-500 font-bold">Tổng hoa hồng:</span> <span class="font-black text-csr-orange text-lg" id="confirmTotalComm">—</span></div>
              </div>

              <div class="mb-5">
                  <label class="block text-xs font-bold text-gray-500 uppercase mb-1.5">Ghi Chú (tuỳ chọn)</label>
                  <input type="text" id="payNote" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-csr-orange focus:outline-none" placeholder="VD: Thanh toán tháng 4/2026...">
              </div>

              <div class="flex gap-3">
                  <button onclick="window.closePayConfirmModal()" class="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors text-sm">Hủy</button>
                  <button onclick="window.confirmPayCommission()" id="confirmPayBtn" class="flex-1 px-4 py-3 bg-csr-orange text-white rounded-xl font-bold hover:bg-[#d65503] transition-colors shadow-lg shadow-csr-orange/30 text-sm">✅ Xác Nhận Thanh Toán</button>
              </div>
          </div>
      </div>
    `},Q=()=>{let v={role:"sale",fullName:"Guest",id:null};try{const t=localStorage.getItem("csr_user");t&&(v=JSON.parse(t))}catch{}const S=v.role==="admin";let p=[],I=[],L=[],x=null,y=new Set,w=[];const M=document.getElementById("reportDateFrom"),E=document.getElementById("reportDateTo"),V=document.getElementById("reportApplyBtn"),f=t=>new Intl.NumberFormat("vi-VN").format(Math.round(t||0))+"đ",G=t=>{if(!t)return 0;try{const s=Array.isArray(t)?t:JSON.parse(t);if(Array.isArray(s))return s.reduce((e,n)=>e+(parseInt(n.price)||0),0)}catch{return(String(t).match(/price:\s*(\d+)/g)||[]).reduce((n,o)=>n+Number(o.replace(/price:\s*/,"")),0)}return 0},H=(t,s)=>{const e=s.find(k=>k.name&&t.tour&&k.name.toLowerCase().trim()===t.tour.toLowerCase().trim()),n=parseFloat(t.commission_rate??e?.commission_rate??5),o=G(t.services_booked),l=Math.max(0,(parseInt(t.total_price)||0)-(parseInt(t.discount)||0)-o),h=l*(n/100);return{rate:n,servicesTotal:o,basePrice:l,commission:h}},N=t=>{if(!t)return null;const s=t.split("-")[0].trim();if(s.includes("/")){const e=s.split("/");if(e.length===3)return new Date(parseInt(e[2]),parseInt(e[1])-1,parseInt(e[0]));if(e.length===2)return new Date(new Date().getFullYear(),parseInt(e[1])-1,parseInt(e[0]))}return s.match(/^\d{4}-/)?new Date(s):null},P=new Date;P.setHours(0,0,0,0);const B=(t,s,e)=>{const n=N(t.date);return!(!n||s&&n<s||e&&n>e)},D=()=>{const t=M?.value?new Date(M.value):null,s=E?.value?new Date(E.value):null;return t&&t.setHours(0,0,0,0),s&&s.setHours(23,59,59,999),{from:t,to:s}},A=t=>t.status&&(t.status.includes("Đã cọc")||t.status.includes("Hoàn tất")||t.status.includes("Hoàn thành")),T=t=>{if(!(t.status&&(t.status.includes("Hoàn tất")||t.status.includes("Hoàn thành"))))return!1;const e=N(t.date);return e&&e<P},j=async()=>{try{const[t,s,e]=await Promise.all([fetch("/api/admin_tours"),fetch("/api/bookings"),fetch("/api/users")]),n=t.ok?await t.json():{};p=Array.isArray(n)?n:n.data||[],I=s.ok?await s.json():[],L=e.ok?await e.json():[],S?(U(),_()):R()}catch(t){console.error("Lỗi tải dữ liệu báo cáo:",t)}},U=()=>{const t=document.getElementById("commissionSetupContainer");if(!t)return;if(p.length===0){t.innerHTML='<div class="text-sm text-gray-500 text-center py-4">Không có Tour nào.</div>';return}const s=p.map(e=>{const n=e.commission_rate??5;return`
                <div class="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:border-csr-orange/30 transition-colors">
                    <div class="font-medium text-sm text-gray-900 flex-1 truncate pr-4">${e.name}</div>
                    <div class="flex items-center gap-2">
                        <div class="relative w-24">
                            <input type="number" min="0" max="100" step="0.5"
                                class="w-full bg-gray-50 border border-gray-200 rounded-lg py-1.5 pl-3 pr-8 text-sm font-bold focus:border-csr-orange focus:outline-none"
                                value="${n}" id="comm_input_${e.id}">
                            <span class="absolute right-3 top-1.5 text-gray-400 font-bold">%</span>
                        </div>
                        <button class="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-csr-orange transition-colors"
                            onclick="window.saveCommission(${e.id})">Lưu</button>
                    </div>
                </div>`}).join("");t.innerHTML=`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">${s}</div>`,document.getElementById("commissionSetupToggle")?.addEventListener("click",()=>{t.classList.toggle("hidden"),document.getElementById("commissionSetupChevron")?.classList.toggle("rotate-180")})};window.saveCommission=async t=>{const s=document.getElementById(`comm_input_${t}`);if(!s)return;const e=parseFloat(s.value);if(isNaN(e)||e<0||e>100){alert("Tỉ lệ hoa hồng không hợp lệ (0–100)");return}const n=s.nextElementSibling;n.textContent="...",n.disabled=!0;try{if((await fetch(`/api/admin_tours?id=${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({commission_rate:e})})).ok){const l=p.find(h=>h.id===t);l&&(l.commission_rate=e),n.classList.add("bg-green-500"),n.textContent="✓ Đã lưu!",setTimeout(()=>{n.classList.remove("bg-green-500"),n.textContent="Lưu",n.disabled=!1},1500),_()}else throw new Error}catch{alert("Lỗi khi lưu!"),n.textContent="Lưu",n.disabled=!1}};const _=()=>{const{from:t,to:s}=D(),e=document.getElementById("salesTableBody");if(!e)return;const n=I.filter(a=>B(a,t,s)&&A(a)),o={},l={};L.forEach(a=>{const c=String(a.id),i=a.full_name||a.fullName||a.username||`User #${a.id}`;o[c]=i,l[i.trim().toLowerCase()]=c});const h={};n.forEach(a=>{const c=String(a.sale_id||"").trim();let i=c,u=a.sale_name||"Admin / Tự Đặt";if(c&&o[c])u=o[c];else{const b=l[(a.sale_name||"").trim().toLowerCase()];b?(i=b,u=o[b]):i=a.sale_name||"no-id"}h[i]||(h[i]={key:i,saleId:c||i,name:u,bookings:[]}),h[i].bookings.push(a)});const k=Object.values(h).sort((a,c)=>a.name.localeCompare(c.name));if(k.length===0){e.innerHTML='<tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Chưa có dữ liệu nào trong kỳ này.</td></tr>';return}e.innerHTML=k.map((a,c)=>{const i=a.bookings.filter(r=>!T(r)&&!r.commission_paid).length,u=a.bookings.filter(r=>T(r)&&!r.commission_paid).length,b=a.bookings.filter(r=>!r.commission_paid).reduce((r,g)=>r+H(g,p).commission,0);return`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 border-b border-gray-100 text-gray-400 text-sm font-medium">${c+1}</td>
                    <td class="p-4 border-b border-gray-100">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-full bg-csr-orange/10 text-csr-orange flex items-center justify-center font-bold text-sm shrink-0">${(a.name||"S").charAt(0).toUpperCase()}</div>
                            <div class="font-bold text-gray-900">${a.name}</div>
                        </div>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">${i} đơn</span>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <span class="inline-block bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">${u} đơn</span>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-right font-black text-csr-orange text-base">${f(b)}</td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <button class="text-xs bg-csr-orange text-white px-4 py-1.5 rounded-lg hover:bg-[#d65503] transition-colors font-bold shadow-sm"
                            onclick="window.openSalePanel('${a.key}')">Xem &rsaquo;</button>
                    </td>
                </tr>`}).join(""),window._salesMap=h,window._allToursRef=p};window.openSalePanel=async t=>{const s=window._salesMap?.[t];if(!s)return;x=s,y.clear(),document.getElementById("panelSaleName").textContent=s.name,$(),O();try{const o=await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(s.saleId)}`);w=o.ok?await o.json():[]}catch{w=[]}F();const e=document.getElementById("saleDetailPanel"),n=document.getElementById("saleDetailPanelInner");e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0"),n.classList.remove("translate-x-full")}),switchPanelTab("orders")},window.closeSalePanel=()=>{const t=document.getElementById("saleDetailPanel"),s=document.getElementById("saleDetailPanelInner");t.classList.add("opacity-0"),s.classList.add("translate-x-full"),setTimeout(()=>t.classList.add("hidden"),300)},window.switchPanelTab=t=>{const s=document.getElementById("tabContentOrders"),e=document.getElementById("tabContentPayHistory"),n=document.getElementById("tabOrders"),o=document.getElementById("tabPayHistory"),l=document.getElementById("payToolbar");t==="orders"?(s?.classList.remove("hidden"),e?.classList.add("hidden"),n?.classList.add("border-csr-orange","text-csr-orange"),n?.classList.remove("border-transparent","text-gray-500"),o?.classList.remove("border-csr-orange","text-csr-orange"),o?.classList.add("border-transparent","text-gray-500"),l?.classList.remove("hidden")):(e?.classList.remove("hidden"),s?.classList.add("hidden"),o?.classList.add("border-csr-orange","text-csr-orange"),o?.classList.remove("border-transparent","text-gray-500"),n?.classList.remove("border-csr-orange","text-csr-orange"),n?.classList.add("border-transparent","text-gray-500"),l?.classList.add("hidden"))};const O=()=>{const t=document.getElementById("tabContentOrders");if(!t||!x)return;const s=x.bookings,e=s.filter(a=>T(a)&&!a.commission_paid),n=s.filter(a=>!T(a)&&!a.commission_paid),o=s.filter(a=>a.commission_paid);if([...e,...n,...o].length===0){t.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">Không có đơn nào trong kỳ này.</div>';return}const h=(a,c,i)=>i.length===0?"":`
                <div class="mb-1">
                    <div class="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-${c}-600 bg-${c}-50 border-b border-${c}-100">── ${a} (${i.length}) ──</div>
                    ${i.map((u,b)=>k(u)).join("")}
                </div>`;e.length,e.length+n.length;const k=(a,c)=>{const{rate:i,servicesTotal:u,commission:b}=H(a,p),r=a.commission_paid,g=!r,m=y.has(a.id);return`
                <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${r?"opacity-60":""}">
                    <input type="checkbox" class="order-checkbox w-4 h-4 accent-csr-orange shrink-0 ${g?"":"cursor-not-allowed"}"
                        data-id="${a.id}" data-commission="${b}" ${m?"checked":""} ${g?"":"disabled"}
                        onchange="window.onOrderCheck(this)">
                    <div class="text-xs text-gray-400 font-mono w-12 shrink-0 text-center">#${a.id}</div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="font-bold text-gray-900 text-sm truncate">${a.name}</span>
                            <span class="text-xs text-gray-400 shrink-0">${a.phone||""}</span>
                        </div>
                        <div class="text-xs text-gray-500 truncate mt-0.5">${a.tour} · ${a.date}</div>
                    </div>
                    <div class="text-right shrink-0">
                        <div class="text-sm font-bold text-gray-900">${f(a.total_price)}</div>
                        ${u>0?`<div class="text-[10px] text-gray-400">DV: -${f(u)}</div>`:""}
                        <div class="text-sm font-black text-csr-orange">HH: ${f(b)} <span class="text-gray-400 font-normal text-[10px]">(${i}%)</span></div>
                    </div>
                    <div class="shrink-0 w-24 text-right">
                        ${r?'<span class="inline-block bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">✅ Đã TT HH</span>':T(a)?'<span class="inline-block bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded border border-green-200">Hoàn thành</span>':'<span class="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded border border-blue-200">Đã cọc</span>'}
                    </div>
                </div>`};t.innerHTML=`
            <div class="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-200 text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                <div class="w-4 shrink-0">
                    <input type="checkbox" id="selectAllOrders" class="w-4 h-4 accent-csr-orange" onchange="window.toggleSelectAll(this)">
                </div>
                <div class="w-12 text-center shrink-0">Mã ĐH</div>
                <div class="flex-1">Thông Tin Khách · Tour</div>
                <div class="w-40 text-right">Giá Đơn · Hoa Hồng</div>
                <div class="w-24 text-right">Trạng Thái</div>
            </div>
            ${h("ĐÃ HOÀN THÀNH","green",e)}
            ${h("ĐÃ CỌC","blue",n)}
            ${h("ĐÃ THANH TOÁN HOA HỒNG","gray",o)}
        `},F=()=>{const t=document.getElementById("tabContentPayHistory");if(t){if(w.length===0){t.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">Chưa có lần thanh toán nào cho nhân viên này.</div>';return}t.innerHTML=`
            <table class="w-full text-sm text-left border-collapse">
                <thead><tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-400 font-bold">
                    <th class="p-3">Mã Batch</th>
                    <th class="p-3">Ngày TT</th>
                    <th class="p-3 text-center">Số Đơn</th>
                    <th class="p-3 text-right text-csr-orange">Tổng HH</th>
                    <th class="p-3">Admin TT</th>
                    <th class="p-3">Ghi Chú</th>
                </tr></thead>
                <tbody class="divide-y divide-gray-100">
                    ${w.map(s=>{const e=new Date(s.created_at),n=`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear()}`;return`<tr class="hover:bg-gray-50 transition-colors">
                            <td class="p-3 font-mono text-gray-500 text-xs">#BATCH${s.id}</td>
                            <td class="p-3 text-gray-700 font-medium">${n}</td>
                            <td class="p-3 text-center"><span class="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">${s.total_orders} đơn</span></td>
                            <td class="p-3 text-right font-black text-csr-orange">${f(s.total_amount)}</td>
                            <td class="p-3 text-gray-600">${s.paid_by||"—"}</td>
                            <td class="p-3 text-gray-400 text-xs">${s.note||"—"}</td>
                        </tr>`}).join("")}
                </tbody>
            </table>`}};window.onOrderCheck=t=>{const s=parseInt(t.dataset.id);t.checked?y.add(s):y.delete(s),$()},window.toggleSelectAll=t=>{document.querySelectorAll(".order-checkbox:not(:disabled)").forEach(e=>{e.checked=t.checked;const n=parseInt(e.dataset.id);t.checked?y.add(n):y.delete(n)}),$()};const $=()=>{const t=y.size,s=x?.bookings.filter(o=>y.has(o.id)).reduce((o,l)=>o+H(l,p).commission,0)||0,e=document.getElementById("paySelectionInfo"),n=document.getElementById("payCommissionBtn");e&&(e.textContent=t>0?`Đã chọn ${t} đơn · Tổng HH: ${f(s)}`:"Chọn đơn để thanh toán hoa hồng"),n&&(n.disabled=t===0)};window.openPayConfirmModal=()=>{const t=y.size;if(t===0)return;const s=x?.bookings.filter(o=>y.has(o.id)).reduce((o,l)=>o+H(l,p).commission,0)||0;document.getElementById("confirmSaleName").textContent=x?.name||"—",document.getElementById("confirmOrderCount").textContent=`${t} đơn`,document.getElementById("confirmTotalComm").textContent=f(s),document.getElementById("payNote").value="";const e=document.getElementById("payConfirmModal"),n=document.getElementById("payConfirmModalInner");e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0"),n.classList.remove("scale-95")})},window.closePayConfirmModal=()=>{const t=document.getElementById("payConfirmModal"),s=document.getElementById("payConfirmModalInner");t.classList.add("opacity-0"),s.classList.add("scale-95"),setTimeout(()=>t.classList.add("hidden"),200)},window.confirmPayCommission=async()=>{const t=document.getElementById("confirmPayBtn");t.textContent="Đang xử lý...",t.disabled=!0;const s=document.getElementById("payNote").value.trim(),e=v.fullName||v.full_name||"Admin";try{const n=await fetch("/api/commission_payments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sale_id:x.saleId,sale_name:x.name,booking_ids:[...y],paid_by:e,note:s})});if(!n.ok)throw new Error(await n.text());if(window.closePayConfirmModal(),y.clear(),await j(),x&&window._salesMap){const o=window._salesMap[x.key];if(o){x=o;try{const l=await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(x.saleId)}`);w=l.ok?await l.json():[]}catch{w=[]}O(),F(),$(),document.getElementById("panelSaleName").textContent=x.name}}alert("✅ Đã thanh toán hoa hồng thành công!")}catch(n){console.error("Lỗi thanh toán hoa hồng:",n),alert("❌ Lỗi: "+n.message)}finally{t.textContent="✅ Xác Nhận Thanh Toán",t.disabled=!1}};const R=async()=>{const{from:t,to:s}=D(),e=String(v.id||v.userId||""),n=(v.fullName||v.full_name||"").toLowerCase(),o=I.filter(r=>{const g=String(r.sale_id||"").trim(),m=(r.sale_name||"").toLowerCase()===n;return!(e&&g===e)&&!m?!1:B(r,t,s)&&A(r)}),l=o.filter(r=>T(r)),h=o.reduce((r,g)=>r+(parseInt(g.total_price)||0),0),k=l.reduce((r,g)=>r+H(g,p).commission,0),c=I.filter(r=>{const g=String(r.sale_id||"").trim(),m=(r.sale_name||"").toLowerCase()===n;return(e&&g===e||m)&&B(r,t,s)}).length,i=(r,g)=>{const m=document.getElementById(r);m&&(m.textContent=g)};i("sale-stat-total-pax",c),i("sale-stat-success-pax",l.length),i("sale-stat-revenue",f(h)),i("sale-stat-real-comm",f(k));const u=document.getElementById("saleOrdersContainer");if(u)if(o.length===0)u.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">Chưa có đơn nào trong kỳ này.</div>';else{const r=o.filter(d=>T(d)&&!d.commission_paid),g=o.filter(d=>!T(d)&&!d.commission_paid),m=o.filter(d=>d.commission_paid),C=[...r,...g,...m];u.innerHTML=`
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left border-collapse">
                            <thead><tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-400 font-bold">
                                <th class="p-3 text-center w-12">STT</th>
                                <th class="p-3 w-20">Mã ĐH</th>
                                <th class="p-3">Tên KH</th>
                                <th class="p-3">Tour · Ngày</th>
                                <th class="p-3 text-right">Giá Đơn</th>
                                <th class="p-3 text-right text-csr-orange">Hoa Hồng</th>
                                <th class="p-3 text-center">Trạng Thái HH</th>
                            </tr></thead>
                            <tbody class="divide-y divide-gray-100">
                                ${C.map((d,z)=>{const{commission:Y}=H(d,p);return`<tr class="hover:bg-gray-50 transition-colors ${d.commission_paid?"opacity-70":""}">
                                        <td class="p-3 text-center text-gray-400 font-medium">${z+1}</td>
                                        <td class="p-3 font-mono text-gray-600 text-xs">#CSR${d.id}</td>
                                        <td class="p-3">
                                            <div class="font-bold text-gray-900">${d.name}</div>
                                            <div class="text-[11px] text-gray-400">${d.phone||""}</div>
                                        </td>
                                        <td class="p-3">
                                            <div class="font-medium text-gray-700">${d.tour}</div>
                                            <div class="text-[11px] text-gray-400">${d.date}</div>
                                        </td>
                                        <td class="p-3 text-right font-bold text-gray-900">${f(d.total_price)}</td>
                                        <td class="p-3 text-right font-black text-csr-orange">${f(Y)}</td>
                                        <td class="p-3 text-center">
                                            ${d.commission_paid?'<span class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">✅ Đã nhận</span>':T(d)?'<span class="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-full">⏳ Chờ TT</span>':'<span class="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full">Đang cọc</span>'}
                                        </td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>
                    </div>`}const b=document.getElementById("salePaymentHistoryContainer");if(b&&e)try{const r=await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(e)}`),g=r.ok?await r.json():[];g.length===0?b.innerHTML='<div class="p-6 text-center text-gray-400 text-sm">Chưa có lần thanh toán nào.</div>':b.innerHTML=`
                        <table class="w-full text-sm text-left border-collapse">
                            <thead><tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-400 font-bold">
                                <th class="p-3">Batch</th>
                                <th class="p-3">Ngày Nhận</th>
                                <th class="p-3 text-center">Số Đơn</th>
                                <th class="p-3 text-right text-green-600">Số Tiền Nhận</th>
                                <th class="p-3">Ghi Chú</th>
                            </tr></thead>
                            <tbody class="divide-y divide-gray-100">
                                ${g.map(m=>{const C=new Date(m.created_at),d=`${C.getDate().toString().padStart(2,"0")}/${(C.getMonth()+1).toString().padStart(2,"0")}/${C.getFullYear()}`;return`<tr class="hover:bg-gray-50">
                                        <td class="p-3 font-mono text-gray-400 text-xs">#BATCH${m.id}</td>
                                        <td class="p-3 font-medium text-gray-700">${d}</td>
                                        <td class="p-3 text-center"><span class="bg-gray-100 text-xs font-bold px-2 py-0.5 rounded">${m.total_orders} đơn</span></td>
                                        <td class="p-3 text-right font-black text-green-600">${f(m.total_amount)}</td>
                                        <td class="p-3 text-gray-400 text-xs">${m.note||"—"}</td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>`}catch{b.innerHTML='<div class="p-6 text-center text-gray-400 text-sm">Lỗi tải lịch sử.</div>'}};V?.addEventListener("click",()=>{S?_():R()}),document.getElementById("saleDetailPanel")?.addEventListener("click",t=>{t.target.id==="saleDetailPanel"&&window.closeSalePanel()}),j()};export{Q as afterRender,K as render};
