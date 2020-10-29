const http = require('http')
const url = require('url')
const fetch = require('node-fetch')

const apiKey = '656fc6ced8b49f7b5d51f8e68d78e400'

http.createServer(function(req, res) {
	res.setHeader('Content-Type','application/json')
	const urlData = url.parse(req.url, true)
	weatherFetch(urlData.query.city, function(data) {
		res.write(data);
		res.end();
	})
})
.listen(3000, function(err) {
	if (err) console.log('[ Server ✖ ]', err)
	else console.log('[ Server ✔ ] http://localhost:3000')
})

function weatherFetch(city, renderJSONData) {
    fetch(`https:\/\/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(function(res) {
                    return res.json()
            })
            .then(function(data) {
            		console.log(data)
                    renderJSONData(JSON.stringify(data))                
            })
            .catch(function(err) {
                    console.log("Error in fetching weather data.")
                    console.log(err)
            })
}