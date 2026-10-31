// Sample customer review.
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Split the feedback into words and count them.
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Convert to lowercase so the checks are case-insensitive.
const lowerFeedback = feedback.toLowerCase();
const containsNegativeWord =
    lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

// Decide the feedback status.
const feedbackStatus = containsNegativeWord
    ? "Needs Improvement"
    : "Positive Feedback";

const summary = `Feedback: ${feedback}
Word count: ${wordCount}
Contains "bad" or "poor": ${containsNegativeWord}
Result: ${feedbackStatus}`;

console.log(summary);
document.getElementById("output").textContent = summary;
