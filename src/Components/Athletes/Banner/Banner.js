import React from 'react'

import banner from "./img/banner.png"
import { BsArrowRight } from 'react-icons/bs';
function Banner() {
  return (
    <div className='banner'>
  
     <div className="hero">
       <div className="hero-text ath-txt">
<h1>Unleash Your Olympic Potential</h1>

<p>Master Movement & Nutrition with <br/>Elite Training Regimens</p>
<a href="https://forms.myfunc.in/myfunc/form/UnlockElitePerformanceforLeaders/formperma/4b4maZKQlhbNpgMtSqCH_nYsizcB0Ad5yxk4IXoMIhA">
  <button>Enroll today <BsArrowRight/></button></a>
       </div>
       <div className="hero-img ath-banner">
    <img src={banner} alt=""  className='ath-img'  />
       </div>
     </div>
    
    </div>
  )
}

export default Banner
