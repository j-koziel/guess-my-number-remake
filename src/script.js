'use strict';

// state variables
let winNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// selecting DOM elements
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');

const guess = document.querySelector('.guess');
const message = document.querySelector('.message');

// init function
const init = function () {
  console.log('Application initialized');
  guess.value = '';
};
init();

// check function
const checkNumber = function (guessValue) {
  // If there is no number
  if (!guessValue || guessValue < 0) {
    message.textContent = '⛔ Invalid number!';
  } else if (guessValue === winNumber) {
    message.textContent = '🎉 Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    highscore = score;
    highScoreElement.textContent = highscore;
  } else if (guessValue > winNumber) {
    message.textContent = '📈 Too high!';
    score--;
    scoreElement.textContent = score;
  } else if (guessValue < winNumber) {
    message.textContent = '📉 Too low!';
    score--;
    scoreElement.textContent = score;
  }
};

// Handler functions
btnCheck.addEventListener('click', () => {
  const guessNumber = Number(guess.value);
  console.log(guessNumber);

  checkNumber(guessNumber);
});
