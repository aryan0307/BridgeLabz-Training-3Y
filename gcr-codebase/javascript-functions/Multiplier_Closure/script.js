function makeMultiplier(multiplier) {
    // The returned function remembers multiplier from its outer lexical scope.
    return function (number) {
        return number * multiplier;
    };
}

document.getElementById("runButton").addEventListener("click", () => {
    const multiplier = Number(document.getElementById("multiplier").value);
    const number = Number(document.getElementById("number").value);
    const multiply = makeMultiplier(multiplier);
    const result = multiply(number);
    document.getElementById("output").textContent = `${number} × ${multiplier} = ${result}`;
    console.log(result);
});

// Example: const triple = makeMultiplier(3); console.log(triple(5)); // 15
// Closure: the inner function retains access to multiplier after makeMultiplier returns.
