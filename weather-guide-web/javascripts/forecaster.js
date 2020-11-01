function forecastFetch(cityName, countryCode){

        fetch(`https://fetcherapi.herokuapp.com/forecast?city=${cityName},${countryCode}`)
                .then(function(res) {
                        return res.json()
                })
                .then(function(data) {
                        organizeData(data)
                })
                .catch(function(err) {
                        console.log(err)
               })
}

function weatherFetch(cityName, countryCode){

        fetch(`https://fetcherapi.herokuapp.com/weather?city=${cityName},${countryCode}`)
                .then(function(res) {
                        return res.json()
                })
                .then(function(data) {
                        writeData(data)
                })
                .catch(function(err) {
                        console.log(err)
               })

}