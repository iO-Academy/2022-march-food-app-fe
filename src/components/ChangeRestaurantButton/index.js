import './ChangeRestaurantButton.scss'

const ChangeRestaurantButton = ({resetActiveRestaurant}) => {
    return (
        <a href='#' className='changeButton' onClick={resetActiveRestaurant}> &lt;&lt; Change Restaurant</a>
    )
}

export default ChangeRestaurantButton