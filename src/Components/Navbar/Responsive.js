import React, { useState } from 'react'
import "./Responsive.css"
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom'
function Responsive({close}) {
  const [project, setProject] = useState(false);
  const OpenmyPro=()=>{
    setProject(!project)
    console.log(project)
  }
  const Close=()=>{
    close()
  }
  return (
  <div className='responsive'>
    <ul >
    <li onClick={Close}><Link to="/">Home</Link></li>
    <li onClick={Close} ><Link to="/about">About</Link></li> 
    <li onClick={OpenmyPro}>My Projects<span style={{ color:"#ED5009",display: project? "none": "flex"  }}>
      <IoIosArrowDown/></span>  
      <span style={{display: project? "flex" : "none"}}><IoIosArrowUp/></span>
       </li>
       {project &&(
        <div className='projects' >
         <li onClick={Close}><Link to="/performance">Performance</Link></li>
    <li onClick={Close}><Link to="/parents">Parents</Link></li>
    <li onClick={Close}><Link to="/athletes">Athletes</Link></li>
    <li onClick={Close}><Link to="/workshop">Workshop</Link></li> 
   </div>    )}
    
  
    </ul>
  </div>
  )
}

export default Responsive
