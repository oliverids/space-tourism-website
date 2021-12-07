window.addEventListener('click', e => {
    let hideBtns = document.querySelector('.slide');
    if (dropdownMenu.classList.contains('ativo')) {
        hideBtns.classList.add('hide');
    } else {
        hideBtns.classList.remove('hide');
    }
});

const slideCrew = document.querySelectorAll('#slide-crew li button');

async function fetchInfo(index) {
    let array = Array.from(slideCrew),
        item = array.indexOf(index);

    fetch('./data.json').then(r => r.json()).then(r => {
        const image = document.querySelector('#person img'),
            role = document.getElementById('role'),
            nome = document.getElementById('name'),
            bio = document.getElementById('bio');

        [image, role, nome, bio].forEach(e => e.classList.add('anima'));
       
        setTimeout(() => {
            image.src = r.crew[item].images.png;
            role.innerText = r.crew[item].role;
            nome.innerText = r.crew[item].name;
            bio.innerText = r.crew[item].bio;
        });

        setTimeout(() => {
            [image, role, nome, bio].forEach(e => e.classList.remove('anima'));
        }, 310);
    });
};

slideCrew.forEach(e => {
    e.addEventListener('click', evt => {
        slideCrew.forEach(e => e.classList.remove('active'));
        evt.currentTarget.classList.add('active');

        fetchInfo(evt.currentTarget);
    });
});

