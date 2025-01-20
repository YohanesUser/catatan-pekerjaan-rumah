document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("book-content");

    // Ganti dengan URL Google Docs yang dapat diakses publik untuk ekspor HTML
    const googleDocsUrl = 'https://docs.google.com/document/d/1MrNHihRyST-bLY_wTzdjm_ghfvIYzPhafgVGYbnGvU8/export?format=html';

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