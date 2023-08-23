import React from 'react'
import "./Register.css"
import guy from "./img/guy.png"
import { BsArrowRight } from 'react-icons/bs';
function Register() {
  return (
    <div className='Register'>
        <div className="heading-btn">
      <h2>Step Up. Lead Stronger.</h2>   
      <span>Limited slots</span> 
      <button>Register Today! <BsArrowRight/></button>
      </div>
      <div className="reg-area">
        <div className="reg-img">
<img src={guy} alt="" height={350} />
        </div>
        <div className="reg-text">
<h3>Introducing the "<span style={{color:"#4E62D6"}}>Elevate Performance for
Leaders</span>" — a 12-month program meticulously
crafted for CXOs and senior leaders.
We understand the intricacies of 
your demanding roles and lifestyles.</h3>
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
