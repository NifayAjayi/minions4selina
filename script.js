document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Floating bananas animation
    const bananasContainer = document.getElementById('bananas-container');

    function createBanana() {
        const banana = document.createElement('div');
        banana.classList.add('banana');
        banana.innerHTML = '🍌';
        banana.style.left = Math.random() * 100 + '%';
        banana.style.animationDuration = Math.random() * 3 + 2 + 's';
        bananasContainer.appendChild(banana);

        setTimeout(() => {
            banana.remove();
        }, 5000);
    }

    setInterval(createBanana, 300);

    // Image hover effect
    const images = document.querySelectorAll('#couple-image, .gallery-image');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Journal entry interaction
    document.querySelectorAll('.journal-entry').forEach(entry => {
        entry.addEventListener('click', () => {
            entry.style.backgroundColor = getRandomColor();
        });
    });

    function getRandomColor() {
        const colors = ['#fce205', '#4a9ff5', '#ff9ff3', '#54a0ff', '#5f27cd'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const playPauseButton = document.getElementById('play-pause');
    
    playPauseButton.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            playPauseButton.textContent = 'Pause Music';
        } else {
            music.pause();
            playPauseButton.textContent = 'Play Music';
        }
    });
});
