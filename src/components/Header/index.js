import './Header.scss'
import ChangeRestaurantButton from "../ChangeRestaurantButton";

const Header = ({restaurantID, idNameResetter}) => {
    return(
        <>
                <div className='App-header'>
            <div className='header-container'>
                    <p><span className= 'blue-text'> Food</span>Delivery</p>
                    {restaurantID ? <ChangeRestaurantButton idNameResetter={idNameResetter} /> : ''}
                </div>
            </div>
            <div className="theLine">
            </div>
        </>
    )
}

export default Header