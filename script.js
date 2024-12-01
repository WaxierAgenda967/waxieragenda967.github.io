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

// Menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

// Toggle del menú en dispositivos pequeños
menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

// Función para cerrar el menú cuando se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
        menuList.classList.remove('active');
    }
});

// Suavizar la transición entre las secciones del sitio
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
