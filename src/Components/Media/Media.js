import React from 'react'
import "./Media.css"
import News from '../Home/News/News'
import Previous from './Previous/Previous'
function Media() {
  return (
    <div className='Media'>
      <News/>
      <Previous/>
    </div>
  )
}

export default Media
