// Nested Hoisting and Closures
"use strict";

function outer() {
    // count is hoisted within outer() and initially has the value undefined.
    console.log("Outer count before assignment:", count);

    var count = 5;

    // Inner function has its own local count, which shadows outer count.
    function inner() {
        console.log("Inner count before assignment:", count);
        var count = 10;
        console.log("Inner count after assignment:", count);
    }

    inner();
    console.log("Outer count after inner():", count);
}

outer();

// Arrow-function comparison.
// The arrow function still has its own local var binding; it does not share
// the outer function's count because the local declaration shadows it.
function outerWithArrow() {
    console.log("Arrow example - outer count before assignment:", count);
    var count = 5;

    const innerArrow = () => {
        console.log("Arrow example - inner count before assignment:", count);
        var count = 10;
        console.log("Arrow example - inner count after assignment:", count);
    };

    innerArrow();
    console.log("Arrow example - outer count after innerArrow():", count);
}

outerWithArrow();

// Debug session:
// Set breakpoints on both console.log() calls inside inner/innerArrow.
// Inspect the separate Local scopes and the Call Stack.
// Expected call stack while inside inner(): inner -> outer -> script.
// The arrow function has its own local variables but inherits this/arguments
// lexically from its surrounding scope.
