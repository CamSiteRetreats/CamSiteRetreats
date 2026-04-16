import{S as R,H as F}from"./Header-DFYmXmuY.js";const q=()=>{let f={role:"sale",fullName:"Guest",id:null};try{const y=localStorage.getItem("csr_user");y&&(f=JSON.parse(y))}catch{}const T=f.role==="admin";return`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${R()}
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${F()}
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
            <div class="max-w-7xl mx-auto space-y-6">

              <!-- Header -->
              <div>
                  <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-1">
                    ${T?"💰 Hoa Hồng & Báo Cáo":"📊 Báo Cáo Của Tôi"}
                  </h1>
                  <p class="text-gray-500 text-sm">${T?"Quản lý và thanh toán hoa hồng cho đội ngũ Sales.":"Theo dõi đơn hàng và hoa hồng của bạn."}</p>
              </div>

              ${T?`
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

              <!-- Payment Info Display -->
              <div id="paymentInfoBox" class="mb-5 p-4 border border-gray-200 rounded-xl bg-gray-50/50 hidden">
                  <h4 class="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <svg class="w-4 h-4 text-csr-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                      Thông tin chuyển khoản
                  </h4>
                  <div class="space-y-1 text-sm bg-white p-3 rounded border border-gray-100 shadow-sm">
                      <div class="flex justify-between"><span class="text-gray-500">Ngân hàng:</span> <span class="font-medium text-gray-900" id="payBankName">—</span></div>
                      <div class="flex justify-between"><span class="text-gray-500">Số tài khoản:</span> <span class="font-bold font-mono text-gray-900" id="payBankAccount">—</span></div>
                      <div class="flex justify-between"><span class="text-gray-500">Chủ tài khoản:</span> <span class="font-bold text-csr-orange uppercase" id="payBankOwner">—</span></div>
                  </div>
                  <div id="payQrBox" class="mt-4 flex flex-col items-center">
                     <!-- QR inject here -->
                  </div>
              </div>
              <div id="noPaymentInfoBox" class="mb-5 p-4 bg-red-50 border border-red-100 rounded-xl text-center hidden">
                  <p class="text-xs text-red-600 font-bold uppercase mb-1">Thiếu thông tin thanh toán</p>
                  <p class="text-xs text-red-500">Nhân viên này chưa cài đặt Thông tin Ngân hàng trên Hồ Sơ Cá Nhân.</p>
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
    `},G=()=>{let f={role:"sale",fullName:"Guest",id:null};try{const t=localStorage.getItem("csr_user");t&&(f=JSON.parse(t))}catch{}const T=f.role==="admin";let y=[],I=[],L=[],p=null,u=new Set,k=[];const b=t=>new Intl.NumberFormat("vi-VN").format(Math.round(t||0))+"đ",P=t=>{if(!t)return 0;try{const n=Array.isArray(t)?t:JSON.parse(t);if(Array.isArray(n))return n.reduce((e,s)=>e+(parseInt(s.price)||0),0)}catch{return(String(t).match(/price:\s*(\d+)/g)||[]).reduce((s,o)=>s+Number(o.replace(/price:\s*/,"")),0)}return 0},C=(t,n)=>{const e=n.find(c=>c.name&&t.tour&&c.name.toLowerCase().trim()===t.tour.toLowerCase().trim()),s=parseFloat(t.commission_rate??e?.commission_rate??5),o=P(t.services_booked),d=Math.max(0,(parseInt(t.total_price)||0)-o),r=d*(s/100);return{rate:s,servicesTotal:o,basePrice:d,commission:r}},E=t=>{if(!t)return null;const n=t.split("-")[0].trim();if(n.includes("/")){const e=n.split("/");if(e.length===3)return new Date(parseInt(e[2]),parseInt(e[1])-1,parseInt(e[0]));if(e.length===2)return new Date(new Date().getFullYear(),parseInt(e[1])-1,parseInt(e[0]))}return n.match(/^\d{4}-/)?new Date(n):null},H=new Date;H.setHours(0,0,0,0);const $=t=>t.status&&(t.status.includes("Đã cọc")||t.status.includes("Hoàn tất")||t.status.includes("Hoàn thành")),w=t=>{if(!(t.status&&(t.status.includes("Hoàn tất")||t.status.includes("Hoàn thành"))))return!1;const e=E(t.date);return e&&e<H},B=async()=>{try{const[t,n,e]=await Promise.all([fetch("/api/admin_tours"),fetch("/api/bookings"),fetch("/api/users")]),s=t.ok?await t.json():{};y=Array.isArray(s)?s:s.data||[],I=n.ok?await n.json():[],L=e.ok?await e.json():[],T?(A(),_()):j()}catch(t){console.error("Lỗi tải dữ liệu báo cáo:",t)}},A=()=>{const t=document.getElementById("commissionSetupContainer");if(!t)return;if(y.length===0){t.innerHTML='<div class="text-sm text-gray-500 text-center py-4">Không có Tour nào.</div>';return}const n=y.map(e=>{const s=e.commission_rate??5;return`
                <div class="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:border-csr-orange/30 transition-colors">
                    <div class="font-medium text-sm text-gray-900 flex-1 truncate pr-4">${e.name}</div>
                    <div class="flex items-center gap-2">
                        <div class="relative w-24">
                            <input type="number" min="0" max="100" step="0.5"
                                class="w-full bg-gray-50 border border-gray-200 rounded-lg py-1.5 pl-3 pr-8 text-sm font-bold focus:border-csr-orange focus:outline-none"
                                value="${s}" id="comm_input_${e.id}">
                            <span class="absolute right-3 top-1.5 text-gray-400 font-bold">%</span>
                        </div>
                        <button class="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-csr-orange transition-colors"
                            onclick="window.saveCommission(${e.id})">Lưu</button>
                    </div>
                </div>`}).join("");t.innerHTML=`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">${n}</div>`,document.getElementById("commissionSetupToggle")?.addEventListener("click",()=>{t.classList.toggle("hidden"),document.getElementById("commissionSetupChevron")?.classList.toggle("rotate-180")})};window.saveCommission=async t=>{const n=document.getElementById(`comm_input_${t}`);if(!n)return;const e=parseFloat(n.value);if(isNaN(e)||e<0||e>100){alert("Tỉ lệ hoa hồng không hợp lệ (0–100)");return}const s=n.nextElementSibling;s.textContent="...",s.disabled=!0;try{if((await fetch(`/api/admin_tours?id=${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({commission_rate:e})})).ok){const d=y.find(r=>r.id===t);d&&(d.commission_rate=e),s.classList.add("bg-green-500"),s.textContent="✓ Đã lưu!",setTimeout(()=>{s.classList.remove("bg-green-500"),s.textContent="Lưu",s.disabled=!1},1500),_()}else throw new Error}catch{alert("Lỗi khi lưu!"),s.textContent="Lưu",s.disabled=!1}};const _=()=>{const t=document.getElementById("salesTableBody");if(!t)return;const n=I.filter(r=>$(r)),e={},s={};L.forEach(r=>{const c=String(r.id),a=r.full_name||r.fullName||r.username||`User #${r.id}`;e[c]=a,s[a.trim().toLowerCase()]=c});const o={};n.forEach(r=>{const c=String(r.sale_id||"").trim();let a=c,x=r.sale_name||"Admin / Tự Đặt";if(c&&e[c])x=e[c];else{const h=s[(r.sale_name||"").trim().toLowerCase()];h?(a=h,x=e[h]):a=r.sale_name||"no-id"}o[a]||(o[a]={key:a,saleId:c||a,name:x,bookings:[]}),o[a].bookings.push(r)});const d=Object.values(o).sort((r,c)=>r.name.localeCompare(c.name));if(d.length===0){t.innerHTML='<tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Chưa có dữ liệu nào trong kỳ này.</td></tr>';return}t.innerHTML=d.map((r,c)=>{const a=r.bookings.filter(i=>!w(i)&&!i.commission_paid).length,x=r.bookings.filter(i=>w(i)&&!i.commission_paid).length,h=r.bookings.filter(i=>!i.commission_paid).reduce((i,g)=>i+C(g,y).commission,0);return`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 border-b border-gray-100 text-gray-400 text-sm font-medium">${c+1}</td>
                    <td class="p-4 border-b border-gray-100">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-full bg-csr-orange/10 text-csr-orange flex items-center justify-center font-bold text-sm shrink-0">${(r.name||"S").charAt(0).toUpperCase()}</div>
                            <div class="font-bold text-gray-900">${r.name}</div>
                        </div>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">${a} đơn</span>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <span class="inline-block bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">${x} đơn</span>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-right font-black text-csr-orange text-base">${b(h)}</td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <button class="text-xs bg-csr-orange text-white px-4 py-1.5 rounded-lg hover:bg-[#d65503] transition-colors font-bold shadow-sm"
                            onclick="window.openSalePanel('${r.key}')">Xem &rsaquo;</button>
                    </td>
                </tr>`}).join(""),window._salesMap=o,window._allToursRef=y};window.openSalePanel=async t=>{const n=window._salesMap?.[t];if(!n)return;p=n,u.clear(),document.getElementById("panelSaleName").textContent=n.name,S(),N();try{const o=await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(n.saleId)}`);k=o.ok?await o.json():[]}catch{k=[]}M();const e=document.getElementById("saleDetailPanel"),s=document.getElementById("saleDetailPanelInner");e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0"),s.classList.remove("translate-x-full")}),switchPanelTab("orders")},window.closeSalePanel=()=>{const t=document.getElementById("saleDetailPanel"),n=document.getElementById("saleDetailPanelInner");t.classList.add("opacity-0"),n.classList.add("translate-x-full"),setTimeout(()=>t.classList.add("hidden"),300)},window.switchPanelTab=t=>{const n=document.getElementById("tabContentOrders"),e=document.getElementById("tabContentPayHistory"),s=document.getElementById("tabOrders"),o=document.getElementById("tabPayHistory"),d=document.getElementById("payToolbar");t==="orders"?(n?.classList.remove("hidden"),e?.classList.add("hidden"),s?.classList.add("border-csr-orange","text-csr-orange"),s?.classList.remove("border-transparent","text-gray-500"),o?.classList.remove("border-csr-orange","text-csr-orange"),o?.classList.add("border-transparent","text-gray-500"),d?.classList.remove("hidden")):(e?.classList.remove("hidden"),n?.classList.add("hidden"),o?.classList.add("border-csr-orange","text-csr-orange"),o?.classList.remove("border-transparent","text-gray-500"),s?.classList.remove("border-csr-orange","text-csr-orange"),s?.classList.add("border-transparent","text-gray-500"),d?.classList.add("hidden"))};const N=()=>{const t=document.getElementById("tabContentOrders");if(!t||!p)return;const n=p.bookings,e=n.filter(a=>w(a)&&!a.commission_paid),s=n.filter(a=>!w(a)&&!a.commission_paid),o=n.filter(a=>a.commission_paid);if([...e,...s,...o].length===0){t.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">Không có đơn nào trong kỳ này.</div>';return}const r=(a,x,h)=>h.length===0?"":`
                <div class="mb-1">
                    <div class="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-${x}-600 bg-${x}-50 border-b border-${x}-100">── ${a} (${h.length}) ──</div>
                    ${h.map((i,g)=>c(i)).join("")}
                </div>`;e.length,e.length+s.length;const c=(a,x)=>{const{rate:h,servicesTotal:i,commission:g}=C(a,y),m=a.commission_paid,v=!m,l=u.has(a.id);return`
                <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${m?"opacity-60":""}">
                    <input type="checkbox" class="order-checkbox w-4 h-4 accent-csr-orange shrink-0 ${v?"":"cursor-not-allowed"}"
                        data-id="${a.id}" data-commission="${g}" ${l?"checked":""} ${v?"":"disabled"}
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
                        <div class="text-sm font-bold text-gray-900">${b(a.total_price)}</div>
                        ${i>0?`<div class="text-[10px] text-gray-400">DV: -${b(i)}</div>`:""}
                        <div class="text-sm font-black text-csr-orange">HH: ${b(g)} <span class="text-gray-400 font-normal text-[10px]">(${h}%)</span></div>
                    </div>
                    <div class="shrink-0 w-24 text-right">
                        ${m?'<span class="inline-block bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">✅ Đã TT HH</span>':w(a)?'<span class="inline-block bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded border border-green-200">Hoàn thành</span>':'<span class="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded border border-blue-200">Đã cọc</span>'}
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
            ${r("ĐÃ HOÀN THÀNH","green",e)}
            ${r("ĐÃ CỌC","blue",s)}
            ${r("ĐÃ THANH TOÁN HOA HỒNG","gray",o)}
        `},M=()=>{const t=document.getElementById("tabContentPayHistory");if(t){if(k.length===0){t.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">Chưa có lần thanh toán nào cho nhân viên này.</div>';return}t.innerHTML=`
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
                    ${k.map(n=>{const e=new Date(n.created_at),s=`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear()}`;return`<tr class="hover:bg-gray-50 transition-colors">
                            <td class="p-3 font-mono text-gray-500 text-xs">#BATCH${n.id}</td>
                            <td class="p-3 text-gray-700 font-medium">${s}</td>
                            <td class="p-3 text-center"><span class="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">${n.total_orders} đơn</span></td>
                            <td class="p-3 text-right font-black text-csr-orange">${b(n.total_amount)}</td>
                            <td class="p-3 text-gray-600">${n.paid_by||"—"}</td>
                            <td class="p-3 text-gray-400 text-xs">${n.note||"—"}</td>
                        </tr>`}).join("")}
                </tbody>
            </table>`}};window.onOrderCheck=t=>{const n=parseInt(t.dataset.id);t.checked?u.add(n):u.delete(n),S()},window.toggleSelectAll=t=>{document.querySelectorAll(".order-checkbox:not(:disabled)").forEach(e=>{e.checked=t.checked;const s=parseInt(e.dataset.id);t.checked?u.add(s):u.delete(s)}),S()};const S=()=>{const t=u.size,n=p?.bookings.filter(o=>u.has(o.id)).reduce((o,d)=>o+C(d,y).commission,0)||0,e=document.getElementById("paySelectionInfo"),s=document.getElementById("payCommissionBtn");e&&(e.textContent=t>0?`Đã chọn ${t} đơn · Tổng HH: ${b(n)}`:"Chọn đơn để thanh toán hoa hồng"),s&&(s.disabled=t===0)};window.openPayConfirmModal=()=>{const t=u.size;if(t===0)return;const n=p?.bookings.filter(a=>u.has(a.id)).reduce((a,x)=>a+C(x,y).commission,0)||0;document.getElementById("confirmSaleName").textContent=p?.name||"—",document.getElementById("confirmOrderCount").textContent=`${t} đơn`,document.getElementById("confirmTotalComm").textContent=b(n),document.getElementById("payNote").value="";const e=document.getElementById("paymentInfoBox"),s=document.getElementById("noPaymentInfoBox");let o=L.find(a=>String(a.id)===String(p.saleId));!o&&p.saleId==="unassigned"&&(o=null);const d=o?.payment_info;if(d&&(d.bank_name||d.account_number||d.qr_code)){document.getElementById("payBankName").textContent=d.bank_name||"—",document.getElementById("payBankAccount").textContent=d.account_number||"—",document.getElementById("payBankOwner").textContent=d.account_name||"—";const a=document.getElementById("payQrBox");d.qr_code?(a.innerHTML=`<p class="text-xs text-gray-500 mb-2 font-medium">Mã QR Quét Nhanh:</p><img src="${d.qr_code}" class="w-32 h-32 object-contain rounded-xl border-2 border-gray-200 p-1 shadow-sm mix-blend-multiply">`,a.classList.remove("hidden")):(a.innerHTML="",a.classList.add("hidden")),e.classList.remove("hidden"),s.classList.add("hidden")}else e.classList.add("hidden"),s.classList.remove("hidden"),p.saleId==="unassigned"&&s.classList.add("hidden");const r=document.getElementById("payConfirmModal"),c=document.getElementById("payConfirmModalInner");r.classList.remove("hidden"),requestAnimationFrame(()=>{r.classList.remove("opacity-0"),c.classList.remove("scale-95")})},window.closePayConfirmModal=()=>{const t=document.getElementById("payConfirmModal"),n=document.getElementById("payConfirmModalInner");t.classList.add("opacity-0"),n.classList.add("scale-95"),setTimeout(()=>t.classList.add("hidden"),200)},window.confirmPayCommission=async()=>{const t=document.getElementById("confirmPayBtn");t.textContent="Đang xử lý...",t.disabled=!0;const n=document.getElementById("payNote").value.trim(),e=f.fullName||f.full_name||"Admin";try{const s=await fetch("/api/commission_payments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sale_id:p.saleId,sale_name:p.name,booking_ids:[...u],paid_by:e,note:n})});if(!s.ok)throw new Error(await s.text());if(window.closePayConfirmModal(),u.clear(),await B(),p&&window._salesMap){const o=window._salesMap[p.key];if(o){p=o;try{const d=await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(p.saleId)}`);k=d.ok?await d.json():[]}catch{k=[]}N(),M(),S(),document.getElementById("panelSaleName").textContent=p.name}}alert("✅ Đã thanh toán hoa hồng thành công!")}catch(s){console.error("Lỗi thanh toán hoa hồng:",s),alert("❌ Lỗi: "+s.message)}finally{t.textContent="✅ Xác Nhận Thanh Toán",t.disabled=!1}};const j=async()=>{const t=String(f.id||f.userId||""),n=(f.fullName||f.full_name||"").toLowerCase(),e=I.filter(i=>{const g=String(i.sale_id||"").trim(),m=(i.sale_name||"").toLowerCase()===n;return!(t&&g===t)&&!m?!1:$(i)}),s=e.filter(i=>w(i)),o=e.reduce((i,g)=>i+(parseInt(g.total_price)||0),0),d=s.reduce((i,g)=>i+C(g,y).commission,0),c=I.filter(i=>{const g=String(i.sale_id||"").trim(),m=(i.sale_name||"").toLowerCase()===n;return t&&g===t||m}).length,a=(i,g)=>{const m=document.getElementById(i);m&&(m.textContent=g)};a("sale-stat-total-pax",c),a("sale-stat-success-pax",s.length),a("sale-stat-revenue",b(o)),a("sale-stat-real-comm",b(d));const x=document.getElementById("saleOrdersContainer");if(x)if(e.length===0)x.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">Chưa có đơn nào trong kỳ này.</div>';else{const i=e.filter(l=>w(l)&&!l.commission_paid),g=e.filter(l=>!w(l)&&!l.commission_paid),m=e.filter(l=>l.commission_paid),v=[...i,...g,...m];x.innerHTML=`
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
                                ${v.map((l,D)=>{const{commission:O}=C(l,y);return`<tr class="hover:bg-gray-50 transition-colors ${l.commission_paid?"opacity-70":""}">
                                        <td class="p-3 text-center text-gray-400 font-medium">${D+1}</td>
                                        <td class="p-3 font-mono text-gray-600 text-xs">#CSR${l.id}</td>
                                        <td class="p-3">
                                            <div class="font-bold text-gray-900">${l.name}</div>
                                            <div class="text-[11px] text-gray-400">${l.phone||""}</div>
                                        </td>
                                        <td class="p-3">
                                            <div class="font-medium text-gray-700">${l.tour}</div>
                                            <div class="text-[11px] text-gray-400">${l.date}</div>
                                        </td>
                                        <td class="p-3 text-right font-bold text-gray-900">${b(l.total_price)}</td>
                                        <td class="p-3 text-right font-black text-csr-orange">${b(O)}</td>
                                        <td class="p-3 text-center">
                                            ${l.commission_paid?'<span class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">✅ Đã nhận</span>':w(l)?'<span class="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-full">⏳ Chờ TT</span>':'<span class="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full">Đang cọc</span>'}
                                        </td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>
                    </div>`}const h=document.getElementById("salePaymentHistoryContainer");if(h&&t)try{const i=await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(t)}`),g=i.ok?await i.json():[];g.length===0?h.innerHTML='<div class="p-6 text-center text-gray-400 text-sm">Chưa có lần thanh toán nào.</div>':h.innerHTML=`
                        <table class="w-full text-sm text-left border-collapse">
                            <thead><tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-400 font-bold">
                                <th class="p-3">Batch</th>
                                <th class="p-3">Ngày Nhận</th>
                                <th class="p-3 text-center">Số Đơn</th>
                                <th class="p-3 text-right text-green-600">Số Tiền Nhận</th>
                                <th class="p-3">Ghi Chú</th>
                            </tr></thead>
                            <tbody class="divide-y divide-gray-100">
                                ${g.map(m=>{const v=new Date(m.created_at),l=`${v.getDate().toString().padStart(2,"0")}/${(v.getMonth()+1).toString().padStart(2,"0")}/${v.getFullYear()}`;return`<tr class="hover:bg-gray-50">
                                        <td class="p-3 font-mono text-gray-400 text-xs">#BATCH${m.id}</td>
                                        <td class="p-3 font-medium text-gray-700">${l}</td>
                                        <td class="p-3 text-center"><span class="bg-gray-100 text-xs font-bold px-2 py-0.5 rounded">${m.total_orders} đơn</span></td>
                                        <td class="p-3 text-right font-black text-green-600">${b(m.total_amount)}</td>
                                        <td class="p-3 text-gray-400 text-xs">${m.note||"—"}</td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>`}catch{h.innerHTML='<div class="p-6 text-center text-gray-400 text-sm">Lỗi tải lịch sử.</div>'}};document.getElementById("saleDetailPanel")?.addEventListener("click",t=>{t.target.id==="saleDetailPanel"&&window.closeSalePanel()}),B()};export{G as afterRender,q as render};
