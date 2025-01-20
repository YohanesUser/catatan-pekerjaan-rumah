document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("book-content");

    // Ganti dengan URL Google Docs yang dapat diakses publik untuk ekspor HTML
    const googleDocsUrl = 'https://docs.google.com/document/d/1dT39F8cC6bs7e-8JLGpBUg3MYCkhSu76XWy_oigXo4M/export?format=html';

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
