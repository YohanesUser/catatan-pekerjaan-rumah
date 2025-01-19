document.addEventListener('DOMContentLoaded', function () {
    const gistUrl = 'https://gist.githubusercontent.com/YohanesUser/56150d5a65cb32f9fde0acb860b1fe8f/raw/7e2981d7c5d81434a3cdef6c7b77e2a63637fccd/pr-sbdp'; // URL raw Gist
    const tasksList = document.getElementById('tasks-list');

    // Gunakan Markdown-It untuk merender Markdown
    const md = window.markdownit();

    fetch(gistUrl)
    .then(response => response.text())
    .then(data => {
        // Render Markdown ke HTML
        const renderedHtml = md.render(data);

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.classList.add('task-name');
        span.innerHTML = renderedHtml; // Masukkan HTML hasil render Markdown

        const button = document.createElement('button');
        button.classList.add('mark-done');
        button.textContent = 'Selesai';
        button.addEventListener('click', () => {
            const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|webOS|Opera Mini|IEMobile/i.test(navigator.userAgent);

            if (isMobile) {
                if (confirm('Apakah Anda yakin ingin menuju ke dashboard?')) {
                    window.location.href = 'https://pekerjaanrumah.vercel.app/dashboard.html'; // Arahkan ke URL dashboard eksternal
                }
            } else {
                if (confirm('Apakah Anda yakin ingin masuk ke dashboard?')) {
                    window.location.href = 'https://pekerjaanrumah.vercel.app/dashboard.html'; // Arahkan ke dashboard URL eksternal
                }
            }
            
        });

        li.appendChild(span);
        li.appendChild(button);
        tasksList.appendChild(li);
    })
    .catch(error => {
        console.error('Error fetching tasks from GitHub Gist:', error);
        tasksList.innerHTML = '<li>Error fetching tasks</li>';
    });

});
