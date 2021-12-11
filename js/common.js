function toggleDarkMode() {
    const body = document.getElementById("body");
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    if (body.classList.contains("dark-mode")) {
        body.removeAttribute("class");
        toggleDarkModeBtn.innerHTML = `<i id="lightbulb-icon" class="fas fa-lightbulb"></i> Dark Mode`;
        const headerRow = document.getElementById('katas-table-header-row');
        if (headerRow) {
            headerRow.setAttribute("class", "katas-row");
            const list =  document.getElementById('katas-table-body').getElementsByTagName('tr');
            for (let index = 0; index < list.length; index++) {
                list[index].setAttribute("class", "katas-row");
                if (index % 2 === 0) {
                    list[index].setAttribute("class", "katas-row even-row");
                }
            }
        }
    }
    else {
        body.setAttribute("class", "dark-mode");
        toggleDarkModeBtn.innerHTML = `<i id="lightbulb-icon" class="fas fa-lightbulb-on"></i> Light Mode`;
        const headerRow = document.getElementById('katas-table-header-row');
        if (headerRow) {
            headerRow.setAttribute("class", "katas-row-dark-mode");
            const list =  document.getElementById('katas-table-body').getElementsByTagName('tr');
            for (let index = 0; index < list.length; index++) {
                list[index].setAttribute("class", "katas-row-dark-mode");
            }
        }
    }
}
