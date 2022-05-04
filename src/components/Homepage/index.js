import {useEffect, useState} from "react"
import '../Homepage/Homepage.scss'
import RestaurantButton from '../RestaurantButton'

const Homepage = ({setActiveRestaurant}) => {

    const [restaurantsData, setRestaurantsData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/restaurants")
            .then(response => response.json())
            .then(data => {
                setRestaurantsData(data)
            })
    }, [])

    let restaurants = restaurantsData.map((restaurant) => {
        return <RestaurantButton key={restaurant.id} id={restaurant.id} name={restaurant.name} setActiveRestaurant={setActiveRestaurant}/>
    })

    return (
        <main className='container restaurant__grid'>
            {restaurants}
        </main>
    )
}

export default Homepage