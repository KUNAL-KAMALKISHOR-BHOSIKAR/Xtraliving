import "./Healthy.css"
import healthy from "./img/healthy.png"
import background from "./img/Background.png"
import forsmall from "./img/forsmall.png"
import line from "./img/line.png"
import forlarge from "./img/forlarge.png"
const Healthy=()=>{
return(
    <div className="Healthy"
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
   
    }} >
    <h1>About us</h1>
 
   
    <div className="second-div"
    style={{backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: "cover",
    width:"100%",
    
    }}>
         <img src={healthy} alt="Healthy" height={300} />
    <h1>Making Healthy Happen </h1>
    <p>Our team comprises experts from diverse 
    backgrounds, including technology, medicine,
    and fitness. We are passionate about building
    solutions that can enable a culture of health
    and improve human performance.</p>
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
        <div className="know" >
            <img src={forsmall} className="forsmall" alt=""height={300} />
    <img src={forlarge} alt="" height={500} />
       <div className="txt">
        <span>WE HELP YOU STAY HEALTHY</span>
        <h1>You should know</h1>
        <p>Many times we see the effect but fail to see the
    cause. We see poor performance, injury,
    lethargy, weakness and loss of focus but
fail to understand what caused the same.
In our conquest to understand the cause and
effect in the last two decades, we
understood a simple solution to the most
complex and vexing problem of losing
vitality. Striving for development,
we lost connection with nature, which
has nurtured us for a million years.
We started developing hi-tech
gadgets and products to improve our
fitness level but failed to notice
a few fundamentals we were born with.
    We are moving far away from reality in 
    pursuit of ease and luxury.</p>
</div>
        </div>
</div>
)
}
export default Healthy;