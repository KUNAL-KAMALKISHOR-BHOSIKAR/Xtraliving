import React from 'react'
import "./Benefits.css"

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

    <p>Unlock the synergy of movement and nutrition in
      our comprehensive workshop tailored for proactive
      parents. Dive into fostering essential movement
      skills and making informed nutritional choices.
      By honing these dual pillars, parents can propel
      their child's physical health, cognitive
      development, and overall well-being to
        unparalleled heights.</p>
        <svg className='peach'  width="206" height="207" viewBox="0 0 206 207" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.628533" y="0.303008" width="150.773" height="155.867" rx="29.5" transform="matrix(0.939607 -0.342255 0.317459 0.948272 13.5365 58.4782)" stroke="black"/>
<rect width="151.773" height="156.867" rx="30" transform="matrix(0.939607 -0.342255 0.317459 0.948272 0 51.945)" fill="#FD8C69"/>
</svg>

<svg className='yellow' width="108" height="139" viewBox="0 0 108 139" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.6508 135.487C47.0177 130.679 73.9607 122.519 61.5022 102.789C58.1604 97.4961 54.4319 92.9976 47.6457 93.637C42.1579 94.1541 43.5064 100.95 47.907 102.784C53.5739 105.146 59.1253 105.138 65.6396 102.789C71.2494 100.766 75.1322 98.9367 77.8618 93.6346C82.5808 84.468 77.2085 75.588 69.9602 68.2561C64.4275 62.6596 60.7348 59.0735 54.9832 56.1097C54.0495 55.6286 48.013 52.8251 48.2641 52.8332C52.7029 52.9769 59.064 54.261 63.4587 55.1639C64.8648 55.4285 65.9102 55.5471 67.0495 55.7751C67.8803 55.9413 65.4403 55.5324 64.8648 55.4285C59.9282 54.5371 54.117 53.3637 49.1213 52.8734C45.9906 52.5661 48.8827 58.2691 50.2693 60.3494C52.4961 63.6905 54.4288 66.5903 55.6182 69.1319" stroke="#ED5009" stroke-width="4" stroke-linecap="round"/>
<circle cx="58.0002" cy="54" r="49.5" stroke="black"/>
<circle cx="50.0002" cy="50" r="50" fill="#FCFF53"/>
</svg>

      </div>
     
      </div>

  )
}

export default Benefits
