import React from 'react'
import "./Colab.css"
import colab from "./img/colab.png"
import line from "./img/line.png"
function Colab() {
  return (
    <div className='Colab'
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
   
    }}>
      <h1>National and International collaboration
         to improve human performance in India</h1>
         <img src={colab} alt="" />
    </div>
  )
}

export default Colab
