const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", handelNameInput);

function handelNameInput(event) {
  nameOutputEl.textContent =
    event.target.value.trim() === "" ? "Anonymous" : event.target.value.trim();
}
