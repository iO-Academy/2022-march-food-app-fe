import QuantityButtons from '../OrderPage/QuantityButtons'
import './ItemCard.scss'

const ItemCard = ({foodName, price, calories, foodType, side, addItem, removeItem, orderObject}) => {
    return(
        <>
            <div className = 'item_card'>
                <div className='item_header'>
                    <p className='item_name'>{foodName}</p>
                    <div className='item_details'>
                        <p className = 'item_calories'>
                            Calories: {calories}
                        </p>
                        {foodType ?
                        <p className = 'item_type'>
                            Type: {foodType}
                        </p> : ''
                    }
                        {side ?
                        <p className = 'item_category'>
                            side
                        </p> :''}
                    </div>
                </div>
                <div className='item__priceQtyContainer'>
                    <div className= 'price'>
                        £{price}
                    </div>
                    <QuantityButtons foodName={foodName} price={price} addItem={addItem} removeItem={removeItem} orderObject={orderObject}/>
                </div>
            </div>
            
        </>
    )
}

export default ItemCard