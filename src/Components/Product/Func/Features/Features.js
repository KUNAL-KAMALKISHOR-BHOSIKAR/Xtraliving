import React from 'react'
import "./Features.css"
import f1 from "./img/f1.png"
import f2 from "./img/f2.png"
import f3 from "./img/f3.png"
import f4 from "./img/f4.png"
import f5 from "./img/f5.png"
function Features() {
  return (
    <div className='Features'>
      <h2>Features That <span style={{color:"#4E62D6"}}>Impress</span></h2>
<div className="feature-list">
<div className="fe-item">
<img src={f1} alt="" />
<h3>Compact & User-friendly</h3>
<p>A design that seamlessly fits
     into your daily life.</p>
</div>

<div className="fe-item">
<img src={f2} alt="" />
<h3>Innovative Metal Ball Technology</h3>
<p>Embrace the feel of weights minus the
      danger and clutter.</p>
</div>

<div className="fe-item">
<img src={f3} alt="" />
<h3>For Everyone</h3>
<p>From rookies to 
    seasoned fitness aficionados.</p>
</div>

<div className="fe-item">
<img src={f4} alt="" />
<h3>Eco-Conscious Build</h3>
<p>Sustainable and durable materials.</p>
</div>
<div className="fe-item">
<img src={f5} alt="" />
<h3>Exclusive Online Community</h3>
<p> Engage with our vibrant community for
      expert advice and unique workouts.</p>
</div>
</div>


    </div>
  )
}

export default Features
