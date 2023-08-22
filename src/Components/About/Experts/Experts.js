import React from 'react'
import "./Experts.css"
import pc1 from "./img/pc1.png"
import pc2 from "./img/pc2.png"
import pc3 from "./img/pc3.png"
import adv1 from "./img/adv1.png"
import adv2 from "./img/adv2.png"
import adv3 from "./img/adv3.png"
import adv4 from "./img/adv4.png"
function Experts() {
  return (
    <div className='our-Experts'>
     
        {/* <h1>Our Experts</h1>
        <div className="experts">
        <div className="exp">
            <img src={pc1} alt="" />
            <h3>Rishikesh kumar</h3>
        </div>
        <div className="exp">
            <img src={pc2} alt="" />
            <h3>Dr Ravi Teja Rudraraju</h3>
        </div>
        <div className="exp">
            <img src={pc3} alt="" />
            <h3>Dr Ravi Teja Rudraraju</h3>
        </div>
      </div> */}
      <h1 className='inv'>Advisor/Investor</h1>
      <div className="experts">
        <div className="exp">
            <img src={adv1} alt="" />
            <h3>Dr Shakha Gillian</h3>
            <p>Leading paediatrics of US.
             “Top Doctor” from 2006 to 2018 by San Diego</p>
        </div>
        <div className="exp">
            <img src={adv2} alt="" />
            <h3>Deepak Anand</h3>
            <p>Senior leader in the edtech industry.
             Specialist in business management.</p>
        </div>
        <div className="exp">
            <img src={adv3} alt="" />
            <h3>Dr Romanov</h3>
            <p>Seniors sports scientist in US. Author
             of many top selling books including “Running
              Revolution”</p>
        </div>
        <div className="exp">
            <img src={adv4} alt="" />
            <h3>Sai Krishna</h3>
            <p>Leading IT profession in US, passionate about
             health and fitness</p>
        </div>
      </div>
    </div>
  )
}

export default Experts
