// Simulasi login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logout');
    const userSpan = document.getElementById('user');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            sessionStorage.setItem('user', username);
            window.location.href = 'dashboard.html';
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

document.addEventListener("DOMContentLoaded", () => {
    // Ambil elemen nama pengguna
    const userName = document.getElementById("user").textContent.trim();
    
    // Format pesan WhatsApp
    const message = `Saya ${encodeURIComponent(userName)}, Mau tanya :`;
    
    // Nomor WhatsApp tujuan
    const whatsappNumber = "6289530067456";
    
    // Set href pada link WhatsApp
    const whatsappLink = document.getElementById("whatsapp-link");
    whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${message}`;
});

