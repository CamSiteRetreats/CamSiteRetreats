import{S as f,H as w}from"./Header-CsK1zS95.js";const L=()=>`
  <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
    ${f()}
    <div class="flex flex-col flex-1 w-full overflow-hidden">
      ${w()}
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
        <div class="max-w-6xl mx-auto space-y-6">

          <!-- PAGE HEADER -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-1">⭐ Đánh Giá Chuyến Đi</h1>
              <p class="text-gray-500 text-sm">Phản hồi từ khách hàng sau từng chuyến đi</p>
            </div>
            <div id="scheduleFilterWrapper" class="flex gap-3 flex-wrap">
              <select id="scheduleFilter" class="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:border-csr-orange focus:outline-none focus:ring-2 focus:ring-csr-orange/20 min-w-[220px]">
                <option value="">-- Chọn chuyến đi --</option>
              </select>
              <button id="copyLinkBtn" class="hidden bg-csr-orange text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-600 transition-colors flex items-center gap-2">
                🔗 Copy Link ĐG
              </button>
            </div>
          </div>

          <!-- STATS ROW -->
          <div id="statsRow" class="grid grid-cols-2 md:grid-cols-4 gap-4 hidden">
            <div class="glass-panel p-4 text-center">
              <div class="text-2xl font-black text-csr-orange" id="stat-total">--</div>
              <div class="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">Tổng phiếu</div>
            </div>
            <div class="glass-panel p-4 text-center">
              <div class="text-2xl font-black text-yellow-500" id="stat-overall">--</div>
              <div class="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">TB Tổng thể</div>
            </div>
            <div class="glass-panel p-4 text-center">
              <div class="text-2xl font-black text-blue-500" id="stat-vehicle">--</div>
              <div class="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">TB Xe cộ</div>
            </div>
            <div class="glass-panel p-4 text-center">
              <div class="text-2xl font-black text-green-500" id="stat-guide">--</div>
              <div class="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">TB HDV</div>
            </div>
          </div>

          <!-- AVERAGE BARS -->
          <div id="avgBars" class="glass-panel p-5 hidden">
            <h3 class="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Điểm trung bình từng hạng mục</h3>
            <div class="space-y-4" id="avgBarsContent"></div>
          </div>

          <!-- REVIEW LIST -->
          <div id="reviewListWrap" class="hidden">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-bold text-gray-800">Danh sách phiếu đánh giá</h3>
              <span class="text-xs text-gray-400" id="reviewListCount"></span>
            </div>
            <div id="reviewList" class="space-y-4"></div>
          </div>

          <!-- EMPTY STATE -->
          <div id="emptyState" class="glass-panel p-10 text-center hidden">
            <div class="text-5xl mb-4">⭐</div>
            <p class="text-gray-500 font-medium">Chọn một chuyến đi để xem đánh giá.</p>
          </div>

          <!-- NO REVIEWS STATE -->
          <div id="noReviewsState" class="glass-panel p-10 text-center hidden">
            <div class="text-5xl mb-4">📭</div>
            <p class="text-gray-500 font-medium">Chuyến này chưa có đánh giá nào.</p>
            <p class="text-gray-400 text-sm mt-2">Hãy gửi link đánh giá cho khách!</p>
          </div>

        </div>
      </main>
    </div>
  </div>
`,$=()=>{const i=document.getElementById("scheduleFilter"),d=document.getElementById("copyLinkBtn"),o=document.getElementById("statsRow"),c=document.getElementById("avgBars"),p=document.getElementById("reviewList"),r=document.getElementById("reviewListWrap"),v=document.getElementById("emptyState"),g=document.getElementById("noReviewsState"),h=async()=>{try{const s=await fetch("/api/schedules"),l=(s.ok?await s.json():[]).sort((a,t)=>new Date(t.start_date)-new Date(a.start_date));i.innerHTML='<option value="all">-- Tất cả chuyến đi --</option>',l.forEach(a=>{const t=new Date(a.start_date),m=`${a.tour_name} — ${t.toLocaleDateString("vi-VN")}`;i.insertAdjacentHTML("beforeend",`<option value="${a.id}">${m}</option>`)}),l.length>0?(i.value="all",i.dispatchEvent(new Event("change"))):v.classList.remove("hidden")}catch(s){console.error(s)}},y=async s=>{o.classList.add("hidden"),c.classList.add("hidden"),r.classList.add("hidden"),g.classList.add("hidden"),v.classList.add("hidden");try{const n=localStorage.getItem("csr_admin_token"),l=await fetch(`/api/reviews?admin=1&schedule_id=${s}`,{headers:{Authorization:`Bearer ${n}`}}),{reviews:a,stats:t}=await l.json();if(!a||a.length===0){g.classList.remove("hidden");return}document.getElementById("stat-total").textContent=t.total??a.length,document.getElementById("stat-overall").textContent=t.avg_overall?"⭐ "+t.avg_overall:"--",document.getElementById("stat-vehicle").textContent=t.avg_vehicle?"⭐ "+t.avg_vehicle:"--",document.getElementById("stat-guide").textContent=t.avg_guide?"⭐ "+t.avg_guide:"--",o.classList.remove("hidden");const m=[{label:"🚐 Xe cộ",val:t.avg_vehicle},{label:"🧭 Hướng dẫn viên",val:t.avg_guide},{label:"🍽️ Bữa ăn",val:t.avg_meals},{label:"⭐ Tổng thể",val:t.avg_overall}];document.getElementById("avgBarsContent").innerHTML=m.map(e=>{const u=e.val?(e.val/5*100).toFixed(0):0,b=u>=80?"bg-green-500":u>=60?"bg-yellow-400":"bg-red-400";return`
                <div>
                    <div class="flex justify-between mb-1">
                        <span class="text-sm font-medium text-gray-700">${e.label}</span>
                        <span class="text-sm font-bold text-csr-orange">${e.val??"--"} / 5</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div class="${b} h-2.5 rounded-full transition-all duration-700" style="width:${u}%"></div>
                    </div>
                </div>`}).join(""),c.classList.remove("hidden");const x=e=>e?"⭐".repeat(e)+" "+e+"/5":'<span class="text-gray-300 text-xs">Không đánh giá</span>';p.innerHTML=a.map(e=>`
                <div class="glass-panel p-5 border-l-4 ${e.is_anonymous?"border-gray-300":"border-csr-orange"}">
                    <div class="flex justify-between items-start flex-wrap gap-3 mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full ${e.is_anonymous?"bg-gray-100":"bg-csr-orange/15"} flex items-center justify-center font-bold text-base ${e.is_anonymous?"text-gray-400":"text-csr-orange"}">
                                ${e.is_anonymous?"🙈":e.reviewer_name?e.reviewer_name.substring(0,2).toUpperCase():"?"}
                            </div>
                            <div>
                                <div class="font-bold text-gray-900">${e.is_anonymous?'<em class="text-gray-400 font-normal">Ẩn danh</em>':e.reviewer_name||'<em class="text-gray-400 font-normal">Không tên</em>'}</div>
                                <div class="text-xs text-gray-400">${new Date(e.submitted_at).toLocaleString("vi-VN")}</div>
                                ${e.tour_name?`<div class="text-xs font-semibold text-csr-orange mt-0.5">📍 ${e.tour_name}</div>`:""}
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-xs text-gray-400 uppercase font-medium">Tổng thể</div>
                            <div class="font-bold text-yellow-500 text-lg">${e.rating_overall?"⭐ "+e.rating_overall+"/5":"--"}</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-sm">
                        <div class="bg-gray-50 rounded-xl p-3">
                            <div class="text-xs text-gray-400 mb-1">🚐 Xe cộ</div>
                            <div class="font-semibold text-gray-800">${x(e.rating_vehicle)}</div>
                            ${e.comment_vehicle?`<p class="text-gray-500 text-xs mt-1 italic">"${e.comment_vehicle}"</p>`:""}
                        </div>
                        <div class="bg-gray-50 rounded-xl p-3">
                            <div class="text-xs text-gray-400 mb-1">🧭 HDV</div>
                            <div class="font-semibold text-gray-800">${x(e.rating_guide)}</div>
                            ${e.comment_guide?`<p class="text-gray-500 text-xs mt-1 italic">"${e.comment_guide}"</p>`:""}
                        </div>
                        <div class="bg-gray-50 rounded-xl p-3">
                            <div class="text-xs text-gray-400 mb-1">🍽️ Bữa ăn</div>
                            <div class="font-semibold text-gray-800">${x(e.rating_meals)}</div>
                            ${e.comment_meals?`<p class="text-gray-500 text-xs mt-1 italic">"${e.comment_meals}"</p>`:""}
                        </div>
                    </div>

                    ${e.comment_general?`
                        <div class="bg-yellow-50 border border-yellow-100 rounded-xl p-3 mb-3 text-sm">
                            <div class="text-xs font-bold text-yellow-600 mb-1">💬 Nhận xét chung</div>
                            <p class="text-gray-700">${e.comment_general}</p>
                        </div>`:""}

                    ${e.suggestion?`
                        <div class="bg-blue-50 border border-blue-100 rounded-xl p-3 text-sm">
                            <div class="text-xs font-bold text-blue-600 mb-1">💡 Góp ý &amp; Mong muốn</div>
                            <p class="text-gray-700">${e.suggestion}</p>
                        </div>`:""}
                </div>
            `).join(""),document.getElementById("reviewListCount").textContent=`${a.length} phiếu`,r.classList.remove("hidden")}catch(n){console.error("Error loading reviews:",n)}};i.addEventListener("change",()=>{const s=i.value;if(!s){v.classList.remove("hidden"),o.classList.add("hidden"),c.classList.add("hidden"),r.classList.add("hidden"),g.classList.add("hidden"),d.classList.add("hidden");return}s==="all"?d.classList.add("hidden"):d.classList.remove("hidden"),y(s)}),d.addEventListener("click",()=>{const s=i.value;if(!s)return;const n=`${window.location.origin}/review?schedule_id=${s}`;navigator.clipboard.writeText(n).then(()=>{const l=d.innerHTML;d.innerHTML="✅ Đã copy!",setTimeout(()=>d.innerHTML=l,2e3)})}),h()};export{$ as afterRender,L as render};
