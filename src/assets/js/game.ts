import "../scss/main.scss";

const num1 = document.querySelector('.num-1')
const num2 = document.querySelector('.num-2')
const operator = document.querySelector('.operator')
const result = document.querySelector('.result')
const goBtn = document.querySelector('#go')
const winElement = document.querySelector('.win')

// const getRandom = (min, max) => {
//   return Math.round(Math.random() * (max - min) + min)
// }

// const operators = ['+', '-', '*']

// const sum = (a, b, operator) => {
//   if (operator === '+') return a + b
//   if (operator === '-') return a - b
//   return a * b
// }

// const generateExample = () => {
//   const num1 = getRandom(1, 10)
//   const num2 = getRandom(1, 10)
//   const operator = operators[getRandom(0, 2)]
//   const result = sum(num1, num2, operator)

//   return { num1, num2, operator, result }
// }

// const renderExample = (data) => {
//   num1.textContent = data.num1
//   num2.textContent = data.num2
//   operator.textContent = data.operator
// }

// let win = 0
// let example = generateExample()
// renderExample(example)

// goBtn.addEventListener('click', () => {
//   if (!result.value && result.value !== 0) return
//   win += Number(result.value) === Number(example.result) ? 1 : -1
//   winElement.textContent = win
//   result.value = ''
//   example = generateExample()
//   renderExample(example)
// })