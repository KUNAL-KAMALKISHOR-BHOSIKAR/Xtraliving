import React from 'react'
import "./Collabrate.css"
import Banner from "./Banner/Banner"
import Main  from "./Main/Main"
import Benefits from "./Benefits/Benefits"
import Hands from "./Hands/Hands"
import Duration from './Duration/Duration'
import Empowering from './Empowering/Empowering'
function Collabrate() {
  return (
    <div className='Collabrate'>
      <Banner/>
      <Benefits/>
      <Main/>
      <Hands/>
      <Duration/>
      <Empowering/>
    </div>
  )
}

export default Collabrate
