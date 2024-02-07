import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";

import "./header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        
      <NavLink className="navbar-brand " style={{marginLeft: '110px'}} href="#">
              <span style={{ color: 'white' }}>Quick</span>
              <span style={{ color: 'yellow' }}>Stay</span>

      </NavLink>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
        <li className="nav-item" >
          <NavLink className="nav-link active" style={{ color: 'white' }}  href="#">Home</NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink className="nav-link" style={{ color: 'white' }} href="#">Explore QuickStay Coliving</NavLink>
        </li>
        <li className="nav-item headerlink ms-3 " >
        <MdEmail />
          <NavLink className="nav-link "style={{ color: 'white' }} href= "#">info@quickstayrooms.com</NavLink>
        </li>
        
        <li className="nav-item headerlink ms-3">
        <AiOutlineWhatsApp style={{ color: 'white', fontSize: '1.5rem',backgroundColor: 'green'  }}  />
          <NavLink className="nav-link "style={{ color: 'white' }} href= "#">+91-882798880</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
