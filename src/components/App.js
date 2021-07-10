import React, { useState, useEffect } from "react"

import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

const App = () => {
  const [sushiList, setSushiList] = useState([])
  const [indices, setIndices] = useState({ start: 0, end: 4 })

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setSushiList(data))
  }, [])

  const sushiToDisplay = sushiList.slice(indices.start, indices.end)

  return (
    <div className="app">
      <SushiContainer sushis={sushiToDisplay}/>
      <Table />
    </div>
  )
}

export default App
