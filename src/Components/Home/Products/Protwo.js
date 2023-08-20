import React from 'react'
import "./Protwo.css"
import second from "./second.png"
function Protwo() {
  return (
    <div className='Protwo'>
    <div className="second-img">
        <img src={second} alt="" />
    </div>
    <div className="second-text">
<h1>MEdX</h1>
<h3><strong className='medx'>MEdX</strong> is a cutting-edge platform co-created
    by tech and medical elites, revolutionizing
    neuroscience and anatomy education for
    medical students.</h3>
  <p>  Tailored for premier medical institutes,
        MEdX aspires to transform conventional 
        learning, offering students an immersive and
        comprehensive educational journey, priming 
        them to become the next generation of
        healthcare visionaries.</p>
        <button>Know more</button>
</div>
    </div>
  )
}

export default Protwo
