import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Homepage from "./components/Homepage";

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
    <main>
      <Homepage data={restaurantsData} updateRestaurantsData={updateRestaurantsData}/>
    </main>
    </>
  );
}

export default App;
