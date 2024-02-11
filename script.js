const sliderEl = document.querySelector('.slider');
const previousButtonEl = document.querySelector('.previous__button');
const nextButtonEl = document.querySelector('.next__button');

const slides = Array.from(sliderEl.querySelectorAll('img'))
const slideCount = slides.length;
let sliderIndex = 0;

previousButtonEl.addEventListener('click', previousSlide);
nextButtonEl.addEventListener('click', nextSlide);

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
}