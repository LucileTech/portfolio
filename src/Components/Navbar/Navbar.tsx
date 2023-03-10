import React, { useState, useEffect } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import linkedin from "./../../Images/linkedin.png";
import github from "./../../Images/github.png";
import logo from "./../../Images/logowhite.png";

const NavBar = (props: { theme: String }) => {
  const handleClickScrollStack = () => {
    const element = document.getElementById("stackSection");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollProjects = () => {
    const element = document.getElementById("projectsSection");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollAbout = () => {
    const element = document.getElementById("aboutSection");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollContact = () => {
    const element = document.getElementById("contactSection");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="Navbar">
        <img className={`LT-logo-${props.theme}`} src={logo} alt="logo" />

        <h3 onClick={handleClickScrollStack} className={`${props.theme}-link`}>
          Tech Stack
        </h3>
        <h3 onClick={handleClickScrollAbout} className={`${props.theme}-link`}>
          About
        </h3>
        <h3
          onClick={handleClickScrollProjects}
          className={`${props.theme}-link`}
        >
          Projects
        </h3>

        <h3
          onClick={handleClickScrollContact}
          className={`${props.theme}-link`}
        >
          Contact
        </h3>
        <a href="https://www.linkedin.com/in/lucile-tronczyk/">
          <img className="socials" src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/LucileTech">
          <img className="socials" src={github} alt="github" />
        </a>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
