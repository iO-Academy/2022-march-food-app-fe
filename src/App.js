import {useEffect, useState} from "react"
import Homepage from "./components/Homepage"
import Header from "./components/Header"
import Jumbotron from './components/Jumbotron'
import Footer from "./components/Footer"

const App = () => {

  return (

    <>
    <Header />
    <Jumbotron />
    <Homepage />
    <Footer />
    </>
  )
}

export default App;