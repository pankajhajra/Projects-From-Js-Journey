let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");


const p = document.createElement('p');

let preGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()  //take
        const guess = parseInt(userInput.value)
        validateGuess(guess); //
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid number')
    } else if (guess < 1) {
        alert('Please Enter a Number more then 1')
    } else if (guess > 100) {
        alert('Please Enter a Number less then 100')
    } else {
        preGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        } else {
            // displayGuess(guess)
              ///
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage('You Guessed it ! Right ')
        endGame()
    } else if (guess < randomNum) {
        displayMessage('NUmber is TOO low')
    } else if (guess > randomNum) {
        displayMessage("Number is TOOO HIgh !")
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(messsage) {
    lowHi.innerHTML = `<h2> ${messsage}</h2>`
}

function endGame() {
    userInput.value = '' //clean Value 
    userInput.setAttribute('disabled', ''); //key-value
    p.classList.add('button') //behave like a button 
    p.innerHTML ='<h2 id ="newGame">Start new Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {   /// start new Game clickable 
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        preGuess = []
        newGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowHi.innerHTML = '';
        playGame = true;
    })
}
