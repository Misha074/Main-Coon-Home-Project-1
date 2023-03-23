let maleCats = document.querySelectorAll('.pets__photos-item--male');
let femaleCats = document.querySelectorAll('.pets__photos-item--female');
let maleButton = document.querySelector('.pets__button--male');
let femaleButton = document.querySelector('.pets__button--female');
console.log(femaleCats);

// function init() {
//   femaleCats.forEach((el) =>
//     el.style.display = null,
//     el.style.display = "none")
// }

function hideFemale() {
  femaleCats.forEach((el) => el.style.display = null);
  femaleCats.forEach((el) => el.style.display = 'none');
}

function hideMale() {
  maleCats.forEach((el) => el.style.display = null);
  maleCats.forEach((el) => el.style.display = 'none');
}


maleButton.addEventListener('click', () => {
  femaleCats.forEach((el) => el.style.display = null);
  femaleCats.forEach((el) => el.style.display = 'none');
  maleCats.forEach((el) => el.style.display = null);
  maleCats.forEach((el) => el.style.display = 'block');
  femaleButton.classList.remove('pets__button--active')
  maleButton.classList.add('pets__button--active');
});

femaleButton.addEventListener('click', () => {
  maleCats.forEach((el) => el.style.display = null);
  maleCats.forEach((el) => el.style.display = 'none');
  femaleCats.forEach((el) => el.style.display = null);
  femaleCats.forEach((el) => el.style.display = 'block');
  maleButton.classList.remove('pets__button--active')
  femaleButton.classList.add('pets__button--active');
});

hideFemale();


