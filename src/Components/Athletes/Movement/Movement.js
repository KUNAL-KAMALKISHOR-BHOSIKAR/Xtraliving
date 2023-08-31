import React from 'react'
import "./Movement.css"
import m from "./img/m.png"
import background from "./img/background.png"
function Movement() {
  return (
    <div className='Movement'
    style={{backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    }}>
      <div className="mov-controler">
      <div className="m-text">
<h2>Why Focus on <span style={{color:"#4E62D6"}}>Movement?</span> </h2>
<p>Fluidity, strength, and precision in
     movement are the hallmarks of an Olympic
      athlete. We train you to move with purpose,
       reducing the risk of injury and enhancing
        performance.</p>
      </div>
      <div className="m-img">
<img src={m} alt=""  />
      </div>
      </div>
    </div>
  )
}

export default Movement
