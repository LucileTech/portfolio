import React from "react";
import { Outlet } from "react-router-dom";

const NavBurger = (props: { theme: String }) => {
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
      <div className={`Navburger ${props.theme}`}>{navigationLinks}</div>
      <Outlet />
    </>
  );
};

export default NavBurger;
