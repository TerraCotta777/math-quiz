import {
  rightAnswers,
  score,
  usernameEndPage,
  wrongAnswers,
} from "./tag-variables";
import "../scss/main.scss";

const currentUser = JSON.parse(localStorage.getItem("currentUser")!);

const scoreText = /[1-4]+$/.test(currentUser.score) ? "очка" : "очков";
score.textContent = `${currentUser.score} ${scoreText}`;
usernameEndPage.textContent = currentUser.username;
rightAnswers.textContent = currentUser.right;
wrongAnswers.textContent = currentUser.wrong;
