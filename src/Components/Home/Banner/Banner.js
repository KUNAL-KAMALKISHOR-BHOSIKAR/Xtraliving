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
        <div className="hero-img">
          
     <img src={hero} alt="" />
        </div>
      </div>
      <Info/>
    </div>
  )
}

export default Banner;
