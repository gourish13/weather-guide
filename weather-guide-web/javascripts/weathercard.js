// Weather Card Template Generator

function setCard(element, data) {
        let city = data.name
        let country = data.sys.country
        let icon = data.weather[0].icon
        let temp = data.main.temp
        let unit
        if (document.getElementById('unit').checked) {
                unit = 'C'
                temp = kelvinToCelcius(temp);
        } else {
                unit = 'F';
                temp = kelvinToFahrenheit(temp);
        }
        let weatherCond = data.weather[0].description
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
            <button id = "details" class = "btn btn-primary" onclick = "showWeatherDetails('${city}', '${country}')">
            Details</button>
            <button id = "delete"  class = "btn btn-danger" 
            onclick = "removeWeatherCard(this.parentElement.parentElement.parentElement)">Remove</button>
            </div>
            </div>`
        element.innerHTML = cardTemplate;
}

// Weather card button handler
function showWeatherDetails(city , country) {
    localStorage.currentCity = city;
    localStorage.currcc = country;
    window.location.assign("./weather.html");
}