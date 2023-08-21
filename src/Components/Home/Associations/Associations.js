import ass1 from "./ass1.png";
import ass2 from "./ass2.png";
import ass31 from "./ass31.png";
import ass32 from "./ass32.png";
import ass33 from "./ass33.png";
import ass34 from "./ass34.png";
import ass35 from "./ass35.png";
import line from "./line.png"
import "./Associations.css"

const Associations=()=>{
return(
    <div className="Associations"
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',  
    }}>
        
    <img className="ass1" src={ass1}  alt="" height={140} />
    <img src={ass2} className="ass2" alt="" height={140} />

    <div className="ass3">

    <img src={ass31}  className="ass31" height={100}  alt="" />
    <img src={ass32}  className="ass32" height={50}  alt="" />
    <img src={ass33}  className="ass33" height={110}  alt="" />
    <img src={ass34}  className="ass34" height={80}  alt="" />
    <img src={ass35}  className="ass35" height={110}  alt="" />

    </div>
   

    </div>
)
}
export default Associations