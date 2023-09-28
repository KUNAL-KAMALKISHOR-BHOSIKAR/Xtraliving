import { useState } from "react";
import "./Navbar.css"
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from "react-router-dom";
import Responsive from "./Responsive";
import { FaRegCircleUser } from 'react-icons/fa6';
import { useUserAuth } from "../../State/UserAuthContext";
// import { useStateValue } from "../../State/StateProvider";
const Navbar=()=>{
    const {user} = useUserAuth();
    const [open, setOpen] = useState(false)
    const openNav=()=>{
        setOpen(!open)
    }
    return(
    <div className="Navbar">
   {user ?
 <Link to="profile">{user.photoURL? <img className="user-profile" src={user.photoURL} alt="" />: <FaRegCircleUser className="login"/>}</Link>: 
    <Link to="login"><span className="login">Login</span></Link>      
   }
   
        
     <BiMenuAltRight onClick={openNav} /> 
    {
    open&&(
        <Responsive close={openNav} />
    )
    }
        </div>
    );
}
export default Navbar;