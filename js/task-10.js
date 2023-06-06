const boxElms = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputNumber = document.querySelector("input");
console.log(inputNumber.getAttribute("max"));

btnCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  const elements = [];
  amount = inputNumber.getAttribute("max");
  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement("div");
    divBox.width = 30;
    divBox.height = 30;
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.border = "2px solid red";
    divBox.style.boxSizing = "content-box";
    elements.push(divBox);
    console.log(divBox);
    console.log(elements);
  }
  boxElms.append(elements);
}

// console.log(createBoxes(3));

function destroyBoxes() {
  boxElms.remove(divBox);
  console.log(boxElms);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
