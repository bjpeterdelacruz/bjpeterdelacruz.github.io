function toggleDarkMode() {
    const body = document.getElementById("body");
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    if (body.classList.contains("dark-mode")) {
        body.removeAttribute("class");
        toggleDarkModeBtn.innerHTML = `<i id="lightbulb-icon" class="fas fa-lightbulb"></i> Dark Mode`;
        document.getElementById('codewars-url').setAttribute("class", "light-mode");
        const headerRow = document.getElementById('katas-table-header-row');
        if (headerRow) {
            headerRow.setAttribute("class", "katas-row");
            const tableBody = document.getElementById('katas-table-body');
            const rowList =  tableBody.getElementsByTagName('tr');
            for (let index = 0; index < rowList.length; index++) {
                rowList[index].setAttribute("class", "katas-row");
                if (index % 2 === 0) {
                    rowList[index].setAttribute("class", "katas-row even-row");
                }
            }
            const aList =  tableBody.getElementsByTagName('a');
            for (let index = 0; index < aList.length; index++) {
                aList[index].setAttribute("class", "light-mode");
            }
        }
    }
    else {
        body.setAttribute("class", "dark-mode");
        toggleDarkModeBtn.innerHTML = `<i id="lightbulb-icon" class="fas fa-lightbulb-on"></i> Light Mode`;
        document.getElementById('codewars-url').setAttribute("class", "dark-mode");
        const headerRow = document.getElementById('katas-table-header-row');
        if (headerRow) {
            headerRow.setAttribute("class", "katas-row-dark-mode");
            const tableBody = document.getElementById('katas-table-body');
            const rowList =  tableBody.getElementsByTagName('tr');
            for (let index = 0; index < rowList.length; index++) {
                rowList[index].setAttribute("class", "katas-row-dark-mode");
            }
            const aList =  tableBody.getElementsByTagName('a');
            for (let index = 0; index < aList.length; index++) {
                aList[index].setAttribute("class", "dark-mode");
            }
        }
    }
}
