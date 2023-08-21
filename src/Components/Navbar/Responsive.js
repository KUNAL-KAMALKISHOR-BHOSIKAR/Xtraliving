import React from 'react'
import "./Responsive.css"
import { Link } from 'react-router-dom'
function Responsive({close}) {
  const Close=()=>{
    close()
  }
  return (
    <div className='responsive'>
      <ul>
        <li>Home</li>
        <li>Login</li>
        <li>Our products</li>
        <li>Contact us</li>
        <li onClick={Close}><Link to="/about">About</Link></li> 
      </ul>
    </div>
  )
}

export default Responsive
