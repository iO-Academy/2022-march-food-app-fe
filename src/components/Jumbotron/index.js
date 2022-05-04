import './style.scss'

const Jumbotron = ({restaurantName, restaurantID}) => {
   return (
       <div className="jumbo_background container" >
           <div className="jumbo_title_box">
               <h1 className="jumbo_title">
                   {(restaurantID !== 0) ? restaurantName : "Food. Delivered."}
               </h1>
               {(restaurantID !== 0) ? "" : <p className="jumbo_subtitle">Order your favourite food from local restaurants, right to your door.</p>}
           </div>
       </div>
   )
}

export default Jumbotron
