import "./Reviews.css"
import rectangle from "./rectangle.png"
import customer from "./customer.png"
import line from "./line.png"
const Reviews=()=>{
    return(
    <div className="Reviews"  
    style={{backgroundImage:`url(${rectangle})`}}>
        <div style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex:"1"
    }}>
        <h1>What customer say about us ?</h1>  
        <img src={customer} height={500} alt="" /> 
            </div> 
    </div>
    )
}
export default Reviews;