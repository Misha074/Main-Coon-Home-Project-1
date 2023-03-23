// //-----------------------------------------------------
// // Так может быть открыт больше чем один аккордеон

// document.querySelectorAll('.faq-item').forEach((el) => {
//   let accordeonText = el.querySelector('.faq-item__text-wrapper');
//   let accordeonButtonText = el.querySelector('.faq-item__button');

//   el.addEventListener('click', () => {
//     if (accordeonText.style.maxHeight) {
//       accordeonText.style.maxHeight = null;
//       accordeonButtonText.textContent = '+';
//     }

//     else {
//       accordeonText.style.maxHeight = null;
//       accordeonText.style.maxHeight = accordeonText.scrollHeight + 'px';
//       accordeonButtonText.textContent = '-';
//     }
//   })
// })

//-----------------------------------------------------
// Так может быть открыт только один аккордеон

document.querySelectorAll('.faq-item').forEach((el) => {

  let correctAccordeonText = el.querySelector('.faq-item__text-wrapper');
  let allAccordeonText = document.querySelectorAll('.faq-item__text-wrapper');
  let accordeonButtonText = el.querySelector('.faq-item__button');

  el.addEventListener('click', () => {
    if (correctAccordeonText.style.maxHeight) {
      allAccordeonText.forEach((el) => el.style.maxHeight = null);
      accordeonButtonText.textContent = '+';
    }

    else {
      allAccordeonText.forEach((el) => el.style.maxHeight = null);
      correctAccordeonText.style.maxHeight = correctAccordeonText.scrollHeight + 'px';
      accordeonButtonText.textContent = '-';
    }
  })
})

