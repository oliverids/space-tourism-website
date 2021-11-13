window.addEventListener('click', e => {
    let hideBtns = document.querySelector('.slide');
    if (dropdownMenu.classList.contains('ativo')) {
        hideBtns.classList.add('hide');
    } else {
        hideBtns.classList.remove('hide');
    }
});