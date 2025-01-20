document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("book-content");

    // Ganti dengan URL Google Docs yang dapat diakses publik untuk ekspor HTML
    const googleDocsUrl = 'https://docs.google.com/document/d/1ojC1l1xY-QL4MJV265-34_kZYIc5SWn5ObrOjSovP2o/export?format=html';

    fetch(googleDocsUrl)
        .then(response => response.text())
        .then(data => {
            // Menampilkan konten HTML dari Google Docs
            contentDiv.innerHTML = data;
        })
        .catch(() => {
            contentDiv.textContent = "Terjadi kesalahan saat memuat konten.";
        });
});