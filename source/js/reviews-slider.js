const slider = document.querySelector('.reviews-slider');
const sliderLine = document.querySelector('.reviews-slider__line');
const slides = document.querySelectorAll('.reviews-slider .reviews-slider__line .reviews-slider__slide');

let count = 0;
let width;

function init() {
  width = document.querySelector('.reviews-slider').offsetWidth;
  slides.forEach((el) => el.style.width = width + 'px');
  sliderLine.style.width = width * slides.length + 'px';
  rollslider();
}

window.addEventListener('resize', init);

document.querySelector('.reviews-slider__button--next').addEventListener('click', function () {
  count++;

  if (count >= slides.length) {
    count = 0;
    rollslider();
  }

  rollslider();
})

document.querySelector('.reviews-slider__button--prev').addEventListener('click', function () {
  count--;

  if (count < 0) {
    count = slides.length - 1;
    rollslider();
  }

  rollslider();
})

function rollslider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

init();
