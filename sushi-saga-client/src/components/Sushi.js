import React, { Fragment } from 'react'

const Sushi = ({sushi, eaten, eatSushi}) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => eatSushi(sushi)}>
        {
          eaten.includes(sushi) ?
            null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
