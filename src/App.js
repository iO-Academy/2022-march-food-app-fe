import './App.css';
import {useEffect, useState} from "react";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Jumbotron from './components/Jumbotron';
import Footer from "./components/Footer"

function App() {

  return (

    <>
    <Header />
    <div className="App">
      <Jumbotron />
    </div>
    
    <main className='container restaurant__grid'>
      <Homepage />
    </main>
    <Footer />
    </>
  );
}

export default App;
