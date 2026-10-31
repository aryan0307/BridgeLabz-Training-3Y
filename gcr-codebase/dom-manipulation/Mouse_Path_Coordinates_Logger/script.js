const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", event => {
    const rectangle = trackingBox.getBoundingClientRect();
    coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY} | Box X: ${Math.round(event.clientX - rectangle.left)}, Box Y: ${Math.round(event.clientY - rectangle.top)}`;
});

trackingBox.addEventListener("dblclick", event => {
    const rectangle = trackingBox.getBoundingClientRect();
    const redDot = document.createElement("span");
    redDot.className = "dot";
    redDot.style.left = `${event.clientX - rectangle.left}px`;
    redDot.style.top = `${event.clientY - rectangle.top}px`;
    trackingBox.appendChild(redDot);
});
