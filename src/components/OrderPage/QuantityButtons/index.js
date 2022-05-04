const QuantityButtons = ({ foodName, price, addItem, removeItem, orderObject }) => {
    let qty = findQty()
    
    function findQty() {
        orderObject.forEach(orderItem => {
            if (orderItem.name === foodName) {
                qty = orderItem.qty
                console.log(qty)
            }
        })
    } 

    return (
        <div>
        <button onClick={() => {addItem(foodName, price)}}>+</button>
        <button onClick={() => {removeItem(foodName, price)}}>-</button>
        <div>{qty}</div>
    </div>
    )
}


export default QuantityButtons