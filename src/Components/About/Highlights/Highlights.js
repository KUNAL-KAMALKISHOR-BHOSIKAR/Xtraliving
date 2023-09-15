import React from 'react'
import './Highlights.css'
import high from "./img/high.png"
import h1 from "./img/h1.png"
import h2 from "./img/h2.png"
import h3 from "./img/h3.png"
import h4 from "./img/h4.png"
import line from "./img/line.png"
function Highlights() {
  return (
    <div className='high'
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat'
    }} >
      <h1>Other Highlights</h1>  
      <div className="high-area">
        <div className="high-img">
  <img src={high} alt="" />
        </div>
        <div className="high-text">
<div className="high-item">
  <img src={h1} alt="" />
<p>100+ national coverages by media.</p>
</div>
<div className="high-item">
<img src={h2} alt="" />
<p>Finalist in 40 under 40 leaders by Business World 2020.</p>
</div>
<div className="high-item">
<img src={h3} alt="" />
<p>Part of the team to launch an MBA in Sports in KJ Somaiya and provide inputs for the curriculum.</p>
</div>
<div className="high-item">
<img src={h4} alt="" />
<p>Launched an app to improve habits for better health with 25K downloads in one month</p>
</div>
        </div>
    </div>
    </div>
  )
}

export default Highlights



