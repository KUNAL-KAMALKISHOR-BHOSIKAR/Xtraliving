import React from 'react'
import "./Worked.css"
import w1 from "./img/w1.png"
import w2 from "./img/w2.png"
import w3 from "./img/w3.png"
import w4 from "./img/w4.png"
function Worked() {
  return (
    <div className='Worked'>
      <h2>Worked <span style={{color:"#4E62D6"}}>with</span></h2>
      <img src={w1} alt="" />  
      <img src={w2} alt="" /> 
      <img src={w3} alt="" />  
      <img src={w4} alt="" /> 
    </div>
  )
}

export default Worked
