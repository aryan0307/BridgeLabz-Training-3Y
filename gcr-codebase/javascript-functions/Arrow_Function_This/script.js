const user = {
    name: "John",
    // Arrow functions do not create their own this value.
    showNameArrow: () => `Arrow function this.name: ${this.name}`,
    // A normal method gets this from the object that calls it.
    showName: function () {
        return `Normal function this.name: ${this.name}`;
    }
};

function displayComparison() {
    const result = `${user.showNameArrow()}\\n${user.showName()}\\n\\nThe arrow function inherits this from its surrounding scope. It does not bind this to user. The normal function receives user as this when called as user.showName().`;
    document.getElementById("output").textContent = result;
    console.log(result);
}
document.getElementById("runButton").addEventListener("click", displayComparison);
