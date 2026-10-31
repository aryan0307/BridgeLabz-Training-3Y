// Q1: Personalized Login Greeting
const userName = "Aryan";
const currentHour = new Date().getHours();

// Select a greeting based on the current time.
let greeting;
if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
document.getElementById("output").textContent =
    `${greeting}\nCurrent hour: ${currentHour}`;
