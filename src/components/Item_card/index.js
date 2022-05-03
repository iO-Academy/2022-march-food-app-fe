import './Item_card.css'

const Item_card = ({foodName, price, calories, foodType, side}) => {
    return(
        <>
            <div className = 'item_card'>
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
                <div className= 'price'>
                    £{price}
                </div>
            </div>
        </>
    )
}

export default Item_card