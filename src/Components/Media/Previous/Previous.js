import React from 'react'
import p1 from "./img/p1.jpg"
import p2 from "./img/p2.jpg"
import p3 from "./img/p3.png"
import p4 from "./img/p4.png"
import p5 from "./img/p5.jpg"
import p6 from "./img/p6.png"
import p7 from "./img/p7.png"
import p8 from "./img/p8.jpg"
import p9 from "./img/p9.png"
import "./Previous.css"
import { Link } from 'react-router-dom'
function Previous() {
  return (
    <div className='Previous'>
      <h2>Previous events</h2>
      <div className="event-list">
      <Link to="/media/raise">  <div className="event-item">
            <img loading="lazy" src={p1} alt="" />
            <h3>Raise an Athlete​</h3>
        </div></Link>
        <div className="event-item">
            <img loading="lazy" src={p2} alt="" />
            <h3>Go Girl Go campaign​</h3>
        </div>
        <div className="event-item">
            <img loading="lazy" src={p3} alt="" />
            <h3>eNERGIZE fitness championship</h3>
        </div>
        <div className="event-item">
            <img loading="lazy" src={p4} alt="" />
            <h3>eNERGIZE Bootcamp​</h3>
        </div>
        <div className="event-item">
            <img loading="lazy" src={p5} alt="" />
            <h3>Eye health seminar​</h3>
        </div>
        <div className="event-item">
            <img loading="lazy" src={p6} alt="" />
            <h3>Reducing the risk of injury​</h3>
        </div>
        <div className="event-item">
            <img loading="lazy" src={p7} alt="" />
            <h3>Gymnastics in India</h3>
        </div>
        <div className="event-item">
            <img loading="lazy" src={p8} alt="" />
            <h3>eNERGIZE quiz competition​</h3>
        </div>
        <div className="event-item">
            <img loading="lazy" src={p9} alt="" />
            <h3>Myopia awareness talk​​</h3>
        </div>
      </div>
    </div>
  )
}




export default Previous
