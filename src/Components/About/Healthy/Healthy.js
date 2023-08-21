import "./Healthy.css"
import healthy from "./img/healthy.png"
import background from "./img/Background.png"
import young from "./img/yound.png"
import line from "./img/line.png"
const Healthy=()=>{
return(
    <div className="Healthy"
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
   
    }} >
    <h1>About us</h1>
    <p>Our team comprises experts from diverse 
    backgrounds, including technology, medicine,
    and fitness. We are passionate about building
    solutions that can enable a culture of health
    and improve human performance.</p>
   
    <div className="second-div"
    style={{backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: "cover",
    width:"100%",
    
    }}>
         <img src={healthy} alt="Healthy" height={300} />
    <h1>Making Healthy Happen </h1>
    <p>Through our combined expertise, we are dedicated
to developing innovative solutions that can help
people lead healthier and happier lives.
We believe technology can be a powerful tool
for promoting healthy habits and practices.
We are committed to leveraging our expertise
to create solutions that can transform health
and well-being .
</p>
<p>Our team is focused on delivering solutions
backed by our six years of deep research.
It can be customized to meet each
individual's unique needs. We
believe that by empowering people
with the tools and resources they
need to improve their performance,
we can help them achieve their
full physical and mental potential.
    </p>
    <p> Thank you for considering our team
    as a partner in your better
    health and well-being journey.
    We look forward to working with
        you to help you achieve your
        goals and improve your performance.</p>
        </div>
        <div 
         style={{backgroundImage: `url(${young})`,
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
            height:"500px",
         width:"100%",
         backgroundSize: "contain",
         }}>

        </div>
</div>
)
}
export default Healthy;