import './App.css';
import {useEffect, useState} from "react";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Jumbotron from './components/Jumbotron';
import Button from './components/Button'
import Footer from "./components/Footer"

function App() {

  const [restaurantsData, setRestaurantsData] = useState([])

  const updateRestaurantsData = (data) => {
    setRestaurantsData(data)
  }

  useEffect(() => { 
  }, [restaurantsData])

  return (

    <>
    <Header />
    <div className="App">
      <Jumbotron />
    </div>
    
    <main className='container restaurant__grid'>
      <Homepage restaurantsData={restaurantsData} updateRestaurantsData={updateRestaurantsData}/>
    </main>
    <Footer />
    </>
  );
}

export default App;
