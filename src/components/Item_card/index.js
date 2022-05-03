import './Item_card.css'

const Item_card = (foodItem) => {
    return(
        <>
            <div className = 'Item_card'>
                <p className='item_name'>{foodItem.foodName}</p>
                <div className='item_details'>
                    <p className = 'item_calories'>
                        Calories: {foodItem.calories}
                    </p>
                    <p className = 'item_type'>
                        Type: {foodItem.type}
                    </p>
                    <p className = 'item_category'>
                        side
                    </p>
                </div>
                <div className= 'price'>
                    £3.99
                </div>


            </div>
        </>

    )}

export default Item_card