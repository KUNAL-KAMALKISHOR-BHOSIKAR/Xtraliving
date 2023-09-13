import React from 'react'
import "./Banner.css"
import banner from "./img/banner.png"
import { BsArrowRight } from 'react-icons/bs';
import background from "./img/background.png"
function Banner() {
  return (
    <div className='banner'
    style={{backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    }}
    >
  
     <div className="hero">
       <div className="hero-text">
<h1>Unlock Elite Performance</h1>
<p>Tailored Excellence for CXOs and senior leaders.</p>
<a href="https://forms.myfunc.in/myfunc/form/PerformanceforLeaders/formperma/bPEs3RSxvGx-NqWai0HX2aTDf8XbB8MdtfO4BR67kxg">
  <button>  Enroll today <BsArrowRight/></button></a>
       </div>
       <div className="hero-img">
    <img src={banner} alt="" />
       </div>
     </div>
    
    </div>
  )
}

export default Banner
