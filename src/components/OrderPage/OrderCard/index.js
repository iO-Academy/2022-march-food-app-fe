
import './OrderCard.scss'
import {useEffect, useState} from "react";
import QuantityButtons from '../QuantityButtons'
import './OrderCard.scss'

const OrderCard = ({orderArray, addItem, removeItem}) => {
    const [subtotal, setSubtotal] = useState(0)
    const [deliveryFee, setDeliveryFee] = useState(0)
    const [serviceFee, setServiceFee] = useState(0)
    const [total, setTotal] = useState(0)

    const addTotals = () => {

        let itemTotal = 0

        orderArray.forEach(orderItem => {
            itemTotal += (orderItem.price * orderItem.qty)
            setSubtotal(itemTotal)
        })
        if (itemTotal === 0) {
            setDeliveryFee(0)
            setServiceFee(0)

        } else {
            setDeliveryFee(0.99)
            setServiceFee(1.50)
        }
        setSubtotal(itemTotal)
    }
    
    let ordersDisplay = orderArray.map(orderItem => {
        return (
            <div className="item_display">
                <p>{orderItem.foodName}</p>
                <QuantityButtons
                    foodName={orderItem.foodName}
                    price={orderItem.price}
                    addItem={addItem}
                    removeItem={removeItem}
                    orderArray={orderArray}
                />
            </div>
        )
    })

    let subtotalFloat = parseFloat(subtotal).toFixed(2)
    let serviceFeeFloat = parseFloat(serviceFee).toFixed(2)
    let deliveryFeeFloat = parseFloat(deliveryFee).toFixed(2)
    let totalFloat = parseFloat(total).toFixed(2)
    
    useEffect(addTotals, [orderArray])
    useEffect(() => {
        setTotal(subtotal + serviceFee + deliveryFee)
    }, [subtotal])
    
    return (
        <div className="order_card container">
            <h3><i className="fa-solid fa-cart-shopping shopping_cart"/> Order</h3>
            <div className="order_display">{ordersDisplay}</div>
            <ul className="order_costs">
                <li><span>Sub-total:</span><span>£{subtotalFloat}</span></li>
                <li><span>Delivery fee:</span><span>£{deliveryFeeFloat}</span></li>
                <li><span>Service fee:</span><span>£{serviceFeeFloat}</span></li>
                <li className="total"><span>Total:</span><span>£{totalFloat}</span></li>
            </ul>
            <button className="order_btn">Place order</button>
        </div>
    )
}

export default OrderCard