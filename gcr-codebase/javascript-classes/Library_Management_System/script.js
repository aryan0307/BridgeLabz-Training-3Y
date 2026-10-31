class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }
    issueBook() {
        if (this.isIssued) return false;
        this.isIssued = true;
        return true;
    }
    returnBook() {
        if (!this.isIssued) return false;
        this.isIssued = false;
        return true;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN002"),
    new Book("1984", "George Orwell", "ISBN003", true),
    new Book("Atomic Habits", "James Clear", "ISBN004")
];

function renderAvailableBooks() {
    const available = books.filter(book => !book.isIssued);
    document.getElementById("bookList").innerHTML = available.length
        ? available.map(book => `<li>${book.title} — ${book.author} (${book.isbn})</li>`).join("")
        : "<li>No books are currently available.</li>";
}
document.getElementById("issueForm").addEventListener("submit", event => {
    event.preventDefault();
    const isbn = document.getElementById("isbn").value.trim();
    const book = books.find(item => item.isbn.toLowerCase() === isbn.toLowerCase());
    const message = document.getElementById("message");
    if (!book) message.textContent = "Book not found.";
    else if (!book.issueBook()) message.textContent = "This book is already issued.";
    else message.textContent = `Issued successfully: ${book.title}`;
    renderAvailableBooks();
});
renderAvailableBooks();
