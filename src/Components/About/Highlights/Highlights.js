import React from 'react'
import './Highlights.css'
import  highlights from "./img/highlights.png"
import  forlarge from "./img/forlarge.png"

import line from "./img/line.png"
function Highlights() {
  return (
    <div className='high'
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat'
    }} >
      <h1>Other Highlights</h1>  
      <div className="fullsize">
        <div className="ps">
        <p>100+ national coverages by media.</p>
        <p>Finalist in 40 under 40 leaders by Business World<br/> 2020.</p>
        <p>Part of the team to launch an MBA in Sports in KJ<br/> Somaiya and provide inputs for the curriculum.</p>
        <p>Launched an app to improve habits for better<br/> health with 25K downloads in one month</p>
        </div>
      <img src={forlarge} alt="" className='forlarge' />
      </div>  
      <img src={highlights} alt="" className='forsmall' /> 
    </div>
  )
}

export default Highlights
