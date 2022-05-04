import './Header.scss'
import ChangeRestaurantButton from "../ChangeRestaurantButton";

const Header = ({restaurantID, resetActiveRestaurant}) => {
    return(
        <>
                <div className='App-header'>
            <div className='header-container'>
                    <p><span className= 'blue-text'> Food</span>Delivery</p>
                    {restaurantID ? <ChangeRestaurantButton resetActiveRestaurant={resetActiveRestaurant} /> : ''}
                </div>
            </div>
        </>
    )
}

export default Header