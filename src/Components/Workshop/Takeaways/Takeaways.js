import React from 'react'
import "./Takeaways.css"
import way from "./img/way.png"
import t1 from "./img/t1.png"
import t2 from "./img/t2.png"
import t3 from "./img/t3.png"
import t4 from "./img/t4.png"

import background from "./img/background.png"
function Takeaways() {
  return (
    <div className='takeaways'
    style={{backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition:"right center"
   }}> 
     <h2>Program <span style={{color:"#4E62D6"}}>Introduction</span> </h2>
     <div className="way-points">
        <div className="way-img">
    <img src={way} alt="" height={400} />
        </div>
        <div className="way-text">
    <div className="point">
       <div className="point-item">
        <img src={t1} alt="" />
       <p>Time-efficient exercises for strength and stamina.</p>
       </div>
       <div className="point-item">
       <img src={t2} alt="" />

       <p>Nutritional hacks for sustained energy.</p>
       </div>
       <div className="point-item">
       <img src={t3} alt="" />

       <p>Stress-management techniques tailored for the boardroom.</p>
       </div>
       <div className="point-item">
       <img src={t4} alt="" />

       <p>Sleep strategies for restorative nights.</p>
       </div>
    </div>
        </div>
        </div>  
    </div>
  )
}


export default Takeaways
