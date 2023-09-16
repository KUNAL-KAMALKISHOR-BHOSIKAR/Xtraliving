import "./Footer.css"
import logo from "./logo.png"
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
const Footer=()=>{
return(
    <div className="Footer">
        <div className="part-1">
    <img src={logo} height={25} alt="" />
    <div className="list">
    <div  className="list1"> 
    <ul>
        <li>About us</li>
        <li>Products</li>
        <li>FUNc Community</li>
    </ul>
    </div>

    <div  className="list1"> 
    <ul>
        <li>Media</li>
        <li>latest videos</li>
        <li>Articles</li>
    </ul>
    </div>

    <div  className="list1"> 
    <ul>
        <li>Contact</li>
        <li>Privacy policy</li>
     
    </ul>
    </div>
    </div>
  
</div>
<div className="part-2">
    <div className="terms">
        <span>Privacy</span>
        <strong>|</strong>
        <span>Terms</span>
    </div>
    <div className="socials">
     <a href="https://www.youtube.com/@rishi9566">
      <AiFillYoutube/>   </a>  
       <a href="https://www.linkedin.com/in/xrishi/">
        <AiFillLinkedin/> </a>
      <a target="_blank" href="https://www.instagram.com/x.rishi/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR0hHCrnwgAgLkIWdZjD3cJdNhqG-GVWARl9zeLIhSzKnYL3hG6kPwePlBk">
         <AiFillInstagram/> </a>
      <a target="_blank" href="https://twitter.com/rishi_xpl">
         <AiFillTwitterSquare/> </a>
      <a target="_blank" href="https://www.facebook.com/rishikesh.kumar.75054">
         <AiFillFacebook/> </a>
    </div>
   
</div>
    </div>
)
}
export default Footer;