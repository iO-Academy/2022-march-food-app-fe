import './Order_card.scss'
const Order_card = () => {
    return (
        <div className="order_card container">
            <h3><i className="fa-solid fa-cart-shopping shopping_cart"/> Order</h3>
            <div>Placeholder order items go here</div>
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

export default Order_card