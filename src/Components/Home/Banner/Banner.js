import React from 'react'
import "./Banner.css"
import hero from "./img/hero.png"
import Info from './Info/Info';
import line from "./line.png"

function Banner() {
  return (
    <div className='Banner-sec'
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>
      <div className="hero-sec">
        <div className="hero-text-sec">
            <h1>Elevate Human Performance</h1>
            <p>be <span>FUNc</span>tionally fit</p>
        </div>
        <svg className='orange-arrow-banner' width="51" height="88" viewBox="0 0 51 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.65051 85.4866C16.0174 80.6793 42.9604 72.5194 30.502 52.7886C27.1602 47.4961 23.4316 42.9976 16.6454 43.637C11.1577 44.1541 12.5062 50.9496 16.9067 52.7837C22.5737 55.1457 28.125 55.1384 34.6393 52.789C40.2492 50.7659 44.132 48.9367 46.8616 43.6346C51.5806 34.468 46.2083 25.588 38.96 18.2561C33.4272 12.6596 29.7346 9.07349 23.9829 6.1097C23.0493 5.6286 17.0127 2.82511 17.2638 2.83324C21.7026 2.97693 28.0638 4.26097 32.4584 5.16392C33.8645 5.42851 34.91 5.54707 36.0492 5.77506C36.8801 5.94133 34.4401 5.53243 33.8645 5.42851C28.928 4.53713 23.1168 3.36372 18.1211 2.87338C14.9904 2.56609 17.8825 8.26915 19.269 10.3494C21.4958 13.6905 23.4286 16.5903 24.618 19.1319" stroke="#ED5009" stroke-width="4" stroke-linecap="round"/>
</svg>

        <div className="hero-img">
          
     <img src={hero} alt="" />
        </div>
      </div>
      <Info/>
    </div>
  )
}

export default Banner;
