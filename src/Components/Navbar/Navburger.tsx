import React from "react";
import { Outlet } from "react-router-dom";

type NavBurgerProps = {
  theme: string;
};

const NavBurger: React.FC<NavBurgerProps> = ({ theme }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sectionNames: string[] = [
    "aboutSection",
    "reviewsSection",
    "stackSection",
    "projectsSection",
    "contactSection",
  ];

  const navigationLinks = sectionNames.map((sectionName, index) => (
    <div
      key={index}
      onClick={() => scrollToSection(sectionName)}
      className={`burger-nav ${index === 0 ? "firstNavLink" : ""}`}
    >
      {sectionName.charAt(0).toUpperCase() + sectionName.slice(1, -7)}
    </div>
  ));

  return (
    <>
      <div className={`Navburger ${theme}`}>{navigationLinks}</div>
      <Outlet />
    </>
  );
};

export default NavBurger;
