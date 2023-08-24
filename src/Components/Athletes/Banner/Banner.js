import React from 'react'
import "./Banner.css"
import banner from "./img/banner.png"
import { BsArrowRight } from 'react-icons/bs';
function Banner() {
  return (
    <div className='banner'>
  
     <div className="hero">
       <div className="hero-text">
<h1>Unleash Your Olympic Potential</h1>

<p>Master Movement & Nutrition with <br/>Elite Training Regimens</p>
<button>Enroll today <BsArrowRight/></button>
       </div>
       <div className="hero-img">
    <img src={banner} alt="" />
       </div>
     </div>
    
    </div>
  )
}

export default Banner
