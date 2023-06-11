import React,{useState} from 'react';
import {Link, Outlet}  from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    const[isMobile,setIsMobile]=useState(false);
  return (
    <nav className="navbar">
        <h3 className="logo">Hair <span className="crimson">with</span> <span className='pop'>Flair</span></h3>
        <ul className={isMobile?"nav-links-mobile":"nav-links"}
        onClick={()=>setIsMobile(false)}
        >
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/Filter" className="lookbook">
                <li>LookBook</li>
            </Link>
            <Link to="/Donation" className="donation">
                <li>Hair Donation</li>
            </Link>
            <Link to="/Contact" className="feedback">
                <li>Feedback</li>
            </Link>
            <Link to="/Sign" className="formnav">
                <li>Signin</li>
            </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
            {isMobile?<i className="fas fa-times"></i>:<i className="fas fa-bars"></i>}
        </button>
        <Outlet/>
    </nav>
    
  )
}
export default Navbar;
