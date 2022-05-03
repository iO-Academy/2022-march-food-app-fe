import {useEffect, useState} from "react"
import Item_card from "../Item_card"
import './Order_page.scss'

const Order_page = ({activeRestaurantId}) => {
    const [foodItemData, setItemData] = useState([])

    useEffect( () =>{
    fetch(`http://localhost:8080/restaurants/${activeRestaurantId}`)
        .then(res => res.json())
        .then(function (data) {
            setItemData(data.foodItems)
        })
}, [])

    let foodItem = foodItemData.map((foodItem) => {
        return <Item_card price={foodItem.price} calories={foodItem.calories} foodName={foodItem.foodName} foodType ={foodItem.foodType} side ={foodItem.sideItem}/>
    })
    return (
        <main className='grid container'>
            {foodItem}
        </main>
    )
}

export default Order_page