import { User } from "./types";
import anime from "animejs";
import { alertMessage, form, nameInput } from "./tag-variables";
import "../scss/main.scss";

anime({
  targets: "#math-quiz path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1200,
  delay: function (el, i) {
    return i === 0 ? i * 0 : i * 500;
  },
  direction: "alternate",
  loop: false,
});

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user: string = nameInput.value;
  const gameMode = form.querySelectorAll(
    ".form__game-mode:checked"
  ) as NodeListOf<HTMLInputElement>;

  if (user) {
    alertMessage.textContent = "";
    currentUser.username = user;
    if (gameMode[0].value === "time-attack") {
      currentUser.gameMode = gameMode[0].value;
    } else currentUser.gameMode = "practice";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "/game.html";
  } else {
    alertMessage.textContent = "Please provide your name";
  }
});
