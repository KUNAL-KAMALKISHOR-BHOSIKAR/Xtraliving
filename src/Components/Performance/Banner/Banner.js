import React from 'react'
import "./Banner.css"
import banner from "./img/banner.png"
import { BsArrowRight } from 'react-icons/bs';
function Banner() {
  return (
    <div className='banner'>
  
     <div className="hero">
       <div className="hero-text">
<h1>Unlock Elite Performance</h1>
<p>Tailored Excellence for CXOs<br/> and senior leaders.</p>
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
