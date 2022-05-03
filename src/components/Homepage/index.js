import {useEffect} from "react";
import Button from '../Button'

const Homepage = ({restaurantsData, updateRestaurantsData}) => {
    useEffect(() => {
        fetch("http://localhost:8080/restaurants")
            .then(response => response.json())
            .then(data => {
                updateRestaurantsData(data)
            })
    }, [])

    let restaurants = restaurantsData.map((restaurant) => {
        return <Button name={restaurant.name} />
    })

    return (
        <>
            {restaurants}
        </>
    )
}

export default Homepage