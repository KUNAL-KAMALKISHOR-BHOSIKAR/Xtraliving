import React from 'react'
import "./Naturaltwo.css"
import naturaltwo from "./img/naturaltwo.png"
import twosmall from "./img/twosmall.png"
import line2 from "./img/line2.png"
function Naturaltwo() {
  return (
    <div className='Naturaltwo'
    style={{backgroundImage: `url(${line2})`,
    backgroundRepeat: 'no-repeat',
   backgroundPosition:'center center'
    }}>
      <div className="second-img">
<img src={naturaltwo} alt="" className="natural-big-img"/>
<img src={twosmall} alt="" className="natural-small-img"  />
      </div>
      <div className="second-nature-text">
<h1>Projects to make an impact at scale.</h1>
<p>We have curated our solution on the three pillars
of movement, nutrition and recovery. We are
integrating the same in our lifestyle to form
sustainable healthy habits. Fundamental movements,
real food and good sleep, are the elixir we need
. These sustainable healthy habits can transform
an ordinary soul into a high-performing athlete,
reduce the risk of injury, and take human
performance to the next level. We have been
fortunate to work with kids and adults to
unlock the hidden potential to perform and
increase athletic performance. We are
invested in the kids to ensure that we
care for the CAUSE. Most problems that
we see as an adult result from poor 
habits while growing up</p>
      </div>
    </div>
  )
}

export default Naturaltwo
