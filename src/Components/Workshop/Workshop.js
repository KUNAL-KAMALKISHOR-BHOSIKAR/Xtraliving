import React from 'react'
import "./Workshop.css"
import Banner from "./Banner/Banner"
import Introduction from "./Introduction/Introduction"
import Takeaways from './Takeaways/Takeaways'
import Main from "./Main/Main"
import Facility from './Facility/Facility'
import Register from "./Register/Register"
import Coach from "../Performance/Coach/Coach"
import Worked from "../Performance/Worked/Worked"
function Workshop() {
  return (
    <div className='Workshop'>
     <Banner/>
     <Introduction/>
     <Takeaways/>
     <Main/>
     {/* <Facility/> */}
     <Register/>
     <Coach/>
     <Worked/>
    </div>
  )
}

export default Workshop
