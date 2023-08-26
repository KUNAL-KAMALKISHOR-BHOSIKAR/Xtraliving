import React from 'react'
 import "./Facility.css"
 import f1 from "./img/f1.png"
 import f2 from "./img/f2.png"
 import f3 from "./img/f3.png"
function Facility() {
  return (
    <div className='Facility'>
       <h2>Workshop <span style={{color:"#4E62D6"}}>Facilitators</span></h2>
       <span className='into-fac'>Learn from top-tier health and business experts who've mastered
         the art of thriving in demanding environments.</span>
        <div className="three-guys">
            <div className="fac-guy">
                <img src={f1} alt="" />
                <h3>Arjun</h3>
                <p>
                Learn from top-tier health and business experts who've
                 mastered the art of thriving in demanding environments.    
                </p>
            </div>

            <div className="fac-guy">
                <img src={f2} alt="" />
                <h3>Aryan</h3>
                <p>
                Nutrition Expert <br></br>Dietary Coach    
                </p>
            </div>

            <div className="fac-guy">
                <img src={f3} alt="" />
                <h3>Vikram</h3>
                <p>
                Functional Fitness Coach <br></br>Mobility Specialist    
                </p>
            </div>
        </div>
    </div>
  )
}

export default Facility
