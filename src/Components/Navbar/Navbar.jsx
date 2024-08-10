import React, { useEffect, useState } from "react";
// import   '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./navbar.css";
import Logo from "../../assets/logo.png";
import menu_icon from '../../assets/menu-icon.png'
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky,setSticky]=useState(false);
  const [mobileMenu,setMobileMenu]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >600 ? setSticky(true):setSticky(false)
    })
  },[]);

  const toggleMenu=()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <>
      <nav className={`container-box ${sticky ? 'dark-nav' : ""}`}>
        <img className="logo" src={Logo} alt="Logo" />
        <ul className={mobileMenu ? "" : 'hide-menu'}>
          <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link> </li>
          <li><Link to="programs" smooth={true} offset={-260} duration={500}> Program</Link>  </li>
          <li> <Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
          <li> <Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
          <li> <Link to="testimonial" smooth={true} offset={-300} duration={500} >Testimonial</Link> </li>
          <li>
            <Link to="contact" smooth={true} offset={-240} duration={500} className="btn-common"> Contact Us </Link>
          </li>
        </ul>
        <img class="menu_icon" src={menu_icon} alt="menu-icon" onClick={toggleMenu} />
      </nav>

      {/* bootstarp nav */}
      <nav class="navbar navbar-expand-lg navbar-light bg-primary d-none">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className="logo" src={Logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Program
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Campus
                </a>
              </li>
              <li class="nav-item">
                <button className="btn bg-white px-5 py-2"> Contact Us </button>
              </li>
            </ul>
            <form class="d-flex d-none">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
