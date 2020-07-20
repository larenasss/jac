const buttonNext = document.querySelector('.slider-button__item-c-next');
const buttonPrev = document.querySelector('.slider-button__item-c-prev');
const itemSlider = document.querySelectorAll('.equipment--cart li');

console.log(buttonNext);
let count = 0;

buttonNext.addEventListener('click', () => {
  console.log(1);
  itemSlider[count].classList.remove("active");
  count++
  if(count >= itemSlider.length) {
    count = 0;
  }
  itemSlider[count].classList.add('active');
})

buttonPrev.addEventListener('click', () => {
  itemSlider[count].classList.remove("active");
  count--
  if(count < 0) {
    count = itemSlider.length - 1;
  }
  itemSlider[count].classList.add('active');
})