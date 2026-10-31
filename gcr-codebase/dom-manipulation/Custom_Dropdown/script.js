const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const selection = document.getElementById("selection");

function closeDropdown() {
    dropdownOptions.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
}

// Capturing phase: this runs before target/bubbling handlers on the clicked element.
document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) closeDropdown();
}, true);

dropdownButton.addEventListener("click", () => {
    const willOpen = dropdownOptions.hidden;
    dropdownOptions.hidden = !willOpen;
    dropdownButton.setAttribute("aria-expanded", String(willOpen));
});

dropdownOptions.addEventListener("click", event => {
    const optionButton = event.target.closest("button[data-value]");
    if (!optionButton) return;
    const selectedValue = optionButton.dataset.value;
    dropdownButton.textContent = `${selectedValue} ▾`;
    selection.textContent = `Selected course: ${selectedValue}`;
    closeDropdown();
});
