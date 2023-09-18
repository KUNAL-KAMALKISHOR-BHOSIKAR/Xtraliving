import React from 'react'
import "./Ath.css"
import banner from "./img/banner.png"
import { BsArrowRight } from 'react-icons/bs';
function Banner() {
  return (
    <div className='banner-ath'>
  
     <div className="ath-hero">
       <div className="ath-hero-text">
<h1>Unleash Your Olympic Potential</h1>

<p>Master Movement & Nutrition with <br/>Elite Training Regimens</p>
<a href="https://forms.myfunc.in/myfunc/form/UnlockElitePerformanceforLeaders/formperma/4b4maZKQlhbNpgMtSqCH_nYsizcB0Ad5yxk4IXoMIhA">
  <button>Enroll today <BsArrowRight/></button>
  </a>
       </div>
       <div className="ath-hero-img">
    <img src={banner} alt="" />
       </div>
     </div>
    </div>
  )
}

export default Banner
