import React from 'react';
import './assets/css/navbar.css'
import logo from "./assets/images/logo.svg"


function Navbar(){
    return(
      <div className="nav">
        <img className="svgLogo" src={logo} alt="logo"/>
        <input className="searchBar" type="text" placeholder="Search something"></input>
        <div className="button">
          <button className="button1">Sign In</button>
          <button className="button2">Sign Up</button>
        </div>
      </div>
    )
}

export default Navbar;