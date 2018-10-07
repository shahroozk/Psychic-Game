
//all choices available for computer to randomly pick from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// all variables 
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = undefined;



var newGuessesLeft = function() {
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//computer chooses 
var newLetterToGuess = function() {
    letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(letterToGuess);
};

//store all keys pressed 
var newGuessesSoFar = function() {
    document.querySelector('#userGuess').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// reset everything after win or lose
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];

    newLetterToGuess();
    newGuessesLeft();
    newGuessesSoFar();
}


document.onkeyup = function(event) {
    guessesLeft--;

    console.log(event.key);
    console.log(guessedLetters);

    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    
    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

  
    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#win').innerHTML = "Wins: " + wins;
            alert("Wow! You are psychic! Try another!");
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
        alert("NO, you're not psychic... try again!");

        reset();
    }
};