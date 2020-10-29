const apiKey = "656fc6ced8b49f7b5d51f8e68d78e400"

function forecastFetch(cityName , countryCode){

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${apiKey}`)
                .then(function(res) {
                        console.log(res.json()
                })
                .catch(function(err) {
                        console.log(err)
               })
}
