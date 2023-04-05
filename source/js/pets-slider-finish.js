//Кнопки
const petsButtonPrev = document.querySelector('.pets-slider-button--prev');
const petsButtonNext = document.querySelector('.pets-slider-button--next');

const petsTabs = document.querySelectorAll('.pets__tab');
const petsSliderBlocks = document.querySelectorAll('.pets-slider__block');
const petsSliderSlides = document.querySelectorAll('.pets-slider__slide');
const tabletWidth = 768;
const maxNumberSlides = 3;

let tabName;
let count = 0;
let width;
let screenWidth;
let numberOfSlides;

function rollslider() {
  document.querySelector('.pets-slider__block--active').style.transform = 'translate(-' + count * width + 'px)';
}

function init() {
  screenWidth = window.innerWidth;

  if (screenWidth <= tabletWidth) {
    width = document.querySelector('.pets-slider').offsetWidth;
    petsSliderSlides.forEach((el) => el.style.width = width + 'px');

    petsSliderBlocks.forEach((el) => el.style.width = width * petsSliderSlides.length + 'px');
    rollslider()
  }

  else {
    petsSliderSlides.forEach((el) => el.style.width = null);
    petsSliderBlocks.forEach((el) => el.style.width = null);
    rollslider()
  }
}

window.addEventListener('resize', init);

petsButtonNext.addEventListener('click', function () {
  count++;
  numberOfSlides = document.querySelectorAll('.pets-slider__block--active .pets-slider__slide');

  if (count >= numberOfSlides.length) {
    count = 0;
    rollslider();
  }

  rollslider();
})


petsButtonPrev.addEventListener('click', function () {
  count--;
  numberOfSlides = document.querySelectorAll('.pets-slider__block--active .pets-slider__slide');

  if (count < 0) {
    count = numberOfSlides.length - 1;
    rollslider();
  }

  rollslider();
})

init();



