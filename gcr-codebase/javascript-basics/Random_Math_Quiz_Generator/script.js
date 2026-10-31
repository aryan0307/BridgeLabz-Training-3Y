// Q9: Random Math Quiz Generator
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Use switch to perform the selected arithmetic operation.
switch (operator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;
    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;
    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;
    case "/":
        correctAnswer = Number((firstNumber / secondNumber).toFixed(2));
        break;
}

const formattedAnswer = operator === "/"
    ? correctAnswer.toFixed(2)
    : correctAnswer;

const report = `Question: ${firstNumber} ${operator} ${secondNumber}
Correct answer: ${formattedAnswer}`;

console.log(report);
document.getElementById("output").textContent = report;
