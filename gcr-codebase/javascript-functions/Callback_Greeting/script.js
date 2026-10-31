// The callback runs after the greeting has been displayed.
function showEndMessage() {
    console.log("Welcome to the course!");
    document.getElementById("output").textContent += "Welcome to the course!\\n";
}

function greetUser(name, callback) {
    const greeting = `Hello ${name}`;
    console.log(greeting);
    document.getElementById("output").textContent = greeting + "\\n";
    callback();
}

document.getElementById("runButton").addEventListener("click", () => {
    greetUser("Aryan", showEndMessage);
});
