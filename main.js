// -player must guess a number between min and max
// -players get a certain amount of guesses
// - Notify the player of the remaining gussess


let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

// assigning min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
// game.addEventListener('mousedown', function(e){
//     if(e.target.className === 'play-again'){
//         window.location.reload();
//     }
// });


guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess<min || guess>max) {
        setMessage(`guess a number between ${min} and ${max}`, 'red');
    }
    // check if user won
    if(guess === winningNum){
        // game over - won
        gameOver(`${winningNum} is correct, YOU WIN!`, true);    
    } else{
        // wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
            // game over - lost
            gameOver(`Game over, You lost. The correct number was ${winningNum}`, false);
        } else {
            // game continue answer wrong

            // tell user it is erong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
            // change border color
            guessInput.style.borderColor='red';
            // clear input
            guessInput.value='';
        }
    }
});

// game over
function gameOver(msg, won){

    let color;
    won === true ? color = 'green' : color = 'red';

    // if user won disable input 
    guessInput.disabled = true;

    // then change the border color to green
    guessInput.style.borderColor = color;
    // set text color
    message.style.color = color;

    // set message
    setMessage(msg);

    // play again 

    // guessBtn.value = 'Play Again';
    // guessBtn.className += 'play-again';
}

// get winning number
function getRandomNum(min, max){
    console.log(Math.floor(Math.random()*(max-min+1)+min));
    return Math.floor(Math.random()*(max-min+1)+min);
}


// setmessage function
function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}





