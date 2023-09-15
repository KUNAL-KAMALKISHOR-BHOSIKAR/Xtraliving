import React from 'react'
import "./Colab.css"
import colab from "./img/colab.png"
import c1 from "./img/c1.png"
import c2 from "./img/c2.png"
import c3 from "./img/c3.png"
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
        <p> <img src={c1} alt="" />Partnered with Gopichand Academy
          to improve performance of athletes</p>
       </div>
       <img src={largecolab} alt="" />
       <div className="second-p">
        <p><img src={c2} alt="" />Exclusive tie-up for India with global
leaders Compex and Precision Nutrition</p>
<p> <img src={c3} alt="" /> Exclusive tie-up for India with global leaders
   Compex and Precision Nutrition</p>
       </div>
           </div>
         <img src={colab} alt="" className='forsmall' />
        
    </div>
  )
}

export default Colab
