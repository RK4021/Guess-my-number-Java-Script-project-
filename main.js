'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Answer!'

document.querySelector('.score').textContent = 13;
document.querySelector('.number').textContent = 12;

document.querySelector('.input').value = 23;

*/

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * score) + 1;


function displayMessage(message) {

    document.querySelector('.message').textContent = message;

}




document.querySelector('.check').addEventListener('click', function () {


    const guess = Number(document.querySelector('.input').value);


    //when there is no input
    if (!guess)
        document.querySelector('.message').textContent = '⛔No number!'



    //when player wins
    else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = '🎉Correct Answer!'
        displayMessage('🎉Correct Answer!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.high__score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#42855b';
        document.querySelector('.number').style.width = '25rem';

        if (score > highScore)
            highScore = score;

        document.querySelector('.high__score').textContent = highScore;

    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
            score--;
            document.querySelector('.score').textContent = score;

        }

        else {
            displayMessage('😔Lost the game!');
            document.querySelector('.score').textContent = 0;


        }

    }

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * score) + 1;
    document.querySelector('.number').style.width = '20rem';
    //document.querySelector('.message').textContent = '🤔Start guessing...'
    displayMessage('🤔Start guessing...');
    document.querySelector('.input').value = '';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';




});

