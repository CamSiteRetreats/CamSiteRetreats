import{S as R,H as F}from"./Header-Dmidaim7.js";const V=()=>{let f={role:"sale",fullName:"Guest",id:null};try{const x=localStorage.getItem("csr_user");x&&(f=JSON.parse(x))}catch{}const k=f.role==="admin";return`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
        ${R()}
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          ${F()}
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
            <div class="max-w-7xl mx-auto space-y-6">

              <!-- Header -->
              <div>
                  <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-1">
                    ${k?"💰 Hoa Hồng & Báo Cáo":"📊 Báo Cáo Của Tôi"}
                  </h1>
                  <p class="text-gray-500 text-sm">${k?"Quản lý và thanh toán hoa hồng cho đội ngũ Sales.":"Theo dõi đơn hàng và hoa hồng của bạn."}</p>
              </div>

              ${k?`
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
    `},U=()=>{let f={role:"sale",fullName:"Guest",id:null};try{const t=localStorage.getItem("csr_user");t&&(f=JSON.parse(t))}catch{}const k=f.role==="admin";let x=[],S=[],H=[],y=null,u=new Set,T=[];const b=t=>new Intl.NumberFormat("vi-VN").format(Math.round(t||0))+"đ",M=t=>{if(!t)return 0;try{const s=Array.isArray(t)?t:JSON.parse(t);if(Array.isArray(s))return s.reduce((e,n)=>e+(parseInt(n.price)||0),0)}catch{return(String(t).match(/price:\s*(\d+)/g)||[]).reduce((n,o)=>n+Number(o.replace(/price:\s*/,"")),0)}return 0},C=(t,s)=>{const e=s.find(g=>g.name&&t.tour&&g.name.toLowerCase().trim()===t.tour.toLowerCase().trim()),n=parseFloat(t.commission_rate??e?.commission_rate??5),o=M(t.services_booked),d=Math.max(0,(parseInt(t.total_price)||0)-(parseInt(t.discount)||0)-o),i=d*(n/100);return{rate:n,servicesTotal:o,basePrice:d,commission:i}},E=t=>{if(!t)return null;const s=t.split("-")[0].trim();if(s.includes("/")){const e=s.split("/");if(e.length===3)return new Date(parseInt(e[2]),parseInt(e[1])-1,parseInt(e[0]));if(e.length===2)return new Date(new Date().getFullYear(),parseInt(e[1])-1,parseInt(e[0]))}return s.match(/^\d{4}-/)?new Date(s):null},I=new Date;I.setHours(0,0,0,0);const L=t=>t.status&&(t.status.includes("Đã cọc")||t.status.includes("Hoàn tất")||t.status.includes("Hoàn thành")),w=t=>{if(!(t.status&&(t.status.includes("Hoàn tất")||t.status.includes("Hoàn thành"))))return!1;const e=E(t.date);return e&&e<I},_=async()=>{try{const[t,s,e]=await Promise.all([fetch("/api/admin_tours"),fetch("/api/bookings"),fetch("/api/users")]),n=t.ok?await t.json():{};x=Array.isArray(n)?n:n.data||[],S=s.ok?await s.json():[],H=e.ok?await e.json():[],k?(A(),B()):D()}catch(t){console.error("Lỗi tải dữ liệu báo cáo:",t)}},A=()=>{const t=document.getElementById("commissionSetupContainer");if(!t)return;if(x.length===0){t.innerHTML='<div class="text-sm text-gray-500 text-center py-4">Không có Tour nào.</div>';return}const s=x.map(e=>{const n=e.commission_rate??5;return`
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
                </div>`}).join("");t.innerHTML=`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">${s}</div>`,document.getElementById("commissionSetupToggle")?.addEventListener("click",()=>{t.classList.toggle("hidden"),document.getElementById("commissionSetupChevron")?.classList.toggle("rotate-180")})};window.saveCommission=async t=>{const s=document.getElementById(`comm_input_${t}`);if(!s)return;const e=parseFloat(s.value);if(isNaN(e)||e<0||e>100){alert("Tỉ lệ hoa hồng không hợp lệ (0–100)");return}const n=s.nextElementSibling;n.textContent="...",n.disabled=!0;try{if((await fetch(`/api/admin_tours?id=${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({commission_rate:e})})).ok){const d=x.find(i=>i.id===t);d&&(d.commission_rate=e),n.classList.add("bg-green-500"),n.textContent="✓ Đã lưu!",setTimeout(()=>{n.classList.remove("bg-green-500"),n.textContent="Lưu",n.disabled=!1},1500),B()}else throw new Error}catch{alert("Lỗi khi lưu!"),n.textContent="Lưu",n.disabled=!1}};const B=()=>{const t=document.getElementById("salesTableBody");if(!t)return;const s=S.filter(i=>L(i)),e={},n={};H.forEach(i=>{const g=String(i.id),a=i.full_name||i.fullName||i.username||`User #${i.id}`;e[g]=a,n[a.trim().toLowerCase()]=g});const o={};s.forEach(i=>{const g=String(i.sale_id||"").trim();let a=g,h=i.sale_name||"Admin / Tự Đặt";if(g&&e[g])h=e[g];else{const p=n[(i.sale_name||"").trim().toLowerCase()];p?(a=p,h=e[p]):a=i.sale_name||"no-id"}o[a]||(o[a]={key:a,saleId:g||a,name:h,bookings:[]}),o[a].bookings.push(i)});const d=Object.values(o).sort((i,g)=>i.name.localeCompare(g.name));if(d.length===0){t.innerHTML='<tr><td colspan="6" class="p-8 text-center text-gray-400 text-sm">Chưa có dữ liệu nào trong kỳ này.</td></tr>';return}t.innerHTML=d.map((i,g)=>{const a=i.bookings.filter(r=>!w(r)&&!r.commission_paid).length,h=i.bookings.filter(r=>w(r)&&!r.commission_paid).length,p=i.bookings.filter(r=>!r.commission_paid).reduce((r,c)=>r+C(c,x).commission,0);return`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 border-b border-gray-100 text-gray-400 text-sm font-medium">${g+1}</td>
                    <td class="p-4 border-b border-gray-100">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-full bg-csr-orange/10 text-csr-orange flex items-center justify-center font-bold text-sm shrink-0">${(i.name||"S").charAt(0).toUpperCase()}</div>
                            <div class="font-bold text-gray-900">${i.name}</div>
                        </div>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">${a} đơn</span>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <span class="inline-block bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">${h} đơn</span>
                    </td>
                    <td class="p-4 border-b border-gray-100 text-right font-black text-csr-orange text-base">${b(p)}</td>
                    <td class="p-4 border-b border-gray-100 text-center">
                        <button class="text-xs bg-csr-orange text-white px-4 py-1.5 rounded-lg hover:bg-[#d65503] transition-colors font-bold shadow-sm"
                            onclick="window.openSalePanel('${i.key}')">Xem &rsaquo;</button>
                    </td>
                </tr>`}).join(""),window._salesMap=o,window._allToursRef=x};window.openSalePanel=async t=>{const s=window._salesMap?.[t];if(!s)return;y=s,u.clear(),document.getElementById("panelSaleName").textContent=s.name,$(),N();try{const o=await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(s.saleId)}`);T=o.ok?await o.json():[]}catch{T=[]}P();const e=document.getElementById("saleDetailPanel"),n=document.getElementById("saleDetailPanelInner");e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0"),n.classList.remove("translate-x-full")}),switchPanelTab("orders")},window.closeSalePanel=()=>{const t=document.getElementById("saleDetailPanel"),s=document.getElementById("saleDetailPanelInner");t.classList.add("opacity-0"),s.classList.add("translate-x-full"),setTimeout(()=>t.classList.add("hidden"),300)},window.switchPanelTab=t=>{const s=document.getElementById("tabContentOrders"),e=document.getElementById("tabContentPayHistory"),n=document.getElementById("tabOrders"),o=document.getElementById("tabPayHistory"),d=document.getElementById("payToolbar");t==="orders"?(s?.classList.remove("hidden"),e?.classList.add("hidden"),n?.classList.add("border-csr-orange","text-csr-orange"),n?.classList.remove("border-transparent","text-gray-500"),o?.classList.remove("border-csr-orange","text-csr-orange"),o?.classList.add("border-transparent","text-gray-500"),d?.classList.remove("hidden")):(e?.classList.remove("hidden"),s?.classList.add("hidden"),o?.classList.add("border-csr-orange","text-csr-orange"),o?.classList.remove("border-transparent","text-gray-500"),n?.classList.remove("border-csr-orange","text-csr-orange"),n?.classList.add("border-transparent","text-gray-500"),d?.classList.add("hidden"))};const N=()=>{const t=document.getElementById("tabContentOrders");if(!t||!y)return;const s=y.bookings,e=s.filter(a=>w(a)&&!a.commission_paid),n=s.filter(a=>!w(a)&&!a.commission_paid),o=s.filter(a=>a.commission_paid);if([...e,...n,...o].length===0){t.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">Không có đơn nào trong kỳ này.</div>';return}const i=(a,h,p)=>p.length===0?"":`
                <div class="mb-1">
                    <div class="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-${h}-600 bg-${h}-50 border-b border-${h}-100">── ${a} (${p.length}) ──</div>
                    ${p.map((r,c)=>g(r)).join("")}
                </div>`;e.length,e.length+n.length;const g=(a,h)=>{const{rate:p,servicesTotal:r,commission:c}=C(a,x),m=a.commission_paid,v=!m,l=u.has(a.id);return`
                <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${m?"opacity-60":""}">
                    <input type="checkbox" class="order-checkbox w-4 h-4 accent-csr-orange shrink-0 ${v?"":"cursor-not-allowed"}"
                        data-id="${a.id}" data-commission="${c}" ${l?"checked":""} ${v?"":"disabled"}
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
                        ${r>0?`<div class="text-[10px] text-gray-400">DV: -${b(r)}</div>`:""}
                        <div class="text-sm font-black text-csr-orange">HH: ${b(c)} <span class="text-gray-400 font-normal text-[10px]">(${p}%)</span></div>
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
            ${i("ĐÃ HOÀN THÀNH","green",e)}
            ${i("ĐÃ CỌC","blue",n)}
            ${i("ĐÃ THANH TOÁN HOA HỒNG","gray",o)}
        `},P=()=>{const t=document.getElementById("tabContentPayHistory");if(t){if(T.length===0){t.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">Chưa có lần thanh toán nào cho nhân viên này.</div>';return}t.innerHTML=`
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
                    ${T.map(s=>{const e=new Date(s.created_at),n=`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear()}`;return`<tr class="hover:bg-gray-50 transition-colors">
                            <td class="p-3 font-mono text-gray-500 text-xs">#BATCH${s.id}</td>
                            <td class="p-3 text-gray-700 font-medium">${n}</td>
                            <td class="p-3 text-center"><span class="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">${s.total_orders} đơn</span></td>
                            <td class="p-3 text-right font-black text-csr-orange">${b(s.total_amount)}</td>
                            <td class="p-3 text-gray-600">${s.paid_by||"—"}</td>
                            <td class="p-3 text-gray-400 text-xs">${s.note||"—"}</td>
                        </tr>`}).join("")}
                </tbody>
            </table>`}};window.onOrderCheck=t=>{const s=parseInt(t.dataset.id);t.checked?u.add(s):u.delete(s),$()},window.toggleSelectAll=t=>{document.querySelectorAll(".order-checkbox:not(:disabled)").forEach(e=>{e.checked=t.checked;const n=parseInt(e.dataset.id);t.checked?u.add(n):u.delete(n)}),$()};const $=()=>{const t=u.size,s=y?.bookings.filter(o=>u.has(o.id)).reduce((o,d)=>o+C(d,x).commission,0)||0,e=document.getElementById("paySelectionInfo"),n=document.getElementById("payCommissionBtn");e&&(e.textContent=t>0?`Đã chọn ${t} đơn · Tổng HH: ${b(s)}`:"Chọn đơn để thanh toán hoa hồng"),n&&(n.disabled=t===0)};window.openPayConfirmModal=()=>{const t=u.size;if(t===0)return;const s=y?.bookings.filter(o=>u.has(o.id)).reduce((o,d)=>o+C(d,x).commission,0)||0;document.getElementById("confirmSaleName").textContent=y?.name||"—",document.getElementById("confirmOrderCount").textContent=`${t} đơn`,document.getElementById("confirmTotalComm").textContent=b(s),document.getElementById("payNote").value="";const e=document.getElementById("payConfirmModal"),n=document.getElementById("payConfirmModalInner");e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0"),n.classList.remove("scale-95")})},window.closePayConfirmModal=()=>{const t=document.getElementById("payConfirmModal"),s=document.getElementById("payConfirmModalInner");t.classList.add("opacity-0"),s.classList.add("scale-95"),setTimeout(()=>t.classList.add("hidden"),200)},window.confirmPayCommission=async()=>{const t=document.getElementById("confirmPayBtn");t.textContent="Đang xử lý...",t.disabled=!0;const s=document.getElementById("payNote").value.trim(),e=f.fullName||f.full_name||"Admin";try{const n=await fetch("/api/commission_payments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sale_id:y.saleId,sale_name:y.name,booking_ids:[...u],paid_by:e,note:s})});if(!n.ok)throw new Error(await n.text());if(window.closePayConfirmModal(),u.clear(),await _(),y&&window._salesMap){const o=window._salesMap[y.key];if(o){y=o;try{const d=await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(y.saleId)}`);T=d.ok?await d.json():[]}catch{T=[]}N(),P(),$(),document.getElementById("panelSaleName").textContent=y.name}}alert("✅ Đã thanh toán hoa hồng thành công!")}catch(n){console.error("Lỗi thanh toán hoa hồng:",n),alert("❌ Lỗi: "+n.message)}finally{t.textContent="✅ Xác Nhận Thanh Toán",t.disabled=!1}};const D=async()=>{const t=String(f.id||f.userId||""),s=(f.fullName||f.full_name||"").toLowerCase(),e=S.filter(r=>{const c=String(r.sale_id||"").trim(),m=(r.sale_name||"").toLowerCase()===s;return!(t&&c===t)&&!m?!1:L(r)}),n=e.filter(r=>w(r)),o=e.reduce((r,c)=>r+(parseInt(c.total_price)||0),0),d=n.reduce((r,c)=>r+C(c,x).commission,0),g=S.filter(r=>{const c=String(r.sale_id||"").trim(),m=(r.sale_name||"").toLowerCase()===s;return t&&c===t||m}).length,a=(r,c)=>{const m=document.getElementById(r);m&&(m.textContent=c)};a("sale-stat-total-pax",g),a("sale-stat-success-pax",n.length),a("sale-stat-revenue",b(o)),a("sale-stat-real-comm",b(d));const h=document.getElementById("saleOrdersContainer");if(h)if(e.length===0)h.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">Chưa có đơn nào trong kỳ này.</div>';else{const r=e.filter(l=>w(l)&&!l.commission_paid),c=e.filter(l=>!w(l)&&!l.commission_paid),m=e.filter(l=>l.commission_paid),v=[...r,...c,...m];h.innerHTML=`
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
                                ${v.map((l,O)=>{const{commission:j}=C(l,x);return`<tr class="hover:bg-gray-50 transition-colors ${l.commission_paid?"opacity-70":""}">
                                        <td class="p-3 text-center text-gray-400 font-medium">${O+1}</td>
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
                                        <td class="p-3 text-right font-black text-csr-orange">${b(j)}</td>
                                        <td class="p-3 text-center">
                                            ${l.commission_paid?'<span class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">✅ Đã nhận</span>':w(l)?'<span class="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-full">⏳ Chờ TT</span>':'<span class="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full">Đang cọc</span>'}
                                        </td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>
                    </div>`}const p=document.getElementById("salePaymentHistoryContainer");if(p&&t)try{const r=await fetch(`/api/commission_payments?sale_id=${encodeURIComponent(t)}`),c=r.ok?await r.json():[];c.length===0?p.innerHTML='<div class="p-6 text-center text-gray-400 text-sm">Chưa có lần thanh toán nào.</div>':p.innerHTML=`
                        <table class="w-full text-sm text-left border-collapse">
                            <thead><tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-400 font-bold">
                                <th class="p-3">Batch</th>
                                <th class="p-3">Ngày Nhận</th>
                                <th class="p-3 text-center">Số Đơn</th>
                                <th class="p-3 text-right text-green-600">Số Tiền Nhận</th>
                                <th class="p-3">Ghi Chú</th>
                            </tr></thead>
                            <tbody class="divide-y divide-gray-100">
                                ${c.map(m=>{const v=new Date(m.created_at),l=`${v.getDate().toString().padStart(2,"0")}/${(v.getMonth()+1).toString().padStart(2,"0")}/${v.getFullYear()}`;return`<tr class="hover:bg-gray-50">
                                        <td class="p-3 font-mono text-gray-400 text-xs">#BATCH${m.id}</td>
                                        <td class="p-3 font-medium text-gray-700">${l}</td>
                                        <td class="p-3 text-center"><span class="bg-gray-100 text-xs font-bold px-2 py-0.5 rounded">${m.total_orders} đơn</span></td>
                                        <td class="p-3 text-right font-black text-green-600">${b(m.total_amount)}</td>
                                        <td class="p-3 text-gray-400 text-xs">${m.note||"—"}</td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>`}catch{p.innerHTML='<div class="p-6 text-center text-gray-400 text-sm">Lỗi tải lịch sử.</div>'}};document.getElementById("saleDetailPanel")?.addEventListener("click",t=>{t.target.id==="saleDetailPanel"&&window.closeSalePanel()}),_()};export{U as afterRender,V as render};
