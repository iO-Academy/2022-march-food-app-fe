import {useState} from "react"
import Homepage from "./components/Homepage"
import Header from "./components/Header"
import Jumbotron from './components/Jumbotron'
import Footer from "./components/Footer"
import OrderPage from "./components/OrderPage";


const App = () => {
  const [activeRestaurantName, setActiveRestaurantName] = useState("")
  const [activeRestaurantId, setActiveRestaurantId] = useState(0)

  const setActiveRestaurant = (name, id)  => {
    setActiveRestaurantName(name)
    setActiveRestaurantId(id)
  }

  const resetActiveRestaurant = () => {
    setActiveRestaurantName('')
    setActiveRestaurantId(0)
  }

  return (
    <>
    <Header restaurantID={activeRestaurantId} resetActiveRestaurant={resetActiveRestaurant}/>
    <Jumbotron restaurantName={activeRestaurantName} restaurantID={activeRestaurantId}/>

      {!activeRestaurantId ? <Homepage setActiveRestaurant={setActiveRestaurant} />: <OrderPage activeRestaurantId={activeRestaurantId}/>}

    <Footer />
    </>
  )
}

export default App