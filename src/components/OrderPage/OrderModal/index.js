import './OrderModal.scss'

const OrderModal = () => {
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__header">
                    <h3>Thank you</h3>
                    <button className='modal__icon--close'><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className="modal__main">
                    <p>The restaurant has received your order <br /> <br />
                    Estimated time of arrival: <span>TIME</span></p>  
                    <div className="modal__progressBar">
                        <div className="modal__progressBar--inner">
                    </div>
                    </div>
                    <p>Your order is being prepared</p>
                </div>
                <div className="modal__footer">
                    <button className='modal__close'>Close</button>
                </div>
            </div>
        </div>
    )
}

export default OrderModal