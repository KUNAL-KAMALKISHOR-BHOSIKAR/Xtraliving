import React from 'react'
import "./Pro.css"
import pro from "./pro.png"

function Pro() {
  return (
    <div className='pro'>
      <div className="pro-text">
        <h1>FUNc</h1>
        <h3><span className='func'>FUNc</span> is a health-tech program designed
             for busy individuals by spine specialists,
              physiotherapists and fitness experts.</h3>
              <p>Boost mobility, strength, and endurance with our
         solution. Weight loss? Just a bonus. Our compact
        kit pairs with a quick daily 5-15 min routine and
        nutritional advice, designed for home or office.
        Commit and stave off joint pain, obesity, and lifestyle
        ailments.</p>
        <button>Know more</button>
      </div>
     
      <div className="pro-img">
    <img src={pro} alt="" />
      </div>
    </div>
  )
}

export default Pro
