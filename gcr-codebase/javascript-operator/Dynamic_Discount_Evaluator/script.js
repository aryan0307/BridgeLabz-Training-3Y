// Shopping cart represented as an array of objects.
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the cart subtotal before discounts using reduce().
const subtotal = cart.reduce((total, product) => total + product.price, 0);

// Apply category-specific discounts to each product.
const discountedCart = [];
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discount = product.price * discountRate;
    discountedCart.push({
        item: product.item,
        originalPrice: product.price,
        discount,
        finalPrice: product.price - discount
    });
}

// Add the discounted item prices.
let finalTotal = discountedCart.reduce(
    (total, product) => total + product.finalPrice,
    0
);

// If the original cart subtotal exceeds ₹50,000, apply another 5% overall.
let extraDiscount = 0;
if (subtotal > 50000) {
    extraDiscount = finalTotal * 0.05;
    finalTotal -= extraDiscount;
}

const itemSummary = discountedCart
    .map(product =>
        `${product.item}: ₹${product.originalPrice} - ₹${product.discount.toFixed(2)} = ₹${product.finalPrice.toFixed(2)}`
    )
    .join("\n");

const summary = `Cart subtotal: ₹${subtotal}
${itemSummary}
Extra cart discount: ₹${extraDiscount.toFixed(2)}
Final total: ₹${finalTotal.toFixed(2)}`;

console.log(summary);
document.getElementById("output").textContent = summary;
