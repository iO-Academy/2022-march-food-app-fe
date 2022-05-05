import { useEffect, useState } from "react"

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
        <div>
        <button onClick={() => {
            addItem(foodName, price)
        }
            }>+</button>
        <button onClick={() => {
            removeItem(foodName, price)
        }}>-</button>
        <div>{quantity}</div>
    </div>
    )
}


export default QuantityButtons