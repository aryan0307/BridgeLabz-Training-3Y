// Original product name contains extra spaces and mixed casing.
const productName = " wireless headphones PRO ";

// Remove leading/trailing spaces and convert the text to lowercase.
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first letter of every word using split(), map(), and join().
const capitalizedName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with the requested product label.
const cleanedTitle = capitalizedName.replace(/\bPro\b/i, "Pro Edition");
const titleLength = cleanedTitle.length;

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${titleLength}`);

document.getElementById("output").textContent =
    `Cleaned title: ${cleanedTitle}\nTitle length: ${titleLength}`;
