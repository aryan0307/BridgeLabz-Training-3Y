const form = document.getElementById("studentForm");
const rules = {
    name: { regex: /^[A-Za-z ]+$/, message: "Use alphabets and spaces only." },
    email: { regex: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/, message: "Enter a valid email address." },
    phone: { regex: /^\\d{10}$/, message: "Phone number must contain exactly 10 digits." },
    password: { regex: /^(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).+$/, message: "Include an uppercase letter, a number, and a special character." }
};

function validateField(input) {
    const rule = rules[input.id];
    const error = input.parentElement.querySelector("small");
    const valid = rule.regex.test(input.value.trim());
    input.classList.toggle("valid", valid);
    input.classList.toggle("invalid", !valid);
    error.textContent = valid ? "" : rule.message;
    return valid;
}

Object.keys(rules).forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener("input", () => validateField(input));
});

form.addEventListener("submit", event => {
    event.preventDefault();
    const valid = Object.keys(rules).map(id => validateField(document.getElementById(id))).every(Boolean);
    document.getElementById("status").textContent = valid ? "Registration details are valid!" : "Please correct the highlighted fields.";
    document.getElementById("status").style.color = valid ? "#198754" : "#dc3545";
});
