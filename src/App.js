import {useEffect, useState} from "react"
import Homepage from "./components/Homepage"
import Header from "./components/Header"
import Jumbotron from './components/Jumbotron'
import Footer from "./components/Footer"

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
    <Homepage buttonSetter={buttonSetter}/>
    <Footer />
    </>
  )
}

export default App