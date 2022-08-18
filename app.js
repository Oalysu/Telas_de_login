function backToLoginButton() {
  alert("Cadastrado com sucesso!");
  window.location.replace("http://127.0.0.1:5500/index.html");
}

function changeMode() {
  changeClasses();
}

function changeClasses() {
  body.classList.toggle(lightModeClass);
  cardLogin.classList.toggle(lightModeClass);
  cardLoginH2.classList.toggle(lightModeClass);
  inputUser.classList.toggle(lightModeClass);
  inputPassowrd.classList.toggle(lightModeClass);
  labelUser.classList.toggle(lightModeClass);
  labelPassword.classList.toggle(lightModeClass);
  buttonLogin.classList.toggle(lightModeClass);
  cad.classList.toggle(lightModeClass);
}

//Constantes para mudança das cores do tema!
const lightModeClass = "light-mode";
const body = document.getElementsByTagName("body")[0];
const cardLogin = document.getElementsByClassName("card-login")[0];
const cardLoginH2 = document.getElementsByTagName("h2")[0];
const labelUser = document.getElementsByClassName("labels")[0];
const labelPassword = document.getElementsByClassName("labels")[1];
const inputUser = document.getElementsByClassName("inputs")[0];
const inputPassowrd = document.getElementsByClassName("inputs")[1];
const buttonLogin = document.getElementsByClassName("btn-login")[0];
const cad = document.getElementsByClassName("link-cadastro")[0];

// esses ficam isolados
const botaoTrocarTema = document.getElementById("mode-selector");
botaoTrocarTema.addEventListener("click", changeMode);
