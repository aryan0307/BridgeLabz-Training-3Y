// Store numbers from 1 through 30 and their classifications.
const results = [];

for (let number = 1; number <= 30; number++) {
    let classification;

    // Check FizzBuzz first so multiples of both 3 and 5 are identified.
    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    // push() adds each classification to the results array.
    results.push(`${number}: ${classification}`);
}

const summary = results.join("\n");
console.log(summary);
document.getElementById("output").textContent = summary;
