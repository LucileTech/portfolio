import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import linkedin from "./../../Images/linkedin.png";
import github from "./../../Images/github.png";
import logo from "./../../Images/logowhite.png";
import NavBurger from "./../../Components/Navbar/Navburger";

const NavBar = ({ theme }: { theme: string }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sectionIds = [
    "aboutSection",
    "reviewsSection",
    "stackSection",
    "projectsSection",
    "contactSection",
  ];

  return (
    <>
      <div className={`allNavbar ${theme}`}>
        <img
          onClick={() => scrollToSection("homeSection")}
          className={`LT-logo-${theme}`}
          src={logo}
          alt="logo"
        />

        <div className={`Navbar`}>
          {sectionIds.map((sectionId) => (
            <h3
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`link ${theme}`}
            >
              {sectionId.replace("Section", "")}
            </h3>
          ))}
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

      {hamburgerOpen && <NavBurger theme={theme} />}

      <Outlet />
    </>
  );
};

export default NavBar;
