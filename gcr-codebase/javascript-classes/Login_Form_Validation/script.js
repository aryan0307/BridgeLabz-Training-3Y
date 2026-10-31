const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errors = [];

    if (username.length < 5) errors.push("Username must contain at least 5 characters.");
    if (password.length < 8) errors.push("Password must contain at least 8 characters.");
    if (!/[0-9]/.test(password)) errors.push("Password must include a number.");
    if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
    if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must include a special character.");

    document.getElementById("errors").innerHTML = errors.map(error => `<li>${error}</li>`).join("");
    document.getElementById("success").textContent = errors.length ? "" : "Validation successful!";
});
