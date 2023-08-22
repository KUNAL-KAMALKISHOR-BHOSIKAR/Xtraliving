import ass1 from "./ass1.png";
import ass2 from "./ass2.png";
import ass3 from "./ass3.png";

import line from "./line.png"
import "./Associations.css"

const Associations=()=>{
return(
    <div className="Associations"
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',  
    }}>
        <h1>Our Associations</h1>
    <img className="ass1" src={ass1}  alt="" height={100} />
    <img src={ass2} className="ass2" alt="" height={100} />
     <img src={ass3} alt="" className="ass3" height={100} /> 
    <div >

   
    </div>
   

    </div>
)
}
export default Associations