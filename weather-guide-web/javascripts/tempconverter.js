function kelvinToCelcius(tempInKelvin) {
    return Math.round(tempInKelvin - 273.15);
}

function kelvinToFahrenheit(tempInKelvin) {
    return Math.round((((tempInKelvin - 273.15) * (9 / 5)) + 32))
}

function celciusToFahrenheit(temp){
        return kelvinToFahrenheit(273.15 + temp)
}

function fahrenheitToCelcius(temp){
        return Math.round((temp - 32) * (5 / 9))
        // ...
}

function convertAllTemp() {
        let temps = document.getElementsByClassName('temp')
        console.log(temps)
        console.log(temps[0].innerHTML)
        let mode = document.getElementById("unit").checked
        console.log(mode)
        // for(let temp of temps){

        //     console.log(temp)
        //     let i = temp.innerHTML.split('°')[0]
        //     console.log(i)
        //     if(!mode)
        //         temp.innerHTML = fahrenheitToCelcius(parseFloat(i)) + "°C"
        //     else
        //         temp.innerHTML = celciusToFahrenheit(parseFloat(i)) + "°F"

        // }
        console.log(this)
        // ...
}
