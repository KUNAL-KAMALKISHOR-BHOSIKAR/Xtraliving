import React from 'react'
import "./Nature.css"
import line from "./img/line.png"

import natural from "./img/nature.png"
import firstsmall from "./img/firstsmall.png"
function Nature() {
  return (
    <div className='Nature'
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
   backgroundPosition:'bottom bottom'
    }}>
        <div className="natural-wrapper">
      <div className="natural-text">
    <h1>Inspired by nature</h1>
    <p>We have curated our solution on the three pillars
    of movement, nutrition and recovery. We are
    integrating the same in our lifestyle to form 
    sustainable healthy habits. Fundamental movements,
    real food and good sleep, are the elixir we need.
    These sustainable healthy habits can transform an
    ordinary soul into a high-performing athlete, reduce
    the risk of injury, and take human performance to
    the next level. We have been fortunate to work with
    kids and adults to unlock the hidden potential to
        perform and increase athletic performance. We are
        invested in the kids to ensure that we care for      
        the CAUSE. Most problems that we see as an adult
        result from poor habits while growing up</p>
      </div>
      <div className="natural-img">
<img src={natural} alt=""  className="natural-big-img" />
<img src={firstsmall} alt="" className="natural-small-img"  />
      </div>
      </div>
      
    </div>
  )
}

export default Nature
