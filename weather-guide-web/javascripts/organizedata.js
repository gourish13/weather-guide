function organizeData(data) {

    let temps = {}
    for(i of data.list){

        let j = i['dt_txt'].split(" ")[0]
        if(temps[j]===undefined)
            temps[j] = []
        temps[j].push(i['main']['temp']) 
    }
    
    let dates = Object.keys(temps)
    let maxx = []
    let minn = []
    for(i in temps){

        maxx.push(Math.max.apply(null , temps[i]))
        minn.push(Math.min.apply(null , temps[i]))

    }
    if (Number(localStorage.isUnitCelcius == true)) { 
        maxx = maxx.map(kelvinToCelcius)
        minn = minn.map(kelvinToCelcius)
    }
    else {
        maxx = maxx.map(kelvinToFahrenheit)
        minn = minn.map(kelvinToFahrenheit)
    }
    renderChart(dates , maxx , minn);
}