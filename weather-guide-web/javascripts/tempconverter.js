function toCelcius(tempInKelvin) {
    return tempInKelvin - 273.15
}

function toFahrenheit(tempInKelvin) {

    let a = toCelcius(tempInKelvin)
    return ((a * (9 / 5)) + 32)

}
