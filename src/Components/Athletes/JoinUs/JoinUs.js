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
     <h3>Start Your Olympic Journey Today</h3>
     
     <button>Join</button>
    </div>
  )
}

export default JoinUs
