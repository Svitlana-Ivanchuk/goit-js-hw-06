const textInputEl = document.querySelector("#validation-input");
const dataLength = Number(textInputEl.dataset.length);

// const textInputValue = textInputEl.value.length;

textInputEl.addEventListener("blur", handelInputBlur);

function handelInputBlur(event) {
  if (event.target.value.length === dataLength) {
    textInputEl.classList.remove("invalid");
    textInputEl.classList.add("valid");
  }
  textInputEl.classList.remove("valid");
  textInputEl.classList.add("invalid");
}
