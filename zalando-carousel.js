(function() {
    const images = [
        'images/zalando-landing-1.png',
        'images/zalando-landing-2.png',
        'images/zalando-landing-3.png',
        'images/zalando-landing-4.png',
        'images/zalando-landing-5.png'
    ];
    let currentIndex = 0;
    const heroImage = document.getElementById('zalando-hero-image');

    function cycleImage() {
        currentIndex = (currentIndex + 1) % images.length;
        heroImage.src = images[currentIndex];
    }

    setInterval(cycleImage, 2000);
})();
