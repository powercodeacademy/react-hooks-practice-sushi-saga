import React from "react"

const Sushi = ({image, isEaten, name, onEatSushi, price}) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={onEatSushi}>
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
