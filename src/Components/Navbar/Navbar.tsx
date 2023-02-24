import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <Link to="/">Home</Link>
        <Link to="/works">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/lucile-tronczyk/"
        >
          Linkedin
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/LucileTech"
        >
          Github
        </a>
        {/* <div className="menu">MENU</div> */}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
