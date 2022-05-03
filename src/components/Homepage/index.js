import {useEffect, useState} from "react"
import '../Homepage/Homepage.scss'
import Button from '../Button'

const Homepage = ({buttonSetter}) => {

    const [restaurantsData, setRestaurantsData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/restaurants")
            .then(response => response.json())
            .then(data => {
                setRestaurantsData(data)
            })
    }, [])

    let restaurants = restaurantsData.map((restaurant) => {
        return <Button key={restaurant.id} id={restaurant.id} name={restaurant.name} buttonSetter={buttonSetter}/>
    })

    return (
        <main className='container restaurant__grid'>
            {restaurants}
        </main>
    )
}

export default Homepage