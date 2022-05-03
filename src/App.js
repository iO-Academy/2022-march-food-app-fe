import './App.css';
import {useEffect, useState} from "react";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Jumbotron from './components/Jumbotron';
import Footer from "./components/Footer"

function App() {

  const [restaurantsData, setRestaurantsData] = useState([])

  const updateRestaurantsData = (data) => {
    setRestaurantsData(data)
  }

  useEffect(() => {
    console.log(restaurantsData) // This demonstrates that the restaurantsData state is updated and accessible
  }, [restaurantsData])

  return (

    <>
    <div className="App">
      <Jumbotron />
      <Footer />
    </div>
    
    <main>
      <Homepage data={restaurantsData} updateRestaurantsData={updateRestaurantsData}/>
    </main>
    </>
  );
}

export default App;
