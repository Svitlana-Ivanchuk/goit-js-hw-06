const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientEls = document.querySelector("#ingredients");
const listEl = ingredients.map((ingredient) => {
  const ilEl = document.createElement("li");
  ilEl.textContent = ingredient;
  ilEl.classList.add("item");
  return ilEl;
});

console.log(listEl);
ingredientEls.append(...listEl);
