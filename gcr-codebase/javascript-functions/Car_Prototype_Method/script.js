function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// One shared method is stored on Car.prototype, not copied into each object.
Car.prototype.getDetails = function () {
    return `${this.brand} ${this.model}`;
};

const firstCar = new Car("Toyota", "Fortuner");
const secondCar = new Car("Honda", "City");

function displayCars() {
    const result = `${firstCar.getDetails()}\\n${secondCar.getDetails()}\\n\\nShared method: ${firstCar.getDetails === secondCar.getDetails}`;
    document.getElementById("output").textContent = result;
    console.log(result);
}
document.getElementById("runButton").addEventListener("click", displayCars);
