import { useState } from "react";
import "./Navbar.css"
import { BiMenuAltRight } from 'react-icons/bi';
import { BiLogInCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import Responsive from "./Responsive";
const Navbar=()=>{
    const [open, setOpen] = useState(false)
    const openNav=()=>{
        setOpen(!open)
    }
    return(
    <div className="Navbar">
       <Link to="login">  <BiLogInCircle className="login"/></Link>
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