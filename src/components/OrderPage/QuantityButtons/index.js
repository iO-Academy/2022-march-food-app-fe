import { useEffect, useState } from "react"
import './QuantityButtons.scss'

const QuantityButtons = ({ foodName, price, addItem, removeItem, orderObject }) => {
    const [quantity, setQuantity] = useState(0)



    function findQty() {
        let itemInOrder = false
        orderObject.forEach(orderItem => {
            if (orderItem.foodName === foodName) {
                itemInOrder = true
                setQuantity(orderItem.qty)
                console.log('thing')
            }
        })

        if (!itemInOrder){
            setQuantity(0)
        }
    }

    useEffect(findQty, [orderObject])



    return (
        <div className="quantityButtons">
            <button className="quantityButtons__btn" onClick={() => {
                addItem(foodName, price)
                findQty()
            }}>+</button>
            <div className="quantityButtons__qty">{quantity}</div>
            <button className="quantityButtons__btn" onClick={() => {
                removeItem(foodName, price)
                findQty()
            }}>-</button>
        </div>

    )
}


export default QuantityButtons