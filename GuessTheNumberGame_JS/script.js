// Generate a Random Number
let randomNumber = Math.floor(Math.random() * 100 + 1);

// Counting the number of guesses made for correct Guess
let guess = 1;

function checkRandomNumber() {

    // Number guessed by user
    let gnumber = document.getElementById("guessField").value;

    if (gnumber == randomNumber) {
        document.getElementById("guessText").innerHTML = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT";
        document.getElementById("NumberOfAttempts").innerHTML = "<p>Number Of Attempts: " + guess + "</p>";
        document.getElementById("HighScore").innerHTML = "<p>Score: " + (100 - guess) + "</p>";
    }
    else if (gnumber > randomNumber) {
        guess += 1;
        document.getElementById("guessText").innerHTML = "OOPS!! TRY A SMALLER NUMBER";
    }
    else {
        guess += 1;
        document.getElementById("guessText").innerHTML = "OOPS!! TRY A GREATER NUMBER";
    }
}
