import {useEffect, useState} from "react"
import Item_card from "../Item_card"

const Order_page = () => {
    const [foodItemData, setItemData] = useState([])

    useEffect( () =>{
    fetch('http://localhost:8080/restaurants/1')
        .then(res => res.json())
        .then(function (data) {
            setItemData(data.foodItems)
        })
}, [])

    let foodItem = foodItemData.map((foodItem) => {
        return <Item_card price={foodItem.price} calories={foodItem.calories} foodName={foodItem.foodName} foodType ={foodItem.foodType} side ={foodItem.sideItem}/>
    })
    return (
        <>
            {foodItem}
        </>
    )
}

export default OrderPage