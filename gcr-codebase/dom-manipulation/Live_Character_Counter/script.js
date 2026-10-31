const messageBox = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
    const remaining = maximumCharacters - messageBox.value.length;
    counter.textContent = `${remaining} characters remaining`;
    counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
    counter.classList.toggle("limit", remaining === 0);
}

// Block any character-producing input once the limit has been reached.
messageBox.addEventListener("keydown", event => {
    const editingKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End"];
    const isShortcut = (event.ctrlKey || event.metaKey) && ["a", "c", "v", "x"].includes(event.key.toLowerCase());
    if (messageBox.value.length >= maximumCharacters && !editingKeys.includes(event.key) && !isShortcut) {
        event.preventDefault();
    }
});

// Also guard paste and other input paths that may bypass keydown.
messageBox.addEventListener("beforeinput", event => {
    if (messageBox.value.length >= maximumCharacters && event.inputType.startsWith("insert")) {
        event.preventDefault();
    }
});
messageBox.addEventListener("input", updateCounter);

resetButton.addEventListener("click", () => {
    messageBox.value = "";
    updateCounter();
    messageBox.focus();
});
updateCounter();
