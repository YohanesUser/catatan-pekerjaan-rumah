document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("book-content");

    // Ganti dengan URL Google Docs yang dapat diakses publik untuk ekspor HTML
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
        // Arahkan ke halaman pekerjaanrumah
        window.location.href = "https://pekerjaanrumah.vercel.app/dashboard.html";
    });
});
