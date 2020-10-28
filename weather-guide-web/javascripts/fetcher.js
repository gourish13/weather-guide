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
                        console.log(err)
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
                        console.log(err)
                        alert('Unable to fetch weather for unknown location, please recheck the requested city name and country code(CC)')
                })
}

function storeData(data) {
        if (isAdded(data))
                return
        setCard(cards[cities.length], data)
        let a = {}
        a[data.sys.country] = data.name
        cities[cities.length] = a
        localStorage.addedCity = JSON.stringify(cities)
        document.getElementById("searchBar").value = ''
}

function isAdded(data) {
        for (let i in cities)
                if (cities[i][data.sys.country] == data.name){
                        showPresent(cards[i])
                        return true
                }
        return false
}

function showPresent(element) {
        document.getElementById("searchBar").value = ''
        element.style.background = 'yellowgreen'
        setTimeout(function () {
                element.style.background = 'blueviolet'
        }, 3000)
}