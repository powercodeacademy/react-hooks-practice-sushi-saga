import React, { useState, useEffect } from "react"

import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

const App = () => {
  const [sushiList, setSushiList] = useState([]) // [GRAND] List of sushi that we fetch from the database and have available in the application
  const [indices, setIndices] = useState({ start: 0, end: 4 }) // Current start/end indices of sushi that are shown on the page
  const [eatenSushi, setEatenSushi] = useState([]) // Running list of sushi that we have selected/clicked on/eaten; used to display number of empty plates
  const [sushiBudget, setSushiBudget] = useState(200) // Amount of $ that we have to spend on sushi

  /*
    On initial render, told our App component to fetch our sushi from the database
    and set that sushi to our sushiList state
  */
  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setSushiList(data))
  }, [])

  /*
    - Used as the onClick callback function for when the "More sushi!" button is clicked
    - Updates the indices state (used to determine the sushis that are displayed on the page)
  */
  const updateIndices = () => {
    const newStart = indices.start + 4
    const newEnd = indices.end + 4

    setIndices({ start: newStart, end: newEnd })
  }

  /*
    - Checks the state of our sushi budget against the price of the current sushi we're trying to eat (line 42)
    - If we have the budget for it, deduct the price of that sushi from our sushi budget (update sushiBudget state) (line 43)
      AND add that sushi to our running list of eaten sushi (update eatenSushi state) (line 44)
    - If we don't have the budget for it, alert the user they can't eat it (line 46)
  */
  const handleEatSushi = (sushi) => {
    if (sushiBudget >= sushi.price) {
      setSushiBudget(sushiBudget - sushi.price)
      setEatenSushi([...eatenSushi, sushi])
    } else {
      alert("You don't have enough money to eat this :(")
    }
  }

  // The list of sushi to be displayed on the page (using our sushiList state and indices state)
  const sushiToDisplay = sushiList.slice(indices.start, indices.end)

  return (
    <div className="app">
      <SushiContainer
          eatenSushi={eatenSushi}
          onEatSushi={handleEatSushi}
          sushis={sushiToDisplay}
          updateIndices={updateIndices}
      />
      <Table
          plates={eatenSushi}
          sushiBudget={sushiBudget}
      />
    </div>
  )
}

export default App
