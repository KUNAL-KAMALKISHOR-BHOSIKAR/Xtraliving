import React from 'react'
import "./Media.css"
import News from './News/News'
import News2 from "../Home/News/News"
import Previous from './Previous/Previous'
function Media() {
  return (
    <div className='Media'>
      <div className="for-largest">
         <News/>
      </div>
     <div className="for-smallest">
      <News2/>
     </div>
      <Previous/>
    </div>
  )
}

export default Media
