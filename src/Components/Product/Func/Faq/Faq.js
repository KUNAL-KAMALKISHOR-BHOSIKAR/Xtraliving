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
      <p>FUNc is a versatile workout kit designed for both
         home and office use. It employs a unique resistance
          similar to dumbbells but uses innovative metal
           ball technology instead of a single metal piece,
            ensuring safety and adaptability in your
             workouts.</p>
  </div> 
      </div>
      <div className='faq-tamp'>
     <span><strong>2.</strong> Why are metal balls used in the FUNc kit?</span> 
     <div className="svg" onClick={()=>Open("second")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer" style={{display: answer==="second"? "block": "none"}}>
      <p>The use of metal balls in the FUNc kit adds a
         unique resistance akin to traditional dumbbells.
          More importantly, they are designed to minimize
           injury if accidentally dropped, unlike
            traditional weights.
      </p>
  </div> )}
      </div>
      <div className='faq-tamp'>
     <span><strong>3.</strong>  How safe is the FUNc kit compared to traditional dumbbells?</span> 
     <div className="svg" onClick={()=>Open("thirt")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer" style={{display: answer==="thirt"? "block": "none"}}>
      <p>Thanks to its innovative metal ball design, the
         FUNc kit significantly reduces the risk of injury
          if dropped on the body when compared to
           single-piece metal dumbbells.
      </p>
  </div> )}
      </div>
      <div className='faq-tamp'>
     <span><strong>4.</strong>  How long are the functional training programs?</span>
     <div className="svg" onClick={()=>Open("fourth")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="fourth"? "block": "none"}}>
      <p>The FUNc kit comes with functional training
         programs that range from 5 to 15 minutes, catering
          to various fitness levels and time constraints.
      </p>
  </div> )}
      
      </div>
      <div className='faq-tamp'>
     <span><strong>5.</strong> How do I maintain and clean my FUNc kit?</span> 
     <div className="svg" onClick={()=>Open("fifth")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="fifth"? "block": "none"}}>
      <p>Regularly check the kit for any signs of wear.  Ensure the kit is stored in
         a dry place.
      </p>
  </div> )}
      </div>
      <div className='faq-tamp'>
     <span><strong>6.</strong>Is the FUNc kit suitable for beginners?</span> 
     <div className="svg" onClick={()=>Open("sixth")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="sixth"? "block": "none"}}>
      <p>Absolutely! The FUNc kit is designed for all
         fitness levels, from beginners to seasoned
          enthusiasts. Always consult the instruction
           manual or our online community for guidance 
           on starting exercises.
      </p>
  </div> )}
      </div>
      <div className='faq-tamp'>
     <span><strong>7.</strong>Can I adjust the resistance on my FUNc kit??</span> 
     <div className="svg" onClick={()=>Open("seventh")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="seventh"? "block": "none"}}>
      <p>The unique design of the FUNc kit offers
         resistance akin to traditional dumbbells.
          While the resistance is set by the metal
           ball technology, the variety of exercises
            available ensures a diverse range of workout
             intensities.
      </p>
  </div> )}
      </div>
      <div className='faq-tamp'>
     <span><strong>8.</strong>Is the FUNc kit eco-friendly?</span> 
     <div className="svg" onClick={()=>Open("eight")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="eight"? "block": "none"}}>
      <p>Yes, our FUNc kit is constructed with sustainability in mind 
        using eco-conscious materials.
      </p>
  </div> )}
      </div>

      <div className='faq-tamp'>
     <span><strong>9.</strong>Where can I find workout guidance for using the FUNc kit?</span> 
     <div className="svg" onClick={()=>Open("nine")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="nine"? "block": "none"}}>
      <p>Every FUNc purchase grants you access to our
         vibrant online community where you can find
          exclusive workouts, expert advice, and engage
           with other FUNc users.
      </p>
  </div> )}
      </div>

      <div className='faq-tamp'>
     <span><strong>10.</strong>What if I have more questions or face issues with my FUNc kit?</span> 
     <div className="svg" onClick={()=>Open("ten")}><AiOutlinePlus/></div> 
     {answer &&(
     <div className="answer"  style={{display: answer==="ten"? "block": "none"}}>
      <p>Please reach out to our customer support team
         through our contact page. We're here to assist
          and ensure you have the best experience with
           FUNc.
      </p>
  </div> )}
      </div>
      </div>
    </div>
  )
}

export default Faq
