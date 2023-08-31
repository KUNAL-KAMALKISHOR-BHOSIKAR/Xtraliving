import React from 'react'
import "./Benefits.css"
import background from "../../Parents/Benefits/img/bg.png"
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
        <svg className='yellow-arrow' width="69" height="77" viewBox="0 0 69 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.19407 2C2.78095 15.789 -5.37186 42.7341 17.956 43.3101C24.2133 43.4646 30.0244 42.8569 33.256 36.8554C35.8693 32.0022 29.4668 29.3555 25.5 32C20.3917 35.4056 17.3189 40.029 15.661 46.7526C14.2332 52.5427 13.6019 56.7881 16.5 62C21.5104 71.0105 31.8791 71.4651 42 69.5C49.7254 68 54.7575 66.9162 60.4136 63.7739C61.3317 63.2638 67.0124 59.7956 66.8664 60C64.2851 63.6139 59.6887 68.195 56.5 71.351C55.5 72.3743 54.8215 73.1785 54 74C53.4008 74.5992 55.0943 72.7956 55.5 72.3743C58.9796 68.7609 63.1789 64.5761 66.3576 60.6911C68.3496 58.2564 62 57.5 59.5 57.5C55.4849 57.5 52 57.5 49.2254 57.0801" stroke="#FFC700" stroke-width="4" stroke-linecap="round"/>
</svg>
<svg className='orange-arrow' width="51" height="88" viewBox="0 0 51 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.65051 85.4866C16.0174 80.6793 42.9604 72.5194 30.502 52.7886C27.1602 47.4961 23.4316 42.9976 16.6454 43.637C11.1577 44.1541 12.5062 50.9496 16.9067 52.7837C22.5737 55.1457 28.125 55.1384 34.6393 52.789C40.2492 50.7659 44.132 48.9367 46.8616 43.6346C51.5806 34.468 46.2083 25.588 38.96 18.2561C33.4272 12.6596 29.7346 9.07349 23.9829 6.1097C23.0493 5.6286 17.0127 2.82511 17.2638 2.83324C21.7026 2.97693 28.0638 4.26097 32.4584 5.16392C33.8645 5.42851 34.91 5.54707 36.0492 5.77506C36.8801 5.94133 34.4401 5.53243 33.8645 5.42851C28.928 4.53713 23.1168 3.36372 18.1211 2.87338C14.9904 2.56609 17.8825 8.26915 19.269 10.3494C21.4958 13.6905 23.4286 16.5903 24.618 19.1319" stroke="#ED5009" stroke-width="4" stroke-linecap="round"/>
</svg>

        <h2>Empowering Top Executives</h2>
    <span>Enhance Decision-Making,
             Resilience, and <br/>Leadership Stamina.</span>
      </div>
      <h2>Benefits</h2>
      <div className="empowering">
      
        <div className="emp-list">
            <div className="emp-img">
                <img src={emp1} alt=""  />
            </div>
            <span>Enhanced Cognitive Abilities</span>
        </div>
        <div className="emp-list">
            <div className="emp-img" style={{backgroundColor:"#EAC7B7"}}>
                <img src={emp2}   alt="" />
            </div>
            <span>Physical Vitality Boost</span>
        </div>
        <div className="emp-list">
            <div className="emp-img" style={{backgroundColor:"#FFEFC3"}}>
                <img src={emp3}  alt="" />
            </div>
            <span>Stress Reduction</span>
        </div>
      </div>
    </div>
  )
}

export default Benefits
