document.addEventListener("DOMContentLoaded", function () {
    const changeBgBtn = document.getElementById("changeBgBtn");
    const root = document.documentElement;

    changeBgBtn.addEventListener("click", () => {
        const body = document.body;

        if (body.classList.contains("light-gradient")) {
            body.classList.remove("light-gradient");
            body.classList.add("dark-gradient");

            // Change accent color for dark mode
            root.style.setProperty('--accent', '#CC6CE7');

            // Update button text
            changeBgBtn.textContent = "✨ Switch to Light Mode";
        } else {
            body.classList.remove("dark-gradient");
            body.classList.add("light-gradient");

            // Change accent color for light mode
            root.style.setProperty('--accent', '#C599FA')
            // Update button text
            changeBgBtn.textContent = "🌙 Switch to Dark Mode";
        }
    });

});