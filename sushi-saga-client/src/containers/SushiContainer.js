import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, eaten, eatSushi, moreSushi}) => {

  const renderSushis = () => {
    return sushis.map(sushi =>
      <Sushi
        key={`sushis-${sushi.id}`}
        sushi={ sushi }
        eaten={eaten}
        eatSushi={eatSushi}
      />)
  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushis()
        }
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
