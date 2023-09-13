import React from 'react'
import "./Register.css"
import girl from "./img/girl.png"
import { BsArrowRight } from 'react-icons/bs';
import line from "./img/line.png"
function Register() {
  return (
    <div className='Register'
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    }}>
        <div className="heading-btn">
      <h2>Step Up. Lead Stronger.</h2>   
      <span>Limited slots</span> 
      <a href="https://forms.myfunc.in/myfunc/form/PerformanceforLeaders/formperma/bPEs3RSxvGx-NqWai0HX2aTDf8XbB8MdtfO4BR67kxg">  <button>Register Today! <BsArrowRight/></button></a>
      </div>
      <div className="reg-area">
        <div className="reg-img">
<img src={girl} alt=""  />
        </div>
        <div className="reg-text">
<h3>Introducing the "<span style={{color:"#4E62D6"}}>Elevate Performance for
Leaders</span>" — a 12-month program meticulously
crafted for CXOs and senior leaders.
We understand the intricacies of 
your demanding roles and lifestyles.</h3> <br />
<h3>Our approach is simple but
transformative: integrate minute,
nearly effortless changes into your
daily life for an outsized, lasting
impact. With our personalized
one-on-one coaching sessions,
experience a program that aligns
with your pace, blending seamlessly
into your routine while driving
substantial growth in leadership
capabilities.</h3>
        </div>
      </div>
    </div>
  )
}

export default Register
