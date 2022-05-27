import React from 'react'
import "./Navbar.css";
import Jermtheory from "../../assets/Jermtheory.svg";

const Navbar = () => {
  return (
    <div className='nav__padding'>
      <div className="navigationbar">
        <img src={Jermtheory} className='logo' alt='logo' />
        <nav>
        <ul className="nav__links">
          <li><a id='Header' href='#Header'>Home</a></li>
          <li><a id='Work' href='#Work'>My work</a></li>
          <li><a id='About' href='About'>About me</a></li>
        </ul>
        </nav>
        {/* <a className='buttonlink' href='#navbar'><button className='custom__button'>Download my portfolio</button></a> */}
        
      </div>
    </div>
  )
}

export default Navbar