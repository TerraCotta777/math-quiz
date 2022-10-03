import "../scss/main.scss";
import { num1, num2, operator, result, winElement } from "./tag-variables";

const getRandom = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const operators = ["+", "-", "*", "/"];

const factors = (number: number): number[] =>
  [...Array(number + 1).keys()].filter(
    (i) => number % i === 0 && i !== 1 && i !== number
  );

const sum = (a: number, b: number, operator: string) => {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  return a / b;
};

const divideFunc = (): number[] => {
  const dividend = getRandom(1, 100);
  let divider = 1;
  const factorsArr = factors(dividend);
  console.log(dividend, factorsArr, "outside if statement");
  if (factorsArr.length > 0) {
    console.log(factorsArr, "inside");
    divider = factorsArr[getRandom(0, factorsArr.length - 1)];
    return [dividend, divider];
  } else {
    return divideFunc();
  }
};

const generateExample = () => {
  let num1 = getRandom(1, 10);
  let num2 = getRandom(1, 10);
  const operator = operators[getRandom(3, 3)];
  if (operator === "/") {
    [num1, num2] = divideFunc();
  } else {
    if (operator === "-") {
      if (num2 > num1) {
        [num1, num2] = [num2, num1];
      }
    }
  }

  const result = sum(num1, num2, operator);

  return { num1, num2, operator, result };
};

const renderExample = (data: any) => {
  num1.textContent = data.num1;
  num2.textContent = data.num2;
  operator.textContent = data.operator;
  result.focus();
};

let win = 0;
let example = generateExample();
renderExample(example);

result.addEventListener("keyup", () => {
  if (result.value.length === String(example.result).length) {
    win += Number(result.value) === Number(example.result) ? 1 : -1;
    win = win < 0 ? 0 : win;
    winElement.textContent = String(win);
    result.value = "";
    example = generateExample();
    renderExample(example);
  }
});
