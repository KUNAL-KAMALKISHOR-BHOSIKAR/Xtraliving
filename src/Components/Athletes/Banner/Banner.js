import React from 'react'

import banner from "./img/banner.png"
import { BsArrowRight } from 'react-icons/bs';
function Banner() {
  return (
    <div className='banner'>
  
     <div className="hero">
       <div className="hero-text">
<h1>Unleash Your Olympic Potential</h1>

<p>Master Movement & Nutrition with <br/>Elite Training Regimens</p>
<a href="https://forms.myfunc.in/myfunc/form/ConnectwithRishi/formperma/HkPge_e3v8bQoOpsQka6qPmQ5YBTC29DAGd2H5FJaHk"><button>Enroll today <BsArrowRight/></button></a>
       </div>
       <div className="hero-img">
    <img src={banner} alt="" style={{height:"24rem"  }} />
       </div>
     </div>
    
    </div>
  )
}

export default Banner
