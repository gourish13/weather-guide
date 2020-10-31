function setDetails(){

    let con = localStorage.currcc;
    let cit = localStorage.currentCity;
    weatherFetch(cit, con);
    forecastFetch(cit , con);
} 

function writeData(data){

    document.getElementById("city").innerHTML = localStorage.currentCity;
    document.getElementById("cc").innerHTML = localStorage.currcc;
    document.getElementById("cond").innerHTML = data.weather[0].description;
    if(Number(localStorage.isUnitCelcius)) {

        document.getElementById("temperature").innerHTML = kelvinToCelcius(data.main.temp) + "°C";
        document.getElementById("feels").innerHTML = kelvinToCelcius(data.main.feels_like) + "°C";
        document.getElementById("min").innerHTML = kelvinToCelcius(data.main.temp_min) + "°C";
        document.getElementById("max").innerHTML = kelvinToCelcius(data.main.temp_max) + "°C";

    }
    else {

        document.getElementById("temperature").innerHTML = kelvinToFahrenheit(data.main.temp) + "°F";
        document.getElementById("feels").innerHTML = kelvinToFahrenheit(data.main.feels_like) + "°F";
        document.getElementById("min").innerHTML = kelvinToFahrenheit(data.main.temp_min) + "°F";
        document.getElementById("max").innerHTML = kelvinToFahrenheit(data.main.temp_max) + "°F";

    }
    document.getElementById("press").innerHTML = data.main.pressure + " hPa";
    document.getElementById("hum").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " m/s";

}