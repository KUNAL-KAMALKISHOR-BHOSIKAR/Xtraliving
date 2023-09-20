import { useState } from "react";
import "./Navbar.css"
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from "react-router-dom";
import Responsive from "./Responsive";
import { useStateValue } from "../../State/StateProvider";
const Navbar=()=>{
    const [{user, isLoggedIn}, dispatch] = useStateValue();
    const [open, setOpen] = useState(false)
    const openNav=()=>{
        setOpen(!open)
    }
    return(
    <div className="Navbar">
      {isLoggedIn? 
      <span className="login">Logout</span>:    <Link to="login"><span className="login">Login</span></Link>
        
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