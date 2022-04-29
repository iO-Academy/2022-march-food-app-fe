import {useEffect} from "react";

const Homepage = ({restaurantsData, updateRestaurantsData}) => {
    function fetchRestaurants() {
        fetch("http://localhost:8080/restaurants")
            .then(response => response.json())
            .then(data => {
                updateRestaurantsData(data)
            })
    }

    useEffect(() => {fetchRestaurants()}, [])
}

export default Homepage