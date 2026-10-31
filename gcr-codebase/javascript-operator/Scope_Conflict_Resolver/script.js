// Global bonus is accessible inside functions.
let bonus = 5000;

// The isPermanent parameter is local to calculateSalary().
function calculateSalary(isPermanent) {
    let salary = 40000;

    // Add the global bonus only when the local flag is true.
    let totalSalary = salary;
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${totalSalary}`);
    return totalSalary;
}

// Test both local values.
const permanentTotal = calculateSalary(true);
const temporaryTotal = calculateSalary(false);

// Changing the local parameter does not change the global bonus.
console.log(`Global bonus after both calls: ₹${bonus}`);
console.log(`Global isPermanent: ${typeof isPermanent}`); // "undefined"

document.getElementById("output").textContent =
    `Permanent employee total: ₹${permanentTotal}\n` +
    `Temporary employee total: ₹${temporaryTotal}\n` +
    `Global bonus remains: ₹${bonus}\n` +
    `Global isPermanent: ${typeof isPermanent}`;
