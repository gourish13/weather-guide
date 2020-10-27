// Weather Card Template Generator

function setCard(element) {
        let city = 'Asansol'
        let country = 'IN'
        let weatherCond = 'Clear'
        let icon = '01n'
        let temp = 24
        let unit = 'C'
        let cardTemplate = `
                <div class = "card">
                <img class = "card-img-top" src = "./icons/${icon}.png" alt = "${weatherCond}">
                <div class = "card-body">
                <h5 class = "card-title">${city},${country}</h5>
                <p class = "card-text">${temp}&#176;${unit}</p>
                <a href = "#" class = "btn btn-primary">Details</a>
                </div>
                </div>`
        console.log(cardTemplate)
        element.innerHTML = cardtemplate;
}
