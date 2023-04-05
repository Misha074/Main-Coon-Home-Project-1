const petsTabs = document.querySelectorAll('.pets__tab');
const petsSliderBlocks = document.querySelectorAll('.pets-slider__block');
const petsSliderSlides = document.querySelectorAll('.pets-slider__slide');
const tabletWidth = 768;
const maxNumberSlides = 3;
const petsButtonPrev = document.querySelector('.pets-slider-button--prev');
const petsButtonNext = document.querySelector('.pets-slider-button--next');

let tabName;
let width;
let screenWidth;
let count = 0;
let numberOfSlides;


function selectTab() {
  petsTabs.forEach(el => {
    el.addEventListener('click', function() {
      petsTabs.forEach(el => {
        el.classList.remove('pets__tab--active');
      })
      this.classList.add('pets__tab--active');
      tabName = this.getAttribute('data-tab-name');
      showSliderBlock(tabName);
      count = 0;
    })
  })
}

function showSliderBlock(tabName) {
  petsSliderBlocks.forEach(el => {
    if (el.classList.contains(tabName)) {
      el.classList.add('pets-slider__block--active')
    }

    else {
      el.classList.remove('pets-slider__block--active')
    }
  })
}

function hideOrShowExcessSlides() {
  screenWidth = window.innerWidth;

  petsSliderBlocks.forEach(el => {
    let slides = el.querySelectorAll('.pets-slider__slide');
    if (screenWidth > tabletWidth && slides.length > maxNumberSlides) {
      for (let i = maxNumberSlides; i < slides.length; i++) {
        slides[i].classList.add('pets-slider__slide--hidden');
      };
    };

    if (screenWidth <= tabletWidth && slides.length > maxNumberSlides) {
      for (let i = maxNumberSlides; i < slides.length; i++) {
        slides[i].classList.remove('pets-slider__slide--hidden');
      };
    };
    count = 0;
  })
}


function init() {
  hideOrShowExcessSlides();

  selectTab();

  screenWidth = window.innerWidth;

  if (screenWidth <= tabletWidth) {
    width = document.querySelector('.pets-slider').offsetWidth;
    petsSliderSlides.forEach((el) => el.style.width = width + 'px');

    petsSliderBlocks.forEach((el) => el.style.width = width * petsSliderSlides.length + 'px');
  }

  else {
    petsSliderSlides.forEach((el) => el.style.width = null);
    petsSliderBlocks.forEach((el) => el.style.width = null);
  }
}

window.addEventListener('resize', init);
init();



