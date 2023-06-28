import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {

  const handleClick = () => {
    // Animate Links
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });

    // Hamburger Animation
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("toggle");
  };

  return (
    <section className='navbarr'>
      <nav>
        <div className="logo">
        <Link to="/">
        <img src="/img/cofee.png" alt="Logo" />
        </Link>
          
        </div>

        <div className="hamburger" onClick={handleClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li>
            <HashLink to="#homee">HOME</HashLink>
          </li>
          <li>
            <HashLink to="#menu">MENU</HashLink>
          </li>
          <li>
            <HashLink to="#aboutt">ABOUT</HashLink>
          </li>
          <li>
            <HashLink to="#servicee">SERVICE</HashLink>
          </li>
          <li>
            <HashLink to="#fulshop">SHOP</HashLink>
          </li>
          <li>
            <Link to="/Content" className="login-button">Login</Link>
          </li>
          <li>
            <Link to="/Content" className="join-button">Join</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
