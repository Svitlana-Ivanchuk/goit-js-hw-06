const form = document.querySelector(".login-form");

form.addEventListener("submit", handelFormSubmit);

function handelFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const emailValue = formElements.email.value;
  const passwordValue = formElements.password.value;
  if (emailValue === "" || passwordValue === "") {
    alert("Всі поля повинні бути заповненні");
  } else {
    const formData = {
      emailValue,
      passwordValue,
    };
    console.log(formData);
  }

  form.reset();
}

//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     console.log("name :", name);
//     console.log("value :", value);
//   });
