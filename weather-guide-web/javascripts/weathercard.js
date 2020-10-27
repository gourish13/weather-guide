// Weather Card Template Generator

function setCard(element) {
        let city = 'Asansol'
        let country = 'IN'
        let icon = '01n'
        let temp, unit
        if (document.getElementById('unit').checked) {
                unit = 'C'
                temp = kelvinToCelcius(296);
        } else {
                unit = 'F';
                temp = kelvinToFahrenheit(296);
        }
        let weatherCond = 'Scattered Clouds'
        let cardTemplate = `
                <div class = "card">
                <img class = "card-img-top" src = "./icons/${icon}.png" alt = "${weatherCond}">
                <div class = "card-body">
                <h5 class = "card-title">${city},${country}</h5>
                <p class = "card-text">
                <span class = "temp">${temp}&#176;${unit}</span>
                <br>
                ${weatherCond}
                </p>
                <button id = "details" class = "btn btn-primary">Details</button>
                <button id = "delete"  class = "btn btn-danger">Remove</button>
                </div>
                </div>`
        console.log(cardTemplate)
        element.innerHTML = cardTemplate
}
