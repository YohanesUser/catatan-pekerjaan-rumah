function checkLogin(depth) {
    let isLoggedIn = sessionStorage.getItem("loggedIn"); // Periksa apakah pengguna sudah login
    if (!isLoggedIn) {
        let currentPage = window.location.pathname; // Dapatkan halaman saat ini
        sessionStorage.setItem("redirectAfterLogin", currentPage); // Simpan halaman tujuan
        window.location.href = getLoginPath(depth); // Arahkan ke login.html
    }
}

function getLoginPath(depth) {
    let backPath = "../".repeat(depth); // Buat path relatif yang sesuai
    return backPath + "login.html"; // Kembalikan path login.html yang benar
}

function loginSuccess() {
    sessionStorage.setItem("loggedIn", "true"); // Tandai pengguna sebagai login
    let redirectPage = sessionStorage.getItem("redirectAfterLogin"); // Ambil halaman tujuan
    if (redirectPage) {
        window.location.href = redirectPage; // Arahkan kembali ke halaman sebelumnya
        sessionStorage.removeItem("redirectAfterLogin"); // Hapus setelah digunakan
    } else {
        window.location.href = "index.html"; // Jika tidak ada halaman tujuan, arahkan ke home
    }
}
