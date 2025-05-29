document.addEventListener('DOMContentLoaded', function () {
    const musicLinks = document.querySelectorAll('a[data-spotify]');
    const playerDiv = document.getElementById('spotifyplayer');

    musicLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const spotifyUrl = this.getAttribute('data-spotify');
            // Extract the track ID from the Spotify URL
            const match = spotifyUrl.match(/track\/([a-zA-Z0-9]+)/);
            if (match) {
                const trackId = match[1];
                // Embed Spotify player
                playerDiv.innerHTML = `
                    <div style="display:flex;justify-content:center;align-items:center;width:100%;margin:20px 0;">
                        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                `;
                playerDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                // If not a valid Spotify track, open in new tab as fallback
                window.open(spotifyUrl, '_blank');
            }
        });
    });
});