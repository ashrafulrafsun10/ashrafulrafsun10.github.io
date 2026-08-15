// =========================================
// THEME TOGGLE
// =========================================

const themeToggle = document.getElementById("themeToggle");


// Load saved theme

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀";

}


// Toggle theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    themeToggle.textContent =
        isDark ? "☀" : "☾";

    localStorage.setItem(
        "portfolio-theme",
        isDark ? "dark" : "light"
    );

});