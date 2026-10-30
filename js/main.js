document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-music');
    const toggle = document.getElementById('music-toggle');

    if (!audio) {
        if (toggle) toggle.style.display = 'none';
        return;
    }

    // Check if audio file exists and is accessible
    audio.addEventListener('error', () => {
        console.error("Audio file error.");
        if (toggle) toggle.style.display = 'none';
    });

    toggle.addEventListener('click', async () => {
        try {
            if (audio.paused) {
                await audio.play();
                toggle.textContent = '⏸️';
                toggle.setAttribute('aria-label', 'Пауза');
            } else {
                audio.pause();
                toggle.textContent = '🎵';
                toggle.setAttribute('aria-label', 'Включить музыку');
            }
        } catch (e) {
            console.error("Playback error:", e);
            toggle.textContent = '⚠️';
        }
    });
});
