document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("book-content");

    const googleDocsUrl = 'https://docs.google.com/document/d/1MrNHihRyST-bLY_wTzdjm_ghfvIYzPhafgVGYbnGvU8/export?format=html';

    fetch(googleDocsUrl)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(() => {
            contentDiv.textContent = "Terjadi kesalahan saat memuat konten.";
        });

    document.getElementById('finish-button').addEventListener('click', function () {
        window.location.href = "/pekerjaan-rumah/dashboard.html";
    });
});