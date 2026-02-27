import{S as P,H as A}from"./Header-CvqOcIss.js";const G=()=>`
      <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800 font-sans">
        <!-- Sidebar is hidden when printing -->
        <div class="print:hidden">
            ${P()}
        </div>
        
        <div class="flex flex-col flex-1 w-full overflow-hidden">
          <div class="print:hidden">
              ${A()}
          </div>
          
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 print:p-0 print:bg-white print:overflow-visible">
               <div class="max-w-[1400px] mx-auto space-y-6 print:space-y-4">
                  
                  <!-- Top Bar (Hidden on Print) -->
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
                      <div>
                          <div class="flex items-center gap-2 mb-2">
                              <a href="/admin/schedules" data-link class="text-sm font-medium text-gray-500 hover:text-csr-orange transition-colors flex items-center gap-1">
                                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                  Quay lại Lịch Trình
                              </a>
                          </div>
                          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-1" id="roster-title">Danh Sách Đoàn</h1>
                          <p class="text-gray-500 text-sm" id="roster-subtitle">Đang tải thông tin...</p>
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
                  <div class="hidden print:block text-center border-b-2 border-gray-800 pb-4 mb-6">
                      <h1 class="text-2xl font-bold uppercase tracking-widest text-gray-900 mb-2" id="print-title">DANH SÁCH ĐOÀN</h1>
                      <div class="text-sm text-gray-700 flex justify-center gap-8 font-medium">
                          <span id="print-tour-name">Tuyến: ...</span>
                          <span id="print-tour-date">Ngày: ...</span>
                          <span id="print-total">Tổng khách: 0</span>
                      </div>
                  </div>

                  <!-- Filters & Column Selection (Hidden on Print) -->
                  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-5 print:hidden">
                      <div class="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between border-b border-gray-100 pb-5">
                          <div class="flex items-center gap-4">
                              <h3 class="font-bold text-gray-800 flex items-center gap-2">
                                  <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                                  Lọc Nhanh
                              </h3>
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
              @page { size: landscape; margin: 10mm; }
              body { font-family: 'Times New Roman', serif; background: white; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ccc; padding: 6px 8px !important; color: black !important; }
              th { background-color: #f3f4f6 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
      </style>
    `,V=async()=>{const p=[{id:"col-stt",label:"STT",always:!0,render:(e,t)=>t+1},{id:"col-name",label:"Họ và Tên",default:!0,render:e=>`<div class="font-bold text-gray-900">${e.name}</div>`},{id:"col-dob",label:"Ngày Sinh",default:!0,render:e=>{if(!e.dob)return"-";const t=e.dob.split("-");return t.length===3?`${t[2]}/${t[1]}/${t[0]}`:e.dob}},{id:"col-phone",label:"SĐT",default:!0,render:e=>`<div class="font-medium text-gray-700">${e.phone||"-"}</div>`},{id:"col-gender",label:"Giới tính",default:!0,render:e=>e.gender||"-"},{id:"col-cccd",label:"CCCD / Passport",default:!0,render:e=>e.id_card||e.cccd||"-"},{id:"col-address",label:"Địa chỉ",default:!0,render:e=>`<div class="max-w-[200px] truncate print:max-w-none print:whitespace-normal" title="${e.address||""}">${e.address||"-"}</div>`},{id:"col-diet",label:"Ăn chay",default:!0,render:e=>e.diet==="Chay"||e.diet==="Có"?'<span class="text-green-600 font-bold">Có</span>':"Không"},{id:"col-pole",label:"Gậy Trekking",default:!0,render:e=>e.trekking_pole==="Có"?'<span class="text-orange-600 font-bold">Có</span>':"Không"},{id:"col-allergy",label:"Dị ứng",default:!1,render:e=>e.medical_notes||e.allergy||"-"},{id:"col-special",label:"Yêu cầu ĐB",default:!1,render:e=>e.special_notes||e.special||"-"},{id:"col-medal",label:"Tên Huy Chương",default:!1,render:e=>e.medal_name||e.name||"-"}],C=new URLSearchParams(window.location.search),i=C.get("tour")||"",h=C.get("date")||"";let d=h;if(h&&h.includes("-")){const e=h.split("-");e.length===3&&(d=`${e[2]}/${e[1]}/${e[0]}`)}const E=document.getElementById("roster-title"),T=document.getElementById("roster-subtitle"),L=document.getElementById("print-tour-name"),$=document.getElementById("print-tour-date"),H=document.getElementById("print-total"),v=document.getElementById("filterStatus"),x=document.getElementById("filterGender"),b=document.getElementById("rosterList");let m=[],u=new Set(p.filter(e=>e.default||e.always).map(e=>e.id));i&&(E.textContent=`DS Đoàn: ${i}`,L.textContent=`Tuyến: ${i}`),d&&(T.innerHTML=`<span class="font-semibold text-gray-700">Khởi hành:</span> ${d}`,$.textContent=`Ngày: ${d}`);const S=()=>{const e=document.getElementById("column-toggles");e.innerHTML=p.filter(t=>!t.always).map(t=>`
            <label class="flex items-center gap-2 cursor-pointer group bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-csr-orange/50 transition-colors">
                <input type="checkbox" value="${t.id}" class="col-toggle-cb text-csr-orange focus:ring-csr-orange rounded" ${u.has(t.id)?"checked":""}>
                <span class="text-sm font-medium text-gray-600 group-hover:text-gray-900 select-none">${t.label}</span>
            </label>
        `).join(""),document.querySelectorAll(".col-toggle-cb").forEach(t=>{t.addEventListener("change",n=>{n.target.checked?u.add(n.target.value):u.delete(n.target.value),D()})})},B=()=>{const e=document.getElementById("table-header-row");e.innerHTML=p.map(t=>`
            <th class="p-4 whitespace-nowrap ${t.id}" data-col="${t.id}">${t.label}</th>
        `).join("")},D=()=>{p.forEach(e=>{const t=u.has(e.id),n=document.querySelector(`th[data-col="${e.id}"]`);n&&(t?n.classList.remove("col-hidden"):n.classList.add("col-hidden")),document.querySelectorAll(`td[data-col="${e.id}"]`).forEach(r=>{t?r.classList.remove("col-hidden"):r.classList.add("col-hidden")})})},j=async()=>{try{m=(await(await fetch("/api/bookings")).json()).filter(n=>{let r=!0,s=!0;return i&&(r=n.tour===i||n.tour&&n.tour.startsWith(i)),d&&(s=n.date===d),r&&s}),m.sort((n,r)=>{const s=(n.status||"").includes("cọc")||n.status==="Hoàn tất"?1:0;return((r.status||"").includes("cọc")||r.status==="Hoàn tất"?1:0)-s}),y()}catch(e){console.error("Lỗi khi tải dữ liệu đoàn:",e),b.innerHTML='<tr><td colspan="12" class="p-8 text-center text-red-500 font-bold">Lỗi khi tải dữ liệu. Vui lòng tải lại trang.</td></tr>'}},y=()=>{const e=v.value.toLowerCase(),t=x.value.toLowerCase(),n=m.filter(r=>{const s=e===""||e==="chờ cọc"&&(r.status==="Chờ cọc"||r.status==="Chờ xác nhận cọc")||e==="đã cọc"&&(r.status==="Đã cọc"||r.status==="Hoàn tất"||r.status==="Hoàn thành")||e==="đã hủy"&&r.status==="Đã hủy",l=t===""||r.gender&&r.gender.toLowerCase()===t;return s&&l});if(document.getElementById("text-visible-count").textContent=n.length,H.textContent=`Tổng khách: ${n.length}`,n.length===0){b.innerHTML='<tr><td colspan="12" class="p-12 text-center text-gray-500 bg-gray-50">Không tìm thấy khách hàng nào khớp với điều kiện lọc.</td></tr>';return}b.innerHTML=n.map((r,s)=>'<tr class="hover:bg-gray-50/50 transition-colors">'+p.map(l=>`
                    <td class="p-4 align-top ${u.has(l.id)?"":"col-hidden"}" data-col="${l.id}">
                        ${l.render(r,s)}
                    </td>
                `).join("")+"</tr>").join("")},M=()=>{const e=p.filter(o=>u.has(o.id));let t="\\uFEFF";t+=e.map(o=>`"${o.label}"`).join(",")+`
`;const n=v.value.toLowerCase(),r=x.value.toLowerCase();m.filter(o=>{const f=n===""||n==="chờ cọc"&&(o.status==="Chờ cọc"||o.status==="Chờ xác nhận cọc")||n==="đã cọc"&&(o.status==="Đã cọc"||o.status==="Hoàn tất"||o.status==="Hoàn thành")||n==="đã hủy"&&o.status==="Đã hủy",w=r===""||o.gender&&o.gender.toLowerCase()===r;return f&&w}).forEach((o,f)=>{const w=e.map(c=>{let a="";if(c.id==="col-stt")a=f+1;else if(c.id==="col-name")a=o.name||"";else if(c.id==="col-address")a=o.address||"";else if(c.id==="col-phone")a=o.phone?`'${o.phone}`:"";else if(c.id==="col-diet")a=o.diet==="Chay"||o.diet==="Có"?"Có":"Không";else if(c.id==="col-pole")a=o.trekking_pole==="Có"?"Có":"Không";else{const F=String(c.render(o,f)),k=document.createElement("DIV");k.innerHTML=F,a=k.textContent||k.innerText||""}return a=String(a).replace(/"/g,'""'),`"${a}"`});t+=w.join(",")+`
`});const l=new Blob([t],{type:"text/csv;charset=utf-8;"}),I=URL.createObjectURL(l),N=`DS_Doan_${i||"Tour"}_${d||"Date"}.csv`.replace(/[/\\?%*:|"<>]/g,"-"),g=document.createElement("a");g.setAttribute("href",I),g.setAttribute("download",N),document.body.appendChild(g),g.click(),document.body.removeChild(g)};v.addEventListener("change",y),x.addEventListener("change",y),document.getElementById("btnExportPDF").addEventListener("click",()=>{window.print()}),document.getElementById("btnExportExcel").addEventListener("click",()=>{M()}),S(),B(),j()};export{V as afterRender,G as render};
