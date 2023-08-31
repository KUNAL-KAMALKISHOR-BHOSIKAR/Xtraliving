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
      <h2>Features of the <span style={{color:"#4E62D6"}}>Program</span></h2> 

      <div className="price-duration">
      <div className="price-area">
    <div className="price">
        <h3>Personalized Assessment</h3>
        <span>Begin with an in-depth 
          evaluation of your current strengths
           and areas for improvement.</span>
    </div>
    <div className="price">
        <h3>Dietary Guidance</h3>
        <span>Tailored plans that adapt to your needs and
          progress. Dietary Guidance: Meal plans and
          nutritional advice aligned with your training
          phases.</span>
    </div>
    <div className="price">
        <h3>Custom Training Schedules</h3>
        <span>Meal plans and nutritional advice aligned
           with your training phases.
        </span>
    </div>
    <div className="price">
        <h3>Progress Tracking</h3>
        <span>Monitor your advancements with
           state-of-the-art tools and regular
            check-ins.</span>
    </div>
    <div className="price">
        <h3>Expert Coaches</h3>
        <span>Learn from trainers
           who've worked with the best
            in the Olympic arena.</span>
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
