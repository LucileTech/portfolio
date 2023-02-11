import React from "react";
// import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar-entire">
        <div className="navbar-left">
          <Link to="/">Home</Link>
          <Link to="/">Work</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Linkedin</Link>
          <Link to="/">Github</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
