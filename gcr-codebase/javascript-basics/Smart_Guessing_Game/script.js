// Q7: Smart Guessing Game
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 27; // Change this test value to try different guesses.

let message;

// Nested conditions classify the guess.
if (userGuess === secretNumber) {
    message = "Correct guess!";
} else {
    const difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
        message = "Very close!";
    } else if (userGuess > secretNumber) {
        message = "Too high";
    } else {
        message = "Too low";
    }
}

const report = `Your guess: ${userGuess}
Secret number: ${secretNumber}
Result: ${message}`;

console.log(report);
document.getElementById("output").textContent = report;
