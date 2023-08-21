
import "./About.css"
import Colab from "./Colab/Colab";
import Experts from "./Experts/Experts";
import Founder from "./Founder/Founder";
import Healthy from "./Healthy/Healthy";
import Highlights from "./Highlights/Highlights";
import Naturaltwo from "./Natural/Naturaltwo";
import Nature from "./Natural/Nature";
const About=()=>{
    return(
        <div className="About">

        <Healthy/>
        <Nature/>
        <Naturaltwo/>
        <Colab/>
        <Highlights/>
        <Experts/>
        <Founder/>
        </div>
    )
}
export default About;