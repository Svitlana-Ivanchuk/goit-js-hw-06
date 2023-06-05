let counterValue = document.querySelector("#value");

const decrementBtnEL = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

counterValue.textContent = 0;
let NumberValue = Number(counterValue.textContent);
function handelIncrementClick() {
  NumberValue += 1;
  counterValue.textContent = NumberValue;
}

function handelDecrementClick() {
  NumberValue -= 1;
  counterValue.textContent = NumberValue;
}
decrementBtnEL.addEventListener("click", handelDecrementClick);
incrementBtnEl.addEventListener("click", handelIncrementClick);

// варінт, якщо міняються будь-які змінні
// counterValue.textContent = 5;
// decrementBtnEL.textContent = -2;
// incrementBtnEl.textContent = 2;
// let NumberValue = Number(counterValue.textContent);
// let NumberDecrementBtnEL = Number(decrementBtnEL.textContent);
// let NumberIncrementBtnEl = Number(incrementBtnEl.textContent);

// function handelIncrementClick() {
//   NumberValue += NumberIncrementBtnEl;
//   counterValue.textContent = NumberValue;
// }
// function handelDecrementClick() {
//   NumberValue += NumberDecrementBtnEL;
//   counterValue.textContent = NumberValue;
// }

// decrementBtnEL.addEventListener("click", handelDecrementClick);
// incrementBtnEl.addEventListener("click", handelIncrementClick);
