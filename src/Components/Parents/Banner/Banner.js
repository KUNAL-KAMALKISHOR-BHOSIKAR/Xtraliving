import React from 'react'
import banner from "./img/banner.png"
import { BsArrowRight } from 'react-icons/bs';
import background from "./img/background.png"
function Banner() {
  return (
    <div className='banner'
    style={{backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    }}>
  
     <div className="hero">
       <div className="hero-text">
<h1>Nurturing the Future</h1>
<p>In-depth Workshop for Parents:<br/>Establishing a Solid Health Foundation for Your Child</p>
<a href="https://forms.myfunc.in/myfunc/form/Parents/formperma/Hmookm3FCT-d6QYpuYhDqrDcbOauvtyrm_eiLVbnH8U"><button>Enroll today <BsArrowRight/></button></a>
       </div>
       <div className="hero-img">
    <img src={banner} alt="" />
       </div>
     </div>
    
    </div>
  )
}

export default Banner
