document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            alert("Thank you! Your message has been submitted.");
        });
    }
});