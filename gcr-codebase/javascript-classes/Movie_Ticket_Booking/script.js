const bookingForm = document.getElementById("bookingForm");
const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);
    const errors = [];

    if (!namePattern.test(name)) errors.push("Name must contain alphabets only.");
    if (!emailPattern.test(email)) errors.push("Enter a valid email address.");
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) errors.push("Choose between 1 and 10 seats.");

    const errorElement = document.getElementById("error");
    if (errors.length) {
        errorElement.textContent = errors.join(" ");
        document.getElementById("ticket").hidden = true;
        return;
    }

    const booking = { name, email, seats };
    errorElement.textContent = "";
    document.getElementById("ticketDetails").textContent =
        `Name: ${booking.name}\\nEmail: ${booking.email}\\nSeats: ${booking.seats}`;
    document.getElementById("ticket").hidden = false;
    console.log("Booking:", booking);
});
