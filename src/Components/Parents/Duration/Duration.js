import React from 'react'
import "./Duration.css"
import price from "./img/price.png"
function Duration() {
  return (
    <div className='Duration'>
      <h2>Price, Structure & Duration</h2> 
      <div className="price-duration">
      <div className="price-area">
    <div className="price">
        <h3>Price</h3>
        <span>INR  4,80,000 <small>(Inclusive of all taxes)</small></span>
    </div>
    <div className="price">
        <h3>Duration</h3>
        <span>12 months</span>
    </div>
    <div className="price">
        <h3>Format</h3>
        <span>Personalized one weekly one-on-one coaching
             sessions with coach Rishi, designed to be concise yet impactful.
        </span>
    </div>
    <div className="price">
        <h3>Integration</h3>
        <span>Our program effortlessly intertwines with
     your daily activities, ensuring continuous
        development without disrupting your
         schedule.</span>
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
