document.addEventListener("DOMContentLoaded", () => {
    // Periksa apakah pengguna sudah melewati index.html
    if (!localStorage.getItem("visitedIndex")) {
        window.location.href = getLoginPath(); // Redirect ke login.html dengan path yang benar
        return;
    }

    // Periksa apakah pengguna sudah login
    if (!sessionStorage.getItem("user")) {
        sessionStorage.setItem("lastPage", window.location.href);
        window.location.href = getLoginPath(); // Redirect ke login.html dengan path yang benar
        return;
    }

    const contentDiv = document.getElementById("book-content");

    // URL Google Docs yang dapat diakses publik untuk ekspor HTML
    const googleDocsUrl = 'https://docs.google.com/document/d/1Y_GHjH3-IJ_5ZiT6ymGkNfo_mx16F6tuiy3AuWHBr0c/export?format=html';

    fetch(googleDocsUrl)
        .then(response => response.text())
        .then(data => {
            // Menampilkan konten HTML dari Google Docs
            contentDiv.innerHTML = data;
        })
        .catch(() => {
            contentDiv.textContent = "Terjadi kesalahan saat memuat konten.";
        });

    // Event listener untuk tombol "Selesai"
    document.getElementById('finish-button').addEventListener('click', function() {
        window.location.href = "/pekerjaan-rumah.html";
    });
});

// Fungsi untuk mendapatkan path yang benar untuk login.html
function getLoginPath() {
    let currentPath = window.location.pathname;
    let depth = currentPath.split("/").length - 2; // Hitung kedalaman folder

    let backPath = "../".repeat(depth); // Buat path relatif yang sesuai
    return backPath + "login.html"; // Kembalikan path login.html yang benar
}
