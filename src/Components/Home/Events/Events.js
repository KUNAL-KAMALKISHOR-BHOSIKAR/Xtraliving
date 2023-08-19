import "./Events.css"
import  offers from  "./Offers.png"
import line from "./line.png"
const Events =()=>{
    return(
        <div className="Events"
        style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>
            <img src={offers} alt="" height={600} />
        </div>
    )
}
export default Events