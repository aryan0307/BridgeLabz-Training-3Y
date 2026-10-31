// Smart Calculator
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

// Change this value to test another operation from the operations array.
const selectedOperation = "divide";
let result;

try {
    switch (selectedOperation) {
        case "add":
            result = num1 + num2;
            break;
        case "divide":
            if (num2 === 0) {
                throw new CalculationError("Division by zero is not allowed.");
            }
            result = num1 / num2;
            break;
        case "power":
            result = Math.pow(num1, num2);
            break;
        case "root":
            if (num1 < 0) {
                throw new CalculationError("Square root of a negative number is not supported here.");
            }
            result = Math.sqrt(num1);
            break;
        case "subtract":
            result = num1 - num2;
            break;
        default:
            throw new InvalidOperationError(`Unknown operation: ${selectedOperation}`);
    }

    console.log(`Operation: ${selectedOperation}`);
    console.log(`Inputs: ${num1}, ${num2}`);
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(`Calculator error [${error.name}]: ${error.message}`);
    console.log(`Summary: ${selectedOperation} could not be completed.`);
}
