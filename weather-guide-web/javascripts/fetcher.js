const apiKey = "656fc6ced8b49f7b5d51f8e68d78e400"
var weatherData = {}

function weatherFetch(cityName) {
        fetch(`https:\/\/cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
                .then(function(res) {
                        return res.json();
                })
                .then(function(data) {
                        storeData(data);                
                })
                .catch(function(err) {
                        console.log("Error in fetching weather data.")
                        console.log(err);
                })
}

function weatherFetchByCC(cityName , countryCode){

        fetch(`https:\/\/cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}`)
                .then(function(res) {
                        return res.json();
                })
                .then(function(data) {
                        storeData(data);                
                })
                .catch(function(err) {
                        console.log("Error in fetching weather data.")
                        console.log(err);
                })
}

function storeData(data) {
        weatherData = data
        console.log(weatherData)
} 
