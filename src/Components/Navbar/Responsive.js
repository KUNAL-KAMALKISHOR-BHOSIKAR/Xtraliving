import React from 'react'
import "./Responsive.css"
import { Link } from 'react-router-dom'
function Responsive({close}) {
  const Close=()=>{
    close()
  }
  return (
    <div className='responsive'>
      <ul onClick={Close}>
        <li ><Link to="/">Home</Link></li>
        <li >Login</li>
        <li >Our products</li>
        <li >Contact us</li>
        <li ><Link to="/about">About</Link></li> 
      </ul>
    </div>
  )
}

export default Responsive
