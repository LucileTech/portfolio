import React, { useState, useEffect } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const NavBurger = (props: { theme: String }) => {
  return (
    <>
      <div className={`${props.theme}-link Navburger`}>
        <Link className={`${props.theme}-link burger-nav`} to="/">
          Home
        </Link>
        <Link className={`${props.theme}-link burger-nav`} to="/works">
          Work
        </Link>
        <Link className={`${props.theme}-link burger-nav`} to="/about">
          About
        </Link>
        <Link className={`${props.theme}-link burger-nav`} to="/contact">
          Contact
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/lucile-tronczyk/"
          className={`${props.theme}-link burger-nav`}
        >
          Linkedin
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/LucileTech"
          className={`${props.theme}-link burger-nav`}
        >
          Github
        </a>
        {/* <div className="menu">MENU</div> */}
      </div>
      <Outlet />
    </>
  );
};

export default NavBurger;
