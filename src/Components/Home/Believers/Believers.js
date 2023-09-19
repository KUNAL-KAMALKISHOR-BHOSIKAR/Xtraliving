import "./Believers.css"
import pics1 from "./img/pic1.png"
import React, { useRef } from "react";
import pics2 from "./img/pic2.png"
import pics3 from "./img/pic3.png"
import pics4 from "./img/pic4.png"
import line from "./line.png"
import left from "../News/left.png"
import right from "../News/right.png"
const Believers =()=>{
    let box =  useRef(null)

    const Left=()=>{
        let width = box.current.clientWidth;
        box.current.scrollLeft -= width
    }
    const Right=()=>{
        let width = box.current.clientWidth;
        box.current.scrollLeft += width
    }
    return(
        <div className="Believers"
        style={{backgroundImage: `url(${line})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        }}>
        <h2>Early believers</h2>
        <div className="images" ref={box}>
        <img loading='lazy' src={pics1} alt="" height={230} />
        <img loading='lazy' src={pics2} alt="" height={230} />
        <img loading='lazy' src={pics3} alt="" height={230} />
        <img loading='lazy' src={pics4} alt="" height={230} />
        </div>
        <div className="arrows">
        <img onClick={Left} src={left} alt="" height={40} />
        <img onClick={Right} src={right} alt="" height={40} />
        </div>
        </div>
    )
}
export default Believers;