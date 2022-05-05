import { useEffect } from 'react'
import QuantityButtons from '../QuantityButtons'
import './OrderCard.scss'
const OrderCard = ({orderArray, addItem, removeItem}) => {
    
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
    useEffect (()=>{},[orderArray])


    return (
        <div className="order_card container">
            <h3><i className="fa-solid fa-cart-shopping shopping_cart"/> Order</h3>
            {/* Display the orderMarkup JSX */}
            <div className="order_display">{ordersDisplay}</div>
            <ul className="order_costs">
                <li><span>Sub-total:</span><span>£0.00</span></li>
                <li><span>Delivery fee:</span><span>£0.00</span></li>
                <li><span>Service fee:</span><span>£0.00</span></li>
                <li className="total"><span>Total:</span><span>£0.00</span></li>
            </ul>
            <button className="order_btn">Place order</button>
        </div>
    )
}

export default OrderCard