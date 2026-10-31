const steps = [...document.querySelectorAll(".step")];
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const stepLabel = document.getElementById("stepLabel");
const errorElement = document.getElementById("error");
let currentStep = 0;

function validateCurrentStep() {
    const input = steps[currentStep].querySelector("input");
    const value = input.value.trim();
    if (!value) return "This field is required.";
    if (input.id === "name" && !/^[A-Za-z ]+$/.test(value)) return "Name must contain alphabets only.";
    if (input.id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
    if (input.id === "password" && value.length < 8) return "Password must contain at least 8 characters.";
    return "";
}

function showStep() {
    steps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
    stepLabel.textContent = `Step ${currentStep + 1} of 3`;
    backButton.disabled = currentStep === 0;
    nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
    errorElement.textContent = "";
}

nextButton.addEventListener("click", () => {
    const error = validateCurrentStep();
    if (error) {
        errorElement.textContent = error;
        return;
    }
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
        return;
    }

    const summary = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: "••••••••" // Do not display the actual password in the summary.
    };
    document.getElementById("multiStepForm").hidden = true;
    stepLabel.hidden = true;
    document.getElementById("summaryDetails").textContent = JSON.stringify(summary, null, 2);
    document.getElementById("summary").hidden = false;
});

backButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});
showStep();
