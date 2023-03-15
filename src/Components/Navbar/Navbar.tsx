import React, { useState, useEffect } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import linkedin from "./../../Images/linkedin.png";
import github from "./../../Images/github.png";
import logo from "./../../Images/logowhite.png";
import NavBurger from "./../../Components/Navbar/Navburger";

const NavBar = ({ theme }: { theme: string }) => {
  const [hamburgerOpen, sethamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    sethamburgerOpen(!hamburgerOpen);
  };

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
      <div className={`Navbar-${theme}`}>
        <img className={`LT-logo-${theme}`} src={logo} alt="logo" />

        <div className={`Navbar`}>
          <h3 onClick={handleClickScrollStack} className={`${theme}-link`}>
            Tech Stack
          </h3>
          <h3 onClick={handleClickScrollAbout} className={`${theme}-link`}>
            About
          </h3>
          <h3 onClick={handleClickScrollProjects} className={`${theme}-link`}>
            Projects
          </h3>

          <h3 onClick={handleClickScrollContact} className={`${theme}-link`}>
            Contact
          </h3>
        </div>

        <a href="https://www.linkedin.com/in/lucile-tronczyk/">
          <img className={`${theme}-socials`} src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/LucileTech">
          <img className={`${theme}-socials`} src={github} alt="github" />
        </a>
        <div className="hamburger" onClick={toggleHamburger}>
          <div className={`${theme} burger burger1`} />
          <div className={`${theme} burger burger2`} />
          <div className={`${theme} burger burger3`} />
        </div>
      </div>

      <div>{!hamburgerOpen ? "" : <NavBurger theme={theme}></NavBurger>}</div>

      <Outlet></Outlet>
    </>
  );
};

export default NavBar;
