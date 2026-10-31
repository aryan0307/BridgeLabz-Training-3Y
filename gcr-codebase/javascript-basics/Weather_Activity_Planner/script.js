// Q5: Weather Activity Planner
const temperature = 28; // Celsius
const isRaining = false;
const windSpeed = 12; // km/h

let suggestion;

// Check rain first, then temperature and wind conditions.
if (isRaining) {
    suggestion = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    suggestion = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    suggestion = "Too cold and windy — stay home.";
} else if ((temperature >= 15 && temperature <= 35) || windSpeed <= 20) {
    suggestion = "Perfect day for a walk.";
} else {
    suggestion = "Check the weather conditions before heading out.";
}

const report = `Temperature: ${temperature}°C
Raining: ${isRaining}
Wind speed: ${windSpeed} km/h

Suggestion: ${suggestion}`;

console.log(report);
document.getElementById("output").textContent = report;
