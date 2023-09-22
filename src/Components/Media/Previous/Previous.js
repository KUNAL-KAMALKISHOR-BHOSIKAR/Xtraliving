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
      <Link to="/media/gogirl"> <div className="event-item">
            <img loading="lazy" src={p2} alt="" />
            <h3>Go Girl Go campaign​</h3>
        </div></Link> 
      <Link to="/media/championship"> <div className="event-item">
            <img loading="lazy" src={p3} alt="" />
            <h3>eNERGIZE fitness championship</h3>
        </div>  
         </Link>
        <Link to="/media/bootcamp">
              <div className="event-item">
            <img loading="lazy" src={p4} alt="" />
            <h3>eNERGIZE Bootcamp​</h3>
        </div>
        </Link>
        <Link to="/media/doctor">    <div className="event-item">
            <img loading="lazy" src={p5} alt="" />
            <h3>Eye health seminar​</h3>
        </div>  
        </Link>
        <Link to="/media/romanov"> 
           <div className="event-item">
            <img loading="lazy" src={p6} alt="" />
            <h3>Reducing the risk of injury​</h3>
        </div>
        </Link> 
        <Link to="/media/sudhir">
        <div className="event-item">
            <img loading="lazy" src={p7} alt="" />
            <h3>Gymnastics in India</h3>
        </div> </Link>
        <Link to="/media/quiz">  
        <div className="event-item">
            <img loading="lazy" src={p8} alt="" />
            <h3>eNERGIZE quiz competition​</h3>
        </div></Link>
        <Link to="/media/awareness"> 
        <div className="event-item">
            <img loading="lazy" src={p9} alt="" />
            <h3>Myopia awareness talk​​</h3>
        </div>
         </Link>
      </div>
    <div className="newspaper">
      <h2>Media</h2>
      <div className="artical-area">
    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-1.1.412e4c4faa14ac0eda76.png" alt="" />
      <h3>India Today</h3>
      <p>India Today features Rishikesh Kumar's authored article on Improving Children's Health amidst the pandemic</p>
    </div>

    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-2.1.bc964725129523cfbf3b.png" alt="" />
      <h3>Times of India</h3>
      <p>eNERGIZE - National Level Online Athletic Fitness Championship</p>
    </div>

    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-3.1.7bfd3e18d3898c9c2732.jpg" alt="" />
      <h3>The New Indian Express</h3>
      <p>Work-out from home is the new normal</p>
    </div>

    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-4.1.447dfd9ffd80dae2375f.png" alt="" />
      <h3>Money Control</h3>
      <p>Technology provoking Indians to stay fit amid Covid-19 lockdown</p>
    </div>

    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-5.1.ddd45ea0a430c1d808a0.png" alt="" />
      <h3>ET Healthworld</h3>
      <p>India Today features Rishikesh Kumar's authored article on Improving Children's Health amidst the pandemic</p>
    </div>
    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-6.1.e302298914a746856738.png" alt="" />
      <h3>Newsd</h3>
      <p>National Level Online Fitness Athletic Championship expected to witness more than 1,00,000 participants</p>
    </div>

    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-7.1.8cf53106832206d3eec1.png" alt="" />
      <h3>Jhalak</h3>
      <p>News coverage dedicated to eNERGIZE</p>
    </div>

    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-8.1.caf9703666b4ddd9409d.png" alt="" />
      <h3>News Patrolling</h3>
      <p>Xtraliving, Sports Authority of India and Directorate of Sports and Youth services of Maharashtra join hands to host eNERGIZE</p>
    </div>

    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-9.1.b86ff4f2aadd0bdf0a5e.png" alt="" />
      <h3>IANS Life</h3>
      <p>Xtraliving all set for National Level Online Fitness Athletic Championship</p>
    </div>

    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-10.1.71653c751f55c757756d.png" alt="" />
      <h3>Telangana Today</h3>
      <p>X60 Crossfit in Headlines</p>
    </div>

    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-11.1.1961c02bce1a05eb446c.png" alt="" />
      <h3>Healthwire</h3>
      <p>Boosting your immune system</p>
    </div>

    <div className="artical">
      <img src="https://www.rishi.fit/static/media/media-12.1.2cf3ab68f6a7897f5e8b.png" alt="" />
      <h3>News Karnataka</h3>
      <p>Hunt for 'fastest girl in Maharashtra' begins</p>
    </div>
      </div>
    </div>
  </div>
  )
}




export default Previous
