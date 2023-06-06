const refs = {
  backgroundColorBody: document.querySelector(".widget"),
  btnChangeColor: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  colorEl: document.querySelector(".color"),
};

refs.btnChangeColor.addEventListener("click", handelButtonClick);

function handelButtonClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorEl.textContent = refs.body.style.backgroundColor;
  console.log("click");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
