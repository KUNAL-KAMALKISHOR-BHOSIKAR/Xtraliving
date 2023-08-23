import React from 'react'
import "./Performance.css"
import Banner from './Banner/Banner'
import Benefits from './Benefits/Benefits'
import Register from './Register/Register'
import Main from './Main/Main'
import Coach from './Coach/Coach'
import Duration from './Duration/Duration'
import JoinUs from './JoinUs/JoinUs'
import Worked from './Worked/Worked'
import Faq from './Faq/Faq'
function Performance() {
  return (
    <div className='Performance'>
      <Banner/>
      <Benefits/>
      <Register/>
      <Main/>
      <Duration/>
      <Coach/>
      <JoinUs/>
      <Worked/>
      <Faq/>
    </div>
  )
}

export default Performance
