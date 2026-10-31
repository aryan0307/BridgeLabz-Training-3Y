function Person(name) {
    this.name = name;
}
Person.prototype.showName = function () {
    return `Name: ${this.name}`;
};

function Student(name, branch) {
    Person.call(this, name); // Initialize inherited Person property.
    this.branch = branch;
}

// Link Student.prototype to Person.prototype and restore constructor.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    return `Branch: ${this.branch}`;
};

const student = new Student("Aarav", "Computer Science");

function displayStudent() {
    const result = `${student.showName()}\\n${student.showBranch()}\\nPerson method accessible: ${typeof student.showName === "function"}\\nPrototype chain works: ${student instanceof Student && student instanceof Person}`;
    document.getElementById("output").textContent = result;
    console.log(result);
}
document.getElementById("runButton").addEventListener("click", displayStudent);
