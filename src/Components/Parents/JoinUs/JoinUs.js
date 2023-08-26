import React from 'react'
import "./JoinUs.css"
import background from "./img/background.png"
function JoinUs() {
  return (
    <div className='JoinUs'
    style={{backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '800px 200px',
    }}>
     <h3>
     Join us to supercharge your physical and mental prowess,
      and let Rishi guide you in unlocking unparalleled levels
       of success, both in the office and beyond.
     </h3>
     <button>Join</button>
    </div>
  )
}

export default JoinUs
