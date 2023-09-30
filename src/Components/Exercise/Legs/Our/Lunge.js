import React from 'react'
import "./Ourtwo.css"

import lunge from "./lunge.png"
function Lunge() {
  return (
    <div className='ourtwo'>
     
      <div className="second-img">
        <img   src={lunge} alt="" height={400} />
      </div>
      <div className="second-text">
    <h1>LUNGEs</h1>
    <h3>
LUNGEs are a lower-body exercise where you step forward or backward with one leg, bending both knees to create a 90-degree angle, targeting leg and glute muscles.
</h3>
<p>To perform lunges, start with feet hip-width apart, step forward or backward with one leg, bend both knees to 90-degree angles, and then return to the starting position. Keep your upper body upright, engage your core, and alternate legs for repetitions to target your leg and glute muscles effectively.
</p>
<button>Know more</button>
      </div>
    </div>
  )
}

export default Lunge
