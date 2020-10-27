function kelvinToCelcius(tempInKelvin) {
    return Math.round(tempInKelvin - 273.15);
}

function kelvinToFahrenheit(tempInKelvin) {
    return Math.round((((tempInKelvin - 273.5) * (9 / 5)) + 32))
}

function celciusToFahrenheit(temp){
        return kelvinToFahrenheit(273.15 + temp)
}

function fahrenheitToCelcius(temp){
        // ...
}

function convertAllTemp() {
        let temps = document.getElementsByClassName('temp')
        console.log(temps)
        // ...
}
