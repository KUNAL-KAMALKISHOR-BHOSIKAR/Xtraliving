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
       <div className="first-p">
        <p>Partnered with Gopichand Academy
          to improve performance of athletes</p>
       </div>
       <img src={largecolab} alt="" />
       <div className="second-p">
        <p>Exclusive tie-up for India with global
leaders Compex and Precision Nutrition</p>
       </div>
           </div>
         <img src={colab} alt="" className='forsmall' />
        
    </div>
  )
}

export default Colab
