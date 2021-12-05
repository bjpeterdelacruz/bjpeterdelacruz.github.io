function toggleDarkMode() {
    const bodyTag = document.getElementById("body");
    if (bodyTag.classList.contains("dark-mode")) {
        bodyTag.removeAttribute("class");
    }
    else {
        bodyTag.setAttribute("class", "dark-mode");
    }
}
