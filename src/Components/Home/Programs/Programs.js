import './Programs.css'
import { IoIosArrowForward } from 'react-icons/io';
import athletes from "./Img/athletes.png"
import Adults from "./Img/Adults.png"
import customer from "./Img/customer.png"



const Programs=()=>{
return(
<div className='programs'>
<div className='program-detail'>
    <h1>Performance Programs</h1>
<p>A 12-month journey fine-tuning physical 
    vigour and mental fortitude for -athletes, 
    <br/> it's the edge: peak physique and mental 
    tenacity. -senior leaders it's the catalyst:
        boosting stamina, sharpening focus, and 
        elevating decision-making.</p>
</div>
<div className='program-list'>
    <div className='program-item'>
<img src={athletes} height={250} alt=""/>
<div className='program-text'>
    <p>ATHLETES</p>
    <span>Know more <IoIosArrowForward/></span>
</div>
</div>
<div className='program-item'>
<img src={Adults} height={250} alt=""/>
<div className='program-text'>
    <p>ATHLETES</p>
    <span>Know more <IoIosArrowForward/></span>
</div>
</div>
<div className='program-item'>
<img src={customer} height={250} alt=""/>
<div className='program-text'>
    <p>ATHLETES</p>
    <span>Know more <IoIosArrowForward/></span>
</div>
</div>
</div>
</div>
    )
}
export default Programs;