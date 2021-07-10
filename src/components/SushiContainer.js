import React from "react"

import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

const SushiContainer = ({ eatenSushi, onEatSushi, sushis, updateIndices }) => {
  return (
    <div className="belt">
      {sushis.map(sushi => {
        const isEaten = eatenSushi.includes(sushi)

        const handleEatSushi = () => {
          if (!isEaten) {
            onEatSushi(sushi)
          }else{
            alert("You've already eaten this!")
          }
        }

        return (
          <Sushi
              image={sushi.img_url}
              isEaten={isEaten}
              key={sushi.id}
              name={sushi.name}
              onEatSushi={handleEatSushi}
              price={sushi.price}
          />
        )
      })}
      <MoreButton updateIndices={updateIndices} />
    </div>
  )
}

export default SushiContainer
