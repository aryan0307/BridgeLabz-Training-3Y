// Version 1: constructor functions and prototypes.
function Person(name) {
    this.name = name;
}
Person.prototype.showName = function () {
    return `Name: ${this.name}`;
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.showBranch = function () {
    return `Branch: ${this.branch}`;
};

// Version 2: ES6 class syntax uses extends and super().
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `Name: ${this.name}`;
    }
}
class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name); // Calls the parent constructor.
        this.branch = branch;
    }
    showBranch() {
        return `Branch: ${this.branch}`;
    }
}

const prototypeStudent = new Student("Aarav", "Computer Science");
const classStudent = new StudentClass("Aarav", "Computer Science");

function displayComparison() {
    const prototypeResult = `${prototypeStudent.showName()} | ${prototypeStudent.showBranch()}`;
    const classResult = `${classStudent.showName()} | ${classStudent.showBranch()}`;
    const result = `Prototype version: ${prototypeResult}\\nES6 class version: ${classResult}\\n\\nSame output: ${prototypeResult === classResult}\\nBoth use prototype-based inheritance internally. ES6 class syntax provides cleaner syntax for the same inheritance model.`;
    document.getElementById("output").textContent = result;
    console.log(result);
}
document.getElementById("runButton").addEventListener("click", displayComparison);
