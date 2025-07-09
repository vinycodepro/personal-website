document.addEventListener("DOMContentLoaded", () => {
    // Function to display a greeting message
    function showGreeting() {
        alert("Welcome to my personal portfolio!");
    }

    // Create a button and add it to the page
    const button = document.createElement("button");
    button.textContent = "Click me!";
    button.onclick = showGreeting;

    // Hide button by default
    button.style.display = "none";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px";
    button.style.zIndex = "1000";

    document.body.appendChild(button);

    // Show/hide button on scroll
    window.addEventListener("scroll", () => {
        button.style.display = window.scrollY > 300 ? "block" : "none";
    });
});
