import { alertMessage, form, nameInput } from "./tag-variables";
import "../scss/main.scss";

nameInput.value = localStorage.getItem("lastUser")
  ? JSON.parse(localStorage.getItem("lastUser")!).username
  : "";

const lastUser = {
  username: "",
  gameMode: "practice",
  right: 0,
  wrong: 0,
  score: 0,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user: string = nameInput.value;
  const gameMode = form.querySelectorAll(
    ".form__game-mode:checked"
  ) as NodeListOf<HTMLInputElement>;

  if (user) {
    alertMessage.textContent = "";
    lastUser.username = user;
    if (gameMode[0].value === "time-attack") {
      lastUser.gameMode = gameMode[0].value;
    } else lastUser.gameMode = "practice";
    localStorage.setItem("lastUser", JSON.stringify(lastUser));
    window.location.href = "/game.html";
  } else {
    alertMessage.textContent = "Please provide your name";
  }
});
