// Debugging Mystery
"use strict";

// Original code failed because greeting was assigned without declaration.
// Strict mode rejects assignment to an undeclared identifier.

function showMessage() {
    let greeting = "Welcome"; // Local variable declared in function scope.

    // Add greeting to the VS Code Watch panel to inspect its value.
    console.log(greeting);
}

showMessage();

// Debugging notes:
// 1. Set a breakpoint on the console.log() line.
// 2. Start the debugger (F5).
// 3. Inspect greeting in Variables or add it to Watch.
// 4. The Call Stack shows showMessage() above the global/script frame.
// 5. Step Over (F10) to execute the log statement.
