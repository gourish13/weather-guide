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