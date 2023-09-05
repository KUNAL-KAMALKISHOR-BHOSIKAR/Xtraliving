import './Programs.css'
import { IoIosArrowForward } from 'react-icons/io';
import athletes from "./Img/athletes.png"
import Adults from "./Img/Adults.png"
import customer from "./Img/customer.png"
import parents from "./Img/parents.png"
import corpo from "./Img/corpo.png"
import custom from "./Img/custom.png"
import line from "./line.png"
import { Link } from 'react-router-dom';

const Programs=()=>{
return(
<div className='programs'
style={{backgroundImage: `url(${line})`,
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
}}>
    <div className="space"></div>
    <div className="two-programs">
   
    <div className='program'> 
    
<div className='program-detail'>
    <h1>Performance Programs</h1>
    <p>A 12-month journey fine-tuning physical 
    vigour and mental fortitude for <br/>
   -athletes, it's the edge: peak physique and mental 
    tenacity.<br/>
    -senior leaders it's the catalyst:
     boosting stamina, sharpening focus, and 
     elevating decision-making.</p>
</div>

<div className='program-list'>
   
<div className='program-item'>
<img src={athletes} height={250} alt=""/>
<div className='program-text'>
    <p>ATHLETES</p>
 <Link to="/athletes" ><span>Know more <IoIosArrowForward/></span></Link>
</div> 
</div>
<div className='program-item'>
<img src={Adults} height={250} alt=""/>
<div className='program-text'>
    <p>CXOs</p>
  <Link to="/performance"><span>Know more <IoIosArrowForward/></span></Link> 
</div>
</div>
<div className='program-item'>
<img src={customer} height={250} alt=""/>
<div className='program-text'>
    <p>CUSTOM</p>
   <a href="https://forms.myfunc.in/myfunc/form/ConnectwithRishi/formperma/HkPge_e3v8bQoOpsQka6qPmQ5YBTC29DAGd2H5FJaHk"> <span>  Know more <IoIosArrowForward/></span></a>
</div>
</div>

</div>

</div>


<div className='program-detail2'>
    <h1>Our Workshop</h1>
    <p>90-minute workshops to<br/>-Equip parents with essential knowledge on movement and
     nutrition, laying the foundation for their
      children's optimal health.
    <br/> -Empower your employees with the proper knowledge
     on movement and nutrition, fostering optimal physical
      and mental wellness.</p>
</div>
<div className='program-list'>
    <div className='program-item'>
<img src={parents} height={250} alt=""/>
<div className='program-text'>

    <p>PARENTS</p>
   <Link to="/parents" ><span>Know more <IoIosArrowForward/></span></Link>
</div>
</div>
<div className='program-item'>
<img src={corpo} height={250} alt=""/>
<div className='program-text'>
  <p>CORPORATES</p>
 <Link to="/workshop" >   <span>Know more <IoIosArrowForward/></span></Link>
</div>
</div>
<div className='program-item'>
<img src={custom} height={250} alt=""/>
<div className='program-text'>
<p>CUSTOM</p>   
<a href="https://forms.myfunc.in/myfunc/form/ConnectwithRishi/formperma/HkPge_e3v8bQoOpsQka6qPmQ5YBTC29DAGd2H5FJaHk"> <span>Know more <IoIosArrowForward/></span></a>
</div>
</div>
</div>
</div>
<div className="space"></div>
</div>

    )
}
export default Programs;