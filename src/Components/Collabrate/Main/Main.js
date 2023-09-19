import React from 'react'

import{ Data} from "./Data"
import MainTamp from './mainTamp'
import line from "./img/line.png"
function Main() {
  return (
    <div className='Main'
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>
      <h2>Main <span style={{color:"#4E62D6"}}>Components</span></h2>
      <div className="temp-area">
      {
        Data.map((data=>(
        <MainTamp img={data.img}
        heading={data.heading} 
        text1={data.text1}
        text2={data.text2}
        /> 
        )))
      }</div>
    </div>
  )
}

export default Main
