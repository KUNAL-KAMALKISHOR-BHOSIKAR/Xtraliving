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

<p>A Comprehensive Workshop on Child<br/> Health (0-10 Years)</p>
<a href="https://forms.myfunc.in/myfunc/form/ConnectwithRishi/formperma/HkPge_e3v8bQoOpsQka6qPmQ5YBTC29DAGd2H5FJaHk"><button>Enroll today <BsArrowRight/></button></a>
       </div>
       <div className="hero-img">
    <img src={banner} alt="" />
       </div>
     </div>
    
    </div>
  )
}

export default Banner
