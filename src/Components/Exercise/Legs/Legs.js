import React from 'react'
import "./Legs.css"
import Squat from './Our/Squat'
import Lunge from "./Our/Lunge"
import line from "../../Home/img/line.png"
function Legs() {
  return (
    <div className='Squats'>
        <div className="ex-area"style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>
      <Squat/>
      <Lunge/>
      </div>
    </div>
  )
}

export default Legs
