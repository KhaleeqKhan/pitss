function logSubmit(event) {
    log.textContent = `Danke für ihr Feedback!`;
    event.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form");
    const log = document.getElementById("log");
    form.addEventListener("submit", logSubmit)
});
