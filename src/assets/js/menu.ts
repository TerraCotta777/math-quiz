import { User } from "./types";
import { alertMessage, form, nameInput } from "./tag-variables";
import "../scss/main.scss";

nameInput.focus();

nameInput.value = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")!).username
  : "";

const currentUser: User = {
  username: "",
  gameMode: "practice",
  right: 0,
  wrong: 0,
  score: 0,
};

const alertAnimation = () => {
  alertMessage.classList.add("shaking");
  setTimeout(() => alertMessage.classList.remove("shaking"), 1000);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitter = e.submitter as HTMLButtonElement;
  const user: string = nameInput.value;
  const gameMode = submitter.value;

  if (user) {
    alertMessage.style.display = "none";
    currentUser.username = user;
    currentUser.gameMode = gameMode;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "/game.html";
  } else {
    alertMessage.style.display = "block";
    alertAnimation();
  }
});

nameInput.addEventListener("keyup", () => {
  if (nameInput.value) alertMessage.style.display = "none";
  else alertMessage.style.display = "block";
});
