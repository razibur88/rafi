import React from 'react'
import "./header.css"
import Logo from "../../assets/logo1.png"

const Header = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header