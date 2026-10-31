// Employee Bonus Calculator
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("EMPLOYEE BONUS REPORT");

for (const employee of employees) {
    try {
        // Validate required properties before converting their values.
        if (!employee || !employee.name || employee.salary === undefined || employee.years === undefined) {
            throw new Error("Missing employee name, salary, or years property.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new TypeError("Salary and years must convert to valid numbers.");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalSalary = salary + bonus;

        console.log(
            `${employee.name}: Salary=₹${salary.toFixed(2)}, ` +
            `Experience=${years} years, Bonus=₹${bonus.toFixed(2)}, ` +
            `Total=₹${totalSalary.toFixed(2)}`
        );
    } catch (error) {
        console.error(`Could not process employee: ${error.message}`);
    }
}

// "use strict" prevents accidental creation of undeclared global variables.
