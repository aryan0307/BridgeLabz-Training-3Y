// Pyramid Pattern Generator
"use strict";

// Browser prompt is used when available; Node.js falls back to the default.
let userInput = 5;
if (typeof prompt === "function") {
    const enteredValue = prompt("Enter pyramid height (default 5):");
    if (enteredValue !== null && enteredValue.trim() !== "") {
        userInput = Number(enteredValue);
    }
}

// Validate the requested height.
if (!Number.isInteger(userInput) || userInput < 1) {
    console.log("Invalid height. Using default height 5.");
    userInput = 5;
}

// Build the pyramid with let.
console.log("Pyramid using let:");
for (let row = 1; row <= userInput; row++) {
    let pattern = "";
    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }
    console.log(pattern.trimEnd());
}

// Debug observation:
// Set a breakpoint inside the outer loop and watch row, column, and pattern.
// Each let loop variable has block scope and a fresh loop binding.

// Comparison using var: the variable is function-scoped, not block-scoped.
console.log("Pyramid using var:");
for (var varRow = 1; varRow <= userInput; varRow++) {
    var varPattern = "";
    for (var varColumn = 1; varColumn <= varRow; varColumn++) {
        varPattern += "* ";
    }
    console.log(varPattern.trimEnd());
}
console.log("After the var loop, varRow =", varRow);
console.log("After the let loop, row is block-scoped and cannot be accessed here.");
// In strict mode, undeclared loop variables cause ReferenceError.
