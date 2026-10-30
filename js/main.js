document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    const toggle = document.getElementById('music-toggle');
    
    toggle.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            toggle.textContent = 'Музыка: Вкл';
        } else {
            music.pause();
            toggle.textContent = 'Музыка: Выкл';
        }
    });
});