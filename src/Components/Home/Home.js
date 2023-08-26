import Associations from "./Associations/Associations";
import Believers from "./Believers/Believers";
import Events from "./Events/Events";
import Hero from "./Hero/hero"
import News from "./News/News";
import Programs from "./Programs/Programs";
import Reviews from "./Reviews/Reviews";
import "./Home.css"
import Our from "./Our/Our";
import Ourtwo from "./Our/Ourtwo";
import program from "./img/program.png"
import products from "./img/products.png"
import Banner from "./Banner/Banner";
import line from "./img/line.png"
const Home =()=>{
    return(
        <div className="Home">
   
    <Banner/>
    <div className="our-products"> 
    <div className="prosheader">
       <img src={products} alt="" height={800} />
    </div>
    <div className="pros" 
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>
    <Our/>
    <Ourtwo/>
    </div>
    </div>  
    <div className="our-program"> 
    
    <div className="items"> 
    <Programs/>
    <Events/>
    </div>
    <div className="img-item">
        <img src={program} alt="" height={800} />
    </div>
    </div> 
    <Reviews/>
    <Associations/>
    <News/>
    <Believers/>
        </div>
    )
}
export default Home;