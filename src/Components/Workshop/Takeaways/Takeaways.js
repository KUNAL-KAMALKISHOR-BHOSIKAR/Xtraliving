import React from 'react'
import "./Takeaways.css"
import way from "./img/way.png"
import point from "./img/point.png"
function Takeaways() {
  return (
    <div className='takeaways'> 
     <h2>Program <span style={{color:"#4E62D6"}}>Introduction</span> </h2>
     <div className="way-points">
        <div className="way-img">
    <img src={way} alt="" height={400} />
        </div>
        <div className="way-text">
    <div className="point">
        <img src={point} alt="" height={400} />
<div className="way-img-text">
  <p>Time-efficient exercises for strength <br/> and stamina.</p>
  <p>Nutritional hacks for sustained energy.</p>
  <p>Stress-management techniques<br/> tailored for the boardroom.</p>
  <p>Sleep strategies for restorative nights.</p>
</div>
    </div>
        </div>
        </div>  
    </div>
  )
}

export default Takeaways
