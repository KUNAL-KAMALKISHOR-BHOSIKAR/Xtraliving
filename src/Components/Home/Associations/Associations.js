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
    <img src={ass1}  alt="" height={70} />
    <img src={ass2}  alt="" height={70} />

    <div className="ass3">

    <img src={ass31} height={50}  alt="" />
    <img src={ass32} height={20}  alt="" />
    <img src={ass33} height={50}  alt="" />
    <img src={ass34} height={30}  alt="" />
    <img src={ass35} height={60}  alt="" />
    </div>
   

    </div>
)
}
export default Associations