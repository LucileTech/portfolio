import React, { useState, useEffect } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const NavBar = (props: { theme: String }) => {
  return (
    <>
      <div className="Navbar">
        <Link className={`${props.theme}-link`} to="/">
          Home
        </Link>
        <Link className={`${props.theme}-link`} to="/works">
          Work
        </Link>
        <Link className={`${props.theme}-link`} to="/about">
          About
        </Link>
        <Link className={`${props.theme}-link`} to="/contact">
          Contact
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/lucile-tronczyk/"
          className={`${props.theme}-link`}
        >
          Linkedin
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/LucileTech"
          className={`${props.theme}-link`}
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
