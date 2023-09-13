import React from 'react'
import banner from "./img/banner.png"
import { BsArrowRight } from 'react-icons/bs';
function Banner() {
  return (
    <div className='banner'>
  
     <div className="hero">
       <div className="hero-text">
<h1>Health Mastery for the Busy Professional</h1>
<p>Unlock Vitality & Wellness Amidst the Hustle</p>
 <a href="https://forms.myfunc.in/myfunc/form/Busyprofessionals/formperma/SaTm5oxK-pL7iHQGWS9_gxO79P7U1ft9XCodEF3RaWc">
   <button>Enroll today <BsArrowRight/></button></a>
       </div>
       <div className="hero-img">
    <img src={banner} alt="" />
       </div>
     </div>
    
    </div>
  )
}

export default Banner
