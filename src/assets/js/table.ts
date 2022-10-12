import anime from "animejs";
import "../scss/main.scss";
import {
  leaderboardTrigger,
  practiceList,
  timeAttackList,
} from "./tag-variables";
import { User } from "./types";

const leaders = JSON.parse(localStorage.getItem("leaders")!);
const currentUser: User = JSON.parse(localStorage.getItem("currentUser")!);

const compareScores = (a: [string, number], b: [string, number]) => {
  return b[1] - a[1];
};

let sortablePractice: [string, number][] = Object.entries(leaders.practice);
let sortableTimeAttack: [string, number][] = Object.entries(
  leaders["time-attack"]
);

const renderLeaderBoard = (
  arr: [string, number][],
  container: HTMLUListElement
) => {
  arr.forEach((item, index) => {
    const liElement = document.createElement("li");
    liElement.classList.add("leader");
    liElement.innerHTML = `<div><span>${index + 1}!   </span>${
      item[0]
    }</div><div>${item[1]}</div>`;
    container.append(liElement);
  });
};

renderLeaderBoard(sortablePractice.sort(compareScores), practiceList);
renderLeaderBoard(sortableTimeAttack.sort(compareScores), timeAttackList);

const clearBoard = () => {
  leaderboardTrigger.forEach((trigger) => {
    trigger.classList.remove("active");
    document
      .querySelector(`.table__${trigger.value}`)
      ?.classList.remove("active");
  });
};

document
  .querySelector(`.table__${currentUser.gameMode}`)
  ?.classList.add("active");

leaderboardTrigger.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    clearBoard();
    trigger.classList.add("active");
    document.querySelector(`.table__${trigger.value}`)?.classList.add("active");
    anime({
      targets: `.table__${trigger.value}`,
      translateY: [{ value: window.innerHeight }, { value: 0 }],
      opacity: [{ value: "0" }, { value: "1" }],
      easing: "spring(0, 60, 100, 0)",
    });
  });
});
