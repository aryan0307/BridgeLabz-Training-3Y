// JSON Audit
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        // Set a breakpoint here to inspect the raw JSON before parsing.
        const parsedEntry = JSON.parse(rawData[index]);

        if (!Object.prototype.hasOwnProperty.call(parsedEntry, "user")) {
            throw new Error('Missing required key: "user".');
        }

        if (!Object.prototype.hasOwnProperty.call(parsedEntry, "age")) {
            throw new Error('Missing required key: "age".');
        }

        const age = Number(parsedEntry.age);
        if (!Number.isFinite(age)) {
            throw new TypeError('The "age" value is not a valid number.');
        }

        cleanData.push({
            ...parsedEntry,
            age
        });
        console.log(`Line ${lineNumber}: valid JSON entry.`);
    } catch (error) {
        errors.push({
            line: lineNumber,
            message: error.message
        });
        console.error(`Line ${lineNumber}: ${error.message}`);
    }
}

// Bonus: filter users under 18 after converting age to Number.
const under18Users = cleanData.filter(user => user.age < 18);

console.log("CLEAN DATA:", cleanData);
console.log("ERROR REPORT:", errors);
console.log("USERS UNDER 18:", under18Users);
console.log(`Valid entries: ${cleanData.length}`);
console.log(`Invalid entries: ${errors.length}`);

// Debug observation: when JSON.parse or validation throws, execution jumps
// immediately to catch; the loop then continues with the next line.
