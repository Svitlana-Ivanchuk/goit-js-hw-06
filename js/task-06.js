const textInputEl = document.querySelector("#validation-input");
const dataLength = Number(textInputEl.dataset.length);
// console.log(typeof dataLength);

textInputEl.addEventListener("blur", handelInputBlur);

function handelInputBlur(event) {
  if (event.target.value.length !== dataLength) {
    // console.log(event.target.value.length);
    textInputEl.classList.remove("valid");
    textInputEl.classList.add("invalid");
  } else {
    textInputEl.classList.remove("invalid");
    textInputEl.classList.add("valid");
  }
}
