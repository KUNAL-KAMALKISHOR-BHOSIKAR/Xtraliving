import React from 'react'
import "./Article.css"
import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from 'react-icons/io';
function Article() {
  return (
<div className='Article'>
<h2>New article</h2>
<div className="arti-area">
<div className="arti">
    <img src="https://www.rishi.fit/static/media/blog-7.a0bb075e77b48c270377.png" alt="" />
   <div className="arti-txt">
 <span>Innovation and entrepreneurship</span>
<p>Innovation and entrepreneurship are two
concepts that are closely intertwined
yet distinct. While innovation refers
to creating new ideas, products, services,
or processes, entrepreneurship refers to
    bringing those ideas to the market and
    building a business around them.... <br/>
    <Link to='/blogs/entrepreneurship'><IoIosArrowDropright className='arrow' /></Link> </p>
    </div>

</div>

<div className="arti">
    <img src="https://www.rishi.fit/static/media/blog-8.bc3bb238fe3028ac343d.png" alt="" />
    <div className="arti-txt">
 <span>Gentle parenting</span>
<p>Gentle parenting is an approach to raising children rooted
     in respect, empathy, and understanding. It focuses on building
      a strong, loving relationship between parent and child and
       fostering an environment that supports a child's emotional,
        physical, and intellectual growth.....<br/>
        <Link to="/blogs/parenting"><IoIosArrowDropright className='arrow' /></Link></p>
    </div>
</div>

<div className="arti">
    <img src="https://www.rishi.fit/static/media/blog-9.2ad706e57583c5502dbb.png" alt="" />
    <div className="arti-txt">
 <span>Functional health</span>
<p>Functional health is an emerging approach to healthcare that
     emphasizes the optimal functioning of the body and its systems
      rather than simply treating symptoms or illnesses. This
       approach looks at the root causes of health problems and
        seeks to address them rather than just managing symptoms
         with medication or surgery....<br/>
         <Link to="/blogs/Functional'"><IoIosArrowDropright className='arrow' /></Link></p>
    </div>
</div>

<div className="arti">
    <img src="https://www.rishi.fit/static/media/blog-10.a2d0593f2773efcd7712.png" alt="" />
    <div className="arti-txt">
 <span>Public speaking</span>
<p>Rishikesh Kumar is passionate about sharing his knowledge and
     expertise through public speaking. He believes that public
      speaking is a powerful tool that can inspire and motivate
       individuals to take action towards improving their health and
        well-being....<br/>
        <Link to="/blogs/Publicspeaking" ><IoIosArrowDropright className='arrow' /></Link></p>
    </div>
</div>

<div className="arti">
    <img src="https://www.rishi.fit/static/media/article-1.a1fb9ab83e4eb76b5b4a.png" alt="" />
    <div className="arti-txt">
 <span>Physical fitness in senior women</span>
<p>Haven’t we all heard about the benefits and the importance of physical
     fitness in our lives? But a majority of the time physical fitness
      remains as a topic of discussion only among the relatively young
       population of our society. Rarely do we find the need to include
        and encourage the seniors of our population to be physically
         fit....<br/>
         <Link to="/blogs/seniorwomen"><IoIosArrowDropright className='arrow' /></Link></p>
    </div>
</div>

<div className="arti">
    <img src="https://www.rishi.fit/static/media/article-2.98fb438859a8f51f98fc.png" alt="" />
    <div className="arti-txt">
 <span>Superfoods</span>
<p>What if we told you that there are foods that are absolute powerhouses
     of all the nutrients together? You will be shocked right! So get
      ready to be shocked because such foods exist. They are called
       SUPERFOODS! These are foods that are extremely beneficial for
        human health due to their exceptionally high nutrient density.
         Eating superfoods enriches our bodies with all the much-needed
          nutrients and makes density....<br/>
          <Link to="/blogs/superfoods"><IoIosArrowDropright className='arrow' /></Link></p>
    </div>
</div>

<div className="arti">
    <img src="https://www.rishi.fit/static/media/article-3.cdf077e5bca46e07f37f.png" alt="" />
    <div className="arti-txt">
 <span>Nutrition for injury recovery</span>
<p>Injuries are an unpreventable part of practising and support in sport.
     The specific aftereffects of a workout incited injury may differ
      broadly relying upon the nature and seriousness of the injury.
       Injures regularly bring about discontinuance, or possibly a
        decrease, in cooperation in sport and diminished physical
         action. More extreme wounds may bring about the immobilization of a limb....<br/>
         <Link to="/blogs/injuryrecovery" ><IoIosArrowDropright className='arrow' /></Link></p>
    </div>
</div>
</div>
</div>
  )
}

export default Article