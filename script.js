// Función para alternar el sidebar
function toggleSidebar() {
    var sidebar = document.getElementById("toggleSidebar");
    if (sidebar.style.width === "300px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "300px";
    }
}

// Cambiar entre modo claro y oscuro
const toggleDarkMode = document.querySelector('#darkModeToggle');

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// Cargar el estado del modo oscuro desde el almacenamiento local
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Suavizar la transición entre secciones
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Ajuste para el header fijo
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const downloadButtons = document.querySelectorAll(".downloadButton");

    downloadButtons.forEach(button => {
        button.addEventListener("click", () => {
            const fileUrl = button.getAttribute("data-url");

            if (fileUrl) {
                const link = document.createElement("a");
                link.href = fileUrl;
                link.target = "_blank"; // Abre en nueva pestaña (opcional)
                link.download = ""; // Sólo necesario si quieres forzar descarga
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                console.error("No se encontró la URL para descargar.");
            }
        });
    });
});
