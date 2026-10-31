const numbers = [1, 2, 3, 4];

// operation is a callback that receives each number.
function applyOperation(numbers, operation) {
    return numbers.map(number => operation(number));
}

const doubledNumbers = applyOperation(numbers, number => number * 2);
const squaredNumbers = applyOperation(numbers, number => number ** 2);

function displayResults() {
    const result = `Original: ${numbers}\\nDoubled: ${doubledNumbers}\\nSquared: ${squaredNumbers}`;
    document.getElementById("output").textContent = result;
    console.log(result);
}
document.getElementById("runButton").addEventListener("click", displayResults);
