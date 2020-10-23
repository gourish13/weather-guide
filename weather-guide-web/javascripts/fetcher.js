const apiKey = "656fc6ced8b49f7b5d51f8e68d78e400"

function weatherFetch(cityName) {
        let weatherData;
        fetch(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
                .then(function(res) {
                        return res.json();
                })
                .then(function(data) {
                        weatherData = data;
                })
                .catch(function() {
                        console.log("Error in fetching weather data.")
                })
        return weatherData
}
