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
        '/admin/reports': () => import('../pages/Reports.js'),
        '/admin/users': () => import('../pages/Users.js'),
        '/admin/roster': () => import('../pages/Roster.js'),
    };

    const navigateTo = async (url) => {
        history.pushState(null, null, url);
        await router();
    };

    const router = async () => {
        const path = location.pathname;
        const matchedRoute = routes[path] || routes['/admin/'];

        // Mock Auth Guard
        const isAuthenticated = localStorage.getItem('csr_admin_token') !== null;

        if (!isAuthenticated && path !== '/admin/login') {
            navigateTo('/admin/login');
            return;
        }

        if (isAuthenticated && path === '/admin/login') {
            navigateTo('/admin/');
            return;
        }

        try {
            const { render } = await matchedRoute();
            document.getElementById('app').innerHTML = render();

            // Init sidebar toggle (must run after DOM is updated)
            initSidebar();

            // Call after render hook if it exists
            const { afterRender } = await matchedRoute();
            if (afterRender) afterRender();

        } catch (e) {
            console.error('Error loading page:', e);
            document.getElementById('app').innerHTML = '<h1>404 Not Found</h1>';
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
