// Q3: Monthly Expense Tracker
const expenses = {
    food: 5000,
    travel: 2000,
    rent: 12000,
    bills: 2500,
    leisure: 1500
};

let total = 0;

// Add each category expense to the total.
for (const category in expenses) {
    total += expenses[category];
}

const average = total / Object.keys(expenses).length;
const taxRate = 0.10;
total += total * taxRate; // Add 10% tax using an assignment operator.

const report = `Food: ₹${expenses.food.toFixed(2)}
Travel: ₹${expenses.travel.toFixed(2)}
Rent: ₹${expenses.rent.toFixed(2)}
Bills: ₹${expenses.bills.toFixed(2)}
Leisure: ₹${expenses.leisure.toFixed(2)}

Total before tax: ₹${(total / 1.10).toFixed(2)}
Average per category: ₹${average.toFixed(2)}
Final amount after 10% tax: ₹${total.toFixed(2)}`;

console.log(report);
document.getElementById("output").textContent = report;
