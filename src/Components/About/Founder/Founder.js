import React from 'react'
import "./Founder.css"
import rishi from "./img/rishi.png"
import quotes from "./img/quotes.png"
import quotes2 from "./img/quotes2.png"
function Founder() {
  return (
<div className='Founder'>
<h1>Founder's note</h1>  
<div className="founder-area">
    <div className="space space1">
      <img src={quotes} alt="" />
    </div>
<div className="rishi">
<img src={rishi} alt="" />
<h3>Rishikesh Kumar</h3>
<p>I am deeply committed to building a culture
        of health and performance. Our mission is
to empower individuals to prioritize their
physical and mental well-being and achieve
their full potential. We believe collective
action is the key to building a healthier
and happier society. By working together,
we can create a culture that values
health and performance and provides the
tools and resources necessary for
individuals to thrive. We invite you
to join us towards better health
and well-being.</p>
<p>Whether you are an individual looking to improve
    your performance or an organization looking to
promote healthy habits and practices, we are here
to support you. Together, we can create a future
where health and performance are at the
forefront of our priorities and individuals
have the tools and resources to live their
best lives. Thank you for considering 
joining us in this critical mission.</p>
</div>
<div className="space space2">
  <img src={quotes2} alt="" />
</div>
</div>
</div>
  )
}

export default Founder
