document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logout');
    const userSpan = document.getElementById('user');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const loginTime = new Date().toLocaleString();

            sessionStorage.setItem('user', username);

            // Simpan pengguna dan waktu login ke localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];
            let loginTimes = JSON.parse(localStorage.getItem('loginTimes')) || {};

            if (!users.includes(username)) {
                users.push(username);
                localStorage.setItem('users', JSON.stringify(users));
            }

            loginTimes[username] = loginTime;
            localStorage.setItem('loginTimes', JSON.stringify(loginTimes));


            // Redirect berdasarkan username
            if (username.toLowerCase() === 'admin1') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'dashboard.html';
            }
        });
    }

    if (userSpan) {
        const user = sessionStorage.getItem('user');
        if (user) {
            userSpan.textContent = user;
        } else {
            window.location.href = 'index.html';
        }
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            sessionStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    }
});
