import React from 'react'
import "./Colab.css"
import colab from "./img/colab.png"
import line from "./img/line.png"
import largecolab from "./img/largecolab.png"
function Colab() {
  return (
    <div className='Colab'
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
   
    }}>
      <h1>National and International collaboration
         to improve human performance in India</h1>
         <div className="large">
         <img src={largecolab} alt="" className='forlarge' />
         <p className='txt-1'>Partnered with Gopichand
           Academy <br/>to improve performance of athletes</p>
           <p className='txt-2'>Exclusive tie-up for India with global<br/> leaders 
            Compex and Precision Nutrition</p> 
           </div>
         <img src={colab} alt="" className='forsmall' />
        
    </div>
  )
}

export default Colab
