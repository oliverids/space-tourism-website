const destinations = document.querySelectorAll('#menu li button');

async function fetchInfo(index) {
    let array = Array.from(destinations),
        item = array.indexOf(index);

    fetch('../data.json').then(r => r.json()).then(r => {
        const image = document.querySelector('#image img'),
            planet = document.getElementById('planet'),
            text = document.getElementById('text'),
            avgDist = document.getElementById('avg-dist'),
            travelTime = document.getElementById('travel-time');

        image.src = r.destinations[item].images.png;
        planet.innerText = r.destinations[item].name;
        text.innerText = r.destinations[item].description;
        avgDist.innerText = r.destinations[item].distance;
        travelTime.innerText = r.destinations[item].travel;
    });
};

destinations.forEach(e => {
    e.addEventListener('click', evt => {
        destinations.forEach(e => e.classList.remove('active'));
        evt.currentTarget.classList.add('active');

        fetchInfo(evt.currentTarget);
    });
});


