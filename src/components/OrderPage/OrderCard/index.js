import { useEffect, useState } from 'react'
import QuantityButtons from '../QuantityButtons'
import './OrderCard.scss'
const OrderCard = ({orderObject, addItem, removeItem, setModalState}) => {

    const [ordersItemDisplay, setOrdersItemDisplay] = useState([])
    
    const toggleModal = () => {
        setModalState(true)
    }

    let ordersDisplay = orderObject.map(orderItem => {
        return (
        <div className="item_display">
            <p>{orderItem.foodName}</p>
            <QuantityButtons
            foodName={orderItem.foodName}
            price={orderItem.price}
            addItem={addItem}
            removeItem={removeItem}
            orderObject={orderObject}
            />
        </div>
        )
    }) 
    useEffect (()=>{},[orderObject])


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
            <button className="order_btn" onClick={toggleModal}>Place order</button>
        </div>
    )
}

export default OrderCard