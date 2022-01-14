import "./App.css";
import { useState, useEffect } from "react";
import Button from "../Button";
import Fact from "../Fact";
import Header from "../Header";

function App() {
  // State for Fact of the Day
  const [factOTD, setFactOTD] = useState({});
  // State for Random Fact
  const [fact, setFact] = useState({});
  // State for Button Toggle
  const [toggle, setToggle] = useState(false);

  // useEffect for generating a new Fact of the Day on page reload.
  useEffect(() => {
    async function getFactOfTheDay() {
      const apiResponse = await fetch(
        `https://uselessfacts.jsph.pl/today.json?language=en`
      );
      const data = await apiResponse.json();

      // Sets factOTD to the data object returned from the API
      setFactOTD(data);
    }

    // Calls getFactOfTheDay function
    getFactOfTheDay();
  }, []);

  useEffect(() => {
    // Code for fetching the api goes here
  }, [toggle]);

  // Function for toggling the toggle state
  function handleClick() {
    setToggle(!toggle);
    console.log(toggle);
  }

  // Function for the button (onClick) - done
  // Function needs to be return a boolean response (true/false) (works as a toggle button) - done
  // The true or false response needs to be stored into a state - done
  // Create a useEffect() for the async api get request which takes in the true/false state as the param []
  // Store the data from the api into the fact state using setState(data)
  // Pass the fact state into <Fact /> as a prop (fact={fact})

  return (
    <div className="App">
      <Header factOTD={factOTD} />
      <Fact />
      <Button handleClick={handleClick} />
    </div>
  );
}

export default App;
