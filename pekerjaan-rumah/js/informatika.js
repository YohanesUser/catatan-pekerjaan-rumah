document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("book-content");

    // Ganti dengan URL Google Docs yang dapat diakses publik untuk ekspor HTML
    const googleDocsUrl = 'https://docs.google.com/document/d/1IDOgfvJ3mxnq94ynx8kJ1R_K8bD2ed3yy8ipL1MFa7k/export?format=html';

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
