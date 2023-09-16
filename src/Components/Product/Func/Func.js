import React from 'react'
import "./Func.css"
import Banner from "./Banner/Banner"
import StandOut from './StandOut/StandOut'
import Features from './Features/Features'
import Users from './users/users'
import Limited from './Limited/Limited'
import Faq from './Faq/Faq'
import Main from './StandOut/Main/Main'
function Func() {
  return (
    <div className='Func'>
      <Banner/>
      <Main/>
      <Features/>
      <Users/>
      <Limited/>
      <Faq/>
    </div>
  )
}

export default Func
