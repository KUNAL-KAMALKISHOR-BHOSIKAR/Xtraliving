import React from 'react'

import bg from "./img/bg.png"
function Benefits() {
  return (
    <div className='benefits'>
      <div className="executives" 
      style={{backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '800px 200px',
        backgroundPosition:"center"
       }}>
<svg className='yellow-arrow' width="69" height="77" viewBox="0 0 69 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.19407 2C2.78095 15.789 -5.37186 42.7341 17.956 43.3101C24.2133 43.4646 30.0244 42.8569 33.256 36.8554C35.8693 32.0022 29.4668 29.3555 25.5 32C20.3917 35.4056 17.3189 40.029 15.661 46.7526C14.2332 52.5427 13.6019 56.7881 16.5 62C21.5104 71.0105 31.8791 71.4651 42 69.5C49.7254 68 54.7575 66.9162 60.4136 63.7739C61.3317 63.2638 67.0124 59.7956 66.8664 60C64.2851 63.6139 59.6887 68.195 56.5 71.351C55.5 72.3743 54.8215 73.1785 54 74C53.4008 74.5992 55.0943 72.7956 55.5 72.3743C58.9796 68.7609 63.1789 64.5761 66.3576 60.6911C68.3496 58.2564 62 57.5 59.5 57.5C55.4849 57.5 52 57.5 49.2254 57.0801" stroke="#FFC700" stroke-width="4" stroke-linecap="round"/>
</svg>
       <h2>Welcome to Xtraliving</h2>
    <p>At Xtraliving, we merge the
    boundaries between health, fitness,
    and sports to catalyze human
    potential. Our revolutionary
    projects are designed to inspire,
  invigorate, and instil a passion
  for physical well-being, guaranteeing
    a more resilient and vibrant future
    for communities across the country.</p>
      </div>
     
      </div>

  )
}

export default Benefits
