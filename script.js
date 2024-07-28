'use strict';

// Function to get a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initial variables
let randomNumber = getRandomNumber(1, 20);
let score = 20;
let highscore = 0;

// Function to update the message, score, and background color based on the guess
function updateMessageAndScore(number) {
    let message = '';
    let bgColor = '#f6f5f5';

    if (!number || number < 1 || number > 20) {
        message = "Enter a valid Number between 1 to 20 ...";
    } else if (number === randomNumber) {
        message = "Correct Number ...";
        document.querySelector('.number').textContent = randomNumber;
        bgColor = '#60b347';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (number < randomNumber) {
        message = "Too low ...";
    } else if (number > randomNumber) {
        message = "Too High ...";
    }

    // Update DOM elements
    document.querySelector('.message').textContent = message;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = bgColor;

    // Handle score decrement and game over message
    if (number !== randomNumber) {
        score--;
        if (score <= 0) {
            document.querySelector('.message').textContent = "You have lost the game. Press again ...";
        }
    }
}

// Event listener for the "Check" button
document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guess').value);
    updateMessageAndScore(guessNumber);
});

// Event listener for the "Again" button
document.querySelector('.again').addEventListener('click', function () {
    // Reset variables
    randomNumber = getRandomNumber(1, 20);
    console.log(randomNumber);
    score = 20;

    // Reset DOM elements
    document.querySelector('.message').textContent = "Start Guessing Number ...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#f6f5f5';
});
