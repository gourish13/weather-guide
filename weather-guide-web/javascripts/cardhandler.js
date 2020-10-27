function addCityCard() {
        if(apiData.length == 8){

                alert("City Slots are full...Kindly remove one to open up a slot...")
                return

        }
        
        let index = apiData.length;
        
        // Remove and start writing
        setCard(cards[index])
        
        apiData[apiData.length] = 1;
}
