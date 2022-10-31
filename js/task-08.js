

const form = document.querySelector(".login-form");

form .addEventListener("submit", onValueСhecking);

function onValueСhecking(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  }
  const formElements = { mail: email.value, password: password.value };

  event.currentTarget.reset();
}