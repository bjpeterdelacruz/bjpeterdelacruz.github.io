function toggleDarkMode() {
    const body = document.getElementById("body");
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    if (body.classList.contains("dark-mode")) {
        body.removeAttribute("class");
        toggleDarkModeBtn.innerHTML = `<i id="lightbulb-icon" class="fas fa-lightbulb"></i> Dark Mode`;
    }
    else {
        body.setAttribute("class", "dark-mode");
        toggleDarkModeBtn.innerHTML = `<i id="lightbulb-icon" class="fas fa-lightbulb-on"></i> Light Mode`;
    }
}
