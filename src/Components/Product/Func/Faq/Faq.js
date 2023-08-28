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
     <span><strong>1.</strong> What exactly is the FUNc workout kit?</span> 
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
     <span><strong>2.</strong> Why are metal balls used in the FUNc kit?</span> 
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
     <span><strong>3.</strong>  How safe is the FUNc kit compared to traditional dumbbells?</span> 
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
     <span><strong>4.</strong>  How long are the functional training programs?</span>
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
     <span><strong>5.</strong> How do I maintain and clean my FUNc kit?</span> 
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
     <span><strong>6.</strong>Is the FUNc kit suitable for beginners?</span> 
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
     <span><strong>7.</strong>Can I adjust the resistance on my FUNc kit??</span> 
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
     <span><strong>8.</strong>Is the FUNc kit eco-friendly?</span> 
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

      <div className='faq-tamp'>
     <span><strong>9.</strong>Where can I find workout guidance for using the FUNc kit?</span> 
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

      <div className='faq-tamp'>
     <span><strong>10.</strong>What if I have more questions or face issues with my FUNc kit?</span> 
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
