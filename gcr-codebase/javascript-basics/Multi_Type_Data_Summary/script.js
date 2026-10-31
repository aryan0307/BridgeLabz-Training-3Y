// Q2: Multi-Type Data Summary
const userName = "Aryan";
const age = 20;
const isStudent = true;
const skills = ["JavaScript", "Java", "Python"];
const student = { name: "Aryan", course: "B.Tech CSE" };
const middleName = null;
let optionalValue;

const entries = [
    { label: "String", value: userName, type: typeof userName },
    { label: "Number", value: age, type: typeof age },
    { label: "Boolean", value: isStudent, type: typeof isStudent },
    { label: "Array", value: JSON.stringify(skills), type: Array.isArray(skills) ? "array" : typeof skills },
    { label: "Object", value: JSON.stringify(student), type: typeof student },
    { label: "Null", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "Undefined", value: String(optionalValue), type: typeof optionalValue }
];

// Print the complete report in one console.table() statement.
console.table(entries);
document.getElementById("output").textContent =
    entries.map(item => `${item.label}: ${item.value} (type: ${item.type})`).join("\n");
