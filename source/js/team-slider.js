const slider = document.querySelector('.team-slider');
const sliderLine = document.querySelector('.team-slider__line');
const slides = document.querySelectorAll('.team-slider .team-slider__line .team-slider__slide');

let count = 0;
let width;

function init() {
  width = document.querySelector('.team-slider').offsetWidth;
  slides.forEach((el) => el.style.width = width + 'px');
  sliderLine.style.width = width * slides.length + 'px';
  rollslider();
}

window.addEventListener('resize', init);

document.querySelector('.team-slider__button--next').addEventListener('click', function () {
  count++;

  if (count >= slides.length) {
    count = 0;
    rollslider();
  }

  rollslider();
})

document.querySelector('.team-slider__button--prev').addEventListener('click', function () {
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
