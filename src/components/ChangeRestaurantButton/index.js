import './ChangeRestaurantButton.scss'

const ChangeRestaurantButton = ({idNameResetter}) => {
    return (
        <a href='#' className='changeButton' onClick={idNameResetter}> &lt;&lt;Change Restaurant</a>
    )
}

export default ChangeRestaurantButton