const USERS_KEY = 'cam_site_users';
const CURRENT_USER_KEY = 'cam_site_current_user';

// --- Initialization ---
function initAuth() {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    if (users.length === 0) {
        const defaultUsers = [
            {
                id: 1,
                username: 'admin',
                password: '123', // Demo password
                fullName: 'Admin Manager',
                role: 'admin',
                phone: '0909123456',
                email: 'admin@camsite.com',
                avatar: 'https://ui-avatars.com/api/?name=Admin+Manager&background=E85D04&color=fff',
                status: 'active'
            },
            {
                id: 2,
                username: 'sale',
                password: '123',
                fullName: 'Sale Staff',
                role: 'sale',
                phone: '0909987654',
                email: 'sale@camsite.com',
                avatar: 'https://ui-avatars.com/api/?name=Sale+Staff&background=random',
                status: 'active'
            }
        ];
        localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
        console.log('Default users initialized.');
    }
}

// --- Auth Actions ---
function login(username, password) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password && u.status === 'active');

    if (user) {
        // Remove password from session for security
        const sessionUser = { ...user };
        delete sessionUser.password;

        sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
        return { success: true, user: sessionUser };
    }
    return { success: false, message: 'Sai tên đăng nhập hoặc mật khẩu!' };
}

function logout() {
    sessionStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = 'login.html';
}

function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem(CURRENT_USER_KEY));
}

function checkAuth() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    return user;
}

function requireRole(allowedRoles) {
    const user = checkAuth();
    if (user && !allowedRoles.includes(user.role)) {
        alert('Bạn không có quyền truy cập trang này!');
        window.location.href = 'dashboard.html';
    }
}

// --- User Management (CRUD) ---
function getAllUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUser(user) {
    let users = getAllUsers();
    if (user.id) {
        // Update
        const index = users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            users[index] = { ...users[index], ...user };

            // If updating current user, update session too
            const currentUser = getCurrentUser();
            if (currentUser && currentUser.id === user.id) {
                const sessionUser = { ...users[index] };
                delete sessionUser.password;
                sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
            }
        }
    } else {
        // Create
        user.id = Date.now();
        user.avatar = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=random`;
        users.push(user);
    }
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
}

function deleteUser(id) {
    let users = getAllUsers();
    users = users.filter(u => u.id !== id);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// --- Auto-Run on Load ---
initAuth();
