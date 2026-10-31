// Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidValues = [];
const report = [];

for (let index = 0; index < apiData.length; index++) {
    const originalValue = apiData[index];
    const numberValue = Number(originalValue);
    const booleanValue = Boolean(originalValue);
    const stringValue = String(originalValue);

    // A whitespace-only string is explicitly invalid, even though Number(" ") is 0.
    const isBlankString =
        typeof originalValue === "string" && originalValue.trim() === "";
    const isValidNumber = !Number.isNaN(numberValue) && !isBlankString;

    const details = {
        index,
        original: stringValue,
        number: numberValue,
        boolean: booleanValue,
        string: stringValue,
        status: isValidNumber ? "Valid number" : "Invalid number"
    };

    if (isValidNumber) {
        validNumbers.push(numberValue);
    } else {
        invalidValues.push(originalValue);
    }

    report.push(details);
}

// Print a detailed report and both result arrays.
console.log("DYNAMIC DATA PARSER REPORT");
for (const item of report) {
    console.log(
        `Index ${item.index}: original=${JSON.stringify(item.original)}, ` +
        `Number=${item.number}, Boolean=${item.boolean}, ` +
        `String="${item.string}", Status=${item.status}`
    );
}
console.log("Valid numeric data:", validNumbers);
console.log("Invalid values:", invalidValues);
