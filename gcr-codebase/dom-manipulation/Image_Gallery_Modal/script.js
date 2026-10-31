const gallery = document.getElementById("gallery");
const modal = document.getElementById("imageModal");
const modalContent = document.querySelector(".modal-content");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModalButton = document.getElementById("closeModal");

gallery.addEventListener("click", event => {
    if (event.target.tagName !== "IMG") return;
    modalImage.src = event.target.src;
    modalImage.alt = event.target.alt;
    modalCaption.textContent = event.target.alt;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
});

// Stop clicks inside the modal content from bubbling to the backdrop.
modalContent.addEventListener("click", event => event.stopPropagation());

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
}
modal.addEventListener("click", closeModal);
closeModalButton.addEventListener("click", closeModal);
document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
});
