import {useEffect, useState} from "react"
import ItemCard from "../ItemCard"
import './OrderPage.scss'
import OrderCard from "./OrderCard";
import userEvent from "@testing-library/user-event";

const OrderPage = ({activeRestaurantId}) => {
    const [foodItemData, setItemData] = useState([])
    const [orderObject, setOrderObject] = useState([])


    const addItem = (foodName, price) => {
        let orderObjectClone = [...orderObject]
        const orderObjectItem = {foodName : foodName, price : price, qty: 1}
        let itemOrdered = false
        orderObject.forEach((orderItem, key) => {
            if (orderItem.foodName === foodName) {
                itemOrdered = key
            }
        })
      if (itemOrdered === false) {
        orderObjectClone.push(orderObjectItem)
       } else {
       orderObjectClone[itemOrdered].qty++
        }
        setOrderObject(orderObjectClone)
        console.log(orderObjectClone)
    }

    const removeItem = (foodName, price) => {
        let orderObjectClone = [...orderObject]
        const orderObjectItem = {foodName : foodName, price : price, qty: 0}
        let itemOrdered = false
        orderObject.forEach((orderItem, key) => {
            
            if (orderItem.foodName === foodName) {
                itemOrdered = key
            }
        })
      if (itemOrdered === false) {
        orderObjectClone.push(orderObjectItem)
       } else {
       orderObjectClone[itemOrdered].qty--
        if(orderObjectClone[itemOrdered].qty > -1){
            orderObjectClone.splice(itemOrdered, 1)
        }
         return
        }
        setOrderObject(orderObjectClone)
        console.log(orderObject)

    }

    useEffect(() =>{
        fetch(`http://localhost:8080/restaurants/${activeRestaurantId}`)
            .then(res => res.json())
            .then(data => {
                setItemData(data.foodItems)
            })
    }, [])

    let foodItem = foodItemData.map((foodItem) => {
        return <ItemCard 
            foodName={foodItem.foodName}
            price={foodItem.price}
            calories={foodItem.calories}
            foodType ={foodItem.foodType}
            side ={foodItem.sideItem}
            orderObject={orderObject}
            addItem={addItem}
            removeItem={removeItem}
            
            />
    })

    return (
        <>
            <main className='grid container'>
                {foodItem}
            </main>
            <OrderCard 
            addItem={addItem}
            removeItem={removeItem}
            orderObject={orderObject}
            />
        </>
)
}

export default OrderPage