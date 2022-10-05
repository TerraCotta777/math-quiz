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

export const lastUser = JSON.parse(localStorage.getItem("lastUser")!);
lastUser.right = 0;
lastUser.wrong = 0;
lastUser.score = 0;
localStorage.setItem("lastUser", JSON.stringify(lastUser));

timerFunc();

stopButton.addEventListener("click", () => {
	window.location.href = "/end.html";
});

username.textContent = lastUser.username ? lastUser.username : "Username";


const renderExample = (data: any) => {
  num1.textContent = data.num1;
  num2.textContent = data.num2;
  operator.textContent = data.operator;
	console.log(data.num1, data.num2, data.result)
  result.focus();
};

let win = 0;
let example = generateExample();
renderExample(example);

result.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (Number(result.value) === Number(example.result)) {
      win += 1;
      lastUser.right += 1;
    } else {
      win -= 1;
      lastUser.wrong += 1;
    }
    win = win < 0 ? 0 : win;
		lastUser.score = win;
    winElement.textContent = String(win);
    localStorage.setItem("lastUser", JSON.stringify(lastUser));
    result.value = "";
    example = generateExample();
    renderExample(example);
  }
});
