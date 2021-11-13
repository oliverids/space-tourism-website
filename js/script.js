const toggleMenu = document.getElementById('toggleMenu'),
    dropdownMenu = document.getElementById('dropdown');

toggleMenu.addEventListener('click', () => {
    [dropdownMenu, toggleMenu].forEach(e => e.classList.toggle('ativo'))
})