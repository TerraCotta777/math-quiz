import "../scss/main.scss";
import { practiceList, timeAttackList } from "./tag-variables";

const leaders = JSON.parse(localStorage.getItem("leaders")!);

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
  arr.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `<div>${item[0]}</div><div>${item[1]}</div>`;
    container.append(liElement);
  });
};

renderLeaderBoard(sortablePractice.sort(compareScores), practiceList);
renderLeaderBoard(sortableTimeAttack.sort(compareScores), timeAttackList);
