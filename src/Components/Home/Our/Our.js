import React from 'react'
import "./Our.css"
import pro from "./pro.png"
import { Link } from 'react-router-dom'
function Our() {
  return (
    <div className='our'>
    
      <div className="our-text">
        <h1>FUNc</h1>
        <h3>
        <strong className='func'>FUNc</strong> is a health-tech program designed for busy individuals by spine specialists, physiotherapists and fitness experts.
        </h3>
        <p>Boost mobility, strength, and endurance with our solution. Weight loss? Just a bonus. Our compact kit pairs with a quick daily 5-15 min routine and nutritional advice, designed for home or office. Commit and stave off joint pain, obesity, and lifestyle ailments.</p>

       <Link to="/func"><button>Know more</button></Link>
      </div>
      <div className="our-img">
        <img src={pro} alt="" height={400}/>
      </div>
    </div>
  )
}

export default Our
