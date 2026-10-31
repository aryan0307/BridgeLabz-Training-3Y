const searchInput = document.getElementById("searchInput");
const studentRows = [...document.querySelectorAll("#studentRows tr")];
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    studentRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        const matches = rowText.includes(searchTerm);
        row.hidden = !matches;
        if (matches) visibleCount++;
    });

    noResults.hidden = visibleCount !== 0;
});
