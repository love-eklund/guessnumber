// random number generated by computer
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNumber);

// count how many guesses (max 5)
let guessCounter = 0;

// get elements from html
const responseElement = document.getElementById("response");
const inputElement = document.getElementById("numberGuess");
const submitElement = document.getElementById("submitButton");
const prevGuesses = document.getElementById("prevGuesses");

// add click event on button
submitElement.addEventListener("click", compareNumbers);

function compareNumbers() {
    
    // guessed number is converted from string to integer
    const guessedNumber = parseInt(inputElement.value);

    guessCounter += 1; 

    if (guessCounter > 5) {
        responseElement.textContent = "För många gissningar! Bättre lycka nästa gång.";
    } else if (guessedNumber < 1 || guessedNumber > 100) {
        responseElement.textContent = "Vänligen ange ett heltal över 0 och under 101!";
        guessCounter -= 1; // doesn't count as valid guess if out of 1-10 range
    } else if (guessedNumber === randomNumber) {
        responseElement.textContent = "Grattis! " + guessedNumber + " är korrekt!";
        // creating and adding li with the guess
        const myLi = document.createElement("li");
        myLi.textContent = guessedNumber + " (korrekt!)";
        prevGuesses.appendChild(myLi);
    } else if (guessedNumber < randomNumber) {
        responseElement.textContent = "Du behöver gissa högre än " + guessedNumber + ", försök igen.";
        // creating and adding li with the guess
        const myLi = document.createElement("li");
        myLi.textContent = guessedNumber + " (för lågt)";
        prevGuesses.appendChild(myLi);
    } else if (guessedNumber > randomNumber) {
        responseElement.textContent = "Du behöver gissa lägre än " + guessedNumber + ", försök igen.";
        // creating and adding li with the guess
        const myLi = document.createElement("li");
        myLi.textContent = guessedNumber + " (för högt)";
        prevGuesses.appendChild(myLi);
    }

} 