import React from 'react'
import "../Page.css"
function One() {
  return (
    <div className='page-body'>
   <img height={500} style={{objectFit:"contain"}} src="https://www.rishi.fit/static/media/eye-health-seminer-cover.84b893f89932f3b93dc2.png" alt="" />
   <div className="page-text-area">
    <div className="p-area">
   
<h3 style={{textAlign:"center"}}>Dr Akshay Badakere</h3>
<p style={{textAlign:"center"}}>Neuro Ophthalmologist, Hyderabad. MBBS, DOMS, Fellowship in Pediatric Ophthalmology, Strabismus and Neuro Ophthalmology</p>
     </div>
     <div className="agenda-area">
     <h3>Seminar on Eye Health, Movement, Nutrition and Recovery for Kids</h3>
  <p>The focus of the session was arround</p>
   <ul>
       <li>growing concern of increasing screen time</li>
       <li>precaution to be taken during the pandemic</li>
       <li>things we can do to improve kid’s eye health</li>
       <li>20-20-20 rule for better eye health</li>
       <li>Long lasting vitality for Kids</li>
       <li>Movement, Nutrition and Recovery</li>
   </ul>
   <strong>Date: 12th August, 2020</strong>
   <strong>Time: 12:30-1.30 PM</strong>
     </div>
   </div>
    </div>
  )
}

export default One
