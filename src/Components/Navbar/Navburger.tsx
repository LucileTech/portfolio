import React, { useState, useEffect } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const NavBurger = (props: { theme: String }) => {
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
      <div className={`${props.theme}-link Navburger ${props.theme}`}>
        <div
          onClick={handleClickScrollStack}
          className={`${props.theme}-link burger-nav`}
        >
          Stack
        </div>
        <div
          onClick={handleClickScrollAbout}
          className={`${props.theme}-link burger-nav`}
        >
          About
        </div>
        <div
          onClick={handleClickScrollProjects}
          className={`${props.theme}-link burger-nav`}
        >
          Projects
        </div>

        <div
          onClick={handleClickScrollContact}
          className={`${props.theme}-link burger-nav`}
        >
          Contact
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBurger;
