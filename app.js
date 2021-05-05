
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let randomNumber = Math.ceil(Math.random() * 20);
let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Last guess ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 4) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'FAIL!';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.disabled = true;
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetButton);
}