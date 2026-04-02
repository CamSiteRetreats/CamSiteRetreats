/**
 * BookingEngine v2 - Dynamic 4-Step Registration
 * Dùng chung cho cả Modal (booking-flow.js) và trang process.html
 *
 * Công thức tính giá:
 *   Tổng = Giá tour + Tổng dịch vụ đã chọn - Giảm giá (coupon)
 */

const BookingEngine = {
    // ── State ───────────────────────────────────────────────────────────────
    currentStep: 1,
    tourData: null,       // { id, name, price, form_config, pickup_points, services }
    selectedDate: null,
    bookingData: {},
    selectedServices: {}, // { service_id: { id, label, price } }
    coupon: null,         // { code, discount_type, value, discount_amount }
    discountAmount: 0,

    // ── Giá tính toán 
    DEPOSIT_AMOUNT: 1000000, // Tiền cọc cố định: 1,000,000đ

    getServicesTotal() {
        return Object.values(this.selectedServices).reduce((s, sv) => s + (sv.price || 0), 0);
    },
    getBasePrice() {
        return parseInt(this.tourData?.price || 0);
    },
    getGrandTotal() {
        const total = this.getBasePrice() + this.getServicesTotal();
        return Math.max(0, total - this.discountAmount);
    },
    getDepositAmount() {
        if (this.bookingData && this.bookingData.depositRequired !== undefined && !isNaN(this.bookingData.depositRequired)) {
            return this.bookingData.depositRequired;
        }
        return 1000000;
    },
    formatVND(n) {
        return parseInt(n || 0).toLocaleString('vi-VN') + 'đ';
    },

    // ── Mount vào một container 
    async mount(containerSelector, tourId, selectedDate, options = {}) {
        const container = typeof containerSelector === 'string'
            ? document.querySelector(containerSelector)
            : containerSelector;
        if (!container) return;

        this.currentStep = 1;
        this.bookingData = {};
        this.selectedServices = {};
        this.coupon = null;
        this.discountAmount = 0;
        this.selectedDate = selectedDate;
        this.onSuccess = options.onSuccess || null;

        // Load tour data
        if (tourId) {
            try {
                const res = await fetch(`/api/admin_tours`);
                const data = await res.json();
                const allTours = data.data || data;
                this.tourData = allTours.find(t => String(t.id) === String(tourId));
            } catch (e) {
                console.warn('BookingEngine: cannot load tour config', e);
            }
        }
        if (!this.tourData && options.tourData) this.tourData = options.tourData;

        container.innerHTML = this._renderShell();
        this._bindShell(container);
        this._renderStep(1);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    // ── HTML khung 4 bước ───────────────────────────────────────────────────
    _renderShell() {
        const steps = [
            { n: 1, label: 'Cá nhân' },
            { n: 2, label: 'Hậu cần' },
            { n: 3, label: 'Dịch vụ' },
            { n: 4, label: 'Cam kết' },
            { n: 5, label: 'Thanh toán' },
        ];

        return `
        <style>
            .be-input {
                width: 100%;
                background: #f9fafb;
                border: 1.5px solid #e5e7eb;
                border-radius: 12px;
                padding: 12px 16px;
                font-size: 14px;
                outline: none;
                transition: all 0.2s;
                font-family: inherit;
            }
            .be-input:focus { border-color: #E85D04; background: white; }
            .be-label { display: block; font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 6px; }
            .be-toggle-wrap { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; background: #f9fafb; border: 1.5px solid #e5e7eb; border-radius: 12px; }
            .be-toggle { position: relative; display: inline-flex; align-items: center; cursor: pointer; }
            .be-toggle input { position: absolute; opacity: 0; width: 0; }
            .be-toggle-track { width: 44px; height: 24px; background: #d1d5db; border-radius: 999px; transition: background 0.2s; display: flex; align-items: center; }
            .be-toggle input:checked ~ .be-toggle-track { background: #E85D04; }
            .be-toggle-thumb { position: absolute; left: 2px; width: 20px; height: 20px; background: white; border-radius: 50%; box-shadow: 0 1px 4px rgba(0,0,0,.2); transition: transform 0.2s; }
            .be-toggle input:checked ~ .be-toggle-track .be-toggle-thumb { transform: translateX(20px); }
            .be-service-card { border: 2px solid #e5e7eb; border-radius: 16px; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: column; overflow: hidden; position: relative; }
            .be-service-card:hover { border-color: #E85D04; box-shadow: 0 4px 16px rgba(232,93,4,.12); transform: translateY(-2px); }
            .be-service-card.selected { border-color: #E85D04; box-shadow: 0 4px 20px rgba(232,93,4,.2); }
            .be-service-card .be-card-img { width: 100%; aspect-ratio: 1/1; object-fit: cover; background: linear-gradient(135deg,#fff3e8,#fde8d8); }
            .be-service-card .be-card-img-placeholder { width: 100%; aspect-ratio: 1/1; background: linear-gradient(135deg,#fff3e8,#fde8d8); display: flex; align-items: center; justify-content: center; font-size: 32px; }
            .be-service-card .be-card-body { padding: 10px 12px; flex: 1; display: flex; flex-direction: column; gap: 4px; }
            .be-service-card .be-card-name { font-size: 13px; font-weight: 700; color: #1f2937; line-height: 1.3; }
            .be-service-card .be-card-desc { font-size: 11px; color: #9ca3af; line-height: 1.4; }
            .be-service-card .be-card-price { font-size: 14px; font-weight: 900; color: #E85D04; margin-top: auto; padding-top: 6px; }
            .be-service-card .be-check-badge { position: absolute; top: 8px; right: 8px; width: 24px; height: 24px; border-radius: 50%; background: white; border: 2px solid #d1d5db; display: flex; align-items: center; justify-content: center; transition: all 0.2s; box-shadow: 0 2px 6px rgba(0,0,0,.1); }
            .be-service-card.selected .be-check-badge { background: #E85D04; border-color: #E85D04; }
            .be-service-card .be-check-badge svg { opacity: 0; transition: opacity 0.2s; }
            .be-service-card.selected .be-check-badge svg { opacity: 1; }
            .be-step-btn { width: 100%; padding: 16px; font-size: 15px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; border-radius: 14px; border: none; cursor: pointer; transition: all 0.2s; font-family: inherit; }
            .be-btn-primary { background: #E85D04; color: white; box-shadow: 0 4px 16px rgba(232,93,4,.25); }
            .be-btn-primary:hover { opacity: 0.92; transform: translateY(-1px); }
            .be-btn-secondary { background: #f3f4f6; color: #6b7280; }
            .be-btn-secondary:hover { background: #e5e7eb; }
            .be-summary-row { display: flex; justify-content: space-between; align-items: center; font-size: 14px; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
            .be-summary-row:last-child { border-bottom: none; }
            .be-coupon-success { background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 12px; padding: 12px 16px; display: flex; align-items: center; gap: 10px; }
            @keyframes beSlide { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            .be-animate { animation: beSlide 0.3s ease-out; }
        </style>

        <!-- Stepper -->
        <div style="padding: 0 0 24px; position: relative;">
            <!-- Track container: overflow hidden đảm bảo fill không vượt khung -->
            <div style="position: absolute; top: 17px; left: calc(10% + 17px); right: calc(10% + 17px); height: 2px; background: #e5e7eb; border-radius: 2px; overflow: hidden; z-index: 0;">
                <div id="be-progress-line" style="height: 100%; background: #E85D04; border-radius: 2px; transition: width 0.4s ease; width: 0%;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; position: relative; z-index: 2;">
                ${steps.map(s => `
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; width: 20%;">
                        <div id="be-step-circle-${s.n}" style="
                            width: 34px; height: 34px; border-radius: 50%;
                            background: ${s.n === 1 ? '#E85D04' : '#e5e7eb'};
                            color: ${s.n === 1 ? 'white' : '#9ca3af'};
                            display: flex; align-items: center; justify-content: center;
                            font-weight: 700; font-size: 14px;
                            transition: all 0.3s; box-shadow: ${s.n === 1 ? '0 0 0 4px rgba(232,93,4,.15)' : 'none'};
                        ">${s.n}</div>
                        <span style="font-size: 10px; font-weight: 700; text-transform: uppercase;
                            color: ${s.n === 1 ? '#E85D04' : '#9ca3af'}; letter-spacing: 0.04em;
                            transition: color 0.3s; text-align: center;"
                            id="be-step-label-${s.n}">${s.label}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Step Content -->
        <div id="be-step-body"></div>
        `;
    },

    _bindShell(container) {
        this._container = container;
    },

    // ── Chuyển bước ─────────────────────────────────────────────────────────
    _renderStep(step) {
        this.currentStep = step;
        // Update stepper UI
        for (let i = 1; i <= 5; i++) {
            const circle = document.getElementById(`be-step-circle-${i}`);
            const label = document.getElementById(`be-step-label-${i}`);
            if (!circle) continue;
            if (i < step) {
                circle.style.background = '#E85D04';
                circle.style.color = 'white';
                circle.style.boxShadow = 'none';
                circle.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                if (label) { label.style.color = '#E85D04'; }
            } else if (i === step) {
                circle.style.background = '#E85D04';
                circle.style.color = 'white';
                circle.style.boxShadow = '0 0 0 4px rgba(232,93,4,.15)';
                circle.innerHTML = i;
                if (label) { label.style.color = '#E85D04'; }
            } else {
                circle.style.background = '#e5e7eb';
                circle.style.color = '#9ca3af';
                circle.style.boxShadow = 'none';
                circle.innerHTML = i;
                if (label) { label.style.color = '#9ca3af'; }
            }
        }
        // Progress line: 0% at step 1, 25% at 2, 50% at 3, 75% at 4, 100% at 5
        const pct = [0, 25, 50, 75, 100][step - 1];
        const line = document.getElementById('be-progress-line');
        if (line) line.style.width = pct + '%';

        // Render content
        const body = document.getElementById('be-step-body');
        if (!body) return;
        const renderers = [this._step1, this._step2, this._step3, this._step4, this._step5];
        body.innerHTML = `<div class="be-animate">${renderers[step - 1].call(this)}</div>`;
        this._bindStep(step);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    // ── Bước 1: Thông tin cá nhân ───────────────────────────────────────────
    _step1() {
        const d = this.bookingData;
        const dateDisplay = this.selectedDate
            ? (this.selectedDate.includes('-') ? this.selectedDate.split('-').reverse().join('/') : this.selectedDate)
            : '---';

        return `
        <form id="be-form-1" style="display:flex; flex-direction:column; gap:16px;">
            <!-- Tour info banner -->
            <div style="background: linear-gradient(135deg, #fff3e8 0%, #fff8f0 100%); border: 1.5px solid #fde8d8; border-radius: 16px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-size:11px; font-weight:700; color:#9ca3af; text-transform:uppercase; margin-bottom:2px;">Tour đã chọn</div>
                    <div style="font-weight:800; color:#1f2937; font-size:15px;">${this.tourData?.name || '...'}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:11px; font-weight:700; color:#9ca3af; text-transform:uppercase; margin-bottom:2px;">Ngày khởi hành</div>
                    <div style="font-weight:800; color:#E85D04; font-size:15px;">${dateDisplay}</div>
                </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                    <label class="be-label">Họ và Tên *</label>
                    <input class="be-input" id="be-name" type="text" placeholder="Nhập họ tên đầy đủ..." value="${d.name || ''}" required>
                </div>
                <div>
                    <label class="be-label">Số Điện Thoại *</label>
                    <input class="be-input" id="be-phone" type="tel" placeholder="09xx..." value="${d.phone || ''}" required>
                </div>
                <div>
                    <label class="be-label">Ngày Sinh * (dd/mm/yyyy)</label>
                    <div style="position:relative;">
                        <input class="be-input" id="be-dob" type="text" placeholder="VD: 15/03/1998"
                            value="${d.dob || ''}"
                            maxlength="10"
                            style="padding-right:44px;"
                            required>
                        <input type="date" id="be-dob-picker"
                            style="position:absolute; right:0; top:0; height:100%; width:44px; opacity:0; cursor:pointer; z-index:2;"
                            tabindex="-1">
                        <span style="position:absolute; right:12px; top:50%; transform:translateY(-50%); pointer-events:none; color:#9ca3af;">
                            <i data-lucide="calendar" style="width:18px;height:18px;"></i>
                        </span>
                    </div>
                </div>
                <div>
                    <label class="be-label">Giới Tính *</label>
                    <select class="be-input" id="be-gender" required>
                        <option value="">Chọn giới tính...</option>
                        <option value="Nam" ${d.gender === 'Nam' ? 'selected' : ''}>Nam</option>
                        <option value="Nữ" ${d.gender === 'Nữ' ? 'selected' : ''}>Nữ</option>
                        <option value="Khác" ${d.gender === 'Khác' ? 'selected' : ''}>Khác</option>
                    </select>
                </div>
                <div style="grid-column: span 2;">
                    <label class="be-label">Số CCCD / Hộ chiếu *</label>
                    <input class="be-input" id="be-idcard" type="text" placeholder="Nhập số CCCD (dùng để mua bảo hiểm)..." value="${d.idCard || ''}" required>
                </div>
                <div style="grid-column: span 2;">
                    <label class="be-label">Địa chỉ *</label>
                    <input class="be-input" id="be-address" type="text" placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/TP..." value="${d.address || ''}" required>
                </div>
            </div>

            <button type="submit" class="be-step-btn be-btn-primary">
                Tiếp tục: Thông tin hậu cần →
            </button>
        </form>`;
    },

    // ── Bước 2: Hậu cần ─────────────────────────────────────────────────────
    _step2() {
        const d = this.bookingData;
        const cfg = this.tourData?.form_config?.step2 || {};
        const pickups = this.tourData?.pickup_points || [];

        return `
        <div style="display:flex; flex-direction:column; gap:16px;">
            ${cfg.show_pickup !== false && pickups.length > 0 ? `
            <div>
                <label class="be-label">Điểm đón *</label>
                <select class="be-input" id="be-pickup" required>
                    <option value="">Chọn điểm đón...</option>
                    ${pickups.map(p => `<option value="${p.label || p}" ${d.pickupPoint === (p.label || p) ? 'selected' : ''}>${p.label || p}${p.time ? ' - ' + p.time : ''}</option>`).join('')}
                </select>
            </div>` : ''}

            ${cfg.show_medal_name !== false ? `
            <div>
                <label class="be-label">Tên in trên Huy chương</label>
                <input class="be-input" id="be-medal" type="text" placeholder="Để trống nếu giống Họ tên..." value="${d.medalName || ''}">
                <p style="font-size:11px; color:#9ca3af; margin-top:5px; font-style:italic;">Ghi in hoa không dấu. VD: NGUYEN VAN A</p>
            </div>` : ''}

            ${cfg.show_vegetarian !== false ? `
            <div class="be-toggle-wrap">
                <div>
                    <div style="font-size:14px; font-weight:700; color:#374151;">Ăn chay</div>
                    <div style="font-size:12px; color:#9ca3af; margin-top:2px;">Bếp sẽ chuẩn bị phần ăn chay cho bạn</div>
                </div>
                <label class="be-toggle">
                    <input type="checkbox" id="be-vegetarian" ${d.vegetarian ? 'checked' : ''}>
                    <div class="be-toggle-track"><div class="be-toggle-thumb"></div></div>
                </label>
            </div>` : ''}

            ${cfg.show_trekking_pole !== false ? `
            <div class="be-toggle-wrap">
                <div>
                    <div style="font-size:14px; font-weight:700; color:#374151;">Mượn gậy trekking</div>
                    <div style="font-size:12px; color:#9ca3af; margin-top:2px;">Miễn phí, số lượng có hạn</div>
                </div>
                <label class="be-toggle">
                    <input type="checkbox" id="be-trekkingpole" ${d.trekkingPole ? 'checked' : ''}>
                    <div class="be-toggle-track"><div class="be-toggle-thumb"></div></div>
                </label>
            </div>` : ''}

            ${cfg.show_special_request !== false ? `
            <div>
                <label class="be-label">Yêu cầu đặc biệt (tùy chọn)</label>
                <textarea class="be-input" id="be-special" placeholder="VD: Dị ứng đậu phộng, cần hỗ trợ thêm..." style="height:80px; resize:none;">${d.specialRequest || ''}</textarea>
            </div>` : ''}

            <div style="display:flex; gap:10px;">
                <button onclick="BookingEngine._renderStep(1)" class="be-step-btn be-btn-secondary" style="width:30%;">← Quay lại</button>
                <button id="be-step2-next" class="be-step-btn be-btn-primary" style="flex:1;">Tiếp tục: Dịch vụ →</button>
            </div>
        </div>`;
    },

    // ── Bước 3: Dịch vụ & Coupon ─────────────────────────────────────────────
    _step3() {
        const cfg = this.tourData?.form_config?.step3 || {};
        const services = this.tourData?.services || [];
        const basePrice = this.getBasePrice();

        return `
        <div style="display:flex; flex-direction:column; gap:16px;">

            <!-- Dịch vụ bổ sung -->
            ${services.length > 0 ? `
            <div>
                <label class="be-label" style="margin-bottom:12px;">Dịch vụ bổ sung (tùy chọn)</label>
                <div style="display:flex; flex-direction:column; gap:16px;" id="be-services-list">
                    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap:12px;">
                    ${services.map(sv => `
                    <div class="be-service-card ${this.selectedServices[sv.id] ? 'selected' : ''}"
                         onclick="BookingEngine._toggleService(${JSON.stringify(sv).replace(/"/g, '&quot;')}, this)"
                         data-service-id="${sv.id}">
                        <!-- Badge check -->
                        <div class="be-check-badge">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <!-- Ảnh sản phẩm -->
                        ${sv.image
                            ? `<img class="be-card-img" src="${sv.image}" alt="${sv.label}" loading="lazy">`
                            : `<div class="be-card-img-placeholder">🎒</div>`
                        }
                        <!-- Thông tin -->
                        <div class="be-card-body">
                            <div class="be-card-name">${sv.label}</div>
                            ${sv.description ? `<div class="be-card-desc">${sv.description}</div>` : ''}
                            <div class="be-card-price">+${this.formatVND(sv.price)}</div>
                        </div>
                    </div>`).join('')}
                    </div>
                </div>
            </div>` : ''}

            <!-- Subtotal -->
            <div style="background:#f9fafb; border-radius:14px; padding:16px; border: 1.5px solid #e5e7eb;">
                <div class="be-summary-row">
                    <span style="color:#6b7280;">Giá tour</span>
                    <span style="font-weight:700;">${this.formatVND(basePrice)}</span>
                </div>
                ${services.length > 0 ? `
                <div class="be-summary-row" id="be-services-subtotal" ${Object.keys(this.selectedServices).length === 0 ? 'style="opacity:0.4;"' : ''}>
                    <span style="color:#6b7280;">Dịch vụ bổ sung</span>
                    <span style="font-weight:700; color:#E85D04;" id="be-services-price">+${this.formatVND(this.getServicesTotal())}</span>
                </div>` : ''}
                ${this.coupon ? `
                <div class="be-summary-row" style="color:#16a34a;">
                    <span>Giảm giá (${this.coupon.code})</span>
                    <span style="font-weight:700;">-${this.formatVND(this.discountAmount)}</span>
                </div>` : ''}
                <div style="border-top:2px solid #e5e7eb; margin-top:8px; padding-top:10px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:700; font-size:13px; text-transform:uppercase; color:#374151;">Tổng thanh toán</span>
                    <span style="font-weight:900; font-size:20px; color:#E85D04;" id="be-grand-total">${this.formatVND(this.getGrandTotal())}</span>
                </div>
            </div>

            <!-- Mã giảm giá -->
            ${cfg.show_coupon !== false ? `
            <div>
                <label class="be-label">Mã giảm giá (nếu có)</label>
                ${this.coupon ? `
                <div class="be-coupon-success">
                    <svg style="width:20px;height:20px;color:#16a34a;flex-shrink:0;" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <div style="flex:1;">
                        <div style="font-weight:700; color:#15803d; font-size:14px;">${this.coupon.code} - Giảm ${this.formatVND(this.discountAmount)}</div>
                        <div style="font-size:12px; color:#16a34a;">${this.coupon.description || ''}</div>
                    </div>
                    <button onclick="BookingEngine._removeCoupon()" style="background:none;border:none;cursor:pointer;color:#9ca3af;font-size:18px;line-height:1;">✕</button>
                </div>` : `
                <div style="display:flex; gap:8px;">
                    <input class="be-input" id="be-coupon-input" type="text" placeholder="Nhập mã..." style="text-transform:uppercase; letter-spacing:0.08em; flex:1;">
                    <button id="be-coupon-btn" onclick="BookingEngine._applyCoupon()" style="
                        padding: 12px 18px; background: #E85D04; color: white;
                        border: none; border-radius: 12px; font-weight: 700;
                        cursor: pointer; font-size: 14px; font-family:inherit;
                        white-space: nowrap; transition: opacity .2s;
                    ">Áp dụng</button>
                </div>
                <div id="be-coupon-msg" style="font-size:12px; margin-top:5px; min-height:18px;"></div>`}
            </div>` : ''}

            <div style="display:flex; gap:10px;">
                <button onclick="BookingEngine._renderStep(2)" class="be-step-btn be-btn-secondary" style="width:30%;">← Quay lại</button>
                <button onclick="BookingEngine._renderStep(4)" class="be-step-btn be-btn-primary" style="flex:1;">Tiếp tục: Cam kết →</button>
            </div>
        </div>`;
    },

    // ── Bước 4: Cam kết sức khỏe & Điều khoản ──────────────────────────────
    _step4() {
        return `
        <div style="display:flex; flex-direction:column; gap:16px;">

            <div style="background:linear-gradient(135deg,#fff3e8,#fff8f0); border:1.5px solid #fde8d8; border-radius:16px; padding:16px 18px; display:flex; align-items:center; gap:12px;">
                <div style="width:40px;height:40px;background:#E85D04;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                    <div style="font-weight:800; font-size:14px; color:#1f2937;">Vui lòng đọc kỹ và xác nhận</div>
                    <div style="font-size:12px; color:#9ca3af; margin-top:2px;">Bạn phải đồng ý toàn bộ điều khoản mới có thể tiếp tục thanh toán.</div>
                </div>
            </div>

            <!-- Khung điều khoản cuộn được -->
            <div id="be-terms-scroll" style="
                background:#f9fafb; border:1.5px solid #e5e7eb; border-radius:16px;
                height:320px; overflow-y:auto; padding:20px;
                font-size:13px; line-height:1.7; color:#374151;
            ">
                <h3 style="font-size:14px;font-weight:800;text-transform:uppercase;color:#E85D04;margin:0 0 12px;letter-spacing:0.04em;">I. Cam kết sức khỏe</h3>
                <p>Khách hàng tham gia tour trekking / leo núi tại CAM SITE RETREATS cam kết:</p>
                <ul style="margin:8px 0 12px 18px; list-style:disc; display:flex; flex-direction:column; gap:6px;">
                    <li>Không có tiền sử bệnh <strong>tim mạch, hen suyễn nặng, xương khớp</strong> hoặc các bệnh lý nguy hiểm do bác sĩ chỉ định không được vận động mạnh.</li>
                    <li>Tự chịu trách nhiệm về sức khỏe cá nhân trong suốt chuyến đi.</li>
                    <li>Thông báo ngay cho HDV nếu có bất kỳ vấn đề sức khỏe nào phát sinh.</li>
                </ul>

                <h3 style="font-size:14px;font-weight:800;text-transform:uppercase;color:#E85D04;margin:16px 0 12px;letter-spacing:0.04em;">II. Chính sách miễn trừ trách nhiệm</h3>
                <ul style="margin:8px 0 12px 18px; list-style:disc; display:flex; flex-direction:column; gap:6px;">
                    <li><strong>Tuân thủ hướng dẫn:</strong> Chúng tôi từ chối trách nhiệm đối với rủi ro do khách tự ý tách đoàn, không tuân thủ chỉ dẫn của HDV hoặc đi vào khu vực cấm.</li>
                    <li><strong>Tài sản cá nhân:</strong> Khách hàng tự bảo quản tư trang, thiết bị điện tử. CAM SITE hỗ trợ nhưng không chịu trách nhiệm về hư hỏng, mất mát phát sinh trong địa hình rừng núi.</li>
                    <li><strong>Rủi ro khách quan:</strong> Trekking là hoạt động mạo hiểm tiềm ẩn rủi ro (thời tiết, địa hình). Bằng việc đăng ký, khách hàng xác nhận đã hiểu và tự nguyện chấp nhận.</li>
                </ul>

                <h3 style="font-size:14px;font-weight:800;text-transform:uppercase;color:#E85D04;margin:16px 0 12px;letter-spacing:0.04em;">III. Chính sách hoàn - hủy - bảo lưu</h3>
                <ul style="margin:8px 0 12px 18px; list-style:disc; display:flex; flex-direction:column; gap:6px;">
                    <li><strong>Trước 15 ngày:</strong> Hoàn 100% hoặc bảo lưu miễn phí.</li>
                    <li><strong>Từ 7–15 ngày trước:</strong> Hoàn 50% hoặc bảo lưu (phí 20%).</li>
                    <li><strong>Dưới 7 ngày:</strong> Không hoàn tiền. Hỗ trợ bảo lưu (phí 50%) tùy tình trạng tour.</li>
                    <li><strong>Vắng mặt ngày khởi hành:</strong> Không áp dụng hoàn tiền hoặc bảo lưu.</li>
                </ul>

                <h3 style="font-size:14px;font-weight:800;text-transform:uppercase;color:#E85D04;margin:16px 0 12px;letter-spacing:0.04em;">IV. Quy định an toàn & môi trường</h3>
                <ul style="margin:8px 0 12px 18px; list-style:disc; display:flex; flex-direction:column; gap:6px;">
                    <li>Tuyệt đối <strong>không xả rác</strong> trong rừng. Tất cả rác cá nhân phải mang về.</li>
                    <li>Không tự ý đốt lửa ngoài khu vực quy định. Dập tắt lửa/tàn thuốc hoàn toàn trước khi rời khu cắm trại.</li>
                    <li>Giữ khoảng cách an toàn giữa các thành viên. Luôn thông báo cho HDV khi gặp vấn đề sức khỏe.<br>
                    <em style="font-size:12px;color:#9ca3af;">Thời gian hoàn tiền từ 3–5 ngày làm việc kể từ khi xác nhận hủy tour.</em></li>
                </ul>
            </div>

            <!-- Chỉ báo cuộn -->
            <div id="be-scroll-notice" style="text-align:center; font-size:12px; color:#9ca3af; display:flex; align-items:center; justify-content:center; gap:6px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                Cuộn xuống để đọc hết điều khoản
            </div>

            <!-- Tick đồng ý -->
            <div style="display:flex; flex-direction:column; gap:10px;" id="be-commit-section" style="opacity:0.4; pointer-events:none;">
                <label style="display:flex; gap:12px; align-items:flex-start; cursor:pointer; padding:14px; background:#fff3e8; border-radius:12px; border:1.5px solid #fde8d8;">
                    <input type="checkbox" id="be-commit-health" style="width:18px;height:18px;margin-top:2px;accent-color:#E85D04;flex-shrink:0;">
                    <span style="font-size:13px; color:#374151; font-weight:600; line-height:1.5;">Tôi cam kết <strong style="color:#dc2626;">KHÔNG</strong> mắc các bệnh tim mạch, hô hấp, xương khớp và tự chịu trách nhiệm về sức khỏe trong chuyến đi.</span>
                </label>
                <label style="display:flex; gap:12px; align-items:flex-start; cursor:pointer; padding:14px; background:#f9fafb; border-radius:12px; border:1.5px solid #e5e7eb;">
                    <input type="checkbox" id="be-commit-rules" style="width:18px;height:18px;margin-top:2px;accent-color:#E85D04;flex-shrink:0;">
                    <span style="font-size:13px; color:#374151; font-weight:600; line-height:1.5;">Tôi đã đọc đầy đủ và đồng ý tuân thủ <strong>toàn bộ</strong> Chính sách, Quy định và Điều khoản Miễn trừ trách nhiệm của CAM SITE RETREATS.</span>
                </label>
            </div>

            <div style="display:flex; gap:10px;">
                <button onclick="BookingEngine._renderStep(3)" class="be-step-btn be-btn-secondary" style="width:30%;">← Quay lại</button>
                <button id="be-step4-next" class="be-step-btn be-btn-primary" style="flex:1; opacity:.5; cursor:not-allowed;" disabled>Gửi đăng ký &amp; Xác nhận →</button>
            </div>
        </div>`;
    },

    // ── Bước 5: Thanh toán (Sau khi submit thành công) ───────────────────────
    _step5() {
        const grand = this.getGrandTotal();
        const deposit = this.getDepositAmount();
        const remaining = Math.max(0, grand - deposit);
        const d = this.bookingData;
        const savedId = this.bookingData.savedId || '';
        const realCode = `CSR${savedId} ${this._generateTransferCode()}`;

        return `
        <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="background:#def7ec; color:#03543f; padding:16px; border-radius:12px; font-weight:600; font-size:14px; text-align:center; border:1px solid #c8ebdf;">
                ✅ Gửi đăng ký thành công! Vui lòng thanh toán cọc để giữ chỗ.
            </div>
            <!-- Tóm tắt đơn hàng -->
            <div style="background:#fff8f0; border: 1.5px solid #fde8d8; border-radius:16px; padding:18px; display:flex; flex-direction:column; gap:8px;">
                <div style="font-size:11px; font-weight:700; color:#9ca3af; text-transform:uppercase; margin-bottom:6px;">Xác nhận đơn hàng</div>
                <div class="be-summary-row"><span style="color:#6b7280;">Khách hàng</span><span style="font-weight:700;">${d.name}</span></div>
                <div class="be-summary-row"><span style="color:#6b7280;">Tour</span><span style="font-weight:700;">${this.tourData?.name || ''}</span></div>
                <div class="be-summary-row"><span style="color:#6b7280;">Ngày khởi hành</span><span style="font-weight:700; color:#E85D04;">${this.selectedDate || ''}</span></div>
                ${Object.values(this.selectedServices).map(sv => `
                <div class="be-summary-row"><span style="color:#9ca3af; padding-left:8px;">+ ${sv.label}</span><span style="color:#E85D04;">+${this.formatVND(sv.price)}</span></div>
                `).join('')}
                ${this.coupon ? `<div class="be-summary-row" style="color:#16a34a;"><span>Giảm giá (${this.coupon.code})</span><span>-${this.formatVND(this.discountAmount)}</span></div>` : ''}
                <div class="be-summary-row" style="opacity:0.7;">
                    <span style="color:#6b7280; font-size:13px;">Tổng giá trị đơn</span>
                    <span style="font-weight:600; font-size:13px;">${this.formatVND(grand)}</span>
                </div>
                ${remaining > 0 ? `<div class="be-summary-row" style="opacity:0.6;">
                    <span style="color:#9ca3af; font-size:12px; font-style:italic;">Còn lại thanh toán sau</span>
                    <span style="color:#9ca3af; font-size:12px; font-style:italic;">${this.formatVND(remaining)}</span>
                </div>` : ''}
                <div style="border-top:2px dashed #fde8d8; margin-top:4px; padding-top:12px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:800; font-size:13px; text-transform:uppercase;">Số tiền cọc</span>
                    <span style="font-weight:900; font-size:22px; color:#E85D04;">${this.formatVND(deposit)}</span>
                </div>
            </div>
            <!-- QR SePay — Phase 2: Thanh toán -->
            <div style="background:white; border: 1.5px solid #e5e7eb; border-radius:16px; padding:18px; text-align:center;">
                <p style="font-size:11px; font-weight:700; color:#9ca3af; text-transform:uppercase; margin-bottom:12px;">Quét mã QR để thanh toán cọc</p>
                <div style="width:180px; height:180px; margin:0 auto 16px;">
                    <img id="be-qr-img" src="${this._getQRUrl(deposit, realCode)}" alt="QR" style="width:100%; height:100%; object-fit:contain; border-radius:12px; border:3px solid rgba(232,93,4,.15);">
                </div>
                <div style="background:#f9fafb; border-radius:12px; padding:14px; text-align:left;">
                    <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span style="color:#9ca3af;">Ngân hàng</span><span style="font-weight:700;">BIDV</span></div>
                    <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span style="color:#9ca3af;">Số tài khoản</span><span style="font-weight:700; color:#E85D04;">96247CAMSITERETREAT</span></div>
                    <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span style="color:#9ca3af;">Chủ tài khoản</span><span style="font-weight:700;">PHAM THIEN AN</span></div>
                    <div style="background:#fff3e8; border-radius:8px; padding:10px; margin-top:8px; display:flex; justify-content:space-between; align-items:center; gap:8px;">
                        <div>
                            <div style="font-size:10px; font-weight:700; color:#9ca3af; text-transform:uppercase; margin-bottom:3px;">Nội dung chuyển khoản</div>
                            <div style="font-weight:800; color:#E85D04; font-family:monospace; font-size:13px;" id="be-transfer-code">${realCode}</div>
                        </div>
                        <button onclick="BookingEngine._copyCode()" style="background: white; border: 1.5px solid #e5e7eb; border-radius:8px; padding:8px; cursor:pointer; color:#9ca3af; transition:all .2s;" title="Copy">
                            <i data-lucide="copy" style="width:16px;height:16px;"></i>
                        </button>
                    </div>
                </div>
                <div style="display:flex; align-items:center; justify-content:center; gap:8px; margin-top:12px; color:#6b7280; font-size:13px;" id="be-payment-status-text">
                    <span style="width:8px;height:8px;background:#22c55e;border-radius:50%;animation:pulse 1.5s infinite;display:inline-block;"></span>
                    Đang chờ xác nhận thanh toán...
                </div>
            </div>
            <div style="display:flex; gap:10px; justify-content:center;">
                <a href="/" class="be-step-btn be-btn-primary" style="text-decoration:none; text-align:center; flex:1;">Về trang chủ</a>
            </div>
        </div>
        <style>@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }</style>`;
    },

    // ── Bind events cho từng bước ────────────────────────────────────────────
    _bindStep(step) {
        if (step === 1) {
            // Date picker sync: khi chọn date từ calendar → populate text input
            const picker = document.getElementById('be-dob-picker');
            const textInput = document.getElementById('be-dob');
            if (picker && textInput) {
                picker.addEventListener('change', () => {
                    if (picker.value) {
                        const [y, m, d] = picker.value.split('-');
                        textInput.value = `${d}/${m}/${y}`;
                    }
                });
            }
            // Auto-format khi gõ thủ công: thêm / tự động
            if (textInput) {
                textInput.addEventListener('input', (e) => {
                    let v = e.target.value.replace(/\D/g, '');
                    if (v.length > 2) v = v.slice(0,2) + '/' + v.slice(2);
                    if (v.length > 5) v = v.slice(0,5) + '/' + v.slice(5,9);
                    e.target.value = v;
                });
            }
            // Form submit
            const form = document.getElementById('be-form-1');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this._saveStep1();
                    this._renderStep(2);
                });
            }
        }
        if (step === 2) {
            const btn = document.getElementById('be-step2-next');
            if (btn) btn.addEventListener('click', () => { this._saveStep2(); this._renderStep(3); });
        }
        if (step === 4) {
            // Scroll-to-bottom detection: mở khóa checkbox khi đã đọc hết
            const termsEl = document.getElementById('be-terms-scroll');
            const commitSection = document.getElementById('be-commit-section');
            const nextBtn = document.getElementById('be-step4-next');
            const scrollNotice = document.getElementById('be-scroll-notice');
            const checkboxes = ['be-commit-health', 'be-commit-rules'];

            const updateNextBtn = () => {
                const allChecked = checkboxes.every(id => document.getElementById(id)?.checked);
                if (nextBtn) {
                    nextBtn.disabled = !allChecked;
                    nextBtn.style.opacity = allChecked ? '1' : '0.5';
                    nextBtn.style.cursor = allChecked ? 'pointer' : 'not-allowed';
                }
            };

            const unlockCommits = () => {
                if (commitSection) { commitSection.style.opacity = '1'; commitSection.style.pointerEvents = ''; }
                if (scrollNotice) scrollNotice.innerHTML = '<span style="color:#22c55e;">✅ Đã đọc hết điều khoản. Vui lòng tích chọn đồng ý.</span>';
                checkboxes.forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.addEventListener('change', updateNextBtn);
                });
            };

            if (termsEl) {
                // Lock commits initially
                if (commitSection) { commitSection.style.opacity = '0.4'; commitSection.style.pointerEvents = 'none'; }
                termsEl.addEventListener('scroll', () => {
                    const atBottom = termsEl.scrollHeight - termsEl.scrollTop - termsEl.clientHeight < 30;
                    if (atBottom) unlockCommits();
                });
            } else {
                unlockCommits();
            }

            if (nextBtn) nextBtn.addEventListener('click', () => {
                const allChecked = checkboxes.every(id => document.getElementById(id)?.checked);
                if (allChecked) this._submit(); // Thay vì this._renderStep(5)
            });
        }
        if (step === 5) {
            // Không auto-submit — người dùng tự bấm nút "Gửi đăng ký"
            // _submit() sẽ được gọi khi click button id="be-submit-btn"
        }
    },

    // ── Save step data ────────────────────────────────────────────────────────
    _saveStep1() {
        this.bookingData = {
            ...this.bookingData,
            name: document.getElementById('be-name')?.value.trim(),
            phone: document.getElementById('be-phone')?.value.trim(),
            dob: this._parseDOB(document.getElementById('be-dob')?.value),
            gender: document.getElementById('be-gender')?.value,
            idCard: document.getElementById('be-idcard')?.value.trim(),
            address: document.getElementById('be-address')?.value.trim(),
        };
    },
    _saveStep2() {
        this.bookingData = {
            ...this.bookingData,
            pickupPoint: document.getElementById('be-pickup')?.value || '',
            medalName: document.getElementById('be-medal')?.value.trim() || this.bookingData.name || '',
            vegetarian: document.getElementById('be-vegetarian')?.checked || false,
            trekkingPole: document.getElementById('be-trekkingpole')?.checked || false,
            specialRequest: document.getElementById('be-special')?.value.trim() || '',
        };
    },

    _parseDOB(str) {
        if (!str) return null;
        const p = str.split(/[\/\-\.]/);
        if (p.length === 3) {
            if (p[0].length === 4) return `${p[0]}-${p[1].padStart(2,'0')}-${p[2].padStart(2,'0')}`;
            return `${p[2]}-${p[1].padStart(2,'0')}-${p[0].padStart(2,'0')}`;
        }
        return str;
    },

    _toggleService(sv, el) {
        if (this.selectedServices[sv.id]) {
            delete this.selectedServices[sv.id];
            el.classList.remove('selected');
        } else {
            this.selectedServices[sv.id] = sv;
            el.classList.add('selected');
        }
        // Update price display
        const priceEl = document.getElementById('be-services-price');
        const totalEl = document.getElementById('be-grand-total');
        if (priceEl) priceEl.textContent = '+' + this.formatVND(this.getServicesTotal());
        if (totalEl) totalEl.textContent = this.formatVND(this.getGrandTotal());
    },

    _goToStep4() {
        // Giữ lại cho backward compatibility
        this._renderStep(4);
    },

    async _applyCoupon() {
        const input = document.getElementById('be-coupon-input');
        const msg = document.getElementById('be-coupon-msg');
        const btn = document.getElementById('be-coupon-btn');
        const code = input?.value.trim().toUpperCase();
        if (!code) { if (msg) msg.textContent = 'Vui lòng nhập mã.'; return; }

        if (btn) { btn.textContent = '...'; btn.disabled = true; }
        const total = this.getBasePrice() + this.getServicesTotal();

        try {
            const res = await fetch(`/api/coupons?action=validate&code=${encodeURIComponent(code)}&price=${total}`);
            const data = await res.json();
            if (data.success) {
                this.coupon = data.coupon;
                this.discountAmount = data.discount_amount;
                this._renderStep(3); // re-render to show coupon applied
            } else {
                if (msg) { msg.textContent = data.message; msg.style.color = '#dc2626'; }
                if (btn) { btn.textContent = 'Áp dụng'; btn.disabled = false; }
            }
        } catch (e) {
            if (msg) { msg.textContent = 'Lỗi kết nối.'; msg.style.color = '#dc2626'; }
            if (btn) { btn.textContent = 'Áp dụng'; btn.disabled = false; }
        }
    },

    _removeCoupon() {
        this.coupon = null;
        this.discountAmount = 0;
        this._renderStep(3);
    },

    _generateTransferCode() {
        const normalize = str => (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '').trim();
        const tourPart = normalize((this.tourData?.name || 'tour').split('-')[0].trim()).slice(0, 8);
        const datePart = (this.selectedDate || '').replace(/[-\/]/g, '').slice(0, 8);
        const namePart = normalize(this.bookingData.name || 'khach').slice(0, 20);
        return `${tourPart} ${datePart} ${namePart} coc`;
    },

    _getQRUrl(amount, code) {
        return `https://qr.sepay.vn/img?acc=96247CAMSITERETREAT&bank=BIDV&amount=${amount}&des=${encodeURIComponent(code)}`;
    },

    _copyCode() {
        const code = document.getElementById('be-transfer-code')?.textContent;
        if (!code) return;
        navigator.clipboard.writeText(code).then(() => {
            alert('Đã copy nội dung chuyển khoản!');
        }).catch(() => prompt('Copy nội dung này:', code));
    },

    _submitting: false, // Guard chống double-submit

    async _submit() {
        // Guard: tránh submit nhiều lần
        if (this._submitting) return;
        this._submitting = true;

        const btn = document.getElementById('be-step4-next');
        if (btn) { btn.textContent = 'Đang gửi...'; btn.disabled = true; }

        const isUpdate = !!this.bookingData.savedId;
        const payload = {
            id: isUpdate ? this.bookingData.savedId : undefined,
            name: this.bookingData.name,
            phone: this.bookingData.phone,
            tour: this.tourData?.name || '',
            date: this.selectedDate,
            dob: this.bookingData.dob,
            gender: this.bookingData.gender,
            id_card: this.bookingData.idCard,
            address: this.bookingData.address,
            pickup_point: this.bookingData.pickupPoint || '',
            medal_name: this.bookingData.medalName || this.bookingData.name,
            diet: this.bookingData.vegetarian ? 'Ăn chay' : 'Không',
            trekking_pole: this.bookingData.trekkingPole ? 'Có' : 'Không',
            special: this.bookingData.specialRequest || 'Không',
            services_booked: JSON.stringify(Object.values(this.selectedServices)),
            coupon_code: this.coupon?.code || null,
            discount: this.discountAmount,
            total_price: this.getGrandTotal(), // Tổng giá trị đơn được tính lại
            commitments: true,
        };

        // Xử lý Ghi nhận Nguồn tạo đơn (Nếu là Admin/Sale đang đăng nhập mà giả lập tạo đơn hộ khách)
        let sale_id = null, sale_name = null;
        try {
            const userStr = localStorage.getItem('csr_user');
            if (userStr) {
                const user = JSON.parse(userStr);
                sale_id = user.id;
                sale_name = user.fullName || user.full_name || 'Admin';
            }
        } catch(e) {}

        if (!isUpdate) {
            // Chỉ gán deposit và status mặc định khi TẠO MỚI, tránh ghi đè dữ liệu của Admin
            payload.deposit_required = this.getDepositAmount();
            payload.status = 'Chờ xác nhận cọc';
            if (sale_name) {
                payload.sale_name = sale_name;
                payload.sale_id = sale_id;
            }
        }

        try {
            // Sync CRM
            try {
                const crmRes = await fetch('/api/admin_customers?action=create', {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ full_name: payload.name, phone: payload.phone, cccd: payload.id_card, dob: payload.dob, gender: payload.gender, dietary: payload.diet })
                });
                const crmData = await crmRes.json();
                if (crmData.success && crmData.csr_code) payload.customer_id = crmData.csr_code;
            } catch(e) { console.warn('CRM sync error:', e); }

            const res = await fetch('/api/bookings', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error('Server error');
            const saved = await res.json();

            // ── Chuyển sang Phase 2: Render Step 5 với CSR{id} ──
            this.bookingData.savedId = saved.id;
            
            // Render Step 5 ngay lập tức
            this._renderStep(5);

            // Increment coupon usage
            if (this.coupon?.code) {
                fetch(`/api/coupons?action=use`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ code: this.coupon.code }) }).catch(() => {});
            }

            // Poll payment
            this._startPolling(saved.id);

            if (this.onSuccess) this.onSuccess(saved);
        } catch(e) {
            console.error('Submit error:', e);
            this._submitting = false; // Reset để cho phép retry
            alert('Có lỗi xảy ra: ' + e.message);
            if (btn) { btn.textContent = 'Gửi đăng ký & Xác nhận →'; btn.disabled = false; }
        }
    },

    _pollInterval: null,
    _startPolling(bookingId) {
        if (this._pollInterval) clearInterval(this._pollInterval);
        this._pollInterval = setInterval(async () => {
            try {
                const res = await fetch(`/api/payment?action=status&id=${bookingId}`);
                const data = await res.json();
                if (data.isPaid) {
                    clearInterval(this._pollInterval);
                    this._showSuccessModal(bookingId, data.zaloLink);
                }
            } catch(e) { console.warn('Poll error:', e); }
        }, 5000);
    },

    _showSuccessModal(bookingId, zaloLink) {
        // Xóa modal cũ nếu có
        const existing = document.getElementById('be-success-modal');
        if (existing) existing.remove();

        const modalHtml = `
            <div id="be-success-modal" style="position:fixed; inset:0; z-index:9999; background:rgba(17,24,39,0.7); backdrop-filter:blur(4px); display:flex; align-items:center; justify-content:center; padding:16px; opacity:0; transition:opacity 0.3s ease;">
                <div style="background:white; border-radius:24px; width:100%; max-width:400px; padding:32px; text-align:center; box-shadow:0 25px 50px -12px rgba(0,0,0,0.25); transform:scale(0.9); transition:transform 0.3s ease;" id="be-success-content">
                    <div style="width:80px; height:80px; background:#f0fdf4; color:#22c55e; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 24px;">
                        <svg style="width:40px; height:40px" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 style="font-size:24px; font-weight:800; color:#111827; margin-bottom:8px;">Đăng ký thành công!</h2>
                    <p style="font-size:15px; color:#6b7280; margin-bottom:32px; line-height:1.5;">Hệ thống đã xác nhận thanh toán của bạn.<br>Cảm ơn bạn đã đồng hành cùng CAM!</p>
                    
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        ${zaloLink ? `
                        <a href="${zaloLink}" target="_blank" style="display:flex; align-items:center; justify-content:center; gap:8px; background:#0068ff; color:white; font-weight:700; padding:14px; border-radius:14px; text-decoration:none; transition:opacity 0.2s;">
                            <svg style="width:20px; height:20px" fill="currentColor" viewBox="0 0 24 24"><path d="M12.14 1c-6.15 0-11.14 4.58-11.14 10.21 0 3.2 1.6 6.05 4.12 7.91-.12.44-.43 1.6-.43 1.6s-.1.38.16.53c.26.15.54-.04.54-.04l1.88-1.29c.6.16 1.23.25 1.88.25 6.15 0 11.14-4.58 11.14-10.21S18.29 1 12.14 1z"/></svg>
                            Tham gia nhóm Zalo
                        </a>` : ''}
                        
                        <a href="/invoice.html?id=${bookingId}" style="display:flex; align-items:center; justify-content:center; gap:8px; background:#f3f4f6; color:#374151; font-weight:700; padding:14px; border-radius:14px; text-decoration:none; transition:background 0.2s;">
                            <svg style="width:18px; height:18px" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Nhận hóa đơn tour
                        </a>

                        <button onclick="window.location.reload()" style="margin-top:12px; font-size:13px; font-weight:600; color:#9ca3af; background:none; border:none; cursor:pointer;">Đóng và quay lại</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        const modal = document.getElementById('be-success-modal');
        const content = document.getElementById('be-success-content');
        
        setTimeout(() => {
            modal.style.opacity = '1';
            content.style.transform = 'scale(1)';
        }, 50);
    },
};

window.BookingEngine = BookingEngine;
