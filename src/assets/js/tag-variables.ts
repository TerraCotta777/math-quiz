// Variables from index page
export const alertMessage = document.querySelector(".alert") as HTMLDivElement;
export const form = document.querySelector(".form") as HTMLFormElement;
export const nameInput = form.querySelector(
  ".form__name-input"
) as HTMLInputElement;
export const gameMode = [
  ...Array.from(form.querySelectorAll(".form__game-mode")),
];
export const startGameButton = form.querySelector(
  ".form__button"
) as HTMLButtonElement;


// Variables from game page
export const num1 = document.querySelector(".num-1") as HTMLDivElement;
export const num2 = document.querySelector(".num-2") as HTMLDivElement;
export const operator = document.querySelector(".operator") as HTMLDivElement;
export const result = document.querySelector(".result") as HTMLInputElement;
export const winElement = document.querySelector(".win") as HTMLDivElement;