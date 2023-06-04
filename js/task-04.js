let counterValue = document.querySelector("#value");

const decrementBtnEL = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

counterValue.textContent = 0;
function handelDecrementClick() {
  return (counterValue.textContent -= 1);
}
console.log(handelDecrementClick);
function handelIncrementClick() {
  return counterValue.textContent++;
}
console.log(handelIncrementClick);

decrementBtnEL.addEventListener("click", handelDecrementClick);
incrementBtnEl.addEventListener("click", handelIncrementClick);
