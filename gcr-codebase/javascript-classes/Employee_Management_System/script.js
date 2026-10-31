class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    applyBonus(percent) {
        if (percent < 0) throw new Error("Bonus cannot be negative.");
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aarav", "IT", 50000),
    new Employee(2, "Meera", "HR", 42000),
    new Employee(3, "Kabir", "Sales", 38000),
    new Employee(4, "Anaya", "Finance", 55000),
    new Employee(5, "Rohan", "IT", 47000)
];
employees[0].applyBonus(10); // Apply a 10% monthly salary bonus to one employee.

function displayPayout() {
    const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
    document.getElementById("employees").innerHTML = employees.map(employee =>
        `<li>${employee.name} (${employee.department}): ₹${employee.getAnnualSalary().toLocaleString("en-IN")} per year</li>`
    ).join("");
    document.getElementById("total").textContent = `Total annual company payout: ₹${totalAnnualPayout.toLocaleString("en-IN")}`;
    console.log("Total annual payout:", totalAnnualPayout);
}
document.getElementById("calculate").addEventListener("click", displayPayout);
console.log("Annual salaries:", employees.map(employee => ({ name: employee.name, annualSalary: employee.getAnnualSalary() })));
