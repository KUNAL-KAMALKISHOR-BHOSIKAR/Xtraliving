import "./Products.css"
import products from "./product.png"
import productf from "../Img/productf.png"
import productm from "../Img/productm.png"
import { BsArrowRight } from 'react-icons/bs';
import line from "./line.png"

const Products=()=>{
    return(
    <div className="product"
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
        
    }}>
        
<div className="products">
    <img className="pro-product" src={products}  alt=""/>
    <div className="pro-area">
<div className="pro-text pro-text1 ">
    <h2>FUNc</h2>
<p> <strong className="func">FUNc</strong> is a health-tech program designed
    for busy individuals by spine specialists,
    physiotherapists and fitness experts. 
    </p>
    <span>Boost mobility, strength, and endurance
    with our solution. Weight loss? Just a bonus.
    Our compact kit pairs with a quick daily 5-15
    min routine and nutritional advice, designed
    for home or office. Commit and stave off
    joint pain, obesity, and lifestyle
    ailments.</span> <br/>
    <button>Know More <BsArrowRight/></button>
</div>
        <div className="pro-img">
        <img className="female" src={productf} height={200} alt="" />
        </div>
            </div>
        </div>
        <div className="products products2">
  
    <div className="pro-img">
        <img src={productm}  alt="" />
        </div>
    <div className="pro-area">
<div className="pro-text pro-text2 ">
    <h2>MEdX</h2>
<p> <strong className="func">MEdX</strong> MEdX is a 
cutting-edge platform co-created by tech and medical
 elites, revolutionizing neuroscience and anatomy 
 education for medical students.
    </p>
    <span>Tailored for premier medical institutes, 
        MEdX aspires to transform conventional learning,
         offering students an immersive and comprehensive
          educational journey, priming them to become the
           next generation of healthcare visionaries.</span> <br/>
    <button>Know More <BsArrowRight/></button>
</div>     
            </div>
        </div>
        </div>
    );
   
}
export default Products;