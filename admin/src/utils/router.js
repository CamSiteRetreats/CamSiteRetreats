import { BottomNav, initBottomNav } from '../components/BottomNav.js';

export const initRouter = () => {
    const routes = {
        '/admin/': () => import('../pages/Dashboard.js'),
        '/admin/login': () => import('../pages/Login.js'),
        '/admin/profile': () => import('../pages/Profile.js'),
        '/admin/bookings': () => import('../pages/Bookings.js'),
        '/admin/customers': () => import('../pages/Customers.js'),
        '/admin/tours': () => import('../pages/Tours.js'),
        '/admin/tour-settings': () => import('../pages/TourSettings.js'),
        '/admin/schedules': () => import('../pages/Schedules.js'),
        '/admin/guides': () => import('../pages/Guides.js'),
        '/admin/reports': () => import('../pages/Reports.js'),
        '/admin/users': () => import('../pages/Users.js'),
        '/admin/roster': () => import('../pages/Roster.js'),
        '/admin/reviews': () => import('../pages/Reviews.js'),
        '/admin/blog': () => import('../pages/Blog.js'),
        '/admin/playbook': () => import('../pages/Playbook.js'),
    };

    const navigateTo = async (url) => {
        history.pushState(null, null, url);
        await router();
    };

    const getRoute = (path) => {
        const matched = routes[path];
        if (!matched && path !== '/admin/login') {
            const fallback = Object.keys(routes).find(r => r !== '/admin/' && path.startsWith(r));
            if (fallback) return routes[fallback];
        }
        return matched || routes['/admin/'];
    };

    const router = async () => {
        const path = location.pathname;
        const matchedRoute = getRoute(path);

        // Mock Auth Guard
        const isAuthenticated = localStorage.getItem('csr_admin_token') !== null;
        
        let userRole = 'sale';
        try {
            const userStr = localStorage.getItem('csr_user');
            if (userStr) {
                userRole = JSON.parse(userStr).role || 'sale';
            }
        } catch (e) {}

        if (!isAuthenticated && path !== '/admin/login') {
            navigateTo('/admin/login');
            return;
        }

        // Redirect based on role
        if (isAuthenticated) {
            if (userRole === 'tour_guide') {
                if (path !== '/admin/playbook' && path !== '/admin/profile') {
                    navigateTo('/admin/playbook');
                    return;
                }
            } else {
                if (path === '/admin/login') {
                    navigateTo('/admin/');
                    return;
                }
            }
        }

        try {
            // Import module 1 lần duy nhất — tránh bug double-import tạo 2 instance khác nhau
            const module = await matchedRoute();
            const { render, afterRender } = module;

            document.getElementById('app').innerHTML = render();

            // Init sidebar toggle (must run after DOM is updated)
            initSidebar();

            // Inject Bottom Nav for mobile (PWA)
            const appEl = document.getElementById('app');
            if (appEl && !appEl.querySelector('#bottomNavBar')) {
                const bnDiv = document.createElement('div');
                bnDiv.innerHTML = BottomNav();
                appEl.appendChild(bnDiv);
            }
            initBottomNav();

            // Call after render hook if it exists
            if (afterRender) afterRender();

        } catch (e) {
            console.error('Error loading page:', e);
            document.getElementById('app').innerHTML = `
                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;gap:16px;font-family:sans-serif;">
                    <div style="font-size:48px;">⚠️</div>
                    <div style="font-size:18px;font-weight:700;color:#1f2937;">Lỗi tải trang</div>
                    <div style="font-size:13px;color:#6b7280;max-width:400px;text-align:center;">${e.message}</div>
                    <button onclick="location.reload()" style="padding:10px 24px;background:#E85D04;color:white;border:none;border-radius:10px;font-weight:700;cursor:pointer;">Tải lại trang</button>
                </div>`;
        }
    };

    window.addEventListener('popstate', router);

    // Custom event listener for navigation
    document.addEventListener('click', e => {
        if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
            e.preventDefault();
            const link = e.target.closest('[data-link]');
            let targetPath = link.getAttribute('href');

            // Auto prefix for base URL
            if (!targetPath.startsWith('/admin')) {
                targetPath = targetPath === '/' ? '/admin/' : '/admin' + targetPath;
            }

            navigateTo(targetPath);
        }
    });

    // Handle back/forward navigation
    window.addEventListener('popstate', router);
    router();
    return { navigateTo };
};

// Sidebar toggle - called after each route render
function initSidebar() {
    const mobileBtn   = document.getElementById('mobileMenuBtn');
    const closeBtn    = document.getElementById('closeSidebarBtn');
    const sidebar     = document.getElementById('adminSidebar');
    const backdrop    = document.getElementById('sidebarBackdrop');

    if (!mobileBtn || !sidebar || !backdrop) return;

    const openMenu = () => {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden', 'opacity-0');
        backdrop.classList.add('opacity-100');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.remove('opacity-100');
        backdrop.classList.add('opacity-0');
        setTimeout(() => {
            backdrop.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    };

    // Remove old listeners by replacing with clones
    const newBtn = mobileBtn.cloneNode(true);
    mobileBtn.parentNode.replaceChild(newBtn, mobileBtn);
    newBtn.addEventListener('click', openMenu);

    if (closeBtn) {
        const newClose = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newClose, closeBtn);
        newClose.addEventListener('click', closeMenu);
    }

    backdrop.addEventListener('click', closeMenu);

    // Auto-close when a nav link is clicked on mobile
    sidebar.querySelectorAll('a[data-link]').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) closeMenu();
        });
    });
}
