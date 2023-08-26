import React from 'react'
import "./Benefits.css"
import background from "./img/background.png"
import emp1 from "./img/emp1.png"
import emp2 from "./img/emp2.png"
import emp3 from "./img/emp3.png"
function Benefits() {
  return (
    <div className='benefits'>
      <div className="executives" 
      style={{backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '600px 200px',
        backgroundPosition:"center"
       }}>
        <h2>Empowering Top Executives</h2>
    <span>Enhance Decision-Making,
             Resilience, and <br/>Leadership Stamina.</span>
      </div>
      <h2>Benefits</h2>
      <div className="empowering">
      
        <div className="emp-list">
            <div className="emp-img">
                <img src={emp1} alt="" height={50} />
            </div>
            <span>Enhanced Cognitive Abilities</span>
        </div>
        <div className="emp-list">
            <div className="emp-img" style={{backgroundColor:"#EAC7B7"}}>
                <img src={emp2}  height={50} alt="" />
            </div>
            <span>Physical Vitality Boost</span>
        </div>
        <div className="emp-list">
            <div className="emp-img" style={{backgroundColor:"#FFEFC3"}}>
                <img src={emp3}  height={50} alt="" />
            </div>
            <span>Stress Reduction</span>
        </div>
      </div>
    </div>
  )
}

export default Benefits
