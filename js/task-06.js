const textInputEl = document.querySelector("#validation-input");
const dataLengthEl = document.querySelector('input>[data-length="6"]');
console.log(dataLengthEl.dataset.length);

textInputEl.addEventListener("focus", () => {
  textInputEl.value === dataLengthEl;
});
