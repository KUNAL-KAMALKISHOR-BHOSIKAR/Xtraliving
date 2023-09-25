import React from 'react'
import "./Blogs.css"
import f from "./img/f.png"
import arrow from "./img/arrow.png"
import Article from './Article/Article'
import { Link } from 'react-router-dom'
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
    What does<br/> fitness mean ?
    </h2>
    <p>In present times, there has been an increase
            in the number of people who are becoming conscious
        and cautious about their bodies. Now more than ever,
        a rising number of the urban population lead a
        sedentary lifestyle which has indeed created a
        greater need to find creative ways to keep the
        body moving, thus inculcating...</p>
  <Link to="/blogs/fitness">      <strong>Read More     <svg width="100" height="39" viewBox="0 0 128 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M127.5 19.5C127.5 29.9384 117.933 38.5 106 38.5C94.0675 38.5 84.5 29.9384 84.5 19.5C84.5 9.06158 94.0675 0.5 106 0.5C117.933 0.5 127.5 9.06158 127.5 19.5Z" stroke="black"/>
<path d="M102 12L109 19L102 26" stroke="#ED5009" stroke-width="2"/>
<line y1="18.5" x2="71" y2="18.5" stroke="black"/>
</svg></strong></Link>
</div>
    </div>
    <Article/>
    </div>
  )
}

export default Blogs
