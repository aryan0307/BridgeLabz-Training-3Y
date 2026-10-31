// Strict Mode Showdown
// This file intentionally does not start with "use strict" so the sloppy-mode
// demonstration can run. Strict behavior is demonstrated in a separate function.

function sloppyModeDemo(a, a) {
    // Duplicate parameters are allowed in a non-strict function.
    total = 10; // Creates/updates a global property in classic sloppy scripts.
    console.log("Sloppy mode duplicate parameters:", a);
    console.log("Sloppy mode total:", total);
    delete globalThis.total;
}

sloppyModeDemo(5, 10);

// A function can opt into strict mode independently.
function strictModeDemo() {
    "use strict";

    // The following operations would throw in strict mode:
    // total = 10;       // ReferenceError: total is not declared.
    // delete total;     // SyntaxError: deleting an unqualified identifier.
    // function demo(a, a) {} // SyntaxError: duplicate parameter name.

    const total = 10; // Correct: explicitly declared with block scope.
    console.log("Strict mode total:", total);
}

strictModeDemo();

// Strict-mode observations:
// - Sloppy mode allows duplicate parameter names in ordinary functions.
// - Strict mode rejects duplicate parameter names.
// - Strict mode rejects assignment to undeclared variables.
// - Strict mode rejects delete on an unqualified identifier.
// - ES6 solution: use const/let, unique parameter names, and avoid deleting variables.
