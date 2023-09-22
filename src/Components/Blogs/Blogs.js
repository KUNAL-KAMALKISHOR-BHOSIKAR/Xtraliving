import React from 'react'
import "./Blogs.css"
import f from "./img/f.png"
function Blogs() {
  return (
    <div className='Blogs'>
        <div className="b-area">
      <img  src="https://www.rishi.fit/static/media/MyBlog.22b9ab4528452ce117a6.png" alt="" />
    </div>
    <div className="what-does">
        <img src={f} alt="" />
<div className="f-txt">
    <h2>
    What does fitness mean ?
    </h2>
    <p>In present times, there has been an increase
            in the number of people who are becoming conscious
        and cautious about their bodies. Now more than ever,
        a rising number of the urban population lead a
        sedentary lifestyle which has indeed created a
        greater need to find creative ways to keep the
        body moving, thus inculcating...</p>
        <strong>Read More</strong>
</div>
    </div>
    </div>
  )
}

export default Blogs
