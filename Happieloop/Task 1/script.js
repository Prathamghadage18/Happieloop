// JavaScript for handling dropdowns on click for mobile devices
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.querySelector('.submenu').classList.toggle('show');
    });
});

// Close dropdowns when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown')) {
        const openDropdowns = document.querySelectorAll('.submenu.show');
        openDropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});
