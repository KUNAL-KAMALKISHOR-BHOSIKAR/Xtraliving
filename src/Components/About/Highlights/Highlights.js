import React from 'react'
import './Highlights.css'
import  highlights from "./img/highlights.png"
import "../Colab/Colab.css"
import line from "./img/line.png"
function Highlights() {
  return (
    <div className='Colab'
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
   
    }} >
      <h1>Other Highlights</h1>  
      <img src={highlights} alt="" /> 
    </div>
  )
}

export default Highlights
