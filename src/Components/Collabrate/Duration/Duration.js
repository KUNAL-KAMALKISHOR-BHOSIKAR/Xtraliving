import React from 'react'
import price from "./img/price.png"
import line from "./img/line.png"
function Duration() {
  return (
    <div className='Duration'
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>
      <h2>Our <span style={{color:"#4E62D6"}}>Projects</span></h2> 

      <div className="price-duration">
      <div className="price-area">
    <div className="price">
        <h3>Human Performance Labs</h3>
        <span>Harnessing biometrics and
           innovative tech for unparalleled
            insights into physical capabilities.</span>
    </div>
    <div className="price">
        <h3>Community Sports Initiatives</h3>
        <span>Building platforms for raw talent
           to shine and fostering community health.</span>
    </div>
    <div className="price">
        <h3>Fitness Curriculum Development</h3>
        <span>Tailored programs that cater to 
          unique institutional needs, ensuring the
           best outcomes.
        </span>
    </div>
   
        </div>
             <div className="price-img">
    <img src={price} alt="" height={350} />
    </div>
    </div>
    </div>
  )
}

export default Duration
