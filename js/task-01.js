const liEls = document.querySelectorAll("li.item");
console.log(`Number of categories: ${liEls.length}`);
const itemEls = document.querySelectorAll(".item");
itemEls.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const luEls = item.querySelectorAll("li");
  console.log(`Elements: ${luEls.length}`);
});
