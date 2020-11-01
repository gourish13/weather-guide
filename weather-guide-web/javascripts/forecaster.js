function forecastFetch(cityName , countryCode){

        fetch(`http://localhost:3000/forecast?city=${cityName},${countryCode}`)
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

function weatherFetch(cityName , countryCode){

        fetch(`http://localhost:3000/weather?city=${cityName},${countryCode}`)
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