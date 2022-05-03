import {useEffect, useState} from "react";
import Button from '../Button'

const Homepage = () => {

    const [restaurantsData, setRestaurantsData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/restaurants")
            .then(response => response.json())
            .then(data => {
                setRestaurantsData(data)
            })
    }, [])

    let restaurants = restaurantsData.map((restaurant) => {
        return <Button key={restaurant.id} name={restaurant.name} />
    })

    return (
        <>
            {restaurants}
        </>
    )
}

export default Homepage