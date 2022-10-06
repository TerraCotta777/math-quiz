// Variables from index page
export const alertMessage = document.querySelector(".alert") as HTMLDivElement;
export const form = document.querySelector(".form") as HTMLFormElement;
export const nameInput = form?.querySelector(
  ".form__name-input"
) as HTMLInputElement;
export const startGameButton = form?.querySelector(
  ".form__button"
) as HTMLButtonElement;


// Variables from game page
export const gameContainer = document.querySelector(".game") as HTMLDivElement;
export const username = document.querySelector(".username") as HTMLDivElement;
export const num1 = document.querySelector(".num-1") as HTMLDivElement;
export const num2 = document.querySelector(".num-2") as HTMLDivElement;
export const operator = document.querySelector(".operator") as HTMLDivElement;
export const result = document.querySelector(".result") as HTMLInputElement;
export const winElement = document.querySelector(".win") as HTMLDivElement;
export const stopButton = document.querySelector('.stopButton') as HTMLButtonElement;
export const clock = document.querySelector('.clock') as HTMLDivElement;
export const timerCount = document.querySelector('.count') as HTMLSpanElement;


// Variables from end page
export const score = document.querySelector('.score') as HTMLSpanElement;
export const rightAnswers = document.querySelector('.right') as HTMLSpanElement;
export const wrongAnswers = document.querySelector('.wrong') as HTMLSpanElement;
export const usernameEndPage = document.querySelector('.username-end-page') as HTMLSpanElement;


// Variables from table page
export const practiceList = document.querySelector('.practice-leaders') as HTMLUListElement;
export const timeAttackList = document.querySelector('.time-attack-leaders') as HTMLUListElement;