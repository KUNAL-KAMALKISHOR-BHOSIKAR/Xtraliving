import React from 'react'
import "./coach.css"
import guy from "./img/guy.png"

function Coach() {
  return (
    <div className='Register-nu'>
      <div className="reg-area-nu">
        <div className="reg-img-nu">
<img src={guy} alt=""  />
        </div>
        
        <div className="reg-text-ath-nu">
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
