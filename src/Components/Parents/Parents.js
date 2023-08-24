import React from 'react'
import "./Performance.css"
import Banner from './Banner/Banner'
import Benefits from './Benefits/Benefits'
import Register from './Register/Register'
import Main from './Main/Main'
import Coach from './Coach/Coach'
import Worked from './Worked/Worked'
import Faq from './Faq/Faq'
function Parents() {
  return (
    <div className='Performance'>
      <Banner/>
      <Benefits/> 
      <Main/> 
      <Register/>
      <Coach/>
      <Worked/>   
      <Faq/>
    </div>
  )
}

export default Parents
