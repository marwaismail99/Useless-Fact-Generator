import "./App.css";
import {useState, useEffect} from 'react';
import Button from "../Button";
import Quotes from "../Quotes";
import Header from "../Header";

function App() {

const [factOTD, setFactOTD] = useState({})

useEffect(() => {
  async function getFactOfTheDay() {
    const apiResponse = await fetch (`https://uselessfacts.jsph.pl/today.json?language=en`)
    const data = await apiResponse.json()
    setFactOTD(data)
  }
  getFactOfTheDay()
}, [])

  return (
    <div className="App">
      <Header factOTD={factOTD}/>
      <Quotes />
      <Button />
    </div>
  );
}

export default App;
