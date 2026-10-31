const themeButtons = document.querySelectorAll("button[data-theme]");
const body = document.body;
const currentTheme = document.getElementById("currentTheme");

function applyTheme(themeName) {
    // setAttribute is used for both required theme updates.
    body.setAttribute("class", `theme-${themeName}`);
    body.setAttribute("data-theme", themeName);
    currentTheme.textContent = `Current theme: ${themeName}`;
}

themeButtons.forEach(button => {
    button.addEventListener("click", () => applyTheme(button.dataset.theme));
});
applyTheme("light");
