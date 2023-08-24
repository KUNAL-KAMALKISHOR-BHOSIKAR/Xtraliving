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
    <li onClick={Close}><Link to="/">Home</Link></li>
    <li onClick={Close} ><Link to="/about">About</Link></li> 
    <li onClick={Close}><Link to="/performance">Performance</Link></li>
    <li onClick={Close}><Link to="/parents">Parents</Link></li>
    <li onClick={Close}><Link to="/athletes">Athletes</Link></li>
  
    </ul>
  </div>
  )
}

export default Responsive
