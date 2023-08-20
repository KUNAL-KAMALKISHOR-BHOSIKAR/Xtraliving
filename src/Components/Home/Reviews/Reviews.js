import "./Reviews.css"
import customer from "./customer.png"
import line from "./line.png"
const Reviews=()=>{
    return(
    <div className="Reviews"  
    style={{backgroundImage:`url(${line})`,
    backgroundRepeat: 'no-repeat',
    }}>
     
        <h1>What customer say about us ?</h1>  
        <img src={customer} height={500} alt="" /> 
            </div> 
   
    )
}
export default Reviews;