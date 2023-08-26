import React from 'react'
import "./Benefits.css"
import background from "./img/background.png"
import emp1 from "./img/emp1.png"
import emp2 from "./img/emp2.png"
import emp3 from "./img/emp3.png"
function Benefits() {
  return (
    <div className='benefits'>
      <div className="executives" 
      style={{backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '600px 200px',
        backgroundPosition:"center"
       }}>
    
    <span>Unlock the synergy of movement and nutrition in
      our comprehensive workshop tailored for proactive
      parents. Dive into fostering essential movement
      skills and making informed nutritional choices.
      By honing these dual pillars, parents can propel
      their child's physical health, cognitive
      development, and overall well-being to
        unparalleled heights.</span>
      </div>
     
      </div>

  )
}

export default Benefits
