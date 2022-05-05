import {useEffect, useState} from "react"
import ItemCard from "../ItemCard"
import './OrderPage.scss'
import OrderCard from "./OrderCard";

const OrderPage = ({activeRestaurantId}) => {
    const [foodItemData, setItemData] = useState([])
    const [orderArray, setOrderArray] = useState([])


    const addItem = (foodName, price) => {
        let orderObjectClone = [...orderArray]
        const orderObjectItem = {foodName, price, qty: 1}
        let itemOrdered = false
        orderArray.forEach((orderItem, key) => {
            if (orderItem.foodName === foodName) {
                itemOrdered = key
            }
        })
        if (itemOrdered === false) {
            orderObjectClone.push(orderObjectItem)
        } else {
            orderObjectClone[itemOrdered].qty++
        }
        setOrderArray(orderObjectClone)
    }

    const removeItem = (foodName, price) => {
        let orderObjectClone = [...orderArray]
        let itemOrdered = false
        orderArray.forEach((orderItem, key) => {
            if (orderItem.foodName === foodName) {
                itemOrdered = key
            }
        })
        if (itemOrdered !== false) {
            orderObjectClone[itemOrdered].qty--
            if (orderObjectClone[itemOrdered].qty < 1) {
                orderObjectClone.splice(itemOrdered, 1)
            }
            setOrderArray(orderObjectClone)
        }
    }

    useEffect(() =>{
        fetch(`http://localhost:8080/restaurants/${activeRestaurantId}`)
            .then(res => res.json())
            .then(data => {
                setItemData(data.foodItems)
            })
    }, [])

    let foodItems = foodItemData.map((foodItem) => {
        return <ItemCard
            foodName={foodItem.foodName}
            price={foodItem.price}
            calories={foodItem.calories}
            foodType ={foodItem.foodType}
            side ={foodItem.sideItem}
            orderArray={orderArray}
            addItem={addItem}
            removeItem={removeItem}
        />
    })

    return (
        <>
            <main className='grid container'>
                {foodItems}
            </main>
            <OrderCard
                orderArray={orderArray}
                addItem={addItem}
                removeItem={removeItem}
            />
        </>
    )
}

export default OrderPage