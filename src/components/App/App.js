import "./App.css";
import { useState, useEffect } from "react";
import Button from "../Button";
import Fact from "../Fact";
import Header from "../Header";
import TweetButton from "../TweetButton";

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

  // useEffect for generating a new fact on button click.
  useEffect(() => {
    // Code for fetching the api goes here
    async function getRandomFact() {
      const apiResponse = await fetch (`https://uselessfacts.jsph.pl/random.json?language=en`)
      const data = await apiResponse.json()

      // Sets fact to the data object returned from the API
      setFact(data)
    }

    // Calls getRandomFact function
    getRandomFact()
  }, [toggle]);

  // Function for toggling the toggle state
  function handleClick() {
    setToggle(!toggle);
    console.log(toggle);
  }

  // Function for toggling the toggle state on TweetButton
  function handleTweet() {
    setToggle(!toggle);
    console.log(toggle)
  }

  return (
    <div className="App">
      <Header factOTD={factOTD} />
      <Fact fact={fact}/>
      <TweetButton fact={fact} handleTweet={handleTweet}/>
      <Button handleClick={handleClick} />
    </div>
  );
}

export default App;
