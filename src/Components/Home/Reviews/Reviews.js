import "./Reviews.css"
import customer from "./customer.png"
import React, { useRef } from "react";
import line from "./line.png"
import left from "../News/left.png"
import right from "../News/right.png"
const Reviews=()=>{
    let box = useRef(null);

    const Left = () => {
      if (box.current) {
        let width = box.current.clientWidth;
        box.current.scrollLeft -= width;
      }
    };
  
    const Right = () => {
      if (box.current) {
        let width = box.current.clientWidth;
        box.current.scrollLeft += width;
      }
    };
    return(
    <div className="Reviews"  
    style={{backgroundImage:`url(${line})`,
    backgroundRepeat: 'no-repeat',
    }}>
     
        <h1>What customer say about us ?</h1> 
        <div className="customer-video" ref={box}>
        <img loading='lazy' src={customer} height={450} alt="" /> 
        </div> 
        <div className="review-arrows">
        <img onClick={Left} src={left} alt="" height={40} />
        <img onClick={Right} src={right} alt="" height={40} />
        </div>
            </div> 
   
    )
}
export default Reviews;