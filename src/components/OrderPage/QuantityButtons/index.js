import { useEffect, useState } from "react"

const QuantityButtons = ({ foodName, price, addItem, removeItem, orderObject }) => {
    const [quantity, setQuantity] = useState(0)
    function findQty() {
        orderObject.forEach(orderItem => {
            if (orderItem.foodName === foodName) {
                setQuantity(orderItem.qty)
            }
        })
    } 


    return (
        <div>
        <button onClick={() => {
            addItem(foodName, price)
            findQty()
        }
            }>+</button>
        <button onClick={() => {
            removeItem(foodName, price)
            findQty()
        }}>-</button>
        <div>{quantity}</div>
    </div>
    )
}


export default QuantityButtons