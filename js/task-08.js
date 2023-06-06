const formEl = document.querySelector(".login-form");
// const formInputEmail = document.querySelector("");

console.log(formEl.email);

function handelFormSubmit() {
  formEl.preventDefault();

  const { email, password } = formEl;
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log(emailValue, passwordValue);

  formEl.reset();
}

formEl.addEventListener("submit", handelFormSubmit);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(formInputEl.value);

  formEl.reset();

  formSubmitBtnEl.disabled = true;

  userNameOutputEl.textContent = "";
});
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password },
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
