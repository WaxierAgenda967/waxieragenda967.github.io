// Modo oscuro
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.id = "dark-mode-toggle";
    toggleButton.textContent = "Modo Oscuro";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px 20px";
    toggleButton.style.backgroundColor = "#222";
    toggleButton.style.color = "#fff";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.zIndex = "1000";

    document.body.appendChild(toggleButton);

    const currentMode = localStorage.getItem("theme");
    if (currentMode === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "Modo Claro";
    }

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "Modo Claro";
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "Modo Oscuro";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Alterna la clase "show" en el menú
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Cierra el menú al hacer clic en un enlace
    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
        });
    });
});
