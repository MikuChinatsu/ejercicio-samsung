const form = document.querySelector("form");

const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const usernameErrorIcon = document.getElementById("error-icon");

const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailErrorIcon = document.getElementById("error-icon");

const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const passwordErrorIcon = document.getElementById("error-icon");

const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.getElementById("confirm-password-error");
const confirmPasswordErrorIcon = document.getElementById("error-icon");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let valid = true;

  //User validation
  if (username.validity.valueMissing) {
    usernameError.textContent = "Rellene este campo";
    username.classList.add("error");
    username.classList.remove("valid");
    valid = false;
  } else if (username.validity.patternMismatch) {
    usernameError.textContent = "Por favor, introduzca solo letras";
    username.classList.add("error");
    username.classList.remove("valid");
    valid = false;
  } else {
    username.classList.add("valid");
    username.classList.remove("error");
    usernameError.textContent = "";
  }

  //Mail validation
  if (email.validity.valueMissing) {
    emailError.textContent = "Rellene este campo";
    email.classList.add("error");
    email.classList.remove("valid");
    valid = false;
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Email inválido";
    email.classList.add("error");
    email.classList.remove("valid");
    valid = false;
  } else {
    email.classList.add("valid");
    email.classList.remove("error");
    emailError.textContent = "";
  }

  //Password validation
  if (password.validity.valueMissing) {
    passwordError.textContent = "Rellene este campo";
    password.classList.add("error");
    password.classList.remove("valid");
    valid = false;
  } else if (password.value.length > 8) {
    passwordError.textContent = "No debe tener más de 8 caracteres";
    password.classList.add("error");
    password.classList.remove("valid");
    valid = false;
  } else {
    password.classList.add("valid");
    password.classList.remove("error");
    passwordError.textContent = "";
  }

  //Password validation
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "Rellene este campo";
    confirmPassword.classList.add("error");
    valid = false;
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Las contraseñas no coinciden";
    confirmPassword.classList.add("error");
    confirmPassword.classList.remove("valid");
    valid = false;
  } else {
    confirmPassword.classList.add("valid");
    confirmPassword.classList.remove("error");
    confirmPasswordError.textContent = "";
  }

  if (valid) {
    alert("La inscripción ha sido correcta");
  }
});
