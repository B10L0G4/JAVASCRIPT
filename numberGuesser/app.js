/*
Game Function

- PLayer must guess a number between a min and max
- Player gets a certain amount of guess
- Modify player of guesses remaing
- Modify the player of the correct answer if loose
- Let player choose to play again 
*/ 
// Game values 
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// Ui Elements 
const game = document.querySelector('#game');
      minNum = document.querySelector('.min-num');
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
    //let guess = guessInput.valueIsAsNumber;

// Validate
if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}
// Check if won
if (guess === winningNum){
    //Game over Won 
    gameOver(true, `${winningNum} is correct, YOU WIN`);

} else {
    //wrong number 
    guessesLeft -= 1;
    if(guessesLeft === 0){
    // Game Over Lost 
    gameOver(false, `GAME OVER,  YOU LOSE , The corret number was ${winningNum}`)
    } else {
    // Change botder color 
    guessInput.style.borderColor = 'red';
    //Clear Input 
    guessInput.value = '';
    //Set message
    setMessage(`${guess} is not corret, ${guessesLeft} guesses left`, 'red');
    }
}
});
// GME OVER 
function gameOver(won, msg){
    let color 
    won === true ? color = 'green' : color = 'red';
    // Disable input 
    guessInput.disable = true;
    // Change border color 
    guessInput.style.borderColor = color;
    // text color 
    message.style.color = color;
    // set message
    setMessage(msg);
}
// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}