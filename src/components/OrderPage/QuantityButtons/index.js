import { useEffect, useState } from "react"
import './QuantityButtons.scss'

const QuantityButtons = ({ foodName, price, addItem, removeItem, orderArray }) => {
    const [quantity, setQuantity] = useState(0)

    function findQuantity() {
        let itemInOrder = false
        orderArray.forEach(orderItem => {
            if (orderItem.foodName === foodName) {
                itemInOrder = true
                setQuantity(orderItem.qty)
            }
        })
        if (!itemInOrder){
            setQuantity(0)
        }
    }
    useEffect(findQuantity, [orderArray])

    return (
        <div className="quantityButtons">
            <button className="quantityButtons__btn" onClick={() => {
                addItem(foodName, price)
            }}>+</button>
            <div className="quantityButtons__qty">{quantity}</div>
            <button className="quantityButtons__btn" onClick={() => {
                removeItem(foodName, price)
            }}>-</button>
        </div>

    )
}

export default QuantityButtons