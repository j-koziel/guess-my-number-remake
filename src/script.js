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
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');

// init function
const init = function () {
  console.log('Application initialized');
  guess.value = '';
};
init();

// Helper functions
const checkNumber = function (guessValue) {
  // If there is no number
  if (!guessValue || guessValue < 0) {
    message.textContent = '⛔ Invalid number!';
  } else if (guessValue === winNumber) {
    message.textContent = '🎉 Correct Number!';
    document.body.style.backgroundColor = '#60b347';
  } else if (guessValue > winNumber) {
    message.textContent = '📈 Too high!';
  } else if (guessValue < winNumber) {
    message.textContent = '📉 Too low!';
  }
};

// Testing if correct elements selected
// btnCheck.addEventListener('click', () => {
//   const guessValue = Number(document.querySelector('.guess').value);
//   console.log(guessValue);
// });

btnCheck.addEventListener('click', () => {
  const guessNumber = Number(guess.value);
  console.log(guessNumber);

  checkNumber(guessNumber);
});
