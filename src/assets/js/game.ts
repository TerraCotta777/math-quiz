import anime from "animejs";
import "../scss/main.scss";
import { generateExample } from "./math";
import {
  username,
  num1,
  num2,
  operator,
  result,
  winElement,
  stopButton,
} from "./tag-variables";
import { timerFunc } from "./timer";
import { Leaders, User } from "./types";
import { stopGame, updateLeaderBoard } from "./utils";

export const currentUser: User = JSON.parse(
  localStorage.getItem("currentUser")!
);
!localStorage.getItem("leaders") &&
  localStorage.setItem(
    "leaders",
    JSON.stringify({ practice: {}, "time-attack": {} })
  );

currentUser.right = 0;
currentUser.wrong = 0;
currentUser.score = 0;
localStorage.setItem("currentUser", JSON.stringify(currentUser));

timerFunc();

username.textContent = currentUser.username ? currentUser.username : "Username";

const renderExample = (data: any) => {
  num1.textContent = data.num1;
  num2.textContent = data.num2;
  operator.textContent = data.operator;
  result.focus();
};

const animateDiv = () => {
  anime({
    targets: ".game__playboard",
    translateX: [
      { value: -window.innerWidth },
      { value: window.innerWidth },
      { value: 0 },
    ],
    opacity: [{ value: "0" }, { value: "0" }, { value: "1" }],
    easing: "spring(0, 60, 100, 0)",
  });
};

const animateScore = (element: string) => {
  anime({
    targets: element,
    translateY: [{ value: 20 }, { value: -20 }],
    opacity: [{ value: "0" }, { value: "1" }, { value: "0" }],
    easing: "spring(0, 100, 100, 0)",
  });
};

let win = 0;
let example = generateExample();
renderExample(example);

result.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (Number(result.value) === Number(example.result)) {
      win += 1;
      currentUser.right += 1;
      animateDiv();
      animateScore(".win-plus");
    } else {
      win -= 1;
      currentUser.wrong += 1;
      animateDiv();
      animateScore(".win-minus");
    }
    win = win < 0 ? 0 : win;
    currentUser.score = win;
    winElement.textContent = String(win);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    const leaders = updateLeaderBoard();
    localStorage.setItem("leaders", JSON.stringify(leaders));
    result.value = "";
    example = generateExample();
    renderExample(example);
  }
});

stopButton.addEventListener("click", () => stopGame());
