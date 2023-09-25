import React, { useState } from 'react'

import "../../Media/Pages/Page.css"
function Fitness() {
  const [first, setFirst] = useState(false)
const [second, setSecond] =useState(false)
const [third, setThird] = useState(false)
  const f =()=>{
    setFirst(!first)
  }
  const s =()=>{
    setSecond(!second)
  }
  const t =()=>{
    setThird(!third)
  }
  return (
    <div className='page-body' style={{display:"flex", alignItems:"center"}}>
    <img style={{width:"60%"}} src="https://www.rishi.fit/static/media/what-does-fitness.c3e9e34032c304fde77b.png" alt="" />
   <div className="page-text-area">
    
     <div className="agenda-area" >
        <h3 style={{cursor:"pointer"}} onClick={f} >What does fitness mean?</h3>
        <div className='fitness-hide' style={{display:first?"flex":"none", flexDirection:"column", gap:"2rem"}} >
        <p>Haven’t we all heard about the benefits and the importance of physical fitness in our lives? In present times, there has been an increase in the number of people who are becoming conscious and cautious about their bodies. Now more than ever, a rising number of the urban population lead a sedentary lifestyle which has indeed created a greater need to find creative ways to keep the body moving, thus inculcating a healthier and fitter body structure.</p>
   <p>However, this rapid rise in conversations around having a fit body does not address or help in understanding the actual definitions of fitness. Social media posts and advertisements depict celebrities and their body structures as the “ideal body type” and as “fitness goals” without discussing what fitness is and how subjective fitness standards can be. In this article, we will be addressing this gap in conversations and attempt to assist you in recognizing the very pertinent concepts of fitness and a healthy body.</p>
<p>However, it is time to address and recognize the benefits of exercising and physical activities among the senior women of our lives. In this article, we shall be helping you to do exactly that.</p>
     </div></div>

     <div className="agenda-area">
        <h3 style={{cursor:"pointer"}} onClick={s} >WHAT IS FITNESS?</h3>
        <div className='fitness-hide' style={{display:second?"flex":"none", flexDirection:"column", gap:"2rem"}} >
        <p>Every time someone utters the word fitness we generally end up imagining a skinny person who barely eats anything in the name of achieving their fitness goals or imagine a person who spends hours doing workouts in the gym.</p>
   <p>However, fitness is far away from any of these scenarios.</p>
<p>Fitness can be a broad term that means different things to different people. The standards of fitness are very subjective to each person, but in general, the word refers to your optimal health and overall well-being. It incorporates the over-all wellbeing of the body and allows one to perform daily activities, sports and movements without any hassle.</p>
    <p>Contrary to popular opinion, being fit is not just about our physical health, but emotional and mental health, too. Nutritious eating, regular resting and active living are fundamental ways to achieve a fit body.</p>
    <p>According to the Academy of Nutrition and Dietetics’ Complete Food and Nutrition Guide (3rd ed.), when you are fit, you have:</p>
    <ul>
            <li>Energy to do what’s important to you and to be more productive</li>
            <li>Stamina and a positive outlook to handle the mental challenges and emotional ups and downs of everyday life and to deal with stress</li>
            <li>Reduced risk for many health problems, such as heart disease, cancer, diabetes and osteoporosis</li>
    <li>The chance to look and feel your best</li>
<li>Physical strength and endurance to accomplish physical challenges</li>
        <li>A better chance for a higher quality of life and perhaps a longer life, too</li>
        </ul>
     <p>As has been discussed earlier, the internet and social media portray fitness in a certain way which can often be flawed. In the next section, we shall attempt to end a couple of myths.</p>
     </div></div>

     <div className="agenda-area">
        <h3 style={{cursor:"pointer"}} onClick={t} >LET’S BUST SOME FITNESS MYTHS, SHALL WE?</h3>
        <div className='fitness-hide' style={{display:third?"flex":"none", flexDirection:"column", gap:"2rem"}} >
        <p>LONG WORKOUTS ARE REQUIRED FOR RESULTS: There is a general belief that to get results and to have a fit body, one needs to spend hours working out at the gym. This myth originates from the assumption that quantity is better than quality. However, it is a flawed one. Short workouts can be effective too. In other words, if you can squeeze 30 minutes of workout time, do not let that discourage you. It is important to recognize the quality and the effort you put during your workout regimes.</p>
   <p>TRAINING EVERYDAY GIVES BETTER OUTCOMES: A lot of us wrongly believe that working out relentlessly every single day is a good way to yield results. However, the truth remains that rest days are important to recover and recuperate. Experts believe that working out every single day does more harm than good. Emily Hutchins, a Performance Enhancement Specialist says in an interview “If you never change the oil in your car, it will burn out the engine. It is the same with the human body. If you don’t take time to repair and rest, your body will fail you.”</p>
<p>ALL FIT BODIES LOOK THE SAME: Fuled by the internet and social media, fitness is generally promoted from a one size fits all perspective. However, the reality is quite different. A skinny and sculpted body does not always result in a fit body. Fitness is a way of life that generates overall wellbeing of body and mind, and not just looking a certain way. As a society, we do not consider larger bodies to be attractive. But the pursuit of a healthy body cannot be and should not be equated to a thin body.</p>
<p>UNDER-EATING HELPS IN LOSING WEIGHT: A lot of people remain under the impression that starving their body by not eating enough will help them lose weight and will also result in a fitter body. This isn’t a helpful exercise. Undereating regularly leads to a slower metabolism. With too few calories in your system day after day, your body learns to live with less and it does this by slowing down your metabolism. Further, not taking enough calories leads to a reduction of energy levels, hair loss, sleep issues and various other health problems.</p>
<p>It’s overwhelming to be a part of the fitness industry, due to the growing number of information around it. But it is important to know and realise that there is no one way to achieve a fit body. Everyone has subjective standards of fitness, which helps them utilise their body in the most optimum nature.</p>
</div>
     </div>
     

   </div>
    </div>
  )
}

export default Fitness
