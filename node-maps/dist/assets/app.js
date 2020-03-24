window.onload = () => {
    let grid = document.querySelector('#grid')
    let button = document.querySelector('#send')

    button.addEventListener('click', save)

    read()
}

function templateCard(address, image){
    return `
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <img src="${image}" alt="">
            </div>
            <div class="mdl-card__supporting-text">
                ${address}
            </div>
        </div>
    `
}

function read(){
    axios
    .get('/all')
    .then( response => {
        response.data.forEach(element => {
            let card = templateCard(element.address, element.image)
            grid.innerHTML += card
        })
    })
    .catch(error => {

    })
}

function save(){
    if(!navigator.geolocation){
        alert("Seu browser não suporta a geolocalização! </p>")
        return
    }

    navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true
    })

    function success(position){
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        const spinner = document.querySelector('#spinner')
        spinner.classList.add('is-active')

        axios
            .post("/geocode", {lat, lng})
            .then(function(response){
                let card = templateCard(response.data.address, response.data.image)
                grid.innerHTML += card

                spinner.classList.remove('is-active')
            })
            .catch(function(error){
                spinner.classList.remove('is-active')

            })
    }
    function error(err){
        alert(err)
    }

}