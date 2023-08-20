import Associations from "./Associations/Associations";
import Believers from "./Believers/Believers";
import Events from "./Events/Events";
import Hero from "./Hero/hero"
import News from "./News/News";
import Products from "./Products/Products";
import Programs from "./Programs/Programs";
import Reviews from "./Reviews/Reviews";
import "./Home.css"
const Home =()=>{
    return(
        <div className="Home">
    <Hero/> 
    <Products/>
    <Programs/>
    <Events/>
    <Reviews/>
    <Associations/>
    <News/>
    <Believers/>
        </div>
    )
}
export default Home;