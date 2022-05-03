import {useEffect, useState} from "react"
import Homepage from "./components/Homepage"
import Header from "./components/Header"
import Jumbotron from './components/Jumbotron'
import Footer from "./components/Footer"
import Order_page from "./components/Order_page";

const App = () => {
  const [activeRestaurantName, setActiveRestaurantName] = useState("")
  const [activeRestaurantId, setActiveRestaurantId] = useState(0)

  function buttonSetter(name, id) {
    setActiveRestaurantName(name)
    setActiveRestaurantId(id)
  }

  function idNameResetter() {
    setActiveRestaurantName('')
    setActiveRestaurantId(0)
  }

  return (
    <>
    <Header restaurantID={activeRestaurantId} idNameResetter={idNameResetter}/>
    <Jumbotron restaurantName={activeRestaurantName} restaurantID={activeRestaurantId}/>
      {!activeRestaurantId ? <Homepage buttonSetter={buttonSetter} />: <Order_page activeRestaurantId={activeRestaurantId}/>}
    <Footer />
    </>
  )
}

export default App