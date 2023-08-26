import React from 'react'
import "./Movement.css"
import m from "./img/m.png"
function Movement() {
  return (
    <div className='Movement'>
      <div className="m-text">
<h2>Why Focus on Movement?</h2>
<p>Fluidity, strength, and precision in
     movement are the hallmarks of an Olympic
      athlete. We train you to move with purpose,
       reducing the risk of injury and enhancing
        performance.</p>
      </div>
      <div className="m-img">
<img src={m} alt="" height={350} />
      </div>
    </div>
  )
}

export default Movement
