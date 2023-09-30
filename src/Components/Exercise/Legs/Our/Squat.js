import React from 'react'
import "./Our.css"
import squat from "./squat.png"

function Squat() {
  return (
    <div className='our'>
    
      <div className="our-text">
        <h1>SQUATs</h1>
        <h3>
        <strong className='func'>SQUATs</strong> are a compound exercise that strengthens the lower body, primarily targeting the muscles in the legs and buttocks.
        </h3>
        <p>To perform a squat, stand with your feet shoulder-width apart, keeping your chest up and your back straight. Begin by bending your knees and hips, lowering your body as if you were sitting back into a chair. Keep your knees aligned with your feet and go as low as your flexibility allows, ideally until your thighs are parallel to the ground. Push through your heels to stand back up, straightening your legs and returning to the starting position. Ensure proper form by keeping your back flat and core engaged throughout the movement, and avoid letting your knees collapse inward.</p>

      <button>Perform now</button>
      </div>
      <div className="our-img">
        <img src={squat} alt="" height={400}/>
      </div>
    </div>
  )
}

export default Squat
