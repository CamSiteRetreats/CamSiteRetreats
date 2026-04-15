import{S as B,H as I}from"./Header-CsK1zS95.js";const i="/api/blog",h="https://cdn.quilljs.com/1.3.6",T=()=>`
  <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
    ${B()}
    <div class="flex flex-col flex-1 w-full overflow-hidden">
      ${I()}
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
        <div class="max-w-5xl mx-auto space-y-6">

          <!-- PAGE HEADER -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-1">✍️ Quản lý Blog</h1>
              <p class="text-gray-500 text-sm">Viết và quản lý bài viết hiển thị trên trang chủ</p>
            </div>
            <button id="blog-new-btn"
              class="bg-csr-orange text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
              + Bài viết mới
            </button>
          </div>

          <!-- STATS ROW -->
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
              <div class="text-2xl font-black text-gray-900" id="stat-total">—</div>
              <div class="text-xs text-gray-400 font-medium uppercase tracking-wide mt-1">Tổng bài viết</div>
            </div>
            <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
              <div class="text-2xl font-black text-green-500" id="stat-pub">—</div>
              <div class="text-xs text-gray-400 font-medium uppercase tracking-wide mt-1">Đã đăng</div>
            </div>
            <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
              <div class="text-2xl font-black text-gray-400" id="stat-draft">—</div>
              <div class="text-xs text-gray-400 font-medium uppercase tracking-wide mt-1">Bản nháp</div>
            </div>
          </div>

          <!-- TABLE -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-100">
                  <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wide">Tiêu đề</th>
                  <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wide hidden md:table-cell">Danh mục</th>
                  <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wide">Trạng thái</th>
                  <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wide hidden md:table-cell">Ngày</th>
                  <th class="text-right px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wide">Thao tác</th>
                </tr>
              </thead>
              <tbody id="blog-tbody">
                <tr><td colspan="5" class="text-center py-10 text-gray-400">Đang tải...</td></tr>
              </tbody>
            </table>
          </div>
          <div id="blog-pagination" class="flex justify-center gap-2"></div>

        </div>
      </main>
    </div>
  </div>

  <!-- MODAL OVERLAY -->
  <div id="blog-modal" class="fixed inset-0 z-[200] hidden items-start justify-center overflow-y-auto p-4 md:p-8"
       style="background:rgba(0,0,0,0.55);backdrop-filter:blur(4px)">
    <div class="bg-white rounded-3xl w-full max-w-3xl mx-auto my-auto shadow-2xl overflow-hidden">

      <div class="flex items-center justify-between px-7 py-5 border-b border-gray-100">
        <h2 class="text-lg font-black text-gray-900" id="modal-heading">Tạo bài viết mới</h2>
        <button id="blog-modal-close" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold transition-colors">✕</button>
      </div>

      <div class="p-7 flex flex-col gap-5 overflow-y-auto" style="max-height:calc(90vh - 80px)">
        <!-- Title -->
        <div>
          <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Tiêu đề *</label>
          <input id="bf-title" type="text" placeholder="Nhập tiêu đề bài viết..." required
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-semibold outline-none transition-colors focus:border-csr-orange">
        </div>

        <!-- Excerpt -->
        <div>
          <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Mô tả ngắn</label>
          <textarea id="bf-excerpt" rows="2" placeholder="Một câu hấp dẫn về bài viết..."
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none transition-colors resize-none focus:border-csr-orange"></textarea>
        </div>

        <!-- Category + Status (2 cols) -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Danh mục</label>
            <select id="bf-category" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-csr-orange cursor-pointer">
              <option>Kinh nghiệm</option>
              <option>Review Tour</option>
              <option>Câu chuyện</option>
              <option>Tin tức</option>
              <option>Cẩm nang</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Trạng thái</label>
            <select id="bf-status" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-csr-orange cursor-pointer">
              <option value="draft">Bản nháp</option>
              <option value="published">Đăng ngay</option>
            </select>
          </div>
        </div>

        <!-- Thumbnail URL -->
        <div>
          <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Ảnh bìa (dán URL ảnh)</label>
          <div class="flex gap-3 items-start">
            <input id="bf-thumbnail" type="url" placeholder="https://..."
              class="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-csr-orange"
              oninput="const p=document.getElementById('bf-thumb-prev');p.src=this.value.trim();p.style.display=this.value.trim()?'block':'none'">
            <img id="bf-thumb-prev" src="" alt="preview" style="display:none"
              class="w-16 h-16 rounded-lg object-cover border-2 border-gray-200 shrink-0">
          </div>
          <p class="text-xs text-gray-400 mt-1.5">💡 Upload ảnh lên Imgur / Cloudinary rồi paste link vào đây</p>
        </div>

        <!-- Rich Text Editor -->
        <div>
          <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">
            Nội dung bài viết
            <span class="font-normal normal-case text-gray-300"> — dùng toolbar để định dạng & chèn ảnh</span>
          </label>
          <div id="bf-content" class="border-2 border-gray-200 rounded-xl overflow-hidden" style="min-height:300px"></div>
        </div>

        <!-- Buttons -->
        <div class="flex gap-3 justify-end pt-2 border-t border-gray-100">
          <button id="bf-cancel" class="px-5 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors">
            Hủy
          </button>
          <button id="bf-save" class="px-6 py-2.5 rounded-xl bg-csr-orange text-white font-bold text-sm hover:bg-orange-600 transition-all shadow-md">
            Lưu bài viết
          </button>
        </div>
      </div>
    </div>
  </div>
`,$=()=>{let d=[],m=0,c=1,s=null,l=null;const p=10,f=()=>localStorage.getItem("csr_admin_token")||"",g=()=>({"Content-Type":"application/json",Authorization:`Bearer ${f()}`}),v=t=>t?new Date(t).toLocaleDateString("vi-VN"):"—";async function b(){const t=document.getElementById("blog-tbody");if(t){t.innerHTML='<tr><td colspan="5" class="text-center py-10 text-gray-400">Đang tải...</td></tr>';try{const n=await(await fetch(`${i}?all=1&page=${c}&limit=${p}`,{headers:g()})).json();if(d=n.posts||[],m=n.total||0,document.getElementById("stat-total").textContent=m,document.getElementById("stat-pub").textContent=d.filter(a=>a.status==="published").length,document.getElementById("stat-draft").textContent=d.filter(a=>a.status==="draft").length,d.length===0){t.innerHTML='<tr><td colspan="5" class="text-center py-12 text-gray-400">Chưa có bài viết nào. Tạo bài viết đầu tiên!</td></tr>';return}t.innerHTML=d.map(a=>`
                <tr class="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td class="px-4 py-3">
                        <div class="font-bold text-sm text-gray-900 truncate max-w-xs">${a.title}</div>
                        <div class="text-xs text-gray-400 truncate max-w-xs">/post?slug=${a.slug}</div>
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-500 hidden md:table-cell">${a.category}</td>
                    <td class="px-4 py-3">
                        ${a.status==="published"?'<span class="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">ĐÃ ĐĂNG</span>':'<span class="bg-gray-100 text-gray-500 text-xs font-bold px-2.5 py-1 rounded-full">NHÁP</span>'}
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-400 hidden md:table-cell whitespace-nowrap">${v(a.published_at||a.created_at)}</td>
                    <td class="px-4 py-3 text-right whitespace-nowrap">
                        <button data-edit="${a.id}" class="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-lg mr-1 hover:bg-blue-100 transition-colors">Sửa</button>
                        <a href="/post.html?slug=${a.slug}" target="_blank" class="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-lg mr-1 hover:bg-gray-200 transition-colors">Xem</a>
                        <button data-delete="${a.id}" data-title="${a.title.replace(/"/g,"")}" class="bg-red-50 text-red-500 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors">Xóa</button>
                    </td>
                </tr>
            `).join("");const o=Math.ceil(m/p),r=document.getElementById("blog-pagination");r&&(r.innerHTML=o<=1?"":Array.from({length:o},(a,x)=>x+1).map(a=>`
                    <button data-page="${a}" class="w-9 h-9 rounded-xl border-2 font-bold text-sm transition-colors ${a===c?"bg-csr-orange text-white border-csr-orange":"bg-white text-gray-600 border-gray-200 hover:border-csr-orange hover:text-csr-orange"}">${a}</button>
                `).join(""))}catch{t&&(t.innerHTML='<tr><td colspan="5" class="text-center py-10 text-red-400">Lỗi tải dữ liệu</td></tr>')}}}async function w(){if(l)return;if(!document.querySelector('link[href*="quill"]')){const e=document.createElement("link");e.rel="stylesheet",e.href=`${h}/quill.snow.css`,document.head.append(e)}await new Promise(e=>{if(window.Quill){e();return}const n=document.createElement("script");n.src=`${h}/quill.min.js`,n.onload=e,document.head.append(n)}),l=new window.Quill("#bf-content",{theme:"snow",placeholder:"Bắt đầu viết câu chuyện của bạn...",modules:{toolbar:{container:[[{header:[2,3,!1]}],["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],["blockquote","link","image"],["clean"]],handlers:{image:function(){const e=document.createElement("input");e.type="file",e.accept="image/*",e.click(),e.onchange=()=>{const n=e.files[0];if(!n||n.size>5*1024*1024){alert("Ảnh phải < 5MB");return}const o=new FileReader;o.onload=r=>{const a=l.getSelection(!0);l.insertEmbed(a.index,"image",r.target.result),l.setSelection(a.index+1)},o.readAsDataURL(n)}}}}}});const t=document.createElement("style");t.textContent=".ql-editor{min-height:280px;font-size:15px;line-height:1.8;font-family:inherit}.ql-toolbar{border-radius:10px 10px 0 0!important;border-color:#e5e7eb!important}.ql-container{border-radius:0 0 10px 10px!important;border-color:#e5e7eb!important}",document.head.append(t)}async function y(t=null){s=t;const e=document.getElementById("blog-modal");if(document.getElementById("modal-heading").textContent=t?"Chỉnh sửa bài viết":"Tạo bài viết mới",document.getElementById("bf-title").value="",document.getElementById("bf-excerpt").value="",document.getElementById("bf-category").value="Kinh nghiệm",document.getElementById("bf-status").value="draft",document.getElementById("bf-thumbnail").value="",document.getElementById("bf-thumb-prev").style.display="none",e.classList.remove("hidden"),e.classList.add("flex"),await w(),l.setText(""),t)try{const o=await(await fetch(`${i}?id=${t}&all=1`,{headers:g()})).json();if(document.getElementById("bf-title").value=o.title||"",document.getElementById("bf-excerpt").value=o.excerpt||"",document.getElementById("bf-category").value=o.category||"Kinh nghiệm",document.getElementById("bf-status").value=o.status||"draft",o.thumbnail){document.getElementById("bf-thumbnail").value=o.thumbnail;const r=document.getElementById("bf-thumb-prev");r.src=o.thumbnail,r.style.display="block"}l.root.innerHTML=o.content||""}catch{}}function u(){const t=document.getElementById("blog-modal");t.classList.add("hidden"),t.classList.remove("flex"),s=null}async function E(){const t=(document.getElementById("bf-title").value||"").trim();if(!t){alert("Vui lòng nhập tiêu đề!");return}const e=document.getElementById("bf-save");e.textContent="Đang lưu...",e.disabled=!0;try{const n={title:t,excerpt:(document.getElementById("bf-excerpt").value||"").trim(),content:l?l.root.innerHTML:"",thumbnail:(document.getElementById("bf-thumbnail").value||"").trim(),category:document.getElementById("bf-category").value,status:document.getElementById("bf-status").value},o=s?`${i}?id=${s}`:i,x=await(await fetch(o,{method:s?"PUT":"POST",headers:g(),body:JSON.stringify(n)})).json();if(!x.success)throw new Error(x.error||"Lỗi lưu");u(),c=1,b()}catch(n){alert("Lỗi: "+n.message)}finally{e.textContent="Lưu bài viết",e.disabled=!1}}async function k(t,e){if(confirm(`Xóa bài viết "${e}"?
Hành động này không thể hoàn tác.`))try{const o=await(await fetch(`${i}?id=${t}`,{method:"DELETE",headers:g()})).json();if(!o.success)throw new Error(o.error);b()}catch(n){alert("Lỗi xóa: "+n.message)}}document.getElementById("blog-new-btn")?.addEventListener("click",()=>y(null)),document.getElementById("blog-modal-close")?.addEventListener("click",u),document.getElementById("bf-cancel")?.addEventListener("click",u),document.getElementById("bf-save")?.addEventListener("click",E),document.getElementById("blog-tbody")?.addEventListener("click",t=>{const e=t.target.closest("[data-edit]");if(e){y(e.dataset.edit);return}const n=t.target.closest("[data-delete]");n&&k(n.dataset.delete,n.dataset.title)}),document.getElementById("blog-pagination")?.addEventListener("click",t=>{const e=t.target.closest("[data-page]");e&&(c=parseInt(e.dataset.page),b())}),document.getElementById("blog-modal")?.addEventListener("click",t=>{t.target===document.getElementById("blog-modal")&&u()}),b()};export{$ as afterRender,T as render};
