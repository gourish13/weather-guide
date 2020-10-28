const apiKey = "656fc6ced8b49f7b5d51f8e68d78e400"

function weatherFetchByCC(cityName , countryCode){

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}`)
                .then(function(res) {
                        return res.json()
                })
                .then(function(data) {
                        if (data.cod == 404) throw 404
                        storeData(data)             
                })
                .catch(function(err) {
                        alert('Unable to fetch weather for unknown location, please recheck the requested city name and country code(CC)')
                }).catch(function(err) {
                        alert('Unable to fetch weather for unknown location, please recheck the requested city name and country code(CC)')
                })
}
function weatherFetch(cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
                .then(function(res) {
                        return res.json()
                })
                .then(function(data) {
                        if (data.cod == 404) throw 404
                        storeData(data)               
                })
                .catch(function(err) {
                        alert('Unable to fetch weather for unknown location, please recheck the requested city name and country code(CC)')
                })
}

function storeData(data) {
        console.log(data)
        setCard(cards[cities.length], data)
        cities[cities.length] = data.name
        localStorage.addedCity = cities
        document.getElementById("searchBar").value = ''
}