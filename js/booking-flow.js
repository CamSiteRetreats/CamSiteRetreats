/**
 * Booking Flow - Modal Wrapper
 * Sử dụng BookingEngine để hiển thị form đăng ký 4 bước trong Modal Fullscreen
 */

const BookingFlow = {
    _isOpen: false,
    _tourData: null,

    init() {
        if (document.getElementById('bfw-modal')) return;

        const html = `
        <div id="bfw-modal" style="display:none; position:fixed; inset:0; z-index:9999; font-family:'Plus Jakarta Sans','Montserrat',sans-serif;" role="dialog" aria-modal="true">
            <!-- Backdrop -->
            <div onclick="BookingFlow.close()" style="position:absolute; inset:0; background:rgba(0,0,0,0.55); backdrop-filter:blur(4px);"></div>

            <!-- Slide-up panel -->
            <div id="bfw-inner"
                style="position:absolute; bottom:0; left:0; right:0; top:0;
                       background:#f5f5f0; display:flex; flex-direction:column; overflow:hidden;
                       transform:translateY(60px); opacity:0;
                       transition:transform 0.38s cubic-bezier(0.16,1,0.3,1), opacity 0.38s ease;">

                <!-- Header like process.html -->
                <div id="bfw-header" style="background:white; border-bottom:1px solid #e5e7eb; position:sticky; top:0; z-index:10; box-shadow:0 1px 12px rgba(0,0,0,.06); padding:10px 20px; display:flex; justify-content:space-between; align-items:center; flex-shrink:0;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <img src="/logo.png" alt="CAM SITE RETREATS" style="height:48px; width:auto; object-fit:contain;" onerror="this.style.display='none'">
                        <div>
                            <div style="font-size:10px; font-weight:700; color:#9ca3af; text-transform:uppercase; letter-spacing:0.1em; line-height:1.2;">Đăng ký Tour</div>
                            <div id="bfw-subtitle" style="font-size:13px; font-weight:700; color:#E85D04; line-height:1.3; margin-top:2px;"></div>
                        </div>
                    </div>
                    <button onclick="BookingFlow.close()"
                        style="padding:8px; border-radius:50%; background:#f3f4f6; border:none; cursor:pointer; line-height:0; transition:background .2s;"
                        onmouseover="this.style.background='#e5e7eb'" onmouseout="this.style.background='#f3f4f6'">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>

                <!-- Engine container -->
                <div id="bfw-engine-container" style="flex:1; overflow-y:auto; padding:24px 16px 60px; max-width:640px; width:100%; margin:0 auto; box-sizing:border-box;">
                    <!-- BookingEngine renders here -->
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', html);
    },

    /**
     * Mở modal đăng ký
     * @param {string} tourName  - Tên tour
     * @param {number} price     - Giá tour
     * @param {string} date      - Ngày khởi hành (YYYY-MM-DD hoặc DD/MM/YYYY)
     * @param {string|number} tourId - ID tour
     */
    open(tourName, price, date, tourId = null) {
        this.init();

        // Normalize display date → DD/MM/YYYY
        let displayDate = date || '';
        if (displayDate.includes('T')) displayDate = displayDate.split('T')[0];
        if (displayDate.includes('-') && displayDate.split('-')[0].length === 4) {
            const p = displayDate.split('-');
            displayDate = `${p[2]}/${p[1]}/${p[0]}`;
        }

        document.getElementById('bfw-subtitle').textContent = `${tourName} | ${displayDate}`;

        // Show modal
        const modal = document.getElementById('bfw-modal');
        const inner = document.getElementById('bfw-inner');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                inner.style.transform = 'translateY(0)';
                inner.style.opacity = '1';
            });
        });

        // Loading state
        const container = document.getElementById('bfw-engine-container');
        container.innerHTML = `
            <div style="text-align:center; padding:80px 20px; color:#9ca3af;">
                <div style="width:40px; height:40px; border:3px solid #e5e7eb; border-top-color:#E85D04; border-radius:50%; animation:bfwSpin .7s linear infinite; margin:0 auto 16px;"></div>
                <p style="font-weight:600; font-size:15px;">Đang tải thông tin tour...</p>
            </div>
            <style>@keyframes bfwSpin{to{transform:rotate(360deg)}}</style>`;

        // Fallback tourData nếu không có tourId
        const fallback = tourId ? null : {
            id: null,
            name: tourName,
            price: parseInt(price) || 0,
            form_config: {
                step2: { show_pickup: false, show_medal_name: true, show_vegetarian: true, show_trekking_pole: true, show_special_request: true },
                step3: { show_coupon: true }
            },
            pickup_points: [],
            services: []
        };

        if (typeof BookingEngine !== 'undefined') {
            // Normalize date sang ISO (YYYY-MM-DD) cho engine
            let isoDate = date || '';
            if (isoDate.includes('T')) isoDate = isoDate.split('T')[0];
            if (isoDate.includes('/')) {
                const p = isoDate.split('/');
                if (p.length === 3 && p[2].length === 4) {
                    isoDate = `${p[2]}-${p[1].padStart(2,'0')}-${p[0].padStart(2,'0')}`;
                }
            }
            BookingEngine.mount(container, tourId, isoDate, {
                tourData: fallback,
                onSuccess: (saved) => {
                    console.log('[BookingFlow] Booking saved:', saved.id);
                }
            });
        } else {
            container.innerHTML = '<div style="text-align:center;padding:60px;color:#dc2626;font-weight:600;">Không thể tải form. Vui lòng tải lại trang.</div>';
        }
    },

    close() {
        const modal = document.getElementById('bfw-modal');
        const inner = document.getElementById('bfw-inner');
        if (!modal) return;
        inner.style.transform = 'translateY(60px)';
        inner.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            if (typeof BookingEngine !== 'undefined' && BookingEngine._pollInterval) {
                clearInterval(BookingEngine._pollInterval);
                BookingEngine._pollInterval = null;
            }
        }, 400);
    }
};

window.BookingFlow = BookingFlow;
