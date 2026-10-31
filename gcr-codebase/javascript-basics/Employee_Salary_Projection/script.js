// Q8: Employee Salary Projection
let currentSalary = 50000;
const annualIncrementRate = 8; // Percentage
const salaryRows = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * annualIncrementRate / 100;
    currentSalary = Math.round(currentSalary * 100) / 100;

    salaryRows.push({
        Year: year,
        "Annual Salary (₹)": currentSalary.toFixed(2)
    });
}

// Display all five yearly projections in one table.
console.table(salaryRows);
document.getElementById("output").textContent =
    salaryRows.map(row => `Year ${row.Year}: ₹${row["Annual Salary (₹)"]}`).join("\n");
