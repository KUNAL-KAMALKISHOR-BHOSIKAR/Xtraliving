import React, { useState } from 'react'
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
  const [events, setEvents] =useState(false);
  const [news, setNews] = useState(false);
  const showNews=()=>{
    setNews(!news)
  }
  const showEvents=()=>{
    setEvents(!events)
  }
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
     <Link to="/media/championship">    <div className="event-item">
          <img loading="lazy" src={p3} alt="" />
            <h3>eNERGIZE fitness championship</h3> 
        </div>  
          </Link>
              <div className="event-item">
               <Link to="/media/bootcamp">  <img loading="lazy" src={p4} alt="" />
            <h3>eNERGIZE Bootcamp​</h3>   </Link>
            <svg style={{display: events? "none":"flex", marginLeft:"60%", cursor:"pointer"}} onClick={showEvents} width="128" height="39" viewBox="0 0 128 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M127.5 19.5C127.5 29.9384 117.933 38.5 106 38.5C94.0675 38.5 84.5 29.9384 84.5 19.5C84.5 9.06158 94.0675 0.5 106 0.5C117.933 0.5 127.5 9.06158 127.5 19.5Z" stroke="black"/>
<path d="M102 12L109 19L102 26" stroke="#ED5009" stroke-width="2"/>
<line y1="18.5" x2="71" y2="18.5" stroke="black"/>
</svg>
        </div>
     
        <div className="hide" style={{display:events?"flex": "none", }}>
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
      </div>
    <div className="newspaper">
      <h2>Media</h2>
      <div className="artical-area">
    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-1.1.412e4c4faa14ac0eda76.png" alt="" />
      <h3>India Today</h3>
      <p>India Today features Rishikesh Kumar's authored article on Improving Children's Health amidst the pandemic</p>
    </div>

    <div className="artical">
      <img   loading='lazy' src="https://www.rishi.fit/static/media/media-2.1.bc964725129523cfbf3b.png" alt="" />
      <h3>Times of India</h3>
      <p>eNERGIZE - National Level Online Athletic Fitness Championship</p>
    </div>

    <div  className="artical">
      <img  loading='lazy'src="https://www.rishi.fit/static/media/media-3.1.7bfd3e18d3898c9c2732.jpg" alt="" />
      <h3>The New Indian Express</h3>
      <p>Work-out from home is the new normal</p>

    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-4.1.447dfd9ffd80dae2375f.png" alt="" />
      <h3>Money Control</h3>
      <p>Technology provoking Indians to stay fit amid Covid-19 lockdown</p>
      <svg style={{display: news? "none":"flex", marginLeft:"60%", cursor:"pointer"}} onClick={showNews} width="128" height="39" viewBox="0 0 128 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M127.5 19.5C127.5 29.9384 117.933 38.5 106 38.5C94.0675 38.5 84.5 29.9384 84.5 19.5C84.5 9.06158 94.0675 0.5 106 0.5C117.933 0.5 127.5 9.06158 127.5 19.5Z" stroke="black"/>
<path d="M102 12L109 19L102 26" stroke="#ED5009" stroke-width="2"/>
<line y1="18.5" x2="71" y2="18.5" stroke="black"/>
</svg>
    </div>
    <div className="hideNews" style={{display: news? "flex":"none"}} >
    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-5.1.ddd45ea0a430c1d808a0.png" alt="" />
      <h3>ET Healthworld</h3>
      <p>India Today features Rishikesh Kumar's authored article on Improving Children's Health amidst the pandemic</p>
    </div>
    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-6.1.e302298914a746856738.png" alt="" />
      <h3>Newsd</h3>
      <p>National Level Online Fitness Athletic Championship expected to witness more than 1,00,000 participants</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-7.1.8cf53106832206d3eec1.png" alt="" />
      <h3>Jhalak</h3>
      <p>News coverage dedicated to eNERGIZE</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-8.1.caf9703666b4ddd9409d.png" alt="" />
      <h3>News Patrolling</h3>
      <p>Xtraliving, Sports Authority of India and Directorate of Sports and Youth services of Maharashtra join hands to host eNERGIZE</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-9.1.b86ff4f2aadd0bdf0a5e.png" alt="" />
      <h3>IANS Life</h3>
      <p>Xtraliving all set for National Level Online Fitness Athletic Championship</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-10.1.71653c751f55c757756d.png" alt="" />
      <h3>Telangana Today</h3>
      <p>X60 Crossfit in Headlines</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-11.1.1961c02bce1a05eb446c.png" alt="" />
      <h3>Healthwire</h3>
      <p>Boosting your immune system</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-12.1.2cf3ab68f6a7897f5e8b.png" alt="" />
      <h3>News Karnataka</h3>
      <p>Hunt for 'fastest girl in Maharashtra' begins</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-13.1.0432350f8ee17711f8ed.png" alt="" />
      <h3>Edex Live</h3>
      <p>Go Girl Go campaign winners affiliate with Xtraliving as ambassadors</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-14.1.46a01394f8e914e7c37c.png" alt="" />
      <h3>MSN</h3>
      <p>Maharashtra Government launches Go Girl Go Campaign</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-15.1.60d171a5a684abebe70b.png" alt="" />
      <h3>The New Indian Express</h3>
      <p>Why people feel depressed in winters?</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-16.1.43fa2c4ec5a4572b9874.png" alt="" />
      <h3>The Sunday Standard</h3>
      <p>Crossing the path to fitness by X60 Crossfit</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-17.1.8e379e1aa9f176264a86.png" alt="" />
      <h3>The News Now</h3>
      <p>Uddhav Thackeray gives thumbs up for Go Girl Go campaign</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-18.1.ce93cb6abdc370a93706.png" alt="" />
      <h3>The Bridge</h3>
      <p>Maharashtra Govt launches campaign to raise women participation</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-19.1.267221cc72784f33ce74.png" alt="" />
      <h3>IANS Life</h3>
      <p>Crossfit for life</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-20.1.13f4f6abbc66b10e8312.png" alt="" />
      <h3>India Today</h3>
      <p>Functional is the way for fitness</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-21.1.9654e5e7e0da58e5e868.png" alt="" />
      <h3>Outlook</h3>
      <p>How corporate life can cause hinderance in maintaining a healthy lifestyle</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-22.1.9704287611155545c1b0.png" alt="" />
      <h3>Vanitha</h3>
      <p>New fitness trends in Hindi magazine</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-23.1.40384ebef1c91d649051.png" alt="" />
      <h3>This Week India</h3>
      <p>Xtraliving, first official Indian representative to collaborate with Precision Nutrition</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-24.1.91772e0c10f78f1776cc.png" alt="" />
      <h3>APN News</h3>
      <p>Shri Uddhav Thackeray supports Go Girl Go Campaign</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-25.1.5b9c7b800f7ab540061d.png" alt="" />
      <h3>Hans India</h3>
      <p>Crossfit Games to Overcome Sadness</p>
    </div>


    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-26.1.86e8293522091156d0a9.png" alt="" />
      <h3>The Tribune</h3>
      <p>Rishikesh Kumar, Xtraliving founder and CEO headlines The Tribune - motivates towards having a career in the fitness industry</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-27.1.c2fa4fa48cbba76f46f8.png" alt="" />
      <h3>iDiva</h3>
      <p>Inculcating healthy habits at home in Hindi</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-3.1.7bfd3e18d3898c9c2732.jpg" alt="" />
      <h3>The New Indian Express</h3>
      <p>Xtraliving provides workout at home courses amid the pandemic</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-29.1.7a3a75f519157b7f11fe.png" alt="" />
      <h3>The New Indian Express</h3>
      <p>Xtraliving stepping up with their virtual/digital services during COVID-19 lockdown</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-30.1.a041930924f9b36f72c0.png" alt="" />
      <h3>Socialnews.xyz</h3>
      <p>Xtraliving provides support for Olympics to women in strength training, conditioning and nutrition</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-31.1.982fe038da3db614effe.png" alt="" />
      <h3>Enadu</h3>
      <p>X60 Crossfit Games</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-32.1.0578fc9fc1f14a4b9166.png" alt="" />
      <h3>Hyderabad Today</h3>
      <p>X60 Crossfit in Headlines</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-33.1.ad7b9998b565be25e21b.png" alt="" />
      <h3>Exchange 4 Media</h3>
      <p>Xtraliving smoothly shifts towards 'work-out from home'</p>
    </div>
    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-34.1.667c9f68fb1c2f7ce9d0.png" alt="" />
      <h3>Exchange 4 Media</h3>
      <p>X60 Crossfit</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-35.1.4508f26b001768efaba8.png" alt="" />
      <h3>Hans India</h3>
      <p>X60 Crossfit games</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-36.1.64c66b7126006293e8ba.png" alt="" />
      <h3>AndraJyothi</h3>
      <p>Crossfit games at X60 Crossfit studioe</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-37.1.ca6d7af31f973ee26429.png" alt="" />
      <h3>Sakshi</h3>
      <p>X60 Crossfit Media Coverage</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-38.1.9aa6645e45f5edd0404b.png" alt="" />
      <h3>PopXo</h3>
      <p>Self-isolation tips in hindi</p>
    </div>

    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-39.1.409e77df9dfaefdcb1b0.png" alt="" />
      <h3>Sakshi</h3>
      <p>X60 Media Coverage</p>
    </div>
    <div className="artical">
      <img loading='lazy' src="https://www.rishi.fit/static/media/media-40.1.ab89db744dd626915db6.png" alt="" />
      <h3>AndraPrabha</h3>
      <p>Crossfit games</p>
    </div>
      </div>
      </div>
    </div>
  </div>
  )
}




export default Previous
