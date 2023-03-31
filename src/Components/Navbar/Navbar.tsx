import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import linkedin from "./../../Images/linkedin.png";
import github from "./../../Images/github.png";
import logo from "./../../Images/logowhite.png";
import NavBurger from "./../../Components/Navbar/Navburger";

const NavBar = ({ theme }: { theme: string }) => {
  const [hamburgerOpen, sethamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    sethamburgerOpen(!hamburgerOpen);
  };

  const handleClickScrollHome = () => {
    const element = document.getElementById("homeSection");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
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
      <div className={`allNavbar ${theme}`}>
        <img
          onClick={handleClickScrollHome}
          className={`LT-logo-${theme}`}
          src={logo}
          alt="logo"
        />

        <div className={`Navbar`}>
          <h3 onClick={handleClickScrollStack} className={`link ${theme}`}>
            Tech Stack
          </h3>
          <h3 onClick={handleClickScrollAbout} className={`link ${theme}`}>
            About
          </h3>
          <h3 onClick={handleClickScrollProjects} className={`link ${theme}`}>
            Projects
          </h3>

          <h3 onClick={handleClickScrollContact} className={`link ${theme}`}>
            Contact
          </h3>
        </div>

        <a
          href="https://www.linkedin.com/in/lucile-tronczyk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={`socials-${theme}`} src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/LucileTech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={`socials-${theme}`} src={github} alt="github" />
        </a>
        <div className="hamburger" onClick={toggleHamburger}>
          <div className={`burger burger1 ${theme}`} />
          <div className={`burger burger2 ${theme}`} />
          <div className={`burger burger3 ${theme}`} />
        </div>
      </div>

      <div>{!hamburgerOpen ? "" : <NavBurger theme={theme}></NavBurger>}</div>

      <Outlet></Outlet>
    </>
  );
};

export default NavBar;
