import React from 'react'
import "./Empowering.css"
import { BsArrowRight } from 'react-icons/bs';

import girl from "./img/girl.png"
function Empowering() {
  return (
    <div className='Empowering'>
      <div className="girl-area">
        <img src={girl} alt="" />
        <div className="girl-txt">
        <p>Engage with us today to lay the foundation
             for a healthier, stronger, and more vibrant
              tomorrow. Together, let's redefine the
             boundaries of what's possible.</p>
           <a href="https://forms.myfunc.in/myfunc/form/ConnectwithRishi/formperma/HkPge_e3v8bQoOpsQka6qPmQ5YBTC29DAGd2H5FJaHk">
             <button>  Contact Us <BsArrowRight/></button></a> 
        </div></div>
        <div className="emp-txt">
            <span>Empowering the Nation, One Step at a Time.
          Join us in making health, fitness,<br/> and sports
         integral to our shared future.</span>
        
        </div>    
    </div>
  )
}

export default Empowering
