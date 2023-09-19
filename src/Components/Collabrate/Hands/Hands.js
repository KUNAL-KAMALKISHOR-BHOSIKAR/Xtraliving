import React from 'react'
import "./Hands.css"
import School from './School'
import State from "./State"
import Companies from './Companies'
function Hands() {
  return (
    <div className='Hands'>
      <h2>Join Hands with <span style={{color:"#4E62D6"}}>Xtraliving</span></h2>
      <div className="items">
      <School/>
      <Companies/>
      <State/>
    </div>
    </div>
  )
}

export default Hands
