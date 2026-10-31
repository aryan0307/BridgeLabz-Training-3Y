// Shared counter value in the outer (global) scope.
let count = 0;

// Increase the counter and log its current value.
function increment() {
    count++;
    console.log(`Incremented: ${count}`);
    return count;
}

// Decrease the counter and log its current value.
function decrement() {
    count--;
    console.log(`Decremented: ${count}`);
    return count;
}

// A nested function can access and update count from the outer scope.
function runNestedCounterUpdate() {
    function nestedIncrement() {
        count += 2;
        console.log(`Nested function added 2: ${count}`);
    }

    nestedIncrement();
}

// Simulate clicks by calling the functions manually.
increment();
increment();
decrement();
runNestedCounterUpdate();

const summary = `Counter after simulated clicks: ${count}
Check the browser console for each update.`;

console.log(summary);
document.getElementById("output").textContent = summary;
