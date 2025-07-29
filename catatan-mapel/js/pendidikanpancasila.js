document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("book-content");

    const googleDocsUrl = 'https://docs.google.com/document/d/1qNiGsRAX6BD9KYtpePveQryXLqyk9aT3virhui9sD_Y/export?format=html';

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