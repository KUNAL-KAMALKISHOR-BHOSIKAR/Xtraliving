import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import "./faq.css"
function Faq() {
  const [answer, setAnswer] = useState("")
  const Open=(data)=>{
    setAnswer(data)
    console.log(answer)
  }
  return (
    <div className='faq'>
      <h2>FAQ's</h2>
      <div className="faq-area">

<div className='faq-tamp'>
     <span><strong>1.</strong> What is the main objective of this workshop?</span> 
     <div className="svg" onClick={()=>Open("first")}><AiOutlinePlus/></div> 

     <div className="answer" style={{display: answer==="first"? "block": "none"}}>
      <p>The workshop aims to empower parents with effective strategies and insights
         to nurture their children's physical and mental well-being, laying a solid
          foundation for a healthy future.
      </p>
  </div> 
      </div>
      <div className='faq-tamp'>
     <span><strong>2.</strong> Who is Coach Rishi?</span> 
     <div className="svg" onClick={()=>Open("second")}><AiOutlinePlus/></div> 
  
     <div className="answer" style={{display: answer==="second"? "block": "none"}}>
      <p>Coach Rishi is a seasoned corporate strategist, founder of Xtraliving,
         and a dedicated father to twin boys. With his experience from leadership
          roles at Idea, Nokia, Microsoft, and Xseed, coupled with elite fitness
           and nutrition certifications, Rishi offers a unique perspective
            on holistic child development.
      </p>
  </div> 
      </div>
      <div className='faq-tamp'>
     <span><strong>3.</strong> How long is the workshop?</span> 
     <div className="svg" onClick={()=>Open("thirt")}><AiOutlinePlus/></div> 
     
     <div className="answer" style={{display: answer==="thirt"? "block": "none"}}>
      <p>The workshop is a comprehensive 90-minute online program, packed 
        with actionable insights and strategies.
      </p>
  </div>
      </div>
      <div className='faq-tamp'>
     <span><strong>4.</strong> Is the workshop suitable for parents with kids of all ages?</span>
     <div className="svg" onClick={()=>Open("fourth")}><AiOutlinePlus/></div> 

     <div className="answer"  style={{display: answer==="fourth"? "block": "none"}}>
      <p>While the workshop is designed to benefit all parents, it's especially
         tailored for those with children aged 0-10 years, a crucial
          period for laying foundational health habits.
      </p>
  </div> 
      
      </div>
      <div className='faq-tamp'>
     <span><strong>5.</strong> What will I learn from the workshop?</span> 
     <div className="svg" onClick={()=>Open("fifth")}><AiOutlinePlus/></div> 
  
     <div className="answer"  style={{display: answer==="fifth"? "block": "none"}}>
      <p>The workshop will cover key areas of physical movement competencies
         and nutritional choices, giving parents the tools they need to foster
          healthy habits in their children.
      </p>
  </div>
      </div>
      <div className='faq-tamp'>
     <span><strong>6.</strong>Do I need any prior knowledge or experience to attend?</span> 
     <div className="svg" onClick={()=>Open("sixth")}><AiOutlinePlus/></div> 
 
     <div className="answer"  style={{display: answer==="sixth"? "block": "none"}}>
      <p>No, the workshop is designed for all
         parents, regardless of their prior knowledge or
          experience in child health and nutrition.
      </p>
  </div> 
      </div>
      <div className='faq-tamp'>
     <span><strong>7.</strong>How can I register for the workshop?</span> 
     <div className="svg" onClick={()=>Open("seventh")}><AiOutlinePlus/></div> 

     <div className="answer"  style={{display: answer==="seventh"? "block": "none"}}>
      <p>Simply click on the "Join Now" button on our
         landing page, and follow the registration prompts.
      </p>
  </div>
      </div>
      <div className='faq-tamp'>
     <span><strong>8.</strong>Is there a fee for the workshop?</span> 
     <div className="svg" onClick={()=>Open("eight")}><AiOutlinePlus/></div> 
    
     <div className="answer"  style={{display: answer==="eight"? "block": "none"}}>
      <p> [You can provide details here, whether it's free,
         there's an early bird discount, or specify the price.]
      </p>
  </div> 
      </div>
      <div className='faq-tamp'>
     <span><strong>9.</strong>I can't attend the workshop live. Will there be a recording?</span> 
     <div className="svg" onClick={()=>Open("ninth")}><AiOutlinePlus/></div> 

     <div className="answer"  style={{display: answer==="ninth"? "block": "none"}}>
      <p> Yes, all registered participants will receive access to
         the workshop recording to watch at their convenience.
      </p>
  </div>
      </div>
      <div className='faq-tamp'>
     <span><strong>10.</strong>How has Coach Rishi's experience as a father influenced the workshop?</span> 
     <div className="svg" onClick={()=>Open("tenth")}><AiOutlinePlus/></div> 
 
     <div className="answer"  style={{display: answer==="tenth"? "block": "none"}}>
      <p>  Rishi's personal journey as a father to twins has deeply
         informed the workshop's content. His hands-on experiences,
          combined with his expertise, offer participants a genuine,
           heartfelt, and effective approach to child wellness.
      </p>
  </div>
      </div>
      <div className='faq-tamp'>
     <span><strong>11.</strong>I have more questions. How can I get in touch?</span> 
     <div className="svg" onClick={()=>Open("eleventh")}><AiOutlinePlus/></div> 
  
     <div className="answer"  style={{display: answer==="eleventh"? "block": "none"}}>
      <p>  Feel free to contact us at [your email/phone number]. We're here to help!
      </p>
  </div> 
      </div>
      </div>
    </div>
  )
}

export default Faq
