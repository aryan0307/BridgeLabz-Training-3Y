// Q10: Citizen Eligibility Validator
// Change these values to test different eligibility conditions.
const age = 19;
const isCitizen = true;

let result;

// Nested if-else checks citizenship first, then age.
if (isCitizen) {
    if (age >= 21) {
        result = "Eligible for all services.";
    } else if (age >= 18 && age <= 20) {
        result = "Eligible to vote only.";
    } else {
        result = "Not eligible yet.";
    }
} else {
    if (age >= 18) {
        result = "Only age criteria met.";
    } else {
        result = "Not eligible yet.";
    }
}

const report = `Age: ${age}
Citizen: ${isCitizen}
Result: ${result}`;

console.log(report);
document.getElementById("output").textContent = report;
