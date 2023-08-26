import React from 'react'
import{ Data} from "./Data"
import MainTamp from './mainTamp'
function Main() {
  return (
    <div className='Main'>
      <h2>Special <span style={{color:"#4E62D6"}}>Features</span></h2>
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
