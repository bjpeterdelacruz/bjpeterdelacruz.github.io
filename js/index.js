function toggleDarkMode() {
    const bodyTag = document.getElementById("body");
    const iTag = document.getElementById("lightbulb-icon");
    const spanTag = document.getElementById("toggle-dark-mode-text");
    if (bodyTag.classList.contains("dark-mode")) {
        bodyTag.removeAttribute("class");
        iTag.setAttribute("class", "fas fa-lightbulb");
        spanTag.innerHTML = "Dark";
    }
    else {
        bodyTag.setAttribute("class", "dark-mode");
        iTag.setAttribute("class", "fas fa-lightbulb-on");
        spanTag.innerHTML = "Light";
    }
}
