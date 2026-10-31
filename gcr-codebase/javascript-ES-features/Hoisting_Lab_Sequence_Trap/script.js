// Hoisting Lab: The Sequence Trap
"use strict";

// Original sequence: var is hoisted and initialized as undefined.
// Function declarations are hoisted with their function body.
// let is hoisted but remains in the temporal dead zone until initialized.

console.log("Original sequence:");
console.log(score); // undefined: var declaration is hoisted.
announce();         // Function declaration can be called before its position.

var score = 50;
function announce() {
    console.log("Game started");
}

let status = "ready";
startGame();

function startGame() {
    console.log(status); // "ready": called after status initialization.
}

// Corrected version using predictable declaration order.
console.log("Corrected sequence:");

const correctedScore = 50;
const correctedStatus = "ready";

const announceWithArrow = () => {
    console.log("Game started (arrow function)");
};

const startGameWithArrow = () => {
    console.log(`Score: ${correctedScore}, Status: ${correctedStatus}`);
};

console.log(correctedScore);
announceWithArrow();
startGameWithArrow();

// Arrow functions assigned to const are not callable before initialization.
