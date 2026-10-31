// Q6: Progressive Discount System
// Change this sample amount or enter a new value in the prompt.
const enteredAmount = prompt("Enter total purchase amount:", "6500");
const purchaseTotal = Number(enteredAmount);

if (enteredAmount === null || enteredAmount.trim() === "" ||
    !Number.isFinite(purchaseTotal) || purchaseTotal < 0) {
    document.getElementById("output").textContent = "Please enter a valid non-negative amount.";
} else {
    let discountPercentage;

    if (purchaseTotal >= 10000) {
        discountPercentage = 25;
    } else if (purchaseTotal >= 5000) {
        discountPercentage = 15;
    } else if (purchaseTotal >= 2000) {
        discountPercentage = 5;
    } else {
        discountPercentage = 0;
    }

    const discountAmount = purchaseTotal * discountPercentage / 100;
    const finalPrice = Math.round(purchaseTotal - discountAmount);

    const report = `Original total: ₹${Math.round(purchaseTotal)}
Discount: ${discountPercentage}%
Final price: ₹${finalPrice}`;

    console.log(report);
    document.getElementById("output").textContent = report;
}
