let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const overlay = document.getElementById('overlay');
    const aboutSectionPosition = aboutSection.getBoundingClientRect();

    if (aboutSectionPosition.top < window.innerHeight && aboutSectionPosition.bottom > 0) {
        overlay.classList.add('visible');
    } else {
        overlay.classList.remove('visible');
    }
});

window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const escapeOrdSection = document.getElementById('escapeord');
    const overlay = document.getElementById('overlay');
    const aboutSectionPosition = aboutSection.getBoundingClientRect();

    if (aboutSectionPosition.top < window.innerHeight && aboutSectionPosition.bottom > 0) {
        overlay.classList.add('visible');
        aboutSection.classList.remove('hidden');
        escapeOrdSection.classList.remove('hidden');
    } else {
        overlay.classList.remove('visible');
        aboutSection.classList.add('hidden');
        escapeOrdSection.classList.add('hidden');
    }
});

window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const escapeOrdSection = document.getElementById('escapeord');
    const transitionImage = document.getElementById('transitionImage');
    const overlay = document.getElementById('overlay');
    const aboutSectionPosition = aboutSection.getBoundingClientRect();

    if (aboutSectionPosition.top < window.innerHeight && aboutSectionPosition.bottom > 0) {
        overlay.classList.add('visible');
        aboutSection.classList.remove('hidden');
        escapeOrdSection.classList.remove('hidden');
        transitionImage.classList.add('visible');
    } else {
        overlay.classList.remove('visible');
        aboutSection.classList.add('hidden');
        escapeOrdSection.classList.add('hidden');
        transitionImage.classList.remove('visible');
    }
});