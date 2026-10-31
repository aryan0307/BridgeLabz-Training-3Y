const registrationForm = document.getElementById("registrationForm");
const fieldRules = {
    name: value => value.trim() ? "" : "Name is required.",
    email: value => !value.trim() ? "Email is required." : (!value.includes("@") ? "Email must contain @." : ""),
    password: value => value.length >= 6 ? "" : "Password must contain at least 6 characters."
};

function validateField(fieldId) {
    const input = document.getElementById(fieldId);
    const errorMessage = fieldRules[fieldId](input.value);
    input.classList.toggle("invalid", Boolean(errorMessage));
    input.parentElement.querySelector("small").textContent = errorMessage;
    return !errorMessage;
}

// Clear each field's error as soon as its value becomes valid.
Object.keys(fieldRules).forEach(fieldId => {
    document.getElementById(fieldId).addEventListener("input", () => {
        validateField(fieldId);
        document.getElementById("success").textContent = "";
    });
});

registrationForm.addEventListener("submit", event => {
    // Stop the browser from submitting/reloading before validation is complete.
    event.preventDefault();
    const isValid = Object.keys(fieldRules).map(validateField).every(Boolean);
    const successMessage = document.getElementById("success");
    successMessage.textContent = isValid ? "Form Submitted Successfully" : "";
    if (isValid) console.log("Form Submitted Successfully");
});
