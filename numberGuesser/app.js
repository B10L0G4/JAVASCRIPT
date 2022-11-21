/*
Game Function

- PLayer must guess a number between a min and max
- Player gets a certain amount of guess
- Modify player of guesses remaing
- Modify the player of the correct answer if loose
- Let player choose to play again 
*/ 
// Game values 
let nin = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// Ui Elements 
const game = document.querySelector('#game');
      minNim = document.querySelector('.min-num');
      maxNum = document.querySelector('.max-num');
      guessBtn = document.querySelector('#guess-btn');
      guessInput = document.querySelector('#guess-input');
      message = document.querySelector('.message');
// Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;
// Listen for games 
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

// Validate
if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}
// Check if won
if (guess === winningNum){
    // Disable input
    guessInput.disabled = true;
    // Chande border color
    guessInput.style.borderColor = 'green';
    //Set message
    setMessage(`${winningNum}is correct, YOU WIN`, 'green');
} else {
}
});
// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}