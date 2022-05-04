import './RestaurantButton.scss'

const RestaurantButton = ({name, setActiveRestaurant, id}) => {
    return (
        <button className='button' onClick={() => {setActiveRestaurant(name, id)}}>{name}</button>
    )
}

export default RestaurantButton
