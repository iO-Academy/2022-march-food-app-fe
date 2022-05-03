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

  return (
    <>
    <Header />
    <Jumbotron restaurantName={activeRestaurantName} restaurantID={activeRestaurantId}/>
    <Homepage buttonSetter={buttonSetter}/>
    <Footer />
    </>
  )
}

export default App