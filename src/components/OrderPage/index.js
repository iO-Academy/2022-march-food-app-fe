import {useEffect, useState} from "react"
import ItemCard from "../ItemCard"
import './OrderPage.scss'
import OrderCard from "./OrderCard";

const OrderPage = ({activeRestaurantId}) => {
    const [foodItemData, setItemData] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:8080/restaurants/${activeRestaurantId}`)
            .then(res => res.json())
            .then(data => {
                setItemData(data.foodItems)
            })
    }, [])

    let foodItem = foodItemData.map((foodItem) => {
        return <ItemCard price={foodItem.price} calories={foodItem.calories} foodName={foodItem.foodName} foodType ={foodItem.foodType} side ={foodItem.sideItem}/>
    })

    return (
        <>
            <main className='grid container'>
                {foodItem}
            </main>
            <OrderCard />
        </>
)
}

export default OrderPage