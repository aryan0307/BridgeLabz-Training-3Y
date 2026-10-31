// Security conditions for the smart home.
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// All four required conditions must be true for the system to be secure.
function checkSecurity() {
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // The OR and NOT operators are also used to identify any unsafe condition.
    const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

    return isSecure && !isUnsafe ? "Secure" : "Unsafe";
}

const firstResult = checkSecurity();

// Change a condition and test a second outcome.
isWindowClosed = false;
const secondResult = checkSecurity();

const summary = `Initial conditions: Secure system? ${firstResult}
After opening the window: ${secondResult}

Final values:
Door locked: ${isDoorLocked}
Window closed: ${isWindowClosed}
Alarm on: ${isAlarmOn}
Owner inside: ${isOwnerInside}`;

console.log(summary);
document.getElementById("output").textContent = summary;
