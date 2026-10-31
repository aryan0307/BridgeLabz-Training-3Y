const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");
let editingItem = null;

// Save the active inline editor, if one exists.
function saveActiveEdit() {
    if (!editingItem) return;
    const editor = editingItem.querySelector(".edit-input");
    const nameElement = editingItem.querySelector(".product-name");
    const newName = editor.value.trim();
    if (newName) nameElement.textContent = newName;
    editingItem.classList.remove("editing");
    editingItem = null;
}

function startEditing(listItem) {
    if (editingItem === listItem) return;
    saveActiveEdit();
    const nameElement = listItem.querySelector(".product-name");
    const editor = document.createElement("input");
    editor.className = "edit-input";
    editor.value = nameElement.textContent;
    nameElement.replaceWith(editor);
    listItem.classList.add("editing");
    editingItem = listItem;
    editor.focus();
    editor.select();
    editor.addEventListener("keydown", event => {
        if (event.key === "Enter") saveActiveEdit();
        if (event.key === "Escape") {
            editor.value = "";
            saveActiveEdit();
        }
    });
}

function addProduct(name) {
    const listItem = document.createElement("li");
    const productName = document.createElement("span");
    productName.className = "product-name";
    productName.textContent = name;

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.dataset.action = "edit";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";

    listItem.append(productName, editButton, deleteButton);
    productList.appendChild(listItem);
}

productForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = productInput.value.trim();
    if (!name) return;
    addProduct(name);
    productInput.value = "";
    productInput.focus();
});

// Event delegation: one listener handles buttons for every current/future list item.
productList.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const listItem = button.closest("li");
    if (button.dataset.action === "edit") startEditing(listItem);
    if (button.dataset.action === "delete") {
        if (editingItem === listItem) editingItem = null;
        listItem.remove();
    }
});

// Clicking outside the active list item automatically saves its edit.
document.addEventListener("click", event => {
    if (editingItem && !editingItem.contains(event.target)) saveActiveEdit();
});

addProduct("Wireless Mouse");
addProduct("Mechanical Keyboard");
