function addCityCard() {
        let city = document.getElementById("searchBar").value
        if(city==""){

                alert("Please Enter the Name of the City in the Provided Format...")
                return

        }

        city = city.split(',')

        if(city.length > 2){

                alert("Please Enter the Name of the City in the Provided Format...")
                return

        }

        if(city.length == 1) weatherFetch(city[0].trim())
        else weatherFetchByCC(city[0].trim() , city[1].trim())

        if(cities.length == 8){
                alert("City Slots are full...Kindly remove one to open up a slot...")
                return
        }
        // let index = cities.length;
        // setCard(cards[index])
        // cities[cities.length] = 1;
}

function removeWeatherCard(card) {
    let i = 0;
    for(i=0 ; i<cities.length ; i++)
        if(cards[i]===card) break;

    for( ; i<cities.length - 1 ; i++){
        cards[i].innerHTML = cards[i+1].innerHTML;
        cities[i] = cities[i+1];
    }

    cities.pop();
    cards[i].innerHTML = "";
    localStorage.addedCity = JSON.stringify(cities);
}

function setCardsIfAny(){
        cities = [];
        cards = document.getElementsByClassName('col-sm-3');
        if (localStorage.addedCity === undefined || localStorage.addedCity === '')
                return
        let citeh = JSON.parse(localStorage.addedCity);
        for(let i in citeh){
                let cc = Object.keys(citeh[i]);
                weatherFetchByCC(citeh[i][cc] , cc);
        }
}