class Cart {
    constructor() {
        this.items = [];
        this.discountPercent = 0;
    }
    addItem(name, price, quantity) {
        if (price < 0 || quantity < 1) throw new Error("Price and quantity must be valid.");
        this.items.push({ name, price, quantity });
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    applyCoupon(code) {
        // Coupon format: SAVE followed by a percentage, or DISC followed by a percentage.
        const match = /^(SAVE|DISC)(\\d{1,2})$/.exec(code.trim().toUpperCase());
        if (!match) return false;
        const percent = Number(match[2]);
        if (percent < 1 || percent > 90) return false;
        this.discountPercent = percent;
        return true;
    }
    getFinalTotal() {
        return this.getTotal() * (1 - this.discountPercent / 100);
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1200, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("USB Cable", 150, 3);

function renderCart(message = "") {
    document.getElementById("cartItems").innerHTML = cart.items.map(item =>
        `<li>${item.name} — ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</li>`
    ).join("");
    document.getElementById("subtotal").textContent = `Subtotal: ₹${cart.getTotal().toFixed(2)}`;
    document.getElementById("message").textContent = message;
    document.getElementById("finalTotal").textContent = `Final total: ₹${cart.getFinalTotal().toFixed(2)}`;
}
document.getElementById("couponForm").addEventListener("submit", event => {
    event.preventDefault();
    const code = document.getElementById("coupon").value;
    const valid = cart.applyCoupon(code);
    renderCart(valid ? `Coupon applied: ${cart.discountPercent}% discount.` : "Invalid coupon. Use SAVE20 or DISC10 format (1–90%).");
});
renderCart();
console.log("Cart subtotal:", cart.getTotal());
