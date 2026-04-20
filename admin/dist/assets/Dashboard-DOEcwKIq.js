import{S as K,H as Y}from"./Header-CtRUqTZE.js";const z=()=>`
    <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
      ${K()}
      
      <div class="flex flex-col flex-1 w-full overflow-hidden">
        ${Y()}
        
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
             <div class="max-w-7xl mx-auto space-y-6">
                <!-- Page Title -->
                <div>
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1">Tổng Quan Hệ Thống</h1>
                    <p class="text-gray-500 text-sm" id="dashboardSubtitle">Đang kiểm tra công việc cần xử lý...</p>
                </div>

                <!-- CÔNG VIỆC CẦN XỬ LÝ -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="glass-panel p-5 border-l-4 border-yellow-500 hover:-translate-y-0.5 transition-transform cursor-pointer" onclick="window.location.href='/admin_v2/bookings'">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Đơn Chờ Cọc</div>
                                <div class="text-3xl font-bold text-yellow-600 mt-1" id="stat-pending-deposit">--</div>
                            </div>
                            <div class="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                                <svg class="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                        </div>
                        <div class="text-[10px] text-yellow-500 mt-2 font-medium">Khách đã đăng ký, chưa cọc</div>
                    </div>
                    <div class="glass-panel p-5 border-l-4 border-blue-500 hover:-translate-y-0.5 transition-transform cursor-pointer" onclick="window.location.href='/admin_v2/bookings'">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Đơn Chờ Thanh Toán</div>
                                <div class="text-3xl font-bold text-blue-600 mt-1" id="stat-pending-payment">--</div>
                            </div>
                            <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                        </div>
                        <div class="text-[10px] text-blue-500 mt-2 font-medium">Đã cọc, chưa thanh toán đủ</div>
                    </div>
                    <div class="glass-panel p-5 border-l-4 border-purple-500 hover:-translate-y-0.5 transition-transform cursor-pointer" onclick="window.location.href='/admin_v2/bookings'">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-xs font-bold text-gray-400 uppercase tracking-wide">Khách Đang Chờ Lịch</div>
                                <div class="text-3xl font-bold text-purple-600 mt-1" id="stat-pending-leads">--</div>
                            </div>
                            <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                <svg class="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                        </div>
                        <div class="text-[10px] text-purple-500 mt-2 font-medium">Đăng ký nhưng chưa có slot</div>
                    </div>
                </div>

                <!-- NHẮC NHỞ TỰ ĐỘNG -->
                <div class="glass-panel overflow-hidden">
                    <div class="p-4 border-b border-gray-200 bg-gray-50/50 flex justify-between items-center">
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-csr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            <h2 class="text-sm font-bold text-gray-700 uppercase tracking-wide">Nhắc Nhở Tự Động</h2>
                        </div>
                        <span class="text-[10px] bg-csr-orange/10 text-csr-orange px-2 py-1 rounded-full font-bold" id="alertCount">0 thông báo</span>
                    </div>
                    <div id="alertsContainer" class="divide-y divide-gray-100">
                        <div class="p-6 text-center text-gray-400 text-sm">Đang rà soát hệ thống...</div>
                    </div>
                </div>

                <!-- BOTTOM: Recent + Schedules -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Recent Bookings -->
                    <div class="glass-panel overflow-hidden lg:col-span-2">
                        <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                            <h2 class="text-sm font-bold text-gray-700 uppercase tracking-wide">Đơn Hàng Gần Đây</h2>
                            <a href="/admin_v2/bookings" class="text-csr-orange text-xs font-bold hover:underline">Xem tất cả →</a>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left md:table block">
                                <thead class="bg-gray-50 text-[10px] uppercase tracking-wider text-gray-400 hidden md:table-header-group">
                                    <tr>
                                        <th class="px-4 py-3 font-medium">Khách Hàng</th>
                                        <th class="px-4 py-3 font-medium">Tour</th>
                                        <th class="px-4 py-3 font-medium">Ngày Đi</th>
                                        <th class="px-4 py-3 font-medium">Trạng Thái</th>
                                    </tr>
                                </thead>
                                <tbody id="recentBookingsBody" class="divide-y divide-gray-100 block md:table-row-group">
                                    <tr><td colspan="4" class="text-center py-6 text-gray-400 text-sm">Đang tải...</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Lịch trình sắp tới -->
                    <div class="glass-panel overflow-hidden">
                        <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                            <h2 class="text-sm font-bold text-gray-700 uppercase tracking-wide">Tour Sắp Khởi Hành</h2>
                            <a href="/admin_v2/schedules" class="text-csr-orange text-xs font-bold hover:underline">Xem →</a>
                        </div>
                        <div id="schedulesContainer" class="p-4 space-y-3">
                            <div class="text-center py-4 text-gray-400 text-sm">Đang tải...</div>
                        </div>
                    </div>
                </div>
             </div>
        </main>
      </div>
    </div>
  `,G=()=>{(async()=>{try{const[p,m,f,y,b]=await Promise.all([fetch("/api/bookings"),fetch("/api/admin_customers"),fetch("/api/schedules"),fetch("/api/leads"),fetch("/api/tours")]),l=p.ok?await p.json():[],A=m.ok?await m.json():{data:[]},g=f.ok?await f.json():[],V=y.ok?await y.json():[],N=b.ok?await b.json():[],w=(t,n)=>t&&t.includes(n),k=l.filter(t=>w(t.status,"Chờ xác nhận cọc")||!t.status).length;document.getElementById("stat-pending-deposit").textContent=k;const $=l.filter(t=>{if(!w(t.status,"Đã cọc"))return!1;const n=parseFloat(t.total_price)||0,s=parseFloat(t.deposit)||0;return n===0?!0:s<n}).length;document.getElementById("stat-pending-payment").textContent=$;const C=l.filter(t=>t.status==="Chờ tư vấn").length;document.getElementById("stat-pending-leads").textContent=C;const d=[],i=new Date,E=i.getMonth(),M=i.getFullYear(),h=E+1,D=h>11?M+1:M,x=h>11?0:h;N.filter(t=>t.is_visible!==!1).forEach(t=>{if(!g.some(s=>{const e=new Date(s.start_date);return s.tour_name===t.name&&e.getMonth()===x&&e.getFullYear()===D})){const s=["1","2","3","4","5","6","7","8","9","10","11","12"];d.push({type:"schedule",icon:"📅",color:"text-purple-600 bg-purple-50 border-purple-200",title:`Tour "${t.name}" chưa có lịch tháng ${s[x]}`,desc:`Hãy tạo lịch trình tháng ${s[x]}/${D} cho tour này.`,action:"/admin_v2/schedules"})}});const v=new Date(i);v.setDate(i.getDate()+7),g.forEach(t=>{const n=new Date(t.start_date);if(n>=i&&n<=v){const s=parseInt(t.booked_count)||0,e=(t.slots||0)-s,o=Math.ceil((n-i)/(1e3*60*60*24)),r=o===0?"HÔM NAY":o===1?"NGÀY MAI":`${o} ngày nữa`;d.push({type:"departure",icon:"🚐",color:o<=2?"text-red-600 bg-red-50 border-red-200":"text-green-600 bg-green-50 border-green-200",title:`${t.tour_name} khởi hành ${r}`,desc:`Ngày ${u(n)} • ${s} khách đã đăng ký • ${e>=0?e:0} chỗ trống`,action:"/admin_v2/schedules"})}}),g.forEach(t=>{const n=new Date(t.start_date);n>=i&&n<=v&&l.filter(e=>{if(!e.dob||!e.date||!(e.tour&&(e.tour===t.tour_name||t.tour_name.includes(e.tour)||e.tour.includes(t.tour_name))))return!1;const r=e.date,a=u(n);return r.includes(a.split("/")[0]+"/"+a.split("/")[1])}).forEach(e=>{if(!e.dob)return;let o,r;if(e.dob.includes("-")){const a=e.dob.split("-");o=parseInt(a[1]),r=parseInt(a[2])}else if(e.dob.includes("/")){const a=e.dob.split("/");r=parseInt(a[0]),o=parseInt(a[1])}else return;o===i.getMonth()+1&&d.push({type:"birthday",icon:"🎂",color:"text-pink-600 bg-pink-50 border-pink-200",title:`${e.name} có sinh nhật tháng ${o}!`,desc:`Sinh ngày ${r}/${o} • Tour ${t.tour_name} ngày ${u(n)}`,action:"/admin_v2/bookings"})})});const j={departure:0,birthday:1,schedule:2};d.sort((t,n)=>{const s=j[t.type]??99,e=j[n.type]??99;return s-e});const _=document.getElementById("alertsContainer"),L=document.getElementById("alertCount");L.textContent=`${d.length} thông báo`,d.length===0?_.innerHTML=`
                    <div class="p-6 text-center">
                        <div class="text-3xl mb-2">✅</div>
                        <div class="text-gray-500 text-sm font-medium">Tuyệt vời! Không có công việc cần xử lý.</div>
                    </div>`:_.innerHTML=d.map(t=>`
                    <div class="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer" onclick="window.location.href='${t.action}'">
                        <div class="w-10 h-10 rounded-xl ${t.color} border flex items-center justify-center text-lg shrink-0">${t.icon}</div>
                        <div class="min-w-0 flex-1">
                            <div class="text-sm font-bold text-gray-800">${t.title}</div>
                            <div class="text-xs text-gray-500 mt-0.5">${t.desc}</div>
                        </div>
                        <svg class="w-4 h-4 text-gray-300 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                `).join("");const T=k+$+C;document.getElementById("dashboardSubtitle").textContent=T>0?`Có ${T} công việc cần xử lý và ${d.length} nhắc nhở.`:"Không có công việc nào cần xử lý. 🎉";const B=document.getElementById("recentBookingsBody"),H=l.slice(0,5);H.length===0?B.innerHTML='<tr><td colspan="4" class="text-center py-6 text-gray-400 text-sm">Chưa có đơn hàng nào.</td></tr>':B.innerHTML=H.map(t=>{const s=(a=>a?a.includes("Đã cọc")?"bg-green-100 text-green-600":a.includes("Chờ xác nhận")?"bg-yellow-100 text-yellow-600":a.includes("Hoàn")?"bg-blue-100 text-blue-600":a.includes("hủy")||a.includes("Hủy")?"bg-red-100 text-red-500":"bg-gray-100 text-gray-500":"bg-gray-100 text-gray-500")(t.status),e=(t.name||"?")[0].toUpperCase(),o=["bg-orange-500","bg-blue-500","bg-green-500","bg-purple-500","bg-pink-500"];return`
                        <tr class="hover:bg-gray-50 transition-colors block md:table-row p-3 md:p-0">
                            <td class="px-0 md:px-4 py-1 md:py-3 block md:table-cell">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 md:w-7 md:h-7 rounded-full ${o[Math.abs(e.charCodeAt(0))%o.length]} flex items-center justify-center text-white text-xs md:text-[10px] font-bold shrink-0">${e}</div>
                                    <div class="min-w-0 flex-1">
                                        <div class="text-sm font-bold md:font-medium text-gray-900 truncate">${t.name||"-"}</div>
                                        <div class="text-[11px] text-gray-400 md:hidden">${t.phone||""}</div>
                                    </div>
                                    <div class="md:hidden">
                                        <span class="${s} text-[10px] px-2 py-0.5 rounded-full font-bold">${t.status||"Mới"}</span>
                                    </div>
                                </div>
                            </td>
                            <td class="px-0 md:px-4 py-2 md:py-3 text-sm text-gray-600 block md:table-cell border-t md:border-none border-gray-50 mt-2 md:mt-0 pt-2 md:pt-3">
                                <div class="flex justify-between md:block">
                                    <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Tour</span>
                                    <span class="truncate max-w-[200px] md:max-w-[150px] font-medium md:font-normal">${t.tour||"-"}</span>
                                </div>
                            </td>
                            <td class="px-0 md:px-4 py-1 md:py-3 text-sm text-gray-500 block md:table-cell">
                                <div class="flex justify-between md:block">
                                    <span class="md:hidden text-[10px] text-gray-400 uppercase font-medium">Ngày đi</span>
                                    <span>${t.date||"-"}</span>
                                </div>
                            </td>
                            <td class="px-4 py-3 hidden md:table-cell">
                                <span class="${s} text-[10px] px-2 py-0.5 rounded-full font-bold">${t.status||"Mới"}</span>
                            </td>
                        </tr>
                    `}).join("");const I=document.getElementById("schedulesContainer"),S=g.filter(t=>new Date(t.start_date)>=i).sort((t,n)=>new Date(t.start_date)-new Date(n.start_date)).slice(0,5);S.length===0?I.innerHTML='<div class="text-center py-4 text-gray-400 text-sm">Không có lịch trình sắp tới.</div>':I.innerHTML=S.map(t=>{const n=parseInt(t.booked_count)||0,s=(t.slots||0)-n,e=t.slots?Math.round(n/t.slots*100):0,o=e>=80?"bg-red-500":e>=50?"bg-yellow-500":"bg-green-500",r=new Date(t.start_date),R=Math.ceil((r-i)/(1e3*60*60*24))<=3?'<span class="text-[9px] bg-red-100 text-red-500 px-1.5 py-0.5 rounded-full font-bold ml-2">SẮP ĐI</span>':"";return`
                        <div class="p-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-sm font-medium text-gray-800 truncate">${t.tour_name||"-"}${R}</span>
                                <span class="text-[10px] text-gray-400 shrink-0 ml-2">${u(r)}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="h-full ${o} rounded-full" style="width: ${e}%"></div>
                                </div>
                                <span class="text-[10px] font-bold text-gray-500 shrink-0">${n}/${t.slots||"?"}</span>
                            </div>
                        </div>
                    `}).join("")}catch(p){console.error("Dashboard load error:",p)}})()};function u(c){return`${c.getDate().toString().padStart(2,"0")}/${(c.getMonth()+1).toString().padStart(2,"0")}/${c.getFullYear()}`}export{G as afterRender,z as render};
