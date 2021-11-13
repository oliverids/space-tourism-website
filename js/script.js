const toggleMenu = document.getElementById('toggleMenu'),
    dropdownMenu = document.getElementById('dropdown');

toggleMenu.addEventListener('click', () => {
    [dropdownMenu, toggleMenu].forEach(e => e.classList.toggle('ativo'))
});

window.addEventListener('click', e => {
    if (dropdownMenu.classList.contains('ativo') && !dropdownMenu.contains(e.target) && !toggleMenu.contains(e.target)) {
        [dropdownMenu, toggleMenu].forEach(e => e.classList.remove('ativo'))
    }
})