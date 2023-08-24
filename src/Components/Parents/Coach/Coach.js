import React from 'react'
import "./Coach.css"
import guy from "./img/guy.png"

function Coach() {
  return (
    <div className='Register'>
        <div className="heading-btn">
      <h2 style={{color:"#000"}}>Meet coach <span style={{color:"#4E62D6"}}>Rishi</span></h2>   
      </div>
      <div className="reg-area">
        <div className="reg-img">
<img src={guy} alt="" height={350} />
        </div>
        <div className="reg-text coach-rishi">
<h3>A unique blend of corporate acumen and elite
fitness expertise, Rishi boasts a foundation
in BE and MBA, paired with over a decade of business
leadership roles at powerhouses like Idea,
<span style={{color:"#4E62D6"}}> Nokia,
Microsoft and Xseed</span>. His transformative journey 
from the boardroom to founding 
<span style={{color:"#4E62D6"}}> Xtraliving </span> 
demonstrates his commitment to holistic excellence. 
With top-tier<span style={{color:"#4E62D6"}}> certifications</span>, including Crossfit, 
Precision Nutrition, and <span style={{color:"#4E62D6"}}> 
Harvard's Culture of Health</span>, 
Rishi has sharpened the performance edges of<span style={{color:"#4E62D6"}}> Olympic 
athletes</span> and leading <span style={{color:"#4E62D6"}}> CXOs</span> alike. </h3>
        </div>
      </div>
    </div>
  )
}

export default Coach;
