import React, { useRef, useState } from "react";

import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import nav_underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  // const openMenu = () => {
  //   menuRef.current.style.right = "0";
  // };

  // const closeMenu = () => {
  //   menuRef.current.style.right = "-3150px";
  // };

  const openMenu = () => {
    menuRef.current.classList.add("nav-menu-active");
  };

  const closeMenu = () => {
    menuRef.current.classList.remove("nav-menu-active");
  };

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          className="nav-mob-close"
          alt=""
        />
        <li>
          <AnchorLink className="anchor-link" offset={150} href="#home">
            <p
              onClick={() => {
                setMenu("home");
                closeMenu();
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={150} href="#about">
            <p
              onClick={() => {
                setMenu("about");
                closeMenu();
              }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === "about" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={150} href="#services">
            <p
              onClick={() => {
                setMenu("services");
                closeMenu();
              }}
            >
              Services
            </p>
          </AnchorLink>
          {menu === "services" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={150} href="#work">
            <p
              onClick={() => {
                setMenu("work");
                closeMenu();
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "work" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={150} href="#contact">
            <p
              onClick={() => {
                setMenu("contact");
                closeMenu();
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
      </ul>

      <div className="nav-connect">
        <a
          className="anchor-link"
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
