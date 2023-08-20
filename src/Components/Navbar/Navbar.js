import { useState } from "react";
import "./Navbar.css"
import { BiMenuAltRight } from 'react-icons/bi';
import Responsive from "./Responsive";
const Navbar=()=>{
    const [open, setOpen] = useState(false)
    const openNav=()=>{
        setOpen(!open)
    }
    return(
    <div className="Navbar">
        <BiMenuAltRight onClick={openNav} />
    {
    open&&(
        <Responsive/>
    )
    }
        </div>
    );
}
export default Navbar;