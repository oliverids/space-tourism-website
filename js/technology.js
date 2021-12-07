const slideTech = document.querySelectorAll('#slide-tech li button');

async function fetchInfo(index, lista) {
    let array = Array.from(lista),
        item = array.indexOf(index);

    fetch('./data.json').then(r => r.json()).then(r => {
        const picture = document.querySelector('#picture img'),
            nome = document.getElementById('nome'),
            text = document.getElementById('text');

        [nome, text, picture].forEach(e => e.classList.add('anima'));

        setTimeout(() => {
            nome.innerText = r.technology[item].name;
            text.innerText = r.technology[item].description;
            window.innerWidth <= 1200 ? picture.src = r.technology[item].images.landscape : picture.src = r.technology[item].images.portrait;
        });
        setTimeout(() => {
            [nome, text, picture].forEach(e => e.classList.remove('anima'));
        }, 310);
    });
};

slideTech.forEach(e => {
    e.addEventListener('click', evt => {
        slideTech.forEach(e => e.classList.remove('active'));
        evt.currentTarget.classList.add('active');

        fetchInfo(evt.currentTarget, slideTech);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    fetchInfo(slideTech[0], slideTech)
});
let ativo;
window.addEventListener('resize', () => {
    ativo = document.querySelector('#slide-tech li button.active');
    if (window.innerWidth >= 1200) fetchInfo(ativo, slideTech);
});