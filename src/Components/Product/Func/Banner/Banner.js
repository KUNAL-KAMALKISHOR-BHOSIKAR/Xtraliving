import React from 'react'
import "./Banner.css"
import func from "./img/func.png"
import { BsArrowRight } from 'react-icons/bs';
function Banner() {
  return (
    <div className='func-b'>
  
     <div className="func-banner">
       <div className="func-banner-text">
<h1>Meet FUNc</h1>
<p>Safe, Versatile & Game-Changing!</p>
 <a href="https://forms.myfunc.in/myfunc/form/GetyouFUNckit/formperma/4uWTcZgwnwU1hDAQkrbT-MrNu8M85WB570xl6yBDRWM">
  <button>Enroll today <BsArrowRight/></button></a> 
       </div>
       <div className="func-banner-img">
    <img src={func}  alt="" />
       </div>
     </div>
    
    </div>
  )
}

export default Banner
