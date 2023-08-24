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
     <span><strong>1.</strong>  What exactly is the "Elevate Performance for leaders" program?</span> 
     <div className="svg" onClick={()=>Open("first")}><AiOutlinePlus/></div> 

     <div className="answer" style={{display: answer==="first"? "block": "none"}}>
      <p>It's a 12-month tailored program designed for CXOs and
      senior leaders to enhance their leadership, physical,
      and mental capabilities through small, daily changes.
      The program emphasizes seamless integration into
      daily life for sustainable and significant growth.
      </p>
  </div> 
      </div>
      <div className='faq-tamp'>
     <span><strong>2.</strong> How much time will I need to commit each week?</span> 
     <div className="svg" onClick={()=>Open("second")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer" style={{display: answer==="second"? "block": "none"}}>
      <p>It's a 12-month tailored program designed for CXOs and
      senior leaders to enhance their leadership, physical,
      and mental capabilities through small, daily changes.
      The program emphasizes seamless integration into
      daily life for sustainable and significant growth.
      </p>
  </div> )}
      </div>
      <div className='faq-tamp'>
     <span><strong>3.</strong>  I have a very hectic schedule. How will the program fit in?</span> 
     <div className="svg" onClick={()=>Open("thirt")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer" style={{display: answer==="thirt"? "block": "none"}}>
      <p>It's a 12-month tailored program designed for CXOs and
      senior leaders to enhance their leadership, physical,
      and mental capabilities through small, daily changes.
      The program emphasizes seamless integration into
      daily life for sustainable and significant growth.
      </p>
  </div> )}
      </div>
      <div className='faq-tamp'>
     <span><strong>4.</strong>  How does the one-on-one coaching work?</span>
     <div className="svg" onClick={()=>Open("fourth")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="fourth"? "block": "none"}}>
      <p>It's a 12-month tailored program designed for CXOs and
      senior leaders to enhance their leadership, physical,
      and mental capabilities through small, daily changes.
      The program emphasizes seamless integration into
      daily life for sustainable and significant growth.
      </p>
  </div> )}
      
      </div>
      <div className='faq-tamp'>
     <span><strong>5.</strong> I'm not tech-savvy. Will I be able to navigate the program?</span> 
     <div className="svg" onClick={()=>Open("fifth")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="fifth"? "block": "none"}}>
      <p>It's a 12-month tailored program designed for CXOs and
      senior leaders to enhance their leadership, physical,
      and mental capabilities through small, daily changes.
      The program emphasizes seamless integration into
      daily life for sustainable and significant growth.
      </p>
  </div> )}
      </div>
      <div className='faq-tamp'>
     <span><strong>6.</strong>How is this program different from other leadership programs?</span> 
     <div className="svg" onClick={()=>Open("sixth")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="sixth"? "block": "none"}}>
      <p>It's a 12-month tailored program designed for CXOs and
      senior leaders to enhance their leadership, physical,
      and mental capabilities through small, daily changes.
      The program emphasizes seamless integration into
      daily life for sustainable and significant growth.
      </p>
  </div> )}
      </div>
      <div className='faq-tamp'>
     <span><strong>7.</strong>What results can I expect from the program?</span> 
     <div className="svg" onClick={()=>Open("seventh")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="seventh"? "block": "none"}}>
      <p>It's a 12-month tailored program designed for CXOs and
      senior leaders to enhance their leadership, physical,
      and mental capabilities through small, daily changes.
      The program emphasizes seamless integration into
      daily life for sustainable and significant growth.
      </p>
  </div> )}
      </div>
      <div className='faq-tamp'>
     <span><strong>8.</strong>How do I sign up for the "Leadership Elevate Journey"?</span> 
     <div className="svg" onClick={()=>Open("eight")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="eight"? "block": "none"}}>
      <p>It's a 12-month tailored program designed for CXOs and
      senior leaders to enhance their leadership, physical,
      and mental capabilities through small, daily changes.
      The program emphasizes seamless integration into
      daily life for sustainable and significant growth.
      </p>
  </div> )}
      </div>
      </div>
    </div>
  )
}

export default Faq
