import "./Believers.css"
import pics from "./pics.png"
import line from "./line.png"
const Believers =()=>{
    return(
        <div className="Believers"
        style={{backgroundImage: `url(${line})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        }}>
        <h2>Early believers</h2>
        <div className="images">
        <img src={pics} alt="" height={200} />
        </div>
        </div>
    )
}
export default Believers;