'use strict';
// background colour for correct guess - #60b347
// 🎉 Correct Number!
// 📉 Too low!
// 📈 Too high!

// state variables
let winNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// selecting DOM elements
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');

// Helper functions

const noNumberMessage = function () {
  message.textContent = '⛔ No number!';
};

// Testing if correct elements selected
// btnCheck.addEventListener('click', () => {
//   const guessValue = Number(document.querySelector('.guess').value);
//   console.log(guessValue);
// });

btnCheck.addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);
  // If there is no value
  if (!guessValue) noNumberMessage();
  // check if guessed answer is correct
});

// if not

// init function
const init = function () {
  console.log('Application initialized');
};

init();
