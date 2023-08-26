import React from 'react'
import "./Coach.css"
import guy from "./img/guy.png"

function Coach() {
  return (
    <div className='Register'>
      <div className="reg-area">
        <div className="reg-img">
<img src={guy} alt="" height={350} />
        </div>
        
        <div className="reg-text">
        <h2 style={{color:"#000"}}>The Power of <span style={{color:"#4E62D6"}}>Nutrition</span></h2>
    <p>Nutrition fuels the body's engine. Our
       customized plans ensure you're not just
        eating, but eating right - maximizing
         energy, recovery, and results.</p>
        </div>
      </div>
    </div>
  )
}

export default Coach;
