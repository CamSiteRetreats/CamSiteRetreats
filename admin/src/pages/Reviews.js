import { Sidebar } from '../components/Sidebar.js';
import { Header } from '../components/Header.js';

export const render = () => `
  <div class="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
    ${Sidebar()}
    <div class="flex flex-col flex-1 w-full overflow-hidden">
      ${Header()}
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
`;

export const afterRender = () => {
    const filter     = document.getElementById('scheduleFilter');
    const copyBtn    = document.getElementById('copyLinkBtn');
    const statsRow   = document.getElementById('statsRow');
    const avgBars    = document.getElementById('avgBars');
    const reviewList = document.getElementById('reviewList');
    const reviewListWrap = document.getElementById('reviewListWrap');
    const emptyState = document.getElementById('emptyState');
    const noReviews  = document.getElementById('noReviewsState');

    // Load schedules
    const loadSchedules = async () => {
        try {
            const res  = await fetch('/api/schedules');
            const data = res.ok ? await res.json() : [];
            const sorted = data.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
            filter.innerHTML = '<option value="">-- Chọn chuyến đi --</option>';
            sorted.forEach(s => {
                const d = new Date(s.start_date);
                const label = `${s.tour_name} — ${d.toLocaleDateString('vi-VN')}`;
                filter.insertAdjacentHTML('beforeend', `<option value="${s.id}">${label}</option>`);
            });
            emptyState.classList.remove('hidden');
        } catch (e) { console.error(e); }
    };

    // Load reviews for a schedule
    const loadReviews = async (scheduleId) => {
        statsRow.classList.add('hidden');
        avgBars.classList.add('hidden');
        reviewListWrap.classList.add('hidden');
        noReviews.classList.add('hidden');
        emptyState.classList.add('hidden');

        try {
            const token = localStorage.getItem('csr_admin_token');
            const res = await fetch(`/api/reviews?admin=1&schedule_id=${scheduleId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const { reviews, stats } = await res.json();

            if (!reviews || reviews.length === 0) {
                noReviews.classList.remove('hidden');
                return;
            }

            // Stats
            document.getElementById('stat-total').textContent   = stats.total ?? reviews.length;
            document.getElementById('stat-overall').textContent = stats.avg_overall ? '⭐ ' + stats.avg_overall : '--';
            document.getElementById('stat-vehicle').textContent = stats.avg_vehicle ? '⭐ ' + stats.avg_vehicle : '--';
            document.getElementById('stat-guide').textContent   = stats.avg_guide   ? '⭐ ' + stats.avg_guide   : '--';
            statsRow.classList.remove('hidden');

            // Average bars
            const bars = [
                { label: '🚐 Xe cộ',            val: stats.avg_vehicle },
                { label: '🧭 Hướng dẫn viên',  val: stats.avg_guide   },
                { label: '🍽️ Bữa ăn',           val: stats.avg_meals   },
                { label: '⭐ Tổng thể',          val: stats.avg_overall },
            ];
            document.getElementById('avgBarsContent').innerHTML = bars.map(b => {
                const pct  = b.val ? (b.val / 5 * 100).toFixed(0) : 0;
                const color = pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-yellow-400' : 'bg-red-400';
                return `
                <div>
                    <div class="flex justify-between mb-1">
                        <span class="text-sm font-medium text-gray-700">${b.label}</span>
                        <span class="text-sm font-bold text-csr-orange">${b.val ?? '--'} / 5</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div class="${color} h-2.5 rounded-full transition-all duration-700" style="width:${pct}%"></div>
                    </div>
                </div>`;
            }).join('');
            avgBars.classList.remove('hidden');

            // Review cards
            const stars = n => n ? '⭐'.repeat(n) + ' ' + n + '/5' : '<span class="text-gray-300 text-xs">Không đánh giá</span>';
            reviewList.innerHTML = reviews.map(r => `
                <div class="glass-panel p-5 border-l-4 ${r.is_anonymous ? 'border-gray-300' : 'border-csr-orange'}">
                    <div class="flex justify-between items-start flex-wrap gap-3 mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full ${r.is_anonymous ? 'bg-gray-100' : 'bg-csr-orange/15'} flex items-center justify-center font-bold text-base ${r.is_anonymous ? 'text-gray-400' : 'text-csr-orange'}">
                                ${r.is_anonymous ? '🙈' : (r.reviewer_name ? r.reviewer_name.substring(0, 2).toUpperCase() : '?')}
                            </div>
                            <div>
                                <div class="font-bold text-gray-900">${r.is_anonymous ? '<em class="text-gray-400 font-normal">Ẩn danh</em>' : (r.reviewer_name || '<em class="text-gray-400 font-normal">Không tên</em>')}</div>
                                <div class="text-xs text-gray-400">${new Date(r.submitted_at).toLocaleString('vi-VN')}</div>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-xs text-gray-400 uppercase font-medium">Tổng thể</div>
                            <div class="font-bold text-yellow-500 text-lg">${r.rating_overall ? '⭐ ' + r.rating_overall + '/5' : '--'}</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-sm">
                        <div class="bg-gray-50 rounded-xl p-3">
                            <div class="text-xs text-gray-400 mb-1">🚐 Xe cộ</div>
                            <div class="font-semibold text-gray-800">${stars(r.rating_vehicle)}</div>
                            ${r.comment_vehicle ? `<p class="text-gray-500 text-xs mt-1 italic">"${r.comment_vehicle}"</p>` : ''}
                        </div>
                        <div class="bg-gray-50 rounded-xl p-3">
                            <div class="text-xs text-gray-400 mb-1">🧭 HDV</div>
                            <div class="font-semibold text-gray-800">${stars(r.rating_guide)}</div>
                            ${r.comment_guide ? `<p class="text-gray-500 text-xs mt-1 italic">"${r.comment_guide}"</p>` : ''}
                        </div>
                        <div class="bg-gray-50 rounded-xl p-3">
                            <div class="text-xs text-gray-400 mb-1">🍽️ Bữa ăn</div>
                            <div class="font-semibold text-gray-800">${stars(r.rating_meals)}</div>
                            ${r.comment_meals ? `<p class="text-gray-500 text-xs mt-1 italic">"${r.comment_meals}"</p>` : ''}
                        </div>
                    </div>

                    ${r.comment_general ? `
                        <div class="bg-yellow-50 border border-yellow-100 rounded-xl p-3 mb-3 text-sm">
                            <div class="text-xs font-bold text-yellow-600 mb-1">💬 Nhận xét chung</div>
                            <p class="text-gray-700">${r.comment_general}</p>
                        </div>` : ''}

                    ${r.suggestion ? `
                        <div class="bg-blue-50 border border-blue-100 rounded-xl p-3 text-sm">
                            <div class="text-xs font-bold text-blue-600 mb-1">💡 Góp ý &amp; Mong muốn</div>
                            <p class="text-gray-700">${r.suggestion}</p>
                        </div>` : ''}
                </div>
            `).join('');

            document.getElementById('reviewListCount').textContent = `${reviews.length} phiếu`;
            reviewListWrap.classList.remove('hidden');

        } catch (e) {
            console.error('Error loading reviews:', e);
        }
    };

    // On schedule change
    filter.addEventListener('change', () => {
        const sid = filter.value;
        if (!sid) {
            emptyState.classList.remove('hidden');
            statsRow.classList.add('hidden');
            avgBars.classList.add('hidden');
            reviewListWrap.classList.add('hidden');
            noReviews.classList.add('hidden');
            copyBtn.classList.add('hidden');
            return;
        }
        copyBtn.classList.remove('hidden');
        loadReviews(sid);
    });

    // Copy link button
    copyBtn.addEventListener('click', () => {
        const sid  = filter.value;
        if (!sid) return;
        const link = `${window.location.origin}/review?schedule_id=${sid}`;
        navigator.clipboard.writeText(link).then(() => {
            const orig = copyBtn.innerHTML;
            copyBtn.innerHTML = '✅ Đã copy!';
            setTimeout(() => copyBtn.innerHTML = orig, 2000);
        });
    });

    loadSchedules();
};
