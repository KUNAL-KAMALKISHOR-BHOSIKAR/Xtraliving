import React from 'react'
import "./Athletes.css"
import Banner from './Banner/Banner'
import Introduction from './Introduction/Introduction'
import Movement from './Movement/Movement'
import Coach from './Coach/Coach'
import Duration from './Duration/Duration'
import Reviews from "./Reviews/Reviews";
import JoinUs from './JoinUs/JoinUs'
import Worked from './Worked/Worked'
function Athletes() {
  return (
    <div className='Athletes'>
    <Banner/>
    <Introduction/>
    <Movement/>
    <Coach/>
    <Reviews/>
    <Duration/>
    <JoinUs/>
    <Worked/>
    </div>
  )
}

export default Athletes
