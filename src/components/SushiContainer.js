import React from "react"

import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

const SushiContainer = ({ sushis, updateIndices }) => {
  return (
    <div className="belt">
      {sushis.map(sushi => (
        <Sushi
            image={sushi.img_url}
            key={sushi.id}
            name={sushi.name}
            price={sushi.price}
        />
      ))}
      <MoreButton updateIndices={updateIndices} />
    </div>
  )
}

export default SushiContainer
