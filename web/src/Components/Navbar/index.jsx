import React, { useState } from "react";
import "./styles.css";
import Logo from "../../Images/Logo.webp";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <div id="nav-container">
        <div id="drawer-nav" className={showDrawer ? "show-drawer" : " "}>
          <a href="">HOME</a>
          <a href="">SERVICES</a>
          <a href="">ISEO</a>
          <a href="">ABOUT</a>
          <a href="">CONTACT US</a>
          <a href="">Lang</a>
        </div>
        <nav id="navbar">
          <a href="">HOME</a>
          <a href="#services-container">SERVICES</a>
          <a href="">ISEO</a>
          <div id="logo-img">
            <img src={Logo} alt="Logo" />
          </div>
          <a href="#about-container">ABOUT</a>
          <a href="#contact-info">CONTACT US</a>
          <a href="">Lang</a>
          <Bars3BottomRightIcon
            id="burger-nav"
            onClick={() => {
              setShowDrawer(!showDrawer);
            }}
          />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
