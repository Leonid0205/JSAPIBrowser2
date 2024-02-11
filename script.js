const sliderEl = document.querySelector('.slider');
const previousButtonEl = document.querySelector('.previous__button');
const nextButtonEl = document.querySelector('.next__button');
const dotsNav = document.querySelector('.slider__nav');

const slides = Array.from(sliderEl.querySelectorAll('img'));
const dots = Array.from(dotsNav.querySelectorAll('button'));
const slideCount = slides.length;
let sliderIndex = 0;

previousButtonEl.addEventListener('click', previousSlide);
nextButtonEl.addEventListener('click', nextSlide);
dotsNav.addEventListener('click', function (e) {
    const targetDot = e.target.closest('button');
    if (!targetDot) {
        return
    }

    const targetIndex = dots.findIndex(dot => dot === targetDot);
    
    console.log(dots);
    console.log(targetIndex);
    renderSlide();
    dots.forEach((dot, index, dots) => {
        if (index === targetIndex) {
            dots[index].classList.add('active');
        } else {
            dots[index].classList.remove('active');
        }

    });
    slides.forEach((slide, index) => {
        if (index === targetIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
});

function previousSlide() {
    sliderIndex = (sliderIndex - 1 + slideCount) % slideCount;
    console.log('Previous slideINdex', sliderIndex);
    renderSlide();
}

function nextSlide() {
    sliderIndex = (sliderIndex + 1) % slideCount;
    console.log('Next slideINdex', sliderIndex);
    renderSlide();
}

renderSlide();

function renderSlide() {
    slides.forEach((slide, index) => {
        if (index === sliderIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    dots.forEach((dot, index, dots) => {
        if (index === sliderIndex) {
            dots[index].classList.add('active');
        } else {
            dots[index].classList.remove('active');
        }

    });
}