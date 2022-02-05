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
  guess.value = '';
  score = 20;
};
init();

// check function
const checkNumber = function (guessValue) {
  // If there is no number
  if (!guessValue || guessValue < 0) {
    message.textContent = '⛔ Invalid number!';

    // if the guess is correct
  } else if (guessValue === winNumber) {
    message.textContent = '🎉 Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    highscore = score;
    highScoreElement.textContent = highscore;

    // if the guess is greater than the winning number
  } else if (guessValue > winNumber) {
    message.textContent = '📈 Too high!';
    if (score <= 0) {
      message.textContent = `⛔ You've run out of tries. Go again.`;
    } else {
      score--;
      scoreElement.textContent = score;
    }

    // if guess is less than the winning number
  } else if (guessValue < winNumber) {
    message.textContent = '📉 Too low!';
    if (score <= 0) {
      message.textContent = `⛔ You've run out of tries. Go again.`;
    } else {
      score--;
      scoreElement.textContent = score;
    }
  }
};

const again = function () {
  // Reset all values
  winNumber = Math.trunc(Math.random() * 20) + 1;
  guess.value = '';
  document.body.style.backgroundColor = '#222';
  if (highscore > score) highScoreElement.textContent = highscore;
  score = 20;
  scoreElement.textContent = score;
  message.textContent = 'Start guessing...';
};

// Handler functions
btnCheck.addEventListener('click', () => {
  const guessNumber = Number(guess.value);

  checkNumber(guessNumber);
});

btnAgain.addEventListener('click', again);
