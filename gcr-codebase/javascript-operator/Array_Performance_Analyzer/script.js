// Generate eight random integer scores from 30 through 100.
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Use Math.max() and Math.min() to find the highest and lowest scores.
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Use reduce() to calculate the total and average.
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

// Use filter() to count students who passed.
const passedStudents = scores.filter(score => score >= 50);
const passCount = passedStudents.length;

// Use map() to create a numbered score list.
const scoreList = scores.map((score, index) => `Student ${index + 1}: ${score}`).join("\n");

const summary = `${scoreList}

Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed (50 or above): ${passCount} / ${scores.length}`;

console.log(summary);
document.getElementById("output").textContent = summary;
