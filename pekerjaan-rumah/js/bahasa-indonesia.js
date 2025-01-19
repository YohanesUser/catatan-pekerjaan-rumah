document.addEventListener('DOMContentLoaded', function () {
    const gistUrl = 'https://gist.githubusercontent.com/YohanesUser/e7eb20cce00919bbe4a683dc9d557cc9/raw/af7203931a035077641d8b97039e98baf1f4929d/pr-bindo.md'; // URL raw Gist
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
