function Person(name) {
    this.name = name;
}
Person.prototype.introduce = function () {
    return `Person: ${this.name}`;
};

function Faculty(name, facultyId) {
    Person.call(this, name);
    this.facultyId = facultyId;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showFacultyId = function () {
    return `Faculty ID: ${this.facultyId}`;
};

function Professor(name, facultyId, subject) {
    Faculty.call(this, name, facultyId);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showSubject = function () {
    return `Subject: ${this.subject}`;
};

const professor = new Professor("Dr. Sharma", "F102", "Data Structures");

function displayProfessor() {
    const result = `${professor.introduce()}\\n${professor.showFacultyId()}\\n${professor.showSubject()}\\n\\nIs Person: ${professor instanceof Person}\\nIs Faculty: ${professor instanceof Faculty}\\nIs Professor: ${professor instanceof Professor}`;
    document.getElementById("output").textContent = result;
    console.log(result);
}
document.getElementById("runButton").addEventListener("click", displayProfessor);
