function weatherFetchByCC(cityName , countryCode){

        fetch(`http://localhost:3000/weather?city=${cityName},${countryCode}`)
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

function weatherFetch(cityName) {
        fetch(`http://localhost:3000/weather?city=${cityName}`)
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
