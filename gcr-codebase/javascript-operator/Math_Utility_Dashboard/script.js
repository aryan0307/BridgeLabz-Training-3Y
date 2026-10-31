// Number used for the mathematical calculations.
const x = 16.75;

// Perform the requested Math operations.
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Template literal formats all results into one summary.
const summary = `Input: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(4)}
Cube: ${cube.toFixed(4)}
Random number (10–50): ${randomNumber}`;

console.log(summary);
document.getElementById("output").textContent = summary;
