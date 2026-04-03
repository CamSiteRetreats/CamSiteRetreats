import{S as O,H as U}from"./Header-CamAZjvb.js";const X=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        <!-- Sidebar is hidden when printing -->
        <div class="print:hidden">
            ${O()}
        </div>
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          <div class="print:hidden">
              ${U()}
          </div>
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 print:p-0 print:bg-white print:overflow-visible">
               <div class="max-w-[1400px] mx-auto space-y-6 print:space-y-4">
                  
                  <!-- Top Bar (Hidden on Print) -->
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
                      <div>
                          <div class="flex items-center gap-2 mb-4">
                              <a href="/admin/schedules" data-link class="text-sm font-medium text-gray-400 hover:text-csr-orange transition-colors flex items-center gap-1">
                                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                  Quay lại Lịch Trình
                              </a>
                          </div>
                          
                          <div class="flex items-center gap-4 mb-2">
                              <img src="/logo-camsite-01.png" alt="CAM SITE RETREATS" class="h-14 md:h-16 object-contain">
                              <div class="h-10 border-l border-gray-300"></div>
                              <span class="text-sm font-bold text-gray-400 uppercase tracking-widest">DANH SÁCH ĐOÀN</span>
                          </div>

                          <h1 class="text-3xl font-black tracking-tight text-gray-800 mb-1" id="roster-title">Đang tải tên tour...</h1>
                          <p class="text-gray-500 text-sm" id="roster-subtitle">Đang tải ngày khởi hành...</p>
                      </div>
                      
                      <div class="flex items-center gap-3">
                          <button id="btnExportExcel" class="btn-secondary flex items-center gap-2 bg-white text-green-600 border border-green-200 hover:bg-green-50 shadow-sm">
                              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                              Xuất Excel
                          </button>
                          <button id="btnExportPDF" class="btn-primary flex items-center gap-2 bg-csr-orange hover:opacity-90 shadow-sm text-white">
                              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                              In PDF / Xuất PDF
                          </button>
                      </div>
                  </div>

                  <!-- Print Header (Only visible on Print) -->
                  <div class="hidden print:flex text-left border-b-4 border-csr-orange pb-4 mb-6 items-center justify-between">
                      <div class="flex items-center gap-6">
                            <img src="/logo-camsite-01.png" alt="CAM SITE RETREATS" class="h-20 object-contain">
                            <div>
                                <h1 class="text-3xl font-black uppercase tracking-widest text-[#1A202C] mb-1">DANH SÁCH ĐOÀN</h1>
                                <div class="text-[16px] text-gray-800 font-bold flex items-center gap-4">
                                    <span class="text-csr-orange text-xl" id="print-tour-name">Tuyến: ...</span>
                                    <span class="text-gray-300">|</span>
                                    <span id="print-tour-date">Ngày: ...</span>
                                </div>
                            </div>
                      </div>
                      <div class="text-right">
                          <span class="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-1">Tổng Số Khách</span>
                          <span class="text-4xl font-black text-csr-orange" id="print-total">0</span>
                      </div>
                  </div>

                  <!-- Filters & Column Selection (Hidden on Print) -->
                  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-5 print:hidden">
                      <div class="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between border-b border-gray-100 pb-5">
                          <div class="flex flex-wrap items-center gap-4">
                              <h3 class="font-bold text-gray-800 flex items-center gap-2">
                                  <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                                  Bộ lọc & Tìm kiếm
                              </h3>
                              <!-- Tìm kiếm text -->
                              <div class="relative min-w-[200px]">
                                  <input type="text" id="filterSearch" placeholder="Tìm tên, SĐT..." class="input-field pl-9 py-2 text-sm w-full">
                                  <svg class="w-4 h-4 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              </div>

                              <select id="filterStatus" class="input-field py-2 text-sm max-w-[180px]">
                                  <option value="">-- Tất cả Trạng thái --</option>
                                  <option value="Đã cọc">Đã cọc / Hoàn tất</option>
                                  <option value="Chờ cọc">Chờ cọc</option>
                                  <option value="Đã hủy">Đã hủy</option>
                              </select>
                              <select id="filterGender" class="input-field py-2 text-sm max-w-[150px]">
                                  <option value="">-- Giới tính --</option>
                                  <option value="Nam">Nam</option>
                                  <option value="Nữ">Nữ</option>
                              </select>

                              <!-- Sắp xếp -->
                              <select id="filterSort" class="input-field py-2 text-sm max-w-[180px] font-bold text-csr-orange border-csr-orange/20">
                                  <option value="newest">🆕 Mới nhất lên đầu</option>
                                  <option value="oldest">⏳ Cũ nhất lên đầu</option>
                              </select>
                          </div>
                          
                          <div class="text-sm text-gray-500 font-medium">
                              Hiển thị <span id="text-visible-count" class="text-gray-900 font-bold">0</span> danh mục
                          </div>
                      </div>

                      <div>
                          <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <svg class="w-4 h-4 text-csr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              Tùy Chỉnh Cột Hiển Thị (Dùng cho In/Xuất File)
                          </h3>
                          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3" id="column-toggles">
                              <!-- Checkboxes generated by JS -->
                          </div>
                          <p class="text-xs text-gray-400 mt-3 italic">* Các thông tin về giá tiền/công nợ đã được loại bỏ để bảo mật bảng kê chung.</p>
                      </div>
                  </div>

                  <!-- Data Table -->
                  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none print:rounded-none">
                      <div class="overflow-x-auto print:overflow-visible">
                          <table class="w-full text-left border-collapse" id="rosterTable">
                              <thead class="bg-gray-50 text-xs uppercase text-gray-500 font-semibold border-b border-gray-200 print:bg-white print:text-black print:border-b-2 print:border-gray-800">
                                  <tr id="table-header-row">
                                      <!-- Headers driven by JS config -->
                                  </tr>
                              </thead>
                              <tbody id="rosterList" class="divide-y divide-gray-100 text-sm print:text-[12px] print:divide-gray-300">
                                  <tr><td colspan="12" class="p-8 text-center text-gray-400">Đang tải dữ liệu...</td></tr>
                              </tbody>
                          </table>
                      </div>
                  </div>

               </div>
          </main>
        </div>
      </div>

      <style>
          /* CSS classes dynamically toggled to hide/show columns */
          .col-hidden { display: none !important; }
          .nowrap { white-space: nowrap; }

          @media print {
              @page { size: landscape; margin: 0; }
              body { 
                  font-family: 'Times New Roman', serif; 
                  background: white; 
                  margin: 1.5cm; /* Re-add margin to content to avoid browser headers/footers */
              }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ccc; padding: 6px 8px !important; color: black !important; }
              th { background-color: #f3f4f6 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
      </style>
    `,J=async()=>{const g=[{id:"col-stt",label:"STT",always:!0,render:(e,t)=>t+1},{id:"col-name",label:"Họ và Tên",default:!0,render:e=>`<div class="font-bold text-gray-900">${e.name}</div>`},{id:"col-dob",label:"Ngày Sinh",default:!0,render:e=>{if(!e.dob)return"-";const t=e.dob.split("-");return t.length===3?`${t[2]}/${t[1]}/${t[0]}`:e.dob}},{id:"col-phone",label:"SĐT",default:!0,render:e=>`<div class="font-medium text-gray-700">${e.phone||"-"}</div>`},{id:"col-gender",label:"Giới tính",default:!0,render:e=>e.gender||"-"},{id:"col-cccd",label:"CCCD / Passport",default:!0,render:e=>e.id_card||e.cccd||"-"},{id:"col-address",label:"Địa chỉ",default:!0,render:e=>`<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${e.address||""}">${e.address||"-"}</div>`},{id:"col-diet",label:"Ăn chay",default:!1,render:e=>e.diet==="Ăn chay"||e.diet==="Chay"||e.diet==="Có"?'<span class="text-green-600 font-bold">Có</span>':"Không"},{id:"col-pole",label:"Gậy Trekking",default:!1,render:e=>e.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">Có</span>':"Không"},{id:"col-allergy",label:"Dị ứng / Yêu cầu",default:!1,render:e=>e.special||e.medical_notes||e.allergy||"-"},{id:"col-special",label:"Yêu cầu ĐB",default:!1,render:e=>e.special||e.special_notes||"-"},{id:"col-medal",label:"Tên Huy Chương",default:!1,render:e=>e.medal_name||e.name||"-"}],y=new URLSearchParams(window.location.search),p=y.get("tour")||"",m=y.get("date")||"",L=y.get("scheduleId")||"",D=!!y.get("groupLabel");let b=m;const j=e=>{if(!e)return"";const t=e.split(/[-/.]/);if(t.length!==3)return e;let o,r,n;return t[0].length===4?[n,r,o]=t:[o,r,n]=t,`${o.toString().padStart(2,"0")}/${r.toString().padStart(2,"0")}/${n}`},$=e=>(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[-_]/g," ").replace(/\s+/g," ").trim();m&&(b=j(m));const R=document.getElementById("roster-title"),N=document.getElementById("roster-subtitle"),_=document.getElementById("print-tour-name"),A=document.getElementById("print-tour-date"),P=document.getElementById("print-total"),k=document.getElementById("filterStatus"),C=document.getElementById("filterGender"),S=document.getElementById("rosterList");let u=[],f=new Set(g.filter(e=>e.default||e.always).map(e=>e.id));p&&(R.textContent=p,_.textContent=p),b&&(N.innerHTML=`Ngày khởi hành: <span class="font-bold text-csr-orange">${b}</span>`,A.textContent=b);const G=()=>{const e=document.getElementById("column-toggles");e.innerHTML=g.filter(t=>!t.always).map(t=>`
            <label class="flex items-center gap-2 cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-csr-orange/50 transition-colors">
                <input type="checkbox" value="${t.id}" class="col-toggle-cb text-csr-orange focus:ring-csr-orange rounded" ${f.has(t.id)?"checked":""}>
                <span class="text-sm font-medium text-gray-600 group-hover:text-gray-900 select-none">${t.label}</span>
            </label>
        `).join(""),document.querySelectorAll(".col-toggle-cb").forEach(t=>{t.addEventListener("change",o=>{o.target.checked?f.add(o.target.value):f.delete(o.target.value),F()})})},z=()=>{const e=document.getElementById("table-header-row");e.innerHTML=g.map(t=>`
            <th class="p-4 whitespace-nowrap ${t.id}" data-col="${t.id}">${t.label}</th>
        `).join("")},F=()=>{g.forEach(e=>{const t=f.has(e.id),o=document.querySelector(`th[data-col="${e.id}"]`);o&&(t?o.classList.remove("col-hidden"):o.classList.add("col-hidden")),document.querySelectorAll(`td[data-col="${e.id}"]`).forEach(r=>{t?r.classList.remove("col-hidden"):r.classList.add("col-hidden")})})},E=e=>{if(!e)return null;e.includes(" - ")&&(e=e.split(" - ")[0].trim()),e.includes("T")&&(e=e.split("T")[0]);const t=e.split(/[-/.]/);return t.length===2?{day:parseInt(t[0]),month:parseInt(t[1]),year:null}:t.length===3?t[0].length===4?{day:parseInt(t[2]),month:parseInt(t[1]),year:parseInt(t[0])}:{day:parseInt(t[0]),month:parseInt(t[1]),year:parseInt(t[2])}:null},x=E(m),V=e=>{if(!x)return!0;const t=E(e);return!(!t||t.day!==x.day||t.month!==x.month||t.year&&x.year&&t.year!==x.year)},I=async()=>{try{const t=await(await fetch("/api/bookings")).json();console.log("[Roster] targetTour:",p,"targetDateStr:",m,"targetParsed:",x),console.log("[Roster] Total bookings:",t.length),t.length>0&&t.filter(n=>n.tour&&n.tour.includes("Liêng")).slice(0,3).forEach(n=>console.log("[Roster] Sample Liêng:",{tour:n.tour,date:n.date,parsed:E(n.date)})),u=t.filter(r=>{if(L){if(String(r.schedule_id)===String(L))return!0;if(!(!D&&!r.schedule_id))return!1}let n=!0,s=!0;if(p){const l=$(r.tour),h=$(p);n=l===h||l.includes(h)||h.includes(l)}return m&&(s=V(r.date)),n&&s}),console.log("[Roster] Matched bookings:",u.length);const o=document.getElementById("filterSort")?.value||"newest";o==="newest"?u.sort((r,n)=>parseInt(n.id)-parseInt(r.id)):u.sort((r,n)=>parseInt(r.id)-parseInt(n.id)),console.log(`[Roster] Sorted bookings (${o}):`,u.map(r=>r.id)),w()}catch(e){console.error("Lỗi khi tải dữ liệu đoàn:",e),S.innerHTML='<tr><td colspan="12" class="p-8 text-center text-red-500 font-bold">Lỗi khi tải dữ liệu. Vui lòng tải lại trang.</td></tr>'}},w=()=>{const e=k.value.toLowerCase(),t=C.value.toLowerCase(),o=document.getElementById("filterSearch")?.value?.toLowerCase()||"",r=u.filter(n=>{if(o&&!`${n.name} ${n.phone} ${n.address} ${n.medal_name} ${n.customer_id}`.toLowerCase().includes(o))return!1;const s=(n.status||"").toLowerCase();if(!(e===""||e==="chờ cọc"&&(s.includes("chờ cọc")||s.includes("chờ xác nhận"))||e==="đã cọc"&&(s.includes("đã cọc")||s.includes("hoàn tất")||s.includes("hoàn thành"))||e==="đã hủy"&&s.includes("hủy")))return!1;const h=(n.gender||"").toLowerCase();return t===""||h===t});if(document.getElementById("text-visible-count").textContent=r.length,P.textContent=r.length,r.length===0){S.innerHTML='<tr><td colspan="12" class="p-12 text-center text-gray-500 bg-gray-50">Không tìm thấy khách hàng nào khớp với điều kiện lọc.</td></tr>';return}S.innerHTML=r.map((n,s)=>'<tr class="hover:bg-gray-50/50 transition-colors">'+g.map(l=>`
                    <td class="p-4 align-top ${f.has(l.id)?"":"col-hidden"}" data-col="${l.id}">
                        ${l.render(n,s)}
                    </td>
                `).join("")+"</tr>").join("")},K=()=>{const e=g.filter(a=>f.has(a.id)),t=k.value.toLowerCase(),o=C.value.toLowerCase(),r=document.getElementById("filterSearch")?.value?.toLowerCase()||"",n=u.filter(a=>{if(r&&!`${a.name} ${a.phone} ${a.address} ${a.medal_name} ${a.customer_id}`.toLowerCase().includes(r))return!1;const c=(a.status||"").toLowerCase();if(!(t===""||t==="chờ cọc"&&(c.includes("chờ cọc")||c.includes("chờ xác nhận"))||t==="đã cọc"&&(c.includes("đã cọc")||c.includes("hoàn tất")||c.includes("hoàn thành"))||t==="đã hủy"&&c.includes("hủy")))return!1;const d=(a.gender||"").toLowerCase();return o===""||d===o});let s=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head>
                <meta charset="utf-8" />
                <style>
                    table { border-collapse: collapse; width: 100%; font-family: 'Calibri', sans-serif; font-size: 11pt; }
                    th, td { border: 1px solid #000000; padding: 6px 8px; text-align: left; vertical-align: middle; }
                    th { background-color: #f2f2f2; font-weight: bold; }
                    /* Class ngăn Excel tự động format số điện thoại / cccd thành số khoa học / mất số 0 */
                    .num { mso-number-format: "\\@"; }
                </style>
            </head>
            <body>
                <table>
                    <thead>
                        <tr>
                            ${e.map(a=>`<th>${a.label}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
        `;n.forEach((a,c)=>{s+="<tr>",e.forEach(i=>{let d="";if(i.id==="col-stt")d=c+1;else if(i.id==="col-name")d=a.name||"";else if(i.id==="col-address")d=a.address||"";else if(i.id==="col-phone")d=a.phone?String(a.phone):"";else if(i.id==="col-diet")d=a.diet==="Ăn chay"||a.diet==="Chay"||a.diet==="Có"?"Có":"Không";else if(i.id==="col-pole")d=a.trekking_pole==="Có"?"Có":"Không";else{const M=String(i.render(a,c)),T=document.createElement("DIV");T.innerHTML=M,d=T.textContent||T.innerText||""}const H=i.id==="col-phone"||i.id==="col-cccd";s+=`<td ${H?'class="num"':""}>${d}</td>`}),s+="</tr>"}),s+=`
                    </tbody>
                </table>
            </body>
            </html>
        `;const l=new Blob(["\uFEFF",s],{type:"application/vnd.ms-excel;charset=utf-8"}),h=URL.createObjectURL(l),B=`DS_Doan_${p||"Tour"}_${b||"Date"}.xls`.replace(/[/\\?%*:|"<>]/g,"-"),v=document.createElement("a");v.setAttribute("href",h),v.setAttribute("download",B),document.body.appendChild(v),v.click(),document.body.removeChild(v)};k.addEventListener("change",w),C.addEventListener("change",w),document.getElementById("filterSearch")?.addEventListener("input",w),document.getElementById("filterSort")?.addEventListener("change",I),document.getElementById("btnExportPDF").addEventListener("click",()=>{window.print()}),document.getElementById("btnExportExcel").addEventListener("click",()=>{K()}),G(),z(),I()};export{J as afterRender,X as render};
