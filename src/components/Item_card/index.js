import './Item_card.css'

const Item_card = (foodItem) => {
    return(
        <>
            <div className = 'item_card'>
                <p className='item_name'>{foodItem.foodName}</p>
                <div className='item_details'>
                    <p className = 'item_calories'>
                        Calories: {foodItem.calories}
                    </p>
                    {foodItem.foodType ?
                    <p className = 'item_type'>
                        Type: {foodItem.foodType}
                    </p> : ''
                }
                    {foodItem.side ?
                    <p className = 'item_category'>
                        side
                    </p> :''}
                </div>
                <div className= 'price'>
                    £{foodItem.price}
                </div>
            </div>
        </>
    )
}

export default Item_card