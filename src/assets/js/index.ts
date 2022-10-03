import {
  alertMessage,
  form,
  nameInput,
  gameMode,
} from "./tag-variables";
import "../scss/main.scss";




form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user: string = nameInput.value;

  if (user) {
    console.log(user);
    alertMessage.textContent = "";
    window.location.href = "/game.html";
  } else {
    alertMessage.textContent = "Please provide your name";
  }
});


