import React from 'react'


function MainTamp({img, heading, text1, }) {
  return (
    <div className='mainTamp'>
      <img src={img} alt="" />
      <h3>{heading}</h3>
      <p>{text1}</p>

    </div>
  )
}

export default MainTamp;
