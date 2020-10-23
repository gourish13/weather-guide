const apiKey = ""

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
