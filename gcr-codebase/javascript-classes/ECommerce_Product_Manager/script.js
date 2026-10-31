// Product class stores product information and provides product operations.
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) throw new Error("Discount must be between 0 and 100.");
        this.price -= this.price * percent / 100;
    }

    getDetails() {
        return `ID: ${this.id} | ${this.name} | ₹${this.price.toFixed(2)} | ${this.category}`;
    }
}

const products = [
    new Product(1, "Wireless Headphones", 2499, "Electronics"),
    new Product(2, "Notebook", 120, "Stationery"),
    new Product(3, "Smart Watch", 3499, "Electronics"),
    new Product(4, "Backpack", 899, "Accessories")
];

products[0].applyDiscount(10);
const expensiveProducts = products.filter(product => product.price > 1000);

function displayProducts() {
    const details = expensiveProducts.map(product => product.getDetails()).join("\\n");
    console.log("Products priced above ₹1,000:\\n" + details);
    document.getElementById("output").textContent = details || "No matching products.";
}
document.getElementById("showProducts").addEventListener("click", displayProducts);
console.log("All products:", products);
console.log("Products above ₹1,000:", expensiveProducts);
