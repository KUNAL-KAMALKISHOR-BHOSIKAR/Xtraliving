import React from 'react'
import "./mainTamp.css"

function MainTamp({img, heading, text1, text2}) {
  return (
    <div className='mainTamp'>
      <img src={img} alt="" />
      <h3>{heading}</h3>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  )
}

export default MainTamp;
