let sliders = document.querySelectorAll('.slider');


function initSlider() {
  sliders.forEach(el => {
    let count = 0;
    let width;
    let sliderLine = el.querySelector('.slider-line');
    let slides = el.querySelectorAll('.slide');
    width = el.offsetWidth;
    slides.forEach((el) => el.style.width = width + 'px');
    sliderLine.style.width = width * slides.length + 'px';

    function rollslider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }

    el.querySelector('.slider-button--next').addEventListener('click', function () {
      count++;

      if (count >= slides.length) {
        count = 0;
        rollslider();
      }

      rollslider();
    })

    el.querySelector('.slider-button--prev').addEventListener('click', function () {
      count--;

      if (count < 0) {
        count = slides.length - 1;
        rollslider();
      }

      rollslider();
    })

    rollslider();
  })
}


window.addEventListener('resize', initSlider);
initSlider();
