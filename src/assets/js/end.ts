import {
  rightAnswers,
  score,
  usernameEndPage,
  wrongAnswers,
} from "./tag-variables";
import "../scss/main.scss";

const lastUser = JSON.parse(localStorage.getItem("lastUser")!);

const scoreText = /[1-4]+$/.test(lastUser.score) ? 'очка' : 'очков'
score.textContent = `${lastUser.score} ${scoreText}`;
usernameEndPage.textContent = lastUser.username;
rightAnswers.textContent = lastUser.right;
wrongAnswers.textContent = lastUser.wrong;
