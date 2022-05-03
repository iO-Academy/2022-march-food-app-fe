import './App.css';
import {useEffect, useState} from "react";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Jumbotron from './components/Jumbotron';
import Footer from "./components/Footer"

function App() {
  const [activeRestaurantName, setActiveRestaurantName] = useState("")
  const [activeRestaurantId, setActiveRestaurantId] = useState(0)

  function buttonSetter(name, id) {
    setActiveRestaurantName(name)
    setActiveRestaurantId(id)
  }

  return (
    <>
    <Header />
    <div className="App">
      <Jumbotron restaurantName={activeRestaurantName} restaurantID={activeRestaurantId}/>
    </div>
    
    <main>
      <Homepage buttonSetter={buttonSetter}/>
    </main>
    <Footer />
    </>
  );
}

export default App;
