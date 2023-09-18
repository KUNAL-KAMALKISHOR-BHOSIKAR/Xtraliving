import React from 'react'
import "./Main.css"
import{ Data} from "./Data"
import MainTamp from './mainTamp'
function Main() {
  return (
    <div className='Main-func'>
       
      <h2>Why FUNc <span style={{color:"#4E62D6"}}>Stands Out</span></h2>
      <div className="temp-area-func">
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
