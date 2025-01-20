document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("book-content");

    // Ganti dengan URL Google Docs yang dapat diakses publik
    const googleDocsUrl = 'https://docs.google.com/document/d/1ZTxbOIuulotyU2IMEXMLOvfNbev7N9IGxIelJBbHxQA/export?format=txt';

    fetch(googleDocsUrl)
        .then(response => response.text())
        .then(data => {
            contentDiv.textContent = data;
        })
        .catch(() => {
            contentDiv.textContent = "Terjadi kesalahan saat memuat konten.";
        });
});
