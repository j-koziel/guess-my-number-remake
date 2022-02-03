'use strict';
// background colour for correct guess - #60b347

// state variables
let winNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// selecting DOM elements
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');

// Testing if correct elements selected
btnCheck.addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue);
});

// check if guessed answer is correct

// if not

// init function
