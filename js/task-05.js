const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  nameOutputEl.textContent = event.target.value.trim();
});

nameInputEl.addEventListener("submit", (event) => {
  event.preventDefault();
  nameInputEl.reset();
  nameOutputEl.textContent = "Anonymous";
});
