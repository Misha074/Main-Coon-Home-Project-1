//Кнопки
const buttonMale = document.querySelector('.pets__button--male');
const buttonFemale = document.querySelector('.pets__button--female');
const buttonKittens = document.querySelector('.pets__button--kittens');
const petsButtonPrev = document.querySelector('.pets-slider-button--prev');
const petsButtonNext = document.querySelector('.pets-slider-button--next');

const petsSliderBlock = document.querySelector('.pets-slider__block');
const petsSliderBlocks = document.querySelectorAll('.pets-slider__block');
const blockMale = document.querySelector('.pets-slider__block--male');
const blockFemale = document.querySelector('.pets-slider__block--female');
const blockKittens = document.querySelector('.pets-slider__block--kittens');
const petsSliderSlides = document.querySelectorAll('.pets-slider__slide');


let count = 0;
let width;
let screenWidth;
let numberOfSlides;

function hideExcessSlides() {
  screenWidth = window.innerWidth;

  petsSliderBlocks.forEach(el => {
    let slides = el.querySelectorAll('.pets-slider__slide');
    if (screenWidth > 768 && slides.length > 3) {
      for (let i = 3; i < slides.length; i++) {
        slides[i].classList.add('pets-slider__slide--hidden');
      };
      count = 0;
      rollslider()
    }
  })
}

function showSlides() {
  screenWidth = window.innerWidth;

  petsSliderBlocks.forEach(el => {
    let slides = el.querySelectorAll('.pets-slider__slide');
    if (screenWidth <= 768 && slides.length > 3) {
      for (let i = 3; i < slides.length; i++) {
        slides[i].classList.remove('pets-slider__slide--hidden');
      };
      // count = 0;
      rollslider()
    }
  })
}

// function marginZero() {
//   petsSliderSlides.forEach((el) => el.style.marginLeft = 0 + 'px');
//   petsSliderSlides.forEach((el) => el.style.marginRight = 0 + 'px');
// }

function init() {
  hideExcessSlides();
  // marginZero();
  showSlides();

  screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
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

  else {
    rollslider();
  }
})


petsButtonPrev.addEventListener('click', function () {
  count--;
  numberOfSlides = document.querySelectorAll('.pets-slider__block--active .pets-slider__slide');

  if (count < 0) {
    count = numberOfSlides.length - 1;
    rollslider();
  }

  else {
    rollslider();
  }
})

function rollslider() {
  document.querySelector('.pets-slider__block--active').style.transform = 'translate(-' + count * width + 'px)';
}

function hideFemaleAndKittensBlock() {
  blockMale.classList.add('pets-slider__block--active');
  blockFemale.classList.add('pets-slider__block--inactive');
  blockKittens.classList.add('pets-slider__block--inactive');
}

function showMaleBlock() {
  count = 0;
  blockMale.style.transform = 'translate(0px)';
  blockMale.classList.remove('pets-slider__block--inactive');
  blockMale.classList.add('pets-slider__block--active');
  blockFemale.classList.remove('pets-slider__block--active');
  blockFemale.classList.add('pets-slider__block--inactive');
  blockKittens.classList.remove('pets-slider__block--active');
  blockKittens.classList.add('pets-slider__block--inactive');

  buttonMale.classList.add('pets__button--active');
  buttonFemale.classList.remove('pets__button--active');
  buttonKittens.classList.remove('pets__button--active');
}

function showFemaleBlock() {
  count = 0;
  blockFemale.style.transform = 'translate(0px)';
  blockFemale.classList.remove('pets-slider__block--inactive');
  blockFemale.classList.add('pets-slider__block--active');
  blockMale.classList.remove('pets-slider__block--active');
  blockMale.classList.add('pets-slider__block--inactive');
  blockKittens.classList.remove('pets-slider__block--active');
  blockKittens.classList.add('pets-slider__block--inactive');

  buttonFemale.classList.add('pets__button--active');
  buttonMale.classList.remove('pets__button--active');
  buttonKittens.classList.remove('pets__button--active');
}

function showKittensBlock() {
  count = 0;
  blockKittens.style.transform = 'translate(0px)';
  blockKittens.classList.remove('pets-slider__block--inactive');
  blockKittens.classList.add('pets-slider__block--active');
  blockMale.classList.remove('pets-slider__block--active');
  blockMale.classList.add('pets-slider__block--inactive');
  blockFemale.classList.remove('pets-slider__block--active');
  blockFemale.classList.add('pets-slider__block--inactive');

  buttonKittens.classList.add('pets__button--active');
  buttonMale.classList.remove('pets__button--active');
  buttonFemale.classList.remove('pets__button--active');
}


buttonMale.addEventListener('click', showMaleBlock);
buttonFemale.addEventListener('click', showFemaleBlock);
buttonKittens.addEventListener('click', showKittensBlock);

hideFemaleAndKittensBlock();
init();
