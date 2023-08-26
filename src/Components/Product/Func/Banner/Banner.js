import React from 'react'
import "./Banner.css"
import func from "./img/func.png"
import { BsArrowRight } from 'react-icons/bs';
function Banner() {
  return (
    <div className='func-b'>
  
     <div className="func-banner">
       <div className="func-banner-text">
<h1>Unlock Elite Performance</h1>
<p>Tailored Excellence for CXOs<br/> and senior leaders.</p>
<button>Enroll today <BsArrowRight/></button>
       </div>
       <div className="func-banner-img">
    <img src={func} alt="" />
       </div>
     </div>
    
    </div>
  )
}

export default Banner
