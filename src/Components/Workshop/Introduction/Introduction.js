import React from 'react'
import intro from "./img/intro.png"

function Introduction() {
return (
<div className='Introduction'>
    <h2>Program <span style={{color:"#4E62D6"}}>Introduction</span> </h2>
    <div className="img-text-area">
    <img src={intro} height={350} alt="" />
    <span>Success shouldn't compromise health.
       Discover the blueprint to integrate
        well-being seamlessly into your
         fast-paced life.</span>
    </div>
</div>
  )
}

export default Introduction
