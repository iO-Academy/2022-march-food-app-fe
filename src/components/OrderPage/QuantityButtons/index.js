const QuantityButtons = ({ foodName, price, addItem, removeItem }) => {
    return (
        <div>
        <button onClick={() => {addItem(foodName, price)}}>+</button>
        <button onClick={removeItem}>-</button>
        <div>0</div>
    </div>
    )
}


export default QuantityButtons