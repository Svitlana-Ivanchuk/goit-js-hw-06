const inputChangeSize = document.querySelector("#font-size-control");
const textInput = document.querySelector("#text");

function handelChangeSize() {
  textInput.style.fontSize = inputChangeSize.value + "px";
}

inputChangeSize.addEventListener("input", handelChangeSize);
